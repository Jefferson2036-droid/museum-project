# Sprint 3 — Power Words Documentation

## Header

- Goal: document the curated set of named frameworks and practitioner references
  used in this repository, with each one tied to a concrete lesson or quality
  standard.
- Spec sections:
  - Design Goals 3, 4, 5, 7
  - Architecture: Concept Model, Power Words Model, Documentation Layers
  - Security: Conceptual Precision, No False Authority
  - Testing Strategy: Concept Coverage, Consistency Review
- Prerequisite: `docs: implement Sprint 2 — orchestration method documentation`
- Expected test count: `1 existing + 0 new = 1 total`

## Available Assets

This sprint depends on the implemented orchestration and orientation docs. During
Sprint Doc QA, verify their exact locations and ensure each referenced name maps
to a real repository lesson rather than unsupported theory.

| Asset                                                                      | Expected verified details at QA time   | How this sprint uses it                              |
| -------------------------------------------------------------------------- | -------------------------------------- | ---------------------------------------------------- |
| orchestration-method docs                                                  | Defines the broader process vocabulary | Connects power words to the execution method         |
| technology-orientation docs                                                | Establishes the technical foundation   | Prevents power-word docs from duplicating stack docs |
| `docs/_specs/site-foundation/` and `docs/_specs/documentation-foundation/` | Existing repository planning artifacts | Supplies concrete local examples                     |

## Tasks

### 1. Define the power-word concept carefully

Create or update documentation that explains named frameworks and practitioner
references as compressed engineering intent.

Required outcomes:

- explain why names are useful
- explain the risk of empty name-dropping
- define the local contract: every name must change execution, evaluation, or
  design decisions in this repository

Verify:

```bash
npm run format:check
```

### 2. Curate the initial named-reference set

Document the initial set of references chosen for this repository.

Recommended core set:

- GoF
- Robert C. Martin
- Donald Knuth
- Kent Beck
- Martin Fowler
- Ward Cunningham
- Steve Krug

For each entry, explain:

- who or what it refers to
- what problem it helps students reason about
- how it maps to this repository’s method or quality expectations

Verify:

```bash
npm run format:check
```

### 3. Connect power words to repository artifacts

Anchor the named references to concrete examples in this repo.

Required outcomes:

- at least some references point to actual specs, sprints, or implementation
  choices in the repository
- the docs avoid sounding mystical or ornamental
- the material supports student judgment rather than passive memorization

Verify:

```bash
npm run format:check
```

## Completion Checklist

- [ ] Power words are defined as compressed engineering intent
- [ ] The initial named-reference set is curated and justified
- [ ] Every included name has a concrete repository-relevant lesson
- [ ] The docs avoid decorative name-dropping
- [ ] `npm run format:check` passes

## QA Deviations

None.
