import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { regions } from "@/lib/regions";
import { services } from "@/lib/services";
import { posts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = siteConfig.url;

  const staticPaths = [
    "",
    "/siparis",
    "/hizmetler",
    "/bolgeler",
    "/fiyatlar",
    "/sik-sorulan-sorular",
    "/hakkimizda",
    "/iletisim",
    "/blog",
    "/kvkk",
    "/cerez-politikasi",
    "/gizlilik",
  ];

  return [
    ...staticPaths.map((path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...regions.map((r) => ({
      url: `${base}/bolgeler/${r.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...services.map((s) => ({
      url: `${base}/hizmetler/${s.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...posts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
