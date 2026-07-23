# ARCHITECTURE_CANDIDATES.md

# Purpose

Capture architectural discoveries that have been accepted conceptually but not yet incorporated into the repository.

This document exists to prevent premature refactoring while the architecture is still evolving.

It is a temporary working document.

Once the MVP architecture stabilizes, every accepted candidate should either:

- be incorporated into the appropriate repository document; or
- be explicitly rejected.

The goal is for this document to eventually become empty.

---

# Candidate Status

Each candidate should be one of:

- Proposed
- Accepted
- Rejected
- Incorporated

Only Incorporated candidates should modify repository documents.

---

# Current Candidates

## Accepted

### Operational Continuity Layer

Status:
Accepted

Purpose:

Elevate the relationship between:

- Operational Record;
- What Belongs to Today (WBT);
- WBTD;
- Chronicle

into an explicit architectural layer rather than treating them as independent artifacts.

The architecture is already operationally consistent, but this relationship is not yet explicitly represented in the repository.

Target documents:

- 02_ARCHITECTURE.md
- 04_LI_PIPELINE.md

---

## Proposed

_None_

---

## Rejected

_None_

---

## Incorporated

### Operational Record

Status:
Incorporated

Purpose:

Maintain an append-only factual history of the operational day.

Operational Record is the canonical source for:

- WBT updates;
- WBTD generation;
- Chronicle generation.

The Operational Record is factual rather than reflective.

It preserves operational history without interpretation.

Repository documents:

- 04_LI_PIPELINE.md

---

### WBTD (What Belongs to Today — Daily)

Status:
Incorporated

Purpose:

Freeze the final operational state of the completed day immediately before bedtime.

WBTD is:

- immutable;
- historical;
- operational rather than reflective.

It records:

- completed commitments;
- unfinished commitments;
- commitments carried forward.

WBTD is not used for future reasoning.

It exists as a historical operational checkpoint.

Repository documents:

- 04_LI_PIPELINE.md

---

### Reviewed Reconciliation

Status:
Incorporated

Purpose:

Separate conversation from durable understanding.

Reconciliation produces a Candidate World Model Update.

Only admitted understanding becomes persistent World Model knowledge.

Straightforward factual updates may be admitted automatically.

Durable inferred understanding requires review before admission.

This preserves continuity while maintaining the Warden's authority over long-term understanding.

Repository documents:

- 03_WORLD_MODEL.md
- 04_LI_PIPELINE.md
- 05_RULES.md