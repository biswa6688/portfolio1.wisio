# Products — Detail Reference

Source data: `src/data/products.ts`. See `docs/CONTENT.md` for the authoritative facts.

## Telephony applications

- **FANUC India Telephony Application** — TAPI + Avaya IP Office. Architecture:
  Web/App → Telephony Application → TAPI → Avaya IP Office → Telephone Infrastructure.
- **Eros International IVR Application** — TAPI + Avaya IP Office. Architecture (call flow):
  Caller → Telephone Network → Avaya IP Office → TAPI → IVR Application → Business Logic.
- **Tech Mahindra Telephony Application** — Avaya POM. Architecture:
  Application → Avaya POM → Enterprise Communication Infrastructure.

Only "rich telephony features" is claimed for FANUC and Tech Mahindra, and "IVR" for Eros — no
specific call-center feature list is invented for any of the three.

## Flagship SDK products

- **RADIX** — softphone engine (C, C#, PJSIP) behind a JavaScript SDK.
  Web Application → RADIX JavaScript SDK → RADIX Softphone Engine → C#/C → PJSIP → VoIP/SIP.
- **VISION** — screen recorder (Windows native library) behind a JavaScript SDK.
  Web Application → VISION JavaScript SDK → Native Recording Layer → Windows Native APIs → Screen Capture.
- **WebRTC Wrapper SDK** — WebRTC wrapper behind a JavaScript SDK.
  Web Application → JavaScript SDK → WebRTC Wrapper → WebRTC → Real-Time Communication.

No codecs, compression formats, cloud storage, call-center features, or usage metrics are claimed
for any product beyond what's listed above.

## Product Engineering Universe

`src/components/three/ProductUniverseScene.tsx` connects RADIX, VISION, WebRTC Wrapper SDK, and a
grouped "Telephony Applications" node to shared engineering concepts (Native Code, JavaScript SDK,
Communication, Browser Integration, Real-Time Systems, Windows, Telephony) via an explicit bipartite
edge list (`PRODUCT_CONCEPTS` in that file) — not derived from `src/data/products.ts` directly, since
it models cross-cutting engineering themes rather than the products' own architecture layers.

## Tech matrix

`src/data/architecture.ts` (`techMatrix`, `techMatrixColumns`) drives
`src/components/products/TechMatrix.tsx`. Only relationships directly supported by the facts above
are marked — extending the matrix for a new product means adding a row with only the columns that
are actually true for it.
