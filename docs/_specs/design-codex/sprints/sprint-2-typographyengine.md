# Sprint 2 — Typography Engine

## Header

- **Goal:** Replace the "Academic" font stack with an **Industrial Monospaced** engine to complete the "1970s Terminal" aesthetic.
- **Status: COMPLETE**
- **Spec sections:**
  - Problem Statement: Serif fonts conflict with the "Declassified Archive" metaphor.
  - Design Goals: 100% Monospaced coverage, Tabular data alignment, Link color normalization.
  - Architecture: Global CSS overrides, Tailwind configuration synchronization.
  - Security: Process discipline via Linting, Repository Accuracy.
  - Testing Strategy: Cross-browser font rendering check (Safari), Formatting verification.
- **Prerequisite:** Sprint 1 (Color Token Migration) complete.
- **Expected test count:** `0 existing + 0 new = 0 total`

## Available Assets

| Asset                 | Verified details                            | How this sprint uses it                                                      |
| :-------------------- | :------------------------------------------ | :--------------------------------------------------------------------------- |
| `app/globals.css`     | Main stylesheet for the project.            | **Override:** Forces all font variables and HTML tags to use the mono stack. |
| `tailwind.config.mjs` | Framework configuration (Manually Created). | **Sync:** Maps Tailwind utilities (sans, serif, mono) to IBM Plex Mono.      |
| `package.json`        | Contains build and quality scripts.         | **Verify:** Used to run `npm run lint` and `npm run format`.                 |

## Tasks

### 1. Engineered the Typography Engine

Purged the "Academic" serif aesthetic to complete the terminal metaphor and ensure the site feels like a cohesive system log.

- **Font Stack:** All text—including headings, navigation, and body—is now strictly `IBM Plex Mono`.
- **Link Hygiene:** Overrode browser defaults to eliminate "Blue/Purple" links, forcing all states (`:visited`, `:hover`, `:active`) to **Phosphor Green (#32CD32)**.
- **Visual Rhythm:** Adjusted `letter-spacing` to `0.02em` and implemented `tabular-nums` for technical data alignment.

### 2. Synchronization of System Tokens

Ensured the design system is unified across both CSS and Tailwind.

- Updated `:root` and `.dark` blocks in `globals.css`.
- Manually created `tailwind.config.mjs` to resolve missing configuration files in the root directory.

### 3. Quality Gate Verification

Validated the integrity of the new typography engine.

- Ran `npm run format` to ensure code cleanliness.
- Ran `npm run lint` to confirm no syntax errors were introduced during the config creation.

## Completion Checklist

- [x] All text (h1-h6, p, a) forced to Monospaced stack via `!important` overrides.
- [x] Link colors (visited/active) forced to #32CD32 to eliminate browser defaults.
- [x] `tailwind.config.mjs` created and configured with the correct font-family extend.
- [x] `npm run format` passes (All tables and blocks aligned).
- [x] `npm run lint` passes (Zero code or configuration errors found).
- [x] All changes successfully pushed to GitHub `origin main`.

## QA Summary

- **QA target:** Typography consistency across all routes (`/`, `/eras`, `/people`).
- **Spec coverage confirmed:** - Visual identity matches the "Declassified Archive" thesis.
  - No "Serif" font leaks identified in headers or navigation.
  - Link states remain high-contrast green for accessibility.
- **Verification result:** `npm run format:check` passed.

## Curator’s Log & Technical Note

**Added by Jefferson Rodas (March 30, 2026):**

> During Sprint 2, I identified that the `tailwind.config.mjs` file was missing from the root directory. I manually created the file using the `touch` command and configured the typography engine to force an industrial monospaced stack across the entire application. I also updated `globals.css` to override default browser link colors (blue/purple) to match our Phosphor Green (#32CD32) aesthetic, ensuring a 100% unified "Declassified Archive" look for the presentation.
