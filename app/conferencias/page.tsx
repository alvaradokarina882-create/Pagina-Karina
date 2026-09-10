import type { Metadata } from "next";
import Link from "next/link";
import { personal } from "@/lib/data/personal";

const baseUrl = personal.siteUrl;

export const metadata: Metadata = {
  title: "Conferencias — Conferencista Internacional en Belleza y Negocios",
  description:
    "Karina Alvarado como conferencista para tu evento, congreso o summit. Especializada en belleza y negocios, liderazgo femenino y emprendimiento. Disponible en toda Latinoamérica y Estados Unidos.",
  keywords: [
    "Karina Alvarado conferencista",
    "conferencista belleza negocios",
    "speaker latinoamérica",
    "keynote belleza",
    "conferencista liderazgo femenino",
  ],
  openGraph: {
    title: "Conferencias | Karina Alvarado",
    description: "Contrata a Karina Alvarado como conferencista para tu próximo evento.",
    url: `${baseUrl}/conferencias`,
  },
  alternates: { canonical: `${baseUrl}/conferencias` },
};

const topics = [
  {
    title: "Del Talento al Imperio",
    description:
      "Por qué el talento no es suficiente y cómo construir el sistema que transforma tu arte en un negocio próspero. La conferencia más solicitada de Karina.",
    audience: "Emprendedoras de belleza, artistas, profesionales creativos",
    duration: "45-90 min",
    icon: "◆",
  },
  {
    title: "La Economía Invisible de la Belleza",
    description:
      "El impacto económico real de la industria de la belleza en Latinoamérica y las oportunidades que la mayoría no ve todavía.",
    audience: "Empresarios, inversionistas, cámaras de comercio",
    duration: "30-60 min",
    icon: "◈",
  },
  {
    title: "Liderazgo Femenino sin Disculpas",
    description:
      "Cómo las mujeres están redefiniendo el liderazgo empresarial y qué podemos aprender de las emprendedoras de belleza que lideran en mercados emergentes.",
    audience: "Corporativos, organizaciones de mujeres, conferencias de liderazgo",
    duration: "45-60 min",
    icon: "✦",
  },
  {
    title: "Marketing Auténtico en la Era Digital",
    description:
      "Estrategias de contenido y marketing digital que generan comunidades reales y clientes leales — sin sacrificar la autenticidad.",
    audience: "Emprendedoras, marcas, equipos de marketing",
    duration: "60-90 min",
    icon: "❋",
  },
  {
    title: "El Futuro de la Belleza",
    description:
      "Tecnología, sostenibilidad y cambio cultural: las tres fuerzas que están redefiniendo la industria de la belleza en los próximos 10 años.",
    audience: "Industria de la belleza, innovadores, visionarios de negocio",
    duration: "45 min",
    icon: "◉",
  },
  {
    title: "Pricing con Propósito",
    description:
      "El método exacto para establecer precios que reflejen el valor real del trabajo y construyan negocios sostenibles.",
    audience: "Workshops, masterclasses, formaciones empresariales",
    duration: "90-120 min (workshop)",
    icon: "▲",
  },
];

const formats = [
  {
    title: "Keynote",
    description: "Conferencia principal de 45-90 minutos. Perfecta para abrir o cerrar eventos.",
    includes: ["Presentación personalizada", "Q&A session", "Fotos y firma"],
  },
  {
    title: "Workshop",
    description: "Sesión práctica e interactiva de 2-4 horas con ejercicios aplicables.",
    includes: ["Material de trabajo", "Implementación en vivo", "Seguimiento post-evento"],
  },
  {
    title: "Panel & Mesa Redonda",
    description: "Participación como panelista experta en debates y conversaciones de alto nivel.",
    includes: ["Preparación previa", "Coordinación con moderador", "Contenido compartible"],
  },
];

const faqs = [
  {
    question: "¿En qué países está disponible Karina como conferencista?",
    answer:
      "Karina está disponible para eventos en toda Latinoamérica y Estados Unidos. También realiza keynotes en formato virtual para audiencias globales.",
  },
  {
    question: "¿Cuánto tiempo de anticipación se necesita para contratar?",
    answer:
      "Se recomienda contactar con mínimo 8-12 semanas de anticipación para fechas específicas. Para eventos urgentes, contáctanos y evaluamos disponibilidad.",
  },
  {
    question: "¿Karina personaliza el contenido según el evento?",
    answer:
      "Absolutamente. Cada presentación se adapta a la industria, audiencia y objetivos específicos del evento. El proceso incluye una llamada de briefing previa.",
  },
  {
    question: "¿Qué incluye la contratación?",
    answer:
      "La contratación incluye: presentación personalizada, materiales de apoyo para los asistentes, una sesión de Q&A, y disponibilidad para fotos y meet & greet post-evento.",
  },
  {
    question: "¿Karina habla en inglés?",
    answer:
      "Sí. Karina puede dar conferencias tanto en español como en inglés para audiencias internacionales.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      url: `${baseUrl}/conferencias`,
      name: "Conferencias | Karina Alvarado",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: baseUrl },
          { "@type": "ListItem", position: 2, name: "Conferencias", item: `${baseUrl}/conferencias` },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function ConferenciasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f9d423]/4 blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#d4a017] mb-4 block">
              Conferencista internacional
            </span>
            <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Palabras que mueven{" "}
              <span className="text-gold-gradient">audiencias</span>
            </h1>
            <p className="text-xl text-[#a8a8a8] leading-relaxed mb-8">
              Karina combina historias reales, datos de industria y estrategias concretas
              en conferencias que no solo inspiran — que activan el cambio.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={`mailto:${personal.contact.booking}`} className="btn-gold px-6 py-3 text-sm font-bold">
                Solicitar disponibilidad
              </Link>
              <Link href="#temas" className="btn-ghost-gold px-6 py-3 text-sm">
                Ver temas →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section id="temas" className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold mb-12">
            Temas de <span className="text-gold-gradient">conferencia</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => (
              <div key={topic.title} className="card-premium p-6">
                <div className="text-2xl text-[#d4a017] mb-4">{topic.icon}</div>
                <h3 className="font-serif text-lg font-bold text-white mb-3">
                  {topic.title}
                </h3>
                <p className="text-sm text-[#606060] leading-relaxed mb-4">
                  {topic.description}
                </p>
                <div className="pt-4 border-t border-[#1e1e1e] space-y-2">
                  <div className="flex gap-2 text-xs">
                    <span className="text-[#404040]">Audiencia:</span>
                    <span className="text-[#606060]">{topic.audience}</span>
                  </div>
                  <div className="flex gap-2 text-xs">
                    <span className="text-[#404040]">Duración:</span>
                    <span className="text-[#d4a017]">{topic.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold mb-12">
            Formatos disponibles
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {formats.map((format) => (
              <div key={format.title} className="card-premium p-6">
                <h3 className="font-serif text-xl font-bold text-white mb-3">
                  {format.title}
                </h3>
                <p className="text-sm text-[#606060] leading-relaxed mb-4">
                  {format.description}
                </p>
                <ul className="space-y-2">
                  {format.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#a8a8a8]">
                      <span className="text-[#d4a017] mt-0.5 text-xs">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold mb-12 text-center">
            Preguntas frecuentes
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="card-premium p-6">
                <h3 className="font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-sm text-[#606060] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">
            ¿Lista para llevar a Karina a tu evento?
          </h2>
          <p className="text-[#a8a8a8] mb-8">
            Completa el formulario y te responderemos en 24-48 horas con disponibilidad y opciones.
          </p>
          <Link href={`mailto:${personal.contact.booking}`} className="btn-gold px-8 py-4 text-sm font-bold inline-block">
            Solicitar información →
          </Link>
        </div>
      </section>
    </>
  );
}
