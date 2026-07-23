# 03_WORLD_MODEL.md

# World Model

**Status:** Active  
**Version:** MVP v1.1  
**Purpose:** Define the persistent representation of the Warden's operating environment.

---

# Purpose

The World Model is the persistent source of truth about the Warden's life.

Its purpose is not to document life.

Its purpose is to maintain enough structured understanding to reduce cognitive load during future reasoning.

The World Model is continuously updated through conversation and consulted whenever RealMe reasons about the user's situation.

---

# Design Principles

The World Model is:

- persistent;
- structured;
- cumulative;
- continuously updated;
- independent of any specific LLM.

The World Model is **not**:

- a conversation log;
- a note database;
- a document repository;
- a calendar replacement;
- a task manager.

---

# What The World Model Represents

The model represents the Warden's operating environment across time.

It captures four domains.

## 1. Reality

Things that exist.

Examples:

- people;
- places;
- realms;
- organizations;
- projects;
- objects;
- relationships.

---

## 2. History

Things that happened.

Examples:

- events;
- decisions;
- completed milestones;
- Living Inputs;
- generated Chronicles.

History explains how the current state emerged.

---

## 3. Current State

Things that are true now.

Examples:

- active projects;
- current priorities;
- ongoing campaigns;
- blockers;
- locations;
- progress.

Current State changes frequently.

It should always represent the latest known understanding.

---

## 4. Commitments

Things expected to require future attention.

Examples:

- recurring routines;
- deadlines;
- appointments;
- milestones;
- promises;
- long-term goals.

Commitments are first-class entities because remembering them consumes cognitive load.

---

# Core Entity Types

The MVP should support the following persistent entity types.

| Entity | Purpose |
|---------|---------|
| Person | Individuals known to the Warden |
| Realm | Major life domains |
| Place | Meaningful locations |
| Project | Multi-step initiatives |
| Commitment | Future obligations or recurring responsibilities |
| Event | Things that happened or will happen at a specific time |
| Chronicle | Human-readable historical summaries |

Additional entities may be introduced later without changing the conceptual model.

---

# Commitment

Commitments are central to RealMe.

A Commitment represents something the Warden has accepted responsibility for.

Examples:

- Sergey Jr football every Wednesday.
- Equity Strategy report due September 15.
- Bathroom Campaign.
- Weekly Buy-Side publication.
- AI Foundations course.

RealMe should reason from commitments rather than isolated tasks.

---

# Commitment Types

A commitment may represent different temporal structures.

## Deadline

Example:

> Equity Strategy report due September 15.

Characteristics:

- target date;
- progress;
- completion status.

---

## Recurring

Example:

> Sergey Jr football every Wednesday.

Characteristics:

- recurrence rule;
- expected participation;
- exceptions.

---

## Scheduled

Example:

> Dentist appointment.

Characteristics:

- fixed date and time;
- duration;
- participants.

---

## Project

Example:

> Bathroom Campaign.

Characteristics:

- milestones;
- evolving progress;
- related commitments;
- completion state.

---

## Goal

Example:

> Finish AI Foundations.

Characteristics:

- desired outcome;
- optional target date;
- measurable progress.

---

# Relationships

Entities should be connected rather than isolated.

Examples:

```
Person
    │
    ├── participates in
    │
Commitment
    │
    ├── belongs to
    │
Realm
    │
    ├── advances
    │
Project
```

Example:

```
Sergey Jr
        │
participates in
        │
Football
        │
belongs to
        │
Household
```

Another example:

```
Equity Strategy Report
        │
belongs to
        │
Career
```

The World Model should prefer explicit relationships over duplicated information.

---

# State Evolution

The World Model is continuously refined.

Example:

```
Morning

Equity Strategy
Status:
Not started

↓

Living Input

↓

Afternoon

Status:
Outline complete

↓

Living Input

↓

Evening

Status:
First draft completed
```

The latest state replaces obsolete state while preserving meaningful history.

---

# Admission Principle

The World Model is the authoritative representation of durable understanding.

Not every interpretation should immediately become persistent truth.

During reconciliation, RealMe may produce a **Candidate World Model Update**.

Candidate updates represent proposed durable understanding that has not yet been admitted into the World Model.

Admission follows two paths.

## Automatic Admission

Updates may be incorporated immediately when they are:

- factual;
- unambiguous;
- directly stated by the Warden;
- consistent with the existing World Model;
- unlikely to alter long-term understanding.

Examples include:

- completed commitments;
- schedule changes;
- project progress;
- factual status updates.

## Reviewed Admission

Review is required when reconciliation produces inferred or potentially identity-changing understanding.

Examples include:

- new long-term commitments;
- changes to relationships;
- persistent preferences;
- behavioral patterns;
- Realm structure;
- architectural discoveries.

When ambiguity exists, RealMe proposes the update rather than silently incorporating it.

This preserves both continuity and human agency while allowing the World Model to evolve continuously.

---

# Temporal Reasoning

The World Model should understand time.

Questions it should eventually answer include:

- What requires attention today?
- What becomes important this week?
- What commitments are overdue?
- What routines are expected today?
- Which projects are blocked?
- Which commitments are related?

Temporal understanding is derived from commitments, events and current state.

---

# Memory Strategy

Not every sentence belongs in the World Model.

Persist information that is likely to remain useful across future conversations.

Examples:

Persist:

- relationships;
- recurring routines;
- projects;
- commitments;
- long-term preferences;
- meaningful decisions.

Usually do not persist:

- casual conversation;
- transient emotions without lasting relevance;
- one-off observations with no future value;
- conversational filler.

Persistence should favor long-term usefulness over completeness.

---

# Chronicles

Chronicles are generated from the World Model.

They are not the source of truth.

Purpose:

- summarize history;
- explain progress;
- help human reflection.

The World Model exists independently of Chronicles.

---

# Architectural Constraints

The World Model must never:

- depend on the current conversation;
- depend on a specific LLM;
- require manual maintenance by the user;
- duplicate information unnecessarily.

Every update should improve future reasoning while preserving consistency.

---

# Guiding Principle

The World Model should store the minimum persistent information required to reduce future cognitive load.

If storing information does not improve future reasoning or assistance, it does not belong in the World Model.