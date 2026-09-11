import type { Metadata } from "next";
import Link from "next/link";
import { personal } from "@/lib/data/personal";

const baseUrl = personal.siteUrl;

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for soykarinaalvarado.com — how we collect and use your information.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${baseUrl}/en/privacy`,
    languages: { "es-MX": `${baseUrl}/privacidad` },
  },
};

export default function EnPrivacyPage() {
  return (
    <section className="pt-32 pb-20 bg-[#050505]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs text-[#404040] mb-8">
          <Link href="/en" className="hover:text-[#606060]">Home</Link>
          <span>/</span>
          <span className="text-[#d4a017]">Privacy Policy</span>
        </div>

        <h1 className="font-serif text-4xl font-bold mb-4 text-gold-gradient">
          Privacy Policy
        </h1>
        <p className="text-xs text-[#404040] mb-10">
          Last updated: September 2026
        </p>

        <div className="space-y-10 text-[#a8a8a8] text-sm leading-relaxed">

          <div>
            <h2 className="font-semibold text-white text-base mb-3">1. Who is responsible for your data</h2>
            <p>
              Karina Alvarado, owner of this website (<strong className="text-white">soykarinaalvarado.com</strong>).
              For any privacy-related questions, contact us at{" "}
              <a href={`mailto:${personal.contact.emailEn}`} className="text-[#d4a017]">{personal.contact.emailEn}</a>.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white text-base mb-3">2. What information we collect</h2>
            <p className="mb-3">We only collect information you provide directly through the site&apos;s forms:</p>
            <ul className="space-y-2 pl-4">
              {[
                "Full name",
                "Email address",
                "Country (optional)",
                "Type of inquiry and message (contact form)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#d4a017] mt-0.5 text-xs">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              We do not collect payment information or any sensitive personal data.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white text-base mb-3">3. How we use your information</h2>
            <ul className="space-y-2 pl-4">
              {[
                "To respond to your inquiry or contact request.",
                "To notify you about the book launch if you registered for updates.",
                "To send you the newsletter if you expressly subscribed.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#d4a017] mt-0.5 text-xs">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              We do not sell, rent, or share your personal information with third parties
              for commercial or advertising purposes.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white text-base mb-3">4. Service providers</h2>
            <p className="mb-3">We use the following third-party services to operate this site:</p>
            <ul className="space-y-2 pl-4">
              {[
                "Vercel Inc. — website hosting and performance analytics.",
                "Resend — transactional email delivery service.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#d4a017] mt-0.5 text-xs">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              These providers only process the information necessary to deliver their services
              and are subject to their own privacy policies.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white text-base mb-3">5. Cookies and analytics</h2>
            <p>
              This site may use essential technical cookies. Vercel Analytics collects anonymized
              usage data (pages visited, performance) without identifying individual users. We do
              not use advertising or third-party tracking cookies.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white text-base mb-3">6. How long we keep your data</h2>
            <p>
              We retain your information for as long as needed to address your request. If you
              registered for the newsletter or book updates, we keep your email until you request
              to unsubscribe.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white text-base mb-3">7. Your rights</h2>
            <p className="mb-3">You may exercise the following rights at any time:</p>
            <ul className="space-y-2 pl-4">
              {[
                "Access the data we hold about you.",
                "Request correction of inaccurate data.",
                "Request deletion of your information.",
                "Withdraw your consent to the newsletter or book notifications.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#d4a017] mt-0.5 text-xs">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              Write to us at{" "}
              <a href={`mailto:${personal.contact.emailEn}`} className="text-[#d4a017]">{personal.contact.emailEn}</a>{" "}
              and we will respond within 30 days.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white text-base mb-3">8. Changes to this policy</h2>
            <p>
              We may update this policy when necessary. The last updated date is shown at the top
              of this page.
            </p>
          </div>

          <div className="divider-gold" />

          <p className="text-xs text-[#404040]">
            Questions?{" "}
            <a href={`mailto:${personal.contact.emailEn}`} className="text-[#d4a017]">{personal.contact.emailEn}</a>
            {" "}·{" "}
            <Link href="/en/terms" className="text-[#d4a017]">Terms of Use</Link>
            {" "}·{" "}
            <Link href="/privacidad" className="text-[#d4a017]">Versión en español</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
