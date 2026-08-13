# Freeze Protocol

## Purpose

Freeze is the sole required day-closing protocol.

It closes one open operational day and produces the complete immutable closing set required for continuity:

1. Operational Record (OR)
2. What Belongs to Today (WBTD)
3. Chronicle

A day is not Frozen unless all three artifacts have been generated, reviewed, and committed together.

---

## Invocation

```text
Freeze
```

Freeze applies to the currently open operational day.

---

## Inputs

Freeze requires:

- the latest completed WBTD preceding the open day;
- the open day's complete `LI.md`.

The original Living Inputs remain verbatim. Freeze must never alter, normalize, correct, or paraphrase `LI.md`.

Canonical repository artifacts take precedence over conversational memory. Missing or inconsistent inputs must be reported rather than reconstructed from memory.

---

## Execution Order

### 1. Operational Record

Produce the OR first from the open day's complete Living Inputs.

The OR:

- records what actually happened;
- groups events by Realm and Domain;
- separates facts from interpretation;
- may conclude with a Reflection;
- does not treat an intention, schedule, expected action, partial progress, or likely outcome as completion.

### 2. WBTD

Reconcile the latest completed WBTD through every Living Input in the open day's `LI.md`.

```text
Live WBT =
latest completed WBTD
+ new commitments in today's LIs
- commitments closed by today's LIs
± commitments changed by today's LIs
```

The WBTD records the resulting end-of-day operational landscape, including active, completed, new, closed, or changed commitments only where supported by the Living Inputs.

Completion is never inferred from intention, scheduling, likelihood, or partial progress.

### 3. Chronicle

Generate the Chronicle from the finalized OR and finalized WBTD, using the canonical Chronicle style guidance and World Model where applicable.

The Chronicle is part of the same Freeze closing set. It is not deferred until the following morning.

### 4. Review and Commit

Review OR, WBTD, and Chronicle together for:

- factual fidelity to the verbatim Living Inputs;
- consistency between the three artifacts;
- correct commitment reconciliation;
- unsupported completion claims;
- missing or contradictory state transitions.

Commit all three closing artifacts together. If only part of the set is committed, the day is not Frozen.

---

## State Rules

- No persistent `CURRENT_WBT` is used.
- Live WBT is a derived view, not a canonical persisted artifact.
- Living Inputs remain verbatim.
- A normal Freeze never rewrites a Frozen day.
- Frozen artifacts are immutable except through the explicit amendment workflow below.
- Nothing is invented.
- Interpretation remains distinct from fact.
- WBTD remains an input to future operational reasoning.

---

## Amend Freeze

### Invocation

```text
Amend Freeze YYYY-MM-DD
```

This is the only workflow permitted to amend a Frozen day.

### Required Basis

An amendment requires an explicit factual correction or an approved amendment basis from the Warden. It must never be inferred from conversational memory or used to silently improve wording.

### Workflow

1. Identify the Frozen source artifacts for `YYYY-MM-DD`: the verbatim `LI.md`, OR, WBTD, and Chronicle, together with the preceding completed WBTD and any dependent later state.
2. Record the explicit factual correction or approved amendment basis.
3. Preserve the original `LI.md` verbatim.
4. Disclose which closing artifacts and later derived state are affected before changing them.
5. Regenerate only the affected closing artifacts and any dependent later state required for consistency.
6. Commit the change with an explicit amendment message identifying the amended date and basis.
7. Re-fetch and verify every amended remote file and report the resulting commit.

If the amendment basis is missing, ambiguous, or unsupported, stop and request clarification.

---

## Completion Criteria

Freeze completes only when:

- OR, WBTD, and Chronicle exist for the open day;
- all three were reviewed as one closing set;
- all three were committed together;
- the remote files were re-fetched and verified;
- no completion was inferred from intention;
- the original Living Inputs remain unchanged.
