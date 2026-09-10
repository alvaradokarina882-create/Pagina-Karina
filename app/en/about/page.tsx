import type { Metadata } from "next";
import Link from "next/link";
import { personal } from "@/lib/data/personal";

const baseUrl = personal.siteUrl;

export const metadata: Metadata = {
  title: "About Karina Alvarado | Beauty & Business Entrepreneur",
  description:
    "Learn about Karina Alvarado's journey from beauty professional to entrepreneur, author, and international speaker. Creator of the IMPERIAL System and leading voice in female entrepreneurship across Latin America.",
  openGraph: {
    locale: "en_US",
    title: "About | Karina Alvarado",
    url: `${baseUrl}/en/about`,
  },
  alternates: {
    canonical: `${baseUrl}/en/about`,
    languages: { "es-MX": `${baseUrl}/sobre-mi`, "en-US": `${baseUrl}/en/about` },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: `${baseUrl}/en/about`,
  name: "About | Karina Alvarado",
  inLanguage: "en-US",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/en` },
      { "@type": "ListItem", position: 2, name: "About", item: `${baseUrl}/en/about` },
    ],
  },
};

export default function EnAboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="pt-32 pb-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-[#404040] mb-8">
            <Link href="/en" className="hover:text-[#606060]">Home</Link>
            <span>/</span>
            <span className="text-[#d4a017]">About</span>
          </div>
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#d4a017] mb-4 block">
              My story
            </span>
            <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-6">
              From the chair to the{" "}
              <span className="text-gold-gradient">stage</span>
            </h1>
            <p className="text-xl text-[#a8a8a8] leading-relaxed">
              {personal.bioEn[0]}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-6">
            {personal.bioEn.map((para, i) => (
              <p key={i} className="text-lg text-[#a8a8a8] leading-relaxed">{para}</p>
            ))}
          </div>

          <div className="divider-gold my-12" />

          <h2 className="font-serif text-2xl font-bold mb-8">My philosophy</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {personal.filosofia.map((item) => (
              <div key={item.titleEn} className="card-premium p-5">
                <div className="text-2xl text-[#d4a017] mb-3">{item.icon}</div>
                <h3 className="font-semibold text-white mb-2">{item.titleEn}</h3>
                <p className="text-sm text-[#606060] leading-relaxed">{item.descriptionEn}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {personal.stats.map((stat) => (
              <div key={stat.labelEn} className="text-center card-premium p-4">
                <div className="font-serif text-3xl font-bold text-gold-gradient mb-1">{stat.value}</div>
                <div className="text-xs text-[#606060]">{stat.labelEn}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#050505]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-serif text-2xl font-bold mb-4">Work with Karina</h2>
          <p className="text-[#a8a8a8] mb-8">
            Available for speaking engagements, mentorship programs, and media collaborations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/en/speaking" className="btn-gold px-6 py-3 text-sm font-bold">
              Hire as Speaker
            </Link>
            <Link href={`mailto:${personal.contact.emailEn}`} className="btn-ghost-gold px-6 py-3 text-sm">
              Send a message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
