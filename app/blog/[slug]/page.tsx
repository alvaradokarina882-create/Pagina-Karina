import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getBlogPost } from "@/lib/data/blog";
import { personal } from "@/lib/data/personal";
import { formatDate } from "@/lib/utils";

const baseUrl = personal.siteUrl;

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: "Karina Alvarado", url: baseUrl }],
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${baseUrl}/blog/${post.slug}`,
      authors: ["Karina Alvarado"],
      publishedTime: post.publishedAt,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
    alternates: { canonical: `${baseUrl}/blog/${post.slug}` },
  };
}

function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (!line) {
      i++;
      continue;
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="font-serif text-2xl font-bold text-white mt-10 mb-4">
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="font-semibold text-lg text-white mt-6 mb-3">
          {line.replace("### ", "")}
        </h3>
      );
    } else if (line.startsWith("| ")) {
      // Table
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        tableLines.push(lines[i].trim());
        i++;
      }
      const headers = tableLines[0].split("|").filter(Boolean).map((h) => h.trim());
      const rows = tableLines.slice(2).map((row) =>
        row.split("|").filter(Boolean).map((cell) => cell.trim())
      );
      elements.push(
        <div key={i} className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#d4a017]/30">
                {headers.map((h, hi) => (
                  <th key={hi} className="text-left py-3 px-4 text-[#d4a017] font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} className="border-b border-[#1e1e1e]">
                  {row.map((cell, ci) => (
                    <td key={ci} className="py-3 px-4 text-[#a8a8a8]">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    } else if (line.startsWith("- [ ] ")) {
      const checkItems: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- [ ] ")) {
        checkItems.push(lines[i].trim().replace("- [ ] ", ""));
        i++;
      }
      elements.push(
        <ul key={i} className="space-y-2 my-4">
          {checkItems.map((item, ii) => (
            <li key={ii} className="flex items-start gap-3 text-sm text-[#a8a8a8]">
              <span className="w-4 h-4 rounded border border-[#d4a017]/30 shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      );
      continue;
    } else if (line.startsWith("- ")) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        listItems.push(lines[i].trim().replace("- ", ""));
        i++;
      }
      elements.push(
        <ul key={i} className="space-y-2 my-4">
          {listItems.map((item, ii) => (
            <li key={ii} className="flex items-start gap-3 text-sm text-[#a8a8a8]">
              <span className="text-[#d4a017] mt-0.5 text-xs">◆</span>
              <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
            </li>
          ))}
        </ul>
      );
      continue;
    } else if (line.startsWith("**")) {
      elements.push(
        <p key={i} className="text-[#a8a8a8] leading-relaxed my-3"
          dangerouslySetInnerHTML={{
            __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>'),
          }}
        />
      );
    } else {
      elements.push(
        <p key={i} className="text-[#a8a8a8] leading-relaxed my-3"
          dangerouslySetInnerHTML={{
            __html: line
              .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
              .replace(/\*(.*?)\*/g, '<em>$1</em>'),
          }}
        />
      );
    }

    i++;
  }

  return elements;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `${baseUrl}/blog/${post.slug}`,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: "Karina Alvarado",
      url: baseUrl,
    },
    publisher: {
      "@type": "Person",
      name: "Karina Alvarado",
    },
    keywords: post.tags.join(", "),
    articleSection: post.category,
    timeRequired: `PT${post.readTime}M`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: baseUrl },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: `${baseUrl}/blog/${post.slug}` },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-[#050505]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[#404040] mb-8">
            <Link href="/" className="hover:text-[#606060]">Inicio</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#606060]">Blog</Link>
            <span>/</span>
            <span className="text-[#d4a017] line-clamp-1">{post.title}</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-medium text-[#d4a017] border border-[#d4a017]/30 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-[#404040]">{post.readTime} min de lectura</span>
            <span className="text-xs text-[#404040]">{formatDate(post.publishedAt)}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg text-[#606060] leading-relaxed">
            {post.excerpt}
          </p>

          <div className="divider-gold mt-8" />
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose-custom">
            {renderContent(post.content)}
          </div>

          <div className="divider-gold my-12" />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs border border-[#1e1e1e] text-[#606060] rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Author bio */}
          <div className="card-premium p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f9d423] to-[#b8860b] flex items-center justify-center text-black font-bold text-lg shrink-0">
              K
            </div>
            <div>
              <div className="font-semibold text-white mb-1">Karina Alvarado</div>
              <p className="text-xs text-[#606060] leading-relaxed">
                Emprendedora, autora y conferencista especializada en belleza y negocios.
                Con más de 15 años de experiencia, ha transformado a más de 5,000
                profesionales de la belleza en empresarias exitosas.
              </p>
              <Link href="/sobre-mi" className="text-xs text-[#d4a017] mt-2 inline-block hover:text-[#f9d423]">
                Conocer más →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-[#050505]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold mb-8">
              Artículos relacionados
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedPosts.map((rpost) => (
                <Link
                  key={rpost.slug}
                  href={`/blog/${rpost.slug}`}
                  className="card-premium p-4 group block hover:no-underline"
                >
                  <div className="text-xs text-[#d4a017] mb-2">{rpost.category}</div>
                  <h3 className="text-sm font-semibold text-white mb-2 leading-snug group-hover:text-[#f9d423] transition-colors line-clamp-2">
                    {rpost.title}
                  </h3>
                  <div className="text-xs text-[#404040]">{rpost.readTime} min →</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
