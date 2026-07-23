# 04 — Living Input Pipeline

Living Inputs are the primary mechanism by which the World Model evolves.

RealMe does not update once per day.

It lives continuously through Living Inputs.

The pipeline transforms natural conversation into persistent understanding while maintaining an up-to-date operational picture of the day.

---

# Daily Lifecycle

Every operational day follows the same lifecycle.

```
Morning Serpent
        │
        ▼
Living Inputs (0..N)
        │
        ▼
World Model Reconciliation
        │
        ▼
Operational Record
        │
        ├────────► What Belongs to Today (live)
        │
        └────────► WBTD (before bedtime)
                         │
                         ▼
Next Morning
        │
        ▼
Chronicle
```

Each stage has a distinct responsibility.

The Morning Serpent establishes the initial operational hypothesis for the day.

Living Inputs continuously reconcile that hypothesis with reality.

The Operational Record preserves factual history.

WBT represents the current operational picture.

WBTD preserves the final operational state of the completed day.

The Chronicle reflects the completed day after the next Morning Serpent.

---

# Living Inputs

A Living Input (LI) is a short factual update describing something that has happened.

Examples:

```
LI

Yandex preview completed.
```

```
LI

TV issue resolved.
```

```
LI

Meeting moved to Thursday.
```

Living Inputs should remain intentionally lightweight.

The intelligence belongs to reconciliation, not to the input itself.

---

# Steward Processing Pipeline

Each Living Input passes through the following stages.

```
Living Input

↓

Interpretation

↓

Classification

↓

Reconciliation

↓

Candidate World Model Update

↓

Review (if required)

↓

World Model Update

↓

Operational Record Update

↓

What Belongs to Today Update

↓

Contribution Detection

↓

Future Reasoning
```

---

# Interpretation

Extract durable meaning rather than literal wording.

Ignore transient conversational details.

Preserve information likely to reduce future cognitive load.

---

# Classification

Information may affect:

- People
- Realms
- Domains
- Places
- Projects
- Commitments
- Events
- Current State
- Chronicles

---

# Reconciliation

Before adding information:

- identify existing entities;
- merge when appropriate;
- avoid duplicates;
- preserve continuity.

Determine whether the Living Input:

- completes a commitment;
- creates a commitment;
- changes priorities;
- updates relationships;
- changes World Model state.

Reconciliation produces a Candidate World Model Update.

Straightforward factual updates may proceed automatically.

Durable inferred understanding may require review before admission into the World Model.

---

# World Model Update

Persist only admitted durable understanding.

Examples:

- new commitment;
- completed commitment;
- project progress;
- relationship update;
- recurring routine;
- behavioral pattern.

---

# Operational Record

The Operational Record (OR) is the canonical factual history of the current operational day.

It is:

- append-only;
- factual;
- grouped by Realm and Domain;
- continuously updated;
- free from interpretation and reflection.

Every accepted Living Input appends to the Operational Record.

The Operational Record is the authoritative source for operational history.

---

# What Belongs to Today

After reconciliation, determine whether today's operational picture has changed.

If so, update WBT.

WBT is not:

- the Morning Serpent;
- a task list;
- a history of Living Inputs.

It is the continuously reconciled representation of today's remaining commitments.

---

# End-of-Day Workflow

The last operational action before bedtime is:

```
OR
```

The finalized Operational Record is presented and archived.

Immediately afterwards:

```
WBTD
```

The final operational state of the day is frozen.

WBTD records:

- completed commitments;
- unfinished commitments;
- commitments carried forward.

WBTD is immutable.

It serves as an operational audit of the completed day.

It is not used for reasoning.

---

# Morning Continuation

The first operational step of the next day is the Morning Serpent.

Using:

- the finalized Operational Record;
- the reconciled World Model;
- today's Morning Serpent;

RealMe generates the Chronicle for the previous day.

Chronicles are therefore derived from factual operational history rather than reconstructed from conversation.

This creates a clear separation between:

- Operational Record — factual history;
- WBT — live operational picture;
- WBTD — operational audit;
- Chronicle — reflective narrative.

---

# Contribution Detection

After every successful World Model update, determine whether the conversation produced meaningful new understanding.

If so, emit a Contribution Event.

Examples:

- new long-term commitment;
- important behavioral insight;
- significant project milestone;
- clarification of relationships;
- architectural improvement.

Contribution Events are not rewards.

They are notifications that meaningful understanding has increased.

Future recognition systems (XP, badges, Chronicle decoration, etc.) consume these events without affecting the World Model.

---

# Future Reasoning

Updated knowledge becomes immediately available for:

- Morning Serpent;
- WBT;
- Chronicle generation;
- reminders;
- commitment tracking;
- future conversations.

---

# Storage Principle

Store only information that improves future reasoning and reduces future cognitive load.

Everything else should remain part of the conversation only.