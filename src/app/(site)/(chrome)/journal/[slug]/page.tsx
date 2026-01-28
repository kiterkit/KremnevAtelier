import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/sections/Hero";
import AboutTeam from "@/components/sections/AboutTeam";
import JournalCTA from "@/components/sections/JournalCTA";
import { getAllArticles, getArticleBySlug } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = getArticleBySlug(params.slug);
  return article
    ? buildMetadata(article.seo, `/journal/${params.slug}`)
    : buildMetadata({ title: "404", description: "" }, "/journal");
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  return (
    <>
      <Hero {...article.hero} />
      <AboutTeam
        title="Текст"
        body={(article.paragraphs ?? [""]).join("\n\n")}
        bullets={article.tags}
      />
      <JournalCTA
        title="Хотите обсудить проект?"
        body="Оставьте контакты — ответим с предложением следующего шага."
        actions={[{ label: "Контакты", href: "/contacts" }]}
      />
    </>
  );
}
