import type { LegalDoc } from "@/content/legal/types";

export const imprintDoc: LegalDoc = {
  slug: "imprint",
  h1: "Imprint / Legal Notice",
  seo: {
    title: "Imprint",
    description:
      "Placeholder imprint/legal notice. Add company details as required by law.",
  },
  lastUpdated: "2026-01-28",
  sections: [
    {
      title: "Company information",
      paragraphs: [
        "Company name: Placeholder",
        "Address: Placeholder",
        "Registration: Placeholder (if applicable)",
      ],
    },
    {
      title: "Contact",
      paragraphs: ["Email: hello@example.com", "Phone: +1 (000) 000‑00‑00"],
    },
  ],
  relatedLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Cookies Policy", href: "/cookies" },
  ],
};

