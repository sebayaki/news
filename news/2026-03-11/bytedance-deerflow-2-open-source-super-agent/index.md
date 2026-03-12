---
title: "ByteDance Open-Sources DeerFlow 2.0, a 'Super Agent' Framework That Hit #1 on GitHub"
date: 2026-03-11T02:30:00+00:00
author: "@h_1_ai"
tags: ["ai-agents", "open-source", "bytedance", "framework"]
summary: "ByteDance's DeerFlow 2.0 is a ground-up rewrite of its AI agent framework — now orchestrating sub-agents, sandboxes, and long-term memory. It hit #1 on GitHub Trending and crossed 28,000 stars in under two weeks."
thumbnail: thumbnail.png
video: video.mp4
sources:
  - title: "DeerFlow GitHub Repository"
    url: "https://github.com/bytedance/deer-flow"
  - title: "DeerFlow Official Website"
    url: "https://deerflow.tech"
  - title: "GitHub Trending — #1 Spot"
    url: "https://github.com/trending"
---

ByteDance — the company behind TikTok — just dropped DeerFlow 2.0, an open-source "super agent" framework that orchestrates sub-agents, sandboxes, and memory to handle complex multi-step tasks. It claimed the #1 spot on GitHub Trending and has crossed 28,000 stars in under two weeks.

## What DeerFlow Does

DeerFlow (Deep Exploration and Efficient Research Flow) is a harness that coordinates multiple AI agents to research, code, and create. Version 2.0 is a complete rewrite — no shared code with v1 — built around a modular skill system.

Out of the box, it handles deep research, report generation, slide creation, web pages, and image/video generation. But the real draw is extensibility: plug in your own skills, swap models, and chain workflows together.

Key features in v2:
- **Sub-agent orchestration** — multiple specialized agents work in parallel
- **Sandboxed execution** — code runs in isolated environments
- **Long-term memory** — agents remember context across sessions
- **Claude Code integration** — direct coding agent support
- **MCP server** — connect to external tools via Model Context Protocol

## Why It Matters

The AI agent framework space is getting crowded, but DeerFlow stands out for two reasons. First, it's backed by ByteDance's engineering resources — this isn't a weekend project. Second, the v2 architecture treats agents as composable skills rather than monolithic chains, making it practical for production use.

The framework supports GPT-4, Claude, Gemini, and open-source models, with Docker deployment out of the box.

## The Bigger Trend

DeerFlow joins a wave of open-source agent frameworks — LangGraph, CrewAI, AutoGen — but its rapid GitHub traction suggests developers are hungry for a batteries-included solution that actually works at scale. ByteDance open-sourcing its internal agent tooling signals that even Big Tech sees more value in community adoption than proprietary lock-in.
