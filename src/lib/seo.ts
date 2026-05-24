import type { Metadata } from "next";
import { siteConfig } from "./config";

interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
}

export function buildMetadata({
  title,
  description,
  path = "",
  image,
  type = "website",
}: SeoProps = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | 7/24 Tanker Su Teslimatı`;
  const desc = description ?? siteConfig.description;
  const url = `${siteConfig.url}${path}`;
  const ogImage = image ?? siteConfig.defaultOG;

  return {
    title: fullTitle,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: siteConfig.name,
      images: [{ url: ogImage, width: 1200, height: 630 }],
      locale: "tr_TR",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [ogImage],
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    image: `${siteConfig.url}${siteConfig.defaultOG}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bodrum",
      addressRegion: "Muğla",
      addressCountry: "TR",
    },
    areaServed: [
      { "@type": "City", name: "Bodrum" },
      { "@type": "City", name: "Milas" },
      { "@type": "Place", name: "Yalıkavak" },
      { "@type": "Place", name: "Turgutreis" },
      { "@type": "Place", name: "Gümbet" },
      { "@type": "Place", name: "Bitez" },
      { "@type": "Place", name: "Ortakent" },
      { "@type": "Place", name: "Gündoğan" },
      { "@type": "Place", name: "Türkbükü" },
      { "@type": "Place", name: "Göltürkbükü" },
      { "@type": "Place", name: "Güvercinlik" },
      { "@type": "Place", name: "Mumcular" },
      { "@type": "Place", name: "Güllük" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "₺₺",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating.value.toString(),
      reviewCount: siteConfig.rating.count.toString(),
    },
  };
}

export function jsonLdScript(data: object) {
  return {
    __html: JSON.stringify(data),
  };
}
