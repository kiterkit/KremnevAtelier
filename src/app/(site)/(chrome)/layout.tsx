import type { ReactNode } from "react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Container from "@/components/ui/Container";

const navItems = [
  { label: "Проекты", href: "/projects" },
  { label: "Журнал", href: "/journal" },
  { label: "Про ателье", href: "/about" },
  { label: "Сотрудничество", href: "/cooperation" },
  { label: "Вакансии", href: "/vacancies" },
];

export default function ChromeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header
        navItems={navItems}
        cta={{ label: "Консультация", href: "/contacts" }}
        contact={{ label: "+1 (000) 000‑00‑00", href: "/contacts" }}
        lang="ru"
        langHref={{ ru: "#", en: "#" }}
      />
      <main>
        <Container className="py-10">{children}</Container>
      </main>
      <Footer
        legal={{
          privacyHref: "/privacy",
          termsHref: "/terms",
          cookiesHref: "/cookies",
          imprintHref: "/imprint",
        }}
        links={[
          { label: "Проекты", href: "/projects" },
          { label: "Контакты", href: "/contacts" },
        ]}
      />
    </>
  );
}
