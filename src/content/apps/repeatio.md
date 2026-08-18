---
title: Repeatio
tagline: Life maintenance for everything that comes back around.
description: A tracker for recurring responsibilities — sheets weekly, kettle descaled monthly, bike serviced each spring. Complete a task and the next one schedules itself.
icon: loop
accent: ['#1667b8', '#5aa9ea']
platforms: ['iOS', 'Android']
tech: ['React Native', 'Expo SDK 54', 'expo-router', 'expo-notifications', 'AsyncStorage']
tags: ['routines', 'reminders', 'household']
status: 'Coming Soon'
featured: true
order: 4
updated: 2026-07-26
features:
  - 'Interval, weekly, monthly and seasonal recurrence'
  - 'Floating or fixed anchoring for each schedule'
  - 'Dashboard buckets: overdue, today, soon, upcoming'
  - 'One-tap complete that regenerates the next due date'
  - 'Local notifications that deep-link straight to the task'
  - 'Snooze a single occurrence without disturbing the schedule'
related: ['medfolio', 'packfolio']
---

Todo apps are built for things you do once. The jobs that actually slip are the
ones that come back — and their defining feature is that finishing one is the
event that schedules the next.

The interesting decision is how a schedule re-anchors on completion. A floating
task counts forward from the day you actually did it, so descaling the kettle
eleven days late doesn't compress the next interval. A fixed task keeps its
original cadence regardless, because the first of the month is the first of the
month whether or not you were on time.

Everything is on-device, and the recurrence math is covered by tests rather than
by hope.
