import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * The `apps` collection. Each app is a Markdown file in `src/content/apps/`.
 * The Markdown body is used as the "full description" on the detail page.
 *
 * To add a new app: drop a new `.md` file in that folder — no UI code changes
 * are required. The schema below is the single source of truth for app data.
 */
const apps = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/apps' }),
  schema: z.object({
    /* --- Identity ------------------------------------------------------- */
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    /** Emoji or short glyph used as the app icon (keeps the demo asset-free). */
    icon: z.string().default('✦'),
    /** Two hex colors used to build the icon's gradient tile. */
    accent: z.tuple([z.string(), z.string()]).default(['#7658f0', '#ff9552']),

    /* --- Taxonomy ------------------------------------------------------- */
    category: z.enum(['AI', 'Web', 'Mobile', 'Tools', 'Experiments']),
    platforms: z.array(z.enum(['Web', 'iOS', 'Android', 'macOS', 'CLI'])).default([]),
    languages: z.array(z.string()).default([]),
    tech: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    /** Access model — shown as a label and filterable. */
    access: z.enum(['Open Source', 'Private']).default('Private'),

    /* --- Status & meta -------------------------------------------------- */
    status: z.enum(['Live', 'Beta', 'In Progress', 'Coming Soon', 'Archived']),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    updated: z.coerce.date(),

    /* --- Links ---------------------------------------------------------- */
    links: z
      .object({
        demo: z.string().url().optional(),
        repo: z.string().url().optional(),
        website: z.string().url().optional(),
      })
      .default({}),

    /* --- Rich detail-page content -------------------------------------- */
    features: z.array(z.string()).default([]),
    screenshots: z
      .array(z.object({ src: z.string(), alt: z.string() }))
      .default([]),
    changelog: z
      .array(z.object({ date: z.string(), version: z.string(), note: z.string() }))
      .default([]),
    related: z.array(z.string()).default([]),
  }),
});

export const collections = { apps };
