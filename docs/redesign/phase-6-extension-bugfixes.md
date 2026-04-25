# Phase 6 Extension - Bugfixes

This document captures the additional bugfix pass after the main Phase 6 refinement.

## What changed

- Added visible spacing between hero/title and `ContentMeta` badges.
- Reduced the visual gap between TOC and article content where TOC is present.
- Replaced residual Everforest callout colors with a Flexoki-aligned callout palette.
- Replaced GitHub syntax highlighting theme with a neutral fallback pair:
  - attempted `flexoki-light` / `flexoki-dark`;
  - applied `vitesse-light` / `vitesse-dark` due to Shiki bundle availability.

## Updated files

- `quartz/components/styles/contentMeta.scss`
- `quartz/components/styles/toc.scss`
- `quartz/styles/base.scss`
- `quartz/styles/callouts.scss`
- `quartz.config.ts`

## Validation

- `npm run check` passes.
- `npm run test` passes.
- `npm run quartz -- build` passes.
- `node scripts/capture-baseline.mjs` passes.

## Notes

- The build error for `flexoki-light` was: theme is not included in the current Shiki bundle. Fallback to `vitesse-*` keeps contrast and visual neutrality without custom theme loading.
