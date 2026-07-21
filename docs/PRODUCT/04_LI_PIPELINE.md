# 04_LI_PIPELINE.md

# Living Input Pipeline

**Status:** Active  
**Version:** MVP v1.0  
**Purpose:** Define how natural conversation becomes structured understanding in the World Model.

---

# Purpose

Living Input (LI) is the mechanism through which RealMe learns.

Every meaningful conversation is treated as a potential source of new understanding.

The goal of the pipeline is **not** to record conversations.

The goal is to continuously improve the World Model.

---

# Design Principles

The pipeline should:

- accept natural language only;
- require no manual structuring by the user;
- extract durable understanding rather than raw text;
- update existing knowledge whenever possible;
- avoid storing unnecessary information.

The user should never think about the pipeline.

---

# High-Level Flow

```
Conversation

        ↓

Living Input

        ↓

Understanding

        ↓

World Model Update

        ↓

Future Reasoning
```

Conversation produces understanding.

Understanding updates the World Model.

The updated World Model improves future conversations.

---

# Pipeline Stages

## Stage 1 — Receive Input

The user communicates naturally.

Examples:

> Sergey Jr has football every Wednesday.

> Equity Strategy report is due September 15.

> Bathroom plumbing is finished.

> Roman comes next Tuesday.

The system does not require commands or structured syntax.

---

## Stage 2 — Interpret Meaning

The reasoning engine identifies persistent meaning.

The objective is understanding rather than transcription.

Examples:

Input:

> Sergey Jr has football every Wednesday.

Understanding:

- recurring commitment
- participant
- schedule
- related realm

---

Input:

> Bathroom plumbing is finished.

Understanding:

- project milestone
- project progress
- completion event

---

Input:

> Equity Strategy report is due September 15.

Understanding:

- project
- commitment
- deadline

---

## Stage 3 — Classify

Every extracted item is classified before persistence.

The MVP should recognize at least the following categories.

| Category | Purpose |
|----------|---------|
| Person | Individual |
| Realm | Life domain |
| Place | Location |
| Project | Multi-step initiative |
| Commitment | Future responsibility |
| Event | Time-specific occurrence |
| State | Current condition |
| Relationship | Connection between entities |

Classification determines how the World Model should evolve.

---

## Stage 4 — Reconcile

Before creating anything new, the pipeline searches for existing entities.

Questions include:

- Does this person already exist?
- Is this an existing project?
- Is this an update rather than a new commitment?
- Does this event complete an existing milestone?
- Is this a recurring pattern already known?

Whenever possible:

**Update existing entities instead of creating duplicates.**

---

## Stage 5 — Update The World Model

Once reconciliation is complete, the World Model is updated.

Possible operations include:

- create entity;
- update entity;
- close commitment;
- change project status;
- create relationship;
- update current state;
- append historical event.

The update should preserve consistency.

---

# Commitment Extraction

Commitments are first-class outputs of the pipeline.

Examples include:

## Recurring

Input

> Sergey Jr has football every Wednesday at 18:00.

Output

```
Commitment

Type:
Recurring

Title:
Football

Participants:
Sergey Jr
Warden

Schedule:
Wednesday
18:00
```

---

## Deadline

Input

> Equity Strategy report is due September 15.

Output

```
Commitment

Type:
Deadline

Title:
Equity Strategy Report

Due:
2026-09-15
```

---

## Project

Input

> We're renovating the bathroom.

Output

```
Project

Bathroom Campaign

Status:
Active
```

Future Living Inputs update this project instead of recreating it.

---

# State Updates

The pipeline updates current understanding.

Example

Morning

```
Bathroom Campaign

Progress:
Planning
```

↓

Input

> Roman finished the plumbing today.

↓

Updated State

```
Bathroom Campaign

Progress:
Plumbing completed
```

History records the milestone.

Current State reflects the latest understanding.

---

# History

Meaningful events become history.

Examples:

- project milestone completed;
- important decision made;
- commitment fulfilled;
- meeting occurred.

History should explain how Current State evolved.

---

# What Should Usually Not Be Stored

The pipeline should avoid persisting information that has little future value.

Examples:

- greetings;
- conversational filler;
- temporary wording;
- repeated statements;
- information already represented in the World Model.

The objective is understanding, not completeness.

---

# Confidence

Every extraction has implicit confidence.

High confidence:

> The report is due September 15.

Low confidence:

> I might write the report sometime.

Low-confidence interpretations should not automatically become persistent commitments.

When uncertainty materially affects the World Model, RealMe should ask a clarification question rather than assume.

---

# Future Reasoning

The pipeline itself does not generate reminders, plans or decisions.

Its responsibility ends after maintaining an accurate World Model.

Future reasoning uses the updated World Model to provide assistance.

This separation keeps learning independent from reasoning.

---

# Success Criteria

The pipeline is successful when:

- users communicate naturally;
- persistent knowledge grows over time;
- duplicate entities remain rare;
- commitments stay current;
- project state reflects reality;
- future conversations require progressively less repeated context.

---

# Guiding Principle

The Living Input Pipeline should answer one question:

> **What lasting understanding from this conversation will reduce future cognitive load?**

Only that understanding belongs in the World Model.
