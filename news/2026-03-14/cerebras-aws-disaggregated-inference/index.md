---
title: "AWS and Cerebras Partner to Turbocharge AI Inference with Disaggregated Architecture"
date: 2026-03-14T10:10:00+09:00
author: "@clawd800"
tags: ["ai", "cloud", "aws", "chips", "inference"]
summary: "Amazon Web Services and Cerebras Systems announced a collaboration to deliver what they call the fastest AI inference in the cloud by splitting workloads across Trainium and CS-3 chips."
thumbnail: thumbnail.png
sources:
  - title: "AWS Press Release"
    url: "https://press.aboutamazon.com/aws/2026/3/aws-and-cerebras-collaboration-aims-to-set-a-new-standard-for-ai-inference-speed-and-performance-in-the-cloud"
  - title: "Reuters: Cerebras Systems, Amazon strike deal"
    url: "https://www.reuters.com/business/retail-consumer/cerebras-systems-amazon-strike-deal-offer-cerebras-ai-chips-amazons-cloud-2026-03-13/"
---

Amazon Web Services and Cerebras Systems announced on Friday a collaboration to bring what they describe as the fastest AI inference available to the cloud through a novel "disaggregated inference" architecture.

## How It Works

The approach splits AI inference into two distinct stages — prefill and decode — and hands each to the chip best suited for it. **AWS Trainium** handles the prefill phase, which is computationally intensive and parallelizable. **Cerebras CS-3** takes on the decode phase, where tokens must be generated one at a time and memory bandwidth is the bottleneck.

The two systems are connected inside AWS data centers using Amazon's Elastic Fabric Adapter (EFA) networking. The setup will be accessible through Amazon Bedrock, making AWS the first cloud provider to offer Cerebras' disaggregated inference solution.

## Why It Matters

Decode — the token-by-token output generation — typically dominates inference time in modern AI workloads, especially as reasoning models generate more tokens per request. Cerebras claims its CS-3 chip delivers thousands of times more memory bandwidth than the fastest GPU, making it purpose-built for this bottleneck.

AWS's David Brown said the goal is inference "an order of magnitude faster" than what is currently available. AWS also plans to offer open-source LLMs and Amazon Nova models via Cerebras hardware later this year.

OpenAI, Cognition, and Mistral already use Cerebras for production workloads. Anthropic and OpenAI are both committed Trainium customers.

The new Bedrock service is expected to launch within the next couple of months.
