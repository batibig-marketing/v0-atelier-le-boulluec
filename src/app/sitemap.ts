import type { MetadataRoute } from "next";

const BASE = "https://leboulluec.com";

// Dates de référence : on différencie pour donner à Google un signal
// `lastModified` non uniforme (sinon il l'ignore vite).
// - Pages services / a-propos / contact : date de dernière mise à jour éditoriale
// - belles-portes : page éditoriale, peut être enrichie plus souvent
// - legal : ancienne, ne change quasiment jamais
const SERVICES_LAST_MOD = new Date("2026-06-15");
const EDITORIAL_LAST_MOD = new Date("2026-06-20");
const HOME_LAST_MOD = new Date("2026-06-25");
const LEGAL_LAST_MOD = new Date("2026-01-15");

type ChangeFreq =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

type Route = {
  url: string;
  priority: number;
  changeFrequency: ChangeFreq;
  lastModified: Date;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Route[] = [
    {
      url: "/",
      priority: 1.0,
      changeFrequency: "monthly",
      lastModified: HOME_LAST_MOD,
    },
    {
      url: "/menuiserie",
      priority: 0.9,
      changeFrequency: "monthly",
      lastModified: SERVICES_LAST_MOD,
    },
    {
      url: "/serrurerie",
      priority: 0.9,
      changeFrequency: "monthly",
      lastModified: SERVICES_LAST_MOD,
    },
    {
      url: "/vitrerie",
      priority: 0.9,
      changeFrequency: "monthly",
      lastModified: SERVICES_LAST_MOD,
    },
    {
      url: "/escaliers",
      priority: 0.9,
      changeFrequency: "monthly",
      lastModified: SERVICES_LAST_MOD,
    },
    {
      url: "/restauration-patrimoniale",
      priority: 0.9,
      changeFrequency: "monthly",
      lastModified: SERVICES_LAST_MOD,
    },
    {
      url: "/belles-portes-de-paris",
      priority: 0.7,
      changeFrequency: "weekly",
      lastModified: EDITORIAL_LAST_MOD,
    },
    {
      url: "/a-propos",
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: EDITORIAL_LAST_MOD,
    },
    {
      url: "/contact",
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: SERVICES_LAST_MOD,
    },
    {
      url: "/mentions-legales",
      priority: 0.3,
      changeFrequency: "yearly",
      lastModified: LEGAL_LAST_MOD,
    },
    {
      url: "/politique-confidentialite",
      priority: 0.3,
      changeFrequency: "yearly",
      lastModified: LEGAL_LAST_MOD,
    },
  ];

  return routes.map((r) => ({
    url: `${BASE}${r.url}`,
    lastModified: r.lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
