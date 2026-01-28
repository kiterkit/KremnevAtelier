import type { LegalDoc } from "@/content/legal/types";

export const termsDoc: LegalDoc = {
  slug: "terms",
  h1: "Terms of Use",
  seo: {
    title: "Terms of Use",
    description:
      "Placeholder terms of use. Replace with your real terms before production.",
  },
  lastUpdated: "2026-01-28",
  sections: [
    {
      title: "Acceptance of terms",
      paragraphs: [
        "This is placeholder text and not legal advice.",
        "Explain that using the site implies agreement with these terms.",
      ],
    },
    {
      title: "Content and intellectual property",
      paragraphs: [
        "Describe ownership of site content, trademarks, and permitted use.",
        "Specify restrictions on copying/redistribution if applicable.",
      ],
    },
    {
      title: "Limitation of liability",
      paragraphs: [
        "Define limitations appropriate to your jurisdiction.",
        "Clarify that the site content is informational and may change.",
      ],
    },
  ],
  relatedLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cookies Policy", href: "/cookies" },
    { label: "Imprint / Legal Notice", href: "/imprint" },
  ],
};

