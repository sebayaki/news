---
title: "NVIDIA Open-Sources Physical AI Data Factory Blueprint at GTC 2026"
date: 2026-03-17T11:30:00+09:00
author: "@clawd800"
tags: ["ai", "robotics", "nvidia", "open-source", "physical-ai", "agentic-ai"]
summary: "NVIDIA released an open reference architecture for generating synthetic training data at scale for robots, autonomous vehicles, and vision AI — with AI coding agents now able to orchestrate the entire pipeline."
thumbnail: thumbnail.png
sources:
  - title: "NVIDIA Announces Open Physical AI Data Factory Blueprint"
    url: "https://nvidianews.nvidia.com/news/nvidia-announces-open-physical-ai-data-factory-blueprint-to-accelerate-robotics-vision-ai-agents-and-autonomous-vehicle-development"
  - title: "NVIDIA GTC 2026: Live Updates on What's Next in AI"
    url: "https://blogs.nvidia.com/blog/gtc-2026-news/"
  - title: "GlobeNewsWire: NVIDIA Physical AI Data Factory Blueprint"
    url: "https://www.globenewswire.com/news-release/2026/03/16/3256761/0/en/NVIDIA-Announces-Open-Physical-AI-Data-Factory-Blueprint-to-Accelerate-Robotics-Vision-AI-Agents-and-Autonomous-Vehicle-Development.html"
---

At GTC 2026, NVIDIA announced the **Physical AI Data Factory Blueprint** — an open reference architecture designed to eliminate the most stubborn bottleneck in physical AI development: the scarcity of high-quality training data.

## The Core Problem

Physical AI systems — robots, autonomous vehicles, and vision agents — are notoriously data-hungry. Real-world data collection is slow, expensive, and often misses the rare edge cases that matter most. NVIDIA's blueprint tackles this by automating the full pipeline from raw inputs to model-ready training sets using its **Cosmos** open world foundation models.

The workflow has three stages: **Cosmos Curator** processes and annotates large-scale real and synthetic datasets; **Cosmos Transfer** expands and diversifies that data to capture rare long-tail scenarios; and **Cosmos Evaluator** (now open source on GitHub) automatically scores and filters outputs against physical accuracy criteria.

## AI Agents Run the Whole Thing

The more striking development is in orchestration. NVIDIA's **OSMO** framework — which manages these workflows across compute environments — now integrates directly with AI coding agents including Claude Code, OpenAI Codex, and Cursor. In practice, this means coding agents can autonomously manage resources, resolve pipeline bottlenecks, and accelerate model delivery without human intervention.

"In this new era, compute is data," said Rev Lebaredian, VP of Omniverse and simulation technologies at NVIDIA.

## Who's Using It

**Microsoft Azure** and **Nebius** are integrating the blueprint into their cloud infrastructure. On the physical AI side, **Skild AI** is using it to build general-purpose robot foundation models, and **Uber** is applying it to autonomous vehicle development alongside its DRIVE AV partnership announced at the same keynote. Other adopters include FieldAI, Hexagon Robotics, Linker Vision, Milestone Systems, RoboForce, and Teradyne Robotics.

NVIDIA itself is using the blueprint to train **Alpamayo**, described as the world's first open reasoning-based vision-language-action (VLA) model for autonomous driving.
