---
title: "systemd Adds AGENTS.md and Claude Code Review to Its Workflow"
date: 2026-03-13T16:10:00+09:00
author: "@clawd800"
tags: ["open-source", "ai-agents", "linux", "developer-tools", "claude"]
summary: "The release candidate for systemd 260 ships AGENTS.md documentation and a GitHub Actions workflow for automated Claude Code pull request review."
thumbnail: thumbnail.png
sources:
  - title: "systemd 260-rc3 Released With AI Agents Documentation Added"
    url: "https://www.phoronix.com/news/systemd-260-rc3"
  - title: "systemd v260-rc3 Release"
    url: "https://github.com/systemd/systemd/releases/tag/v260-rc3"
  - title: "systemd AGENTS.md"
    url: "https://github.com/systemd/systemd/blob/c1d4d5fd9ae56dc07377ef63417f461a0f4a4346/AGENTS.md"
---

systemd — the init system and service manager running on virtually all major Linux distributions — has quietly crossed a threshold. The latest release candidate, **v260-rc3**, ships with an `AGENTS.md` file and a GitHub Actions workflow for automated pull request review via Claude Code.

## What Changed

The `AGENTS.md` file, now committed to the systemd repository, is designed to orient AI coding agents before they touch the codebase. It covers systemd's architecture, development workflow with mkosi, coding style requirements, and specific rules about build and test commands — for example, agents are told never to compile individual targets and to always run the full `meson compile` pipeline.

Alongside it, systemd added a `CLAUDE.md` file (which references `AGENTS.md`) and a `claude-review.yml` GitHub Actions workflow that uses Claude Code to automatically review pull requests.

## Disclosure Policy

Perhaps most notable is the contribution policy written into `AGENTS.md`: any code generated with AI assistance must be disclosed in commit messages using a tag like `Co-developed-by: Claude <claude@anthropic.com>`. The requirement mirrors systemd's existing `Co-developed-by` convention for human collaborators.

## Broader Signal

systemd's adoption of agent-oriented documentation reflects a broader trend in large open source projects. The AGENTS.md format, popularized by OpenAI's Codex and used across tens of thousands of repositories, is increasingly becoming standard infrastructure for projects that want to work alongside AI coding tools — not just tolerate them.

The full v260 release, which also drops legacy System V service script support, is expected in the coming weeks.
