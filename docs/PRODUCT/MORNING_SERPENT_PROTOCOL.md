# Morning Serpent Protocol

## Purpose

Morning Serpent is the canonical protocol that transitions RealMe from one operational day to the next.

It closes the historical context of the previous day, generates its historical narrative, initializes the new operational day, and resumes live operational tracking.

Morning Serpent is the only protocol permitted to initialize a new operational day.

---

# Inputs

## Required

- Latest Operational Record (OR)
- Latest WBTD

## Optional

- New Living Inputs supplied together with the Morning Serpent invocation.

---

# Historical Integrity Check

Before execution, Morning Serpent verifies that the required historical artifacts are available.

Required artifacts:

- Latest Operational Record (OR)
- Latest WBTD

If either artifact is unavailable, incomplete, or cannot be identified with confidence, Morning Serpent MUST stop before Chronicle generation.

It must respond:

> Morning Serpent cannot initialize the new operational day because the latest historical artifacts are unavailable.
>
> Please upload:
> - the latest Operational Record (OR);
> - the latest WBTD.
>
> Once they are available, I will continue from Phase 1.

Morning Serpent must never reconstruct, approximate or infer missing historical artifacts from conversation history or memory when canonical artifacts are unavailable.

Canonical repository artifacts always take precedence over conversation memory.

---

# Execution

## Phase 1 — Historical Reconstruction

Load:

- Operational Record
- WBTD

Treat both as immutable historical artifacts.

No modifications are permitted.

---

## Phase 2 — Chronicle Generation

Execute internally:

Steward, Chronicles

Generate the Chronicle in the canonical format.

The Chronicle becomes the permanent historical interpretation of the previous operational day.

---

## Phase 3 — Operational Continuity

Generate a new CURRENT_WBT.

Carry forward:

- unfinished commitments from WBTD.

Do not carry forward:

- completed commitments;
- historical events;
- completed operational facts.

CURRENT_WBT becomes the sole live operational state.

---

## Phase 4 — Living Input Processing

If Morning Serpent contains additional user comments, requests or observations, they are interpreted as today's first Living Inputs.

For every Living Input:

- update CURRENT_WBT where required;
- append the corresponding operational fact to today's Operational Record;
- evaluate potential World Model updates according to the World Model Admission workflow.

---

## Phase 5 — Morning Output

Morning Serpent returns:

1. Chronicle.
2. Steward observations.
3. CURRENT_WBT.
4. Confirmation that the new operational day has been initialized.

---

# Operational Guarantees

Morning Serpent must never:

- modify historical Operational Records;
- modify historical WBTDs;
- modify historical Chronicles;
- reconstruct history from conversation memory when canonical artifacts are available;
- carry completed commitments into CURRENT_WBT;
- overwrite previous historical artifacts.

---

# Artifact Lifecycle

Previous day:

CURRENT_WBT
→ Operational Record
→ WBTD
→ Archive

Morning:

Operational Record
+
WBTD
↓
Morning Serpent
↓
Chronicle
↓
CURRENT_WBT

Daytime:

Living Inputs
↓
CURRENT_WBT
+
Operational Record

Evening:

CURRENT_WBT
↓
Operational Record (final)
↓
WBTD
↓
Archive

---

# Canonical Artifact Hierarchy

Canonical repository artifacts always take precedence over conversational memory.

Priority:

1. Operational Record
2. WBTD
3. Chronicle
4. World Model
5. Conversation memory

Conversation memory may be used only as temporary context while canonical artifacts remain available. It must never replace missing historical artifacts.

---

# Completion Criteria

Morning Serpent completes successfully only when:

- Chronicle has been generated.
- CURRENT_WBT has been initialized.
- All unfinished commitments have been carried forward.
- Any supplied Living Inputs have been incorporated into CURRENT_WBT and the new Operational Record.
- The new operational day is ready for Steward.
