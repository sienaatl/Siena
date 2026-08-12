import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

async function verifyRecaptcha(token: string): Promise<boolean> {
  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
  });
  const data = await res.json();
  return data.success === true && data.score >= 0.5;
}

export async function POST(req: NextRequest) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, subject, message, serviceSmsConsent, marketingOptIn, recaptchaToken } = body;

    if (!recaptchaToken || !(await verifyRecaptcha(recaptchaToken))) {
      return NextResponse.json({ error: "reCAPTCHA verification failed" }, { status: 400 });
    }

    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const textBody = [
      `SIENA RESTAURANT — Contact Form`,
      ``,
      `Name:    ${firstName} ${lastName}`,
      `Email:   ${email}`,
      phone ? `Phone:   ${phone}` : null,
      `Subject: ${subject}`,
      `Service & Customer Care SMS Consent: ${serviceSmsConsent ? "Yes" : "No"}`,
      `Promotional SMS Consent: ${marketingOptIn ? "Yes" : "No"}`,
      ``,
      `Message:`,
      message,
      ``,
      `---`,
      `Sent via sienaatl.com`,
    ].filter((l) => l !== null).join("\n");

    await transporter.sendMail({
      from: `"Siena Restaurant" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `Contact: ${subject} — ${firstName} ${lastName}`,
      text: textBody,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333;">
          <div style="background:#1b312e;padding:24px 32px;">
            <h1 style="color:#e0b265;margin:0;font-size:22px;font-weight:400;letter-spacing:2px;">SIENA RESTAURANT</h1>
            <p style="color:#e0b265;margin:4px 0 0;font-size:13px;letter-spacing:1px;">New Contact Form Submission</p>
          </div>
          <div style="padding:32px;background:#fff;border:1px solid #eee;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:8px 0;font-size:13px;color:#999;width:140px;vertical-align:top;">Name</td><td style="padding:8px 0;font-size:15px;">${firstName} ${lastName}</td></tr>
              <tr><td style="padding:8px 0;font-size:13px;color:#999;vertical-align:top;">Email</td><td style="padding:8px 0;font-size:15px;"><a href="mailto:${email}" style="color:#1b312e;">${email}</a></td></tr>
              ${phone ? `<tr><td style="padding:8px 0;font-size:13px;color:#999;vertical-align:top;">Phone</td><td style="padding:8px 0;font-size:15px;">${phone}</td></tr>` : ""}
              <tr><td style="padding:8px 0;font-size:13px;color:#999;vertical-align:top;">Subject</td><td style="padding:8px 0;font-size:15px;">${subject}</td></tr>
              <tr><td style="padding:8px 0;font-size:13px;color:#999;vertical-align:top;">Service &amp; Customer Care SMS Consent</td><td style="padding:8px 0;font-size:15px;">${serviceSmsConsent ? "Yes" : "No"}</td></tr>
              <tr><td style="padding:8px 0;font-size:13px;color:#999;vertical-align:top;">Promotional SMS Consent</td><td style="padding:8px 0;font-size:15px;">${marketingOptIn ? "Yes" : "No"}</td></tr>
            </table>
            <hr style="border:none;border-top:1px solid #eee;margin:20px 0;" />
            <p style="font-size:13px;color:#999;margin:0 0 8px;">Message</p>
            <p style="font-size:15px;line-height:1.7;white-space:pre-wrap;margin:0;">${message}</p>
          </div>
          <div style="padding:16px 32px;background:#f9f6ef;border:1px solid #eee;border-top:none;">
            <p style="font-size:12px;color:#aaa;margin:0;">This email was sent via the contact form at sienaatl.com</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact/route] sendMail error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
