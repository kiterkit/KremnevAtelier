import type { SeoLanding } from "@/lib/content";

export const privateNiche: SeoLanding = {
  slug: "private",
  seo: {
    title: "Частные объекты",
    description:
      "СЕО‑лендос (ниша): частные объекты. Типовой шаблон, контент заменить позже.",
  },
  hero: {
    title: "Частные объекты",
    subtitle:
      "Дома и квартиры: функциональность, материализация идеи и аккуратная реализация.",
    locationLabel: "СЕО‑лендос / Ниша",
    primaryCta: { label: "Консультация", href: "/contacts" },
    secondaryCta: { label: "Проекты", href: "/projects" },
  },
  bullets: [
    "Планировки и сценарии жизни.",
    "Материалы и деталировка.",
    "Сопровождение реализации.",
  ],
};

