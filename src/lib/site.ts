/**
 * Central site configuration. Edit this one file to rebrand the showcase.
 */
export const SITE = {
  name: 'Marcus Wallberg',
  /** Short brand shown in the nav logo. */
  brand: 'Studio',
  title: 'Marcus Wallberg — App Studio',
  description:
    'A curated showcase of applications, experiments and tools — spanning AI, web and mobile. Browse, search and discover what I build.',
  author: 'Marcus Wallberg',
  /** Used for Open Graph / Twitter cards and canonical URLs. */
  twitter: '@marcus',
  github: 'https://github.com/MJ-Foundry',
  contact: 'mailto:hello@example.com',
} as const;

export type NavLink = { label: string; href: string; external?: boolean };
