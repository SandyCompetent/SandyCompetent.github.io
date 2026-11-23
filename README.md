# Sandeep Malviya | Portfolio

[![Deploy](https://github.com/SandyCompetent/SandyCompetent.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/SandyCompetent/SandyCompetent.github.io/actions/workflows/deploy.yml)

The source of **https://sandeepmalviya.dev/**: a fast, static portfolio for a Machine Learning Engineer and Data Scientist (MSc Data Science, Distinction, University of Exeter).

## What it is

- A single-page portfolio (hero, engineering foundation, AI work, featured projects, credentials, contact) plus long-form **case-study pages**:
  - `/case-studies/trading-research`: two validation-first trading research platforms that rejected every strategy tested.
  - `/case-studies/chatbud-evaluation`: a golden-dataset evaluation of a grounded-RAG app and a two-model comparison.
- **Stack:** [Astro](https://astro.build) (static output), Tailwind CSS 3, GSAP and Lenis for motion. No client framework (it is not a React app) and no runtime API calls.
- **Live GitHub data:** repository metadata on the project cards is fetched from the public GitHub API **at build time**, with baked-in fallbacks, so a GitHub outage never breaks the build.
- **No chat assistant and no secrets.** Earlier versions of this README mentioned a Gemini assistant; the site does not contain one, and there are no API keys or environment variables.
- Accessibility: respects `prefers-reduced-motion` (smooth scroll and the hero canvas animation both stop), keyboard focus styles, labelled landmarks.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run verify     # production build, then checks (see below)
npm run preview    # serve dist/ locally
npm run og         # regenerate public/og-image.png from scripts/og-image.html (needs Google Chrome)
```

## `npm run verify`

Builds the site and then fails (exit 1) if any of these is wrong. CI runs it before every deploy.

- each page has one `<h1>`, a title, a meta description, Open Graph and Twitter tags, a canonical URL on `sandeepmalviya.dev` (no trailing slash, matching `firebase.json`), and a built OG image;
- no stale or unverified strings in the output (`sandeepmalviya.me`, the old Firebase domain, the retired 69.2% accuracy claim, dead demo URLs, links to private repositories);
- every internal link and `#anchor` resolves;
- the sitemap lists exactly the built pages on the right domain, and `robots.txt` points to it;
- `public/cv.pdf` exists and is a PDF.

The rules live in `scripts/verify-build.mjs`. Add a case-study page there (`PAGES`) when you create one.

## Editing content

| To change | Edit |
| :--- | :--- |
| Headline, hero copy | `src/components/Hero.astro` |
| Experience and AI work sections | `src/components/MobileEra.astro`, `src/components/AiEra.astro` |
| Project cards | the `projects` array in `src/components/DataScience.astro` (private projects use `private: true` and a `caseStudy` link) |
| Education, certificates | `src/components/Credentials.astro` |
| Contact block | `src/components/Footer.astro` |
| Title, description, SEO, structured data | `src/layouts/Layout.astro` and `src/pages/index.astro` |
| A case study | `src/pages/case-studies/*.astro` (layout in `src/layouts/CaseStudy.astro`) |
| Social share image | `scripts/og-image.html`, then `npm run og` |
| **CV download** | see below |

`knowledge-base/` is a set of reference notes and is **not** read by the build.

### Updating the CV download

The CV is generated, not hand-edited. In the private `professional-profile` repo:

```bash
cd professional-profile/cv
../.venv/bin/python generate_cv.py base --profile ml-engineer
cp output/ml-engineer/Sandeep_Malviya_CV_ml-engineer.pdf ../../sandeepmalviya.me/public/cv.pdf
```

Then run `npm run verify` and deploy.

## Deploy

Push to `main`. `.github/workflows/deploy.yml` runs `npm ci`, `npm run verify`, then publishes `dist/` to **Firebase Hosting** (project `sandeep-malviya`, needs the `FIREBASE_SERVICE_ACCOUNT` repository secret) and to **GitHub Pages**. `dist/`, `.astro/` and `.firebase/` are build output and are git-ignored.

Manual deploy: `npm run verify && firebase deploy --only hosting --project sandeep-malviya`.

`sandeepmalviya.dev` is the main portfolio. The `sandeep-malviya.web.app` and `sandycompetent.github.io` copies serve the same build and declare `.dev` as canonical.

## Contact

- [LinkedIn](https://www.linkedin.com/in/sandeep-malviya-ml/)
- [GitHub](https://github.com/SandyCompetent)
- [Email](mailto:sandy.competent@gmail.com)

Open to Machine Learning Engineer and Data Scientist roles in the UK. Graduate Visa valid until 20 Feb 2028; sponsorship needed after that.
