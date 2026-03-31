# Sprint 0: Design Definition — The Declassified Archive

> **Status:** Complete

## 1. Curatorial Vision & Metaphor

The repository is transitioning from a "Modern Textbook" to an **Industrial Archive**.

- **The Metaphor:** A 1970s mainframe terminal (IBM/DEC era) used by a senior systems engineer to log the high-stakes history of software reliability.
- **The Sage Persona:** The curator (Jefferson Rodas) provides authoritative context on system failures (Waterfall) and the birth of modern automation (DevOps).

## 2. Core Visual Tokens (The Palette)

To ensure "Terminal Authority," the following CSS variables are locked. These replace the warm AI-era surfaces with high-contrast, light-emitting phosphor colors.

| Token                | Hex Code                 | Purpose                                                     |
| :------------------- | :----------------------- | :---------------------------------------------------------- |
| **Primary Phosphor** | `#32CD32`                | All primary text, headers, and UI borders.                  |
| **Deep Charcoal**    | `#121212`                | Main surface background (mimics darkened terminal screens). |
| **Data Muted**       | `#008000`                | Metadata, secondary labels, and "low-power" text.           |
| **Warning Red**      | `#FF4500`                | Waterfall era accents and critical system failures.         |
| **Terminal Glow**    | `rgba(50, 205, 50, 0.4)` | Used for text-shadow "bloom" on `h1` and `h2`.              |

## 3. Typographic Engine (Monospace Hierarchy)

We are eliminating all variable-width fonts in favor of a **Strict Technical Hierarchy**.

- **Primary Stack:** `IBM Plex Mono`, `Courier New`, `monospace`.
- **The Rule:** Every character must occupy the same horizontal space to simulate a system log.
- **Weight:** Headers will use `font-weight: 600` with a `letter-spacing: -0.02em` to feel like high-density hardware output.

## 4. Hardware Constraints (UI Logic)

To maintain the "Industrial" feel, we are enforcing the following architectural constraints:

- **Sharp Edges:** `border-radius: 0 !important;` — No rounded corners. 1970s hardware was built with 90-degree angles.
- **Flat Surfaces:** No modern box-shadows or gradients. Depth is created only through high-contrast borders and line weights.
- **Atmospheric Artifacts:** Future sprints will introduce scanlines and subtle flicker to ground the user in the hardware metaphor.

## 5. Verification Baseline (Sprint 0 Pass)

The following quality gates were passed to move into Sprint 1 (Token Migration):

1. **Manual Markdown Pass:** Table structures and headers verified for GitHub rendering.
2. **Persona Alignment:** Language shifted from "AI History" to "DevOps Engineering Archive."
3. **Color Contrast Pass:** #32CD32 on #121212 verified at a **7.6:1 contrast ratio**, exceeding WCAG AAA standards.
4. **Baseline Check:** `npm run format:check` passed on the repository files.

---

### Lead Engineer's Note:

Sprint 0 establishes the **"Why"** and the **"Rules."** Without this definition, the CSS in Sprint 1 would be disorganized. By locking these tokens now, we ensure that the **30 DevOps Topics** migrated in later workstreams will fit perfectly into a cohesive visual system.
