import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/sections/Hero";
import AboutTeam from "@/components/sections/AboutTeam";
import ContactForm from "@/components/sections/ContactForm";
import { getAllSeoNiches, getSeoNicheBySlug } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getAllSeoNiches().map((x) => ({ slug: x.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const page = getSeoNicheBySlug(params.slug);
  return page
    ? buildMetadata(page.seo, `/seo/niches/${params.slug}`)
    : buildMetadata({ title: "404", description: "" }, "/seo/niches");
}

export default function SeoNicheLandingPage({ params }: { params: { slug: string } }) {
  const page = getSeoNicheBySlug(params.slug);
  if (!page) notFound();

  return (
    <>
      <Hero {...page.hero} />
      <AboutTeam title="Подход" body={page.seo.description} bullets={page.bullets} />
      <ContactForm title="Консультация" submitLabel="Отправить" policyHref="/privacy" />
    </>
  );
}
