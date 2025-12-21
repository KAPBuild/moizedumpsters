import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono<{ Bindings: Env }>();

// Enable CORS for all routes
app.use("*", cors());

// Health check endpoint
app.get("/api/", (c) => c.json({ status: "ok", message: "Moize Dumpsters API" }));

// Quote request endpoint
app.post("/api/quote", async (c) => {
  try {
    const data = await c.req.json();

    // Validate required fields
    if (!data.name || !data.phone || !data.email || !data.address) {
      return c.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log the submission (in production, you'd save to a database or send an email)
    console.log("Quote Request Received:", {
      timestamp: new Date().toISOString(),
      ...data,
    });

    // Return success response
    return c.json(
      {
        success: true,
        message: "Quote request received. We'll contact you within 24 hours.",
        requestId: Math.random().toString(36).substr(2, 9),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Quote request error:", error);
    return c.json(
      { error: "Failed to process quote request" },
      { status: 500 }
    );
  }
});

// Contact form endpoint
app.post("/api/contact", async (c) => {
  try {
    const data = await c.req.json();

    // Validate required fields
    if (!data.name || !data.phone || !data.email || !data.message) {
      return c.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log the submission (in production, you'd save to a database or send an email)
    console.log("Contact Form Submission Received:", {
      timestamp: new Date().toISOString(),
      ...data,
    });

    // Return success response
    return c.json(
      {
        success: true,
        message: "Your message has been received. We'll get back to you soon.",
        requestId: Math.random().toString(36).substr(2, 9),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return c.json(
      { error: "Failed to process contact form" },
      { status: 500 }
    );
  }
});

export default app;
