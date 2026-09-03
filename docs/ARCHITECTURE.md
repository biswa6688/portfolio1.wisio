# Architecture

## Layers

```
src/
  types/index.ts        Shared TypeScript interfaces for all content
  data/*.ts              Typed content — the single source of truth for portfolio copy
  lib/theme.tsx           ThemeProvider: light/dark/system mode, persisted, drives data-theme attr
  hooks/*                 useThreeColors, useReducedMotion, useDeviceTier, useInView,
                           useActiveSection — cross-cutting behavior
  styles/                 tokens.css (design tokens) + global.css (base styles, utility classes)
  components/
    layout/               Layout shell, reusable Section wrapper
    navigation/            Navbar, ThemeToggle, mobile menu
    hero/                  Hero composition (text + lazy 3D scene)
    about/                 "Engineering DNA" + career stats
    skills/                Interactive skills constellation section
    timeline/               Experience career timeline
    education/              Education progression track
    projects/               Project cards + domain SVG illustrations
    products/                Product cards, tech matrix, product-universe section
    architecture/            "How I Build Software" section
    contact/                 Contact channel cards
    three/                   NodeGraph engine + SceneCanvas + scene wrappers
    infographic/             FlowDiagram (reusable architecture diagram)
    common/                  Reveal (scroll-reveal wrapper)
```

## Data flow

Every section component imports its content from `src/data/*.ts` (typed against
`src/types/index.ts`) and renders it — no portfolio copy is written inline in a component. This
makes content-accuracy auditing straightforward: `docs/CONTENT.md` and `src/data/*.ts` should always
agree.

## Composition pattern

Most sections follow the same shape:

```tsx
<Section id="..." eyebrow="..." title="..." description="...">
  {/* content, usually wrapped per-item in <Reveal> for scroll-in animation */}
</Section>
```

`Section` (`src/components/layout/Section.tsx`) standardizes the eyebrow/title/description heading
block and semantic `<section aria-labelledby>` wrapper.

## Reused building blocks

- **`NodeGraph`** (`src/components/three/NodeGraph.tsx`) — the one Three.js node-graph renderer,
  used by `HeroScene`, `SkillsScene`, and `ProductUniverseScene`. See `docs/THREE_JS.md`.
- **`FlowDiagram`** (`src/components/infographic/FlowDiagram.tsx`) — renders an
  `ArchitectureLayer[]` as a connected vertical or horizontal flow. Used by product cards and the
  Architecture section.
- **`Reveal`** (`src/components/common/Reveal.tsx`) — `IntersectionObserver`-based scroll-reveal
  wrapper, respects `prefers-reduced-motion` via CSS.
