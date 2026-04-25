# Phase 4 Homepage Hero

This document captures the delivered result of Phase 4 from `REDESIGN_SPEC.md`.

## What changed

- Added a dedicated `HomeHero` component that renders only on the homepage (`slug === "index"`).
- Integrated Hero into the content-page `beforeBody` flow in `quartz.layout.ts`, so it appears before markdown article content.
- Kept markdown rendering intact: `content/index.md` is still rendered by the regular `Content` component and not duplicated.
- Aligned Hero surface and CTA interactions with the existing token-first system from Phase 1-3.
- Prevented heading duplication on homepage by skipping `ArticleTitle` when `slug` is `index`.

## Updated files

- `quartz/components/HomeHero.tsx`
- `quartz/components/styles/homeHero.scss`
- `quartz/components/index.ts`
- `quartz.layout.ts`
- `quartz/components/ArticleTitle.tsx`

## Hero behavior and structure

- Hero is implemented as an independent Quartz component with one configuration source (title, description, primary/secondary CTA).
- `HomeHero` performs its own index-only guard via `fileData.slug`.
- Hero layout is compact on mobile and uses shared design tokens:
  - `--bg-elevated`, `--border`, `--radius-*`, `--shadow-sm`
  - tokenized hover/focus-friendly CTA styling
- Vertical rhythm to article is preserved by existing center-column spacing, without modifying `content/index.md`.

## Validation

- Typecheck: `npx tsc --noEmit` passes.
- Build: `npm run quartz -- build` passes.
- Baseline smoke-check capture: `node scripts/capture-baseline.mjs` passes.

## Remaining risks before Phase 5

1. Hero copy/CTA is currently static config in `quartz.layout.ts`; if future localization is required, it should move to i18n-aware configuration.
2. Accessibility-depth checks (keyboard flow nuance, SR text quality, reduced-motion review) remain in Phase 5 scope.
3. Homepage now has stronger entry emphasis; Phase 5 should verify final focus order and contrast on all CTA states across themes.

## Handoff to Phase 5 (Polish & Accessibility)

- Run a focused keyboard and `focus-visible` audit for Hero CTA buttons in light/dark and mobile/desktop.
- Verify no residual contrast regressions after Phase 4 in adjacent surfaces (`Header`, `Search`, `Footer`, list cards).
- Keep Hero in the same interaction family and avoid introducing phase-local color/state exceptions.
