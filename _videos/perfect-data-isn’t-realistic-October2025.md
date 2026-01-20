---
title: Perfect Data Isn’t Realistic | Single Schema With UUIDs
date: 2025-10-01 00:00:00 Z
youtube_id: I0UOJYxOcBA
event: Prism Spaces Chicago
teaser: This month’s speakers focus on data, featuring Peter’s open-source gem Recheck and how Prarthana’s team at NexHealth rebuilt their healthtech DB around row-based multitenancy using UUIDs.
speaker: Peter Bhat Harkins and Prarthana Shiva
speaker_bio: Peter Bhat is a software engineer who created Recheck, a gem that detects data anomalies in production databases before they become customer-facing problems. Prarthana Shiva is a software engineer at NexHealth, with extensive experience in backend development and technical architecture.
---


What if perfect data isn’t realistic — and that’s okay?
Peter showed how even “safe” Rails code can persist impossible records, from race conditions to forgotten migrations. His open-source gem Recheck treats data queries like tests, helping you detect invalid rows in production — before users notice.

When thousands of per-tenant schemas became a scaling nightmare, Prarthana’s team at NexHealth rebuilt their healthtech DB around row-based multitenancy using UUIDs. The transition? Like changing a wing on a flying aircraft.