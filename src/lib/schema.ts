import { NAP } from "./nap";
import { uploadcareUrl } from "./uploadcare";

const HERO_OG_UUID = "ac23114b-a402-4794-898e-02def630f916";
const BUSINESS_ID = `${NAP.website}/#business`;
const ORGANIZATION_ID = `${NAP.website}/#organization`;
const WEBSITE_ID = `${NAP.website}/#website`;

export const SCHEMA_IDS = {
  BUSINESS_ID,
  ORGANIZATION_ID,
  WEBSITE_ID,
} as const;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: NAP.brand,
    legalName: NAP.legalName,
    url: NAP.website,
    logo: {
      "@type": "ImageObject",
      url: `${NAP.website}/logo.svg`,
      width: 512,
      height: 512,
    },
    foundingDate: "1964-01-01",
    founders: [{ "@type": "Person", name: "Famille Le Boulluec" }],
    telephone: NAP.phoneE164,
    email: NAP.email,
    slogan: "Bois et acier, façonnés depuis 1964.",
    address: {
      "@type": "PostalAddress",
      streetAddress: NAP.street,
      addressLocality: NAP.city,
      postalCode: NAP.postalCode,
      addressCountry: NAP.country,
      addressRegion: "Île-de-France",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Île-de-France" },
      { "@type": "City", name: "Paris" },
      { "@type": "City", name: "Massy" },
    ],
    knowsAbout: [
      "Menuiserie",
      "Menuiserie sur mesure",
      "Portes cochères",
      "Portes d'immeuble",
      "Serrurerie",
      "Blindage de porte",
      "Vitrerie",
      "Double vitrage",
      "Escaliers sur mesure",
      "Restauration patrimoniale",
      "Ferronnerie d'art",
      "Architecte des Bâtiments de France",
    ],
    award: [
      "Membre du réseau Bricard Serruriers Confiance",
      "Membre du Groupe BATIBIG",
    ],
    memberOf: [
      { "@type": "Organization", name: "Réseau Bricard Serruriers Confiance" },
      { "@type": "Organization", name: "Groupe BATIBIG" },
    ],
    sameAs: [
      "https://www.linkedin.com/company/atelier-le-boulluec/",
      "https://www.facebook.com/AtelierLeBoulluec/",
    ],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Carpenter", "GeneralContractor"],
    "@id": BUSINESS_ID,
    name: NAP.brand,
    legalName: NAP.legalName,
    description:
      "Atelier de menuiserie, serrurerie, vitrerie, escaliers sur mesure et restauration patrimoniale à Massy. Soixante ans de pratique pour les syndics, architectes et grands comptes d'Île-de-France.",
    image: [
      uploadcareUrl(HERO_OG_UUID, 1600),
      uploadcareUrl("8ee1618b-2bb1-4d73-8fad-61df8074ae06", 1600),
      uploadcareUrl("26525e22-2374-4191-b30c-b805af59fc7e", 1600),
    ],
    logo: `${NAP.website}/logo.svg`,
    telephone: NAP.phoneE164,
    email: NAP.email,
    url: NAP.website,
    priceRange: NAP.priceRange,
    foundingDate: "1964-01-01",
    slogan: "Bois et acier, façonnés depuis 1964.",
    paymentAccepted: "Virement, Chèque, Carte bancaire",
    currenciesAccepted: "EUR",
    address: {
      "@type": "PostalAddress",
      streetAddress: NAP.street,
      addressLocality: NAP.city,
      postalCode: NAP.postalCode,
      addressCountry: NAP.country,
      addressRegion: "Île-de-France",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: NAP.latitude,
      longitude: NAP.longitude,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${NAP.street}, ${NAP.postalCode} ${NAP.city}`
    )}`,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "12:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "13:30",
        closes: "17:30",
      },
    ],
    areaServed: [
      { "@type": "AdministrativeArea", name: "Île-de-France" },
      { "@type": "City", name: "Paris" },
      { "@type": "City", name: "Massy" },
      { "@type": "City", name: "Versailles" },
      { "@type": "City", name: "Boulogne-Billancourt" },
      { "@type": "City", name: "Neuilly-sur-Seine" },
    ],
    knowsAbout: [
      "Menuiserie",
      "Serrurerie",
      "Vitrerie",
      "Escaliers sur mesure",
      "Restauration patrimoniale",
      "Ferronnerie d'art",
    ],
    award: [
      "Membre du réseau Bricard Serruriers Confiance",
      "Membre du Groupe BATIBIG",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.2",
      reviewCount: "40",
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Métiers de l'Atelier Le Boulluec",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Menuiserie sur mesure",
          url: `${NAP.website}/menuiserie`,
        },
        {
          "@type": "OfferCatalog",
          name: "Serrurerie & ferronnerie",
          url: `${NAP.website}/serrurerie`,
        },
        { "@type": "OfferCatalog", name: "Vitrerie", url: `${NAP.website}/vitrerie` },
        {
          "@type": "OfferCatalog",
          name: "Escaliers sur mesure",
          url: `${NAP.website}/escaliers`,
        },
        {
          "@type": "OfferCatalog",
          name: "Restauration patrimoniale",
          url: `${NAP.website}/restauration-patrimoniale`,
        },
      ],
    },
    sameAs: [
      "https://www.linkedin.com/company/atelier-le-boulluec/",
      "https://www.facebook.com/AtelierLeBoulluec/",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: NAP.website,
    name: NAP.brand,
    description:
      "Atelier de menuiserie, serrurerie, vitrerie et escaliers sur mesure à Massy. Depuis 1964.",
    inLanguage: "fr-FR",
    publisher: { "@id": ORGANIZATION_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${NAP.website}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export type ServiceSchemaInput = {
  name: string;
  description: string;
  serviceType: string;
  url: string;
  imageUuid?: string;
  offers?: { name: string; description?: string }[];
};

export function serviceSchema(
  nameOrInput: string | ServiceSchemaInput,
  description?: string,
  serviceType?: string
): Record<string, unknown> {
  // Backwards-compat 3-arg signature
  if (typeof nameOrInput === "string") {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      name: nameOrInput,
      description,
      serviceType,
      provider: { "@id": BUSINESS_ID },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Île-de-France" },
        { "@type": "City", name: "Paris" },
        { "@type": "City", name: "Massy" },
      ],
    };
  }
  const input = nameOrInput;
  const out: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    serviceType: input.serviceType,
    url: input.url,
    provider: { "@id": BUSINESS_ID },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Île-de-France" },
      { "@type": "City", name: "Paris" },
      { "@type": "City", name: "Massy" },
      { "@type": "City", name: "Versailles" },
    ],
  };
  if (input.imageUuid) out.image = uploadcareUrl(input.imageUuid, 1600);
  if (input.offers) {
    out.hasOfferCatalog = {
      "@type": "OfferCatalog",
      name: input.name,
      itemListElement: input.offers.map((o, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: {
          "@type": "Service",
          name: o.name,
          description: o.description,
        },
      })),
    };
  }
  return out;
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${NAP.website}/contact`,
    name: "Contact — Atelier Le Boulluec",
    inLanguage: "fr-FR",
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: NAP.brand,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: NAP.phoneE164,
        email: NAP.email,
        contactType: "customer service",
        areaServed: "FR",
        availableLanguage: "French",
      },
    },
  };
}

export type BreadcrumbItem = { name: string; url: string };

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url.startsWith("http") ? it.url : `${NAP.website}${it.url}`,
    })),
  };
}

export function faqPageSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

export function aboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: `${NAP.website}/a-propos`,
    name: "L'atelier — histoire & équipe depuis 1964",
    description:
      "Soixante ans de menuiserie, serrurerie et restauration patrimoniale à Paris et en Île-de-France. Histoire, équipe et références de l'Atelier Le Boulluec.",
    inLanguage: "fr-FR",
    isPartOf: { "@id": WEBSITE_ID },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: uploadcareUrl("40e2cd05-e893-45b2-a4fe-0743c5e2e887", 1600),
    },
    mainEntity: { "@id": BUSINESS_ID },
    about: { "@id": ORGANIZATION_ID },
  };
}

export type ArticleSchemaInput = {
  headline: string;
  description: string;
  url: string;
  imageUuid: string;
  datePublished: string;
  dateModified: string;
  authorName?: string;
};

export function articleSchema(input: ArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": ["Article", "BlogPosting"],
    headline: input.headline,
    description: input.description,
    image: [uploadcareUrl(input.imageUuid, 1600)],
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    inLanguage: "fr-FR",
    url: input.url,
    isPartOf: { "@id": WEBSITE_ID },
    mainEntityOfPage: { "@type": "WebPage", "@id": input.url },
    author: {
      "@type": "Organization",
      name: input.authorName ?? NAP.brand,
      "@id": ORGANIZATION_ID,
    },
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function jsonLdScript(obj: object) {
  return { __html: JSON.stringify(obj) };
}
