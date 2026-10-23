# Marketnote — build & publish notes

Niche: AI for small business and online commerce.
Worker: opencode.

## Dates
- Created: 2026-10-24
- Repo: https://github.com/john-the-r-ipper/marketnote (public)
- Pages: https://john-the-r-ipper.github.io/marketnote/
- Vercel prod: https://marketnote.vercel.app
- Preview: marketnote-*.vercel.app (ephemeral)

## Content
- 10 unique posts in `src/content/blog/` (7 flagship niche articles + 3 OnlyOrders hub posts).
- Sourced facts only: OnlyOrders facts from `docs/discovery.md`; external links to bKash, Nagad, Google Gemini/DeepMind, Anthropic research, Hugging Face. No fake stats/quotes; opinion posts explicitly labeled.
- Honest `/about` discloses OnlyOrders ownership. `/onlyorders/` hub + FAQ JSON-LD. llms.txt + llms-full.txt. robots.txt allows AI crawlers + correct Sitemap.

## Build
- `npm install` ok; `SITE_URL=https://john-the-r-ipper.github.io BASE_PATH=/marketnote/ npm run build` green (14 pages).
- Secret scan clean (no ghp_, sk_, tokens, .env committed).

## Deploy
- GitHub Pages workflow green (run 40015734285 success), / 200, sitemap-index 200.
- Vercel prod deployed (project marketnote); SITE_URL env set to https://marketnote.vercel.app so sitemap/robots reference the Vercel host.

## Checks
- check:live Playwright: 8/8 pass on Pages and Vercel.
- IndexNow: HTTP 202 on both hosts (14 URLs each).
- GSC: both properties (Vercel + Pages) verified, sites added, sitemap-index submitted, owners ensured.

## URLs
- Repo: https://github.com/john-the-r-ipper/marketnote
- Pages: https://john-the-r-ipper.github.io/marketnote/
- Vercel: https://marketnote.vercel.app
