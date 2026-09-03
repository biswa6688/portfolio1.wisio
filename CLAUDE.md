# CLAUDE.md — Rules for AI-assisted work on this repository

This is the portfolio site for **Biswaranjan Nayak** (Fullstack Developer, 14+ years). It is a
production-quality, content-accuracy-sensitive project. Follow these rules exactly.

## Content accuracy — non-negotiable

- Never invent employers, dates, clients, awards, certifications, job responsibilities, product
  features, user counts, revenue, performance statistics, customer statistics, project technologies,
  URLs, or contact information.
- The authoritative content lives in `src/data/*.ts`. Do not alter factual dates, companies,
  qualifications, projects, or products without explicit instruction from the user. See
  `docs/CONTENT.md` for the verified source of truth.
- When information is unavailable, use a visually appropriate generic placeholder (see
  `src/data/contact.ts` for the pattern) — never present an assumption as fact.

## Architecture rules

- All portfolio copy is data-driven from `src/data/*.ts` against types in `src/types/index.ts`.
  Never hard-code portfolio content inside a component.
- Reuse `src/components/three/NodeGraph.tsx` for any new 3D node-graph visualization instead of
  writing a new Three.js scene from scratch. Reuse `src/components/infographic/FlowDiagram.tsx` for
  any new architecture/flow diagram.
- Colors come from `src/styles/tokens.css` design tokens (CSS custom properties), read directly in
  CSS or via `useThreeColors` in Three.js code. Never hard-code a hex/rgb color in a component.
- Keep components organized by domain under `src/components/<domain>/`, matching the existing
  structure (hero, skills, timeline, education, projects, products, architecture, contact,
  navigation, layout, three, infographic, common, about).

## Design rules

- Primary color is green. Support light, dark, and system theme everywhere, including Three.js
  materials.
- Prioritize visual storytelling (infographics, diagrams, timelines, 3D) over paragraphs of text.
- No generic template layouts, no decorative-only 3D, no unrelated stock imagery.
- Respect `prefers-reduced-motion` in every new animation or 3D scene.

## Documentation rules

Whenever a feature is added or changed:

1. Update `FEATURES.md`
2. Update `CHANGELOG.md`
3. Update the relevant file(s) under `docs/`
4. Update `MEMORY.md` if an architectural decision was made or a lesson was learned
5. Update this file or `AGENTS.md` if development rules changed
6. Update `README.md` if the feature changes how the project is used or built

A feature is not complete until documentation is updated.

## Git rules

- Inspect `git status`, current branch, and recent commits before starting new work.
- Commit and push previously validated work before starting a new feature — don't let unrelated
  changes pile up in one commit.
- Never use destructive git commands (`reset --hard`, `clean -fd`, force-push) without explicit
  user authorization.
- Never skip hooks or bypass signing.

## Testing / verification rules

- Run `npm run build` (which runs `tsc -b` then `vite build`) before considering a change complete.
- For any visual/UI change, actually run the dev server and look at it (screenshot) — type-checking
  is not a substitute for seeing the rendered page.
- Check both light and dark themes, and at least one mobile viewport, for UI changes.

## Performance rules

- Lazy-load any new Three.js scene component with `React.lazy` + `Suspense`.
- Keep `useDeviceTier`-based complexity reduction in mind for any new 3D content — it must degrade
  gracefully on mobile.
