import type { Metadata } from "next";
import Link from "next/link";
import { personal } from "@/lib/data/personal";

const baseUrl = personal.siteUrl;

export const metadata: Metadata = {
  title: "Speaking — International Beauty & Business Speaker | Karina Alvarado",
  description:
    "Hire Karina Alvarado as a keynote speaker for your event, conference, or summit. Specializing in beauty & business, female leadership, and entrepreneurship. Available across Latin America and USA.",
  openGraph: {
    locale: "en_US",
    title: "Speaking | Karina Alvarado",
    url: `${baseUrl}/en/speaking`,
  },
  alternates: {
    canonical: `${baseUrl}/en/speaking`,
    languages: { "es-MX": `${baseUrl}/conferencias`, "en-US": `${baseUrl}/en/speaking` },
  },
};

export default function EnSpeakingPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-[#404040] mb-8">
            <Link href="/en" className="hover:text-[#606060]">Home</Link>
            <span>/</span>
            <span className="text-[#d4a017]">Speaking</span>
          </div>
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#d4a017] mb-4 block">
              International Speaker
            </span>
            <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-6">
              Words that move{" "}
              <span className="text-gold-gradient">audiences</span>
            </h1>
            <p className="text-xl text-[#a8a8a8] mb-8 leading-relaxed">
              Karina combines real stories, industry data, and concrete strategies in
              keynotes that don't just inspire — they activate change.
            </p>
            <Link href={`mailto:${personal.contact.booking}`} className="btn-gold px-6 py-3 text-sm font-bold inline-block">
              Check availability
            </Link>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold mb-10">Speaking topics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "◆", title: "From Talent to Empire", desc: "Why talent isn't enough and how to build the system that transforms your art into a thriving business." },
              { icon: "◈", title: "The Invisible Economy of Beauty", desc: "The real economic impact of the beauty industry and the opportunities most people miss." },
              { icon: "✦", title: "Female Leadership Without Apology", desc: "How women are redefining business leadership and what we can learn from beauty entrepreneurs." },
              { icon: "❋", title: "Authentic Marketing in the Digital Age", desc: "Content and digital marketing strategies that build real communities and loyal clients." },
              { icon: "◉", title: "The Future of Beauty", desc: "Technology, sustainability, and cultural change: the three forces reshaping the beauty industry." },
              { icon: "▲", title: "Pricing with Purpose", desc: "The exact method to set prices that reflect real value and build sustainable businesses." },
            ].map((topic) => (
              <div key={topic.title} className="card-premium p-6">
                <div className="text-2xl text-[#d4a017] mb-4">{topic.icon}</div>
                <h3 className="font-serif text-lg font-bold text-white mb-3">{topic.title}</h3>
                <p className="text-sm text-[#606060] leading-relaxed">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Ready to bring Karina to your event?
          </h2>
          <p className="text-[#a8a8a8] mb-8">
            Contact us and we'll respond within 24-48 hours with availability and options.
          </p>
          <Link href={`mailto:${personal.contact.booking}`} className="btn-gold px-8 py-4 text-sm font-bold inline-block">
            Request information →
          </Link>
        </div>
      </section>
    </>
  );
}
