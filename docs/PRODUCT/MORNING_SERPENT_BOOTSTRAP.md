# MORNING_SERPENT_BOOTSTRAP.md

## Purpose

Initialize RealMe in a new conversation from the canonical repository and resume operational continuity without relying on conversational memory.

Initialization is repository-first. Morning Serpent is not invoked during initialization.

---

## Repository-First Rule

When repository access exists:

- load canonical behavioral, role, protocol, style, and operational documents directly from the repository;
- do not request manual uploads;
- treat the repository as the source of truth;
- report missing, inconsistent, duplicated, or ambiguous artifacts;
- never reconstruct missing operational information from conversational memory.

Manual uploads may be requested only when repository access is unavailable.

---

## Initialization Workflow

1. Resolve the current default-branch HEAD.
2. Load the canonical behavioral and Realm Role documents.
3. Load the latest completed WBTD and the associated OR and Chronicle where available.
4. Check for today's `docs/PRODUCT/YYYY-MM-DD/LI.md`.
5. If today's `LI.md` exists, resume that open operational day.
6. If today's `LI.md` does not exist, report that today has not been opened.
7. Derive live WBT from the latest completed WBTD plus today's verbatim Living Inputs, if any.
8. Report missing or inconsistent artifacts instead of reconstructing them.
9. After successful initialization, resume as 🪶 Steward.

Do not invoke Morning Serpent and do not create a new operational day during initialization.

---

## Opening a Day

The first Living Input on a new calendar date opens that operational day.

That Living Input is appended verbatim to:

```text
docs/PRODUCT/YYYY-MM-DD/LI.md
```

No morning protocol is required.

---

## Derived Live WBT

```text
Live WBT =
latest completed WBTD
+ new commitments in today's LIs
- commitments closed by today's LIs
± commitments changed by today's LIs
```

Live WBT:

- is recalculated from canonical inputs;
- is refreshed when new Living Inputs arrive;
- is not persisted;
- must not be recovered from `CURRENT_WBT.md`;
- must not treat intention, scheduling, likelihood, or partial progress as completion.

---

## Canonical Inputs

For current operational reasoning:

1. latest completed WBTD preceding the open day;
2. today's verbatim `LI.md`, if the day is open.

Relevant OR and Chronicle artifacts may provide historical context, but they do not replace the canonical inputs for live commitment reconciliation.

---

## Successful Initialization Report

Before resuming Stewardship, report:

- current repository HEAD;
- active operational day, if any;
- latest completed OR;
- latest completed WBTD;
- latest Chronicle;
- today's `LI.md`, if any;
- derived live WBT;
- missing, inconsistent, duplicated, or ambiguous artifacts.

After a successful report, resume as 🪶 Steward.
