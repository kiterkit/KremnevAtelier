import Link from "next/link";
import Container from "@/components/ui/Container";
import { buttonClassName } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export default function Header({
  navItems,
  cta,
  contact,
  lang,
  langHref,
}: {
  navItems: ReadonlyArray<{ label: string; href: string }>;
  cta?: { label: string; href: string };
  contact?: { label?: string; href?: string };
  lang?: "ru" | "en";
  langHref?: { ru: string; en: string };
}) {
  const currentLang = lang ?? "ru";
  const ruHref = langHref?.ru ?? "#";
  const enHref = langHref?.en ?? "#";

  return (
    <header className="sticky top-0 z-50 border-b border-gray bg-beige/80 backdrop-blur">
      <Container className="flex items-center justify-between gap-6 py-4">
        <Link href="/" className="font-[var(--font-display)] tracking-tight">
          Kremnev Atelier
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-black/80 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href + item.label}
              href={item.href}
              className={cn("hover:text-black")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div
            className="hidden items-center rounded-full border border-gray bg-white p-1 text-xs font-medium text-black/70 sm:flex"
            aria-label="Language"
          >
            <Link
              href={ruHref}
              className={cn(
                "rounded-full px-3 py-1",
                currentLang === "ru" ? "bg-beige text-black" : "hover:bg-beige",
              )}
            >
              RU
            </Link>
            <Link
              href={enHref}
              className={cn(
                "rounded-full px-3 py-1",
                currentLang === "en" ? "bg-beige text-black" : "hover:bg-beige",
              )}
            >
              EN
            </Link>
          </div>

          {contact?.href ? (
            <Link
              href={contact.href}
              className="hidden text-sm text-black/70 hover:text-black sm:inline"
            >
              {contact.label ?? "Contact"}
            </Link>
          ) : null}

          {cta ? (
            <Link
              href={cta.href}
              className={buttonClassName({ variant: "primary" })}
            >
              {cta.label}
            </Link>
          ) : null}
        </div>
      </Container>
    </header>
  );
}
