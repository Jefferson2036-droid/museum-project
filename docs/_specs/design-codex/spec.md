# Sprint 2 — Typography Engine

## Header

- **Goal:** Replace the "Academic" font stack with an **Industrial Monospaced** engine to complete the "1970s Terminal" aesthetic.
- **Spec sections:** Problem Statement, Design Goals 4 & 5, Architecture, Testing.
- **Prerequisite:** Sprint 1 (Token Migration) complete.
- **Expected test count:** `0 existing + 0 new = 0 total`

## Available Assets

| Asset                | Verified details                                     | How this sprint uses it                                                      |
| :------------------- | :--------------------------------------------------- | :--------------------------------------------------------------------------- |
| `app/globals.css`    | Contains `--font-sans` and `--font-serif` variables. | **Override:** Forces all font variables to use "IBM Plex Mono".              |
| `tailwind.config.ts` | Defines the theme's font families.                   | **Reference:** Ensures Tailwind utility classes point to the new mono stack. |

## Tasks

### 1. Inject the Monospaced Stack

Update the `:root` in `app/globals.css` to eliminate variable-width fonts.

- Set `--font-sans`, `--font-serif`, and `--font-mono` to `"IBM Plex Mono", monospace`.
- Adjust `letter-spacing` to `0.05em` for that "printed terminal" rhythm.

### 2. Force Heading Uniformity

Ensure that `h1` through `h6` elements do not use serif fallbacks. The archive must feel like a single, continuous system log.

### 3. Verification

```bash
npm run format
npm run lint
```
