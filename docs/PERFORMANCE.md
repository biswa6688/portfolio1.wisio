# Performance

## 3D scenes

- Lazy-loaded: `HeroScene`, `SkillsScene`, and `ProductUniverseScene` are all `React.lazy` imports
  behind `Suspense`, so the three.js/r3f/drei bundle is only fetched when a 3D section actually
  mounts.
- Device-tiered: `useDeviceTier` (`src/hooks/useDeviceTier.ts`) caps `Canvas` DPR (mobile `[1,1.5]`,
  tablet `[1,1.75]`, desktop `[1,2]`) and the hero scene halves its node count on mobile.
- Motion-gated: `useReducedMotion` disables auto-rotation and pointer-parallax; `interactive={false}`
  also skips hover/click raycasting setup on affected nodes.
- Low-poly geometry: node spheres are 16–24 segments — deliberately coarse since they're always small
  on screen.
- `Html` labels (`drei`) render with `occlude={false}` to avoid depth-based DOM occlusion checks per
  frame.

## Bundle

- `npm run build` code-splits each lazy 3D scene into its own chunk (confirmed: `HeroScene-*.js`,
  `SkillsScene-*.js`, `ProductUniverseScene-*.js` are separate from the main `index-*.js`).
- The shared three.js/r3f/drei vendor chunk is large (~910KB uncompressed / ~244KB gzip) but is not
  part of the initial page load — it loads only once, on first scroll/mount of a 3D section.

## Rendering

- `Reveal` (`IntersectionObserver`-based) defers reveal animation work until a section nears the
  viewport, and disconnects its observer after first intersection (one-shot, not continuous
  observation).
- `useActiveSection` uses a single shared `IntersectionObserver` across all nav targets rather than
  per-link scroll listeners.

## Not yet done

- No `manualChunks` tuning beyond React's automatic lazy-import splitting — if the three.js chunk
  needs to shrink further, that's the next lever.
- No image assets exist yet (all illustrations are inline SVG/CSS), so there's no image optimization
  pipeline to document.
