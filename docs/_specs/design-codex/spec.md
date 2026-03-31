# Design Codex Specification

> **Status:** In progress

## Problem Statement

The current "AI History" design uses a warm, academic aesthetic that feels like a modern digital textbook. This creates a functional and narrative disconnect for a **DevOps Museum** because:

1. **Industrial Context:** DevOps is rooted in the "Industrialization of Software," requiring a high-contrast, mechanical visual language.
2. **Archetype Mismatch:** The "Sage" archetype for this project demands a "Command Center" feel rather than a "Library" feel.
3. **Visual Urgency:** Existing serif typography and soft parchment colors lack the "Precision" and "Technical Authority" associated with site reliability and automated pipelines.

## Design Goals

1. **Establish a "Terminal" Aesthetic:** Use high-contrast phosphor green on dark surfaces to mimic 1970s mainframe consoles.
2. **Reinforce Technical Authority:** Use monospaced typography to treat every line of text like a "system log" or "technical manual."
3. **Hardware Metaphor:** Implement a "Putty Gray" background to simulate the plastic casings of early hardware (IBM/DEC era).
4. **Visual Hierarchy:** Use sharp, 90-degree angles to represent the rigid structures of early computing and modern automation.
5. **Atmospheric Immersion:** Introduce CRT-style visual artifacts (scanlines and flicker) to ground the user in a historical "Technical Archive."

## Architecture

### Migration Strategy

This migration follows the **Browser Enhancements** pattern, treating the visual overhaul as a non-breaking "skin" applied to the existing Next.js components:

- **The Token Layer:** Centralized CSS variables in `app/globals.css` to control the palette globally.
- **The Component Layer:** Ensuring all components inherit the new design tokens without modifying their core logic.
- **The Layout Layer:** Applying global styles (e.g., CRT scanlines, sharp edges) to the main layout container for consistency.

The green color, specifically "Phosphor Green" (#32CD32), is chosen to replicate the aesthetic of vintage CRT monitors, aligning with the "Terminal" and "Retro-Futurist" design goals.

- **The Surface Layer:** Global CSS filters (Scanlines/Glow) applied to the main layout container.
- **The Typography Engine:** A monospaced font stack integrated into the Tailwind configuration.
- **The Content Model:** Mapping 30 DevOps Tech Topics into the existing 7-Era structure.

## Extraction Model

- **Surface Level:** Extracting the "Brand Blue" and replacing it with "Phosphor Green" (#32CD32).
- **Structural Level:** Maintaining the `ChapterHero` and `ChapterSection` layouts but removing modern "Border Radius" (rounded corners) to favor industrial sharp edges.
- **Process Level:** Executing the transition across 5 disciplined sprints to ensure no breaking changes to the underlying React logic.

## Site Patterns That Must Be Documented

- **CRT Scanline Overlay:** A persistent linear-gradient overlay applied to the `main` viewport.
- **Phosphor Glow (Text-Shadow):** A specific CSS utility for headers to simulate light-emitting hardware displays.
- **Monospace Scaling:** A custom typographic scale for `h1` through `h6` using `IBM Plex Mono`.

## Adaptation Rules

- **Subject Matter:** Transitioning from "Artificial Intelligence" to "The Engineering of Velocity."
- **Metaphor:** The site is no longer an "Electronic Book"; it is a **Declassified Technical Archive.**
- **Restraint:** Eliminating all "Soft Shadows" and "Gradients" in favor of flat, high-contrast industrial surfaces.

## Security

- **Accessibility (A11y):** Ensuring the high-contrast green-on-gray palette meets WCAG AA standards for legibility.
- **Performance:** Using native CSS effects rather than heavy image files for scanlines to maintain a high Lighthouse performance score.

## Testing Strategy

1.  **Visual Regression:** Cross-browser check (Chrome/Safari) to ensure CSS "Glow" effects render consistently.
2.  **Linting Pass:** Running `npm run lint` to confirm all hardcoded colors have been replaced by the new "Retro-Futurist" tokens.
3.  **Build Verification:** Running `npm run build` to ensure the CSS overhaul does not interfere with the Next.js static export.

## Sprint Plan

This workstream follows the **Browser Enhancements** method, prioritizing visual stability and incremental verification of the "Sage" terminal aesthetic.

| Sprint       | Goal                  | Artifacts / Actions                                                                                 | Verification Baseline                                                          |
| :----------- | :-------------------- | :-------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------- |
| **Sprint 0** | **Design Definition** | Update `spec.md` with Retro-Futurist goals and Phosphor Green palette rules.                        | Manual Markdown lint pass; Peer review of Sage persona alignment.              |
| **Sprint 1** | **Token Migration**   | Update `:root` variables in `app/globals.css` with Phosphor Green (#32CD32) and Charcoal (#121212). | `npm run lint` (Ensure CSS variable consistency); `npm run build`.             |
| **Sprint 2** | **Typography Engine** | Implement **IBM Plex Mono** stack; scale headers for "Technical Manual" hierarchy.                  | Visual audit of font-loading; `npm run format:check`.                          |
| **Sprint 3** | **Surface Effects**   | Integrate CRT Scanline linear-gradients and "Phosphor Glow" (text-shadow: 0 0 5px) utilities.       | `npm run build` (Verify CSS compilation); Cross-browser visual check.          |
| **Sprint 4** | **Component Audit**   | Remove modern "rounded-lg" classes and soft shadows to enforce sharp, industrial 90-degree edges.   | `npm run test` (Ensure UI logic remains intact); Final visual regression pass. |

## Verification Baseline Detail

Each sprint is considered "Done" only when it meets the following criteria

1. **Artifact Accuracy:** The code changes must perfectly reflect the "Phosphor Green" visual goals defined in Sprint 0.
2. **Linting Pass:** `npm run lint` must return zero errors, specifically checking for CSS variable consistency in `app/globals.css`.
3. **Build Integrity:** `npm run build` must succeed, confirming the site is ready for static deployment to GitHub Pages.
4. **Visual Grounding:** The site must be manually verified against the "Declassified Technical Archive" reference images (e.g., image_0.png).
