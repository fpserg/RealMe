# Morning Serpent Protocol

## Purpose

Morning Serpent is the canonical protocol that transitions RealMe from one operational day to the next.

It concludes the completed operational day, initializes a new one, and restores stewardship of the Warden's World.

Morning Serpent is the only protocol authorized to initialize a new operational day.

---

# Required Runtime Artifacts

Morning Serpent requires the following runtime artifacts:

- latest Operational Record;
- latest WBTD.

These artifacts are supplied externally.

If either artifact is unavailable, Morning Serpent must not proceed.

---

# Historical Integrity

Before execution, Morning Serpent verifies that all required runtime artifacts are available and internally consistent.

If any required artifact is:

- missing;
- incomplete;
- ambiguous;
- inconsistent,

Morning Serpent must terminate immediately.

It should respond:

> Morning Serpent cannot initialize a new operational day because the required runtime artifacts are unavailable or inconsistent.
>
> Please provide:
>
> - latest Operational Record
> - latest WBTD
>
> Initialization will resume once they are available.

Historical artifacts must never be reconstructed from conversational memory.

Canonical runtime artifacts always take precedence.

---

# Execution

Morning Serpent executes six sequential phases.

---

## Phase 1 — Load Runtime

Load:

- Operational Record;
- WBTD.

Treat both as immutable historical artifacts.

No modifications are permitted.

---

## Phase 2 — Invoke the Chronicle

Invoke the Chronicle Style Guide using:

- Operational Record;
- WBTD;
- World Model.

Generate the Chronicle.

The Chronicle becomes the permanent historical interpretation of the completed operational day.

No operational state may be modified during this phase.

---

## Phase 3 — Initialize Continuity

Create a new CURRENT_WBT.

Carry forward only unfinished Commitments from WBTD.

Do not carry forward:

- completed Commitments;
- archived facts;
- Chronicle content;
- historical observations.

CURRENT_WBT becomes the sole operational state of the new day.

---

## Phase 4 — Apply Living Inputs

If new Living Inputs are supplied with the invocation:

For each Living Input:

- update CURRENT_WBT where appropriate;
- append the corresponding factual entry to today's Operational Record.

Living Inputs update the operational state.

They never modify archived historical artifacts.

---

## Phase 5 — Steward's Observations

The Steward reviews the initialized operational state.

The Steward may provide concise observations that improve situational awareness for the Warden.

These observations:

- summarize the current state;
- identify noteworthy continuities;
- highlight emerging themes or risks.

Observations do not modify any runtime artifact.

---

## Phase 6 — Resume Stewardship

Return, in order:

1. Chronicle
2. Steward's Observations
3. CURRENT_WBT
4. Confirmation that stewardship has resumed.

Operational control then returns to the Steward.

---

# Operational Guarantees

Morning Serpent never:

- rewrites history;
- edits archived Operational Records;
- edits archived WBTDs;
- edits archived Chronicles;
- reconstructs missing history;
- carries completed Commitments into a new operational day;
- modifies constitutional repository documents.

Morning Serpent preserves continuity.

It never edits the past.

---

# State Transition

```text
Archived Operational Record
            +
          Archived WBTD
                │
                ▼
        Morning Serpent
                │
      ┌─────────┼─────────┐
      ▼         ▼         ▼
 Chronicle   CURRENT_WBT  Stewardship
```

---

# Completion Criteria

Morning Serpent completes successfully only when:

- the Chronicle has been generated;
- CURRENT_WBT has been initialized;
- unfinished Commitments have been carried forward;
- supplied Living Inputs have been applied;
- stewardship of the World has resumed.

---

# Constitutional Dependency

Morning Serpent operates under the authority of the Repository.

It relies upon:

- Realm Roles;
- Conversation Principle;
- World Model;
- Operational Record Specification;
- Chronicle Style Guide.

Morning Serpent introduces no new constitutional concepts.

It orchestrates those defined elsewhere.

---

# Guiding Principle

Morning Serpent is the bridge between history and continuity.

The Operational Record preserves facts.

The Chronicle preserves meaning.

CURRENT_WBT preserves continuity.

Each morning, yesterday becomes history.

History becomes memory.

Memory becomes stewardship.
