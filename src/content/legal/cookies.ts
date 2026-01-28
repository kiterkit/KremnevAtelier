import type { LegalDoc } from "@/content/legal/types";

export const cookiesDoc: LegalDoc = {
  slug: "cookies",
  h1: "Cookies Policy",
  seo: {
    title: "Cookies Policy",
    description:
      "Placeholder cookies policy. Explain what cookies are used and why.",
  },
  lastUpdated: "2026-01-28",
  sections: [
    {
      title: "What cookies we use",
      paragraphs: [
        "Currently, we only use an essential cookie to store your consent choice.",
        "If you add analytics later, list cookies, purposes, and expiration.",
      ],
    },
    {
      title: "Managing cookies",
      paragraphs: [
        "Explain how users can change settings in the browser.",
        "Explain that declining non-essential cookies will not break core functionality.",
      ],
    },
  ],
  relatedLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Imprint / Legal Notice", href: "/imprint" },
  ],
};

