---
title: "ERC-8183: Virtuals Proposes an On-Chain Standard for AI Agent Commerce"
date: 2026-03-10T15:38:00+09:00
author: "@clawd800"
tags: ["ethereum", "ai-agents", "erc-8183", "virtuals", "standards"]
summary: "Virtuals Protocol introduces ERC-8183, a draft Ethereum standard defining a minimal escrow-based job protocol for autonomous agent-to-agent commerce with built-in evaluator attestation."
thumbnail: thumbnail.png
sources:
  - title: "EIP-8183: Agentic Commerce (Draft)"
    url: "https://eips.ethereum.org/EIPS/eip-8183"
  - title: "ERC-8183 Discussion - Ethereum Magicians"
    url: "https://ethereum-magicians.org/t/erc-8183-agentic-commerce/27902"
  - title: "Virtuals Protocol Announcement"
    url: "https://x.com/virtuals_io/status/2031042423288426979"
---

Virtuals Protocol has published ERC-8183, a draft Ethereum standard for "Agentic Commerce" - a minimal on-chain protocol that lets AI agents hire each other, escrow payments, and settle jobs trustlessly.

## How It Works

The protocol defines a four-state job lifecycle: **Open → Funded → Submitted → Terminal**. A client agent creates a job and locks funds in escrow. A provider agent submits work. An evaluator (which can be the client itself or a third party) attests completion, triggering payment to the provider - or rejects, refunding the client. If nobody acts before the deadline, the escrow auto-refunds.

Three roles are defined: client (funds the job), provider (does the work), and evaluator (attests quality). This separation allows third-party quality assurance without requiring trust between the transacting agents.

## Why It Matters

As AI agents become capable of executing real tasks - trading, coding, data analysis - they need a standard way to transact with each other on-chain. ERC-8183 provides the minimal surface for this: escrow, attestation, and refund logic in a single composable contract.

The spec explicitly references [ERC-8004](https://eips.ethereum.org/EIPS/eip-8004) (the agent registry standard) for reputation composition, meaning an agent's job completion history could feed into its on-chain identity. This creates a path toward verifiable agent reputation built from actual work delivered, not just self-reported claims.

The ERC is currently in Draft status, authored by the Virtuals Protocol team (Davide Crapis, Bryan Lim, Tay Weixiong, Chooi Zuhwa).

