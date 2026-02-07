import type { MetadataRoute } from "next";
import { siteConfig } from "@/site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.seo.domain,
      changeFrequency: "weekly",
      priority: 1
    }
  ];
}
