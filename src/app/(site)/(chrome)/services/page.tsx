import type { Metadata } from "next";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Hero from "@/components/sections/Hero";
import { getAllServices } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Services",
    description: "Overview of services. Detail pages are generated from slugs.",
  }, "/services");
}

export default function ServicesIndexPage() {
  const services = getAllServices();

  const items = services.map((s) => ({
    title: s.seo.title,
    description: s.seo.description,
    href: `/services/${s.slug}`,
  }));

  return (
    <>
      <Hero
        title="Services"
        subtitle="Two sample service pages are generated from hardcoded slugs."
        locationLabel="Overview"
        primaryCta={{ label: "Contact", href: "/contacts" }}
      />
      <ServicesGrid title="All services" items={items} />
    </>
  );
}
