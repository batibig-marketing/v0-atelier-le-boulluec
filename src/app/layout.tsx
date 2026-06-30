import type { Metadata, Viewport } from "next";
import { Crimson_Pro, Inter, DM_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema, organizationSchema } from "@/lib/schema";
import { NAP } from "@/lib/nap";

const display = Crimson_Pro({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const mono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
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
        url: "https://ucarecdn.com/ac23114b-a402-4794-898e-02def630f916/-/format/auto/-/quality/smart/-/resize/1600x/",
        width: 1600,
        height: 1067,
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
      "https://ucarecdn.com/ac23114b-a402-4794-898e-02def630f916/-/format/auto/-/quality/smart/-/resize/1600x/",
    ],
  },
  robots: { index: true, follow: true },
  category: "construction",
};

export const viewport: Viewport = {
  themeColor: "#1F3A6B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#F5EFE3] text-[#1A1A1A] antialiased">
        <JsonLd data={organizationSchema()} />
        <JsonLd data={localBusinessSchema()} />
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
