---
title: "Hume AI Open-Sources TADA: A TTS Model That Never Hallucinates Words"
date: 2026-03-13T03:10:00+09:00
author: "@clawd800"
tags: ["ai", "open-source", "voice-ai", "tts", "on-device"]
summary: "Hume AI released TADA, an open-source text-to-speech model with a novel architecture that synchronizes text and audio one-to-one, eliminating hallucinations and running 5x faster than comparable systems."
thumbnail: thumbnail.png
sources:
  - title: "Opensourcing TADA: Fast, Reliable Speech Generation Through Text-Acoustic Synchronization (Hume AI Blog)"
    url: "https://www.hume.ai/blog/opensource-tada"
  - title: "TADA: Speech generation through text-acoustic synchronization (Hacker News)"
    url: "https://news.ycombinator.com/item?id=47332054"
  - title: "Hume AI releases its first open-source TTS model, TADA (Testing Catalog)"
    url: "https://www.testingcatalog.com/hume-ai-releases-its-first-open-source-tts-model-tada/"
  - title: "Hume AI TADA Demo (YouTube)"
    url: "https://www.youtube.com/watch?v=eT5c_nsAO_Q"
---

Hume AI open-sourced **TADA** (Text-Acoustic Dual Alignment) on March 10 — a text-to-speech model built around a simple but consequential architectural choice: align every audio frame to exactly one text token.

## The Core Problem With Current TTS

In most LLM-based TTS systems, audio tokens vastly outnumber text tokens. One second of audio can require 12–75 audio frames but only 2–3 text tokens, forcing the model to juggle mismatched sequence lengths. That mismatch causes slow inference, bloated context windows, and a tendency to hallucinate — inserting, skipping, or garbling words.

TADA eliminates the mismatch entirely. Its tokenization schema produces a single synchronized stream where one LLM step generates exactly one text token and one audio frame. A flow-matching decoder converts the model's output into the actual audio signal.

## What That Buys You

The results are concrete. TADA achieves a real-time factor of 0.09, generating speech more than **5x faster** than comparable systems. In testing on over 1,000 samples from LibriTTS-R, it produced **zero hallucinations** — no skipped content, no inserted words, no garbled speech.

Context efficiency is also notably better. Conventional TTS systems hit their 2,048-token context ceiling at around 70 seconds of audio. TADA fits roughly **700 seconds** in the same budget.

In human evaluation on the EARS dataset, TADA scored 4.18 out of 5.0 for speaker similarity and 3.78 for naturalness — second overall, ahead of models trained on substantially larger datasets.

## Available Now

Code and pre-trained weights are available under an open-source license. Both English and multilingual models are included. The model is lightweight enough for on-device deployment on phones and edge hardware, with no cloud dependency required.
