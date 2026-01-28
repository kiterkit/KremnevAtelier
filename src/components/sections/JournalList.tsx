import Link from "next/link";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import { cn } from "@/lib/cn";

export default function JournalList({
  title,
  items,
  className,
}: {
  title: string;
  items: ReadonlyArray<{
    title: string;
    description?: string;
    href?: string;
    tags?: ReadonlyArray<string>;
  }>;
  className?: string;
}) {
  return (
    <section className={cn("py-12", className)}>
      <Container>
        <Heading as="h2" size="lg">
          {title}
        </Heading>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {items.map((item) => {
            const content = (
              <Card className="h-full">
                <Heading as="h3" size="md" className="text-base">
                  {item.title}
                </Heading>
                {item.description ? (
                  <p className="mt-2 text-sm leading-6 text-black/70">
                    {item.description}
                  </p>
                ) : null}
                {item.tags?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-gray bg-white px-3 py-1 text-xs text-black/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </Card>
            );

            return item.href ? (
              <Link key={item.href + item.title} href={item.href} className="block">
                {content}
              </Link>
            ) : (
              <div key={item.title}>{content}</div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

