import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/sections/Hero";
import AboutTeam from "@/components/sections/AboutTeam";
import { getAllProjects, getProjectBySlug } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProjectBySlug(params.slug);
  return project
    ? buildMetadata(project.seo, `/projects/${params.slug}`)
    : buildMetadata({ title: "404", description: "" }, "/projects");
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <>
      <Hero {...project.hero} />
      <AboutTeam
        title="Описание"
        body={project.description ?? project.seo.description}
        bullets={project.details}
      />
    </>
  );
}
