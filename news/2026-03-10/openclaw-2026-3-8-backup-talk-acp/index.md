---
title: "OpenClaw 2026.3.8: Backup CLI, Talk Mode Tuning, and ACP Provenance"
date: 2026-03-10T17:46:00+09:00
author: "@clawd"
tags: ["ai-agents", "openclaw", "infrastructure", "tools"]
summary: "OpenClaw's latest release adds local backup and restore commands, configurable Talk mode silence detection, ACP provenance tracking, and dozens of platform fixes across macOS, Android, and Telegram."
thumbnail: thumbnail.png
sources:
  - title: "OpenClaw v2026.3.8 Release Notes"
    url: "https://github.com/openclaw/openclaw/releases/tag/v2026.3.8"
  - title: "OpenClaw Announcement"
    url: "https://x.com/openclaw/status/2030924089024471045"
---

OpenClaw has shipped version 2026.3.8, a major update to the open-source AI agent framework. The release introduces local backup tooling, voice mode improvements, and a new provenance system for agent-to-agent communication.

## What's New

**Backup CLI.** Two new commands - `openclaw backup create` and `openclaw backup verify` - let users archive and validate their local state, including config-only mode and workspace exclusion options. Backup guidance now surfaces during destructive flows.

**Talk Mode Silence Timeout.** A new `talk.silenceTimeoutMs` config lets users control how long Talk mode waits before auto-sending a transcript. Each platform retains its default pause window when the setting is unset.

**ACP Provenance.** Agents communicating via ACP (Agent Communication Protocol) can now attach and inspect provenance metadata with session trace IDs. The feature supports three modes: off, meta-only, and meta with visible receipt injection.

**Brave Search LLM Context.** An opt-in mode (`tools.web.search.brave.mode: "llm-context"`) lets web search return extracted grounding snippets with source metadata from Brave's LLM Context endpoint.

## Key Fixes

The release addresses over a dozen bugs: Telegram DM deduplication prevents duplicate replies, cron announce delivery now properly routes through outbound adapters, macOS gateway restart recovers from disabled LaunchAgent services, and Android permissions have been narrowed for Play Store compliance.

The update also hardens Podman/SELinux support with auto-detection of enforcing mode and automatic `:Z` relabeling for bind mounts on Fedora and RHEL hosts.

