import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
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

// Titres — grotesque a axe de chasse. On charge l'axe wdth pour obtenir la
// grasse large demandee (wdth 112-116) sans etirement artificiel.
const display = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  preload: true,
});

// Corps de texte — grotesque mecanique dessinee pour la documentation
// technique : elle tient le texte long et n'a rien de la neutralite d'Inter.
const sans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

// Mono — cartouches uniquement, pas de preload.
const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.leboulluec.com"),
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
    url: "https://www.leboulluec.com",
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
  themeColor: "#1C1714",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <head>
        {/* Speed up Uploadcare image fetches (hero LCP). */}
        <link rel="preconnect" href="https://ucarecdn.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://ucarecdn.com" />
      </head>
      <body className="min-h-screen flex flex-col bg-[#1C1714] text-[#EDE6DA] antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-[#7E96A8] focus:text-[#161210] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:outline-2 focus:outline-[#EDE6DA]"
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
