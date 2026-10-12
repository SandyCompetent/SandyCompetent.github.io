# Knowledge Base — sandeepmalviya.me

This folder is the single place to manage the **content** shown on the website.
Edit the files here, then rebuild the site with `./run.sh` (or `npm run build`).

## Structure

```
knowledge-base/
├── README.md              ← you are here
├── site.yaml              ← global: title, description, nav, SEO, social links
├── hero.md                ← top-fold headline, subheadline, journey chips, CTAs
├── engineering/           ← "The Engineering Foundation" section (light)
│   ├── novocabs.md
│   └── blockpay.md
├── ai-frontier/           ← "The AI Frontier" section (dark)
│   ├── exeter-agent.md
│   ├── marbles-health.md
│   └── academic-research.md
├── projects/              ← "Open-Source Projects" section (dark)
│   ├── exeter-academic-agent.md   (featured / flagship)
│   ├── kaggle-analysis-showcase.md
│   └── stock-market-analysis.md
├── skills.yaml            ← footer "Core Stack Matrix" badges
├── contact.yaml           ← footer contact heading + buttons
└── screenshots/           ← drop app screenshots here (see its README)
    ├── README.md
    ├── novocabs/
    └── blockpay/
```

## How to edit

- **Prose + structured fields** live in Markdown (`.md`) files: a YAML
  frontmatter block at the top holds structured fields (dates, roles, links,
  tags); the body below holds the descriptive paragraph(s).
- **Global/list config** (site, skills, contact) lives in `.yaml` files.
- **Images** go in `screenshots/` — see `screenshots/README.md` for the exact
  filenames the site will look for.

## Status

- [x] All current website copy extracted and organised here for easy editing.
- [ ] Site components wired to read directly from this folder.

> Right now these files are the **editable source of record / reference**. The
> site components still hold their own copy of this text. To make edits here
> flow automatically into the site (so changing a file rebuilds the page), ask
> the assistant to **"wire the knowledge base into the site"** — this converts
> the components to read from these files via Astro content collections.
