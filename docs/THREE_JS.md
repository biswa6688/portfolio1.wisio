# Three.js Architecture

## The shared engine: `NodeGraph`

`src/components/three/NodeGraph.tsx` is a single reusable node-graph renderer built on
`@react-three/fiber` + `@react-three/drei`. It:

- Distributes nodes on a Fibonacci sphere (`useSpherePositions`) for even spacing without pole
  clustering
- Renders a labeled central hub sphere and per-node spheres with `Html` labels (`drei`'s `Html`,
  `occlude={false}` for performance — no depth-testing raycast against the DOM overlay)
- Draws connection lines (`drei`'s `Line`) either from center-to-all-nodes (default) or from an
  explicit `connections: {from, to}[]` list (used for non-hub-and-spoke graphs like the skills
  constellation and the product universe)
- Handles hover/click via `onPointerOver`/`onPointerOut`/`onClick` on each node mesh, with a
  `dimmed` per-node flag and an `activeId`-based "focus" dimming mode
- Supports `offsetX` (shifts the whole graph on the X axis — used to keep the hero graph clear of
  the text column) and `showCenterLabel` (suppressed in the hero, where the page text already states
  the name)
- Respects `autoRotate` and `interactive` props so callers can disable motion/interaction under
  `prefers-reduced-motion` or on mobile

## Scene wrappers

Three thin wrappers configure `NodeGraph` for each use case — each maps its own data through
`useThreeColors` for theme-aware node colors:

- **`HeroScene`** — all 19 skills around a hub representing the person; asymmetric composition
  (`offsetX`), center label hidden (redundant with page text)
- **`SkillsScene`** — same skill set, but connections come from each skill's `relatedTo` list in
  `src/data/skills.ts`, and category filtering dims non-matching nodes
- **`ProductUniverseScene`** — a bipartite graph of products (RADIX, VISION, WebRTC SDK, Telephony
  Applications) and shared engineering concepts, connected explicitly

## `SceneCanvas`

`src/components/three/SceneCanvas.tsx` wraps `@react-three/fiber`'s `Canvas` with:

- Device-tier-aware `dpr` cap (`useDeviceTier`: mobile `[1,1.5]`, tablet `[1,1.75]`, desktop `[1,2]`)
- Standard two-point lighting (ambient + two point lights)
- `Suspense` boundary
- `role="img"` + `aria-label` on the wrapping `<div>` so the visualization has an accessible
  description (canvases are otherwise opaque to assistive tech)

## Performance

- All three scenes are lazy-loaded via `React.lazy(() => import(...))` + `Suspense`, so the
  three.js/r3f/drei bundle (~910KB uncompressed / ~244KB gzip) is only fetched once a 3D section
  actually mounts, not on initial page load
- `useDeviceTier` reduces node count (hero: every other skill on mobile) and disables
  pointer-interaction/auto-rotate on mobile and under reduced motion
- Geometry is intentionally low-poly (16–24 segment spheres) since nodes are always small on screen

## Adding a new 3D scene

Reuse `NodeGraph` + `SceneCanvas` rather than writing a new Three.js scene from scratch. If the new
scene doesn't fit a node-graph shape, still route lighting/DPR/Suspense through `SceneCanvas` and
wrap the lazy import the same way the existing three scenes do.
