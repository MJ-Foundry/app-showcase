import type { APIRoute } from 'astro';

/**
 * robots.txt generated at build time so the Sitemap URL always points at the
 * correct absolute location (honoring `site` + `base` from astro.config).
 */
export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL(
    `${import.meta.env.BASE_URL}sitemap-index.xml`.replace(/\/{2,}/g, '/'),
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
