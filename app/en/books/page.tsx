import type { Metadata } from "next";
import Link from "next/link";
import { books } from "@/lib/data/books";
import { personal } from "@/lib/data/personal";

const baseUrl = personal.siteUrl;

export const metadata: Metadata = {
  title: "Books — Beauty That Thrives | Karina Alvarado",
  description:
    "Karina Alvarado's upcoming book 'Beauty That Thrives' — the definitive manual for building a profitable and sustainable beauty business. Pre-register for exclusive bonuses.",
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
      name: books[0].titleEn,
      author: { "@type": "Person", name: "Karina Alvarado" },
      description: books[0].descriptionEn,
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
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#f9d423]/4 blur-[100px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-[#404040] mb-8">
            <Link href="/en" className="hover:text-[#606060]">Home</Link>
            <span>/</span>
            <span className="text-[#d4a017]">Books</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Book visual */}
            <div className="flex justify-center">
              <div className="relative animate-float">
                <div
                  className="relative w-64 h-80 lg:w-80 lg:h-[26rem] rounded-xl overflow-hidden border border-[#d4a017]/30"
                  style={{
                    background: "linear-gradient(135deg, #0a0a0a 0%, #1a1410 50%, #0a0a0a 100%)",
                    boxShadow: "0 0 60px rgba(249, 212, 35, 0.15)",
                  }}
                >
                  <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                    <div className="text-[#d4a017] text-2xl mb-4">✦</div>
                    <div className="text-xs uppercase tracking-widest text-[#d4a017]/60 mb-4">Coming 2025</div>
                    <h2 className="font-serif text-2xl font-bold text-white mb-3">{book.titleEn}</h2>
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#d4a017] to-transparent mb-3" />
                    <p className="text-xs text-[#606060]">Karina Alvarado</p>
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 w-14 h-14 rounded-full bg-[#f9d423] flex items-center justify-center text-black text-xs font-bold text-center leading-tight animate-pulse-gold">
                  <span>PRE<br/>ORDER</span>
                </div>
              </div>
            </div>

            {/* Info */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#d4a017]/30 bg-[#d4a017]/5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f9d423] animate-pulse" />
                <span className="text-xs text-[#d4a017]">Coming 2025</span>
              </div>
              <h1 className="font-serif text-4xl font-bold mb-4 text-gold-gradient">
                {book.titleEn}
              </h1>
              <p className="text-[#606060] italic mb-6">{book.subtitleEn}</p>
              {book.longDescriptionEn?.map((para, i) => (
                <p key={i} className="text-[#a8a8a8] leading-relaxed mb-4">{para}</p>
              ))}

              <div className="divider-gold my-6" />

              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#d4a017] mb-4">
                What's inside
              </h3>
              <div className="space-y-2 mb-6">
                {book.chaptersEn?.slice(0, 5).map((ch, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm">
                    <span className="text-[#d4a017] font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[#a8a8a8]">{ch}</span>
                  </div>
                ))}
              </div>

              <div className="card-premium p-5 mb-6">
                <h3 className="text-sm font-semibold text-[#d4a017] mb-3">Pre-order bonuses:</h3>
                <ul className="space-y-2">
                  {book.bonuses.map((bonus) => (
                    <li key={bonus} className="flex items-start gap-2 text-sm text-[#a8a8a8]">
                      <span className="text-[#d4a017] mt-0.5">✓</span>
                      {bonus}
                    </li>
                  ))}
                </ul>
              </div>

              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="w-full bg-[#0a0a0a] border border-[#1e1e1e] rounded-lg px-4 py-3 text-sm text-white placeholder-[#404040] focus:outline-none focus:border-[#d4a017]/50"
                />
                <button type="submit" className="btn-gold w-full py-3 text-sm font-bold">
                  Notify me when available
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
