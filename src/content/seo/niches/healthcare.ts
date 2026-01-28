import type { SeoLanding } from "@/lib/content";

export const healthcareNiche: SeoLanding = {
  slug: "healthcare",
  seo: {
    title: "Медицина",
    description:
      "СЕО‑лендос (ниша): медицина. Типовой шаблон, контент заменить позже.",
  },
  hero: {
    title: "Медицина",
    subtitle:
      "Функциональные медицинские пространства: логистика, чистые зоны, комфорт пациентов.",
    locationLabel: "СЕО‑лендос / Ниша",
    primaryCta: { label: "Консультация", href: "/contacts" },
    secondaryCta: { label: "Проекты", href: "/projects" },
  },
  bullets: [
    "Разделение потоков и режимы помещений.",
    "Материалы, устойчивые к обработке.",
    "Навигация и эргономика.",
  ],
};

