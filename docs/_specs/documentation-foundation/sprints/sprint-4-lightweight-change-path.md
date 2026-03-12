# Sprint 4 — Lightweight Change Path

## Header

- Goal: define and document the lightweight path for small documentation and
  repository changes that do not justify the full spec-and-sprint workflow.
- Spec sections:
  - Design Goals 4, 6, 7
  - Architecture: Process Weight Model, Concept Model, Documentation Layers
  - Security: Repository Accuracy, Conceptual Precision
  - Testing Strategy: Consistency Review
- Prerequisite: `docs: implement Sprint 3 — power words documentation`
- Expected test count: `1 existing + 0 new = 1 total`

## Available Assets

This sprint depends on the previously implemented documentation set. During
Sprint Doc QA, verify the current method docs so the lightweight path is
described as a complement to the full workflow rather than a contradiction.

| Asset                       | Expected verified details at QA time  | How this sprint uses it                              |
| --------------------------- | ------------------------------------- | ---------------------------------------------------- |
| orchestration-method docs   | Full workflow is already documented   | Establishes what the lightweight path is simplifying |
| README and orientation docs | Landing and reference structure exist | Determines where to expose the lightweight process   |
| current repo command set    | Actual commands remain verified       | Keeps change-path guidance concrete                  |

## Tasks

### 1. Define the lightweight artifact

Choose and document the lightweight artifact format.

Recommended candidate:

- `Change Note`

The artifact should include, at minimum:

- problem
- scope
- invariants
- files expected to change
- verification
- outcome

Verify:

```bash
npm run format:check
```

### 2. Define when to use the lightweight path

Document the decision rule students and contributors should follow.

Required outcomes:

- full workflow for high-impact, ambiguous, multi-domain, or foundational work
- lightweight path for narrow, low-risk, low-ambiguity work
- examples of each category

Verify:

```bash
npm run format:check
```

### 3. Expose the path in the documentation set

Make sure the lightweight change path is visible from the repository’s main
documentation flow.

Required outcomes:

- students can discover the lightweight path from the main docs
- the relationship between the full workflow and the lightweight path is clear
- the new process does not undermine the seriousness of the main method

Verify:

```bash
npm run format:check
```

## Completion Checklist

- [ ] A lightweight artifact format is defined
- [ ] The decision rule between full workflow and lightweight path is documented
- [ ] Examples of when to use each path exist
- [ ] The lightweight path is discoverable from the main docs
- [ ] `npm run format:check` passes

## QA Deviations

None.
