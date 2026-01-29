import type { ReactNode } from "react";
import Header from "@/components/sections/Header";
import { homePage } from "@/content/pages/home";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-beige text-black">
      <Header
        navItems={homePage.header.navItems}
        contacts={homePage.header.contacts}
        cta={homePage.header.cta}
      />
      <main className="pt-12">{children}</main>
    </div>
  );
}
