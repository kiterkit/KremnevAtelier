import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import AboutTeam from "@/components/sections/AboutTeam";
import JournalCTA from "@/components/sections/JournalCTA";
import { buildMetadata } from "@/lib/seo";

const content = {
  seo: {
    title: "About",
    description: "Placeholder about page. Replace with your real story and team.",
  },
  hero: {
    title: "About",
    subtitle:
      "Neutral placeholder copy. This route exists so navigation works during scaffolding. (Dev note: use Node 22 LTS + try `npm run dev:turbo` / `npm run dev:nosourcemaps` if build feels slow.)",
    locationLabel: "Studio",
    primaryCta: { label: "Contact", href: "/contacts" },
    secondaryCta: { label: "Services", href: "/services" },
  },
  aboutTeam: {
    title: "Team",
    body: "Placeholder team intro. Add founder bio, key values, and differentiators.",
    bullets: ["Senior-led execution", "Clear process", "Quality in details"],
  },
  journalCta: {
    title: "Next",
    body: "Want to see what we do? Explore services or reach out.",
    actions: [
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contacts" },
    ],
  },
} as const;

export function generateMetadata(): Metadata {
  return buildMetadata(content.seo, "/about");
}

export default function AboutPage() {
  return (
    <>
      <Hero {...content.hero} />
      <AboutTeam {...content.aboutTeam} />
      <JournalCTA {...content.journalCta} />
    </>
  );
}
