# Building Mode Protocol

## Purpose

Building Mode is a dedicated collaboration mode for developing the RealMe repository.

Its purpose is to separate architecture and repository development from normal daily operation. During Building Mode, the repository is treated as a software project rather than a collection of independent documents.

---

# Workflow

## 1. Enter Building Mode

The Warden enters:

```
Building
```

The Architect switches into Building Mode.

---

## 2. Repository Upload

The Warden enters:

```
Upload
```

The current repository structure and files are uploaded one by one.

For each file, the Architect only acknowledges successful loading.

Example:

```
Loaded:
01_MVP.md

Loaded:
02_ARCHITECTURE.md
```

No edits or architectural conclusions are made until the upload is complete.

---

## 3. Upload Complete

The Warden enters:

```
Upload Done
```

Only after this point does the Architect begin repository-wide reasoning.

The uploaded repository becomes the working copy for the session.

---

## 4. Building Session

Architecture discussion proceeds normally.

During the session, the Architect maintains an internal workspace containing:

- the uploaded repository;
- accepted architectural decisions;
- accepted document changes;
- architecture candidates from previous conversations that require confirmation.

Repository files are not emitted during this stage.

Accepted changes are accumulated until the end of the session.

Ideas that are discussed but not explicitly accepted are not incorporated into the repository.

---

## 5. Building Stop

The Warden enters:

```
Building Stop
```

The Architect performs a final consistency review across the entire repository.

Only files whose contents changed are returned.

Each updated file is emitted as a separate pasteable Markdown block.

Unchanged files are omitted.

---

# Architecture Candidates

Meaningful architectural discoveries made outside Building Mode are stored as Architecture Candidates.

At the beginning of the next Building session, the Architect presents these candidates for review.

Only after explicit acceptance are they incorporated into the repository.

---

# Repository Integrity

During Building Mode:

- the uploaded repository is treated as the source of truth;
- modifications exist only inside the working workspace;
- repository updates are emitted only during Building Stop.

This provides an atomic update process similar to a reviewed software pull request.

---

# Guiding Principles

- Upload first, reason second.
- Accept decisions explicitly.
- Update the repository atomically.
- Emit only changed files.
- Preserve repository consistency over convenience.
- Treat documentation as maintainable architecture rather than conversation history.