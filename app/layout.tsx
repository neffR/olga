import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Montserrat } from "next/font/google";
import { siteConfig } from "@/site.config";
import { toAbsoluteUrl } from "@/lib/utils";
import "./globals.css";
import { Metrics } from "@/components/metrics";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.domain),
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  alternates: { canonical: "/" },
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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className={montserrat.variable}>
        <Metrics />
        {children}
      </body>
    </html>
  );
}
