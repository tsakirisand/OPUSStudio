import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.url) return [];
  const mainPages = ["", "/services", "/work", "/pricing", "/contact"];
  return [
    ...mainPages.map((path, index) => ({ url: `${siteConfig.url}${path}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: index === 0 ? 1 : 0.8 })),
    { url: `${siteConfig.url}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
