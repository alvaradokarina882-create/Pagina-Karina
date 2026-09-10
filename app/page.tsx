import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FilosofiaSection } from "@/components/sections/FilosofiaSection";
import { SpeakingSection } from "@/components/sections/SpeakingSection";
import { BookSection } from "@/components/sections/BookSection";
import { EcosistemaSection } from "@/components/sections/EcosistemaSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PressSection } from "@/components/sections/PressSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { personal } from "@/lib/data/personal";

const baseUrl = personal.siteUrl;

export const metadata: Metadata = {
  title: "Karina Alvarado | Emprendedora, Autora & Conferencista en Belleza y Negocios",
  description:
    "Karina Alvarado: empresaria, autora y conferencista internacional en belleza y negocios. Creadora del Sistema IMPERIAL y voz de referencia en emprendimiento femenino en Latinoamérica.",
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: "Karina Alvarado | Emprendedora, Autora & Conferencista",
    description: "La referente latinoamericana en belleza y negocios.",
    url: baseUrl,
  },
};

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${baseUrl}/#webpage`,
  url: baseUrl,
  name: "Karina Alvarado - Inicio",
  isPartOf: { "@id": `${baseUrl}/#website` },
  about: { "@id": `${baseUrl}/#person` },
  description:
    "Página principal de Karina Alvarado, emprendedora, autora y conferencista especializada en belleza y negocios.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: baseUrl,
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <FilosofiaSection />
      <SpeakingSection />
      <BookSection />
      <EcosistemaSection />
      <PressSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
