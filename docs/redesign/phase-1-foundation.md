# Phase 1 Foundation - Tokens + Theme reset

This document captures the delivered baseline of Phase 1 from `REDESIGN_SPEC.md`.

## What changed

- Neutralized the previous Everforest-heavy green/orange accents in both theme modes.
- Introduced semantic foundation tokens in global styles (`custom.scss`) for surfaces, text, borders, accent, focus ring, radii, shadows, and spacing.
- Switched core global styles in `base.scss` from legacy color usage to semantic token usage where it affects readability and interaction consistency.
- Moved syntax highlighting from Everforest themes to `github-light` / `github-dark` to avoid palette mismatch with the neutralized UI layer.

## Updated files

- `quartz/themes/everforest.ts`
- `quartz/styles/custom.scss`
- `quartz/styles/base.scss`
- `quartz.config.ts`

## Token mapping (Phase 1)

Semantic layer currently maps to Quartz legacy variables to stay backward-compatible with component-level styles that still consume `--light` / `--secondary` / etc.

- `--bg` -> `--light`
- `--bg-elevated` -> mix of `--lightgray` and `--light`
- `--text` -> `--dark`
- `--text-muted` -> `--darkgray`
- `--border` / `--border-strong` -> neutral mixes from `--gray`, `--lightgray`, `--darkgray`
- `--accent` -> `--secondary`
- `--accent-contrast` -> `#ffffff`
- `--ring` -> lightened mix from `--secondary`
- `--shadow-sm` / `--shadow-md` -> light and dark mode tuned shadows
- `--radius-sm` / `--radius-md` / `--radius-lg` -> `8px` / `12px` / `16px`
- `--space-1..6` -> foundation spacing scale from `0.25rem` to `2rem`

## Validation

- Typecheck: `npx tsc --noEmit` passes.
- Visual baseline rerun: `node scripts/capture-baseline.mjs` completed successfully.
- Updated capture outputs are available in:
  - `docs/redesign/baseline/light/desktop`
  - `docs/redesign/baseline/light/mobile`
  - `docs/redesign/baseline/dark/desktop`
  - `docs/redesign/baseline/dark/mobile`
- Capture metadata/log:
  - `docs/redesign/baseline/capture-meta.json`
  - `docs/redesign/baseline/capture.log`

## Remaining risks before Phase 2

1. Many component styles still consume legacy variables directly, so layout rhythm updates can expose inconsistent local contrasts.
2. Search, explorer, and list surfaces include local border/background rules that are not yet fully normalized to semantic surface tokens.
3. Accent usage across links, tags, and interactive list states is now more neutral, but full interaction-state harmonization remains a Phase 3 responsibility.

## Handoff to Phase 2 (Layout & Rhythm)

- Preserve this token layer as the single global source of truth.
- Prioritize spacing/container rhythm in layout-level files before touching component-specific visual polish.
- Keep component-level overrides minimal until surface unification phase starts.
