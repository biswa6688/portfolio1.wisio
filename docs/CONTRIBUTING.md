# Contributing

This is a single-owner portfolio site, but if you're picking up work here (human or agent), follow
`CLAUDE.md` and `AGENTS.md` — they cover content-accuracy rules, architecture rules, and the
required build/verify/document loop.

Short version:

1. Read `docs/CONTENT.md` before touching any portfolio copy — it's the source of truth, and nothing
   outside it should be presented as fact.
2. Reuse existing building blocks (`NodeGraph`, `FlowDiagram`, `Section`, `Reveal`) instead of
   writing parallel implementations.
3. `npm run build` must pass before you're done.
4. Update `FEATURES.md` and `CHANGELOG.md` for any feature-level change.
5. Don't fabricate content, don't skip documentation, don't use destructive git commands without
   explicit authorization.
