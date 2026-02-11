import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { siteConfig } from "@/site.config";
import { toAbsoluteUrl } from "@/lib/utils";
import "./globals.css";
import { Metrics } from "@/components/metrics";
import { ParallaxScroll } from "@/components/parallax-scroll";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.domain),
  title: {
    default: siteConfig.seo.title,
    template: `%s | ${siteConfig.brand.shortName}`
  },
  description: siteConfig.seo.description,
  keywords: [...siteConfig.seo.keywords],
  applicationName: siteConfig.brand.shortName,
  manifest: "/manifest.webmanifest",
  formatDetection: {
    telephone: false
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: siteConfig.brand.shortName
  },
  icons: {
    icon: [
      { url: "/icons/icon-192.svg", type: "image/svg+xml" },
      { url: "/icons/icon-512.svg", type: "image/svg+xml" }
    ],
    apple: [{ url: "/icons/icon-192.svg", type: "image/svg+xml" }]
  },
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    type: "website",
    locale: siteConfig.seo.locale,
    url: siteConfig.seo.domain,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    siteName: siteConfig.brand.shortName,
    images: [
      {
        url: toAbsoluteUrl(siteConfig.seo.domain, siteConfig.seo.ogImage),
        width: 1200,
        height: 630,
        alt: siteConfig.brand.fullName
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [toAbsoluteUrl(siteConfig.seo.domain, siteConfig.seo.ogImage)]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ff5b3d"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <a className="skip-link" href="#main-content">Перейти к содержимому</a>
        <ParallaxScroll />
        <Metrics />
        {children}
      </body>
    </html>
  );
}
