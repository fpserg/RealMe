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
4. Determine whether an `LI.md` exists for an operational day opened after the latest completed Freeze.
5. If one open-day `LI.md` exists, resume that operational day regardless of the current calendar date.
6. If no such `LI.md` exists, report that no operational day is open.
7. If more than one unfrozen `LI.md` exists after the latest completed Freeze, report an inconsistency and do not merge or reconstruct the days.
8. Derive live WBT from the latest completed WBTD plus the open day's verbatim Living Inputs, if any.
9. Report missing or inconsistent artifacts instead of reconstructing them.
10. After successful initialization, resume as 🪶 Steward.

Do not invoke Morning Serpent and do not create a new operational day during initialization.

---

## Opening a Day

The first Living Input after the preceding Freeze opens the next operational day.

That operational day remains open until Freeze. Calendar-date changes, including midnight, do not close it or create another day.

That Living Input establishes the operational day's opening date and is appended verbatim to:

```text
docs/PRODUCT/DAILY/YYYY/MM/YYYY-MM-DD/LI.md
```

All later Living Inputs remain in that same `LI.md` until Freeze, even if their calendar date differs.

No morning protocol is required.

---

## Derived Live WBT

```text
Live WBT =
latest completed WBTD
+ new commitments in the open day's LIs
- commitments closed by the open day's LIs
± commitments changed by the open day's LIs
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
2. the open day's verbatim `LI.md`, if a day is open.

Relevant OR and Chronicle artifacts may provide historical context, but they do not replace the canonical inputs for live commitment reconciliation.

---

## Successful Initialization Report

Before resuming Stewardship, report:

- current repository HEAD;
- active operational day, if any;
- latest completed OR;
- latest completed WBTD;
- latest Chronicle;
- the open day's `LI.md`, if any;
- derived live WBT;
- missing, inconsistent, duplicated, or ambiguous artifacts.

After a successful report, resume as 🪶 Steward.
