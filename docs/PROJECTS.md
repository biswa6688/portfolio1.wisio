# Projects — Detail Reference

Source data: `src/data/projects.ts`. See `docs/CONTENT.md` for the authoritative facts; this file
adds the visual-treatment rationale for each.

## AmbujaExporters.in — Handicrafts & Filigree

Visual treatment: a hand-drawn-style filigree/star illustration (`DomainIllustration kind="handicraft"`),
commerce-flow and catalog language in the description. No specific feature claims beyond "handicrafts
and filigree" business platform.

## tariniexporters.in — Gemstones

Visual treatment: a faceted-gem SVG illustration (`kind="gemstone"`), catalog/showcase language. No
specific feature claims beyond "gemstones" business platform.

## paxblue.in — Multi-Level Marketing

Visual treatment: a hub-and-branches network SVG (`kind="network"`), member-relationship/hierarchy
language. No specific feature claims beyond "multi-level marketing / business-network management."

## pramax.in — Multi-Level Marketing

Same visual treatment and constraints as paxblue.in — a separate platform in the same domain.

## Adding a project

1. Add an entry to `projects: Project[]` in `src/data/projects.ts` (only verified facts).
2. Pick or add a `DomainIllustration` kind in `src/components/projects/DomainIllustration.tsx` — add
   a new SVG only if none of the existing kinds fit; don't invent visuals that imply unverified
   functionality.
3. Map the project id to that kind in `ILLUSTRATION_MAP` in `ProjectsSection.tsx`.
