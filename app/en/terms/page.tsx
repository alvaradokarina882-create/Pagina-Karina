import type { Metadata } from "next";
import Link from "next/link";
import { personal } from "@/lib/data/personal";

const baseUrl = personal.siteUrl;

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for soykarinaalvarado.com.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${baseUrl}/en/terms`,
    languages: { "es-MX": `${baseUrl}/terminos` },
  },
};

export default function EnTermsPage() {
  return (
    <section className="pt-32 pb-20 bg-[#050505]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs text-[#404040] mb-8">
          <Link href="/en" className="hover:text-[#606060]">Home</Link>
          <span>/</span>
          <span className="text-[#d4a017]">Terms of Use</span>
        </div>

        <h1 className="font-serif text-4xl font-bold mb-4 text-gold-gradient">
          Terms of Use
        </h1>
        <p className="text-xs text-[#404040] mb-10">
          Last updated: September 2026
        </p>

        <div className="space-y-10 text-[#a8a8a8] text-sm leading-relaxed">

          <div>
            <h2 className="font-semibold text-white text-base mb-3">1. Acceptance of terms</h2>
            <p>
              By accessing and using <strong className="text-white">soykarinaalvarado.com</strong>,
              you agree to these terms of use. If you disagree with any part of these terms,
              please do not use the site.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white text-base mb-3">2. Purpose of the site</h2>
            <p>
              This site is a personal information and professional brand platform for Karina
              Alvarado. No commercial transactions are conducted directly through the site. The
              site provides information about services, publications, and professional activity,
              and allows you to send inquiries through contact forms.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white text-base mb-3">3. Intellectual property</h2>
            <p>
              All content on this site — texts, images, design, logos, and multimedia materials —
              is owned by Karina Alvarado or used under license. Reproduction, distribution, or
              commercial use without prior written authorization is prohibited.
            </p>
            <p className="mt-3">
              To request permission for use, write to{" "}
              <a href={`mailto:${personal.contact.emailEn}`} className="text-[#d4a017]">{personal.contact.emailEn}</a>.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white text-base mb-3">4. Permitted use</h2>
            <p>You may use this site to:</p>
            <ul className="space-y-2 pl-4 mt-3">
              {[
                "Learn about Karina Alvarado's professional activities.",
                "Send inquiries through the contact forms.",
                "Register to receive information about the book or other publications.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#d4a017] mt-0.5 text-xs">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              You may not use this site for illegal activities, spam, automated scraping, or any
              use that harms the site&apos;s operation or third parties.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white text-base mb-3">5. Accuracy of information</h2>
            <p>
              We make every effort to keep the site&apos;s information current and accurate. However,
              we do not guarantee the accuracy, completeness, or timeliness of all content. For
              critical information, we recommend contacting us directly.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white text-base mb-3">6. Limitation of liability</h2>
            <p>
              Use of this site is at your own risk. Karina Alvarado is not liable for direct,
              indirect, or consequential damages arising from the use or inability to use this site.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white text-base mb-3">7. Changes to the site and terms</h2>
            <p>
              We reserve the right to modify these terms or the site&apos;s content at any time without
              prior notice. Continued use of the site after changes implies acceptance of the
              updated terms.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white text-base mb-3">8. Governing law</h2>
            <p>
              These terms are governed by the laws applicable in the state of Texas, United States,
              without prejudice to consumer protection provisions in your country of residence.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white text-base mb-3">9. Contact</h2>
            <p>
              For any questions about these terms:{" "}
              <a href={`mailto:${personal.contact.emailEn}`} className="text-[#d4a017]">{personal.contact.emailEn}</a>
            </p>
          </div>

          <div className="divider-gold" />

          <p className="text-xs text-[#404040]">
            <Link href="/en/privacy" className="text-[#d4a017]">Privacy Policy</Link>
            {" "}·{" "}
            <Link href="/terminos" className="text-[#d4a017]">Versión en español</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
