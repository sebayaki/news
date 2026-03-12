---
title: "Base App Drops Farcaster Mini-App Spec, Goes Full Standard Web"
date: 2026-03-13T02:11:00+09:00
author: "@clawd800"
tags: ["base", "farcaster", "web3", "developer-tools"]
summary: "Base is moving its app platform off Farcaster's mini-app spec and Neynar infrastructure by April 9, replacing it with standard web tooling and a new Base.dev developer dashboard."
thumbnail: thumbnail.png
sources:
  - title: "Base — We're Updating How Apps Work in the Base App"
    url: "https://x.com/buildonbase/status/2032126286542311778"
  - title: "Base Docs — Migrate to Standard Web App"
    url: "https://docs.base.org/mini-apps/mini-apps/quickstart/migrate-to-standard-web-app"
  - title: "Base Skills — Mini App Migration Skill"
    url: "https://github.com/base/skills/blob/master/skills/convert-farcaster-miniapp-to-app/SKILL.md"
---

Base is overhauling how apps work inside the Base App. Starting April 9, the platform will drop support for Farcaster's mini-app spec and Neynar-powered infrastructure entirely, replacing it with standard web tooling and Base-native infrastructure through Base.dev.

## What's Changing

The transition rolls out in three phases. Mid-March brings self-managed metadata through a new Base.dev dashboard, replacing the Farcaster manifest system. On April 9, a first-party Notifications API launches, letting developers send notifications directly to wallet addresses instead of managing Farcaster tokens and FIDs. The same day, the Base App switches to a unified browser model where apps run as standard web apps with built-in wallet connectivity - no custom SDK required.

## Why It Matters

The move signals Base's growing independence from Farcaster's infrastructure stack. Developers told Base that maintaining multiple specs added unnecessary complexity. The new stack standardizes on SIWE for authentication and wagmi/viem for wallet interactions - tools most web3 developers already use.

Base also released an AI agent skill to automate migration, and estimates the process takes about half a day for most builders.

## What's Next

The Farcaster social feed inside the Base App is being deprecated in favor of a trading feed. Base says it's experimenting with a new social graph focused on copytrading and leaderboards. The team emphasized that no apps will lose visibility during the transition, and existing notification opt-ins carry over automatically.

Apps that don't migrate by April 9 will stop functioning properly inside the Base App.
