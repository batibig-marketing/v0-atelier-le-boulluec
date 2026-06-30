import type { Metadata, Viewport } from "next";
import { Crimson_Pro, Inter, DM_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import {
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/schema";
import { NAP } from "@/lib/nap";

// Serif display — only the weights actually used (regular + italic for body emphasis, semibold for headings).
const display = Crimson_Pro({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

// UI sans — limited to weights used on screen.
const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
});

// Mono — small captions only, do not preload.
const mono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leboulluec.com"),
  title: {
    default: "Atelier Le Boulluec — Menuiserie & serrurerie d'art depuis 1964",
    template: "%s — Atelier Le Boulluec",
  },
  description:
    "Atelier de menuiserie, serrurerie, vitrerie et escaliers sur mesure à Massy. Soixante ans de pratique pour les syndics, architectes et grands comptes d'Île-de-France.",
  applicationName: NAP.brand,
  authors: [{ name: NAP.brand }],
  creator: NAP.brand,
  publisher: NAP.brand,
  formatDetection: { telephone: true, address: true, email: true },
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://leboulluec.com",
    siteName: NAP.brand,
    title: "Atelier Le Boulluec — Menuiserie & serrurerie d'art depuis 1964",
    description:
      "Soixante ans de menuiserie, serrurerie, vitrerie et escaliers sur mesure à Massy, pour Paris et l'Île-de-France.",
    images: [
      {
        url: "https://ucarecdn.com/ac23114b-a402-4794-898e-02def630f916/-/format/auto/-/quality/smart/-/resize/1200x630/",
        width: 1200,
        height: 630,
        alt: "Porte cochère restaurée par l'Atelier Le Boulluec",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atelier Le Boulluec — Menuiserie & serrurerie d'art depuis 1964",
    description:
      "Soixante ans de menuiserie, serrurerie, vitrerie et escaliers sur mesure à Massy.",
    images: [
      "https://ucarecdn.com/ac23114b-a402-4794-898e-02def630f916/-/format/auto/-/quality/smart/-/resize/1200x630/",
    ],
  },
  robots: { index: true, follow: true },
  category: "construction",
};

export const viewport: Viewport = {
  themeColor: "#1F3A6B",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <head>
        {/* Speed up Uploadcare image fetches (hero LCP). */}
        <link rel="preconnect" href="https://ucarecdn.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://ucarecdn.com" />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F5EFE3] text-[#1A1A1A] antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-[#1F3A6B] focus:text-[#F5EFE3] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:outline-2 focus:outline-[#C46B2E]"
        >
          Aller au contenu principal
        </a>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={localBusinessSchema()} />
        <JsonLd data={websiteSchema()} />
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
