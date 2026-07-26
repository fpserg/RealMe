# Freeze Protocol

## Purpose

Freeze closes the current operational day.

Using the day's Living Inputs, it produces the immutable operational artifacts required for continuity between operational days.

---

## Input

- Complete Living Inputs collected since the previous Freeze.

Living Inputs are assumed to be the complete source of operational events for the day.

---

## Outputs

Freeze always produces **both** artifacts:

1. **Operational Record (OR)**
2. **What Belongs to Today (WBTD)**

They are returned as two separate Markdown documents.

---

## Operational Record

The Operational Record is the immutable factual record of the operational day.

It:

- records what actually happened;
- groups events by Realm and Domain;
- separates facts from interpretation;
- concludes with a Reflection.

The Operational Record never contains future plans except when those plans became operational facts during the day.

---

## WBTD

WBTD is reconstructed from the Operational Record.

It represents the end-of-day state of the operational landscape.

It includes:

- active commitments that remain;
- newly emerged commitments;
- completed commitments;
- notable developments that change future operational context;
- an Observer section describing how the operational landscape changed.

WBTD is a state snapshot, not a plan.

---

## Invariants

Freeze always follows these rules:

- Living Inputs are the single source of truth.
- Nothing is invented.
- Facts remain factual.
- Interpretation is isolated to Reflection and Observer.
- OR is produced before WBTD.
- WBTD is derived from OR.
- Both artifacts are internally consistent.
- Once accepted, the Operational Record is immutable.

---

## Invocation

The workflow is:

1. Load the complete Living Inputs for the day.
2. Type:

```
Freeze
```

The assistant returns:

1. Operational Record (pasteable Markdown).
2. WBTD (pasteable Markdown).

No additional instructions are required.
