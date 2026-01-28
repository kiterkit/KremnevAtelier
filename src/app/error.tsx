"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import { buttonClassName } from "@/components/ui/Button";

export default function GlobalError({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <html lang="ru">
      <body className="bg-beige text-black antialiased">
        <Container className="py-24">
          <div className="mx-auto max-w-2xl rounded-3xl border border-gray bg-white p-8">
            <div className="text-xs font-medium uppercase tracking-wider text-black/60">
              Error
            </div>
            <Heading as="h1" size="xl" className="mt-3">
              Something went wrong
            </Heading>
            <p className="mt-4 text-sm leading-6 text-black/70">
              Please try again. If the problem persists, contact us.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => reset()}
                className={buttonClassName({ variant: "primary" })}
              >
                Retry
              </button>
              <Link
                href="/"
                className={buttonClassName({ variant: "secondary" })}
              >
                Home
              </Link>
            </div>
          </div>
        </Container>
      </body>
    </html>
  );
}

