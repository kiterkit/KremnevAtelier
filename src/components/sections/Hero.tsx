import Link from "next/link";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import { buttonClassName } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export default function Hero({
  title,
  subtitle,
  locationLabel,
  metaLeft,
  metaRight,
  primaryCta,
  secondaryCta,
  className,
}: {
  title: string;
  subtitle?: string;
  locationLabel?: string;
  metaLeft?: ReadonlyArray<string>;
  metaRight?: ReadonlyArray<string>;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  className?: string;
}) {
  return (
    <section className={cn("pt-14 pb-10", className)}>
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {locationLabel ? (
              <div className="text-xs font-medium uppercase tracking-wider text-black/60">
                {locationLabel}
              </div>
            ) : null}
            <Heading as="h1" size="xl" className="mt-3">
              {title}
            </Heading>
            {subtitle ? (
              <p className="mt-5 max-w-2xl text-base leading-7 text-black/70">
                {subtitle}
              </p>
            ) : null}

            {(primaryCta || secondaryCta) && (
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                {primaryCta ? (
                  <Link
                    href={primaryCta.href}
                    className={buttonClassName({ variant: "primary" })}
                  >
                    {primaryCta.label}
                  </Link>
                ) : null}
                {secondaryCta ? (
                  <Link
                    href={secondaryCta.href}
                    className={buttonClassName({ variant: "secondary" })}
                  >
                    {secondaryCta.label}
                  </Link>
                ) : null}
              </div>
            )}
          </div>

          {(metaLeft?.length || metaRight?.length) && (
            <div className="lg:col-span-5">
              <div className="grid gap-6 rounded-3xl border border-gray bg-white p-6 sm:grid-cols-2">
                {metaLeft?.length ? (
                  <ul className="space-y-2 text-sm text-black/70">
                    {metaLeft.map((item) => (
                      <li key={item} className="leading-6">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div />
                )}
                {metaRight?.length ? (
                  <ul className="space-y-2 text-sm text-black/70">
                    {metaRight.map((item) => (
                      <li key={item} className="leading-6">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div />
                )}
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
