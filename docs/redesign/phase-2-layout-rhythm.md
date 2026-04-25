# Phase 2 Layout & Rhythm

This document captures the delivered baseline of Phase 2 from `REDESIGN_SPEC.md`.

## What changed

- Updated global layout rhythm to create clearer vertical hierarchy between header, article content, and footer.
- Increased spacing consistency across breakpoints by moving grid gaps to semantic spacing tokens.
- Kept the token contract from Phase 1 intact (`--space-*`, `--border`, `--bg`) without introducing a parallel variable system.
- Extended baseline capture with an explicit `search-overlay` state to cover the elevated search surface.

## Updated files

- `quartz/styles/variables.scss`
- `quartz/styles/base.scss`
- `scripts/capture-baseline.mjs`
- `docs/redesign/baseline/README.md`
- `docs/redesign/phase-0-audit.md`

## Layout/Rhythm updates

- `variables.scss`
  - `$topSpacing`: `2rem` -> `2.5rem`
  - `rowGap` / `columnGap` switched from hardcoded `8px` to `--space-*` token values for `mobile/tablet/desktop` grids.
- `base.scss`
  - Added page-level horizontal and bottom padding for more stable breathing room.
  - Increased spacing around `page-header`, `page-footer`, and global `footer`.
  - Added structured vertical flow for `.center` via flex + token-based gap.
  - Normalized heading and `hr` margins to token-driven spacing.

## Validation

- Typecheck: `npx tsc --noEmit` passes.
- Build: `npm run quartz -- build` passes.
- Baseline capture rerun: `node scripts/capture-baseline.mjs` passes.
- Capture metadata/log:
  - `docs/redesign/baseline/capture-meta.json`
  - `docs/redesign/baseline/capture.log`

## Remaining risks before Phase 3

1. Some component-level styles still hardcode local spacing and can slightly diverge from the global rhythm.
2. Search, list, and footer surfaces now sit in a better global rhythm but still need interaction/state unification in Phase 3.
3. Further spacing tweaks should remain token-first to avoid reintroducing pixel-based drift.

## Handoff to Phase 3 (Surface Unification)

- Keep Phase 2 spacing and container rhythm as the baseline and avoid reverting to local ad-hoc spacing.
- Focus Phase 3 on interaction/state coherence across `Header/Search/Footer/PageList/TagList/RecentNotes`.
- Use the refreshed baseline screenshots (including `search-overlay`) as regression reference for core surface styling.
