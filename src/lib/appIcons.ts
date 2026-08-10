/**
 * Curated line-icon set for app tiles, keyed by a short semantic name and
 * matching the thin-stroke style used everywhere else on the site (search,
 * chevrons, theme toggle). Rendered as real SVG rather than emoji so every
 * app icon looks identical across devices — emoji glyphs are drawn by each
 * OS's own font (Apple/Noto/Segoe UI Emoji all differ), which is exactly why
 * the same character used to look different on different machines.
 *
 * Each value is the inner markup for a 24x24 viewBox, using stroke="currentColor"
 * so it inherits the tile's white foreground automatically.
 *
 * If an app's `icon` field isn't a key here, AppIcon falls back to rendering
 * it as raw text (so an emoji still works) — adding a new app never requires
 * a code change; adding a new icon *shape* to the shared library does.
 */
export const APP_ICONS: Record<string, string> = {
  // Baby face — used by baby-logger
  baby: `
    <circle cx="12" cy="10.4" r="5.1" fill="none" stroke="currentColor" stroke-width="1.6" />
    <circle cx="9.9" cy="10.2" r="0.55" fill="currentColor" />
    <circle cx="14.1" cy="10.2" r="0.55" fill="currentColor" />
    <path d="M10 12.6c.6.55 1.3.8 2 .8s1.4-.25 2-.8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M9.6 5.6c1-1 2.3-1.35 3.4-1" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M8.3 18.6c1.1.85 2.4 1.3 3.7 1.3s2.6-.45 3.7-1.3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
  `,
  // Two overlapping circles + stem/leaf — used by baby-food
  apple: `
    <circle cx="9.3" cy="14" r="6" fill="none" stroke="currentColor" stroke-width="1.5" />
    <circle cx="14.7" cy="14" r="6" fill="none" stroke="currentColor" stroke-width="1.5" />
    <path d="M12 8V5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
    <path d="M12 5.2c1.2-1.1 2.7-1.2 3.5-.3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
  `,
  // Rotated capsule with a divider line — used by medfolio
  pill: `
    <rect x="3" y="9" width="18" height="6" rx="3" fill="none" stroke="currentColor" stroke-width="1.6" transform="rotate(-25 12 12)" />
    <line x1="12" y1="7.5" x2="12" y2="16.5" stroke="currentColor" stroke-width="1.4" transform="rotate(-25 12 12)" />
  `,
  // Simple suitcase — used by packfolio
  suitcase: `
    <rect x="9" y="4.5" width="6" height="3.2" rx="1" fill="none" stroke="currentColor" stroke-width="1.6" />
    <rect x="4" y="7.5" width="16" height="11.5" rx="2" fill="none" stroke="currentColor" stroke-width="1.6" />
    <path d="M4 13.2h16" stroke="currentColor" stroke-width="1.4" />
  `,
  // Two opposing arrows forming a cycle — used by repeatio
  loop: `
    <path d="M5 12a7 7 0 0112.1-4.9" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
    <path d="M17.1 4.3v3.3h-3.3" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M19 12a7 7 0 01-12.1 4.9" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
    <path d="M6.9 19.7v-3.3h3.3" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
  `,
  // Four tines merging into a handle — used by forkfolio
  fork: `
    <g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round">
      <path d="M7.6 3.2v6.3" />
      <path d="M10.1 3.2v6.3" />
      <path d="M13.9 3.2v6.3" />
      <path d="M16.4 3.2v6.3" />
      <path d="M7.6 9.5c0 1.9 1.9 3.1 4.4 3.1s4.4-1.2 4.4-3.1" />
      <path d="M12 12.6V20.8" />
    </g>
  `,
  // Same sun glyph already used by the theme toggle — used by softbox
  sun: `
    <circle cx="12" cy="12" r="4.3" fill="none" stroke="currentColor" stroke-width="1.7" />
    <g stroke="currentColor" stroke-width="1.7" stroke-linecap="round">
      <path d="M12 2.8v2.4M12 18.8v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.8 12h2.4M18.8 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7" />
    </g>
  `,
  // 2x2 grid — used for the command palette's "Browse all apps" entry
  grid: `
    <rect x="4" y="4" width="7" height="7" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.6" />
    <rect x="13" y="4" width="7" height="7" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.6" />
    <rect x="4" y="13" width="7" height="7" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.6" />
    <rect x="13" y="13" width="7" height="7" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.6" />
  `,
  // Info circle — used for the command palette's "About" entry
  info: `
    <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="1.6" />
    <circle cx="12" cy="8.3" r="0.9" fill="currentColor" />
    <path d="M12 11v5.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
  `,
  // Triangular warning sign, rounded corners — used by roadwise
  sign: `
    <path d="M12 3.4l8.6 15.3a1 1 0 01-.9 1.5H4.3a1 1 0 01-.9-1.5L12 3.4z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" />
    <path d="M12 9.8v4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
    <circle cx="12" cy="16.6" r="0.9" fill="currentColor" />
  `,
};
