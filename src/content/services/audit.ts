import type { Service } from "@/lib/content";

export const auditService: Service = {
  slug: "audit",
  seo: {
    title: "Audit",
    description:
      "Placeholder audit service page. Replace with details about your evaluation and deliverables.",
  },
  hero: {
    title: "Audit",
    subtitle:
      "A structured review of UX, messaging, and technical foundations — with actionable fixes.",
    locationLabel: "Service",
    metaLeft: ["Messaging", "SEO basics"],
    metaRight: ["Performance", "Next steps plan"],
    primaryCta: { label: "Contact", href: "/contacts" },
    secondaryCta: { label: "View consulting", href: "/services/consulting" },
  },
  highlights: [
    "Clarity, hierarchy, and conversion-focused copy.",
    "Metadata and on-page structure basics.",
    "Core Web Vitals and loading behavior.",
  ],
};
