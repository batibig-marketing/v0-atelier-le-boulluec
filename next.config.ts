import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(self), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [400, 640, 750, 828, 1080, 1200, 1600, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ucarecdn.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      // Anciennes URL du site historique -> equivalent exact (Bible SEO 9.2 :
      // chaque ancienne URL pointe vers son equivalent, jamais vers l'accueil,
      // et jamais de chaine A->B->C).
      { source: "/mentionslegales", destination: "/mentions-legales", permanent: true },
      { source: "/vieprivee", destination: "/politique-confidentialite", permanent: true },
      // Le slug historique indexe est /belle-portes-rue-sur-paris-et-ailleurs.
      // Le slug court, jamais crawle en production, lui est redirige.
      { source: "/belles-portes-de-paris", destination: "/belle-portes-rue-sur-paris-et-ailleurs", permanent: true },
      { source: "/news", destination: "/actualite", permanent: true },
      { source: "/projets", destination: "/photos", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // Long-cache for static public icons (Next handles /_next/static itself)
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
