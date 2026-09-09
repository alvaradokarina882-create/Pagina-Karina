import type { Metadata } from "next";
import Image from "next/image";
import { personal } from "@/lib/data/personal";
import { speakingEvents } from "@/lib/data/testimonials";

const baseUrl = personal.siteUrl;

export const metadata: Metadata = {
  title: "Sobre mí — Mi Historia y Trayectoria",
  description:
    "Conoce la historia de Karina Alvarado: de profesional de la belleza a emprendedora, autora y conferencista que ha transformado a más de 5,000 mujeres en empresarias exitosas en Latinoamérica.",
  keywords: ["Karina Alvarado historia", "biografía", "trayectoria profesional belleza"],
  openGraph: {
    title: "Sobre mí | Karina Alvarado",
    description:
      "De profesional de la belleza a líder empresarial. La historia completa de Karina Alvarado.",
    url: `${baseUrl}/sobre-mi`,
  },
  alternates: {
    canonical: `${baseUrl}/sobre-mi`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${baseUrl}/sobre-mi#webpage`,
  url: `${baseUrl}/sobre-mi`,
  name: "Sobre mí | Karina Alvarado",
  isPartOf: { "@id": `${baseUrl}/#website` },
  about: { "@id": `${baseUrl}/#person` },
  description:
    "Biografía y trayectoria profesional de Karina Alvarado, emprendedora y conferencista en belleza y negocios.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Sobre mí", item: `${baseUrl}/sobre-mi` },
    ],
  },
};

const timeline = [
  { year: "2009", event: "Primer trabajo en la industria de la belleza como asistente en un salón local" },
  { year: "2011", event: "Especialización en colorimetría avanzada. Primeros clientes propios" },
  { year: "2014", event: "Apertura del primer espacio propio. Primeras lecciones (duras) sobre negocios" },
  { year: "2016", event: "Primer año de rentabilidad real. Inicio de la mentoría informal a otras profesionales" },
  { year: "2018", event: "Primer programa de formación empresarial para el sector belleza" },
  { year: "2020", event: "Expansión digital: formación online, comunidad y contenido. +1,000 alumnas" },
  { year: "2022", event: "TEDx Bogotá. Reconocida como voz líder en belleza y negocios en LATAM" },
  { year: "2024", event: "5,000+ mujeres formadas en 20+ países. Libro en proceso" },
  { year: "2026", event: "Publicación de 'De Cero a Hacer Mi Propio Sistema'. Nuevo programa IMPERIAL" },
];

export default function SobreMiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#f9d423]/3 blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4a017]/30 bg-[#d4a017]/5 mb-6">
              <span className="text-xs font-medium text-[#d4a017] tracking-wide uppercase">
                Mi historia
              </span>
            </div>
            <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              De la silla al{" "}
              <span className="text-gold-gradient">escenario</span>
            </h1>
            <p className="text-xl text-[#a8a8a8] leading-relaxed">
              {personal.bio[0]}
            </p>
          </div>
        </div>
      </section>

      {/* Bio completa */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Foto */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[#1e1e1e] mb-6">
                  <Image
                    src="/images/karina-alvarado.jpg"
                    alt="Karina Alvarado — Empresaria, Autora y Líder Visionaria"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 300px"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                </div>

                {/* Quick facts */}
                <div className="card-premium p-5 space-y-4">
                  {personal.stats.map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between">
                      <span className="text-xs text-[#606060]">{stat.label}</span>
                      <span className="text-sm font-bold text-gold">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bio text */}
            <div className="lg:col-span-2 space-y-8">
              {personal.bio.map((paragraph, i) => (
                <p key={i} className="text-[#a8a8a8] leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}

              <div className="divider-gold my-8" />

              <h2 className="font-serif text-2xl font-bold text-white">
                Mi filosofía de trabajo
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {personal.filosofia.map((item) => (
                  <div key={item.title} className="card-premium p-4">
                    <div className="text-[#d4a017] text-xl mb-2">{item.icon}</div>
                    <h3 className="font-semibold text-white text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-[#606060] leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-center mb-16">
            Trayectoria <span className="text-gold-gradient">profesional</span>
          </h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#d4a017]/50 via-[#d4a017]/20 to-transparent" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`flex items-start gap-8 ${
                    i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 pl-12 lg:pl-0">
                    <div className="card-premium p-5">
                      <div className="text-[#d4a017] font-bold text-sm mb-2">{item.year}</div>
                      <p className="text-[#a8a8a8] text-sm leading-relaxed">{item.event}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 lg:static lg:flex-none flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#f9d423] border-2 border-[#0a0a0a] -ml-1.5 lg:ml-0" />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Speaking */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold mb-8">
            Eventos recientes
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {speakingEvents.map((event) => (
              <div key={event.event} className="card-premium p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="text-xs border border-[#1e1e1e] px-2 py-0.5 rounded text-[#404040]">
                    {event.year}
                  </div>
                  <div className="text-xs text-[#d4a017]">{event.attendees} asist.</div>
                </div>
                <h3 className="font-semibold text-white text-sm mb-2">{event.event}</h3>
                <p className="text-xs text-[#606060]">{event.topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
