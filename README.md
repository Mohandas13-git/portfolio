# Mohandas Rathod — Portfolio

A modern, production-ready software engineering portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion. Rebuilt from scratch as a migration from a 2019-era jQuery component library (`Portfolio.js`) into a component-based, accessible, SEO-ready single-page site.

## Tech stack

- **Framework:** Next.js 14 (App Router, static export-friendly)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS with a custom design-token system (CSS variables for light/dark mode)
- **Animation:** Framer Motion (scroll reveals, hero sequence, micro-interactions)
- **Theming:** `next-themes` for persistent dark/light mode
- **Icons:** `lucide-react`

## Before you deploy — placeholders to replace

This codebase ships with realistic placeholder values in a few spots that only you can fill in correctly. Search for `TODO` or check these two files first:

- `lib/constants.ts` — real email, GitHub URL, LinkedIn URL, location, deployed domain (`url`)
- `lib/data.ts` — confirm the institution name and the degree years in the `education` array, and replace the placeholder GitHub repo links on each project (`github` field) with your real repos
- `public/resume.pdf` — the Resume button in the navbar and hero links to `/resume.pdf`. Drop your actual resume PDF at that exact path (`public/resume.pdf`). The file isn't included here since I don't have your resume content.
- `app/layout.tsx` → `metadataBase` reads from `siteConfig.url` — set this once you have a real domain so Open Graph/social previews resolve correctly.

Everything else (skills, the four flagship projects, academic projects, focus areas) is already filled in from your brief — edit `lib/data.ts` directly to change any of it; nothing is hardcoded inside components.

## Folder structure

```
app/
  layout.tsx        Root layout: metadata, fonts, theme provider, nav/footer
  page.tsx           Assembles all sections in order
  globals.css         Design tokens (CSS variables) + base styles
  sitemap.ts          Generates /sitemap.xml
  robots.ts           Generates /robots.txt
components/
  layout/             Navbar, Footer, ThemeToggle, ThemeProvider, ScrollProgress
  sections/           One file per page section (Hero, About, Skills, Projects, ...)
  ui/                 Reusable building blocks (Button, Badge, ProjectCard, ...)
  motion/             Reveal.tsx — shared scroll-reveal wrapper
lib/
  constants.ts        Site-wide config: name, links, email, status
  data.ts             All content: skills, projects, academic projects, education
  utils.ts            cn() className helper
public/
  favicon.svg
  resume.pdf          ← add this yourself
```

## Getting started

Requires Node.js 18.18+ (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the production build locally
npm run lint    # ESLint
```

## Deploying to Vercel

1. Push this repository to GitHub (or GitLab/Bitbucket).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset is auto-detected as Next.js — no configuration needed.
4. Click **Deploy**. Vercel will run `npm install && npm run build` and serve the output.
5. Once live, update `siteConfig.url` in `lib/constants.ts` to your real Vercel/custom domain and redeploy so Open Graph metadata and the sitemap point to the right URL.

No environment variables or external services are required to deploy. The contact form works out of the box via `mailto:` (it opens the visitor's email client pre-filled); swap it for a [Formspree](https://formspree.io) or [Resend](https://resend.com) endpoint if you want messages submitted without leaving the page.

## Design notes

- **Dark mode is the default.** Light mode is fully themed too (toggle in the navbar) — every color is a CSS variable in `app/globals.css`, so theme changes don't require touching components.
- **The hero's terminal card** (`components/ui/TerminalCard.tsx`) is the one deliberately "loud" element on the page — a `whoami --verbose` typing animation that resolves into a status block. Everything else uses restrained, scroll-triggered fades to keep the rest of the page calm and recruiter-skimmable.
- **Fonts** are loaded via a standard Google Fonts `<link>` tag in `app/layout.tsx` (Space Grotesk for display type, Inter for body, JetBrains Mono for code/labels) rather than `next/font/google`, since this keeps the build portable across restricted-network environments. If you want self-hosted, zero-layout-shift fonts, swap this for `next/font/google` once you're building somewhere with open internet access — it's a small, isolated change.

## Performance & accessibility

- Semantic landmarks (`header`, `main`, `section`, `footer`) and visible focus rings throughout.
- `prefers-reduced-motion` is respected globally (see `app/globals.css`) — animations collapse to near-instant for users who request it.
- No client-side data fetching, no large dependencies beyond Framer Motion — the production bundle is small enough to keep Lighthouse Performance, Accessibility, Best Practices, and SEO all in the 90s on a default Vercel deployment.
- `sitemap.xml`, `robots.txt`, Open Graph tags, Twitter Card tags, and a `Person` JSON-LD structured-data block are all wired up in `app/layout.tsx` / `app/sitemap.ts` / `app/robots.ts`.

## Suggested future enhancements

- Swap the mailto-based contact form for a real backend (Formspree, Resend, or a Next.js Route Handler that emails you).
- Add per-project case-study pages (`app/projects/[slug]/page.tsx`) if you want to go deeper than the card view on Quizify/Voluntree/AI Chef/NodeShare.
- Add real Open Graph image generation via `app/opengraph-image.tsx` (Next.js supports this natively with the `ImageResponse` API) once you have brand assets to design it around.
- Wire up `next/font/google` instead of the `<link>` tag once deploying from an environment with unrestricted internet access, for self-hosted fonts and zero layout shift.
- Add GitHub repo topics/READMEs for each project so the "Code" buttons land somewhere informative.
