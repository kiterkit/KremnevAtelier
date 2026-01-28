import type { Location } from "@/lib/content";

export const downtownLocation: Location = {
  slug: "downtown",
  seo: {
    title: "Downtown",
    description:
      "Example location page. Replace with real local details, directions, and service coverage.",
  },
  hero: {
    title: "Downtown",
    subtitle:
      "A placeholder location page powered by `generateStaticParams()` and hardcoded slugs.",
    locationLabel: "Location",
    metaLeft: ["On-site availability", "Local partners"],
    metaRight: ["Remote-friendly", "By appointment"],
    primaryCta: { label: "Services", href: "/services" },
    secondaryCta: { label: "Contact", href: "/contacts" },
  },
  highlights: [
    "Meeting options, travel radius, and scheduling.",
    "Collaborators and trusted vendors.",
    "Remote-first engagements available.",
  ],
};
