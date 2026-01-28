import Link from "next/link";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import { cn } from "@/lib/cn";

export default function FeaturedProjects({
  title,
  items,
  className,
}: {
  title: string;
  items: ReadonlyArray<{
    title: string;
    description?: string;
    imageSrc?: string;
    href?: string;
    tags?: ReadonlyArray<string>;
  }>;
  className?: string;
}) {
  return (
    <section className={cn("py-12", className)}>
      <Container>
        <div className="flex items-end justify-between gap-6">
          <Heading as="h2" size="lg">
            {title}
          </Heading>
          <div className="hidden text-sm text-black/60 sm:block">
            {items.length} selected
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {items.slice(0, 2).map((item) => (
            <Card key={item.title} className="overflow-hidden">
              <div className="aspect-[16/9] rounded-2xl border border-gray bg-beige" />
              <Heading as="h3" size="md" className="mt-4 text-base">
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
              {item.href ? (
                <div className="mt-4">
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-blue hover:underline"
                  >
                    View project
                  </Link>
                </div>
              ) : null}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
