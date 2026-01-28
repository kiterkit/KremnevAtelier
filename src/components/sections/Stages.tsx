import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import { cn } from "@/lib/cn";

export default function Stages({
  title,
  items,
  className,
}: {
  title: string;
  items: ReadonlyArray<{
    indexLabel: string;
    title: string;
    body: string;
    duration?: string;
  }>;
  className?: string;
}) {
  return (
    <section className={cn("py-12", className)}>
      <Container>
        <Heading as="h2" size="lg">
          {title}
        </Heading>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={item.indexLabel + item.title} className="h-full">
              <div className="flex items-baseline justify-between gap-4">
                <div className="text-xs font-medium uppercase tracking-wider text-black/60">
                  {item.indexLabel}
                </div>
                {item.duration ? (
                  <div className="text-xs text-black/50">{item.duration}</div>
                ) : null}
              </div>
              <Heading as="h3" size="md" className="mt-3 text-base">
                {item.title}
              </Heading>
              <p className="mt-2 text-sm leading-6 text-black/70">{item.body}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
