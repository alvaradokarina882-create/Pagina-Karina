import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/data/blog";
import { personal } from "@/lib/data/personal";
import { formatDate } from "@/lib/utils";

const baseUrl = personal.siteUrl;

export const metadata: Metadata = {
  title: "Blog — Beauty Business Strategies | Karina Alvarado",
  description:
    "Articles by Karina Alvarado on beauty business strategies, digital marketing, pricing, leadership, and female entrepreneurship.",
  openGraph: {
    locale: "en_US",
    title: "Blog | Karina Alvarado",
    url: `${baseUrl}/en/blog`,
  },
  alternates: {
    canonical: `${baseUrl}/en/blog`,
    languages: { "es-MX": `${baseUrl}/blog`, "en-US": `${baseUrl}/en/blog` },
  },
};

export default function EnBlogPage() {
  const featured = blogPosts.filter((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <>
      <section className="pt-32 pb-16 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-[#404040] mb-8">
            <Link href="/en" className="hover:text-[#606060]">Home</Link>
            <span>/</span>
            <span className="text-[#d4a017]">Blog</span>
          </div>
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#d4a017] mb-4 block">
              Knowledge that transforms
            </span>
            <h1 className="font-serif text-5xl font-bold mb-6 text-gold-gradient">Blog</h1>
            <p className="text-xl text-[#a8a8a8] max-w-2xl mx-auto">
              Business strategies, marketing and mindset for building the beauty business
              you've always dreamed of. Written in Spanish — translated excerpts available.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="card-premium p-4 mb-8 text-center">
            <p className="text-xs text-[#606060]">
              Articles are published in Spanish.{" "}
              <Link href="/blog" className="text-[#d4a017] hover:text-[#f9d423]">
                View all articles in Spanish →
              </Link>
            </p>
          </div>

          <h2 className="text-sm font-semibold uppercase tracking-wider text-[#d4a017] mb-6">
            Featured articles
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {featured.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card-premium p-6 group block hover:no-underline"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-medium text-[#d4a017] border border-[#d4a017]/30 px-2 py-0.5 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-[#404040]">{post.readTime} min</span>
                </div>
                <h3 className="font-serif text-base font-bold text-white mb-3 group-hover:text-[#f9d423] transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-[#606060] leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="text-xs text-[#d4a017] group-hover:translate-x-1 transition-transform inline-block">
                  Read (ES) →
                </div>
              </Link>
            ))}
          </div>

          <div className="space-y-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card-premium p-4 group flex items-center justify-between hover:no-underline block"
              >
                <div>
                  <div className="text-xs text-[#d4a017] mb-1">{post.category}</div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-[#f9d423] transition-colors">
                    {post.title}
                  </h3>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs text-[#404040] hidden sm:block">
                    {formatDate(post.publishedAt)}
                  </span>
                  <span className="text-xs text-[#d4a017] group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
