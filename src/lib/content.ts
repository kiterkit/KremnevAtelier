import { consultingService } from "@/content/services/consulting";
import { auditService } from "@/content/services/audit";
import { downtownLocation } from "@/content/locations/downtown";
import { suburbLocation } from "@/content/locations/suburb";
import { loftApartmentProject } from "@/content/projects/loft-apartment";
import { wellnessClubProject } from "@/content/projects/wellness-club";
import { studioNotesArticle } from "@/content/journal/studio-notes";
import { materialPaletteArticle } from "@/content/journal/material-palette";
import { consultingWorkType } from "@/content/seo/work-types/consulting";
import { territoryPlanningWorkType } from "@/content/seo/work-types/territory-planning";
import { architecturalDesignWorkType } from "@/content/seo/work-types/architectural-design";
import { landscapingWorkType } from "@/content/seo/work-types/landscaping";
import { interiorDesignWorkType } from "@/content/seo/work-types/interior-design";
import { productDesignWorkType } from "@/content/seo/work-types/product-design";
import { brandingWorkType } from "@/content/seo/work-types/branding";
import { developmentNiche } from "@/content/seo/niches/development";
import { publicArchitectureNiche } from "@/content/seo/niches/public-architecture";
import { retailNiche } from "@/content/seo/niches/retail";
import { healthcareNiche } from "@/content/seo/niches/healthcare";
import { educationNiche } from "@/content/seo/niches/education";
import { sportWellnessNiche } from "@/content/seo/niches/sport-wellness";
import { horecaNiche } from "@/content/seo/niches/horeca";
import { officesNiche } from "@/content/seo/niches/offices";
import { industrialNiche } from "@/content/seo/niches/industrial";
import { privateNiche } from "@/content/seo/niches/private";

export type Seo = {
  title: string;
  description: string;
  canonical?: string;
  noIndex?: boolean;
};

export type HeroContent = {
  title: string;
  subtitle?: string;
  locationLabel?: string;
  metaLeft?: ReadonlyArray<string>;
  metaRight?: ReadonlyArray<string>;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export type Service = {
  slug: string;
  seo: Seo;
  hero: HeroContent;
  highlights?: string[];
};

export type Location = {
  slug: string;
  seo: Seo;
  hero: HeroContent;
  highlights?: ReadonlyArray<string>;
};

const services: Service[] = [consultingService, auditService];
const locations: Location[] = [downtownLocation, suburbLocation];
const projects: Project[] = [loftApartmentProject, wellnessClubProject];
const articles: Article[] = [studioNotesArticle, materialPaletteArticle];
const seoWorkTypes: SeoLanding[] = [
  consultingWorkType,
  territoryPlanningWorkType,
  architecturalDesignWorkType,
  landscapingWorkType,
  interiorDesignWorkType,
  productDesignWorkType,
  brandingWorkType,
];
const seoNiches: SeoLanding[] = [
  developmentNiche,
  publicArchitectureNiche,
  retailNiche,
  healthcareNiche,
  educationNiche,
  sportWellnessNiche,
  horecaNiche,
  officesNiche,
  industrialNiche,
  privateNiche,
];

export type Project = {
  slug: string;
  seo: Seo;
  hero: HeroContent;
  description?: string;
  tags?: ReadonlyArray<string>;
  details?: ReadonlyArray<string>;
};

export type Article = {
  slug: string;
  seo: Seo;
  hero: HeroContent;
  excerpt?: string;
  paragraphs?: ReadonlyArray<string>;
  tags?: ReadonlyArray<string>;
};

export type SeoLanding = {
  slug: string;
  seo: Seo;
  hero: HeroContent;
  bullets?: ReadonlyArray<string>;
  directions?: ReadonlyArray<{
    title: string;
    items: ReadonlyArray<{ title: string }>;
  }>;
};

export function getAllServices(): Service[] {
  return services;
}

export function getAllLocations(): Location[] {
  return locations;
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllArticles(): Article[] {
  return articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllSeoWorkTypes(): SeoLanding[] {
  return seoWorkTypes;
}

export function getSeoWorkTypeBySlug(slug: string): SeoLanding | undefined {
  return seoWorkTypes.find((x) => x.slug === slug);
}

export function getAllSeoNiches(): SeoLanding[] {
  return seoNiches;
}

export function getSeoNicheBySlug(slug: string): SeoLanding | undefined {
  return seoNiches.find((x) => x.slug === slug);
}
