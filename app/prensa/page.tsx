import type { Metadata } from "next";
import Link from "next/link";
import { personal } from "@/lib/data/personal";

const baseUrl = personal.siteUrl;

export const metadata: Metadata = {
  title: "Prensa — Kit de Prensa y Recursos para Periodistas",
  description:
    "Kit de prensa oficial de Karina Alvarado: biografía, foto de alta resolución y contacto para entrevistas, colaboraciones y cobertura mediática.",
  keywords: ["Karina Alvarado prensa", "kit de prensa", "entrevistas", "conferencista belleza negocios"],
  openGraph: {
    title: "Prensa | Karina Alvarado",
    description: "Kit de prensa oficial y recursos mediáticos de Karina Alvarado.",
    url: `${baseUrl}/prensa`,
  },
  alternates: { canonical: `${baseUrl}/prensa` },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: `${baseUrl}/prensa`,
  name: "Prensa | Karina Alvarado",
  description:
    "Kit de prensa oficial de Karina Alvarado. Recursos para periodistas, entrevistas y cobertura mediática.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Prensa", item: `${baseUrl}/prensa` },
    ],
  },
};

export default function PrensaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#d4a017] mb-4 block">
              Medios y prensa
            </span>
            <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gold-gradient">Kit de prensa</span>
            </h1>
            <p className="text-xl text-[#a8a8a8] mb-8 leading-relaxed">
              Recursos, biografías y materiales para periodistas, bloggers y medios de
              comunicación. Para entrevistas o colaboraciones, contacta al equipo de prensa.
            </p>
            <Link
              href={`mailto:${personal.contact.press}`}
              className="btn-gold px-6 py-3 text-sm font-bold inline-block"
            >
              Contactar prensa
            </Link>
          </div>
        </div>
      </section>

      {/* Bio oficial */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold mb-8">
            Biografía oficial
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#d4a017] mb-4">
                Versión corta (150 palabras)
              </h3>
              <div className="card-premium p-6">
                <p className="text-[#a8a8a8] text-sm leading-relaxed">
                  Karina Alvarado es empresaria, autora y conferencista internacional
                  especializada en la intersección de belleza y negocios. Con más de 15 años
                  de experiencia en la industria, ha formado a más de 5,000 mujeres
                  emprendedoras en más de 20 países, ayudándolas a transformar sus
                  habilidades en negocios rentables y sostenibles.
                </p>
                <p className="text-[#a8a8a8] text-sm leading-relaxed mt-3">
                  Creadora del Sistema IMPERIAL y fundadora de su propio ecosistema de
                  formación empresarial, Karina es una voz de referencia en el emprendimiento
                  femenino en Latinoamérica. Su primer libro, "De Cero a Hacer Mi Propio
                  Sistema", se publicará en 2026.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#d4a017] mb-4">
                Datos clave para medios
              </h3>
              <div className="card-premium p-6 space-y-3">
                {[
                  { label: "Nombre completo", value: "Karina Alvarado" },
                  { label: "Especialidad", value: "Belleza & Negocios" },
                  { label: "Años de trayectoria", value: "15+" },
                  { label: "Profesionales formadas", value: "5,000+" },
                  { label: "Países de impacto", value: "20+" },
                  { label: "Idiomas", value: "Español, Inglés" },
                  { label: "Disponibilidad", value: "Toda LATAM + USA" },
                  { label: "Email de prensa", value: personal.contact.press },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between text-sm border-b border-[#1e1e1e] pb-2 last:border-0 last:pb-0">
                    <span className="text-[#606060]">{item.label}</span>
                    <span className="text-white font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold mb-8">
            Materiales descargables
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Foto oficial (alta res)", format: "JPG", type: "Foto" },
              { title: "Biografía larga (ES)", format: "PDF", type: "Texto" },
              { title: "Biografía corta (ES/EN)", format: "PDF", type: "Texto" },
              { title: "Logotipo alta resolución", format: "PNG/SVG", type: "Marca" },
            ].map((item) => (
              <div key={item.title} className="card-premium p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#d4a017]/10 border border-[#d4a017]/20 flex items-center justify-center text-xs font-bold text-[#d4a017] shrink-0">
                  {item.type === "Foto" ? "📷" : item.type === "Texto" ? "📄" : "🎨"}
                </div>
                <div className="flex-1">
                  <div className="text-sm text-white font-medium">{item.title}</div>
                  <div className="text-xs text-[#404040]">{item.format}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#404040] mt-6">
            Para acceso a materiales, escribe a{" "}
            <a href={`mailto:${personal.contact.press}`} className="text-[#d4a017]">
              {personal.contact.press}
            </a>{" "}
            y te los enviamos directamente.
          </p>
        </div>
      </section>
    </>
  );
}
