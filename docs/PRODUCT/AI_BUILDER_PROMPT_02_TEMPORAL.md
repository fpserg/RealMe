# Architectural Task — Introduce Temporal Reasoning

## Objective

Implement temporal reasoning as a first-class architectural capability.

The current implementation treats WBT as a manually maintained commitment list.

Instead, WBT should become a derived operational view generated from the World Model and the current date.

The user should never manually move commitments from "future" into "today".

Time itself performs that transition.

---

## New Architectural Component

Introduce a dedicated **Temporal Engine**.

Responsibilities:

- evaluate dates;
- evaluate recurring schedules;
- evaluate planning windows;
- evaluate deadlines;
- evaluate event dependencies;
- promote future commitments into WBT when their planning threshold is reached.

The Temporal Engine must not own data.

It derives operational state from the World Model.

---

## World Model Extensions

Extend the World Model so that durable entities may contain temporal metadata.

Examples:

Event
- scheduled date
- recurrence rule
- preparation rules

Commitment
- due date
- activation rule
- dependency
- recurrence

Planning Rule
- offset before event
- business-day support
- activation window

Examples:

VK earnings
    date = 2026-08-15

Preview preparation
    activate = 2 business days before

IR call
    activate = 5 days before

Birthday
    recurrence = yearly

Brokerage call
    recurrence = every Friday at 15:00

---

## Temporal Promotion

Operational commitments are generated automatically.

Example:

World Model:

VK Results
Date: Aug 15

Preview
Activation: -2 business days

Current date:

Aug 10

Result:

No WBT entry.

Current date:

Aug 13

Result:

WBT automatically contains:

Prepare VK preview.

No Living Input is required.

---

## Recurring Events

Recurring events are stored only once.

Examples:

- weekly brokerage call
- birthdays
- recurring reports
- quarterly earnings
- monthly reviews

Each occurrence is generated automatically by the Temporal Engine.

The Warden should never recreate recurring commitments manually.

---

## WBT

Redefine WBT as a generated view.

Inputs:

- World Model
- Current Date
- Temporal Engine

Outputs:

- today's commitments
- today's meetings
- today's recurring events
- activated preparation work
- overdue items

WBT should not persist independently.

It should be regenerated whenever:

- the World Model changes;
- the current date changes;
- a Living Input modifies temporal information.

---

## Horizon

Introduce a new view alongside WBT.

Purpose:

Present commitments that have not yet reached today's operational horizon but are approaching.

Typical contents:

- earnings in two weeks
- birthdays next week
- conference next month
- Strategy report due mid-September

Unlike WBT, Horizon is informational rather than operational.

---

## Living Inputs

Living Inputs should update temporal knowledge whenever possible.

Example:

"Every Friday at 15:00 we have a brokerage call."

Expected reconciliation:

Create or update a recurring Event in the World Model.

Future Fridays should automatically include this meeting without additional Living Inputs.

Example:

"Need to prepare VK preview two business days before results."

Expected reconciliation:

Attach a planning rule to the corresponding Event.

Future occurrences should automatically generate the preparation commitment.

---

## Architectural Constraint

The World Model remains the single source of truth.

Temporal Engine owns no persistent data.

WBT and Horizon remain derived views.

The user should experience proactive continuity rather than manually maintained task lists.