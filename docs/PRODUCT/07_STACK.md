# 07 — Technology Stack

# Purpose

Define the implementation technologies used by the MVP.

Technology choices should support the architectural principles rather than define them.

The architecture must remain portable to future technologies.

---

# Selection Principles

The implementation stack should be:

- mature;
- well-documented;
- open;
- maintainable by a small team;
- suitable for AI-assisted development.

Technology choices should minimize complexity while supporting long-term evolution.

---

# Core Requirements

The MVP requires:

- conversational interaction;
- persistent storage;
- World Model reasoning;
- API-based architecture;
- web deployment.

All implementation decisions should support these capabilities.

---

# Technology Stack

## Frontend

Technology

Next.js

Purpose

- conversational interface;
- dashboard;
- World Model visualization;
- WBT presentation.

---

## Backend

Technology

FastAPI (Python)

Purpose

- orchestration;
- Living Input processing;
- World Model reconciliation;
- reasoning pipeline.

Python enables direct integration with modern AI tooling and libraries.

---

## Database

Technology

PostgreSQL

Purpose

Persistent storage of:

- World Model;
- commitments;
- conversations;
- Chronicles;
- operational state.

PostgreSQL provides a mature relational foundation while remaining flexible enough for future extensions.

---

## ORM

Technology

SQLAlchemy

Purpose

Database abstraction and schema management.

---

## AI Layer

Technology

LLM abstraction layer.

Initial provider:

OpenAI.

The architecture should not depend on any specific model vendor.

Model providers should be replaceable with minimal architectural impact.

---

## Authentication

Technology

Clerk (or equivalent)

Purpose

User authentication and identity management.

Authentication should remain independent of application logic.

---

## Deployment

Target

Cloud deployment.

The MVP should support straightforward deployment to modern cloud infrastructure.

Deployment provider is intentionally unspecified.

---

# External Services

The MVP may integrate with:

- calendar providers;
- email providers;
- messaging platforms;
- file storage.

All integrations should occur through well-defined APIs.

External services should remain optional.

---

# Architectural Constraints

Technology choices must not violate the architectural principles defined in:

- 00_PRINCIPLES.md
- 02_ARCHITECTURE.md

The architecture should remain portable even if every implementation technology changes.

---

# Future Evolution

Potential future additions include:

- vector search;
- knowledge graph;
- event streaming;
- mobile applications;
- local AI inference.

These are intentionally outside the MVP.

---

# Guiding Principle

Technology exists to serve the architecture.

Replacing a framework should require significantly less effort than redesigning the architecture.