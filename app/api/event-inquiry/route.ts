import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Where event inquiries land. Override with EVENT_INQUIRY_TO (comma separated) for testing.
const DEFAULT_RECIPIENTS = "Info@sienaatl.com,rsvp@sienaatl.com";

async function verifyRecaptcha(token: string): Promise<boolean> {
  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
  });
  const data = await res.json();
  const ok = data.success === true && data.score >= 0.5;
  if (!ok) {
    console.warn(
      `[event-inquiry] reCAPTCHA rejected — success=${data.success} score=${data.score} codes=${JSON.stringify(data["error-codes"] ?? [])}`
    );
  }
  return ok;
}

type Row = { label: string; value?: string };

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      date,
      endDate,
      startTime,
      endTime,
      dateFlexible,
      eventSpace,
      guestCount,
      occasion,
      notes,
      howHeard,
      howHeardOther,
      recaptchaToken,
    } = body;

    // reCAPTCHA is enforced on production only. The site key is registered for
    // sienaatl.com, so Google always rejects tokens issued on a *.vercel.app preview
    // host. Preview and local still run the check, but only log the outcome —
    // otherwise the form could never be tested anywhere before going live.
    // Fail safe: only skip enforcement when Vercel explicitly says this is a preview or
    // development deployment. If VERCEL_ENV is missing for any reason, the check still runs.
    const vercelEnv = process.env.VERCEL_ENV;
    const isPreview = vercelEnv === "preview" || vercelEnv === "development";
    const enforceRecaptcha = !isPreview && Boolean(process.env.RECAPTCHA_SECRET_KEY);

    if (enforceRecaptcha) {
      if (!recaptchaToken || !(await verifyRecaptcha(recaptchaToken))) {
        return NextResponse.json({ error: "reCAPTCHA verification failed" }, { status: 400 });
      }
    } else if (recaptchaToken && process.env.RECAPTCHA_SECRET_KEY) {
      await verifyRecaptcha(recaptchaToken);
    }
    console.log(`[event-inquiry] VERCEL_ENV=${vercelEnv ?? "(unset)"} recaptchaEnforced=${enforceRecaptcha}`);

    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const rows: Row[] = [
      { label: "Name", value: `${firstName} ${lastName}` },
      { label: "Email", value: email },
      { label: "Phone", value: phone },
      { label: "Date", value: date },
      { label: "End date", value: endDate },
      { label: "Start time", value: startTime },
      { label: "End time", value: endTime },
      { label: "Date flexible", value: dateFlexible ? "Yes" : undefined },
      { label: "Event space", value: eventSpace },
      { label: "Guest count", value: guestCount ? String(guestCount) : undefined },
      { label: "Occasion", value: occasion },
      // "Other (Please specify)" is only useful with what they typed next to it.
      { label: "Heard about us", value: howHeardOther ? `Other: ${howHeardOther}` : howHeard },
    ];
    const filled = rows.filter((r) => r.value);

    const textBody = [
      `SIENA RESTAURANT — Event Inquiry`,
      ``,
      ...filled.map((r) => `${(r.label + ":").padEnd(17)}${r.value}`),
      ...(notes ? [``, `Notes:`, notes] : []),
      ``,
      `---`,
      `Sent via sienaatl.com`,
    ].join("\n");

    const htmlRows = filled
      .map(
        (r) =>
          `<tr><td style="padding:8px 0;font-size:13px;color:#999;width:140px;vertical-align:top;">${r.label}</td><td style="padding:8px 0;font-size:15px;">${
            r.label === "Email"
              ? `<a href="mailto:${r.value}" style="color:#1b312e;">${r.value}</a>`
              : r.label === "Phone"
                ? `<a href="tel:${String(r.value).replace(/\D/g, "")}" style="color:#1b312e;">${r.value}</a>`
                : r.value
          }</td></tr>`
      )
      .join("");

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333;">
        <div style="background:#1b312e;padding:24px 32px;">
          <h1 style="color:#e0b265;margin:0;font-size:22px;font-weight:400;letter-spacing:2px;">SIENA RESTAURANT</h1>
          <p style="color:#e0b265;margin:4px 0 0;font-size:13px;letter-spacing:1px;">New Event Inquiry</p>
        </div>
        <div style="padding:32px;background:#fff;border:1px solid #eee;">
          <table style="width:100%;border-collapse:collapse;">${htmlRows}</table>
          ${
            notes
              ? `<hr style="border:none;border-top:1px solid #eee;margin:20px 0;" />
                 <p style="font-size:13px;color:#999;margin:0 0 8px;">Notes</p>
                 <p style="font-size:15px;line-height:1.7;white-space:pre-wrap;margin:0;">${notes}</p>`
              : ""
          }
        </div>
        <div style="padding:16px 32px;background:#f9f6ef;border:1px solid #eee;border-top:none;">
          <p style="font-size:12px;color:#aaa;margin:0;">This email was sent via the event inquiry form at sienaatl.com</p>
        </div>
      </div>
    `;

    const to = process.env.EVENT_INQUIRY_TO || DEFAULT_RECIPIENTS;
    const subject = `Event Inquiry: ${firstName} ${lastName}${guestCount ? ` — ${guestCount} guests` : ""}`;

    // No mail credentials locally: print the email so the form can be tested without secrets.
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.log(
        `\n[event-inquiry] No SMTP credentials found — email NOT sent.\n` +
          `To:      ${to}\nSubject: ${subject}\n\n${textBody}\n`
      );
      return NextResponse.json({ ok: true, delivered: false });
    }

    // Use the configured mail server, as app/api/careers and app/api/newsletter do.
    // app/api/contact hardcodes smtp.gmail.com and ignores SMTP_HOST — that looks like a
    // bug in that route, not something to copy.
    const port = Number(process.env.SMTP_PORT) || 465;
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
    console.log(`[event-inquiry] sending via ${process.env.SMTP_HOST}:${port}`);

    await transporter.sendMail({
      from: `"Siena Restaurant" <${process.env.SMTP_USER}>`,
      to,
      replyTo: email,
      subject,
      text: textBody,
      html,
    });

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[event-inquiry/route] sendMail error:", err);
    return NextResponse.json({ error: "Failed to send inquiry" }, { status: 500 });
  }
}
