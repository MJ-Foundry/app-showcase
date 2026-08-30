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

/** Distinct, sorted platform list derived from the content. */
export function platformsOf(apps: App[]): string[] {
  return [...new Set(apps.flatMap((a) => a.data.platforms))].sort();
}

/**
 * Resolve `related` slugs into full app entries, always returning exactly three:
 * the explicit picks first, then padded with the next apps in `all` order so the
 * "Related apps" row is never short (assumes at least four apps exist).
 */
export function relatedApps(app: App, all: App[]): App[] {
  const explicit = app.data.related
    .map((slug) => all.find((a) => a.id === slug))
    .filter((a): a is App => Boolean(a) && a.id !== app.id);

  const seen = new Set([app.id, ...explicit.map((a) => a.id)]);
  const fallback = all.filter((a) => !seen.has(a.id));

  return [...explicit, ...fallback].slice(0, 3);
}

