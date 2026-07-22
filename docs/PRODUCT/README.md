# RealMe

## Purpose

RealMe is an AI-native personal operating system designed to reduce cognitive load through continuous understanding rather than passive memory.

Instead of storing conversations, RealMe maintains a continuously evolving **World Model** that represents the Warden's operating environment, commitments, relationships, projects and long-term context.

The repository documents the architecture of that system.

---

# Architecture Philosophy

The architecture is built around several fundamental principles:

- conversation comes before data entry;
- understanding comes before storage;
- durable knowledge is separated from runtime state;
- human agency is always preserved;
- the World Model is the single source of durable truth.

Implementation technologies are intentionally separated from architectural decisions.

---

# Repository Structure

| Document | Purpose |
|----------|---------|
| **00_PRINCIPLES.md** | Core principles that define RealMe |
| **01_MVP.md** | Scope and objectives of the MVP |
| **02_ARCHITECTURE.md** | High-level system architecture |
| **03_WORLD_MODEL.md** | Persistent knowledge representation |
| **04_LI_PIPELINE.md** | Living Input reconciliation pipeline |
| **05_RULES.md** | Conversational behavior and operational rules |
| **06_REPOSITORY.md** | Repository organization |
| **07_STACK.md** | Technology choices and implementation constraints |
| **08_API.md** | Interfaces between architectural components |
| **09_STATE.md** | Runtime application state |
| **10_ROADMAP.md** | Long-term architectural evolution |

---

# Recommended Reading Order

For a first introduction:

1. 00 — Principles
2. 01 — MVP
3. 02 — Architecture
4. 03 — World Model
5. 04 — Living Input Pipeline

The remaining documents describe implementation boundaries and future evolution.

---

# Architectural Flow

```
Principles
      │
      ▼
MVP
      │
      ▼
Architecture
      │
      ▼
World Model
      │
      ▼
Living Input Pipeline
      │
      ▼
Conversation Rules
      │
      ▼
Implementation
      │
      ▼
Runtime
      │
      ▼
Future Evolution
```

Each document builds upon the concepts introduced by the documents above it.

---

# Design Philosophy

The repository intentionally separates:

- architecture from implementation;
- durable knowledge from runtime state;
- product behavior from engineering workflow.

This allows the implementation to evolve while preserving the architectural identity of RealMe.

---

# Status

Current stage:

**Architecture Definition (MVP)**

The repository defines the conceptual architecture of RealMe before implementation begins.

Implementation details are expected to evolve, while the architectural principles remain stable.