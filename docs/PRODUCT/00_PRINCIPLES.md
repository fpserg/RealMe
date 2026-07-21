# 00_PRINCIPLES.md

# RealMe Principles

**Status:** Active  
**Version:** MVP v1.0  
**Purpose:** Define the immutable principles that guide every architectural and product decision.

---

# Mission

RealMe exists to **reduce cognitive load without reducing human agency**.

It continuously maintains an accurate understanding of the Warden's operating environment, allowing attention to be spent on judgment and action rather than remembering, organizing and tracking.

Every feature, component and architectural decision must support this mission.

---

# Core Philosophy

RealMe is **not**:

- a task manager;
- a note-taking application;
- a calendar replacement;
- a chatbot with memory;
- an autonomous life manager.

RealMe is a cognitive partner.

Its purpose is to maintain context, organize information, surface what matters and assist reasoning while leaving responsibility for decisions and actions to the user.

---

# Cognitive Responsibility

RealMe augments cognition. It does not replace it.

| Cognitive Function | Human | RealMe |
|--------------------|-------|---------|
| Memory | Shared | Primary support |
| Organization | Shared | Primary support |
| Analysis | Shared | Strong collaborator |
| Judgment | Primary responsibility | Support only |
| Agency | Primary responsibility | Never replaces |

These responsibilities are architectural constraints rather than implementation details.

Any future feature that transfers judgment or agency away from the user should be considered inconsistent with the product vision.

---

# Conversation Is The Interface

Conversation is the primary interface.

The user should not need to maintain databases, folders, tags or structured records.

The system is responsible for understanding natural language and maintaining internal structure.

---

# Living Before Structuring

Users describe life.

RealMe creates structure.

The user should never be required to think about schemas, entities or relationships.

---

# World Model As Source Of Truth

The World Model is the persistent representation of the Warden's operating environment.

It exists to support cognition rather than documentation.

It stores the minimum persistent information required for RealMe to understand:

- reality;
- history;
- current state;
- future commitments.

Everything else should be derivable.

---

# LLM As Reasoning Engine

The language model performs reasoning.

Examples include:

- interpreting conversations;
- extracting meaning;
- planning;
- analysis;
- summarization;
- decision support.

The LLM is intentionally replaceable.

Reasoning must not become the storage layer.

---

# Separation Of Responsibilities

Each architectural component has a single responsibility.

Conversation handles interaction.

Living Input interprets conversations.

The World Model stores persistent knowledge.

The reasoning engine generates understanding.

Storage persists data.

Responsibilities should not overlap.

---

# Commitments Over Tasks

RealMe manages commitments rather than checklists.

Examples include:

- recurring routines;
- deadlines;
- projects;
- milestones;
- appointments;
- promises;
- goals.

Tasks may exist as implementation details of commitments but are not the primary abstraction.

---

# Assistance Over Automation

RealMe should reduce effort.

It should not remove ownership.

Examples:

Appropriate:

- reminding;
- organizing;
- suggesting;
- identifying risks;
- generating options;
- highlighting forgotten commitments.

Inappropriate:

- making decisions;
- changing priorities without approval;
- committing the user to actions;
- acting independently.

---

# Persistence Over Sessions

Knowledge should survive conversations.

Every interaction should improve RealMe's understanding of the Warden's operating environment.

Future conversations should begin with accumulated understanding rather than reconstructed context.

---

# Simplicity Before Features

Complexity requires justification.

Every new capability should answer one question:

**Does this reduce meaningful cognitive load?**

If not, it should not be added.

---

# Invisible Complexity

Internal architecture may be sophisticated.

The user experience should remain conversational and simple.

Complexity belongs inside the system, not inside the user's workflow.

---

# Technology Independence

Architectural principles must outlive implementation choices.

Frameworks, databases, LLM providers and infrastructure may change.

The conceptual model should remain stable.

---

# Guiding Question

Whenever an architectural decision is uncertain, evaluate it against this question:

> Does this reduce cognitive load while preserving human agency?

If the answer is yes, it is likely consistent with the RealMe architecture.

If the answer is no, reconsider the design.