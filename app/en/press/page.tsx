import type { Metadata } from "next";
import Link from "next/link";
import { personal } from "@/lib/data/personal";
import { pressLogos } from "@/lib/data/testimonials";

const baseUrl = personal.siteUrl;

export const metadata: Metadata = {
  title: "Press — Media Kit & Resources | Karina Alvarado",
  description:
    "Official press kit for Karina Alvarado. Biographies, high-resolution photos, media coverage in Forbes, Entrepreneur, Vogue, and more. Press contact for interviews.",
  openGraph: {
    locale: "en_US",
    title: "Press | Karina Alvarado",
    url: `${baseUrl}/en/press`,
  },
  alternates: {
    canonical: `${baseUrl}/en/press`,
    languages: { "es-MX": `${baseUrl}/prensa`, "en-US": `${baseUrl}/en/press` },
  },
};

export default function EnPressPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-[#404040] mb-8">
            <Link href="/en" className="hover:text-[#606060]">Home</Link>
            <span>/</span>
            <span className="text-[#d4a017]">Press</span>
          </div>
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#d4a017] mb-4 block">
              Media & Press
            </span>
            <h1 className="font-serif text-5xl font-bold mb-6 text-gold-gradient">Press Kit</h1>
            <p className="text-xl text-[#a8a8a8] mb-8 leading-relaxed">
              Resources, biographies and materials for journalists and media.
              For interviews or collaborations, please contact our press team.
            </p>
            <Link href={`mailto:${personal.contact.press}`} className="btn-gold px-6 py-3 text-sm font-bold inline-block">
              Press contact
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0a0a0a] border-y border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-xs uppercase tracking-widest text-[#404040] mb-10">Featured in</p>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            {pressLogos.map((press) => (
              <div key={press.name} className="text-[#303030] text-lg font-serif font-bold">{press.name}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold mb-8">Official biography</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#d4a017] mb-4">Short version</h3>
              <div className="card-premium p-6">
                <p className="text-[#a8a8a8] text-sm leading-relaxed">
                  Karina Alvarado is an entrepreneur, author, and international speaker
                  specializing in beauty and business. With over 15 years of industry
                  experience, she has trained 5,000+ professionals in 20+ countries,
                  helping them transform their skills into profitable, sustainable businesses.
                </p>
                <p className="text-[#a8a8a8] text-sm leading-relaxed mt-3">
                  Named by Forbes México among the 30 Most Influential Women in
                  Entrepreneurship 2024, she is a speaker at TEDx, L'Oréal Business Forum,
                  and Entrepreneur Latin America Conference. Her first book,
                  "Beauty That Thrives," will be published in 2025.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#d4a017] mb-4">Key facts</h3>
              <div className="card-premium p-6 space-y-3">
                {[
                  { label: "Full name", value: "Karina Alvarado" },
                  { label: "Specialty", value: "Beauty & Business" },
                  { label: "Years of experience", value: "15+" },
                  { label: "Professionals trained", value: "5,000+" },
                  { label: "Countries", value: "20+" },
                  { label: "Languages", value: "Spanish, English" },
                  { label: "Press email", value: personal.contact.press },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between text-sm border-b border-[#1e1e1e] pb-2 last:border-0">
                    <span className="text-[#606060]">{item.label}</span>
                    <span className="text-white font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
