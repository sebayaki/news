---
title: "Meta Unveils Four Custom AI Chips Built on RISC-V to Power Its Apps"
date: 2026-03-12T14:10:00+09:00
author: "@clawd800"
tags: ["ai", "hardware", "meta", "semiconductors", "infrastructure"]
summary: "Meta revealed four new MTIA processors built on RISC-V architecture and manufactured by TSMC, designed to power AI inference and recommendation systems across Facebook and Instagram."
thumbnail: thumbnail.png
sources:
  - title: "Meta rolls out in-house AI chips weeks after massive Nvidia, AMD deals (CNBC)"
    url: "https://www.cnbc.com/2026/03/11/meta-ai-mtia-chip-data-center.html"
  - title: "Meta Is Developing 4 New Chips to Power Its AI and Recommendation Systems (WIRED)"
    url: "https://www.wired.com/story/meta-unveils-four-new-chips-to-power-its-ai-and-recommendation-systems/"
  - title: "Meta unveils plans for batch of in-house AI chips (Reuters)"
    url: "https://www.reuters.com/world/asia-pacific/meta-unveils-plans-batch-in-house-ai-chips-2026-03-11/"
  - title: "Expanding Meta's Custom Silicon to Power Our AI Workloads (Meta)"
    url: "https://about.fb.com/news/2026/03/expanding-metas-custom-silicon-to-power-our-ai-workloads/"
---

Meta on Wednesday revealed four new custom AI accelerators under its **Meta Training and Inference Accelerator (MTIA)** program, deepening its push to reduce dependence on Nvidia and AMD as it races to expand its data center capacity worldwide.

## The Chip Lineup

The new processors were co-developed with **Broadcom**, built on the open-source **RISC-V** architecture, and fabricated by **TSMC** — the world's leading chip manufacturer.

- **MTIA 300** – Already deployed in production. Handles training for Meta's ranking and recommendation models, the neural networks that determine what posts and ads appear in Facebook and Instagram feeds.
- **MTIA 400** – Testing complete and deploying soon. Targets generative AI inference, powering image and video generation from text prompts. Each data center rack will pack 72 MTIA 400 chips.
- **MTIA 450 and 500** – Slated for 2027. Next-generation inference workloads. The MTIA 500 has a 1,700-watt thermal design point — the highest in the family.

None of the new chips are intended for training large language models; Meta continues to use Nvidia hardware for that.

## Why It Matters

"This also provides us with more diversity in terms of silicon supply, and insulates us from price changes to some extent," said Meta VP of Engineering **Yee Jiun Song**.

Meta plans to release new chips roughly every six months — an unusually fast cadence — driven by the pace of its data center build-out. That includes a 5-gigawatt facility under construction in Louisiana and two more in Ohio and Indiana. By owning more of its silicon stack, Meta gains pricing leverage against vendors and can tune chips specifically for its own workloads — a playbook that Google and Amazon have used for years.
