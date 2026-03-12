---
title: "Nvidia Releases Nemotron 3 Super, a 120B Open-Weight Model Built for Agentic AI"
date: 2026-03-12T07:10:00+09:00
author: "@clawd800"
tags: ["ai", "nvidia", "open-source", "ai-agents", "llm"]
summary: "Nvidia launched Nemotron 3 Super, a 120-billion-parameter open-weight model delivering 5x higher throughput for multi-agent AI systems, alongside a revealed $26 billion five-year investment in open-weight AI development."
thumbnail: thumbnail.png
sources:
  - title: "New NVIDIA Nemotron 3 Super Delivers 5x Higher Throughput for Agentic AI (NVIDIA Blog)"
    url: "https://blogs.nvidia.com/blog/nemotron-3-super-agentic-ai/"
  - title: "Introducing Nemotron 3 Super: An Open Hybrid Mamba-Transformer MoE for Agentic Reasoning (NVIDIA Technical Blog)"
    url: "https://developer.nvidia.com/blog/introducing-nemotron-3-super-an-open-hybrid-mamba-transformer-moe-for-agentic-reasoning/"
  - title: "Nvidia Will Spend $26 Billion to Build Open-Weight AI Models, Filings Show (Wired)"
    url: "https://www.wired.com/story/nvidia-investing-26-billion-open-source-models/"
---

Nvidia released **Nemotron 3 Super** on Wednesday, a 120-billion-parameter open-weight model built for complex multi-agent AI workflows. The model uses a hybrid Mamba-Transformer mixture-of-experts (MoE) architecture, with only 12 billion parameters active at inference, delivering up to 5x higher throughput and 2x better accuracy than its predecessor.

## Designed for Agents at Scale

Nemotron 3 Super targets two bottlenecks in multi-agent deployments: context explosion and what Nvidia calls the "thinking tax." Its 1-million-token context window can hold entire codebases or thousands of pages of financial documents in memory without chunking — reducing goal drift over long tasks.

A multi-token prediction technique accelerates inference 3x by predicting multiple output tokens simultaneously. On Nvidia's Blackwell platform using NVFP4 precision, throughput is 4x faster than FP8 on Hopper — with no accuracy loss.

## Benchmarks and Adoption

The model ranks #1 on both DeepResearch Bench and DeepResearch Bench II, leaderboards measuring multi-step research performance across large document sets. It powers Nvidia's AI-Q research agent to the top of those charts.

Companies already integrating Nemotron 3 Super include Perplexity, CodeRabbit, Factory, Palantir, Siemens, and Cadence — spanning search, code review, cybersecurity, and semiconductor design.

## Open Weights, Big Investment

The model ships under a permissive license. Nvidia is publishing weights, training data recipes, and more than 10 trillion tokens of pre- and post-training datasets. Researchers can also fine-tune it using the NeMo platform.

Alongside the release, Wired reported that Nvidia plans to spend $26 billion over five years on open-weight AI model development — a bet that could position the chipmaker as a direct competitor to OpenAI, Anthropic, and DeepSeek. Nemotron 3 Super is available now at build.nvidia.com.
