# Ultra Text

**The Context Engine for AI.**

A premium, dark-mode landing page for Ultra Text — the living context layer
that connects every business system so any AI can understand it. Built in the
restrained, product-first visual language of Cursor, Linear, and OpenAI:
massive typography, minimal copy, motion everywhere, real product UI first.

## Vision

Ultra Text is building the **context layer for AI** — the connective tissue
between every system a business runs on and every model it wants to use.

The thesis: **models are becoming commodities; context is the moat.** Today's
AI is brilliant in isolation but blind in practice — it answers from fragments
because a company's knowledge is scattered across email, docs, meetings, chats,
finance tools, and a dozen SaaS apps that don't talk to each other. Ask any
model *"what changed with our biggest account this week?"* and it can't answer —
not because it isn't smart enough, but because it can't see.

Ultra Text fixes that by connecting all of those sources, once, into a single
living understanding of the business — people, customers, projects, revenue,
documents, meetings, and the decisions that tie them together. That unified
context then flows outward to anything: AI agents, chatbots, automations,
internal workflows, and the people running the company.

The bet on the future: **models change, context compounds.** GPT, Claude,
Gemini, and whatever comes next will keep leapfrogging each other — but the
business that has already organized its knowledge into a portable context layer
gets smarter with every new model instead of starting over. The lasting value
isn't in the model that *processes* your information; it's in the system that
*understands* your business. Ultra Text aims to be that system — the
infrastructure layer every AI plugs into.

## Stack

- **Next.js 15** (App Router, static export)
- **Tailwind CSS 3**
- **Framer Motion** for scroll + entrance animations
- **TypeScript**

## Highlights

- **Product UI under the hero** — a faux Ultra Text app answering *"What
  changed with Acme Corp this week?"* with cited sources (the signature
  product-first move)
- Animated **context flow**: 14 sources → Ultra Text → AI agents, chatbots,
  automations, workflows, executives, and teams
- Animated **knowledge graph** for the solution section, plus Cursor-style
  alternating feature rows with mini product mockups
- Near-monochrome dark theme, product-window chrome, smooth scroll reveals
- Fully **mobile responsive** and **SEO optimized** (OpenGraph, JSON-LD)
- Respects `prefers-reduced-motion`

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build            # emits a static site to ./out
npx serve out            # preview the exact deployed output
```

## Deploy

Pushes to `main` and `claude/**` build the static site and deploy to
**Cloudflare Pages** via `.github/workflows/cloudflare.yml`. The deploy step is
skipped (and CI stays green) until two repo secrets are set:

- `CLOUDFLARE_API_TOKEN` — token with the Cloudflare Pages: Edit permission
- `CLOUDFLARE_ACCOUNT_ID` — from the Cloudflare dashboard sidebar

## Structure

```
app/
  layout.tsx     # metadata, fonts, SEO
  page.tsx       # section composition + JSON-LD
  globals.css    # theme, glass + window-chrome utilities
components/
  Nav, Hero, AppMockup, ProductDemo, Trust, Problem,
  Solution, UseCases, Capabilities, Vision, FinalCTA, Footer
  data.ts        # shared sources + destinations
```
