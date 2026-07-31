# Persistent World Engine — Required MVP Correction

The current application behaves primarily as an LLM dialogue interface. This is insufficient.

The central MVP requirement is that every accepted Living Input produces persistent, deterministic changes to the Warden's World Model and that all derived views update automatically.

## Architectural Boundary

Do not modify the Git repository in response to ordinary Living Inputs.

The Repository defines the architecture of RealMe.

The Warden's personal World Model must be stored in runtime persistence, preferably PostgreSQL for the intended architecture or a simpler durable database only if explicitly accepted for the MVP.

Repository changes occur only through architectural governance.

World Model changes occur continuously through Living Inputs.

## Required Living Input Flow

Implement the following pipeline:

1. Receive Living Input.
2. Ask the LLM to produce a structured Candidate Mutation Plan.
3. Validate the plan in deterministic application code.
4. Resolve existing entities before creating new entities.
5. Reject invented Realms, Domains, Projects, and relationships.
6. Apply admitted mutations in a database transaction.
7. Record provenance linking every mutation to the Living Input.
8. Regenerate affected derived views, including CURRENT_WBT.
9. Generate the Steward response from the updated state.
10. Return the response together with an explicit machine-readable mutation result.

The LLM must never be the direct persistence layer.

## Candidate Mutation Plan

Use structured output capable of representing:

- create node;
- update node;
- create relationship;
- update or supersede relationship;
- create commitment;
- complete commitment;
- create recurrence rule;
- correct existing knowledge;
- unresolved ambiguity;
- no durable update.

Every operation must include:

- target entity or entity-resolution query;
- proposed properties;
- provenance;
- confidence;
- admission class;
- affected Realm and Domain when already known.

## Entity Resolution

Before creating a node, search existing World Model entities by:

- stable ID;
- canonical name;
- aliases;
- known relationships;
- contextual similarity.

Do not create a second Ivan when an existing Ivan node already exists.

## Example: Alias and Family Knowledge

Input:

> In RealMe I call my youngest son Ivan Owling.

Expected durable result:

- locate or create Person `Ivan`;
- set preferred alias `Owling`;
- record relationship `child_of` to the Warden;
- record relative family position `youngest child`;
- connect Ivan to the existing Family Domain;
- derive Household Realm through the existing Domain hierarchy;
- do not infer an exact age;
- preserve the Living Input as provenance;
- use `Owling` in subsequent dialogue.

Expected Steward response:

> Understood. Ivan is known as Owling within the World. I have preserved the alias and his place within the Family Domain.

Do not reply with generic pipeline language such as:

> Input parsed and reconciled.

## Recurring Commitments

Add first-class support for recurrence.

Input:

> Regular weekly brokerage call at 15:00.

Expected behavior:

- infer or clarify the weekday from current context only when reliably available;
- create a recurring Career commitment;
- store frequency, weekday, local time, timezone, start date, and optional end date;
- generate individual occurrences;
- include the relevant occurrence in CURRENT_WBT every matching day;
- retain the recurrence after one occurrence is completed;
- track each occurrence independently.

A recurring series and a generated occurrence are distinct objects.

Required concepts:

- RecurrenceRule;
- CommitmentOccurrence;
- timezone-aware scheduling;
- occurrence status;
- next-occurrence calculation.

## WBT

CURRENT_WBT is a derived view.

It must be regenerated from:

- active one-time commitments;
- due recurring occurrences;
- unresolved commitments carried forward;
- relevant known events;
- current operational state.

Do not treat WBT as an independently edited list.

When a commitment is completed through a Living Input, it must disappear from the active WBT immediately.

When a future recurring occurrence becomes relevant, it must appear automatically without a new Living Input.

## Persistence

The present in-memory arrays are not sufficient.

Replace or encapsulate them behind durable repositories.

At minimum, persist:

- World nodes;
- relationships;
- commitments;
- recurrence rules;
- occurrences;
- Living Inputs;
- provenance;
- operational events;
- conversations if retained;
- Chronicles.

Application restart must not erase the Warden's World.

## Dialogue

The Steward must speak from the updated World Model.

Responses should mention the actual effect of the Living Input when useful.

Good:

> The dividend report is complete and has been removed from today's Career commitments.

Bad:

> Input parsed and reconciled by Steward.

Good:

> Ivan is now known as Owling throughout the Family Domain.

Bad:

> Information stored successfully.

## Completion Criteria

This correction is complete only when all of the following work end to end:

1. A Living Input creates a new commitment and it appears in WBT.
2. A Living Input completes that commitment and it disappears from active WBT.
3. A recurring commitment appears automatically on its next scheduled day.
4. A personal fact such as an alias updates an existing Person node.
5. The fact remains available after server restart.
6. Future Steward dialogue uses the admitted knowledge.
7. No new Realm or Domain is invented during classification.
8. Every mutation retains provenance.
