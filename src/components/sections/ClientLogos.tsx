import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import { cn } from "@/lib/cn";

export default function ClientLogos({
  title,
  logos,
  className,
}: {
  title?: string;
  logos: ReadonlyArray<{ name: string; src?: string }>;
  className?: string;
}) {
  return (
    <section className={cn("py-10", className)}>
      <Container>
        {title ? (
          <Heading as="h2" size="lg">
            {title}
          </Heading>
        ) : null}

        <div className={cn("mt-6 grid gap-3", "grid-cols-2 sm:grid-cols-4")}>
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex h-14 items-center justify-center rounded-2xl border border-gray bg-white text-sm text-black/60"
              aria-label={logo.name}
              title={logo.name}
            >
              {logo.name}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
