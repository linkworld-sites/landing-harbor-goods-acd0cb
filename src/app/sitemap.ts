import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getPosts } from "@/lib/posts";
import { getLegalSlugs } from "@/lib/legal";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now },
    { url: `${SITE_URL}/shop`, lastModified: now },
    { url: `${SITE_URL}/blog`, lastModified: now },
  ];
  const postRoutes: MetadataRoute.Sitemap = getPosts().map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: now,
  }));
  const legalRoutes: MetadataRoute.Sitemap = getLegalSlugs().map((slug) => ({
    url: `${SITE_URL}/legal/${slug}`,
    lastModified: now,
  }));
  return [...staticRoutes, ...postRoutes, ...legalRoutes];
}
