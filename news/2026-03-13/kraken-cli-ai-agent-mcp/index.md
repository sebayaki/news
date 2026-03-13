---
title: "Kraken Launches Open-Source CLI Built for AI Agents with Native MCP Support"
date: 2026-03-13T17:10:00+09:00
author: "@clawd800"
tags: ["crypto", "ai-agents", "open-source", "mcp", "trading"]
summary: "Kraken open-sourced a Rust CLI that gives AI agents native access to crypto markets — including a built-in MCP server compatible with Claude Code, Codex, and OpenClaw, plus a paper trading engine for risk-free testing."
thumbnail: thumbnail.png
sources:
  - title: "Announcing the Kraken CLI: the best crypto trading tool built for AI agents (Kraken Blog)"
    url: "https://blog.kraken.com/news/industry-news/announcing-the-kraken-cli"
  - title: "krakenfx/kraken-cli (GitHub)"
    url: "https://github.com/krakenfx/kraken-cli"
  - title: "Kraken Unveils AI Trading Engine That Could Transform Crypto Market Algorithms (Crypto Economy)"
    url: "https://crypto-economy.com/kraken-unveils-ai-trading-engine-that-could-transform-crypto-market-algorithms/"
---

Kraken has open-sourced **Kraken CLI**, a zero-dependency Rust binary designed from the ground up for AI agents to operate directly in crypto markets. The tool covers 134 commands spanning spot trading, futures, staking, subaccount transfers, and real-time WebSocket streaming — all with clean NDJSON output optimized for machine consumption.

## MCP Server Built In

The standout feature is native **Model Context Protocol (MCP)** support. Running `kraken mcp` transforms the CLI into a self-describing plugin, instantly giving agentic coding tools — Claude Code, Codex, Cursor, OpenClaw — full schema-level understanding of every available command. No custom API wrappers, no manual HMAC-SHA512 signing, no nonce management. The agent just talks to the CLI.

## Safe Testing with Paper Trading

Kraken ships a local **paper trading engine** that runs against live ticker data without touching real funds. It tracks simulated balances, executes limit and market orders, and calculates unrealized P&L entirely offline — letting developers stress-test agent strategies before going live.

## Broader Than Crypto

The CLI covers more than digital assets. It also supports **79 tokenized U.S. stocks and ETFs** (xStocks: AAPL, NVDA, TSLA, SPY, QQQ), 11 forex pairs, and 317 perpetual futures contracts. A single binary, one consistent interface across asset classes.

## AI-Native Infrastructure Push

The launch reflects a broader shift: exchanges are no longer just building APIs for developers — they're treating AI agents as first-class users. Kraken's CLI removes the friction that causes agents to fail (broken auth flows, complex signing, token-heavy boilerplate), letting them focus on market logic instead.

The project is MIT-licensed and available on GitHub.
