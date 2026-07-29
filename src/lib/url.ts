/**
 * Prefix an internal path with the configured base path so links and assets
 * resolve correctly whether the site is served from "/" (user page) or
 * "/<repo>/" (project page). Always use this for internal hrefs and
 * `public/` asset references.
 *
 *   withBase('/apps')            -> '/repo/apps'
 *   withBase('/icons/logo.svg')  -> '/repo/icons/logo.svg'
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL; // e.g. "/" or "/repo/"
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${normalizedBase}${normalizedPath}` || '/';
}
