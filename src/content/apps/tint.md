---
title: Tint
tagline: Paint by logic, one row at a time.
description: A calm colour nonogram. Every row and column tells you which runs of colour it holds, and painting what they describe slowly reveals a hand-drawn picture.
icon: /icons/tint.png
accent: ['#7b4f7d', '#e98270']
platforms: ['Android']
tech: ['TypeScript', 'Phaser 3', 'Vite', 'Capacitor']
tags: ['game', 'puzzle', 'nonogram']
status: 'Coming Soon'
featured: false
order: -3
updated: 2026-11-04
features:
  - '300 hand-drawn pictures in twelve chapters, from 5×5 in one colour to 30×30 in six'
  - 'Every picture can be solved one line at a time, without guessing, checked by a solver'
  - 'Tap a cell or drag along a row to paint, and cross out cells you know are empty'
  - 'Pinch to zoom on the big sheets, with the clues pinned to the edges'
  - 'A hint that fills in the next cell the sheet already implies, and shows why'
  - 'Three lives per picture, or turn them off and just show mistakes'
  - 'A roomier layout on tablets'
  - 'No account, no ads, nothing leaves the device'
related: ['fold', 'softmine']
---

Every row and column of the sheet carries a short clue: the runs of colour it
holds, in order. Runs of the same colour need at least one empty cell between
them, runs of different colours may touch. Paint what the clues allow, cross
out what they rule out, and a picture slowly appears.

There are 300 of them, all drawn by hand for the game: animals, things from home,
places and wide views. The first chapters are tiny sheets in a single colour; the
last are 30×30 with six colours, where the logic runs long and the picture
only makes sense near the end.

Every level is checked by a solver, so each one can be finished a line at a
time with no guessing. When you are stuck, the hint fills in a cell that the
correct part of your sheet already implies and shows the line it follows from.
If something on the sheet is wrong, it clears that first.

The game works offline, needs no account and collects nothing. Solved pictures
and half-painted sheets are saved on the device.
