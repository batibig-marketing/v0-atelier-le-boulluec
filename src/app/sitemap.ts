import type { MetadataRoute } from "next";

const BASE = "https://leboulluec.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    { url: "/", priority: 1.0 },
    { url: "/menuiserie", priority: 0.9 },
    { url: "/escaliers", priority: 0.9 },
    { url: "/serrurerie", priority: 0.9 },
    { url: "/vitrerie", priority: 0.9 },
    { url: "/restauration-patrimoniale", priority: 0.9 },
    { url: "/belles-portes-de-paris", priority: 0.8 },
    { url: "/a-propos", priority: 0.7 },
    { url: "/contact", priority: 0.8 },
    { url: "/mentions-legales", priority: 0.3 },
    { url: "/politique-confidentialite", priority: 0.3 },
  ];

  return routes.map((r) => ({
    url: `${BASE}${r.url}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: r.priority,
  }));
}
