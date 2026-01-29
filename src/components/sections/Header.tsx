"use client";

import Link from "next/link";
import { useMemo } from "react";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/cn";

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg
      width="27"
      height="24"
      viewBox="0 0 27 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M26.6 0.843185L22.3924 22.8111C22.3924 22.8111 21.8037 24.3342 20.1865 23.6037L10.4784 15.8949L10.4334 15.8722C11.7447 14.6528 21.9134 5.18416 22.3578 4.75496C23.0458 4.09025 22.6187 3.69453 21.8199 4.19665L6.79951 14.0753L1.00469 12.0561C1.00469 12.0561 0.0927602 11.7201 0.00502998 10.9897C-0.0838546 10.258 1.03471 9.86227 1.03471 9.86227L24.6584 0.264548C24.6584 0.264548 26.6 -0.618949 26.6 0.843185Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Header({
  navItems,
  cta,
  contact,
  contacts,
}: {
  navItems: ReadonlyArray<{ label: string; href: string }>;
  cta?: { label: string; href: string };
  contact?: { label?: string; href?: string };
  contacts?: ReadonlyArray<string>;
}) {

  const navItemClassName = useMemo(
    () =>
      "text-[14px] font-[var(--font-body)] text-[var(--text-primary)] hover:text-blue transition-colors duration-150",
    [],
  );

  const headerClassName =
    "fixed inset-x-0 top-0 z-50 bg-[rgba(255,255,255,0.28)] border border-[rgba(255,255,255,0.35)] backdrop-blur-[12px] backdrop-saturate-150 shadow-[0_4px_16px_rgba(27,29,37,0.08)] overflow-hidden before:absolute before:inset-0 before:pointer-events-none before:bg-gradient-to-b before:from-white/50 before:via-white/40 before:to-white/10";

  return (
    <header className={headerClassName}>
      <Container className="relative z-10 flex h-12 items-center gap-6">
        <Link href="/" className="inline-flex items-center">
          <img
            src="/brand/icon.svg"
            alt="Kremnev Atelier"
            className="h-6 w-6"
          />
        </Link>

        <nav className="hidden flex-1 items-center justify-between gap-[clamp(16px,2.4vw,40px)] md:flex md:pl-[80px]">
          {navItems.map((item) => (
            <Link
              key={item.href + item.label}
              href={item.href}
              className={navItemClassName}
            >
              {item.label}
            </Link>
          ))}

          {contacts?.length &&
            contacts.map((t) => {
              const isEmail = t.includes("@");
              const isPhone = t.trim().startsWith("+");
              const href = isEmail
                ? `mailto:${t}`
                : isPhone
                  ? `tel:${t.replace(/\\s|\\(|\\)|\\-/g, "")}`
                  : undefined;

              return href ? (
                <Link key={t} href={href} className={navItemClassName}>
                  {t}
                </Link>
              ) : (
                <span key={t} className={navItemClassName}>
                  {t}
                </span>
              );
            })}

          {contact?.href ? (
            <Link href={contact.href} className={cn(navItemClassName, "lg:inline-flex")}>
              {contact.label ?? "Contact"}
            </Link>
          ) : null}

          {cta ? (
            <Link
              href={cta.href}
              className={cn(
                "group inline-flex items-center gap-[7px] transition-colors duration-150",
                navItemClassName,
              )}
            >
              <span className="transition-colors duration-150 group-hover:text-[var(--text-primary)]">
                {cta.label}
              </span>
              <span className="relative inline-flex h-[14px] w-[14px] items-center justify-center">
              <span className="h-[7px] w-[7px] rounded-full bg-[rgba(27,29,37,0.4)] animate-[pulseDot_1.2s_ease-in-out_infinite] transition-opacity group-hover:opacity-0 group-hover:bg-transparent group-hover:[animation-play-state:paused]" />
                <TelegramIcon
                  className="absolute h-[14px] w-[14px] opacity-0 transition-opacity group-hover:opacity-100 text-current"
                  aria-hidden="true"
                />
              </span>
            </Link>
          ) : null}
        </nav>

        <button
          type="button"
          className={cn(
            "inline-flex items-center justify-center border border-[rgba(27,29,37,0.2)] bg-white/60 px-3 py-2 md:hidden hover:text-blue",
            navItemClassName,
          )}
          aria-label="Open menu"
        >
          Меню
        </button>
      </Container>
    </header>
  );
}
