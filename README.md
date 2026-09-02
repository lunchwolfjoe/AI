# TEXANS FIRST* — Interactive Investigation

Cursor/GitHub/Vercel-ready Next.js publication repository.

## Local Development

```bash
cd texans-first
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build

```bash
npm run build
```

## Project Structure

```
texans-first/
├── content/
│   └── stories/          # Markdown story files
├── data/                  # Publication-cleared data files
├── public/
│   └── docs/             # Public documents
├── src/
│   ├── app/
│   │   ├── page.tsx      # Landing page
│   │   ├── stories/[slug]/ # Dynamic story pages
│   │   ├── evidence/     # Evidence cards
│   │   ├── methodology/  # Reporting standards
│   │   ├── responses/    # Right-of-reply log
│   │   └── faq/          # Reader FAQ
│   └── lib/
│       └── stories.ts    # Markdown processing
└── package.json
```

## Adding Content

### Stories

Create markdown files in `content/stories/`:

```markdown
---
title: "Story Title"
date: "2024-01-15"
excerpt: "Brief description"
author: "Author Name"
part: 1
---

Your story content here...
```

### Evidence

Edit `src/app/evidence/page.tsx` to add evidence cards to the `evidenceCards` array.

### Responses

Edit `src/app/responses/page.tsx` to add right-of-reply statements to the `responses` array.

## Editorial Architecture

- `/` — Investigation landing page and six-part series
- `/stories/[slug]` — Story pages sourced from `content/stories/*.md`
- `/evidence` — Publication-safe evidence cards
- `/methodology` — Matching rules, caveats, and reporting standards
- `/responses` — Right-of-reply and corrections log
- `/faq` — Reader-facing clarification

## Publication Boundary

**Do not commit** to this public repository:
- Master investigative ledger
- Speculative leads
- Private reporting notes
- Unreleased records
- Response strategy documents

Only publication-cleared evidence belongs in `data/` or `public/docs/`.

## Deployment

This project is configured for Vercel deployment. Push to main to trigger automatic deploys.

```bash
# Manual deploy
vercel --prod
```

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **Content:** Markdown with gray-matter + remark
- **Deployment:** Vercel
