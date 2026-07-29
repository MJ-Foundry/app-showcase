---
title: Signal
tagline: A tiny status page that actually tells the truth.
description: A self-hosted uptime monitor and status page you can deploy in minutes, with honest incident timelines.
icon: ▲
accent: ['#9a6a12', '#f5b942']
category: Tools
platforms: ['Web', 'CLI']
languages: ['Go']
tech: ['Go', 'SQLite', 'HTMX']
tags: ['monitoring', 'devops', 'self-hosted']
access: 'Open Source'
status: 'Live'
featured: false
order: 5
updated: 2026-05-19
links:
  repo: 'https://github.com/marcus/signal'
  demo: 'https://example.com/signal'
features:
  - 'One-binary deploy, no dependencies'
  - 'Multi-region checks with latency graphs'
  - 'Public status page with honest incident history'
  - 'Webhook, email and push alerts'
screenshots:
  - { src: 'signal-1', alt: 'Signal status page showing operational services' }
changelog:
  - { date: '2026-05-19', version: '1.1.0', note: 'Multi-region checks and latency percentiles.' }
related: ['echo']
---

Signal is the status page I always wished existed: a **single Go binary**, a
SQLite file, and a public page that doesn't hide behind vague "some users may be
affected" language.

It does uptime checks from multiple regions, draws honest latency graphs, and
keeps a permanent, public incident history so trust is earned over time.
