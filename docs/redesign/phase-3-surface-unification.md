# Phase 3 Surface Unification

This document captures the delivered baseline of Phase 3 from `REDESIGN_SPEC.md`.

## What changed

- Unified the core surface language across `Header`, `Search`, `Footer`, `PageList`, `TagList`, and `RecentNotes`.
- Normalized hover/focus/active visuals to one interaction family based on semantic tokens.
- Aligned secondary style layers (`headerLinks`, `darkmode`, `contentMeta`, `popover`) with the same border/radius/background/shadow hierarchy.
- Kept Phase 3 boundaries intact: no Hero/Homepage redesign work and no full accessibility expansion from Phase 5.

## Updated files

- `quartz/components/Header.tsx`
- `quartz/components/TagList.tsx`
- `quartz/components/styles/search.scss`
- `quartz/components/styles/footer.scss`
- `quartz/components/styles/listPage.scss`
- `quartz/components/styles/recentNotes.scss`
- `quartz/components/styles/headerLinks.scss`
- `quartz/components/styles/darkmode.scss`
- `quartz/components/styles/contentMeta.scss`
- `quartz/components/styles/popover.scss`

## Surface unification details

- `Header`
  - Switched to tokenized surface container (`--bg-elevated`, `--border`, `--radius-md`, `--shadow-sm`) and tokenized spacing.
- `Search`
  - Unified search trigger button styling with tokenized border/background/radius and coherent hover/focus behavior.
  - Normalized overlay panel/input/result-card surfaces to tokenized border, elevation, and interaction states.
- `PageList` / `RecentNotes`
  - Converted list rows into consistent card-like surfaces with shared border/radius/shadow and row-level hover/focus transitions.
- `TagList`
  - Reworked tag pills to tokenized chip surfaces with consistent border, radius, and hover/focus transitions.
- `Footer`
  - Raised footer to the same surface family instead of low-opacity text-only treatment.
- Secondary layers
  - `headerLinks`: aligned interactive links to the same compact chip-like interaction family.
  - `darkmode`: aligned toggle button as interactive surface with tokenized focus ring behavior.
  - `contentMeta`: normalized metadata items as muted tokenized chips.
  - `popover`: aligned floating surface border/radius/elevation with overlay hierarchy.

## Validation

- Typecheck: `npx tsc --noEmit` passes.
- Build: `npm run quartz -- build` passes.
- Baseline capture rerun: `node scripts/capture-baseline.mjs` passes.
- Capture metadata/log:
  - `docs/redesign/baseline/capture-meta.json`
  - `docs/redesign/baseline/capture.log`

## Remaining risks before Phase 4

1. Some non-core components outside first-wave still use legacy local styling and may need further token-alignment in later polish.
2. Visual interaction states are now unified, but broader keyboard-depth and accessibility verification remains Phase 5 scope.
3. Hero-specific visual language still needs explicit treatment in Phase 4 to extend this system to homepage intent.

## Handoff to Phase 4 (Homepage Hero)

- Keep the new surface hierarchy (`overlay > card > flat`) as baseline and avoid local ad-hoc overrides.
- Build Hero on top of the same token layer and interaction family rather than introducing phase-local exceptions.
- Use the refreshed baseline captures (including search overlay) as regression reference while implementing homepage-first emphasis.
