import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ServicesGrid from "@/components/sections/ServicesGrid";
import AboutTeam from "@/components/sections/AboutTeam";
import Directions from "@/components/sections/Directions";
import ContactForm from "@/components/sections/ContactForm";
import Stages from "@/components/sections/Stages";
import Footer from "@/components/sections/Footer";
import { homePage } from "@/content/pages/home";
import { buildMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return buildMetadata(homePage.seo, "/");
}

export default function HomePage() {
  return (
    <>
      <Hero className="-mt-12" />
      <FeaturedProjects items={homePage.featuredProjects.items} trust={homePage.featuredProjects.trust} />
      <ServicesGrid
        label={homePage.services.label}
        title={homePage.services.title}
        subtitle={homePage.services.subtitle}
        image={homePage.services.image}
        items={homePage.services.items.map((i) => ({ title: i.title }))}
        featured={homePage.services.featured}
      />
      <AboutTeam
        variant="home"
        label={homePage.aboutTeam.label}
        title={homePage.aboutTeam.title}
        subtitle={homePage.aboutTeam.subtitle}
        bodyLines={homePage.aboutTeam.bodyLines}
        ctaLine={homePage.aboutTeam.ctaLine}
        team={homePage.aboutTeam.team}
      />
      <Directions
        variant="home"
        label={homePage.directions.label}
        title={homePage.directions.title}
        tags={homePage.directions.tags}
        ctaLabel={homePage.directions.ctaLabel}
        images={homePage.directions.images}
        principles={homePage.directions.principles}
      />
      <ContactForm
        title={homePage.contactForm.title}
        subtitle={homePage.contactForm.subtitle}
        fields={homePage.contactForm.fields}
        messageLabel={homePage.contactForm.messageLabel}
        consentLabel={homePage.contactForm.consentLabel}
        briefLinkLabel={homePage.contactForm.briefLinkLabel}
        submitLabel={homePage.contactForm.submitLabel}
        policyHref="/privacy"
        email={homePage.contactForm.email}
        phone={homePage.contactForm.phone}
        image={homePage.contactForm.image}
      />
      <Stages
        variant="home"
        label={homePage.stages.label}
        title={homePage.stages.title}
        subtitle={homePage.stages.subtitle}
        items={homePage.stages.items}
        detail={homePage.stages.detail}
      />
      <Footer variant="home" {...homePage.footer} />
    </>
  );
}
