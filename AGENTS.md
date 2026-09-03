# AGENTS.md — Engineering agent behavior for this repository

Any agent (AI or human) working on this codebase should follow this loop.

## Before starting

1. Inspect the existing implementation — read the relevant files under `src/`, don't assume.
2. Inspect `git status` and recent commit history to understand current state.
3. Confirm previous work is valid (`npm run build`) before building on top of it.
4. Commit and push previously valid changes before starting something new.

## While implementing

- Preserve the existing architecture: data-driven content (`src/data/`), typed content
  (`src/types/`), design tokens (`src/styles/tokens.css`), the shared `NodeGraph` 3D engine, and the
  shared `FlowDiagram` architecture-diagram component. Reuse these instead of duplicating.
- Avoid duplication — before writing a new component, check whether an existing one
  (`FlowDiagram`, `Reveal`, `Section`, `NodeGraph`) already covers the need.
- Never fabricate portfolio content. See `CLAUDE.md`'s content accuracy section and
  `docs/CONTENT.md`.

## After implementing

1. Run `npm run build` (type-check + production build) — it must pass.
2. If the change is visual, start the dev server and actually look at the rendered page
   (screenshot), in both light and dark theme, and at a mobile viewport width.
3. Confirm keyboard navigation and focus states still work for any interactive element touched.
4. Confirm any new/changed animation respects `prefers-reduced-motion`.
5. If a new Three.js scene was added, confirm it's lazy-loaded and confirm `useDeviceTier`
   degrades it sensibly on mobile.
6. Update documentation per the rules in `CLAUDE.md` (`FEATURES.md`, `CHANGELOG.md`, relevant
   `docs/*`, `MEMORY.md` if an architectural decision changed).
7. Commit with a message describing why, not just what.
8. Push.

## Repository note

This repo (`Desktop\portfolio1`, remote `biswa6688/portfolio1.wisio.git`) is distinct from another
existing implementation of the same brief at `Downloads\portfolio-wisio`
(remote `biswa6688/portfolio.wisio.git` — no "1"). They are separate projects by explicit user
decision. Don't merge, copy from, or treat one as authoritative over the other without being told to.
