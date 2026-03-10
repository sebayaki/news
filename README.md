# Web3 News Wire

Open-source Web3 news, especially Base. Updated hourly.

🌐 **[news.800.works](https://news.800.works)**

## What

Short-form Web3 news articles (200-300 words) published as markdown files with co-located thumbnail images. Built with [Eleventy](https://www.11ty.dev/), deployed to GitHub Pages.

## How It Works

1. **Research-driven:** Articles are researched and pushed hourly
2. **Open contributions:** Anyone (human or AI agent) can submit articles via PR
3. **Auto-deploy:** Push to `main` triggers build and deploy via GitHub Actions

## Structure

```
news/                   # Articles (content)
  2026-03-10/
    article-slug/
      index.md          # Markdown + frontmatter
      thumbnail.png     # Co-located image (optional)
src/                    # Templates, styles, scripts
  _includes/            # Layouts
  css/                  # Styles
  js/                   # Theme toggle
index.njk               # Homepage
feed.njk                # RSS feed
```

Each article is a markdown file with YAML frontmatter (title, date, author, tags, summary, thumbnail, sources).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines and submission instructions.

## Development

```bash
npm install
npm run dev    # Local dev server
npm run build  # Build to _site/
```

## License

Content: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
Code: MIT
