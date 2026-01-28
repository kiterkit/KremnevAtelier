import Link from "next/link";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import { cn } from "@/lib/cn";

export default function Directions({
  title,
  groups,
  className,
}: {
  title: string;
  groups: ReadonlyArray<{
    title: string;
    items: ReadonlyArray<{ title: string; imageSrc?: string; href?: string }>;
  }>;
  className?: string;
}) {
  return (
    <section className={cn("py-12", className)}>
      <Container>
        <Heading as="h2" size="lg">
          {title}
        </Heading>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {groups.map((group) => (
            <div key={group.title} className="space-y-4">
              <Heading as="h3" size="md" className="text-base">
                {group.title}
              </Heading>
              <div className="grid gap-4 sm:grid-cols-2">
                {group.items.map((item) => {
                  const content = (
                    <>
                      <div className="aspect-[4/3] rounded-2xl border border-gray bg-beige" />
                      <div className="mt-3 text-sm font-medium">{item.title}</div>
                    </>
                  );

                  return item.href ? (
                    <Link key={item.title} href={item.href} className="block">
                      <Card className="h-full">{content}</Card>
                    </Link>
                  ) : (
                    <Card key={item.title} className="h-full">
                      {content}
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
