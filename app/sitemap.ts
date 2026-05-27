import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/data/blog";
import { books } from "@/lib/data/books";

const baseUrl = "https://karinaalvarado.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
      alternates: {
        languages: { "es-MX": baseUrl, "en-US": `${baseUrl}/en` },
      },
    },
    {
      url: `${baseUrl}/sobre-mi`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
      alternates: {
        languages: {
          "es-MX": `${baseUrl}/sobre-mi`,
          "en-US": `${baseUrl}/en/about`,
        },
      },
    },
    {
      url: `${baseUrl}/libros`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
      alternates: {
        languages: {
          "es-MX": `${baseUrl}/libros`,
          "en-US": `${baseUrl}/en/books`,
        },
      },
    },
    {
      url: `${baseUrl}/conferencias`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: {
          "es-MX": `${baseUrl}/conferencias`,
          "en-US": `${baseUrl}/en/speaking`,
        },
      },
    },
    {
      url: `${baseUrl}/prensa`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: {
          "es-MX": `${baseUrl}/prensa`,
          "en-US": `${baseUrl}/en/press`,
        },
      },
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
      alternates: {
        languages: {
          "es-MX": `${baseUrl}/blog`,
          "en-US": `${baseUrl}/en/blog`,
        },
      },
    },
    { url: `${baseUrl}/en`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/en/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/en/books`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/en/speaking`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/en/press`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/en/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
  ];

  const bookPages = books.map((book) => ({
    url: `${baseUrl}/libros/${book.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...bookPages, ...blogPages];
}
