# Phase 0 Audit — Baseline & Scope

This document captures the visual baseline before redesign phases start.

## Current Theme/Style Entry Points

| File | Current role in visual system | Priority |
| --- | --- | --- |
| `quartz.config.ts` | Selects active palette (`everforest`), typography (`Manrope`/`JetBrains Mono`), and syntax highlight theme (`everforest-*`). | high |
| `quartz/themes/everforest.ts` | Defines light/dark color tokens consumed by Quartz CSS variables (`--light`, `--secondary`, `--tertiary`, etc.). | high |
| `quartz/styles/custom.scss` | Global custom override entry point; currently empty besides `@use "./base.scss"`. | high |
| `quartz/styles/base.scss` | Global base styles for typography, spacing rhythm, links, code blocks, surfaces, focus/hover-like behavior. | high |
| `quartz/styles/variables.scss` | Breakpoints, grid templates, spacing and weight constants used across component styles. | high |
| `quartz/layout.ts` | Declares composition of key surfaces (header/search/darkmode, recent notes, footer, tag/meta blocks). | high |

## First-Wave Components (Surface System Input)

These are selected as the first wave for redesign due to direct impact on primary surfaces from `REDESIGN_SPEC.md`.

| Component | Why in first wave | Style sources |
| --- | --- | --- |
| `quartz/components/Header.tsx` | Header is a top-level surface and sets page visual framing. | inline CSS in component |
| `quartz/components/Search.tsx` | Search button + overlay are core interaction and major elevated surface. | `quartz/components/styles/search.scss` |
| `quartz/components/PageList.tsx` | Main list surface for index/list pages; controls list rhythm and item hierarchy. | inline CSS + `quartz/components/styles/listPage.scss` |
| `quartz/components/TagList.tsx` | Tag pills appear in content metadata and list surfaces. | inline CSS in component |
| `quartz/components/RecentNotes.tsx` | Right/after-body list card-like section; core secondary surface. | `quartz/components/styles/recentNotes.scss` |
| `quartz/components/Footer.tsx` | Global closing surface and link consistency anchor. | `quartz/components/styles/footer.scss` |

## Additional Relevant Surface/Interaction Styles

- `quartz/components/styles/headerLinks.scss`
- `quartz/components/styles/darkmode.scss`
- `quartz/components/styles/contentMeta.scss`
- `quartz/components/styles/popover.scss`

These are not first-wave primaries but can override or visually conflict with token-first work in Phase 1-3.

## Baseline Capture Matrix

- Pages:
  - Home: `/`
  - Tags index: `/tags`
  - List/index-like page: `/wishlist`
  - Typical content page: `/MermaidJS`
- Viewports:
  - Desktop: `1440x900`
  - Mobile: `390x844`
- Modes:
  - `light`
  - `dark`

Expected output folder:

- `docs/redesign/baseline/light/desktop`
- `docs/redesign/baseline/light/mobile`
- `docs/redesign/baseline/dark/desktop`
- `docs/redesign/baseline/dark/mobile`

## Baseline Capture Result

- Capture status: completed.
- Captured at (UTC): `2026-04-25T17:15:33.174Z`.
- Metadata file: `docs/redesign/baseline/capture-meta.json`.
- Raw server/capture log: `docs/redesign/baseline/capture.log`.

Generated files:

- `docs/redesign/baseline/light/desktop/{home,tags,wishlist,article}.png`
- `docs/redesign/baseline/light/mobile/{home,tags,wishlist,article}.png`
- `docs/redesign/baseline/dark/desktop/{home,tags,wishlist,article}.png`
- `docs/redesign/baseline/dark/mobile/{home,tags,wishlist,article}.png`

## Risks Before Phase 1

1. Local component styles can override future semantic tokens (`var(--secondary)`, `--tertiary`) in inconsistent ways.
2. Search overlay and list/tag surfaces currently use custom border/radius/shadow logic, so unification may need coordinated updates across multiple files.
3. Typography and spacing are distributed between global `base.scss` and component-level styles, increasing risk of partial/patchy visual changes without strict scope control.

## Readiness Checklist for Phase 1

- [x] Theme/style entry points identified and documented.
- [x] First-wave components selected and justified.
- [x] Baseline capture matrix fixed (pages/viewports/modes).
- [x] Baseline artifact structure defined under `docs/redesign/baseline`.
