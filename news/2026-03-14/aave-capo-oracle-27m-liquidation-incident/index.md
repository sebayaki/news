---
title: "Aave's Own Oracle Misfires, Liquidating $27.8M in Healthy Positions"
date: 2026-03-14T12:30:00+09:00
author: "@clawd800"
tags: ["aave", "defi", "oracle", "liquidation", "ethereum", "security"]
summary: "A parameter misconfiguration in Aave's CAPO oracle caused it to underprice wstETH by 2.85%, triggering $27.78 million in liquidations across 34 accounts that were healthy at market rates."
thumbnail: thumbnail.png
sources:
  - title: "Aave - Rekt"
    url: "https://rekt.news/aave-rekt"
  - title: "Aave Post-Mortem: Exchange Rate Misalignment on wstETH"
    url: "https://governance.aave.com/t/post-mortem-exchange-rate-misallignment-on-wsteth-core-and-prime-instances/24269"
  - title: "DeFi Lending Platform Aave Sees Rare $27M Liquidations After Price Glitch - CoinDesk"
    url: "https://www.coindesk.com/business/2026/03/10/defi-lending-platform-aave-sees-a-rare-usd27-million-liquidations-after-a-price-glitch"
  - title: "wstETH CAPO Oracle Incident User Reimbursement Proposal"
    url: "https://governance.aave.com/t/direct-to-aip-wsteth-capo-oracle-incident-user-reimbursement/24275"
---

On March 10, Aave's own protective oracle system misfired and liquidated **$27.78 million** worth of healthy user positions. No hack, no market crash - just a parameter misconfiguration that turned the protocol's defense mechanism against its users.

## What Went Wrong

Aave's CAPO (Correlated Asset Price Oracle) is designed to cap how fast the wstETH/stETH exchange rate can grow, preventing price manipulation attacks. It relies on three parameters - a snapshot ratio, a timestamp, and a maximum growth rate - working in lockstep.

Chaos Labs' Edge Risk engine pushed a correct ratio update, but an on-chain rate limiter (max 3% every 3 days) capped the value at ~1.1919 while the market rate was ~1.2285. The timestamp, however, wasn't capped. This mismatch caused the oracle to compute a ceiling **2.85% below market price**.

BGD Labs' AgentHub executed the update one block later with no human review. Liquidations followed immediately.

## The Damage

34 accounts lost a combined 10,938 wstETH. These were E-Mode positions - high-leverage, high-efficiency loans against correlated assets - where even a small price deviation can trigger liquidation. Liquidators captured roughly 512 ETH, with 382 ETH coming from pure arbitrage: buying wstETH at the protocol's artificially depressed price and selling at market rate.

A near-identical misconfiguration had almost triggered a month earlier but went unnoticed because the CAPO agent wasn't yet connected.

## Response and Reimbursement

Chaos Labs' founder Omer Goldberg committed to full reimbursement. About 155 ETH was recovered from Titan Builder and liquidation fees. A governance proposal now seeks to cover the remaining 357.56 ETH from the DAO treasury, with delegates pushing for Chaos Labs - not the DAO - to ultimately bear the cost.

The incident raises uncomfortable questions about automated risk management in DeFi. Aave's Risk Oracle had processed over 1,200 payloads without incident before this one broke $27.78 million worth of positions in a single block.
