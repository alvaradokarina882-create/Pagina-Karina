import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { nombre, pais, email, tipo, mensaje } = await req.json();

    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: "Nombre, email y mensaje son obligatorios." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Formulario Web <noreply@soykarinaalvarado.com>",
      to: ["administradora@karinaalvarado.com"],
      replyTo: email,
      subject: `[Web] ${tipo || "Consulta general"} — ${nombre}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#0a0a0a;color:#e5e5e5;border-radius:8px;">
          <div style="border-bottom:2px solid #d4a017;padding-bottom:16px;margin-bottom:24px;">
            <h2 style="color:#f9d423;margin:0;font-size:20px;">Nuevo mensaje desde soykarinaalvarado.com</h2>
          </div>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#a8a8a8;width:120px;">Nombre</td><td style="padding:8px 0;color:#fff;font-weight:600;">${nombre}</td></tr>
            <tr><td style="padding:8px 0;color:#a8a8a8;">País</td><td style="padding:8px 0;color:#fff;">${pais || "No especificado"}</td></tr>
            <tr><td style="padding:8px 0;color:#a8a8a8;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#f9d423;">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#a8a8a8;">Tipo</td><td style="padding:8px 0;color:#fff;">${tipo || "No especificado"}</td></tr>
          </table>
          <div style="margin-top:24px;padding:16px;background:#141414;border-left:3px solid #d4a017;border-radius:4px;">
            <p style="color:#a8a8a8;margin:0 0 8px;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Mensaje</p>
            <p style="color:#e5e5e5;margin:0;line-height:1.6;">${mensaje.replace(/\n/g, "<br/>")}</p>
          </div>
          <p style="margin-top:24px;color:#404040;font-size:12px;">Responde directamente a este correo para contactar a ${nombre}.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Error al enviar el correo." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Error interno del servidor." }, { status: 500 });
  }
}
