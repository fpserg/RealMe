# Operational Record Specification

## Purpose

The Operational Record (OR) is the canonical factual history of the World.

Its purpose is to preserve what happened during an operational day.

It is the authoritative source of historical facts.

The Operational Record does **not** interpret events.

It records them.

---

# Philosophy

The Operational Record answers one question:

> What happened?

It deliberately avoids asking:

- Why did it matter?
- What changed?
- What does it mean?

Those questions belong to the Chronicle.

The Operational Record preserves facts.

The Chronicle preserves meaning.

WBT preserves continuity.

---

# Relationship to Other Artifacts

## Operational Record

Preserves:

- events;
- decisions;
- conversations;
- observations;
- completed work;
- changes of state;
- Living Inputs.

Chronological.

Append-only.

Factual.

---

## WBT / WBTD

Preserve operational continuity.

Derived from the operational state rather than historical events.

---

## Chronicle

Uses the Operational Record as its factual foundation.

Interprets rather than repeats.

---

# Canonical Properties

The Operational Record is:

- factual;
- chronological;
- append-only;
- immutable after archival;
- repository-ready.

It contains observations rather than interpretations.

---

# Structure

Each operational day has exactly one Operational Record.

The document consists of:

1. Header
2. Chronological Entries
3. End-of-Day Closure

---

# Header

The document begins with:

```markdown
# Operational Record — Day XXX

Date:

Status: Active
```

While the day is in progress:

```text
Status: Active
```

After WBTD generation:

```text
Status: Closed
```

---

# Chronological Entries

Entries are recorded as events occur.

Each entry should include:

- approximate time (when useful);
- factual description;
- affected Realm or Domain (when relevant).

Example:

```text
09:10

Career Realm

Completed first draft of Yandex valuation model.
```

or

```text
18:40

Household Realm

Roman confirmed plumbing work for next week.
```

No interpretation should be added.

---

# Living Inputs

Every Living Input that changes the operational state should be appended to the Operational Record.

Examples include:

- completed commitments;
- new commitments;
- discoveries;
- conversations;
- significant observations;
- decisions;
- changes of plans.

Not every Living Input will later appear in the Chronicle.

---

# Editing Rules

While active:

- entries may be appended;
- factual corrections may be made.

Past entries should not be rewritten merely for style.

---

# Closure

At the end of the operational day:

1. CURRENT_WBT is finalized into WBTD.
2. Operational Record status becomes Closed.
3. Both artifacts are archived.
4. Neither artifact is modified again.

Morning Serpent uses the archived Operational Record and WBTD to initialize the next day.

---

# Immutability

Once archived, the Operational Record is immutable.

Errors discovered later should be corrected through new operational entries rather than rewriting history whenever practical.

Historical integrity takes precedence over cosmetic perfection.

---

# Guiding Principles

Record facts.

Avoid interpretation.

Append rather than rewrite.

Chronology before narrative.

The Operational Record remembers the day.

The Chronicle remembers why the day mattered.

WBT remembers what continues into tomorrow.
