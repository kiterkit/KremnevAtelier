import type { Location } from "@/lib/content";

export const suburbLocation: Location = {
  slug: "suburb",
  seo: {
    title: "Suburb",
    description:
      "Example location page. Replace with real local details, directions, and service coverage.",
  },
  hero: {
    title: "Suburb",
    subtitle:
      "Another example location slug. Add more files under `src/content/locations/` to grow.",
    locationLabel: "Location",
    metaLeft: ["On-site availability", "Coverage radius"],
    metaRight: ["By appointment", "Remote-friendly"],
    primaryCta: { label: "Services", href: "/services" },
    secondaryCta: { label: "Contact", href: "/contacts" },
  },
  highlights: [
    "Define travel policy and any fees.",
    "List neighborhoods/cities/radius coverage.",
  ],
};
