import type { MetadataRoute } from "next";
import { siteConfig } from "@/site.config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.brand.fullName,
    short_name: siteConfig.brand.shortName,
    description: siteConfig.seo.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#edf1f8",
    theme_color: "#ff5b3d",
    lang: "ru",
    icons: [
      {
        src: "/icons/icon-192.svg",
        sizes: "192x192",
        type: "image/svg+xml",
        purpose: "maskable"
      },
      {
        src: "/icons/icon-512.svg",
        sizes: "512x512",
        type: "image/svg+xml",
        purpose: "maskable"
      }
    ]
  };
}
