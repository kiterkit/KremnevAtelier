import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/sections/Hero";
import AboutTeam from "@/components/sections/AboutTeam";
import { getAllServices, getServiceBySlug } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getAllServices().map((service) => ({ slug: service.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const page = getServiceBySlug(params.slug);
  if (!page) return buildMetadata({ title: "Not found", description: "" }, "/services");
  return buildMetadata(page.seo, `/services/${params.slug}`);
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();
  return (
    <>
      <Hero {...service.hero} />
      <AboutTeam
        title="Highlights"
        body={service.seo.description}
        bullets={service.highlights}
      />
    </>
  );
}
