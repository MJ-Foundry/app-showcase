---
title: Atlas
tagline: Maps for the way your team actually works.
description: A collaborative canvas for planning roadmaps, dependencies and quarterly bets on an infinite, buttery-smooth board.
icon: ◎
accent: ['#1667b8', '#3aa0ff']
category: Web
platforms: ['Web']
languages: ['TypeScript']
tech: ['React', 'Canvas', 'Yjs', 'Cloudflare']
tags: ['planning', 'collaboration', 'realtime']
access: 'Private'
status: 'Coming Soon'
featured: true
order: 2
updated: 2026-07-11
features:
  - 'Real-time multiplayer with presence and cursors'
  - 'Dependency arrows that reflow as you drag'
  - 'Quarter and swimlane views generated from the same data'
  - 'Offline-first with automatic conflict resolution'
screenshots:
  - { src: 'atlas-1', alt: 'Atlas roadmap board with dependency arrows' }
changelog:
  - { date: '2026-07-11', version: '0.9.0', note: 'Public beta — multiplayer presence and offline sync.' }
  - { date: '2026-06-01', version: '0.7.0', note: 'Dependency arrows and swimlane view.' }
related: ['lumen', 'pace']
---

Atlas started as a frustration with roadmap tools that force your plan into
their shape. It's an **infinite canvas** first, and structure second — you drop
ideas anywhere, then let Atlas derive quarters, swimlanes and dependency graphs
from the same underlying data.

The rendering layer is hand-tuned to stay at 60fps with thousands of nodes, and
everything syncs through a CRDT so collaboration feels instantaneous even
offline.
