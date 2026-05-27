import type { Metadata } from "next";
import Link from "next/link";
import { books } from "@/lib/data/books";
import { personal } from "@/lib/data/personal";

const baseUrl = personal.siteUrl;

export const metadata: Metadata = {
  title: "Libros — Belleza que Prospera",
  description:
    "Descubre los libros de Karina Alvarado sobre negocios de belleza. 'Belleza que Prospera' — el manual definitivo para construir un negocio de belleza rentable y sostenible. Próximamente 2025.",
  keywords: [
    "Karina Alvarado libros",
    "libro negocios belleza",
    "Belleza que Prospera",
    "emprendimiento belleza libro",
  ],
  openGraph: {
    title: "Libros | Karina Alvarado",
    description: "El libro que la industria de la belleza estaba esperando.",
    url: `${baseUrl}/libros`,
  },
  alternates: { canonical: `${baseUrl}/libros` },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      url: `${baseUrl}/libros`,
      name: "Libros | Karina Alvarado",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: baseUrl },
          { "@type": "ListItem", position: 2, name: "Libros", item: `${baseUrl}/libros` },
        ],
      },
    },
    {
      "@type": "Book",
      "@id": `${baseUrl}/libros/belleza-que-prospera#book`,
      name: books[0].title,
      author: { "@type": "Person", name: "Karina Alvarado" },
      description: books[0].description,
      inLanguage: "es-MX",
      genre: "Business",
      numberOfPages: books[0].pages,
    },
  ],
};

export default function LibrosPage() {
  const book = books[0];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#f9d423]/4 blur-[100px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#d4a017] mb-4 block">
            Publicaciones
          </span>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gold-gradient">Libros</span>
          </h1>
          <p className="text-xl text-[#a8a8a8] max-w-2xl mx-auto">
            Conocimiento empresarial profundo, específico para la industria de la belleza.
            Sin rodeos, sin teoría vacía — solo estrategias que funcionan.
          </p>
        </div>
      </section>

      {/* Book detail */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Book visual */}
            <div className="flex justify-center">
              <div className="relative animate-float">
                <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/60 blur-xl rounded-full" />
                <div
                  className="relative w-72 h-96 lg:w-96 lg:h-[30rem] rounded-xl overflow-hidden border border-[#d4a017]/30"
                  style={{
                    background: "linear-gradient(135deg, #0a0a0a 0%, #1a1410 50%, #0a0a0a 100%)",
                    boxShadow: "0 0 60px rgba(249, 212, 35, 0.15), inset 0 0 0 1px rgba(212, 160, 23, 0.1)",
                  }}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#b8860b]/30 to-transparent" />
                  <div className="flex flex-col items-center justify-center h-full p-10 text-center">
                    <div className="text-[#d4a017] text-3xl mb-6">✦</div>
                    <div className="text-xs uppercase tracking-widest text-[#d4a017]/60 mb-8 border border-[#d4a017]/20 px-3 py-1 rounded-full">
                      Próximamente 2025
                    </div>
                    <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
                      {book.title}
                    </h2>
                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#d4a017] to-transparent mb-4" />
                    <p className="text-xs text-[#606060] leading-relaxed max-w-[200px]">
                      {book.subtitle}
                    </p>
                    <div className="mt-8 text-sm text-[#a8a8a8] font-serif italic">
                      Karina Alvarado
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-[#f9d423] flex items-center justify-center text-black text-xs font-bold text-center leading-tight animate-pulse-gold">
                  <span>PRE<br/>ORDEN</span>
                </div>
              </div>
            </div>

            {/* Book info */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#d4a017]/30 bg-[#d4a017]/5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f9d423] animate-pulse" />
                <span className="text-xs text-[#d4a017]">Próximamente 2025</span>
              </div>

              <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-gold-gradient">{book.title}</span>
              </h1>
              <p className="text-[#606060] italic mb-6">{book.subtitle}</p>

              {book.longDescription.map((para, i) => (
                <p key={i} className="text-[#a8a8a8] leading-relaxed mb-4">
                  {para}
                </p>
              ))}

              <div className="divider-gold my-8" />

              {/* Chapters preview */}
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#d4a017] mb-4">
                Dentro del libro
              </h3>
              <div className="space-y-2 mb-8">
                {book.chapters.slice(0, 5).map((chapter, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm">
                    <span className="text-[#d4a017] font-mono text-xs mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[#a8a8a8]">{chapter}</span>
                  </div>
                ))}
                <div className="text-xs text-[#404040] pl-6">
                  + {book.chapters.length - 5} capítulos más...
                </div>
              </div>

              {/* Bonuses */}
              <div className="card-premium p-5 mb-8">
                <h3 className="text-sm font-semibold text-[#d4a017] mb-3">
                  Bonificaciones exclusivas de pre-orden:
                </h3>
                <ul className="space-y-2">
                  {book.bonuses.map((bonus) => (
                    <li key={bonus} className="flex items-start gap-2 text-sm text-[#a8a8a8]">
                      <span className="text-[#d4a017] mt-0.5 text-xs">✓</span>
                      {bonus}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href={`/libros/${book.slug}`} className="btn-gold px-8 py-4 text-sm font-bold inline-block w-full text-center">
                Registrarme para la pre-orden →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
