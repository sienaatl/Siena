import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const residence = formData.get("residence") as string;
    const position = formData.get("position") as string;
    const availability = formData.get("availability") as string;
    const experience = formData.get("experience") as string;
    const previousWork = formData.get("previousWork") as string;
    const coverLetter = formData.get("coverLetter") as string;
    const resumeFile = formData.get("resume") as File | null;

    if (!firstName || !lastName || !email || !phone || !position) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const previousWorkRows =
      previousWork
        ? (JSON.parse(previousWork) as { employer: string; role: string; duration: string }[])
            .map(
              (e) =>
                `<tr><td style="padding:6px 12px;font-size:14px;">${e.employer}</td><td style="padding:6px 12px;font-size:14px;">${e.role}</td><td style="padding:6px 12px;font-size:14px;">${e.duration}</td></tr>`
            )
            .join("")
        : "";

    const attachments: nodemailer.SendMailOptions["attachments"] = [];
    if (resumeFile && resumeFile.size > 0) {
      const buffer = Buffer.from(await resumeFile.arrayBuffer());
      attachments.push({
        filename: resumeFile.name,
        content: buffer,
        contentType: resumeFile.type,
      });
    }

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `[Job Application] ${position} — ${firstName} ${lastName}`,
      attachments,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333;">
          <div style="background:#58021f;padding:24px 32px;">
            <h1 style="color:#f5efdd;margin:0;font-size:22px;font-weight:400;letter-spacing:2px;">SIENA RESTAURANT</h1>
            <p style="color:#deae21;margin:4px 0 0;font-size:13px;letter-spacing:1px;">New Job Application</p>
          </div>
          <div style="padding:32px;background:#fff;border:1px solid #eee;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:8px 0;font-size:13px;color:#999;width:160px;vertical-align:top;">Name</td><td style="padding:8px 0;font-size:15px;">${firstName} ${lastName}</td></tr>
              <tr><td style="padding:8px 0;font-size:13px;color:#999;vertical-align:top;">Email</td><td style="padding:8px 0;font-size:15px;"><a href="mailto:${email}" style="color:#58021f;">${email}</a></td></tr>
              <tr><td style="padding:8px 0;font-size:13px;color:#999;vertical-align:top;">Phone</td><td style="padding:8px 0;font-size:15px;">${phone}</td></tr>
              <tr><td style="padding:8px 0;font-size:13px;color:#999;vertical-align:top;">Residence</td><td style="padding:8px 0;font-size:15px;">${residence}</td></tr>
              <tr><td style="padding:8px 0;font-size:13px;color:#999;vertical-align:top;">Position</td><td style="padding:8px 0;font-size:15px;font-weight:600;color:#58021f;">${position}</td></tr>
              <tr><td style="padding:8px 0;font-size:13px;color:#999;vertical-align:top;">Availability</td><td style="padding:8px 0;font-size:15px;">${availability}</td></tr>
            </table>
            <hr style="border:none;border-top:1px solid #eee;margin:20px 0;" />
            <p style="font-size:13px;color:#999;margin:0 0 8px;">Experience</p>
            <p style="font-size:15px;line-height:1.7;margin:0 0 20px;">${experience}</p>
            ${
              previousWorkRows
                ? `<p style="font-size:13px;color:#999;margin:0 0 8px;">Previous Work History</p>
                   <table style="width:100%;border-collapse:collapse;border:1px solid #eee;margin-bottom:20px;">
                     <thead><tr style="background:#f9f6ef;">
                       <th style="padding:8px 12px;text-align:left;font-size:12px;color:#999;">Employer</th>
                       <th style="padding:8px 12px;text-align:left;font-size:12px;color:#999;">Role</th>
                       <th style="padding:8px 12px;text-align:left;font-size:12px;color:#999;">Duration</th>
                     </tr></thead>
                     <tbody>${previousWorkRows}</tbody>
                   </table>`
                : ""
            }
            ${
              coverLetter
                ? `<p style="font-size:13px;color:#999;margin:0 0 8px;">Cover Letter</p>
                   <p style="font-size:15px;line-height:1.7;white-space:pre-wrap;margin:0;">${coverLetter}</p>`
                : ""
            }
            ${resumeFile && resumeFile.size > 0 ? `<p style="font-size:13px;color:#aaa;margin:20px 0 0;">Resume attached: ${resumeFile.name}</p>` : ""}
          </div>
          <div style="padding:16px 32px;background:#f9f6ef;border:1px solid #eee;border-top:none;">
            <p style="font-size:12px;color:#aaa;margin:0;">This email was sent via the careers form at sienaatl.com</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[careers/route] sendMail error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
