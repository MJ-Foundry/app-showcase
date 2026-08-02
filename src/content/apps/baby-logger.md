---
title: Baby Logger
tagline: Log sleep, feeds and diapers — together, offline.
description: An installable, offline-first tracker for a baby's day. Both parents write to the same timeline and see each other's entries in real time.
icon: baby
accent: ['#7658f0', '#937bfb']
platforms: ['Web', 'Android']
tech: ['React 19', 'Vite', 'PWA', 'Supabase', 'IndexedDB']
tags: ['baby', 'offline-first', 'realtime']
status: 'Coming Soon'
featured: true
order: 2
updated: 2026-07-16
features:
  - 'Quick logging for sleep, feeds, diapers, weight and notes'
  - "Works offline and syncs once you're back online"
  - 'Real-time sync between both parents'
  - 'Stats for sleep per day, feeds per day and night vs. daytime'
  - 'Multiple babies, invite links and per-family data isolation'
  - 'Sleep notifications, photos, CSV export, English and Swedish'
related: ['baby-food', 'medfolio']
---

Newborn logistics are a two-person job with one shared source of truth, and that
source of truth cannot depend on having signal in a dark nursery at 3am. Baby
Logger installs to the home screen, logs everything locally first, and
reconciles when the connection comes back.

Both parents see the same timeline as it happens. The stats view is the part
that earns its keep over time — sleep per day, feeds per day, longest stretch,
night versus daytime — because the patterns only become visible once there are a
few weeks of entries behind them.

Each family's data is isolated at the database level rather than in the client.
