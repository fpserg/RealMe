# 08 — API

# Purpose

Define the interfaces between the major architectural components of RealMe.

The API specifies what services the architecture provides rather than how those services are implemented.

Communication mechanisms (REST, GraphQL, gRPC, etc.) are implementation details and remain outside the scope of this document.

---

# Design Principles

Interfaces should be:

- explicit;
- deterministic;
- stateless where practical;
- composable;
- independent of UI implementation.

Every interface should have a single responsibility.

---

# Core Services

The MVP consists of five primary services.

---

## Conversation Service

Purpose

Receive user messages and coordinate processing.

Responsibilities

- receive conversation;
- identify operational mode;
- invoke appropriate services;
- return response.

Consumes

- user messages;
- World Model;
- current application state.

Produces

- assistant response;
- optional World Model updates.

---

## Living Input Service

Purpose

Transform natural conversation into persistent understanding.

Responsibilities

- interpret Living Inputs;
- classify information;
- reconcile with the World Model;
- propose durable updates.

Consumes

- conversation;
- existing World Model.

Produces

- World Model changes;
- WBT updates;
- contribution events.

---

## World Model Service

Purpose

Provide persistent understanding of the Warden's operating environment.

Responsibilities

- retrieve entities;
- update durable knowledge;
- maintain consistency;
- support reasoning.

Consumes

- reconciliation results.

Produces

- persistent World Model.

The World Model is the single source of truth.

---

## Reasoning Service

Purpose

Generate responses using the current World Model.

Responsibilities

- answer questions;
- generate Morning Serpent;
- generate WBT;
- generate Chronicles;
- support planning.

Consumes

- World Model;
- current conversation;
- operational context.

Produces

- reasoning output.

---

## Persistence Service

Purpose

Store and retrieve persistent information.

Responsibilities

- save World Model;
- save commitments;
- save Chronicles;
- retrieve historical information.

The persistence layer is intentionally isolated from reasoning.

---

# Service Relationships

```
Conversation

↓

Living Input

↓

World Model

↓

Reasoning

↓

Response
```

Persistence supports all services but is not directly exposed to the user.

---

# Design Rules

Services communicate only through defined interfaces.

No service should directly manipulate another service's internal state.

The World Model remains the canonical source of durable truth.

---

# Error Handling

Interfaces should return structured outcomes rather than implementation-specific errors.

Examples include:

- success;
- validation failure;
- ambiguity requiring clarification;
- temporary infrastructure failure.

Application-specific error formats are implementation details.

---

# Extensibility

New services may be introduced without changing existing architectural responsibilities.

Future examples include:

- notification service;
- calendar integration;
- email integration;
- external knowledge providers.

These services should consume the existing interfaces rather than modify them.

---

# Guiding Principle

The API defines collaboration between architectural components.

It should remain stable even as implementation technologies evolve.