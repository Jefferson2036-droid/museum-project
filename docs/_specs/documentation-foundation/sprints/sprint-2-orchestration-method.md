# Sprint 2 — Orchestration Method Documentation

## Header

- Goal: create durable documentation for the orchestration method used in this
  repository, including drift, context limits, artifact memory, verification,
  the spec/sprint/implementation/QA lifecycle, the user prompting style, and
  concrete examples of human/AI collaboration in this repository.
- Spec sections:
  - Design Goals 1, 4, 6, 7
  - Architecture: Documentation Layers, Concept Model, Process Weight Model,
    Documentation Placement Rules
  - Security: No False Authority, Conceptual Precision
  - Testing Strategy: Concept Coverage, Consistency Review
- Prerequisite: `docs: implement Sprint 1 — technology orientation`
- Expected test count: `1 existing + 0 new = 1 total`

## Available Assets

This sprint depends on implemented outputs from prior documentation sprints.
During Sprint Doc QA, verify the actual README and durable docs structure
before implementation.

| Asset                         | Expected verified details at QA time                         | How this sprint uses it                           |
| ----------------------------- | ------------------------------------------------------------ | ------------------------------------------------- |
| `README.md`                   | Landing narrative exists                                     | Links to deeper orchestration docs                |
| technology-orientation docs   | Durable docs location exists                                 | Keeps method docs distinct from stack orientation |
| `docs/_specs/example_spec.md` | Process guide exists                                         | Provides the canonical workflow model             |
| current sprint/spec artifacts | Site foundation and documentation foundation artifacts exist | Supplies real examples of the method in action    |

## Tasks

### 1. Create the orchestration-method reference document

Create a durable student-facing document that teaches the method explicitly.

Required concepts:

- drift
- context-window or session-memory limits
- artifact memory
- role, scope, invariants, acceptance criteria, sequencing, verification
- why the repository uses specs and sprint docs
- the prompting style used to direct the assistant in this workflow
- worked examples showing how a human request becomes a bounded execution loop

Key implementation details:

- Define the terms operationally, not rhetorically.
- Use repository examples where possible.
- Keep the tone serious and concrete.

Verify:

```bash
npm run format:check
```

### 2. Explain the lifecycle with repository-grounded examples

Teach the process by pointing to the artifacts already present in the repo.

Required outcomes:

- explain what a spec is in this repository
- explain what a sprint doc is in this repository
- explain how implementation and QA relate to those artifacts
- explain why durable artifacts matter for LLM-assisted work
- include at least one concrete example of how the user and assistant interact:
  request -> clarification of scope -> artifact creation -> implementation ->
  verification

Verify:

```bash
npm run format:check
```

### 3. Explain the prompting style used in this repository

Document the operating style used to direct the assistant effectively.

Required outcomes:

- explain the emphasis on role framing, scope boundaries, invariants,
  acceptance criteria, sequencing, and verification
- explain why this prompting style is used for serious work rather than ad hoc
  conversational requests
- keep the examples grounded in how this repository is actually being run

Verify:

```bash
npm run format:check
```

### 4. Introduce the process-weight distinction

Prepare readers for the difference between foundational work and lightweight
changes.

Required outcomes:

- explain that not every update deserves full ceremony
- reserve the detailed lightweight path for Sprint 4
- make the distinction visible now so the method feels intentional rather than
  bureaucratic

Verify:

```bash
npm run format:check
```

## Completion Checklist

- [ ] Durable orchestration-method docs exist outside `docs/_specs/`
- [ ] Drift, context limits, artifact memory, and verification are defined clearly
- [ ] The repository lifecycle is explained with real artifacts
- [ ] The prompting style is explained in a clear student-facing way
- [ ] At least one concrete collaboration example is documented
- [ ] The distinction between foundational work and smaller changes is introduced
- [ ] `npm run format:check` passes

## QA Deviations

None.
