# CURRENT_WBT — Deprecated

## Status

This file contains no canonical operational state.

Live WBT is derived as:

```text
Live WBT =
latest completed WBTD
+ new commitments in today's LIs
- commitments closed by today's LIs
± commitments changed by today's LIs
```

The canonical inputs are:

- the latest completed WBTD preceding the open day;
- today's verbatim `LI.md`, if the day is open.

## Prohibited Uses

This file must not be used for:

- initialization;
- Freeze;
- Chronicle generation;
- commitment tracking;
- state recovery;
- operational reasoning.

Completion must not be inferred from intention, scheduling, likelihood, or partial progress.

Live commitments must not be written into this file. Derived live WBT is recalculated from its canonical inputs and is not persisted here.
