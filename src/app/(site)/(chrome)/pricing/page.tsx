import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Stages from "@/components/sections/Stages";
import { buildMetadata } from "@/lib/seo";

const content = {
  seo: {
    title: "Pricing",
    description: "Placeholder pricing route. Replace with real packages later.",
  },
  hero: {
    title: "Pricing",
    subtitle:
      "Placeholder pricing content. Define your packages, retainers, or scope-based pricing.",
    locationLabel: "Info",
    primaryCta: { label: "Contact", href: "/contacts" },
  },
  stages: {
    title: "Example packages",
    items: [
      {
        indexLabel: "01",
        title: "Starter",
        body: "A lightweight engagement to validate direction quickly.",
      },
      {
        indexLabel: "02",
        title: "Standard",
        body: "A balanced package for a full website or focused initiative.",
      },
      {
        indexLabel: "03",
        title: "Premium",
        body: "A comprehensive scope with deeper iteration and support.",
      },
    ],
  },
} as const;

export function generateMetadata(): Metadata {
  return buildMetadata(content.seo, "/pricing");
}

export default function PricingPage() {
  return (
    <>
      <Hero {...content.hero} />
      <Stages {...content.stages} />
    </>
  );
}
