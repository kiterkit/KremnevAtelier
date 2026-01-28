import type { Metadata } from "next";
import type { Seo } from "@/lib/content";

export function buildMetadata(seo: Seo, pathname?: `/${string}`): Metadata {
  const title = seo.title;
  const description = seo.description;

  return {
    title,
    description,
    alternates:
      seo.canonical || pathname
        ? { canonical: seo.canonical ?? pathname }
        : undefined,
    robots: seo.noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title,
      description,
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
