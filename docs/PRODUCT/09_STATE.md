# 09 — Application State

# Purpose

Define the runtime state required for RealMe to operate.

Application State represents temporary operational information used during execution.

Unlike the World Model, Application State is not intended to persist indefinitely.

---

# Architectural Principle

The World Model stores durable understanding.

Application State stores temporary execution context.

The two serve different purposes and must remain separate.

---

# State Categories

The MVP maintains four categories of runtime state.

- Conversation State
- Session State
- Operational State
- Processing State

---

# Conversation State

Represents the current conversation.

Examples:

- current user message;
- conversation history;
- active conversation mode;
- temporary reasoning context.

Conversation State exists only for the duration of the conversation.

It should never become the source of durable knowledge.

---

# Session State

Represents information that exists while the application is open.

Examples:

- authenticated user;
- active workspace;
- current settings;
- UI preferences.

Session State may survive page refreshes but should not define user knowledge.

---

# Operational State

Represents the current execution of the Warden's day.

Examples:

- current WBT;
- active commitments;
- today's progress;
- pending reminders.

Operational State changes continuously as Living Inputs are reconciled.

It may always be regenerated from the World Model.

---

# Processing State

Represents temporary internal execution.

Examples:

- current pipeline stage;
- pending World Model updates;
- reasoning requests;
- validation results.

Processing State exists only while an operation is executing.

It should never be persisted.

---

# Relationship to the World Model

The World Model remains the single source of durable truth.

Application State is derived from or operates upon the World Model.

```
World Model

↓

Application State

↓

Conversation

↓

Application State discarded

↓

World Model remains
```

---

# State Lifetime

## Persistent

Examples:

- World Model
- Commitments
- Chronicles

---

## Daily

Examples:

- WBT
- Operational progress

---

## Session

Examples:

- authentication;
- current UI state;
- active workspace.

---

## Ephemeral

Examples:

- pipeline execution;
- reasoning context;
- validation.

Ephemeral state should disappear after processing completes.

---

# Synchronization

Application State should always remain consistent with the World Model.

When reconciliation updates the World Model:

- affected runtime state should be refreshed;
- derived views should be regenerated when necessary;
- obsolete operational state should be discarded.

---

# Design Constraints

Application State should never:

- duplicate durable knowledge unnecessarily;
- become the source of truth;
- require manual synchronization by the Warden.

Whenever possible, state should be derived rather than stored.

---

# Future Evolution

Future versions may introduce:

- offline synchronization;
- collaborative workspaces;
- multiple concurrent sessions;
- background processing.

These extensions should preserve the same separation between durable knowledge and runtime execution.

---

# Guiding Principle

Application State exists to execute the present.

The World Model exists to understand the past and improve the future.