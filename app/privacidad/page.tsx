import type { Metadata } from "next";
import Link from "next/link";
import { personal } from "@/lib/data/personal";

const baseUrl = personal.siteUrl;

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad de soykarinaalvarado.com — cómo recopilamos y usamos tu información.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${baseUrl}/privacidad`,
    languages: { "en-US": `${baseUrl}/en/privacy` },
  },
};

export default function PrivacidadPage() {
  return (
    <section className="pt-32 pb-20 bg-[#050505]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs text-[#404040] mb-8">
          <Link href="/" className="hover:text-[#606060]">Inicio</Link>
          <span>/</span>
          <span className="text-[#d4a017]">Privacidad</span>
        </div>

        <h1 className="font-serif text-4xl font-bold mb-4 text-gold-gradient">
          Política de Privacidad
        </h1>
        <p className="text-xs text-[#404040] mb-10">
          Última actualización: septiembre 2026
        </p>

        <div className="space-y-10 text-[#a8a8a8] text-sm leading-relaxed">

          <div>
            <h2 className="font-semibold text-white text-base mb-3">1. Quién es responsable de tus datos</h2>
            <p>
              Karina Alvarado, titular de este sitio web (<strong className="text-white">soykarinaalvarado.com</strong>).
              Para cualquier pregunta relacionada con privacidad, escríbenos a{" "}
              <a href={`mailto:${personal.contact.email}`} className="text-[#d4a017]">{personal.contact.email}</a>.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white text-base mb-3">2. Qué información recopilamos</h2>
            <p className="mb-3">Solo recopilamos la información que tú nos proporcionas directamente a través de los formularios del sitio:</p>
            <ul className="space-y-2 pl-4">
              {[
                "Nombre completo",
                "Dirección de correo electrónico",
                "País (opcional)",
                "Tipo de consulta y mensaje (formulario de contacto)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#d4a017] mt-0.5 text-xs">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              No recopilamos datos de pago ni información sensible de ningún tipo.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white text-base mb-3">3. Para qué usamos tu información</h2>
            <ul className="space-y-2 pl-4">
              {[
                "Responder a tu consulta o solicitud de contacto.",
                "Enviarte notificaciones sobre el lanzamiento del libro si te registraste para ello.",
                "Enviarte el newsletter si te suscribiste expresamente.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#d4a017] mt-0.5 text-xs">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              No vendemos, alquilamos ni compartimos tu información personal con terceros con fines
              comerciales o publicitarios.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white text-base mb-3">4. Proveedores de servicio</h2>
            <p className="mb-3">Para operar este sitio usamos los siguientes servicios de terceros:</p>
            <ul className="space-y-2 pl-4">
              {[
                "Vercel Inc. — alojamiento del sitio web y análisis de rendimiento.",
                "Resend — servicio de entrega de correos electrónicos transaccionales.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#d4a017] mt-0.5 text-xs">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              Estos proveedores solo procesan la información necesaria para prestar sus servicios y
              están sujetos a sus propias políticas de privacidad.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white text-base mb-3">5. Cookies y análisis</h2>
            <p>
              Este sitio puede utilizar cookies técnicas esenciales para su funcionamiento. Vercel
              Analytics recopila datos de uso anonimizados (páginas visitadas, rendimiento) sin
              identificar a usuarios individuales. No usamos cookies de publicidad o rastreo de
              terceros.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white text-base mb-3">6. Cuánto tiempo conservamos tus datos</h2>
            <p>
              Conservamos tu información el tiempo necesario para atender tu solicitud. Si te
              registraste para el newsletter o para novedades del libro, guardamos tu email hasta
              que solicites darte de baja.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white text-base mb-3">7. Tus derechos</h2>
            <p className="mb-3">Puedes ejercer los siguientes derechos en cualquier momento:</p>
            <ul className="space-y-2 pl-4">
              {[
                "Acceder a los datos que tenemos sobre ti.",
                "Solicitar la corrección de datos incorrectos.",
                "Solicitar la eliminación de tu información.",
                "Retirar tu consentimiento al newsletter o notificaciones del libro.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#d4a017] mt-0.5 text-xs">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              Escríbenos a{" "}
              <a href={`mailto:${personal.contact.email}`} className="text-[#d4a017]">{personal.contact.email}</a>{" "}
              y respondemos en un plazo máximo de 30 días.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white text-base mb-3">8. Cambios a esta política</h2>
            <p>
              Podemos actualizar esta política cuando sea necesario. La fecha de última actualización
              aparece al inicio de esta página.
            </p>
          </div>

          <div className="divider-gold" />

          <p className="text-xs text-[#404040]">
            ¿Preguntas?{" "}
            <a href={`mailto:${personal.contact.email}`} className="text-[#d4a017]">{personal.contact.email}</a>
            {" "}·{" "}
            <Link href="/terminos" className="text-[#d4a017]">Términos de uso</Link>
            {" "}·{" "}
            <Link href="/en/privacy" className="text-[#d4a017]">English version</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
