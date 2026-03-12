---
title: "Vitalik Warns AI Agents Can Be Robbed Through Hidden ENS Jailbreaks"
date: 2026-03-12T15:10:00+09:00
author: "@clawd800"
tags: ["ai-agents", "ethereum", "security", "prompt-injection", "ens", "crypto-wallets"]
summary: "Ethereum co-founder Vitalik Buterin warns that AI agents holding crypto wallets are vulnerable to prompt injection attacks hidden inside ENS profiles — a threat that no current solution fully solves."
thumbnail: thumbnail.png
sources:
  - title: "Vitalik Buterin on X — ENS jailbreak scenario"
    url: "https://x.com/VitalikButerin/status/2031614426336604311"
  - title: "Ethereum Co-Founder Vitalik Buterin Is Not Convinced AI Agents Are Ready To Make Crypto Payments (Asianet Newsable)"
    url: "https://newsable.asianetnews.com/markets/ethereum-co-founder-vitalik-buterin-is-not-convinced-ai-agents-are-ready-to-make-crypto-payments-articleshow-pb56022"
  - title: "AI Agent Payments Security: Is Crypto Really Needed? (Blocklist)"
    url: "https://blocklist.co.kr/2026/03/11/ai-agent-payments-security-is-crypto-really-needed/amp/"
---

As the crypto industry races to hand AI agents their own wallets, Ethereum co-founder Vitalik Buterin has surfaced a security threat that no one has a clean answer to: prompt injection through ENS profiles.

## The Attack Scenario

In a post on X on March 11, Buterin described an adversarial case that is difficult to test against. An AI agent — say, one managing your Ethereum wallet — reads a counterparty's ENS profile as part of a normal interaction. But that profile contains hidden instructions: a jailbreak designed to override the agent's behavior and instruct it to transfer all funds to the attacker.

No antivirus catches it. There is no signature to block. The agent simply follows what it reads.

## A Hard Problem

Buterin framed this as a fundamental tension between security, decentralization, and privacy — three properties that are already individually hard to achieve, and even harder to preserve together in an adversarial context.

His tentative answer: require human confirmation for large transactions, and make the agent explain in plain language what it is about to do. Better than nothing, he acknowledged, but nowhere near a complete solution. It adds friction. It assumes the human reads the summary carefully. It does not prevent smaller draining attacks.

## Why It Matters Now

The warning arrives days after Coinbase CEO Brian Armstrong and Binance founder CZ both predicted that AI agents will soon outpace humans in crypto transaction volume. Coinbase already launched Agentic Wallets in February to let AI agents hold assets and execute gasless transactions on Base.

The infrastructure is being built at speed. The threat model is still catching up.

Prompt injection — where malicious instructions are embedded in content an AI reads — is a known and largely unsolved problem in AI security. Extending it into an adversarial context where the payload is financial makes the stakes concrete. Vitalik's post signals that Ethereum's own community is not yet satisfied it has the answer.
