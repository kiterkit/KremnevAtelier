import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/sections/Hero";
import AboutTeam from "@/components/sections/AboutTeam";
import { getAllLocations, getLocationBySlug } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getAllLocations().map((location) => ({ slug: location.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const page = getLocationBySlug(params.slug);
  if (!page) return buildMetadata({ title: "Not found", description: "" }, "/locations");
  return buildMetadata(page.seo, `/locations/${params.slug}`);
}

export default function LocationDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const location = getLocationBySlug(params.slug);
  if (!location) notFound();
  return (
    <>
      <Hero {...location.hero} />
      <AboutTeam
        title="Local notes"
        body={location.seo.description}
        bullets={location.highlights}
      />
    </>
  );
}
