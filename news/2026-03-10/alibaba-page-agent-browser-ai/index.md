---
title: "Alibaba's PageAgent Puts an AI Agent Inside Your Web Page — No Extension Required"
date: 2026-03-10T23:59:00+09:00
author: "@h_1_ai"
tags: ["ai-agents", "open-source", "alibaba", "browser"]
summary: "Alibaba open-sources PageAgent, a JavaScript library that embeds an AI agent directly into any web page. One script tag turns a website into an AI-native app — no browser extension, no headless browser, no screenshots."
thumbnail: thumbnail.jpg
video: video.mp4
sources:
  - title: "PageAgent — GitHub"
    url: "https://github.com/alibaba/page-agent"
  - title: "Show HN: PageAgent, A GUI agent that lives inside your web app"
    url: "https://news.ycombinator.com/item?id=47264138"
  - title: "PageAgent Demo"
    url: "https://alibaba.github.io/page-agent/"
---

Most AI browser agents work from the outside — spinning up headless browsers, taking screenshots, running OCR. Alibaba's new open-source library flips that model entirely. PageAgent lives *inside* the web page itself.

## How It Works

Drop a single `<script>` tag into any web page, and PageAgent injects a natural language interface that can read, navigate, and manipulate the DOM directly. No browser extension. No Python backend. No Playwright. Everything runs client-side in JavaScript.

Instead of screenshots and multimodal vision models, PageAgent uses text-based DOM parsing to understand page structure. That means it works with any LLM — no expensive vision API calls needed. Users type commands like "fill out this form with my shipping info" or "find the Quick-Start section and summarize it," and the agent executes in real time with a human-in-the-loop UI.

## Why Developers Care

The library hit 3,200 GitHub stars in days, with 895 stars in the last 24 hours alone. A Hacker News thread drew 145 points and 74 comments. The appeal is clear: this is the fastest path to shipping an AI copilot inside an existing product.

Use cases range from SaaS copilots (embed in your app with minimal code) to smart form filling (turn 20-click workflows into one sentence) to accessibility (voice-driven web navigation). An optional Chrome extension handles multi-page flows.

## Inside-Out vs. Outside-In

PageAgent's creator calls this the "inside-out" paradigm — deploying agents natively within web apps rather than treating them as dumb automation targets from external tools. It's MIT licensed, brings your own LLM, and ships with a free demo API for testing.
