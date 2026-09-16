import type { Metadata, Viewport } from "next";
import { Spectral, Archivo } from "next/font/google";
import "./globals.css";
import { Entete } from "@/components/Entete";
import { Pied } from "@/components/Pied";
import { Reveler } from "@/components/Reveler";
import JsonLd from "@/components/JsonLd";
import {
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/schema";
import { NAP } from "@/lib/nap";

/**
 * Titres — Spectral, comme sur le site frère atelierdemenuiserie.fr : romain
 * de labeur dessiné pour l’écran, empattements nets, aucun maniérisme. Il
 * remplace le serif ancien de la direction « chêne et laiton », refusée.
 */
const titre = Spectral({
  variable: "--police-titre",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

/**
 * Texte courant et labels — Archivo. Grotesque neutre, très lisible en
 * capitales espacées, qui ne dispute jamais la vedette aux titres.
 */
const texte = Archivo({
  variable: "--police-texte",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
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
  themeColor: "#17181a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${titre.variable} ${texte.variable}`}>
      <body>
        <a className="saut-contenu" href="#contenu">
          Aller au contenu
        </a>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={localBusinessSchema()} />
        <JsonLd data={websiteSchema()} />
        <Entete />
        {/* L’en-tête est fixe et se pose sur la photographie du bandeau :
            chaque page gère son propre retrait (voir .page-texte). */}
        <main id="contenu" className="sans-retrait">
          {children}
        </main>
        <Pied />
        <Reveler />
      </body>
    </html>
  );
}
