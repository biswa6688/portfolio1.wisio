# Accessibility

## Semantic structure

- Each major section is a `<section id="..." aria-labelledby="<id>-heading">` (via the shared
  `Section` component), with a real `<h2>` heading carrying the matching id.
- Timelines and lists use `<ol>`/`<ul>` with `role="list"`/`role="listitem"` where flex layout would
  otherwise strip semantics.
- The tech matrix is a real `<table>` with `<caption>`, `scope="col"`/`scope="row"`, and per-cell
  `aria-label`s on the checkmark cells.

## Keyboard & focus

- Skip-to-content link (`.skip-link`) as the first focusable element.
- All interactive controls are real `<button>`/`<a>` elements — nav links, theme toggle, skills
  filters/chips, CTA buttons.
- Visible focus rings via `:focus-visible` on nav links, buttons, and theme toggle.
- Skill chips are keyboard-operable (`onFocus`/`onBlur` mirror `onMouseEnter`/`onMouseLeave` for the
  3D tooltip).

## 3D content

- Every `Canvas` is wrapped in a `<div role="img" aria-label="...">` (`SceneCanvas`) with a
  descriptive label, since canvas content is otherwise invisible to assistive tech.
- The skills constellation's content is fully duplicated as an accessible grouped-chip list below the
  3D canvas — no information is conveyed only through the 3D visualization.

## Motion

- `prefers-reduced-motion: reduce` is respected globally (`src/styles/global.css` disables/shortens
  transitions and scroll-behavior) and specifically in all three Three.js scenes (auto-rotation and
  pointer-parallax are disabled via `useReducedMotion`).

## Color

- No information is conveyed by color alone: skill category color-coding is paired with text labels
  everywhere (filter buttons, chips, tooltip); timeline domain badges carry text ("Faculty" /
  "Industry") alongside their color.
- Design tokens maintain sufficient contrast in both light and dark themes (dark text on light
  surfaces, light text on dark surfaces, with muted/dim variants reserved for secondary text only).
