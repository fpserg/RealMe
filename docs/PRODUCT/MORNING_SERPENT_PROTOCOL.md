# Morning Serpent Protocol

## Status

Optional, read-only morning presentation.

Morning Serpent is not required for operational continuity. It does not initialize a day, open a day, close a day, generate a Chronicle, or maintain state.

---

## Purpose

Morning Serpent may present the current operational landscape in a useful morning format without changing canonical repository state.

It may read and present:

- the latest completed WBTD;
- the latest OR and Chronicle where useful;
- the open day's verbatim `LI.md`, if an operational day is open;
- the derived live WBT;
- Steward observations.

---

## Invocation

```text
Morning Serpent
```

Invocation is optional.

If an open-day `LI.md` exists after the latest Freeze, Morning Serpent presents that already open operational day. If no such file exists, Morning Serpent may present the latest completed state but must not create or open a day.

The first Living Input after the preceding Freeze opens the next operational day. Calendar-date changes do not affect the boundary of an open day.

---

## Derived Live WBT

```text
Live WBT =
latest completed WBTD
+ new commitments in the open day's LIs
- commitments closed by the open day's LIs
± commitments changed by the open day's LIs
```

Live WBT is calculated for presentation only. It is not persistent canonical state.

---

## Read-Only Guarantees

Morning Serpent must not:

- initialize or open a day;
- generate, modify, or regenerate a Chronicle;
- create or modify OR or WBTD;
- create, update, or rely on `CURRENT_WBT`;
- maintain canonical or persistent state;
- alter `LI.md`;
- perform repository writes;
- reconstruct missing artifacts from conversational memory.

Missing or inconsistent artifacts must be reported.

---

## Optional Output

Morning Serpent may return:

1. the open operational day and its opening date, or confirmation that no day is open;
2. derived live WBT;
3. relevant context from the latest OR, WBTD, or Chronicle;
4. Steward observations.

This output is a read-only presentation and has no canonical status.
