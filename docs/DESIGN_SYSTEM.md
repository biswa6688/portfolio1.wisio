# Design System

## Tokens

All colors, shadows, radii, fonts, and easing/duration values are defined as CSS custom properties
in `src/styles/tokens.css`. Light-theme values live on `:root`; dark-theme values are redefined
under `:root[data-theme='dark']` and mirrored under `@media (prefers-color-scheme: dark)` guarded by
`:root:not([data-theme='light'])` for the "system" mode. Never hard-code a color in a component —
always reference a `var(--color-*)` token.

Key tokens:

- `--color-bg`, `--color-surface`, `--color-surface-2`, `--color-border`
- `--color-text`, `--color-text-muted`, `--color-text-dim`
- `--color-primary` (green), `--color-primary-strong`, `--color-primary-soft`, `--color-secondary`
- `--color-accent`, `--color-accent-2` (cool technical accents)
- `--color-skill-*` — one per skill category (languages, backend, frontend, databases, communication)
- `--font-sans`, `--font-mono`
- `--radius-sm|md|lg`, `--shadow-sm|md|lg`, `--ease-out`, `--duration-fast|base|slow`

## Theme modes

`ThemeProvider` (`src/lib/theme.tsx`) supports `light`, `dark`, and `system`. The chosen mode is
persisted to `localStorage`. In `system` mode, no `data-theme` attribute is set and the page follows
`prefers-color-scheme`; in explicit `light`/`dark` mode, `data-theme` is stamped on `<html>` and
tokens are overridden accordingly.

## Three.js theming

Three.js materials can't read CSS variables directly. `useThreeColors` (`src/hooks/useThreeColors.ts`)
calls `getComputedStyle` against the resolved tokens and re-reads them (after a `requestAnimationFrame`
tick) whenever `resolvedTheme` changes, so 3D scene colors track the active theme.

## Typography

- Sans: `Inter` (system-ui fallback stack) for body/headings
- Mono: `JetBrains Mono` (ui-monospace fallback) for eyebrows, labels, technical chips, code-like UI

## Motion

- Base easing: `cubic-bezier(0.16, 1, 0.3, 1)` (`--ease-out`)
- Scroll-reveal via `Reveal` + `.reveal`/`.reveal.in-view` classes
- `prefers-reduced-motion: reduce` disables/shortens all transitions and animations globally
  (`src/styles/global.css`) and disables 3D auto-rotation/pointer-parallax (`useReducedMotion` hook)
