import type { SeoLanding } from "@/lib/content";

export const officesNiche: SeoLanding = {
  slug: "offices",
  seo: {
    title: "Офисы",
    description:
      "СЕО‑лендос (ниша): офисы. Типовой шаблон, контент заменить позже.",
  },
  hero: {
    title: "Офисы",
    subtitle:
      "Гибкие рабочие пространства: эффективность, комфорт, бренд работодателя.",
    locationLabel: "СЕО‑лендос / Ниша",
    primaryCta: { label: "Консультация", href: "/contacts" },
    secondaryCta: { label: "Проекты", href: "/projects" },
  },
  bullets: [
    "Планировки под команды и сценарии.",
    "Акустика, свет и эргономика.",
    "Навигация и визуальная система.",
  ],
};

