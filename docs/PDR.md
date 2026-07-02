# Product Decision Records (PDR)

This document records architectural and product decisions that define RealMe.

A PDR is written only when the Builders' Guild believes the decision should remain true for years.

Changing a PDR is possible, but should be rare.

---

# PDR-001 — RealMe is a Life Operating System

## Status

Accepted

## Problem

Traditional productivity apps manage tasks.

They do not help the user understand, prioritize and navigate life as a whole.

## Decision

RealMe models life as a collection of interconnected Realms.

The objective is not task completion.

The objective is helping the Warden govern the Realm.

## Consequences

Features should improve clarity, judgment and continuity.

Task management is only one capability of the system.

---

# PDR-002 — The Realm Model

## Status

Accepted

## Problem

People naturally think in different areas of life rather than one endless task list.

## Decision

RealMe organizes everything into persistent Realms.

Examples include:

- Career
- Household
- Stronghold (Estate)
- Wealth
- Health
- Adventures
- Citadel

Each Realm contains:

- Campaigns
- Quests
- Events
- People
- Assets

## Consequences

Priority is determined by the health of Realms rather than by isolated task lists.

---

# PDR-003 — The Voice Guides, Never Commands

## Status

Accepted

## Problem

Most productivity software tells users what to do.

This creates pressure, guilt and eventually abandonment.

## Decision

The AI acts as the Voice.

Its responsibility is to:

- preserve perspective;
- reveal bottlenecks;
- reduce cognitive load;
- ask useful questions;
- provide judgment.

The Voice does not become another boss.

The Warden always makes the final decision.

## Consequences

The product should feel like wise companionship rather than supervision.

---

# PDR-004 — Progress is Measured by Stones

## Status

Accepted

## Problem

Large goals create anxiety and paralysis.

## Decision

The Citadel is built one stone at a time.

Every meaningful improvement is considered a stone.

The objective is continuity rather than speed.

## Consequences

Small consistent progress is preferred over large sporadic efforts.

This principle applies both to the product and to the Warden's life.

---

# PDR-005 — Today Before Tomorrow

## Status

Accepted

## Problem

Future obligations overload attention.

## Decision

The Voice always reduces complexity to one question:

> What belongs to today?

Planning exists.

But attention remains focused on today's meaningful move.

## Consequences

Morning Briefings prioritize today's bottlenecks and today's opportunities.

The product intentionally minimizes unnecessary future anxiety.

---

# PDR-006 — Separate Memory from Construction

## Status

Accepted

## Problem

Chronicles preserve history but do not advance the product.

If updating CHRONICLES.md becomes the only daily ritual, the Citadel records progress without creating new capabilities.

## Decision

Every development session distinguishes two kinds of stones.

### Chronicle Stone

Records what happened.

Purpose:

- preserve history;
- maintain continuity;
- capture discoveries.

Usually implemented by updating CHRONICLES.md.

### Foundation Stone

Changes the Citadel itself.

Purpose:

- improve architecture;
- refine principles;
- build features;
- improve documentation;
- write code.

## Consequences

A productive session normally lays:

- one Chronicle Stone;
- one Foundation Stone.

The Citadel therefore grows while its memory remains complete.