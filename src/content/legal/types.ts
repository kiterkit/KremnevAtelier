import type { Seo } from "@/lib/content";

export type LegalDoc = {
  slug: "privacy" | "terms" | "cookies" | "imprint";
  h1: string;
  seo: Seo;
  lastUpdated: string; // YYYY-MM-DD
  sections: ReadonlyArray<{ title: string; paragraphs: ReadonlyArray<string> }>;
  relatedLinks: ReadonlyArray<{ label: string; href: string }>;
};

