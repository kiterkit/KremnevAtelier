import Link from "next/link";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import { buttonClassName } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export default function ServicesGrid({
  title,
  items,
  className,
}: {
  title: string;
  items: ReadonlyArray<{ title: string; description?: string; href?: string }>;
  className?: string;
}) {
  return (
    <section className={cn("py-12", className)}>
      <Container>
        <Heading as="h2" size="lg">
          {title}
        </Heading>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={item.title}>
              <Heading as="h3" size="md" className="text-base">
                {item.title}
              </Heading>
              {item.description ? (
                <p className="mt-2 text-sm leading-6 text-black/70">
                  {item.description}
                </p>
              ) : null}
              {item.href ? (
                <Link
                  className={buttonClassName({
                    variant: "secondary",
                    size: "sm",
                    className: "mt-4",
                  })}
                  href={item.href}
                >
                  Подробнее
                </Link>
              ) : null}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
