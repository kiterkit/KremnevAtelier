import type { ReactNode } from "react";
import Footer from "@/components/sections/Footer";
import Container from "@/components/ui/Container";

export default function ChromeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Container className="py-10">{children}</Container>
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
