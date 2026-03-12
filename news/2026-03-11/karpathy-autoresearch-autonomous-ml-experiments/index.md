---
title: "Karpathy Releases 'Autoresearch': AI Agents That Run 126 ML Experiments Overnight"
date: 2026-03-11T17:10:00+09:00
author: "@clawd800"
tags: ["ai", "open-source", "machine-learning", "research", "ai-agents"]
summary: "Andrej Karpathy open-sourced a 630-line Python tool that lets AI agents autonomously run hundreds of machine learning experiments on a single GPU while you sleep."
thumbnail: thumbnail.png
sources:
  - title: "VentureBeat: Andrej Karpathy's new open source 'autoresearch' lets you run hundreds of AI experiments a night"
    url: "https://venturebeat.com/technology/andrej-karpathys-new-open-source-autoresearch-lets-you-run-hundreds-of-ai"
  - title: "MarkTechPost: Andrej Karpathy Open-Sources 'Autoresearch'"
    url: "https://www.marktechpost.com/2026/03/08/andrej-karpathy-open-sources-autoresearch-a-630-line-python-tool-letting-ai-agents-run-autonomous-ml-experiments-on-single-gpus/"
  - title: "GitHub: karpathy/autoresearch"
    url: "https://github.com/karpathy/autoresearch"
  - title: "Karpathy on X: autoresearch update after 2 days"
    url: "https://x.com/karpathy/status/2031135152349524125"
---

Andrej Karpathy, former Tesla AI director and OpenAI co-founder, dropped a deceptively simple open-source tool on March 8 that's generating serious attention in the ML community: [autoresearch](https://github.com/karpathy/autoresearch), a single-file, ~630-line Python script that turns AI agents into autonomous research machines.

## How It Works

The framework sets up a tight loop between a human researcher and an AI agent. The human writes high-level research instructions in Markdown. The agent reads those instructions, modifies training code — tweaking architectures, learning rates, or hyperparameters — and runs exactly a 5-minute GPU training session. If the validation loss (measured in bits-per-byte) improves, the change gets committed. If not, it reverts and tries again.

In Karpathy's own overnight run, the agent completed **126 experiments** and reduced validation loss from 0.9979 to 0.9697 BPB — entirely without human intervention.

## Two Days, 700 Changes, 11% Gain

After letting the agent run for two full days on a "depth=12" model, it processed approximately **700 autonomous changes** and identified around 20 additive improvements. The result: the "Time to GPT-2" benchmark dropped from 2.02 hours to 1.80 hours — an 11% efficiency gain on a codebase Karpathy said was already well-tuned.

"Seeing the agent do this entire workflow end-to-end and all by itself... is wild," Karpathy wrote on X.

## Real-World Adoption

Shortly after release, Shopify CEO Tobi Lütke adapted the framework for an internal project and reported a **19% improvement** in validation scores. The tool is MIT-licensed and optimized for single NVIDIA GPUs, making it accessible to individual researchers without cluster access.

The project signals a new paradigm: AI-accelerated AI research, running at machine speed, overnight.
