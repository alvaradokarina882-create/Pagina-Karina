import type { Metadata } from "next";
import Link from "next/link";
import { personal } from "@/lib/data/personal";
import { pressLogos } from "@/lib/data/testimonials";

const baseUrl = personal.siteUrl;

export const metadata: Metadata = {
  title: "Prensa — Cobertura Mediática y Recursos para Periodistas",
  description:
    "Recursos de prensa de Karina Alvarado: biografía oficial, fotos de alta resolución, cobertura mediática en Forbes, Entrepreneur, Vogue y más. Contacto para entrevistas y colaboraciones.",
  keywords: ["Karina Alvarado prensa", "kit de prensa", "entrevistas", "medios belleza"],
  openGraph: {
    title: "Prensa | Karina Alvarado",
    description: "Kit de prensa oficial y recursos mediáticos de Karina Alvarado.",
    url: `${baseUrl}/prensa`,
  },
  alternates: { canonical: `${baseUrl}/prensa` },
};

const pressFeatures = [
  {
    media: "Forbes México",
    title: "Las 30 Mujeres más Influyentes en Emprendimiento 2024",
    type: "Reconocimiento",
    year: "2024",
    excerpt:
      "Karina Alvarado es reconocida por su impacto en la transformación de la industria de la belleza en Latinoamérica, formando a más de 5,000 empresarias.",
  },
  {
    media: "Entrepreneur en Español",
    title: "El Método que Está Revolucionando los Negocios de Belleza",
    type: "Feature",
    year: "2024",
    excerpt:
      "Una extensa entrevista sobre el Sistema IMPERIAL y cómo está cambiando la manera en que las profesionales de belleza construyen sus negocios.",
  },
  {
    media: "Vogue México",
    title: "Belleza que Trasciende: Negocios con Propósito",
    type: "Entrevista",
    year: "2023",
    excerpt:
      "Conversación sobre la intersección de belleza, propósito y negocios, y cómo Karina está construyendo la próxima generación de empresarias de belleza.",
  },
  {
    media: "Elle",
    title: "Las Voces que Están Definiendo el Futuro de la Belleza",
    type: "Feature",
    year: "2023",
    excerpt:
      "Karina Alvarado entre las 10 líderes de opinión más influyentes en la industria de la belleza en habla hispana.",
  },
  {
    media: "Glamour",
    title: "De Estilista a Empresaria: La Historia de Karina Alvarado",
    type: "Perfil",
    year: "2022",
    excerpt:
      "Un perfil profundo sobre el camino de Karina desde sus inicios en la industria hasta convertirse en la mentora de negocios más buscada del sector belleza.",
  },
  {
    media: "L'Oréal Business Forum",
    title: "Keynote: Liderazgo Femenino en la Industria de la Belleza",
    type: "Evento",
    year: "2023",
    excerpt:
      "Karina Alvarado como speaker principal del evento anual de L'Oréal para profesionales de la belleza en América Latina.",
  },
];

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

      {/* Press logos */}
      <section className="py-16 bg-[#0a0a0a] border-y border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-xs uppercase tracking-widest text-[#404040] mb-10">
            Destacada en
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {pressLogos.map((press) => (
              <div key={press.name} className="text-[#303030] text-lg font-serif font-bold tracking-wide">
                {press.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio oficial */}
      <section className="py-20 bg-[#050505]">
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
                  Karina Alvarado es emprendedora, autora y conferencista internacional
                  especializada en la intersección de belleza y negocios. Con más de 15 años
                  de experiencia en la industria de la belleza, ha formado a más de 5,000
                  profesionales en más de 20 países, ayudándolas a transformar sus
                  habilidades en negocios rentables y sostenibles.
                </p>
                <p className="text-[#a8a8a8] text-sm leading-relaxed mt-3">
                  Reconocida por Forbes México entre las 30 Mujeres más Influyentes en
                  Emprendimiento 2024, es speaker en eventos de la talla de TEDx, L'Oréal
                  Business Forum y Entrepreneur Latinoamérica Conference. Su primer libro,
                  "Belleza que Prospera", se publicará en 2025.
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

      {/* Press features */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold mb-12">
            Cobertura y menciones
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pressFeatures.map((feature) => (
              <div key={feature.title} className="card-premium p-6 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold text-white">{feature.media}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#404040]">{feature.year}</span>
                    <span className="text-xs border border-[#1e1e1e] px-2 py-0.5 rounded text-[#606060]">
                      {feature.type}
                    </span>
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-[#a8a8a8] mb-3 flex-1">
                  {feature.title}
                </h3>
                <p className="text-xs text-[#606060] leading-relaxed">{feature.excerpt}</p>
              </div>
            ))}
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
              { title: "Foto oficial 1 (alta res)", format: "JPG — 5MB", type: "Foto" },
              { title: "Foto oficial 2 (alta res)", format: "JPG — 4.8MB", type: "Foto" },
              { title: "Foto en evento", format: "JPG — 3.2MB", type: "Foto" },
              { title: "Biografía larga (ES)", format: "PDF — 50KB", type: "Texto" },
              { title: "Biografía corta (ES/EN)", format: "PDF — 30KB", type: "Texto" },
              { title: "Logotipo alta resolución", format: "PNG/SVG — 1MB", type: "Marca" },
            ].map((item) => (
              <div key={item.title} className="card-premium p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#d4a017]/10 border border-[#d4a017]/20 flex items-center justify-center text-xs font-bold text-[#d4a017] shrink-0">
                  {item.type === "Foto" ? "📷" : item.type === "Texto" ? "📄" : "🎨"}
                </div>
                <div className="flex-1">
                  <div className="text-sm text-white font-medium">{item.title}</div>
                  <div className="text-xs text-[#404040]">{item.format}</div>
                </div>
                <button className="text-xs text-[#d4a017] hover:text-[#f9d423] transition-colors">
                  ↓
                </button>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#404040] mt-4">
            Para acceso a materiales de alta resolución, contacta al equipo de prensa en{" "}
            <a href={`mailto:${personal.contact.press}`} className="text-[#d4a017]">
              {personal.contact.press}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
