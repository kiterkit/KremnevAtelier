import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ClientLogos from "@/components/sections/ClientLogos";
import ServicesGrid from "@/components/sections/ServicesGrid";
import AboutTeam from "@/components/sections/AboutTeam";
import Directions from "@/components/sections/Directions";
import ContactForm from "@/components/sections/ContactForm";
import Stages from "@/components/sections/Stages";
import JournalCTA from "@/components/sections/JournalCTA";
import Footer from "@/components/sections/Footer";
import { homePage } from "@/content/pages/home";
import { buildMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return buildMetadata(homePage.seo, "/");
}

export default function HomePage() {
  return (
    <>
      <Header {...homePage.header} />
      <Hero {...homePage.hero} />
      <FeaturedProjects {...homePage.featuredProjects} />
      <ClientLogos {...homePage.clientLogos} />
      <ServicesGrid {...homePage.services} />
      <AboutTeam {...homePage.aboutTeam} />
      <Directions {...homePage.directions} />
      <ContactForm {...homePage.contactForm} />
      <Stages {...homePage.stages} />
      <JournalCTA {...homePage.journalCta} />
      <Footer {...homePage.footer} />
    </>
  );
}
