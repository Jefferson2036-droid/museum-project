# Site Implementation Codex: The DevOps Archive Architecture

This codex serves as the technical blueprint for the **History of DevOps** repository. It maps the design intent of the "Declassified Archive" to the specific React components, CSS tokens, and data structures used to build the experience.

## 1. Route Map & Page Categories

The site utilizes the **Next.js App Router** to create a structured, non-linear exhibition.

| Route Path                  | Category            | Purpose                                             |
| :-------------------------- | :------------------ | :-------------------------------------------------- |
| `app/(exhibition)/era/[id]` | **Primary Route**   | The 7-chapter backbone of the DevOps chronology.    |
| `app/(companion)/people`    | **Support Gallery** | Narrative profiles of actors and institutions.      |
| `app/(companion)/map`       | **Technical Guide** | A reading map of primary source documents.          |
| `app/(companion)/glossary`  | **Reference**       | Technical vocabulary and "Math Guide" translations. |

## 2. Component Catalog: The Building Blocks

The UI is constructed from "Industrial Primitives" found in `components/content/chapter/`. These are the "Hardware" of the museum.

### Chapter Shells

- **`ChapterHero`**: The entry point for every era. It accepts an `eyebrow` (Era #), `title`, and `lede`.
- **`ChapterSection`**: The standard container that creates the vertical rhythm of the archive.
- **`ChapterVisualBreak`**: Injects full-width "Atmospheric Evidence" (images) to break up dense technical logs.

### Editorial Surfaces

- **`NarrativeCardGrid`**: The engine that transforms raw data from `lib/narrative-data.ts` into visual "Source Anchors" and "Profile Cards."
- **`EditorialCard`**: A flexible grid item used for secondary evidence and external links.

## 3. CSS Architecture & Token System

The "Terminal" look is enforced through the global design system in `app/globals.css`.

### Core Tokens (The Phosphor Palette)

We have hijacked the default theme to enforce a high-contrast industrial aesthetic:

- `--background`: `#121212` (Terminal Screen)
- `--foreground`: `#32CD32` (Primary Phosphor)
- `--border`: `#32CD32` (Rigid Hardware Edges)

### Layout Classes

- `.chapter-shell`: The main layout constraint that ensures a readable "reading measure."
- `.phi-spacing`: A spacing system based on the Golden Ratio to ensure mathematical harmony in the vertical rhythm.

## 4. Data Architecture: The Narrative Engine

Content is decoupled from the UI to ensure "Repository Accuracy."

- **Source of Truth:** `lib/narrative-data.ts`
- **Data Types:** \* `NarrativeProfile`: Defines the people and organizations (e.g., Gene Kim, Puppet Labs).
  - `HistoricalAnchor`: Defines the primary evidence (e.g., The Agile Manifesto).
- **Filtering:** Components use standard TypeScript filter methods to pull only the actors relevant to the specific Era being viewed.

## 5. Media Pipeline: The Evidence System

Images are treated as technical artifacts, managed by a specialized pipeline:

- **Focal Point System:** `components/media/focal-image.tsx` ensures that regardless of screen size, the "Evidence" stays centered on the most important part of the image.
- **Metadata:** Stored in `lib/generated/image-focus-map.ts`.
- **Processing:** Updated via `npm run generate:image-focus`.

## 6. Verification & Quality Gates

To maintain "Sage-level" discipline, the following commands must be run before any "Deployment" (Push to GitHub):

- `npm run lint`: Checks for code errors and persona-breaking patterns.
- `npm run format:check`: Ensures the Markdown and code stay within the professional "Manual" style.
- `npm run build`: Verifies that the entire "Archive" compiles without system failure.

## 7. Adaptation Rules for Coding Agents

When adding a new Era or Topic to this archive:

1. **Preserve the Rhythm:** Always wrap content in a `ChapterSection`.
2. **Use the Grid:** Do not create custom CSS for cards; use the `NarrativeCardGrid`.
3. **Evidence First:** Every new section must include at least one `HistoricalAnchor` to maintain curatorial integrity.
4. **No Rounded Corners:** All new UI elements must maintain a `border-radius: 0` to fit the industrial metaphor.

---

**Last Updated:** March 2026  
**Status:** Verified via `npm run format:check`
