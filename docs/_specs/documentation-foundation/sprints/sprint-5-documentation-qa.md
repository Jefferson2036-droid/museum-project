# Sprint 5 — Documentation QA

## Header

- Goal: perform the formal QA pass across the documentation foundation, resolve
  inconsistencies, and leave the repository with a coherent student-facing
  documentation system.
- Spec sections:
  - All sections of `docs/_specs/documentation-foundation/spec.md`
- Prerequisite: `docs: implement Sprint 4 — lightweight change path`
- Expected test count: `1 existing + 0 new = 1 total` unless QA fixes require
  new smoke coverage

## Available Assets

This sprint is intentionally a QA sprint. At QA time, the reviewer must read
the documentation foundation spec, all documentation foundation sprint docs,
the implemented documentation artifacts, and any repository files referenced by
the docs.

| Asset                                           | Verified details required at QA time    | How this sprint uses it   |
| ----------------------------------------------- | --------------------------------------- | ------------------------- |
| `docs/_specs/documentation-foundation/spec.md`  | Final approved documentation contract   | Primary audit source      |
| `docs/_specs/documentation-foundation/sprints/` | Sprint 0 through Sprint 4 docs          | Planned-work audit source |
| implemented README and durable docs             | Actual student-facing documentation set | QA review target          |
| repository commands and structure               | Real repo state                         | Accuracy verification     |

## Tasks

### 1. Audit documentation against the spec

Review the implemented documentation set against every section of the spec.

Required checks:

- project purpose is clear
- product versus pedagogy distinction is clear
- technology orientation exists
- orchestration concepts are explicit and accurate
- process-weight model is visible and coherent
- named references are concrete rather than decorative

Verify:

```bash
npm run format:check
```

### 2. Audit documentation against Sprint 0 through Sprint 4

Verify that each planned deliverable exists or has a documented deviation.

Required outcomes:

- landing docs align with the sprint intent
- durable reference docs exist outside `docs/_specs/`
- any missing pieces are identified precisely

Verify:

```bash
npm run format:check
```

### 3. Fix inconsistencies and accuracy issues

Apply the smallest documentation changes necessary to bring the set back into
alignment.

Required outcomes:

- repository commands remain correct
- no document contradicts another
- any deviation from the sprint plan is recorded explicitly

Verify:

```bash
npm run format:check
npm run lint
```

### 4. Produce the documentation QA report

Document the outcome of the QA pass.

Required outcomes:

- verdict is either `PASS (0 issues)` or a concise list of resolved issues
- documentation gaps and fixes are recorded clearly
- final state is understandable to a future reviewer

Recommended artifact:

- append the QA report to this sprint doc or create a clearly named companion
  QA report in the same feature folder

Verify:

```bash
npm run format:check
```

## Completion Checklist

- [ ] Documentation has been audited against the spec
- [ ] Documentation has been audited against Sprint 0 through Sprint 4
- [ ] Any inconsistencies have been fixed
- [ ] Final command and artifact references are accurate
- [ ] A QA report exists with a clear verdict
- [ ] `npm run format:check` passes

## QA Deviations

None.
