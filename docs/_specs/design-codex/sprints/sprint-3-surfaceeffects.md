# Sprint 3 — Surface Effects

## Header

- **Goal:** Implement "Phosphor Glow" and "CRT Scanline" visual effects to reinforce the 1970s terminal metaphor.
- **Status: COMPLETE**
- **Spec sections:**
  - Problem Statement: Flat modern UI breaks the "Declassified Archive" immersion.
  - Design Goals: CRT Bloom, Scanline Overlays, and High-Contrast Borders.
  - Architecture: CSS Animation keyframes and Global Filter effects.
  - Security: Performance optimization (ensuring filters don't lag the browser).
  - Testing Strategy: Accessibility contrast verification (WCAG).
- **Prerequisite:** Sprint 2 (Typography Engine) complete.
- **Expected test count:** `0 existing + 0 new = 0 total`

## Available Assets

| Asset                    | Verified details         | How this sprint uses it                                                 |
| :----------------------- | :----------------------- | :---------------------------------------------------------------------- |
| `app/globals.css`        | Main stylesheet.         | **Bloom:** Adds `text-shadow` to create "Phosphor Bleed" effects.       |
| `components/ui/card.tsx` | UI container component.  | **Geometry:** Forces all `border-radius` to `0px` for industrial edges. |
| `tailwind.config.mjs`    | Framework configuration. | **Animations:** Defines the "Flicker" and "Scanline" keyframes.         |

## Tasks

### 1. Implement Phosphor Bloom (The Glow)

Create the "Glow" effect seen on old monochrome monitors to make the Phosphor Green pop.

- **Action:** Add a custom `text-shadow` utility to the green text.
- **Action:** Apply a subtle `box-shadow` (outer glow) to primary borders and buttons.

### 2. CRT Scanline Overlay

Inject a subtle, moving scanline effect to give the screen a "Hardware" feel.

- **Action:** Create a CSS linear-gradient overlay that moves vertically across the screen.
- **Action:** Implement a 1% opacity "Flicker" animation to mimic vintage power cycles.

### 3. Industrial Geometry Cleanup

Remove all "Modern" rounded corners that contradict the Sage archetype.

- **Action:** Globally override all Tailwind `rounded-*` classes to `rounded-none`.
- **Action:** Ensure all dividers and borders are exactly `1px` solid Phosphor Green.

## Completion Checklist

- [x] Phosphor Bloom (text-shadow) applied to all H1 and H2 tags.
- [x] Scanline overlay active and visible at low opacity.
- [x] All rounded corners (buttons, cards, inputs) set to `0px`.
- [x] High-contrast border logic applied to the Main Navigation.
- [x] `npm run format:check` passes.
- [x] `npm run lint` passes.

## QA Summary

- **QA target:** Visual fidelity check at 100% zoom in Safari and Chrome.
- **Spec coverage confirmed:**
  - The "Sage" archetype is supported by high-legibility, high-contrast glow.
  - The "Declassified" metaphor is reinforced by the CRT scanline layer.
- **Verification result:** SUCCESS.

---

## **Curator’s Log & Technical Note**

**Added by Jefferson Rodas (March 31, 2026):**

> Sprint 3 successfully finalized the "Declassified Archive" aesthetic. During implementation, I encountered a layering issue where the scanlines were disappearing behind the content. I resolved this by refactoring the `layout.tsx` to include a dedicated `#crt-overlay` component with a high `z-index`. I also applied a high-specificity CSS reset to the `border-radius` property to eliminate lingering "modern" rounded corners from the original template, ensuring a 100% brutalist presentation for the 9:00 AM milestone.
