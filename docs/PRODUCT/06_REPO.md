# 06 — Repository

# Purpose

Define how the RealMe repository is organized.

The repository is the human-readable source of truth for the architecture.

Its purpose is to make the system understandable, maintainable and evolvable over time.

---

# Repository Principles

The repository should be:

- small;
- explicit;
- versionable;
- technology-independent;
- readable by both humans and AI.

Documentation should explain concepts rather than implementation details.

---

# Repository Structure

```
00_PRINCIPLES.md
01_MVP.md
02_ARCHITECTURE.md
03_WORLD_MODEL.md
04_LI_PIPELINE.md
05_RULES.md
06_REPOSITORY.md
07_STACK.md
08_API.md
09_STATE.md
10_ROADMAP.md
```

Additional documents may be introduced as the architecture evolves.

---

# Document Responsibilities

## 00 — Principles

Defines what must always remain true.

---

## 01 — MVP

Defines what the MVP is intended to validate.

---

## 02 — Architecture

Defines the major architectural components and information flow.

---

## 03 — World Model

Defines the persistent representation of the Warden's operating environment.

---

## 04 — Living Input Pipeline

Defines how conversation becomes persistent understanding.

---

## 05 — Conversation Rules

Defines how RealMe behaves during interaction.

---

## 06 — Repository

Defines repository organization and documentation conventions.

---

## 07 — Stack

Defines implementation technologies.

---

## 08 — API

Defines interfaces between architectural components.

---

## 09 — State

Defines runtime application state.

---

## 10 — Roadmap

Defines architectural evolution beyond the MVP.

---

# Architectural Layering

Repository documents should move from conceptual to technical.

```
Principles

↓

Product Vision

↓

Architecture

↓

Persistent Knowledge

↓

Information Flow

↓

Conversation

↓

Implementation

↓

Runtime

↓

Future Evolution
```

Each document should depend conceptually only on documents above it.

---

# Modification Principles

Repository updates should preserve consistency.

A single architectural decision may require changes in multiple documents.

When modifying the repository:

- preserve existing terminology;
- avoid duplicate concepts;
- keep responsibilities clearly separated;
- update affected documents together.

---

# Naming

Document names should:

- use stable numbering;
- remain concise;
- describe responsibility rather than implementation.

Numbers indicate conceptual order rather than development order.

---

# Source of Truth

Each architectural concept should have exactly one canonical definition.

Other documents should reference that concept rather than redefine it.

Examples:

- World Model → 03_WORLD_MODEL.md
- Living Inputs → 04_LI_PIPELINE.md
- Conversation Rules → 05_RULES.md

Avoid duplicated definitions across documents.

---

# Repository Evolution

The repository is expected to evolve.

New documents may be introduced when:

- a concept becomes too large for its current document;
- a responsibility becomes distinct enough to deserve its own specification.

Repository growth should favor separation of concerns over document size.

---

# Guiding Principle

The repository should make the architecture easier to understand than the implementation.