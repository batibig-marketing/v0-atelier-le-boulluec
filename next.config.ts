import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
      { source: "/news", destination: "/belles-portes-de-paris", permanent: true },
      { source: "/projets", destination: "/belles-portes-de-paris", permanent: true },
    ];
  },
};

export default nextConfig;
