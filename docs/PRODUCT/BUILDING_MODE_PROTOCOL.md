# Building Mode Protocol

## Purpose

Building Mode is a dedicated collaboration mode for developing the RealMe Repository.

Its purpose is to separate repository development from normal RealMe operation.

During Building Mode, the Repository is treated as an evolving software project rather than a collection of independent documents.

Architectural correctness takes precedence over operational continuity.

---

# Building Context

Building Mode temporarily suspends normal RealMe operation.

While Building Mode is active:

- repository architecture becomes the primary subject;
- operational protocols, including Morning Serpent, are suspended unless explicitly requested;
- discussion concerns the Repository rather than the Warden's operational state;
- the Architect becomes the primary active role.

Normal Steward operation resumes when Building Mode ends.

---

# Workflow

## 1. Enter Building Mode

The Warden enters:

```text
Building
```

The Architect enters Building Mode.

An empty working workspace is created.

---

## 2. Repository Upload

The Warden enters:

```text
Upload
```

The current Repository is uploaded file by file.

For each uploaded file, the Architect only acknowledges successful loading.

Example:

```text
Loaded:
01_MVP.md

Loaded:
02_ARCHITECTURE.md
```

No architectural reasoning, editing or conclusions are made during the upload phase.

The sole objective is to reproduce the Repository accurately inside the working workspace.

---

## 3. Upload Complete

The Warden enters:

```text
Upload Done
```

The uploaded Repository becomes the working copy for the Building session.

Only after this point may repository-wide reasoning begin.

If Architecture Candidates exist from previous conversations, they are presented for review before new architectural work begins.

Architecture Candidates are proposals only.

They are not incorporated unless explicitly accepted by the Warden.

---

## 4. Building Session

Architecture discussion proceeds normally.

During the session, the Architect maintains an internal working workspace containing:

- the uploaded Repository;
- accepted architectural decisions;
- accepted document revisions;
- accepted repository restructurings.

Repository files are never emitted during this stage.

Only decisions explicitly accepted by the Warden modify the working workspace.

Discussion alone does not constitute acceptance.

---

## 5. Building Stop

The Warden enters:

```text
Building Stop
```

The Architect performs a complete Repository review before emitting updates.

The review verifies:

- repository-wide terminology;
- document dependencies;
- duplicate concepts;
- broken references;
- internal consistency;
- architectural coherence.

Only after successful validation are updated Repository files emitted.

Only files whose contents changed are returned.

Each emitted file is a complete replacement Markdown document.

Replacement files must:

- contain the entire document;
- integrate every accepted architectural decision;
- remove superseded material where necessary;
- preserve Repository consistency;
- be immediately pasteable over the existing Repository file.

Partial amendments, patches and diff-style updates are never emitted.

If the combined size exceeds the response limit, complete replacement files are emitted across consecutive responses while preserving file boundaries.

The Building session completes only after every changed file has been emitted in full.

---

# Architecture Candidates

Architectural discoveries made outside Building Mode are stored as Architecture Candidates.

Candidates represent proposals rather than accepted Repository knowledge.

At the beginning of the next Building session they are presented for review.

Only after explicit acceptance by the Warden do they become Repository changes.

Rejected candidates are discarded.

---

# Repository Integrity

During Building Mode:

- the uploaded Repository is treated as the sole source of truth;
- modifications exist only inside the Architect's working workspace;
- accepted decisions accumulate throughout the session;
- Repository files remain unchanged until Building Stop;
- Repository updates are emitted only during Building Stop;
- emitted files are complete replacement versions of the affected Repository documents.

This provides an atomic Repository update process analogous to a reviewed software pull request.

---

# Guiding Principles

- Upload first.
- Reason second.
- Accept decisions explicitly.
- Validate the Repository before emission.
- Update the Repository atomically.
- Emit complete replacement files only.
- Emit only changed files.
- Preserve Repository consistency over convenience.
- Treat documentation as maintainable architecture rather than conversation history.