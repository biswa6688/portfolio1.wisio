# Deployment

## Build

```bash
npm run build
```

Produces a static bundle in `dist/`. This is a fully static Vite app — no server-side runtime is
required.

## Preview

```bash
npm run preview
```

## Hosting

Any static host works (GitHub Pages, Netlify, Vercel, Cloudflare Pages, S3+CDN). No environment
variables or backend services are required — all content is bundled at build time from
`src/data/*.ts`.

If deploying under a sub-path (e.g. GitHub Pages project sites), set Vite's `base` option in
`vite.config.ts` accordingly before building.
