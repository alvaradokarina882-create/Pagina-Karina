import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { personal } from "@/lib/data/personal";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const baseUrl = personal.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Karina Alvarado | Emprendedora, Autora & Conferencista en Belleza y Negocios",
    template: "%s | Karina Alvarado",
  },
  description:
    "Karina Alvarado: emprendedora, autora y conferencista. Especialista en transformar profesionales de la belleza en empresarias exitosas. Estrategias de negocios, marketing y liderazgo para la industria de la belleza.",
  keywords: [
    "Karina Alvarado",
    "emprendedora belleza",
    "negocios de belleza",
    "conferencista belleza",
    "marketing salón de belleza",
    "empresaria belleza latinoamérica",
    "cursos negocio belleza",
    "coaching belleza",
  ],
  authors: [{ name: "Karina Alvarado", url: baseUrl }],
  creator: "Karina Alvarado",
  publisher: "Karina Alvarado",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    alternateLocale: "en_US",
    url: baseUrl,
    siteName: "Karina Alvarado",
    title: "Karina Alvarado | Emprendedora, Autora & Conferencista",
    description:
      "Especialista en transformar profesionales de la belleza en empresarias exitosas. Estrategias probadas en negocios, marketing y liderazgo.",
    images: [
      {
        url: `${baseUrl}/images/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: "Karina Alvarado - Emprendedora, Autora & Conferencista en Belleza y Negocios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@karinaalvarado",
    creator: "@karinaalvarado",
    title: "Karina Alvarado | Emprendedora, Autora & Conferencista",
    description:
      "Especialista en transformar profesionales de la belleza en empresarias exitosas.",
    images: [`${baseUrl}/images/og-default.jpg`],
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      "es-MX": baseUrl,
      "en-US": `${baseUrl}/en`,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: "Karina Alvarado",
      description: "Emprendedora, Autora & Conferencista en Belleza y Negocios",
      inLanguage: ["es-MX", "en-US"],
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${baseUrl}/blog?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Person",
      "@id": `${baseUrl}/#person`,
      name: "Karina Alvarado",
      url: baseUrl,
      image: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/karina-alvarado.jpg`,
        width: 800,
        height: 800,
      },
      sameAs: [
        personal.socialLinks.instagram,
        personal.socialLinks.youtube,
        personal.socialLinks.tiktok,
        personal.socialLinks.linkedin,
      ],
      jobTitle: "Emprendedora, Autora y Conferencista",
      knowsAbout: [
        "Emprendimiento",
        "Negocios de Belleza",
        "Marketing Digital",
        "Liderazgo Femenino",
        "Educación Empresarial",
      ],
      description:
        "Karina Alvarado es emprendedora, autora y conferencista especializada en la intersección de belleza y negocios. Con más de 15 años de experiencia, ha transformado a más de 5,000 profesionales de la belleza en empresarias exitosas.",
    },
    {
      "@type": "SiteNavigationElement",
      "@id": `${baseUrl}/#navigation`,
      name: "Navegación Principal",
      url: baseUrl,
      hasPart: [
        { "@type": "SiteNavigationElement", name: "Sobre mí", url: `${baseUrl}/sobre-mi` },
        { "@type": "SiteNavigationElement", name: "Libros", url: `${baseUrl}/libros` },
        { "@type": "SiteNavigationElement", name: "Conferencias", url: `${baseUrl}/conferencias` },
        { "@type": "SiteNavigationElement", name: "Blog", url: `${baseUrl}/blog` },
        { "@type": "SiteNavigationElement", name: "Prensa", url: `${baseUrl}/prensa` },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#0a0a0a] text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
