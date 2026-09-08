import type { MetadataRoute } from "next";

const BASE = "https://www.leboulluec.com";

// Dates de référence : on les différencie pour donner à Google un signal
// `lastModified` non uniforme (sinon il l'ignore vite) — Bible SEO §15.9.
const ARCHIVE_LAST_MOD = new Date("2026-09-08");
const SERVICES_LAST_MOD = new Date("2026-06-15");
const EDITORIAL_LAST_MOD = new Date("2026-06-20");
const HOME_LAST_MOD = new Date("2026-09-08");
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

/**
 * Toutes les URL du sitemap historique de production sont présentes ici,
 * à l'exception de /mentionslegales et /vieprivee qui sont redirigées en 301
 * vers leur équivalent exact (les URL redirigées n'ont pas leur place dans un
 * sitemap — Bible SEO §1.4).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Route[] = [
    { url: "/", priority: 1.0, changeFrequency: "monthly", lastModified: HOME_LAST_MOD },

    // Archive — pièce maîtresse du site
    { url: "/photos", priority: 0.95, changeFrequency: "monthly", lastModified: ARCHIVE_LAST_MOD },
    {
      url: "/belle-portes-rue-sur-paris-et-ailleurs",
      priority: 0.85,
      changeFrequency: "monthly",
      lastModified: EDITORIAL_LAST_MOD,
    },
    { url: "/actualite", priority: 0.8, changeFrequency: "monthly", lastModified: ARCHIVE_LAST_MOD },

    // Métiers
    { url: "/menuiserie", priority: 0.9, changeFrequency: "monthly", lastModified: SERVICES_LAST_MOD },
    { url: "/serrurerie", priority: 0.9, changeFrequency: "monthly", lastModified: SERVICES_LAST_MOD },
    { url: "/vitrerie", priority: 0.9, changeFrequency: "monthly", lastModified: SERVICES_LAST_MOD },
    { url: "/escaliers", priority: 0.9, changeFrequency: "monthly", lastModified: SERVICES_LAST_MOD },
    {
      url: "/restauration-patrimoniale",
      priority: 0.9,
      changeFrequency: "monthly",
      lastModified: SERVICES_LAST_MOD,
    },

    // Maison
    { url: "/a-propos", priority: 0.8, changeFrequency: "monthly", lastModified: EDITORIAL_LAST_MOD },
    { url: "/page-avis", priority: 0.7, changeFrequency: "monthly", lastModified: ARCHIVE_LAST_MOD },
    { url: "/contact", priority: 0.8, changeFrequency: "monthly", lastModified: SERVICES_LAST_MOD },

    // Légal
    { url: "/mentions-legales", priority: 0.3, changeFrequency: "yearly", lastModified: LEGAL_LAST_MOD },
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
