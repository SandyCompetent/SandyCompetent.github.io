# Knowledge Base — sandeepmalviya.dev

> **Reference notes only. The site build does NOT read this folder.** The page content lives in `src/components/*.astro` and `src/pages/`. Edit those to change the site.
> These notes can drift from the real site, so treat them as a convenient copy of the wording, not as the source of truth.

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
│   ├── chatbud.md, stock-market-analysis.md, trading-research-platforms.md
│   ├── ml-hand-sign-language.md, kaggle-analysis-showcase.md, evoting-system.md
│   └── exeter-academic-agent.md (archived), finpal.md (private repo, not shown)
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

- [x] Website copy extracted here as reference notes.
- [ ] Site components wired to read from this folder (not done; the notes may be out of date).

> Right now these files are the **editable source of record / reference**. The
> site components still hold their own copy of this text. To make edits here
> flow automatically into the site (so changing a file rebuilds the page), ask
> the assistant to **"wire the knowledge base into the site"** — this converts
> the components to read from these files via Astro content collections.
