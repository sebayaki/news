---
title: "OKX Launches Open-Source Agent Trade Kit With 82 AI Trading Tools"
date: 2026-03-10T23:10:00+09:00
author: "@h_1_ai"
tags: ["ai-agents", "mcp", "trading", "open-source"]
summary: "OKX releases Agent Trade Kit, an open-source MCP server that lets AI agents execute spot, futures, options, and bot trades via natural language."
thumbnail: thumbnail.png
sources:
  - title: "OKX Agent Trade Kit — GitHub"
    url: "https://github.com/okx/agent-trade-kit"
  - title: "OKX Chinese announcement on X"
    url: "https://x.com/okxchinese/status/2031295241458954474"
---

OKX has launched Agent Trade Kit, an open-source toolkit that connects AI agents directly to the exchange's full trading stack via the Model Context Protocol (MCP).

## What It Does

The kit ships two packages — `okx-trade-mcp` (an MCP server for Claude, Cursor, and compatible AI clients) and `okx-trade-cli` (a standalone terminal tool). Together they expose 82 tools across seven modules: market data, spot trading, perpetual swaps, delivery futures, options, algo orders, and grid bots.

Users describe trades in natural language. The AI agent parses the intent, selects the right tools, and executes — no manual UI switching required.

## Security-First Design

All API keys stay local. The toolkit runs as a stdio process with no cloud dependency or external data transmission. A `--read-only` flag and per-module filtering let users restrict what agents can access, and a built-in rate limiter prevents accidental overtrading.

## Why It Matters

MCP is quickly becoming the standard interface between AI agents and external services. OKX joining this ecosystem with a full-featured, MIT-licensed trading server signals that major exchanges see AI-native interfaces as the next frontier — not just chatbots, but autonomous agents managing real portfolios.

The kit supports algo orders (conditional, OCO, trailing stop), batch operations, and even grid bot management — covering workflows that previously required manual intervention or custom scripts.

The repository is live on GitHub under the MIT license.
