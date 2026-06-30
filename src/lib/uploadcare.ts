// Uploadcare CDN helpers
export const UPLOADCARE_PUBLIC_KEY = "48e5603d513a719b73dc";

type Quality = "smart" | "lighter" | "lightest" | "best" | "normal";

/**
 * Build a CDN URL with smart format negotiation (AVIF/WebP/JPEG) and a target width.
 * Uploadcare /-/format/auto/ already serves AVIF/WebP when the client supports it.
 */
export function uploadcareUrl(uuid: string, width = 1600, quality: Quality = "smart"): string {
  return `https://ucarecdn.com/${uuid}/-/format/auto/-/quality/${quality}/-/resize/${width}x/`;
}

/** Preset for above-the-fold hero images (LCP). */
export function uploadcareHero(uuid: string, width = 1600): string {
  return `https://ucarecdn.com/${uuid}/-/format/auto/-/quality/smart/-/resize/${width}x/`;
}

/** Preset for galleries / cards. */
export function uploadcareThumb(uuid: string, width = 800): string {
  return `https://ucarecdn.com/${uuid}/-/format/auto/-/quality/smart/-/resize/${width}x/`;
}

/** Preset for OpenGraph (1200x630). */
export function uploadcareOg(uuid: string): string {
  return `https://ucarecdn.com/${uuid}/-/format/auto/-/quality/smart/-/resize/1200x630/`;
}

export function uploadcareSrcSet(uuid: string): string {
  return [400, 800, 1200, 1600, 2000]
    .map((w) => `${uploadcareUrl(uuid, w)} ${w}w`)
    .join(", ");
}
