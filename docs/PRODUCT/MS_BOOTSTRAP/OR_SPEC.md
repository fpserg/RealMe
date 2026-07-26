# Operational Record Specification

## Purpose

The Operational Record (OR) is the canonical factual history of an operational day.

Its purpose is to preserve an accurate, chronological record of what occurred while the World was unfolding.

The Operational Record is the authoritative historical source used by RealMe.

It records facts.

It does not interpret them.

---

# Philosophy

The Operational Record answers one question:

> **What happened?**

It deliberately does not answer:

- Why did it matter?
- What changed?
- What does it mean?

Those questions belong to the Chronicle.

The Operational Record preserves facts.

The Chronicle preserves meaning.

CURRENT_WBT preserves continuity.

---

# Constitutional Role

The Operational Record is the canonical factual history of the World.

It serves as the factual foundation for:

- WBTD generation;
- Chronicle generation;
- Morning Serpent.

Whenever historical facts are required, the Operational Record is authoritative.

---

# Relationship to Other Artifacts

## CURRENT_WBT

Represents the live operational state of the current day.

Changes throughout the day.

Not historical.

---

## WBTD

Represents the final operational state of the completed day.

Derived from CURRENT_WBT.

Preserves operational continuity.

---

## Chronicle

Interprets the completed day.

Uses the Operational Record as its factual foundation.

Preserves meaning rather than chronology.

---

# Canonical Properties

An Operational Record is:

- factual;
- chronological;
- append-only;
- repository-ready;
- immutable after archival.

It records observations rather than interpretations.

---

# Structure

Each operational day has exactly one Operational Record.

An Operational Record consists of:

1. Header
2. Chronological Entries
3. Closure

The internal formatting may evolve provided these three components remain present.

---

# Header

The Header identifies the operational day.

It includes:

- day identifier;
- date;
- operational status.

Example:

```text
# Operational Record — Day 034

Date:

Status: Active
```

The exact formatting is not constitutionally significant.

---

# Chronological Entries

Entries are appended as the day unfolds.

Each entry records one factual event.

An entry may include, where appropriate:

- approximate time;
- affected Realm or Domain;
- factual description.

Interpretation should not be included.

---

# Living Inputs

Every Living Input that changes the operational state of the World should be recorded in the Operational Record.

Examples include:

- completed work;
- new commitments;
- decisions;
- discoveries;
- conversations;
- significant observations;
- changes of plans.

Not every Living Input will later appear in the Chronicle.

---

# Editing Rules

While the Operational Record is Active:

- factual entries may be appended;
- factual mistakes may be corrected.

Historical entries should never be rewritten merely for style or narrative quality.

---

# Closure

At the end of the operational day:

1. CURRENT_WBT becomes WBTD.
2. The Operational Record becomes Closed.
3. Both artifacts are archived.

After archival, neither artifact is modified.

Morning Serpent uses these archived artifacts to initialize the next operational day.

---

# Historical Integrity

Once archived, the Operational Record is immutable.

If a historical error is discovered later, correction should normally occur through a new factual entry rather than rewriting history.

Historical integrity takes precedence over cosmetic perfection.

---

# Guiding Principles

Facts before interpretation.

Chronology before narrative.

Append rather than rewrite.

The Operational Record remembers the day.

The Chronicle remembers why the day mattered.

CURRENT_WBT remembers what continues into tomorrow.