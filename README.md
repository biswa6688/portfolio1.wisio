# Biswaranjan Nayak — Portfolio

A 3D interactive developer portfolio for **Biswaranjan Nayak**, Fullstack Developer with 14+ years of
experience across enterprise web applications, telephony/communication software, native SDKs, and
product engineering.

Live source of truth for content: [docs/CONTENT.md](docs/CONTENT.md).

## Purpose

This is not a generic resume template. It's an interactive, infographic-driven engineering showcase —
career timeline, technology constellation, product architecture diagrams, and a Three.js hero
visualization — communicating 14+ years of connected software engineering experience.

## Major Features

- Interactive 3D hero: a technology ecosystem centered on 19 skills, built with React Three Fiber
- Interactive 3D skill constellation with category filtering, hover tooltips, and an accessible chip fallback
- Visual career timeline (experience) and education progression
- Project cards with domain-specific SVG illustrations
- Product showcase with reusable architecture flow diagrams (RADIX, VISION, WebRTC SDK, telephony apps)
- 3D "Product Engineering Universe" relationship graph
- Interactive project/technology matrix
- "How I Build Software" layered architecture visualization
- Light / dark / system theme, driving both UI and Three.js scene colors
- Reduced-motion support, keyboard navigation, semantic structure

## Technology Stack

- React 19 + TypeScript
- Vite
- Three.js via `@react-three/fiber` + `@react-three/drei`
- Plain CSS with a centralized design-token system (no CSS framework)

## Development

```bash
npm install
npm run dev       # start dev server
npm run build     # type-check + production build
npm run preview   # preview the production build
```

## Architecture Overview

Content is fully data-driven — see `src/data/*.ts` for typed content (profile, skills, experience,
education, projects, products, architecture, contact) and `src/types/index.ts` for the shared type
definitions. Components read from this data layer; no portfolio copy is hard-coded inside components.

```
src/
  components/   # organized by domain: hero, skills, timeline, education, projects,
                # products, architecture, contact, navigation, layout, three, infographic, common
  data/         # typed content — single source of truth
  hooks/        # theme colors, reduced motion, device tier, scroll reveal, active section
  lib/          # ThemeProvider (light/dark/system)
  styles/       # design tokens (tokens.css) + global base styles
  types/        # shared TypeScript interfaces
```

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for the full breakdown.

## Theme System

Centralized CSS custom properties in `src/styles/tokens.css` define the light and dark palettes
(primary color: green). `ThemeProvider` (`src/lib/theme.tsx`) manages light/dark/system mode, persists
the choice, and stamps `data-theme` on `<html>`. Three.js materials read the same tokens at runtime via
`useThreeColors` (`src/hooks/useThreeColors.ts`), so 3D scenes re-theme alongside the UI.

## Three.js Architecture

See [docs/THREE_JS.md](docs/THREE_JS.md). In short: a single reusable `NodeGraph` engine
(`src/components/three/NodeGraph.tsx`) renders a Fibonacci-sphere node graph with hover/click
interaction, and three scene wrappers (`HeroScene`, `SkillsScene`, `ProductUniverseScene`) configure it
for the hero, the skills section, and the product-relationship visualization respectively. All three
scenes are lazy-loaded with `React.lazy`.

## Documentation Structure

- [FEATURES.md](FEATURES.md) — feature inventory
- [CHANGELOG.md](CHANGELOG.md) — chronological changes
- [CLAUDE.md](CLAUDE.md) / [AGENTS.md](AGENTS.md) — development rules for AI-assisted work on this repo
- `docs/ARCHITECTURE.md` — component/data architecture
- `docs/DESIGN_SYSTEM.md` — tokens, theming, typography
- `docs/THREE_JS.md` — 3D scene architecture and performance approach
- `docs/CONTENT.md` — authoritative portfolio facts (source of truth)
- `docs/COMPONENTS.md` — component inventory
- `docs/DEVELOPMENT.md` — local dev workflow
- `docs/DEPLOYMENT.md` — build/deploy notes
- `docs/PERFORMANCE.md` — performance approach
- `docs/ACCESSIBILITY.md` — accessibility approach
- `docs/PROJECTS.md` / `docs/PRODUCTS.md` — project/product detail reference
