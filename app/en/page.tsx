import type { Metadata } from "next";
import Link from "next/link";
import { personal } from "@/lib/data/personal";
import { testimonials } from "@/lib/data/testimonials";

const baseUrl = personal.siteUrl;

export const metadata: Metadata = {
  title: "Karina Alvarado | Beauty & Business Entrepreneur, Author & Speaker",
  description:
    "Karina Alvarado: entrepreneur, author, and international speaker at the intersection of beauty and business. She has transformed 5,000+ beauty professionals into successful entrepreneurs in 20+ countries.",
  alternates: {
    canonical: `${baseUrl}/en`,
    languages: {
      "en-US": `${baseUrl}/en`,
      "es-MX": baseUrl,
    },
  },
  openGraph: {
    locale: "en_US",
    title: "Karina Alvarado | Beauty & Business Entrepreneur, Author & Speaker",
    description: "Transforming beauty professionals into successful business owners.",
    url: `${baseUrl}/en`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: `${baseUrl}/en`,
  name: "Karina Alvarado — Beauty & Business",
  inLanguage: "en-US",
  description:
    "Karina Alvarado is an entrepreneur, author, and speaker specializing in beauty and business.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/en` },
    ],
  },
};

export default function EnglishHomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-[#f9d423]/4 blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4a017]/30 bg-[#d4a017]/5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f9d423] animate-pulse" />
            <span className="text-xs font-medium text-[#d4a017] tracking-wide uppercase">
              Entrepreneur · Author · Visionary Leader
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
            <span className="text-white">Leave automatic</span>
            <br />
            <span className="text-gold-gradient">mode.</span>
            <br />
            <span className="text-white">Build from</span>
            <br />
            <span className="text-gold-gradient">your own system</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#a8a8a8] max-w-2xl mx-auto mb-10 leading-relaxed">
            I'm Karina Alvarado — entrepreneur, systems creator, and visionary leader.
            I help women{" "}
            <strong className="text-white">build businesses with purpose, structure, and direction</strong>{" "}
            from inner strength and real transformation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/en/about" className="btn-gold px-8 py-4 text-base font-bold">
              My Story
            </Link>
            <Link href="/en/books" className="btn-ghost-gold px-8 py-4 text-base">
              The Book →
            </Link>
          </div>

          <div className="mt-12">
            <Link href="/" className="text-xs text-[#404040] hover:text-[#606060] transition-colors">
              ← Ver en español
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "15+", label: "Years in the industry" },
              { value: "5K+", label: "Women trained" },
              { value: "20+", label: "Countries reached" },
              { value: "1", label: "Book (coming soon)" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-5xl font-bold text-gold-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-xs text-[#606060] uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#d4a017] mb-4 block">
                My story
              </span>
              <h2 className="font-serif text-4xl font-bold mb-6">
                From the chair to the{" "}
                <span className="text-gold-gradient">stage</span>
              </h2>
              {personal.bioEn.slice(0, 2).map((para, i) => (
                <p key={i} className="text-[#a8a8a8] leading-relaxed mb-4">
                  {para}
                </p>
              ))}
              <Link href="/en/about" className="btn-ghost-gold px-6 py-3 inline-block mt-4">
                Read my full story →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {personal.filosofia.map((item) => (
                <div key={item.title} className="card-premium p-5">
                  <div className="text-2xl text-[#d4a017] mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-white text-sm mb-2">{item.titleEn}</h3>
                  <p className="text-xs text-[#606060] leading-relaxed">{item.descriptionEn}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Book teaser */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#d4a017] mb-4 block">
              The book
            </span>
            <h2 className="font-serif text-4xl font-bold mb-6">
              <span className="text-gold-gradient">From Zero to Building My Own System</span>
            </h2>
            <p className="text-[#a8a8a8] leading-relaxed mb-8">
              The roadmap to design a brand with character, structure, and direction.
              Published by Legacy. Coming 2025.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/en/books" className="btn-gold px-6 py-3 text-sm font-bold">
                Pre-register for the book
              </Link>
              <Link href="/en/about" className="btn-ghost-gold px-6 py-3 text-sm">
                About Karina →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">
            What entrepreneurs say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t) => (
              <div key={t.name} className="card-premium p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-[#f9d423] text-sm">★</span>
                  ))}
                </div>
                <p className="text-[#a8a8a8] text-sm leading-relaxed mb-4 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="text-xs font-semibold text-[#d4a017]">{t.result}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Ready for the next level?
          </h2>
          <p className="text-[#a8a8a8] mb-8">
            Get in touch for speaking engagements, mentorship, or press inquiries.
          </p>
          <Link href={`mailto:${personal.contact.emailEn}`} className="btn-gold px-8 py-4 text-sm font-bold inline-block">
            {personal.contact.emailEn}
          </Link>
        </div>
      </section>
    </>
  );
}
