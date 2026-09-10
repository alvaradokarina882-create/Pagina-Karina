import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { books } from "@/lib/data/books";
import { personal } from "@/lib/data/personal";
import { NewsletterForm } from "@/components/NewsletterForm";

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
                <div className="absolute bottom-[-16px] left-1/2 -translate-x-1/2 w-3/4 h-6 bg-black/60 blur-xl rounded-full" />
                <div
                  className="relative w-64 h-80 rounded-xl overflow-hidden"
                  style={{
                    boxShadow: "0 0 60px rgba(249, 212, 35, 0.2), 0 30px 80px rgba(0,0,0,0.7)",
                  }}
                >
                  <Image
                    src="/images/book-cover.png"
                    alt={`${book.title} — Karina Alvarado`}
                    fill
                    className="object-cover object-right"
                    sizes="256px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
                </div>
                {book.status === "coming-soon" && (
                  <div className="absolute -top-3 -right-3 w-14 h-14 rounded-full bg-[#f9d423] flex items-center justify-center text-black text-xs font-bold text-center leading-tight animate-pulse-gold">
                    <span>PRÓX.</span>
                  </div>
                )}
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

              {/* Notification form */}
              <div className="card-premium p-6">
                <h3 className="font-semibold text-white mb-4">
                  Recibe novedades del libro
                </h3>
                <NewsletterForm
                  buttonLabel="Notificarme cuando esté disponible"
                  placeholder="Tu email"
                  successMessage="¡Listo! Te avisamos cuando el libro esté disponible."
                  tipo="Pre-orden libro"
                />
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
