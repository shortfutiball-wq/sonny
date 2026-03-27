import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { phone, email, message } = await req.json();

  if (!phone && !email) {
    return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
  }

  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.warn("[contact] vars manquantes — données reçues:", { phone, email, message });
    return NextResponse.json({ ok: true });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Lattic Site" <${process.env.GMAIL_USER}>`,
      to: "lattic.agence@gmail.com",
      subject: "🔔 Nouveau contact depuis le site Lattic",
      html: `
        <div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:32px;background:#f5f4f1;border-radius:12px;">
          <h2 style="font-size:22px;color:#0a0a0a;margin-bottom:24px;">Nouveau contact 🎯</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0;font-size:13px;color:#777;width:110px;">Téléphone</td>
              <td style="padding:10px 0;font-size:14px;color:#0a0a0a;font-weight:600;">${phone || "—"}</td>
            </tr>
            <tr style="border-top:1px solid rgba(0,0,0,.08)">
              <td style="padding:10px 0;font-size:13px;color:#777;">Email</td>
              <td style="padding:10px 0;font-size:14px;color:#0a0a0a;font-weight:600;">${email || "—"}</td>
            </tr>
            <tr style="border-top:1px solid rgba(0,0,0,.08)">
              <td style="padding:10px 0;font-size:13px;color:#777;vertical-align:top;">Remarques</td>
              <td style="padding:10px 0;font-size:14px;color:#0a0a0a;">${message || "—"}</td>
            </tr>
          </table>
          <p style="margin-top:28px;font-size:11px;color:#aaa;">Envoyé depuis le site Lattic</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] erreur envoi:", err);
    return NextResponse.json({ error: "Erreur envoi" }, { status: 500 });
  }
}
