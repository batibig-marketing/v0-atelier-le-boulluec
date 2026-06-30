// Uploadcare CDN helpers
export const UPLOADCARE_PUBLIC_KEY = "48e5603d513a719b73dc";

export function uploadcareUrl(uuid: string, width = 1600, quality: "smart" | "lighter" | "lightest" = "smart"): string {
  return `https://ucarecdn.com/${uuid}/-/format/auto/-/quality/${quality}/-/resize/${width}x/`;
}

export function uploadcareSrcSet(uuid: string): string {
  return [400, 800, 1200, 1600, 2000]
    .map((w) => `${uploadcareUrl(uuid, w)} ${w}w`)
    .join(", ");
}
