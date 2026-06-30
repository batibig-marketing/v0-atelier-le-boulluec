import Link from "next/link";
import Container from "./Container";
import JsonLd from "./JsonLd";
import { breadcrumbSchema, type BreadcrumbItem } from "@/lib/schema";

export type Crumb = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: Crumb[];
  /** Disable the JSON-LD emission (visual-only). Default false. */
  noSchema?: boolean;
};

/**
 * Breadcrumb — sober visual fil d'Ariane + BreadcrumbList JSON-LD.
 *
 * The "Accueil" root is prepended automatically (both visually and in the schema).
 * The final crumb is rendered as a non-link span with aria-current="page", and is
 * INCLUDED in the JSON-LD as the last ListItem so Google can render the full trail
 * in search results.
 *
 * The href on the final crumb is optional in the visual UI but is always required
 * to build the schema — when it is missing we fall back to the canonical resolved
 * by the page path (the schema helper will turn relative URLs into absolute ones).
 */
export default function Breadcrumb({ items, noSchema = false }: BreadcrumbProps) {
  if (!items || items.length === 0) return null;

  // Build the full schema chain: Accueil + provided items.
  // Each item must end with a URL for the BreadcrumbList ListItem — we try
  // the explicit href first, and otherwise derive a slug from the label so the
  // generated schema stays valid even when the caller omits the href.
  const schemaItems: BreadcrumbItem[] = [
    { name: "Accueil", url: "/" },
    ...items.map((c) => ({
      name: c.label,
      url:
        c.href ??
        `/${c.label
          .toLowerCase()
          .normalize("NFD")
          .replace(/[̀-ͯ]/g, "")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)+/g, "")}`,
    })),
  ];

  return (
    <>
      {!noSchema && <JsonLd data={breadcrumbSchema(schemaItems)} />}
      <nav
        aria-label="Fil d'Ariane"
        className="bg-[#F5EFE3] border-b border-[#1F3A6B]/10"
      >
        <Container size="wide" className="py-3">
          <ol className="flex flex-wrap items-center gap-x-1 gap-y-1 text-[11px] md:text-xs font-medium uppercase tracking-[0.18em] text-[#1F3A6B]">
            <li className="flex items-center">
              <Link
                href="/"
                className="hover:text-[#C46B2E] transition-colors"
              >
                Accueil
              </Link>
            </li>
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              return (
                <li key={`${item.label}-${index}`} className="flex items-center">
                  <span aria-hidden="true" className="text-[#C46B2E] mx-2">·</span>
                  {item.href && !isLast ? (
                    <Link
                      href={item.href}
                      className="hover:text-[#C46B2E] transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      aria-current={isLast ? "page" : undefined}
                      className="text-[#1F3A6B]/70"
                    >
                      {item.label}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </Container>
      </nav>
    </>
  );
}
