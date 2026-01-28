import type { MetadataRoute } from "next";
import {
  getAllArticles,
  getAllLocations,
  getAllProjects,
  getAllSeoNiches,
  getAllSeoWorkTypes,
  getAllServices,
} from "@/lib/content";

function getBaseUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3010";
}

function url(pathname: string) {
  return `${getBaseUrl().replace(/\/$/, "")}${pathname}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/about",
    "/contacts",
    "/cooperation",
    "/journal",
    "/pricing",
    "/projects",
    "/services",
    "/privacy",
    "/terms",
    "/cookies",
    "/imprint",
  ];

  const dynamicRoutes = [
    ...getAllServices().map((s) => `/services/${s.slug}`),
    ...getAllLocations().map((l) => `/locations/${l.slug}`),
    ...getAllProjects().map((p) => `/projects/${p.slug}`),
    ...getAllArticles().map((a) => `/journal/${a.slug}`),
    ...getAllSeoWorkTypes().map((x) => `/seo/work-types/${x.slug}`),
    ...getAllSeoNiches().map((x) => `/seo/niches/${x.slug}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((pathname) => ({
    url: url(pathname),
    lastModified: new Date(),
  }));
}
