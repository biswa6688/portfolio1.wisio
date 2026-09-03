# Development

## Setup

```bash
npm install
npm run dev
```

Dev server runs on Vite's default port (5173, or the next free port if occupied).

## Scripts

- `npm run dev` — start the dev server with HMR
- `npm run build` — `tsc -b` (type-check) then `vite build` (production bundle)
- `npm run preview` — serve the production build locally
- `npm run lint` — ESLint

## Adding new content

Add to the relevant typed file in `src/data/` — never edit portfolio copy directly inside a
component. If the shape of the content changes, update `src/types/index.ts` first.

## Adding a new section

1. Add data to `src/data/` (typed).
2. Create `src/components/<domain>/<Name>Section.tsx` + matching `.css`, following the existing
   `Section` wrapper pattern.
3. Import and render it in `src/App.tsx` in the correct position, and add a matching entry to
   `NAV_ITEMS` in `src/components/navigation/Navbar.tsx` if it should appear in navigation.
4. If it needs a 3D visualization, reuse `NodeGraph`/`SceneCanvas` (see `docs/THREE_JS.md`) and
   lazy-load it.

## Verifying a change

```bash
npm run build
```

For any visual change, also run the dev server and look at the rendered page (see `AGENTS.md`) —
type-checking and a successful build do not verify visual correctness.
