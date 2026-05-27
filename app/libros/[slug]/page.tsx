import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { books } from "@/lib/data/books";
import { personal } from "@/lib/data/personal";

const baseUrl = personal.siteUrl;

export async function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const book = books.find((b) => b.slug === slug);
  if (!book) return {};

  return {
    title: `${book.title} — ${book.subtitle}`,
    description: book.description,
    openGraph: {
      title: `${book.title} | Karina Alvarado`,
      description: book.description,
      url: `${baseUrl}/libros/${book.slug}`,
    },
    alternates: { canonical: `${baseUrl}/libros/${book.slug}` },
  };
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = books.find((b) => b.slug === slug);
  if (!book) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    author: {
      "@type": "Person",
      name: "Karina Alvarado",
      url: baseUrl,
    },
    description: book.description,
    url: `${baseUrl}/libros/${book.slug}`,
    inLanguage: "es-MX",
    numberOfPages: book.pages,
    genre: ["Business", "Self-Help", "Entrepreneurship"],
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: baseUrl },
        { "@type": "ListItem", position: 2, name: "Libros", item: `${baseUrl}/libros` },
        { "@type": "ListItem", position: 3, name: book.title, item: `${baseUrl}/libros/${book.slug}` },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="pt-32 pb-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[#404040] mb-8">
            <Link href="/" className="hover:text-[#606060]">Inicio</Link>
            <span>/</span>
            <Link href="/libros" className="hover:text-[#606060]">Libros</Link>
            <span>/</span>
            <span className="text-[#d4a017]">{book.title}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Book visual */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative animate-float">
                <div
                  className="relative w-72 h-96 rounded-xl overflow-hidden border border-[#d4a017]/30"
                  style={{
                    background: "linear-gradient(135deg, #0a0a0a 0%, #1a1410 50%, #0a0a0a 100%)",
                    boxShadow: "0 0 60px rgba(249, 212, 35, 0.15)",
                  }}
                >
                  <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                    <div className="text-[#d4a017] text-2xl mb-4">✦</div>
                    <div className="text-xs uppercase tracking-widest text-[#d4a017]/60 mb-4">
                      {book.status === "coming-soon" ? "Próximamente" : "Disponible"}
                    </div>
                    <h2 className="font-serif text-2xl font-bold text-white mb-3">
                      {book.title}
                    </h2>
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#d4a017] to-transparent mb-3" />
                    <p className="text-xs text-[#606060]">Karina Alvarado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Details */}
            <div>
              <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-gold-gradient">{book.title}</span>
              </h1>
              <p className="text-[#606060] italic mb-8">{book.subtitle}</p>

              {book.longDescription.map((para, i) => (
                <p key={i} className="text-[#a8a8a8] leading-relaxed mb-4">
                  {para}
                </p>
              ))}

              <div className="divider-gold my-8" />

              {/* Chapters */}
              <h2 className="font-serif text-2xl font-bold mb-6 text-white">
                Tabla de contenidos
              </h2>
              <div className="space-y-3 mb-8">
                {book.chapters.map((chapter, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-[#d4a017] font-mono text-sm shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[#a8a8a8] text-sm">{chapter}</span>
                  </div>
                ))}
              </div>

              {/* Bonuses */}
              <div className="card-premium p-6 mb-8">
                <h3 className="text-sm font-semibold text-[#d4a017] uppercase tracking-wider mb-4">
                  Bonificaciones exclusivas
                </h3>
                <ul className="space-y-3">
                  {book.bonuses.map((bonus) => (
                    <li key={bonus} className="flex items-start gap-3 text-sm text-[#a8a8a8]">
                      <span className="text-[#d4a017] mt-0.5">✓</span>
                      {bonus}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pre-order form */}
              <div className="card-premium p-6">
                <h3 className="font-semibold text-white mb-4">
                  Regístrate para la pre-orden
                </h3>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Tu email"
                    required
                    className="w-full bg-[#0a0a0a] border border-[#1e1e1e] rounded-lg px-4 py-3 text-sm text-white placeholder-[#404040] focus:outline-none focus:border-[#d4a017]/50"
                  />
                  <button type="submit" className="btn-gold w-full py-3 text-sm font-bold">
                    Notificarme cuando esté disponible
                  </button>
                </form>
                <p className="text-xs text-[#404040] mt-3 text-center">
                  Sin spam. Solo te avisamos cuando el libro esté listo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
