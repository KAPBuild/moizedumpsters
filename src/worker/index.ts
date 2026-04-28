import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono<{ Bindings: Env }>();

app.use("/api/*", cors());

app.get("/api/", (c) => c.json({ status: "ok", message: "Moize Dumpsters API" }));

app.post("/api/quote", async (c) => {
  try {
    const data = await c.req.json();

    if (!data.name || !data.phone || !data.email || !data.address) {
      return c.json({ error: "Missing required fields" }, { status: 400 });
    }

    await sendEmail(c.env.RESEND_API_KEY ?? '', {
      subject: `New Quote Request from ${data.name}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Address:</strong> ${data.address}</p>
        ${data.dumpsterSize ? `<p><strong>Dumpster Size:</strong> ${data.dumpsterSize}</p>` : ''}
        ${data.startDate ? `<p><strong>Start Date:</strong> ${data.startDate}</p>` : ''}
        ${data.notes ? `<p><strong>Notes:</strong> ${data.notes}</p>` : ''}
        <p><strong>Submitted:</strong> ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })}</p>
      `,
    });

    return c.json({
      success: true,
      message: "Quote request received. We'll contact you within 24 hours.",
      requestId: Math.random().toString(36).substr(2, 9),
    }, { status: 200 });
  } catch (error) {
    console.error("Quote request error:", error);
    return c.json({ error: "Failed to process quote request" }, { status: 500 });
  }
});

app.post("/api/contact", async (c) => {
  try {
    const data = await c.req.json();

    if (!data.name || !data.phone || !data.email || !data.message) {
      return c.json({ error: "Missing required fields" }, { status: 400 });
    }

    await sendEmail(c.env.RESEND_API_KEY ?? '', {
      subject: `New Contact Form Message from ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <p style="background:#f5f5f5;padding:16px;border-radius:6px;">${data.message.replace(/\n/g, '<br>')}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })}</p>
      `,
    });

    return c.json({
      success: true,
      message: "Your message has been received. We'll get back to you soon.",
      requestId: Math.random().toString(36).substr(2, 9),
    }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return c.json({ error: "Failed to process contact form" }, { status: 500 });
  }
});

// ── STRIPE CHECKOUT ──────────────────────────────────────────────────────────

const DUMPSTER_SIZES: Record<string, { amount: number; name: string }> = {
  '15': { amount: 29900, name: '15 Yard Dumpster Rental (7 Days)' },
  '20': { amount: 39900, name: '20 Yard Dumpster Rental (7 Days)' },
  '30': { amount: 49900, name: '30 Yard Dumpster Rental (7 Days)' },
};

app.post("/api/create-checkout-session", async (c) => {
  try {
    const data = await c.req.json() as {
      size: string;
      name: string;
      email: string;
      phone: string;
      address: string;
      startDate?: string;
      notes?: string;
      returnUrl: string;
    };

    const { size, name, email, phone, address, startDate, notes, returnUrl } = data;

    if (!size || !name || !email || !phone || !address || !returnUrl) {
      return c.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const sizeConfig = DUMPSTER_SIZES[size];
    if (!sizeConfig) {
      return c.json({ error: 'Invalid dumpster size' }, { status: 400 });
    }

    const params = new URLSearchParams({
      'ui_mode': 'embedded',
      'mode': 'payment',
      'return_url': returnUrl,
      'line_items[0][price_data][currency]': 'usd',
      'line_items[0][price_data][unit_amount]': String(sizeConfig.amount),
      'line_items[0][price_data][product_data][name]': sizeConfig.name,
      'line_items[0][price_data][product_data][description]': `Delivery to: ${address} · Delivery, pickup & disposal included`,
      'line_items[0][quantity]': '1',
      'customer_email': email,
      'metadata[customer_name]': name,
      'metadata[phone]': phone,
      'metadata[address]': address,
      'metadata[size]': `${size} Yard`,
      'metadata[start_date]': startDate ?? '',
      'metadata[notes]': notes ?? '',
    });

    const res = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${c.env.STRIPE_SECRET_KEY ?? ''}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('Stripe API error:', err);
      return c.json({ error: 'Failed to create checkout session' }, { status: 500 });
    }

    const session = await res.json() as { client_secret: string };
    return c.json({ clientSecret: session.client_secret });
  } catch (error) {
    console.error('Checkout session error:', error);
    return c.json({ error: 'Failed to create checkout session' }, { status: 500 });
  }
});

app.post("/api/webhook", async (c) => {
  const body = await c.req.text();
  const sig = c.req.header('stripe-signature') ?? '';
  const webhookSecret = c.env.STRIPE_WEBHOOK_SECRET ?? '';

  if (!webhookSecret) {
    console.warn('STRIPE_WEBHOOK_SECRET not set — skipping signature verification');
  } else {
    const valid = await verifyStripeSignature(body, sig, webhookSecret);
    if (!valid) {
      return c.json({ error: 'Invalid signature' }, { status: 400 });
    }
  }

  const event = JSON.parse(body) as {
    type: string;
    data: {
      object: {
        id: string;
        customer_email: string | null;
        amount_total: number | null;
        metadata: Record<string, string> | null;
      };
    };
  };

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const meta = session.metadata ?? {};

    await sendEmail(c.env.RESEND_API_KEY ?? '', {
      subject: `New Booking Paid — ${meta.customer_name ?? 'Customer'} (${meta.size ?? ''} Dumpster)`,
      html: `
        <h2 style="color:#3d1a8a;">New Dumpster Rental Paid</h2>
        <p><strong>Name:</strong> ${meta.customer_name ?? 'N/A'}</p>
        <p><strong>Phone:</strong> ${meta.phone ?? 'N/A'}</p>
        <p><strong>Email:</strong> ${session.customer_email ?? 'N/A'}</p>
        <p><strong>Delivery Address:</strong> ${meta.address ?? 'N/A'}</p>
        <p><strong>Dumpster Size:</strong> ${meta.size ?? 'N/A'}</p>
        <p><strong>Preferred Start Date:</strong> ${meta.start_date || 'Not specified'}</p>
        <p><strong>Notes:</strong> ${meta.notes || 'None'}</p>
        <p><strong>Amount Paid:</strong> $${((session.amount_total ?? 0) / 100).toFixed(2)}</p>
        <p><strong>Stripe Session ID:</strong> ${session.id}</p>
        <p><strong>Paid At:</strong> ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })}</p>
      `,
    });
  }

  return c.json({ received: true });
});

// ── HELPERS ──────────────────────────────────────────────────────────────────

async function sendEmail(apiKey: string, { subject, html }: { subject: string; html: string }) {
  if (!apiKey) {
    console.warn("RESEND_API_KEY not set — skipping email send");
    return;
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Moize Dumpsters <noreply@moizedumpsters.com>",
      to: ["Connor@moizedumpster.com"],
      subject,
      html,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Resend API error: ${err}`);
  }
}

async function verifyStripeSignature(payload: string, sigHeader: string, secret: string): Promise<boolean> {
  try {
    const parts: Record<string, string> = {};
    for (const part of sigHeader.split(',')) {
      const [k, v] = part.split('=');
      if (k && v) parts[k] = v;
    }
    const timestamp = parts['t'];
    const signature = parts['v1'];
    if (!timestamp || !signature) return false;

    const enc = new TextEncoder();
    const key = await crypto.subtle.importKey(
      'raw',
      enc.encode(secret),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign']
    );
    const mac = await crypto.subtle.sign('HMAC', key, enc.encode(`${timestamp}.${payload}`));
    const computed = Array.from(new Uint8Array(mac))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');

    return computed === signature;
  } catch {
    return false;
  }
}

export default app;
