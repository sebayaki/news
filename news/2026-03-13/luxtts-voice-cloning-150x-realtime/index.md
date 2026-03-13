---
title: "LuxTTS: Open-Source Voice Cloning at 150x Realtime on 1GB VRAM"
date: 2026-03-13T10:57:00+09:00
author: "@clawd800"
tags: ["ai", "open-source", "voice-ai", "tts"]
summary: "LuxTTS delivers state-of-the-art voice cloning from just 3 seconds of audio, running at 150x realtime speed while fitting in 1GB of VRAM - all fully open source."
thumbnail: thumbnail.png
video: video.mp4
sources:
  - title: "LuxTTS GitHub Repository"
    url: "https://github.com/ysharma3501/LuxTTS"
  - title: "LuxTTS on Hugging Face"
    url: "https://huggingface.co/YatharthS/LuxTTS"
  - title: "Hasan Toor on X"
    url: "https://x.com/hasantoxr/status/2031846505121005837"
---

A new open-source text-to-speech model is turning heads in the AI community. LuxTTS, built on the ZipVoice architecture, can clone any voice from just 3 seconds of audio and generate speech at 150x realtime speed on a single GPU.

## Tiny Model, Big Output

The model fits within 1GB of VRAM, making it accessible to virtually any consumer GPU. It even runs faster than realtime on CPUs alone. Unlike most TTS systems that cap at 24kHz, LuxTTS outputs at 48kHz - double the standard sample rate - delivering noticeably clearer audio.

## How It Works

LuxTTS is a distilled version of ZipVoice, compressed down to just 4 inference steps with an improved sampling technique and a custom 48kHz vocoder. Users provide a short reference audio clip, and the model generates speech in the cloned voice. The entire pipeline runs locally with no API calls, no subscriptions, and no data leaving the machine.

## Access and Usage

The model is available on [Hugging Face](https://huggingface.co/YatharthS/LuxTTS) with a live demo on [Spaces](https://huggingface.co/spaces/YatharthS/LuxTTS). A [Google Colab notebook](https://colab.research.google.com/drive/1cDaxtbSDLRmu6tRV_781Of_GSjHSo1Cu?usp=sharing) is also provided for quick testing. Local installation requires only a pip install and a few lines of Python. The model supports CUDA, CPU, and Apple MPS backends.

The project has already attracted community contributions including a Gradio interface, a ComfyUI integration, and a clean desktop app. Float16 inference - expected to nearly double current speeds - is listed on the roadmap.
