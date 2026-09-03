# Component Inventory

| Component | Path | Purpose |
| --- | --- | --- |
| `Layout` | `components/layout/Layout.tsx` | Page shell: skip link + `Navbar` + `<main>` |
| `Section` | `components/layout/Section.tsx` | Standard eyebrow/title/description section wrapper |
| `Navbar` | `components/navigation/Navbar.tsx` | Sticky nav, active-section indicator, mobile menu |
| `ThemeToggle` | `components/navigation/ThemeToggle.tsx` | Light/dark/system switch |
| `Hero` | `components/hero/Hero.tsx` | Hero text + lazy `HeroScene` |
| `AboutSection` | `components/about/AboutSection.tsx` | Engineering DNA flow + career stats |
| `SkillsSection` | `components/skills/SkillsSection.tsx` | Category filters + lazy `SkillsScene` + chip fallback |
| `ExperienceTimeline` | `components/timeline/ExperienceTimeline.tsx` | Visual career timeline |
| `EducationTimeline` | `components/education/EducationTimeline.tsx` | Education progression track |
| `ProjectsSection` / `ProjectCard` (inline) / `DomainIllustration` | `components/projects/` | Project cards + SVG illustrations |
| `ProductsSection` | `components/products/ProductsSection.tsx` | Assembles flagship/telephony products, universe scene, tech matrix |
| `ProductCard` | `components/products/ProductCard.tsx` | Single product card with `FlowDiagram` |
| `TechMatrix` | `components/products/TechMatrix.tsx` | Interactive product/technology matrix table |
| `ArchitectureSection` | `components/architecture/ArchitectureSection.tsx` | "How I Build Software" diagrams |
| `ContactSection` | `components/contact/ContactSection.tsx` | Contact channel cards |
| `NodeGraph` | `components/three/NodeGraph.tsx` | Shared Three.js node-graph engine |
| `SceneCanvas` | `components/three/SceneCanvas.tsx` | Shared `Canvas` setup (lighting, DPR, a11y wrapper) |
| `HeroScene` / `SkillsScene` / `ProductUniverseScene` | `components/three/` | Scene-specific `NodeGraph` configuration |
| `FlowDiagram` | `components/infographic/FlowDiagram.tsx` | Reusable architecture flow diagram |
| `Reveal` | `components/common/Reveal.tsx` | Scroll-reveal wrapper |

## Hooks

| Hook | Purpose |
| --- | --- |
| `useTheme` | Read/set theme mode (from `lib/theme.tsx`) |
| `useThreeColors` | Resolved design-token colors for Three.js materials |
| `useReducedMotion` | `prefers-reduced-motion` state |
| `useDeviceTier` | `'desktop' \| 'tablet' \| 'mobile'` for 3D complexity tiering |
| `useInView` | `IntersectionObserver` boolean for scroll-reveal |
| `useActiveSection` | Currently active nav section id |

## Data

| File | Exports |
| --- | --- |
| `data/profile.ts` | `profile: Profile` |
| `data/skills.ts` | `skills: Skill[]`, `skillCategories: SkillCategory[]` |
| `data/experience.ts` | `experience: Experience[]` |
| `data/education.ts` | `education: Education[]` |
| `data/projects.ts` | `projects: Project[]` |
| `data/products.ts` | `products: Product[]` |
| `data/architecture.ts` | `generalLayers`, `architecturePaths`, `techMatrix`, `techMatrixColumns` |
| `data/contact.ts` | `contact` (intentionally empty placeholders) |
