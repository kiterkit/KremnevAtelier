"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Field from "@/components/ui/Field";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export default function ContactForm({
  title,
  submitLabel,
  policyHref,
  className,
}: {
  title: string;
  submitLabel: string;
  policyHref?: string;
  className?: string;
}) {
  const [sent, setSent] = useState(false);

  return (
    <section className={cn("py-12", className)}>
      <Container>
        <Section variant="default">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Heading as="h2" size="lg">
                {title}
              </Heading>
              <p className="mt-4 text-sm leading-6 text-black/70">
                UI only. Form submissions are not sent anywhere yet.
              </p>
              {policyHref ? (
                <p className="mt-3 text-sm text-black/60">
                  By submitting, you agree to our{" "}
                  <Link href={policyHref} className="text-blue hover:underline">
                    privacy policy
                  </Link>
                  .
                </p>
              ) : null}
            </div>

            <form
              className="lg:col-span-7"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field placeholder="Name" name="name" required />
                <Field placeholder="Phone / Email" name="contact" required />
              </div>

              <textarea
                name="message"
                placeholder="Message"
                className={cn(
                  "mt-4 min-h-[120px] w-full rounded-xl border border-gray bg-white px-4 py-3 text-sm outline-none ring-gray placeholder:text-gray focus:ring-2",
                )}
                required
              />

              <div className="mt-5 flex items-center justify-between gap-4">
                <div className="text-sm text-black/60">
                  {sent ? "Sent (local state)." : "We'll reply soon."}
                </div>
                <Button type="submit">{submitLabel}</Button>
              </div>
            </form>
          </div>
        </Section>
      </Container>
    </section>
  );
}

