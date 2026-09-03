# Changelog

## [Unreleased]

### Added

- Initial scaffold: Vite + React 19 + TypeScript, Three.js via React Three Fiber + Drei
- Centralized design-token theme system (light / dark / system, green primary), Three.js color sync via `useThreeColors`
- Typed, data-driven content layer for profile, skills, experience, education, projects, products, architecture, and tech matrix
- Sticky navigation with active-section indicator and mobile menu
- Interactive 3D hero scene (technology ecosystem)
- Interactive 3D skills constellation with category filtering, hover tooltip, and an accessible chip fallback
- Visual experience timeline and education progression track
- Project cards with domain-specific SVG illustrations
- Product showcase: flagship SDK products (RADIX, VISION, WebRTC Wrapper SDK) and telephony applications, each with a reusable architecture flow diagram
- 3D "Product Engineering Universe" relationship graph
- Interactive project/technology matrix
- "How I Build Software" architecture visualization (general layers + Web/Telephony/Native paths)
- Contact section with placeholder channels (no fabricated contact info)
- Full documentation suite (README, MEMORY, FEATURES, CHANGELOG, CLAUDE, AGENTS, docs/*)

### Fixed

- Hero 3D node graph initially rendered centered behind centered text, overlapping and duplicating the name label; first reworked to an asymmetric left-text/full-bleed-graph composition with an `offsetX` prop on `NodeGraph` and a `showCenterLabel` toggle
- That offset-based fix only held at the viewport width it was tuned against — at 1920px the graph drifted back over the text (world-space offset covers a smaller fraction of screen at wider FOV). Replaced the full-bleed overlay with a real two-column CSS grid (`hero-grid`) so the graph is confined to its own bounded panel by layout, not by viewport-specific 3D-coordinate tuning; verified at 390/768/1024/1280/1440/1920px

### Performance

- All three Three.js scenes (`HeroScene`, `SkillsScene`, `ProductUniverseScene`) are lazy-loaded via `React.lazy` + `Suspense`
- Device-tier-aware scene complexity (`useDeviceTier`): reduced node count and interactivity on mobile
- `prefers-reduced-motion` disables auto-rotation and pointer parallax across all 3D scenes

### Documentation

- Established full documentation structure per project requirements
