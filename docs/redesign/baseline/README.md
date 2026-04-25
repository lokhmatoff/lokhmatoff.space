# Baseline Screenshots (Phase 0)

This folder stores visual baselines used for redesign phases and regression checks.

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
- `/` with opened search overlay (`search-overlay`)

## Capture method

Automated capture script:

- `scripts/capture-baseline.mjs`

The script runs Quartz in serve mode, waits for readiness, takes screenshots, then shuts down the server.

Search overlay capture opens the search modal and enters a sample query to ensure the elevated search surface is visible in snapshots.
