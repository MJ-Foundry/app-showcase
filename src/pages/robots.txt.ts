import type { APIRoute } from 'astro';
import { withBase } from '@lib/url';

/**
 * robots.txt generated at build time so the Sitemap URL always points at the
 * correct absolute location (honoring `site` + `base` from astro.config).
 *
 * Note: `withBase` is used rather than string concatenation because GitHub's
 * configure-pages action supplies `base_path` WITHOUT a trailing slash, which
 * would otherwise produce ".../app-showcasesitemap-index.xml".
 */
export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL(
    withBase('/sitemap-index.xml'),
    site ?? 'https://example.com'
  ).toString();

  const body = `User-agent: *
Allow: /

Sitemap: ${sitemap}
`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
