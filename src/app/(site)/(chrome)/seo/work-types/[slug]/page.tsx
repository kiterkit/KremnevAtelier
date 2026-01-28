import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/sections/Hero";
import AboutTeam from "@/components/sections/AboutTeam";
import ContactForm from "@/components/sections/ContactForm";
import { getAllSeoWorkTypes, getSeoWorkTypeBySlug } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getAllSeoWorkTypes().map((x) => ({ slug: x.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const page = getSeoWorkTypeBySlug(params.slug);
  return page
    ? buildMetadata(page.seo, `/seo/work-types/${params.slug}`)
    : buildMetadata({ title: "404", description: "" }, "/seo/work-types");
}

export default function SeoWorkTypeLandingPage({
  params,
}: {
  params: { slug: string };
}) {
  const page = getSeoWorkTypeBySlug(params.slug);
  if (!page) notFound();

  return (
    <>
      <Hero {...page.hero} />
      <AboutTeam title="Ключевые пункты" body={page.seo.description} bullets={page.bullets} />
      <ContactForm title="Консультация" submitLabel="Отправить" policyHref="/privacy" />
    </>
  );
}
