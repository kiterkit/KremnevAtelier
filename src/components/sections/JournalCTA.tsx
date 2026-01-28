import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import { buttonClassName } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export default function JournalCTA({
  title,
  body,
  actions,
  questionBlock,
  className,
}: {
  title: string;
  body?: string;
  actions?: ReadonlyArray<{ label: string; href: string }>;
  questionBlock?: {
    title: string;
    body?: string;
    action?: { label: string; href: string };
  };
  className?: string;
}) {
  return (
    <section className={cn("py-14", className)}>
      <Container>
        <Section variant="dark" className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Heading as="h2" size="lg">
              {title}
            </Heading>
            {body ? (
              <p className="mt-4 max-w-2xl text-sm leading-6 text-beige/80">
                {body}
              </p>
            ) : null}
            {actions?.length ? (
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                {actions.map((a) => (
                  <Link
                    key={a.href + a.label}
                    href={a.href}
                    className={buttonClassName({
                      variant: "secondary",
                      className: "bg-beige text-black hover:bg-white",
                    })}
                  >
                    {a.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          {questionBlock ? (
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-beige/20 bg-black/40 p-6">
                <div className="text-xs font-medium uppercase tracking-wider text-beige/70">
                  Question
                </div>
                <Heading as="h3" size="md" className="mt-3 text-base">
                  {questionBlock.title}
                </Heading>
                {questionBlock.body ? (
                  <p className="mt-2 text-sm leading-6 text-beige/80">
                    {questionBlock.body}
                  </p>
                ) : null}
                {questionBlock.action ? (
                  <div className="mt-5">
                    <Link
                      href={questionBlock.action.href}
                      className={buttonClassName({
                        variant: "primary",
                        className: "bg-blue text-beige hover:bg-blue/90",
                      })}
                    >
                      {questionBlock.action.label}
                    </Link>
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}
        </Section>
      </Container>
    </section>
  );
}
