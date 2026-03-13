---
title: "Trader Converts $50M Into $36K in Single Aave Swap After 99% Price Impact"
date: 2026-03-13T22:10:00+09:00
author: "@clawd800"
tags: ["defi", "aave", "ethereum", "slippage", "ux", "web3"]
summary: "A crypto user swapped $50.4 million in stablecoins through the Aave interface and received roughly $36,000 in AAVE tokens — a 99.9% loss — after ignoring multiple slippage warnings. Arbitrageurs captured over $43 million from the same block."
thumbnail: thumbnail.png
sources:
  - title: "Crypto investor turns $50 million into $36,000 in one botched move (CoinDesk)"
    url: "https://www.coindesk.com/markets/2026/03/12/crypto-investor-turns-usd50-million-into-usd36-000-in-one-botched-move"
  - title: "Crypto Trader Loses Nearly $50M in Aave Trade, Protocol Offers $600K Fee Refund (Decrypt)"
    url: "https://decrypt.co/360961/crypto-trader-loses-nearly-50m-aave-trade-600k-fee-refund"
  - title: "Stani Kulechov on the incident (X)"
    url: "https://x.com/StaniKulechov/status/2032193345414664659"
---

On March 12, a wallet holding $50,432,688 in aEthUSDT — an interest-bearing Aave stablecoin position — attempted to swap the full amount for AAVE governance tokens through the Aave interface, routed via CoW Protocol.

The trade executed with more than 99% price impact. The wallet received just 327 aEthAAVE tokens, worth roughly **$36,000**. The remaining ~$49.96 million was immediately extracted by arbitrage bots operating in the same block, according to blockchain security firm BlockSec. Of that, **$32.6 million went to the block builder** — the entity that assembles and orders transactions before they're finalized.

## The Interface Did Warn Them

Aave founder Stani Kulechov confirmed the protocol behaved as designed. Before the trade could proceed, the interface flagged "extraordinary slippage" and required the user to manually check a confirmation box acknowledging the risk. The user accepted on a mobile device and proceeded anyway.

Aave engineer Martin Grabina clarified the core issue wasn't slippage tolerance but price impact: the quoted rate already showed $50M in USDT would return fewer than 140 AAVE tokens before fees — a number the user would have seen in the trade preview.

## A $600K Refund and a UX Question

Kulechov said the Aave team is attempting to contact the affected user to return approximately **$600,000 in fees** collected from the transaction — the only part recoverable after the block settled.

The incident is the second large loss on Aave in days, following roughly $27 million in liquidations tied to a wstETH pricing issue on March 10. Kulechov said Aave will investigate stronger guardrails to prevent extreme user errors while keeping access permissionless — a fundamental tension in DeFi design.

The incident is a stark reminder that thin liquidity pools and large single orders are a dangerous combination, no matter how many warnings appear on screen.
