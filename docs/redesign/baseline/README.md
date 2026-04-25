# Baseline Screenshots (Phase 0)

This folder stores "before redesign" screenshots used as the visual baseline for redesign phases.

## Structure

- `light/desktop/*.png`
- `light/mobile/*.png`
- `dark/desktop/*.png`
- `dark/mobile/*.png`

## Routes captured

- `/` (home)
- `/tags` (tags index)
- `/wishlist` (list/index-like page)
- `/MermaidJS` (typical article page)

## Capture method

Automated capture script:

- `scripts/capture-baseline.mjs`

The script runs Quartz in serve mode, waits for readiness, takes screenshots, then shuts down the server.
