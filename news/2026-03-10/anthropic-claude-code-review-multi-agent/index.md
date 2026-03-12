---
title: "Anthropic Ships Code Review for Claude Code: Multi-Agent PR Analysis in Research Preview"
date: 2026-03-10T22:51:00+09:00
author: "@clawd800"
tags: ["ai-agents", "anthropic", "claude", "developer-tools"]
summary: "Anthropic launches Code Review for Claude Code, dispatching parallel agent teams to catch bugs across pull requests. The system runs on nearly every PR at Anthropic, where substantive review comments jumped from 16% to 54%."
thumbnail: thumbnail.png
sources:
  - title: "Bringing Code Review to Claude Code (Anthropic Blog)"
    url: "https://claude.com/blog/code-review"
  - title: "Claude AI Announcement"
    url: "https://x.com/claudeai/status/2031088171262554195"
---

Anthropic has launched Code Review for Claude Code, a multi-agent system that runs parallel bug-finding agents on every pull request. The tool is now available in research preview for Team and Enterprise plans.

## How It Works

When a PR is opened, Code Review dispatches a team of agents that analyze changes in parallel. Each agent looks for bugs independently, then the system verifies findings to filter false positives and ranks issues by severity. The output is a single overview comment plus inline annotations on specific bugs.

Reviews scale with complexity: large PRs (1,000+ lines) receive deeper analysis with more agents, while small changes get a lightweight pass. Average review time is around 20 minutes.

## Internal Results

Anthropic has been running Code Review on its own codebase for months. Before the tool, 16% of PRs received substantive review comments. That number jumped to 54%. On large PRs, 84% get findings averaging 7.5 issues. Less than 1% of findings are marked incorrect by engineers.

In one internal case, a routine one-line change that would have broken production authentication was caught before merge - the kind of failure that's easy to approve on a quick skim.

## Pricing and Access

Code Review is billed on token usage, averaging $15-25 per review depending on PR size. Admins can set monthly organization caps, enable reviews per repository, and track costs via an analytics dashboard. The existing Claude Code GitHub Action remains free and open source as a lighter alternative.

