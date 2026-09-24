# riyaayay.github.io

Riya Rathod's personal portfolio — React + Vite + Tailwind CSS + Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Edit content

All real content — name, links, experience, projects, achievements — lives in
`src/data.js`. Edit that file; you shouldn't need to touch the components in
`src/components/` for text/link changes.

Add your resume PDF at `public/resume.pdf` so the "Resume" button in the hero
works (it links to `/resume.pdf`).

## Build

```bash
npm run build
```

Outputs a static site to `dist/`.

## Deploy to GitHub Pages

This repo is a **user site** (`riyaayay.github.io`), which GitHub Pages serves
from the root domain, so `vite.config.js` is already set with `base: "/"`.

You have two options — pick one:

### Option A: GitHub Actions (recommended, already set up)

A workflow at `.github/workflows/deploy.yml` builds and deploys automatically
on every push to `main`. One-time setup:

1. Push this repo to `github.com/riyaayay/riyaayay.github.io`.
2. In the repo, go to **Settings → Pages** and set **Source** to
   **GitHub Actions**.
3. Push to `main` — the site builds and deploys automatically. Check the
   **Actions** tab for progress.

### Option B: `gh-pages` package (manual deploy)

Already included as a dev dependency and wired up as an npm script:

```bash
npm run deploy
```

This runs `vite build` and pushes the `dist/` folder to a `gh-pages` branch.
In **Settings → Pages**, set **Source** to **Deploy from a branch** and pick
the `gh-pages` branch.

## Notes

- Light/dark mode is a simple class toggle (`dark` class on `<html>`) with the
  choice remembered in `localStorage`, defaulting to the visitor's OS
  preference on first visit.
- `public/og-image.svg` and `public/favicon.svg` are simple placeholder
  graphics in the same pastel palette — swap them for your own art anytime.
