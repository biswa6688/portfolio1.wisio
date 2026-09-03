# Project Memory

Long-term architectural decisions and constraints for this repository. Update this file when a
decision here changes — don't let it drift out of sync with the code.

## Architectural decisions

- **Data-driven content.** All portfolio content (profile, skills, experience, education, projects,
  products, architecture paths, tech matrix, contact) lives in typed files under `src/data/`. Components
  never hard-code portfolio copy. This is what makes the content-accuracy rule in `CLAUDE.md` enforceable.
- **Single reusable 3D engine.** `src/components/three/NodeGraph.tsx` is the one Three.js node-graph
  renderer. The hero scene, the skills constellation, and the product universe are all thin wrappers
  around it (`HeroScene.tsx`, `SkillsScene.tsx`, `ProductUniverseScene.tsx`). Do not fork a second
  node-graph implementation — extend `NodeGraph`'s props instead.
- **Design tokens, not hard-coded colors.** `src/styles/tokens.css` is the only place color values are
  defined. Components (CSS and Three.js materials via `useThreeColors`) read tokens, never literals.
- **Reusable `FlowDiagram` for architecture visuals.** Product architecture diagrams and the "How I
  Build Software" section both render `src/components/infographic/FlowDiagram.tsx` against
  `ArchitectureLayer[]` data. Don't build one-off diagram markup per product.
- **Theme is light/dark/system**, managed by `ThemeProvider` (`src/lib/theme.tsx`), stamping
  `data-theme` on `<html>`. Three.js reads resolved colors via `useThreeColors`, which re-reads CSS
  custom properties after the theme attribute changes (one `requestAnimationFrame` delay).

## Known limitations

- Contact channels (`src/data/contact.ts`) are intentionally empty — no email, phone, or profile URLs
  were provided as authoritative content. The UI renders a "Coming soon" placeholder for any empty
  channel. Fill in real values there when available; do not invent them.
- The Vite production bundle's three.js/r3f/drei vendor chunk is ~910KB uncompressed (~244KB gzip). It
  is lazy-loaded (only fetched when a 3D section mounts), which is the primary mitigation. Further
  splitting would require `manualChunks` tuning — not done yet.

## Lessons learned

- **A full-bleed absolutely-positioned 3D node graph behind text does not survive different viewport
  widths.** Two failed attempts before the fix landed: (1) centered graph behind centered text —
  produced an unreadable overlap, including a duplicate "Biswaranjan Nayak" label from the 3D scene's
  center node; (2) left-aligned text + full-bleed canvas with the graph shifted right via a world-space
  `offsetX` tuned at 1440px — looked fine at that width, but at 1920px the same world-space offset
  mapped to a smaller fraction of screen width (wider FOV coverage), pulling nodes back over the text.
  **The actual fix:** stop treating the 3D scene as a full-bleed background overlay. `Hero.tsx` now
  uses a real two-column CSS grid (`hero-grid`: text column + `.hero-scene-panel`, stacking to one
  column under 900px) — the graph is confined to its own bounded, non-overlapping panel by layout, not
  by tuning 3D coordinates against a specific viewport size. `NodeGraph` still has `offsetX` (now 0 for
  the hero) and `showCenterLabel` (still false — page text already states the name) for other
  compositions that might need them. **Lesson: don't fight overlap with 3D-space offsets when the 3D
  scene lives inside a responsive page — give it its own layout box instead.** Verified across
  390/768/1024/1280/1440/1920px widths after the fix.
- **Verify the actual working directory before scaffolding.** A prior implementation of this same
  brief already existed at `Downloads\portfolio-wisio` (git history, docs, GitHub Pages CI, remote
  `biswa6688/portfolio.wisio.git`) when this repo was scaffolded fresh at `Desktop\portfolio1`
  targeting `biswa6688/portfolio1.wisio.git` (note the "1"). These are two different repos by design —
  confirmed with the user before proceeding. If you're picking this project up cold, don't assume
  `Downloads\portfolio-wisio` is stale or related; it isn't this repo.
