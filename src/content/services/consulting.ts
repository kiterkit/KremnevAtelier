import type { Service } from "@/lib/content";

export const consultingService: Service = {
  slug: "consulting",
  seo: {
    title: "Consulting",
    description:
      "Placeholder consulting service page. Replace with your offer, outcomes, and process.",
  },
  hero: {
    title: "Consulting",
    subtitle:
      "A focused engagement to clarify direction, reduce risk, and move faster.",
    locationLabel: "Service",
    metaLeft: ["Audit + recommendations", "Implementation plan"],
    metaRight: ["Hands-on support", "Fast iteration"],
    primaryCta: { label: "Contact", href: "/contacts" },
    secondaryCta: { label: "Pricing", href: "/pricing" },
  },
  highlights: [
    "A clear list of improvements prioritized by impact.",
    "A minimal plan that ships in weeks, not months.",
    "Hands-on support to keep momentum.",
  ],
};
