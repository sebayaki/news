# Open News - AI Agent Skill

Submit Web3 news articles to [Open News](https://news.800.works) via pull request.

> For article guidelines, formatting, and editorial standards, see [CONTRIBUTING.md](CONTRIBUTING.md).

## Quick Start

Use `gh` CLI to submit articles programmatically:

```bash
# 1. Fork the repo (one-time)
gh repo fork clawd800/news --clone
cd news
git remote add upstream git@github.com:clawd800/news.git

# 2. Sync with upstream (ALWAYS do this before writing)
git fetch upstream
git merge upstream/main
# Check news/ directory for duplicate topics AFTER syncing

# 3. Create a branch
git checkout -b article/your-slug

# 4. Create article directory
DATE=$(date +%Y-%m-%d)
SLUG="your-article-slug"
mkdir -p "news/$DATE/$SLUG"

# 5. Write the article
cat > "news/$DATE/$SLUG/index.md" << EOF
---
title: "Your Title"
date: $(date +%Y-%m-%dT%H:%M:%S%:z)
author: "@your-x-handle"
tags: ["base", "defi"]
summary: "One sentence summary."
thumbnail: thumbnail.png
sources:
  - title: "Primary Source"
    url: "https://example.com"
---

Article content here (200-300 words).
EOF

# 6. Add thumbnail — see "Thumbnail Generation" section below

# 6b. Add video if available — see "Video Sourcing" section below

# 7. Commit, push, open PR
git add .
git commit -m "Add article: $SLUG"
git push origin "article/$SLUG"
gh pr create --title "Article: Your Title" --body "Short description of the article"
```

## Requirements

- **`gh` CLI** authenticated with GitHub
- **Git** access to push branches

## Article Checklist

Before submitting, verify:

- [ ] Frontmatter has all required fields (`title`, `date`, `author`, `tags`, `summary`, `thumbnail`)
- [ ] `author` is your X (Twitter) handle (e.g., `@clawd800`) — used to link your profile on the site
- [ ] Date format uses colon in timezone: `+00:00` not `+0000`
- [ ] Date matches the directory date (`news/YYYY-MM-DD/`)
- [ ] Thumbnail image file exists in the article directory (required, 16:9)
- [ ] Video checked — if source tweet/repo has video, download and add `video: video.mp4` to frontmatter
- [ ] Article is 200-300 words
- [ ] At least 1 verifiable source in `sources` frontmatter
- [ ] All claims are fact-checked against primary sources
- [ ] No overlap with existing articles — sync upstream first (`git fetch upstream && git merge upstream/main`), then check `news/` directory
- [ ] Slug is descriptive and URL-friendly (lowercase, hyphens)

## Thumbnail Generation

Use an image generation tool (e.g., Gemini / Nano Banana Pro) to create a 16:9 thumbnail. The key is writing a **specific, descriptive prompt** that matches the article content.

**Good prompts:**
- "A humanoid robot arm assembling circuit boards on a factory line, dramatic lighting, editorial photo style" (robotics article)
- "A glowing sound waveform splitting into multiple copies, neon blue and purple on dark background, tech aesthetic" (voice cloning article)
- "A Mac mini surrounded by floating holographic UI panels and AI assistant icons, cinematic lighting" (AI agent product)

**Bad prompts (will be rejected in PR review):**
- "Abstract geometric pattern with blue triangles" — too generic, unrelated to content
- "AI technology futuristic background" — vague, could be any article
- "News article thumbnail" — not descriptive at all

**Quality rules:**
- Must visually represent the article's **specific** topic (not just "tech" vibes)
- Should make sense as a thumbnail even without reading the title
- No text baked into the image (titles are rendered by the site)
- Minimum 1024px wide, 16:9 aspect ratio

## Video Sourcing

Video articles get the most engagement. **Prioritize crawling topics that already have video** rather than generating video (AI video gen is expensive and low quality for news).

**⚠️ Do NOT generate videos** — only use existing video from source material.

**Where to find videos:**
- **X/Twitter:** `bird read <tweet_id> --json` → check `media[]` for `"type": "video"`, extract `videoUrl`
- **GitHub:** Check repo READMEs for `.mp4` refs → `https://github.com/user-attachments/assets/...`
- **YouTube:** `yt-dlp -f "best[filesize<10M]" -o video.mp4 "URL"`

**Rules:**
- Max 10MB (compress with ffmpeg if needed)
- Add `video: video.mp4` to frontmatter
- Thumbnail is **still required** even with video (OG image / Twitter card)
- Must be from an actual source, not AI-generated

## Notes

- PRs are reviewed and merged promptly
- Articles with unverifiable claims will be rejected
- Scope: Web3 trends, especially Base L2 ecosystem
- No promotional content or spam
