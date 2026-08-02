# App Showcase

A modern, fast, fully-static website that showcases my apps — built with
[Astro](https://astro.build), TypeScript and Tailwind CSS v4, and deployed to
**GitHub Pages** with zero server-side code.

> The site currently ships with **dummy data** so it can be explored end-to-end.
> Replace the Markdown files in `src/content/apps/` with your own apps.

## Features

- ⚡️ **100% static** — no backend, no database, no SSR. Perfect for GitHub Pages.
- 🎨 **Original design system** — Fraunces + Inter typography, an iris/peach
  accent palette, soft gradients, gentle shadows and refined micro-interactions.
- 🔎 **Client-side search & filtering** — full-text search, status / platform
  filters and sorting. No framework required.
- ⌘ **Command palette** (`⌘K` / `Ctrl+K`) for instant navigation.
- 🌗 **Light-first theme** with an optional, considered dark mode.
- 📱 **Fully responsive** with a polished mobile navigation.
- ♿️ **Accessible** — semantic HTML, keyboard support, ARIA labels, visible
  focus states, strong contrast and `prefers-reduced-motion` support.
- 🔍 **SEO-ready** — sitemap, robots.txt, Open Graph & Twitter cards, canonical
  URLs and favicons.
- 📄 **Content-driven** — every app is a Markdown file; add apps without
  touching UI code.

## Project structure

```
src/
├── components/        Reusable UI (cards, nav, footer, explorer, palette…)
├── content/apps/      One Markdown file per app (the content model)
├── content.config.ts  Zod schema — the single source of truth for app data
├── layouts/           BaseLayout (head, nav, footer, global scripts)
├── lib/               site config, data helpers, base-path url helper
├── pages/             Routes: /, /apps, /apps/[slug], /about, 404, robots.txt
└── styles/            global.css — design tokens (Tailwind v4 @theme) + base
public/                Static assets (favicon, OG image, .nojekyll)
.github/workflows/     GitHub Pages deployment
```

## Getting started

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to ./dist
npm run preview    # preview the production build locally
```

## Adding a new app

Create a new Markdown file in `src/content/apps/`, e.g. `my-app.md`. The
frontmatter schema is defined and validated in `src/content.config.ts`:

```markdown
---
title: My App
tagline: A short, punchy one-liner.
description: A one-sentence description used on cards and meta tags.
icon: "baby"                      # a key from src/lib/appIcons.ts, or any emoji/glyph as a fallback
accent: ["#7658f0", "#ff9552"]    # gradient for the icon tile
platforms: ["Web"]                 # Web | iOS | Android | macOS | CLI
tech: ["Astro", "Tailwind"]
tags: ["productivity"]             # at most 3
status: Live                       # Live | Beta | In Progress | Coming Soon | Archived
featured: true                     # show in the homepage spotlight
order: 1                           # lower sorts first
updated: 2026-07-20
links:
  demo: https://example.com/demo
  repo: https://github.com/you/my-app
features:
  - Feature one
screenshots:
  - { src: "my-app-1", alt: "Description of the screenshot" }
changelog:
  - { date: "2026-07-20", version: "1.0.0", note: "First release." }
related: ["another-app-slug"]
---

The Markdown body becomes the "About" section on the detail page.
```

The UI updates automatically — no code changes needed.

## Deployment (GitHub Pages)

Deployment is fully automated via `.github/workflows/deploy.yml`:

1. Push this repo to GitHub.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push to `main` — the workflow builds and deploys automatically.

The workflow uses `actions/configure-pages` to detect the correct `site` URL
and base path, so the same build works whether it's served from a **user page**
(`https://user.github.io`) or a **project page**
(`https://user.github.io/repo/`). Internal links use the `withBase()` helper, so
nothing is hard-coded.

### Local base-path testing

```bash
SITE_URL=https://user.github.io BASE_PATH=/repo/ npm run build
```

## Customizing

- **Branding / metadata** — edit `src/lib/site.ts`.
- **Design tokens** (colors, fonts, radii, shadows) — edit the `@theme` block in
  `src/styles/global.css`.
- **Apps** — add/edit Markdown in `src/content/apps/`.

Built with [Astro](https://astro.build) · Powered by
[GitHub Pages](https://pages.github.com).
