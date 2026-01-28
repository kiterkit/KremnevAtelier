import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ContactForm from "@/components/sections/ContactForm";
import { buildMetadata } from "@/lib/seo";

const content = {
  seo: {
    title: "Contacts",
    description: "UI-only contact form for now. No backend is connected.",
  },
  hero: {
    title: "Contacts",
    subtitle: "Send a short brief and we’ll respond with next steps.",
    locationLabel: "Contact",
  },
  contactForm: {
    title: "Consultation",
    submitLabel: "Send",
    policyHref: "/privacy",
  },
} as const;

export function generateMetadata(): Metadata {
  return buildMetadata(content.seo, "/contacts");
}

export default function ContactsPage() {
  return (
    <>
      <Hero {...content.hero} />
      <ContactForm {...content.contactForm} />
    </>
  );
}
