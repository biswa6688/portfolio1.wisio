# Feature Inventory

Update this checklist whenever a feature is added or changed.

## Foundation

- [x] React 19 + TypeScript
- [x] Vite build
- [x] Three.js via React Three Fiber + Drei
- [x] Centralized design-token system (`src/styles/tokens.css`)
- [x] Light theme
- [x] Dark theme
- [x] System theme
- [x] Green primary color, theme-aware across UI and 3D
- [x] Typed, data-driven content layer (`src/data/*`, `src/types/index.ts`)

## Navigation & Layout

- [x] Sticky navigation with active-section indicator
- [x] Mobile hamburger menu
- [x] Skip-to-content link
- [x] Smooth scroll to section

## Hero

- [x] Interactive 3D "engineering ecosystem" scene (19 technology nodes around a central hub)
- [x] Pointer-reactive camera tilt (desktop, motion allowed)
- [x] Auto-rotation (disabled under reduced motion)
- [x] Asymmetric composition — text column + offset 3D graph, no overlap
- [x] CTA buttons to Experience / Projects / Products / Contact

## About

- [x] "Engineering DNA" visual flow (Frontend → Backend → Desktop → Telephony → SDK → Database → WebRTC → Product Engineering)
- [x] Career statistics grid (non-fabricated: years, product count, project count, communication tech count)

## Skills

- [x] Interactive 3D technology constellation
- [x] Category filtering (Languages, Backend, Frontend, Databases, Communication/Real-Time)
- [x] Hover/click tooltip
- [x] Accessible grouped-chip fallback list (keyboard operable, mirrors 3D content)

## Experience

- [x] Visual career timeline with company, role, period, duration bar
- [x] Education-sector vs industry domain badges

## Education

- [x] Horizontal (desktop) / vertical (mobile) milestone progression, 2003–2015

## Projects

- [x] Project cards with domain-specific SVG illustrations (handicraft, gemstone, network)
- [x] Technology chips per project

## Products

- [x] Flagship SDK product cards (RADIX, VISION, WebRTC Wrapper SDK) with architecture flow diagrams
- [x] Telephony application cards (FANUC, Eros International, Tech Mahindra)
- [x] 3D "Product Engineering Universe" relationship graph
- [x] Interactive project/technology matrix

## Architecture

- [x] "How I Build Software" general engineering-layer diagram
- [x] Specialized paths: Web, Telephony, Native

## Contact

- [x] Visual contact channel cards with placeholder state (no fabricated contact info)

## Cross-cutting

- [x] Responsive design (desktop / tablet / mobile), device-tier-aware 3D complexity
- [x] `prefers-reduced-motion` support throughout
- [x] Lazy-loaded 3D scenes (`React.lazy` + `Suspense`)
- [x] Scroll-reveal animation (`IntersectionObserver`-based, respects reduced motion)
- [x] Accessible labeling on all 3D canvases (`role="img"` + `aria-label`)
