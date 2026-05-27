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
    default: "Karina Alvarado | Empresaria, Autora & Líder Visionaria",
    template: "%s | Karina Alvarado",
  },
  description:
    "Karina Alvarado: empresaria, autora y líder visionaria. Creadora de sistemas que ayuda a mujeres emprendedoras a construir negocios con propósito, estructura y dirección. Autora de 'De Cero a Hacer Mi Propio Sistema'.",
  keywords: [
    "Karina Alvarado",
    "empresaria liderazgo",
    "sistemas de negocios",
    "liderazgo femenino",
    "emprendimiento mujeres",
    "conferencista motivacional",
    "De Cero a Hacer Mi Propio Sistema",
    "coaching empresarial",
    "líder visionaria",
    "mentoría negocios",
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
    title: "Karina Alvarado | Empresaria, Autora & Líder Visionaria",
    description:
      "Empresaria, creadora de sistemas y líder visionaria. Ayuda a mujeres a construir negocios con propósito, estructura y dirección. Autora de 'De Cero a Hacer Mi Propio Sistema'.",
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
    site: "@Karina.alvarados",
    creator: "@Karina.alvarados",
    title: "Karina Alvarado | Empresaria, Autora & Líder Visionaria",
    description:
      "Empresaria y líder visionaria. Ayuda a mujeres a construir negocios con propósito, estructura y dirección.",
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
      description: "Empresaria, Autora & Líder Visionaria — De Cero a Hacer Mi Propio Sistema",
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
        personal.socialLinks.facebook,
        personal.socialLinks.youtube,
        personal.socialLinks.tiktok,
      ],
      jobTitle: "Empresaria, Autora y Líder Visionaria",
      knowsAbout: [
        "Sistemas de Negocios",
        "Liderazgo Consciente",
        "Emprendimiento Femenino",
        "Identidad Empresarial",
        "Estructura y Dirección",
      ],
      description:
        "Karina Alvarado es empresaria, creadora de sistemas y líder visionaria que transformó su historia personal en una filosofía de crecimiento, estructura y liderazgo consciente. Autora del libro 'De Cero a Hacer Mi Propio Sistema' (Legacy).",
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
