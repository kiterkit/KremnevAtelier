import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import AboutTeam from "@/components/sections/AboutTeam";
import ContactForm from "@/components/sections/ContactForm";
import { buildMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Сотрудничество",
    description: "Партнерства, подрядчики, коллаборации — типовая страница.",
  }, "/cooperation");
}

export default function CooperationPage() {
  return (
    <>
      <Hero
        title="Сотрудничество"
        subtitle="Опишите формат сотрудничества — мы вернемся с предложением."
        locationLabel="Партнерства"
      />
      <AboutTeam
        title="Форматы"
        body="Плейсхолдер. Сюда можно вынести список форматов: девелоперы, бренды, подрядчики, дизайн‑команды."
        bullets={[
          "Проектирование под вашу команду",
          "Совместная работа по концепции",
          "Авторский надзор и сопровождение",
        ]}
      />
      <ContactForm title="Запрос" submitLabel="Отправить" policyHref="/privacy" />
    </>
  );
}
