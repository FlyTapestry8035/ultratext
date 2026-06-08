# Ultra Text

**The Context Engine for AI.**

A premium, dark-mode landing page for Ultra Text — the living context layer
that connects every business system so any AI can understand it. Inspired by
the design philosophy of Cursor, Linear, and OpenAI: massive typography,
minimal copy, motion everywhere, product demo first.

## Stack

- **Next.js 15** (App Router)
- **Tailwind CSS 3**
- **Framer Motion** for scroll + entrance animations
- **TypeScript**

## Highlights

- Animated **product demo** showing 14 sources flowing through Ultra Text out
  to AI agents, chatbots, automations, workflows, executives, and teams
- Animated **knowledge graph** for the solution section
- Glassmorphism accents, ambient gradient field, smooth scroll reveals
- Fully **mobile responsive** and **SEO optimized** (OpenGraph, JSON-LD)
- Respects `prefers-reduced-motion`

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Structure

```
app/
  layout.tsx     # metadata, fonts, SEO
  page.tsx       # section composition + JSON-LD
  globals.css    # theme, glass + gradient utilities
components/
  Nav, Hero, ProductDemo, Trust, Problem,
  Solution, UseCases, Capabilities, Vision, FinalCTA, Footer
```
