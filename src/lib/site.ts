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
  /** MJ Foundry's Google Play developer page, listing every published app. */
  googlePlayUrl: 'https://play.google.com/store/apps/dev?id=7003051866943488059',
} as const;

export type NavLink = { label: string; href: string; external?: boolean };
