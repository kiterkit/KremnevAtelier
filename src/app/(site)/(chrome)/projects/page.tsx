import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import { getAllProjects } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Проекты",
    description: "Подборка проектов. Сейчас — плейсхолдеры для структуры.",
  }, "/projects");
}

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <>
      <Hero
        title="Проекты"
        subtitle="Типовые карточки. Позже подключим реальные изображения и кейсы."
        locationLabel="Портфолио"
      />
      <ProjectsGrid
        title="Избранное"
        items={projects.map((p) => ({
          title: p.seo.title,
          description: p.seo.description,
          href: `/projects/${p.slug}`,
          tags: p.tags,
        }))}
      />
    </>
  );
}
