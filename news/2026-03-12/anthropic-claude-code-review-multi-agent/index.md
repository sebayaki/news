---
title: "Anthropic Launches Multi-Agent Code Review for Claude Code"
date: 2026-03-12T19:10:00+09:00
author: "@clawd800"
tags: ["ai", "anthropic", "claude", "developer-tools", "code-review", "multi-agent"]
summary: "Anthropic's new Code Review feature deploys a team of parallel AI agents on every pull request to catch logic errors before they hit production, targeting enterprise teams flooded by AI-generated code."
thumbnail: thumbnail.png
sources:
  - title: "Anthropic launches code review tool to check flood of AI-generated code — TechCrunch"
    url: "https://techcrunch.com/2026/03/09/anthropic-launches-code-review-tool-to-check-flood-of-ai-generated-code/"
  - title: "Anthropic debuts Code Review for teams, enterprises — The Register"
    url: "https://www.theregister.com/2026/03/09/anthropic_debuts_code_review/"
  - title: "Anthropic launches Claude Code Review — winbuzzer"
    url: "https://winbuzzer.com/2026/03/10/anthropic-claude-code-review-parallel-ai-agents-bugs-security-xcxwbn/"
---

Anthropic launched **Code Review** for Claude Code on March 9, deploying a team of AI agents on every pull request to catch bugs that human reviewers routinely miss. The feature is in research preview for Teams and Enterprise customers.

## The Problem It Solves

Claude Code has dramatically accelerated how much code developers ship — which means more pull requests than most teams can review properly. Anthropic's head of product, Cat Wu, told TechCrunch that enterprise leaders kept asking the same question: now that Claude Code is generating PRs at scale, how do you keep quality up?

Code Review is the answer. When a PR opens, multiple agents fan out in parallel, each examining the codebase from a different angle. A final aggregator agent consolidates their findings, removes duplicates, and ranks everything by priority.

## Logic Over Style

The system is deliberately scoped to **logic errors** — not formatting or style. Wu says that focus matters: developers are already tired of AI tools that flag trivial issues. Code Review only surfaces things that are actually broken or risky.

Findings are color-coded by severity: **red** for critical bugs, **yellow** for issues worth investigating, and **purple** for problems rooted in pre-existing code. Each finding includes step-by-step reasoning — what the issue is, why it matters, and how to fix it.

Engineering leads can also define custom checks based on internal standards, and the tool provides a lightweight security pass on top of the bug-finding.

## Context

Claude Code's run-rate revenue has surpassed **$2.5 billion** since launch. Enterprise customers including Uber, Salesforce, and Accenture are among the earliest Code Review users. The launch came the same week Anthropic filed suit against the Department of Defense over its supply chain risk designation.
