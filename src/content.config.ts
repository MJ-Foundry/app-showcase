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
    platforms: z.array(z.enum(['Web', 'iOS', 'Android', 'macOS', 'CLI'])).default([]),
    tech: z.array(z.string()).default([]),
    /** At most 3 — keeps cards scannable. */
    tags: z.array(z.string()).max(3).default([]),

    /* --- Privacy -------------------------------------------------------- */
    /**
     * Shown in a Privacy card on the app's detail page. The privacy policy
     * itself stays general — this is where the per-app specifics live.
     *
     * All four default to what is true of most of our apps, so an app that
     * collects nothing, works offline, needs no account and has no ads needs no
     * frontmatter at all. Override only what differs.
     */
    dataCollection: z.string().default('No data collected'),
    internet: z.string().default('Works offline'),
    account: z.string().default('Not required'),
    ads: z.string().default('None'),

    /* --- Status & meta -------------------------------------------------- */
    status: z.enum(['Live', 'Coming Soon']),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    updated: z.coerce.date(),

    /* --- Links ---------------------------------------------------------- */
    links: z
      .object({
        demo: z.string().url().optional(),
        repo: z.string().url().optional(),
        website: z.string().url().optional(),
        playStore: z.string().url().optional(),
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
