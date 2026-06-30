import { NAP } from "./nap";
import { uploadcareUrl } from "./uploadcare";

const HERO_OG_UUID = "ac23114b-a402-4794-898e-02def630f916";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: NAP.brand,
    legalName: NAP.legalName,
    url: NAP.website,
    logo: `${NAP.website}/logo.svg`,
    foundingDate: NAP.foundingDate,
    telephone: NAP.phoneE164,
    email: NAP.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: NAP.street,
      addressLocality: NAP.city,
      postalCode: NAP.postalCode,
      addressCountry: NAP.country,
    },
    sameAs: [],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Carpenter"],
    "@id": `${NAP.website}/#business`,
    name: NAP.brand,
    image: uploadcareUrl(HERO_OG_UUID, 1600),
    telephone: NAP.phoneE164,
    email: NAP.email,
    url: NAP.website,
    priceRange: NAP.priceRange,
    foundingDate: NAP.foundingDate,
    address: {
      "@type": "PostalAddress",
      streetAddress: NAP.street,
      addressLocality: NAP.city,
      postalCode: NAP.postalCode,
      addressCountry: NAP.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: NAP.latitude,
      longitude: NAP.longitude,
    },
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
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.2",
      reviewCount: "40",
    },
  };
}

export function serviceSchema(name: string, description: string, serviceType: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    provider: {
      "@type": "LocalBusiness",
      name: NAP.brand,
      "@id": `${NAP.website}/#business`,
    },
    areaServed: NAP.areaServed,
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${NAP.website}/contact`,
    name: "Contact — Atelier Le Boulluec",
    mainEntity: {
      "@type": "Organization",
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

export function jsonLdScript(obj: object) {
  return { __html: JSON.stringify(obj) };
}
