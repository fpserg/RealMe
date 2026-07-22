# 02 — Architecture

# Purpose

Define the major architectural components of RealMe and their responsibilities.

The architecture describes how information flows through the system.

It intentionally avoids implementation details.

---

# High-Level Architecture

```
                  Morning Serpent
                         │
                         ▼
                 Living Inputs (0..N)
                         │
                         ▼
              Living Input Pipeline
                         │
                         ▼
                  World Model
                         │
          ┌──────────────┼──────────────┐
          ▼              ▼              ▼
What Belongs to Today  Chronicle   Future Reasoning
```

The World Model is the central persistent representation of reality.

All major components either contribute to or derive from it.

---

# Core Components

## World Model

The World Model is the persistent representation of the Warden's life.

It stores durable understanding rather than conversation history.

The World Model serves as the single source of truth for all reasoning.

---

## Morning Serpent

The Morning Serpent establishes the initial hypothesis of the day.

It captures:

- planned commitments;
- intentions;
- expected priorities;
- known events.

The Morning Serpent is never modified after creation.

Reality is captured through Living Inputs instead.

---

## Living Input Pipeline

The Living Input Pipeline continuously reconciles reality with the World Model.

Each Living Input is interpreted, classified, reconciled and persisted.

If reconciliation changes the current operational picture, What Belongs to Today is updated immediately.

---

## What Belongs to Today

What Belongs to Today (WBT) represents the continuously reconciled operational picture of the current day.

It is derived from the World Model.

It is not:

- a task list;
- the Morning Serpent;
- a history of Living Inputs.

It reflects the current state after all known updates.

---

## Chronicle

The Chronicle is generated after the day is complete.

It is derived from:

- the Morning Serpent;
- all Living Inputs;
- the reconciled World Model;
- the final state of WBT.

Its purpose is not to replay events but to preserve the durable understanding of what the day ultimately became.

---

# Information Flow

Information flows in one direction.

```
Conversation

↓

Living Input

↓

Interpretation

↓

Reconciliation

↓

World Model

↓

Derived Views

(WBT, Chronicle, Future Reasoning)
```

Only the World Model is persistent.

Derived views may always be regenerated.

---

# Architectural Principles

## Single Source of Truth

The World Model is the authoritative representation of reality.

No other component maintains independent persistent state.

---

## Continuous Reconciliation

Reality is continuously incorporated through Living Inputs.

The system evolves incrementally rather than through periodic synchronization.

---

## Separation of Concerns

Each component has a single responsibility.

Morning Serpent
: Establish the initial hypothesis.

Living Input Pipeline
: Reconcile reality.

World Model
: Preserve durable understanding.

What Belongs to Today
: Present the current operational picture.

Chronicle
: Preserve the completed day.

---

## Durable Understanding

The architecture stores understanding rather than conversation.

Transient dialogue is not part of the persistent system unless it improves future reasoning.

---

## Derived Views

Morning Serpent, WBT and Chronicle are views over the World Model at different points in time.

They exist to support planning, execution and reflection respectively.

Only the World Model persists across all of them.
