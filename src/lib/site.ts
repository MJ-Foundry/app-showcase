/**
 * Central site configuration. Edit this one file to rebrand the showcase.
 */
export const SITE = {
  name: 'MJ Foundry',
  title: 'MJ Foundry — App Studio',
  description:
    "Building apps we'd love to use ourselves.",
  author: 'MJ Foundry',
  /** Destination address for the contact form. */
  contactEmail: 'mjfoundry.support@gmail.com',
} as const;

export type NavLink = { label: string; href: string; external?: boolean };
