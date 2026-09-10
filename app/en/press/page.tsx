import type { Metadata } from "next";
import Link from "next/link";
import { personal } from "@/lib/data/personal";

const baseUrl = personal.siteUrl;

export const metadata: Metadata = {
  title: "Press — Media Kit & Resources | Karina Alvarado",
  description:
    "Official press kit for Karina Alvarado: biography, high-resolution photos, and press contact for interviews and media collaborations.",
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

      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold mb-8">Official biography</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#d4a017] mb-4">Short version</h3>
              <div className="card-premium p-6">
                <p className="text-[#a8a8a8] text-sm leading-relaxed">
                  Karina Alvarado is an entrepreneur, author, and international speaker
                  specializing in beauty and business. With 28+ years in the beauty industry
                  and 15+ years as founder and CEO of Alvarado's Beauty & Barber, she has
                  accompanied women entrepreneurs across Latin America in transforming their
                  skills into profitable, sustainable businesses.
                </p>
                <p className="text-[#a8a8a8] text-sm leading-relaxed mt-3">
                  Creator of the IMPERIAL System and founder of her own business training
                  ecosystem, Karina is a leading voice in female entrepreneurship across
                  Latin America. Her first book, "De Cero a Hacer Mi Propio Sistema,"
                  will be published soon by Editorial Legacy.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#d4a017] mb-4">Key facts</h3>
              <div className="card-premium p-6 space-y-3">
                {[
                  { label: "Full name", value: "Karina Alvarado" },
                  { label: "Specialty", value: "Beauty & Business" },
                  { label: "Industry experience", value: "28+ years" },
                  { label: "Founder & CEO of Alvarado's", value: "15+ years" },
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
