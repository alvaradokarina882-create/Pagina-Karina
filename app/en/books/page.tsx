import type { Metadata } from "next";
import Link from "next/link";
import { books } from "@/lib/data/books";
import { personal } from "@/lib/data/personal";
import { NewsletterForm } from "@/components/NewsletterForm";

const baseUrl = personal.siteUrl;

export const metadata: Metadata = {
  title: "Books — De Cero a Hacer Mi Propio Sistema | Karina Alvarado",
  description:
    "Karina Alvarado's upcoming book 'De Cero a Hacer Mi Propio Sistema' — a roadmap for women entrepreneurs to build a business with purpose, structure, and direction. Register to be notified at launch.",
  openGraph: {
    locale: "en_US",
    title: "Books | Karina Alvarado",
    url: `${baseUrl}/en/books`,
  },
  alternates: {
    canonical: `${baseUrl}/en/books`,
    languages: { "es-MX": `${baseUrl}/libros`, "en-US": `${baseUrl}/en/books` },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      url: `${baseUrl}/en/books`,
      name: "Books | Karina Alvarado",
      inLanguage: "en-US",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/en` },
          { "@type": "ListItem", position: 2, name: "Books", item: `${baseUrl}/en/books` },
        ],
      },
    },
    {
      "@type": "Book",
      name: books[0].title,
      author: { "@type": "Person", name: "Karina Alvarado" },
      description: books[0].description,
      inLanguage: "es-MX",
      numberOfPages: books[0].pages,
    },
  ],
};

export default function EnBooksPage() {
  const book = books[0];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="pt-32 pb-20 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#C3A04A]/4 blur-[100px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-[#404040] mb-8">
            <Link href="/en" className="hover:text-[#606060]">Home</Link>
            <span>/</span>
            <span className="text-[#A98224]">Books</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Book visual */}
            <div className="flex justify-center">
              <div className="relative animate-float">
                <div
                  className="relative w-64 h-80 lg:w-80 lg:h-[26rem] rounded-xl overflow-hidden border border-[#A98224]/30"
                  style={{
                    background: "linear-gradient(135deg, #0a0a0a 0%, #1a1410 50%, #0a0a0a 100%)",
                    boxShadow: "0 0 60px rgba(195, 160, 74, 0.15)",
                  }}
                >
                  <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                    <div className="text-[#A98224] text-2xl mb-4">✦</div>
                    <div className="text-xs uppercase tracking-widest text-[#A98224]/60 mb-4">Coming Soon</div>
                    <h2 className="font-serif text-2xl font-bold text-white mb-3">{book.title}</h2>
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#A98224] to-transparent mb-3" />
                    <p className="text-xs text-[#606060]">Karina Alvarado</p>
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 w-14 h-14 rounded-full bg-[#C3A04A] flex items-center justify-center text-black text-xs font-bold text-center leading-tight animate-pulse-gold">
                  <span>SOON</span>
                </div>
              </div>
            </div>

            {/* Info */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#A98224]/30 bg-[#A98224]/5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C3A04A] animate-pulse" />
                <span className="text-xs text-[#A98224]">Coming Soon · In Spanish</span>
              </div>
              <h1 className="font-serif text-4xl font-bold mb-4 text-gold-gradient">
                {book.title}
              </h1>
              <p className="text-[#606060] italic mb-6">{book.subtitle}</p>
              {book.longDescription.map((para, i) => (
                <p key={i} className="text-[#a8a8a8] leading-relaxed mb-4">{para}</p>
              ))}

              <div className="divider-gold my-6" />

              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#A98224] mb-4">
                What's inside
              </h3>
              <div className="space-y-2 mb-6">
                {book.chapters.slice(0, 5).map((ch, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm">
                    <span className="text-[#A98224] font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[#a8a8a8]">{ch}</span>
                  </div>
                ))}
              </div>

              <NewsletterForm
                buttonLabel="Notify me when available"
                placeholder="your@email.com"
                successMessage="Done! We'll notify you when the book is available."
                tipo="Pre-order book (EN)"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
