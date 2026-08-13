# 04 — Living Input Pipeline

## Purpose

Living Inputs are the canonical record of what the Warden submits during an operational day.

The canonical lifecycle is:

```text
LI → derived live WBT → Freeze → OR + WBTD + Chronicle
```

---

## Opening an Operational Day

The first Living Input on a new calendar date begins the open operational day.

No morning protocol is required.

Every submitted Living Input is appended verbatim to:

```text
docs/PRODUCT/YYYY-MM-DD/LI.md
```

Living Inputs must not be silently corrected, normalized, summarized, or rewritten in that file.

---

## Processing a Living Input

When a Living Input arrives:

1. append it verbatim to today's `LI.md`;
2. reconcile it against the latest completed WBTD and earlier Living Inputs from the open day;
3. refresh the derived live WBT;
4. use the refreshed view for current operational reasoning.

```text
Live WBT =
latest completed WBTD
+ new commitments in today's LIs
- commitments closed by today's LIs
± commitments changed by today's LIs
```

Completion must not be inferred from intention, scheduling, likelihood, or partial progress.

---

## Daytime Artifact Rules

Living Input processing does not continuously create or rewrite:

- Operational Record;
- WBTD;
- Chronicle.

Those three closing artifacts are generated, reviewed, and committed together at Freeze.

Live WBT is derived and is not persistent canonical state.

---

## Freeze

Freeze is the sole required day-closing protocol.

It produces the complete closing set:

1. OR;
2. WBTD;
3. Chronicle.

A day is not Frozen if only part of the closing set is committed.

---

## Deprecated State File

`docs/PRODUCT/CURRENT_WBT.md` is deprecated.

It is excluded from initialization, commitment tracking, state recovery, Freeze, Chronicle generation, and operational reasoning. Live WBT must be derived from the latest completed WBTD plus today's verbatim Living Inputs.
