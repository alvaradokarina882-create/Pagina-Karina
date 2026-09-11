import type { Metadata } from "next";
import Link from "next/link";
import { personal } from "@/lib/data/personal";

const baseUrl = personal.siteUrl;

export const metadata: Metadata = {
  title: "Términos de Uso",
  description: "Términos de uso de soykarinaalvarado.com.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${baseUrl}/terminos`,
    languages: { "en-US": `${baseUrl}/en/terms` },
  },
};

export default function TerminosPage() {
  return (
    <section className="pt-32 pb-20 bg-[#050505]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs text-[#404040] mb-8">
          <Link href="/" className="hover:text-[#606060]">Inicio</Link>
          <span>/</span>
          <span className="text-[#d4a017]">Términos de uso</span>
        </div>

        <h1 className="font-serif text-4xl font-bold mb-4 text-gold-gradient">
          Términos de Uso
        </h1>
        <p className="text-xs text-[#404040] mb-10">
          Última actualización: septiembre 2026
        </p>

        <div className="space-y-10 text-[#a8a8a8] text-sm leading-relaxed">

          <div>
            <h2 className="font-semibold text-white text-base mb-3">1. Aceptación de los términos</h2>
            <p>
              Al acceder y usar <strong className="text-white">soykarinaalvarado.com</strong>, aceptas
              estos términos de uso. Si no estás de acuerdo con alguna parte, te pedimos que no uses
              el sitio.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white text-base mb-3">2. Propósito del sitio</h2>
            <p>
              Este sitio es una plataforma de información personal y marca profesional de Karina
              Alvarado. No se realizan transacciones comerciales directas a través del sitio. El
              sitio ofrece información sobre servicios, publicaciones y actividad profesional, y
              permite el envío de consultas a través de formularios de contacto.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white text-base mb-3">3. Propiedad intelectual</h2>
            <p>
              Todo el contenido de este sitio — textos, imágenes, diseño, logotipos y materiales
              multimedia — es propiedad de Karina Alvarado o está bajo licencia de uso. Queda
              prohibida su reproducción, distribución o uso comercial sin autorización escrita previa.
            </p>
            <p className="mt-3">
              Para solicitar permiso de uso, escríbenos a{" "}
              <a href={`mailto:${personal.contact.email}`} className="text-[#d4a017]">{personal.contact.email}</a>.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white text-base mb-3">4. Uso permitido</h2>
            <p>Puedes usar este sitio para:</p>
            <ul className="space-y-2 pl-4 mt-3">
              {[
                "Informarte sobre la actividad profesional de Karina Alvarado.",
                "Enviar consultas a través de los formularios de contacto.",
                "Registrarte para recibir información sobre el libro u otras publicaciones.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#d4a017] mt-0.5 text-xs">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              Está prohibido usar este sitio para actividades ilegales, spam, scraping automatizado
              o cualquier uso que perjudique el funcionamiento del sitio o a terceros.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white text-base mb-3">5. Exactitud de la información</h2>
            <p>
              Hacemos nuestro mejor esfuerzo para mantener la información del sitio actualizada y
              exacta. Sin embargo, no garantizamos la exactitud, completitud o vigencia de todo el
              contenido. Para información crítica, recomendamos contactarnos directamente.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white text-base mb-3">6. Limitación de responsabilidad</h2>
            <p>
              El uso de este sitio es bajo tu propio riesgo. Karina Alvarado no se hace responsable
              de daños directos, indirectos o consecuentes derivados del uso o imposibilidad de uso
              de este sitio.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white text-base mb-3">7. Cambios al sitio y los términos</h2>
            <p>
              Nos reservamos el derecho de modificar estos términos o el contenido del sitio en
              cualquier momento, sin previo aviso. El uso continuado del sitio tras los cambios
              implica la aceptación de los nuevos términos.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white text-base mb-3">8. Ley aplicable</h2>
            <p>
              Estos términos se rigen por las leyes aplicables en el estado de Texas, Estados Unidos,
              sin perjuicio de las disposiciones de protección al consumidor vigentes en el país de
              residencia del usuario.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white text-base mb-3">9. Contacto</h2>
            <p>
              Para cualquier pregunta sobre estos términos:{" "}
              <a href={`mailto:${personal.contact.email}`} className="text-[#d4a017]">{personal.contact.email}</a>
            </p>
          </div>

          <div className="divider-gold" />

          <p className="text-xs text-[#404040]">
            <Link href="/privacidad" className="text-[#d4a017]">Política de Privacidad</Link>
            {" "}·{" "}
            <Link href="/en/terms" className="text-[#d4a017]">English version</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
