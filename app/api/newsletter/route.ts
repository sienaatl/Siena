import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    const body = await req.json();
    const { email } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Missing email" }, { status: 400 });
    }

    await transporter.sendMail({
      from: `"Siena Restaurant" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `Newsletter Signup — ${email}`,
      text: `SIENA RESTAURANT — Newsletter Signup\n\nNew subscriber: ${email}\n\n---\nSent via sienaatl.com`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333;">
          <div style="background:#58021f;padding:24px 32px;">
            <h1 style="color:#f5efdd;margin:0;font-size:22px;font-weight:400;letter-spacing:2px;">SIENA RESTAURANT</h1>
            <p style="color:#deae21;margin:4px 0 0;font-size:13px;letter-spacing:1px;">New Newsletter Subscriber</p>
          </div>
          <div style="padding:32px;background:#fff;border:1px solid #eee;">
            <p style="font-size:15px;margin:0;">New subscriber email:</p>
            <p style="font-size:18px;font-weight:600;color:#58021f;margin:8px 0 0;">
              <a href="mailto:${email}" style="color:#58021f;">${email}</a>
            </p>
          </div>
          <div style="padding:16px 32px;background:#f9f6ef;border:1px solid #eee;border-top:none;">
            <p style="font-size:12px;color:#aaa;margin:0;">Sent via the newsletter form at sienaatl.com</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[newsletter/route] sendMail error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
