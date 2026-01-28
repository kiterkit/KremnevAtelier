import type { SeoLanding } from "@/lib/content";

export const developmentNiche: SeoLanding = {
  slug: "development",
  seo: {
    title: "Девелопмент",
    description:
      "СЕО‑лендос (ниша): девелопмент. Типовой шаблон, контент заменить позже.",
  },
  hero: {
    title: "Девелопмент",
    subtitle:
      "Архитектура и продуктовые пространства, которые поддерживают продажи и эксплуатацию.",
    locationLabel: "СЕО‑лендос / Ниша",
    primaryCta: { label: "Обсудить", href: "/contacts" },
    secondaryCta: { label: "Проекты", href: "/projects" },
  },
  bullets: [
    "Работа с ТЗ, нормативами и ограничениями участка.",
    "Концепция, планировочные решения, фасады.",
    "Материалы и решения с учетом эксплуатации.",
  ],
};

