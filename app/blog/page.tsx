import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, categories } from "@/lib/data/blog";
import { personal } from "@/lib/data/personal";
import { formatDate } from "@/lib/utils";

const baseUrl = personal.siteUrl;

export const metadata: Metadata = {
  title: "Blog — Estrategias de Negocios para la Industria de la Belleza",
  description:
    "Artículos de Karina Alvarado sobre negocios de belleza, marketing digital, pricing, liderazgo y emprendimiento femenino. Estrategias probadas para profesionales de la belleza.",
  keywords: [
    "blog negocios belleza",
    "artículos emprendimiento belleza",
    "marketing salón belleza",
    "consejos negocio estética",
  ],
  openGraph: {
    title: "Blog | Karina Alvarado",
    description: "Estrategias de negocios para la industria de la belleza.",
    url: `${baseUrl}/blog`,
  },
  alternates: { canonical: `${baseUrl}/blog` },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  url: `${baseUrl}/blog`,
  name: "Blog de Karina Alvarado",
  description: "Estrategias de negocios para la industria de la belleza",
  author: { "@type": "Person", name: "Karina Alvarado" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
    ],
  },
};

export default function BlogPage() {
  const featured = blogPosts.filter((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#d4a017] mb-4 block">
            Conocimiento que transforma
          </span>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gold-gradient">Blog</span>
          </h1>
          <p className="text-xl text-[#a8a8a8] max-w-2xl mx-auto">
            Estrategias de negocios, marketing y mentalidad para construir el negocio
            de belleza que siempre soñaste.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 bg-[#0a0a0a] border-b border-[#1e1e1e] sticky top-16 lg:top-20 z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex gap-3 overflow-x-auto pb-1 no-scrollbar">
            <button className="shrink-0 px-4 py-1.5 rounded-full bg-[#d4a017]/10 border border-[#d4a017]/30 text-xs font-medium text-[#d4a017]">
              Todos
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className="shrink-0 px-4 py-1.5 rounded-full border border-[#1e1e1e] text-xs text-[#606060] hover:border-[#d4a017]/30 hover:text-[#a8a8a8] transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured posts */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[#d4a017] mb-8">
            Destacados
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featured.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card-premium p-6 group flex flex-col hover:no-underline block"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-medium text-[#d4a017] border border-[#d4a017]/30 px-2 py-0.5 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-[#404040]">{post.readTime} min</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-3 leading-snug flex-1 group-hover:text-[#f9d423] transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-[#606060] leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="pt-4 border-t border-[#1e1e1e] flex items-center justify-between">
                  <span className="text-xs text-[#404040]">
                    {formatDate(post.publishedAt)}
                  </span>
                  <span className="text-xs text-[#d4a017] group-hover:translate-x-1 transition-transform inline-block">
                    Leer →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* All posts */}
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[#d4a017] mb-8">
            Todos los artículos
          </h2>
          <div className="space-y-4">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card-premium p-5 group flex items-start gap-6 hover:no-underline block"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs text-[#d4a017]">{post.category}</span>
                    <span className="text-[#1e1e1e]">·</span>
                    <span className="text-xs text-[#404040]">{post.readTime} min de lectura</span>
                  </div>
                  <h3 className="font-semibold text-white mb-1 group-hover:text-[#f9d423] transition-colors text-sm lg:text-base">
                    {post.title}
                  </h3>
                  <p className="text-xs text-[#606060] leading-relaxed hidden sm:block">
                    {post.excerpt}
                  </p>
                </div>
                <div className="shrink-0 flex flex-col items-end gap-2">
                  <span className="text-xs text-[#404040]">
                    {formatDate(post.publishedAt)}
                  </span>
                  <span className="text-xs text-[#d4a017] group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="card-premium p-8">
            <div className="text-3xl text-[#d4a017] mb-4">✦</div>
            <h2 className="font-serif text-2xl font-bold mb-3">
              No te pierdas ningún artículo
            </h2>
            <p className="text-[#a8a8a8] text-sm mb-6">
              Suscríbete y recibe cada nuevo artículo directamente en tu email.
              Sin spam — solo contenido que transforma tu negocio.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="tu@email.com"
                required
                className="flex-1 bg-[#0a0a0a] border border-[#1e1e1e] rounded-lg px-4 py-3 text-sm text-white placeholder-[#404040] focus:outline-none focus:border-[#d4a017]/50"
              />
              <button type="submit" className="btn-gold px-6 py-3 text-sm font-bold shrink-0">
                Suscribirme
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
