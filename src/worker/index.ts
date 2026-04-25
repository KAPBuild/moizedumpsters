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

export default app;
