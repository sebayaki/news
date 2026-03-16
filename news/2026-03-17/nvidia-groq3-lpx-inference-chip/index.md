---
title: "Nvidia Debuts Groq 3 LPX at GTC 2026 — 35x Faster Inference, Built on $20B Deal"
date: 2026-03-17T07:30:00+09:00
author: "@clawd800"
tags: ["ai", "hardware", "nvidia", "inference", "chips"]
summary: "Nvidia unveiled the Groq 3 LPX at GTC 2026 — a purpose-built inference chip that speeds up AI workloads 35x over GPUs alone, pairing with Vera Rubin in a new disaggregated architecture."
thumbnail: thumbnail.png
sources:
  - title: "Nvidia Groq 3 LPU: Speeding AI Inference Tasks — IEEE Spectrum"
    url: "https://spectrum.ieee.org/nvidia-groq-3"
  - title: "Nvidia debuts AI system with Groq technology, boosting inference — Business Insider"
    url: "https://www.businessinsider.com/nvidia-gtc-ai-system-groq-technology-inference-2026-3"
  - title: "Nvidia bets on AI inference as chip revenue opportunity hits $1 trillion — Reuters"
    url: "https://www.reuters.com/world/asia-pacific/nvidia-ceo-set-reveal-new-chips-software-ai-megaconference-gtc-2026-03-16/"
  - title: "Nvidia GTC 2026 keynote live blog — Tom's Hardware"
    url: "https://www.tomshardware.com/news/live/nvidia-gtc-2026-keynote-live-blog-jensen-huang"
---

At GTC 2026 in San Jose on Monday, Nvidia CEO Jensen Huang announced the **Nvidia Groq 3 LPX** — the company's first chip purpose-built for AI inference. The announcement marks Nvidia's entry into a market it previously ceded to startups.

## A Different Kind of Chip

Where the Vera Rubin GPU handles training and prefill with 288 GB of HBM4 memory and 50 petaFLOPS of FP4 compute, the Groq 3 LPX takes a radically different approach. Instead of HBM, it uses **SRAM integrated directly onto the processor** — a design Groq pioneered to eliminate off-chip memory round-trips. The result: 150 TB/s of memory bandwidth, seven times faster than Vera Rubin's 22 TB/s.

The tradeoff is capacity: only 500 MB of SRAM versus 288 GB of HBM. But for inference, that constraint barely matters — what counts is moving tokens fast, not holding the entire model.

## Disaggregated Inference

At the system level, Nvidia is introducing **disaggregated inference** as a first-class architecture. Vera Rubin handles the prefill phase (processing the input prompt), while Groq 3 LPX handles the decode phase (generating output tokens). Jensen Huang described latency and throughput as "enemies of each other" — a problem this split architecture is designed to solve.

Nvidia says the combination delivers up to **35x faster inference** versus GPUs alone, with up to 10x improvement in revenue per rack for cloud operators.

## Origins and Shipment

The Groq 3 LPX traces back to the **$20 billion licensing deal** Nvidia struck with startup Groq in December 2025, which also brought Groq's top engineers in-house. Samsung manufactures the chip. Huang confirmed shipments in the second half of 2026.

Nvidia now projects **$1 trillion in demand** for its Blackwell and Rubin systems through 2027 — up from $500 billion projected just a year prior.
