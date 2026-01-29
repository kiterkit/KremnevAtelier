"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Field from "@/components/ui/Field";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/cn";

function ImagePlaceholder({
  label,
  aspect,
}: {
  label: string;
  aspect: `${number}/${number}`;
}) {
  return (
    <div
      className={cn(
        `aspect-[${aspect}]`,
        "bg-gray/10 flex items-center justify-center text-xs text-black/60",
      )}
    >
      IMAGE PLACEHOLDER: {label}
    </div>
  );
}

export default function ContactForm({
  title,
  subtitle,
  fields,
  messageLabel,
  consentLabel,
  briefLinkLabel,
  submitLabel,
  policyHref,
  email,
  phone,
  image,
  className,
}: {
  title: string;
  subtitle?: string;
  fields?: ReadonlyArray<{ label: string; required?: boolean }>;
  messageLabel?: string;
  consentLabel?: string;
  briefLinkLabel?: string;
  submitLabel: string;
  policyHref?: string;
  email?: string;
  phone?: string;
  image?: { label: string; aspect: `${number}/${number}` };
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
              {subtitle ? (
                <p className="mt-4 text-sm whitespace-pre-line">{subtitle}</p>
              ) : (
                <p className="mt-4 text-sm">
                  UI only. Form submissions are not sent anywhere yet.
                </p>
              )}
              {policyHref && !consentLabel ? (
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
                {(fields?.length ? fields : [
                  { label: "Name", required: true },
                  { label: "Phone / Email", required: true },
                ]).map((f) => (
                  <div key={f.label} className="space-y-2">
                    <div className="text-sm">{f.label}</div>
                    <Field
                      placeholder={f.label}
                      name={f.label}
                      required={Boolean(f.required)}
                    />
                  </div>
                ))}
              </div>

              <textarea
                name="message"
                placeholder={messageLabel ?? "Message"}
                className={cn(
                  "mt-4 min-h-[120px] w-full rounded-xl border border-gray bg-white px-4 py-3 text-sm outline-none ring-gray placeholder:text-gray focus:ring-2",
                )}
                required
              />

              <div className="mt-4 flex items-center gap-3 text-sm">
                <input type="checkbox" className="h-4 w-4" />
                <span>{consentLabel ?? "I agree to the privacy policy"}</span>
              </div>

              <div className="mt-5 flex items-center justify-between gap-4">
                <div className="text-sm text-black/60">
                  {sent ? "Sent (local state)." : "We'll reply soon."}
                </div>
                <Button type="submit">{submitLabel}</Button>
              </div>

              {briefLinkLabel ? (
                <div className="mt-4 text-sm">
                  <Link href="#" className="underline">
                    {briefLinkLabel}
                  </Link>
                </div>
              ) : null}

              {(email || phone) && (
                <div className="mt-6 grid gap-2 text-sm">
                  {email ? <div>{email}</div> : null}
                  {phone ? <div>{phone}</div> : null}
                </div>
              )}
            </form>
          </div>

          {image ? (
            <div className="mt-8">
              <ImagePlaceholder label={image.label} aspect={image.aspect} />
            </div>
          ) : null}
        </Section>
      </Container>
    </section>
  );
}
