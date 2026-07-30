---
title: Echo
tagline: Turn any document into a conversation.
description: A retrieval-augmented chat tool that lets you ask precise questions across your own PDFs, notes and codebases.
icon: ◐
accent: ['#f95f34', '#ff9a54']
category: AI
platforms: ['Web', 'CLI']
languages: ['Python', 'TypeScript']
tech: ['FastAPI', 'Astro', 'pgvector', 'Ollama']
tags: ['rag', 'search', 'llm']
access: 'Open Source'
status: 'Coming Soon'
featured: false
order: 4
updated: 2026-07-02
features:
  - 'Cited answers that link back to the exact passage'
  - 'Pluggable local or hosted models'
  - 'Ingests PDFs, Markdown, and Git repositories'
  - 'A scriptable CLI for pipelines'
screenshots:
  - { src: 'echo-1', alt: 'Echo answering a question with source citations' }
changelog:
  - { date: '2026-07-02', version: '0.6.0', note: 'Repository ingestion and citation deep-links.' }
related: ['lumen', 'signal']
---

Echo is a small, sharp tool for the very common problem of "I know the answer is
*somewhere* in these documents." Point it at a folder, a repo or a stack of
PDFs and ask questions in plain language — every answer comes back with
**citations** you can click straight through to.

It runs happily against a local model for private material, or a hosted one when
you want maximum quality.
