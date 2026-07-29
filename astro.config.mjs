// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// -----------------------------------------------------------------------------
// GitHub Pages configuration
// -----------------------------------------------------------------------------
// `site` and `base` are read from environment variables so the exact same build
// works whether it is deployed to:
//   • a user/org page  (https://<user>.github.io)         -> base "/"
//   • a project page   (https://<user>.github.io/<repo>/) -> base "/<repo>/"
//
// The deploy workflow (.github/workflows/deploy.yml) sets these automatically.
// For local development the defaults below are used.
// -----------------------------------------------------------------------------
const SITE = process.env.SITE_URL ?? 'https://example.github.io';
const BASE = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      // Keep the 404 page out of the sitemap.
      filter: (page) => !page.endsWith('/404/') && !page.endsWith('/404'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
