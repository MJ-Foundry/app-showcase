import { getCollection, type CollectionEntry } from 'astro:content';

export type App = CollectionEntry<'apps'>;

/** All apps, sorted by `order` then most-recently-updated. */
export async function getApps(): Promise<App[]> {
  const apps = await getCollection('apps');
  return apps.sort((a, b) => {
    if (a.data.order !== b.data.order) return a.data.order - b.data.order;
    return b.data.updated.getTime() - a.data.updated.getTime();
  });
}

export async function getFeaturedApps(): Promise<App[]> {
  return (await getApps()).filter((a) => a.data.featured);
}

/** Distinct, sorted category list derived from the content. */
export function categoriesOf(apps: App[]): string[] {
  return [...new Set(apps.map((a) => a.data.category))].sort();
}

/** Distinct, sorted language list derived from the content. */
export function languagesOf(apps: App[]): string[] {
  return [...new Set(apps.flatMap((a) => a.data.languages))].sort();
}

/** Distinct, sorted platform list derived from the content. */
export function platformsOf(apps: App[]): string[] {
  return [...new Set(apps.flatMap((a) => a.data.platforms))].sort();
}

/** Resolve `related` slugs into full app entries. */
export function relatedApps(app: App, all: App[]): App[] {
  return app.data.related
    .map((slug) => all.find((a) => a.id === slug))
    .filter((a): a is App => Boolean(a));
}

/** Human-friendly relative date, e.g. "3 days ago". */
export function relativeDate(date: Date, now = new Date()): string {
  const diff = now.getTime() - date.getTime();
  const day = 86_400_000;
  const days = Math.round(diff / day);
  if (days <= 0) return 'today';
  if (days === 1) return 'yesterday';
  if (days < 30) return `${days} days ago`;
  const months = Math.round(days / 30);
  if (months < 12) return `${months} month${months > 1 ? 's' : ''} ago`;
  const years = Math.round(months / 12);
  return `${years} year${years > 1 ? 's' : ''} ago`;
}

/** ISO date "2026-06-01" for <time datetime>. */
export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

/**
 * Serialize an app to the compact JSON shape consumed by the client-side
 * search/filter island. Keeping this in one place ensures the markup and the
 * client data never drift apart.
 */
export function toSearchRecord(app: App) {
  return {
    id: app.id,
    title: app.data.title,
    tagline: app.data.tagline,
    description: app.data.description,
    category: app.data.category,
    status: app.data.status,
    access: app.data.access,
    platforms: app.data.platforms,
    languages: app.data.languages,
    tech: app.data.tech,
    tags: app.data.tags,
    updated: app.data.updated.getTime(),
    featured: app.data.featured,
  };
}

export type SearchRecord = ReturnType<typeof toSearchRecord>;
