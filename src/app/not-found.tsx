import Link from "next/link";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import { buttonClassName } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="py-24">
      <div className="mx-auto max-w-2xl rounded-3xl border border-gray bg-white p-8">
        <div className="text-xs font-medium uppercase tracking-wider text-black/60">
          404
        </div>
        <Heading as="h1" size="xl" className="mt-3">
          Page not found
        </Heading>
        <p className="mt-4 text-sm leading-6 text-black/70">
          The page you’re looking for doesn’t exist or has moved.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className={buttonClassName({ variant: "primary" })}>
            Back to home
          </Link>
          <Link
            href="/contacts"
            className={buttonClassName({ variant: "secondary" })}
          >
            Contact
          </Link>
        </div>
      </div>
    </Container>
  );
}

