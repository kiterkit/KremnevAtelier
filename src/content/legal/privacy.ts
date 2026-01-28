import type { LegalDoc } from "@/content/legal/types";

export const privacyDoc: LegalDoc = {
  slug: "privacy",
  h1: "Privacy Policy",
  seo: {
    title: "Privacy Policy",
    description:
      "Placeholder privacy policy. Replace with your real policy before production.",
  },
  lastUpdated: "2026-01-28",
  sections: [
    {
      title: "Overview",
      paragraphs: [
        "This is placeholder text and not legal advice.",
        "Describe what personal data you collect, why you collect it, and how you use it.",
      ],
    },
    {
      title: "Data we collect",
      paragraphs: [
        "List data collected via forms (name, email/phone, message) and any technical logs.",
        "If you add analytics later, document cookies, providers, and opt-out options.",
      ],
    },
    {
      title: "Your rights",
      paragraphs: [
        "Describe how users can request access, correction, or deletion of their data.",
        "Provide a contact email for privacy requests.",
      ],
    },
  ],
  relatedLinks: [
    { label: "Terms of Use", href: "/terms" },
    { label: "Cookies Policy", href: "/cookies" },
    { label: "Imprint / Legal Notice", href: "/imprint" },
  ],
};

