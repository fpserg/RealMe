# 09 — Application State

## Purpose

Define RealMe's operational state and distinguish canonical daily artifacts from derived runtime views.

---

## Operational State

Current operational state is represented by a derived live WBT.

Its canonical inputs are:

1. the latest completed WBTD preceding the open day;
2. today's verbatim Living Inputs.

```text
Live WBT =
latest completed WBTD
+ new commitments in today's LIs
- commitments closed by today's LIs
± commitments changed by today's LIs
```

The derived live WBT contains no independent canonical information.

---

## Lifecycle

- The first Living Input on a new calendar date opens the day.
- Each Living Input is appended verbatim to today's `LI.md`.
- Live WBT is recalculated whenever a new Living Input arrives.
- Live WBT may be discarded and regenerated from its canonical inputs.
- Live WBT is not persistent canonical state.
- Completion must not be inferred from intention, scheduling, likelihood, or partial progress.

---

## Canonical Daily Location

All available artifacts for an operational date are stored under:

```text
docs/PRODUCT/DAILY/YYYY/MM/YYYY-MM-DD/
```

A directory may be incomplete only where the repository's historical record is incomplete or while the current day remains open. Missing artifacts must not be reconstructed.

---

## Persistent Canonical Daily Artifacts

The persistent canonical daily artifacts are:

- verbatim LI for the open or completed day;
- Frozen OR;
- Frozen WBTD;
- Frozen Chronicle.

For a completed day, OR, WBTD, and Chronicle are generated and committed together through Freeze.

WBTD remains part of future operational reasoning because it is the preceding state input for the next open day.

---

## Deprecated CURRENT_WBT

`docs/PRODUCT/CURRENT_WBT.md` is deprecated.

It:

- is not manually synchronized;
- contains no canonical operational state;
- must not be used for initialization, state recovery, commitment tracking, Freeze, Chronicle generation, or reasoning;
- must not receive live commitments.

---

## Relationship to Durable Understanding

The World Model preserves durable understanding.

Daily operational continuity is reconstructed from WBTD and verbatim Living Inputs. The derived live WBT is a runtime view over those canonical artifacts; it does not replace the World Model or the daily historical record.

---

## Design Constraints

Operational state must:

- remain reproducible from canonical inputs;
- distinguish plans and intentions from completed events;
- preserve original Living Inputs verbatim;
- expose missing or inconsistent artifacts rather than fill gaps from conversational memory;
- avoid duplicate persistent state that requires manual synchronization.
