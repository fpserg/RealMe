# RealMe Constitution
## 00_PRINCIPLES.md

This document defines the non-negotiable architectural principles of RealMe.

Every implementation decision must be consistent with these principles.

If code conflicts with this document, the code should change.

---

# 1. Conversation Is the Interface

The primary interface of RealMe is natural conversation.

The user should not be required to interact with forms, databases, dashboards or structured editors to maintain the system.

---

# 2. The World Model Is the Memory

The World Model is the persistent representation of the user's personal reality.

Conversation is temporary.

The World Model is durable.

---

# 3. The World Model Is the Personal Source of Truth

The World Model stores facts about the user's life.

Examples include:

- people
- realms
- places
- campaigns
- relationships
- principles
- events
- current state

It does not store general knowledge.

---

# 4. The LLM Is the Reasoning Engine

The LLM is responsible for:

- conversation
- reasoning
- planning
- creativity
- synthesis
- analysis

The LLM is not responsible for maintaining long-term personal memory.

---

# 5. Living Comes Before Structuring

The user updates the World Model by living, not by managing it.

Natural conversation is the primary method of maintaining personal knowledge.

---

# 6. Invisible Complexity

Internal complexity is acceptable.

User-facing complexity is not.

The user should experience a simple conversational interface regardless of the sophistication of the underlying architecture.

---

# 7. Simplicity Over Features

Every new feature increases cognitive load.

A feature should be added only if it meaningfully improves the user's thinking or reduces the user's cognitive burden.

---

# 8. Architecture Over Shortcuts

Temporary implementation shortcuts must not compromise the long-term architecture.

If a shortcut conflicts with the architecture, it should be avoided or clearly isolated.

---

# 9. Separation of Responsibilities

Each component has a single responsibility.

The World Model stores reality.

The LLM reasons.

Storage persists data.

Conversation translates between the user and the World Model.

The UI presents the conversation.

---

# 10. The User Should Never Maintain the System

RealMe exists to reduce cognitive load.

The user should never become responsible for maintaining the application's internal state.

Whenever possible, the system should infer, organize and update information automatically.

---

# 11. Production Before Optimization

The system should first produce correct behavior.

Optimization, automation and advanced capabilities should be added only after the core architecture is functioning correctly.

---

# 12. Replaceable Technologies

Frameworks, databases and LLM providers are implementation details.

The architecture should make it possible to replace them without changing the fundamental design of RealMe.

---

# Guiding Question

For every design decision, ask:

"Does this reduce the user's cognitive load while preserving conversation as the primary interface?"

If the answer is no, reconsider the design.
