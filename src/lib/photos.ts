import manifest from "@/data/photos-manifest.json";

export type PhotoEntry = {
  local_filename: string;
  uploadcare_uuid: string;
  cdn_url: string;
  category: string;
};

const data = manifest as {
  project: string;
  uploadcare_public_key: string;
  mappings: PhotoEntry[];
};

export function photosByCategory(category: string): PhotoEntry[] {
  return data.mappings.filter((p) => p.category === category);
}

export function photosByCategories(categories: string[], limit?: number): PhotoEntry[] {
  const seen = new Set<string>();
  const out: PhotoEntry[] = [];
  for (const cat of categories) {
    for (const p of photosByCategory(cat)) {
      if (seen.has(p.uploadcare_uuid)) continue;
      seen.add(p.uploadcare_uuid);
      out.push(p);
      if (limit && out.length >= limit) return out;
    }
  }
  return out;
}

export function getPhoto(uuid: string): PhotoEntry | undefined {
  return data.mappings.find((p) => p.uploadcare_uuid === uuid);
}

export const allPhotos = data.mappings;
