# 04 — Living Input Pipeline

Living Inputs are the primary mechanism by which the World Model evolves.

RealMe does not update once per day.

It lives continuously through Living Inputs.

The pipeline transforms natural conversation into persistent understanding while maintaining an up-to-date operational picture of the day.

---

# Daily Lifecycle

Every day follows the same operational cycle.

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
What Belongs to Today
        │
        ▼
Chronicle
```

Each stage has a distinct responsibility.

The Morning Serpent establishes the initial hypothesis of the day.

Living Inputs continuously reconcile that hypothesis with reality.

The Chronicle reflects the completed day rather than either the plan or individual updates.

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

Reconciliation with existing World Model

↓

World Model Update

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

---

# World Model Update

Persist only durable understanding.

Examples:

- new commitment;
- completed commitment;
- project progress;
- relationship update;
- recurring routine;
- behavioral pattern.

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
- Chronicle;
- reminders;
- commitment tracking;
- future conversations.

---

# Storage Principle

Store only information that improves future reasoning and reduces future cognitive load.

Everything else should remain part of the conversation only.