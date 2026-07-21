# CONVERSATION_MODES.md

# Conversation Modes

**Status:** Draft  
**Scope:** Post-MVP Architecture  
**Purpose:** Define the intent and structure of conversations between the Warden and RealMe.

---

# Purpose

Not every conversation has the same objective.

RealMe distinguishes between **Conversation Modes** and **Conversation Formats**.

Modes answer:

> Why are we having this conversation?

Formats answer:

> How should this conversation be conducted?

This distinction allows RealMe to adapt its behavior without requiring the Warden to manually organize interactions.

---

# Conversation Hierarchy

```
Conversation
    ↓
Mode
    ↓
Format (optional)
    ↓
Conversation
```

The mode defines intent.

The format defines protocol.

---

# Conversation Modes

## 🌱 Living

Purpose:

Support everyday life.

The Warden is not building RealMe or exploring ideas.

They are simply living.

RealMe observes, understands and continuously updates the World Model.

Typical activities:

- planning the day
- discussing family
- reporting progress
- making decisions
- reflecting
- asking for advice
- recording observations

Primary output:

- Living Inputs
- World Model updates
- improved future reasoning

---

## 🏗 Building

Purpose:

Design and implement RealMe.

The conversation is focused on production-quality decisions.

Typical activities:

- architecture
- specifications
- implementation planning
- design reviews
- documentation
- technical trade-offs

Primary output:

- Markdown specifications
- architectural decisions
- implementation artifacts

Characteristics:

- precise
- implementation-oriented
- actionable
- minimal speculation

---

## 🔥 Fireside

Purpose:

Explore.

The goal is understanding rather than implementation.

Typical activities:

- philosophy
- product vision
- thought experiments
- future scenarios
- deep discussion
- searching for truth

Primary output:

- insights
- hypotheses
- conceptual understanding

Characteristics:

- exploratory
- reflective
- multi-perspective
- open-ended

---

# Conversation Formats

Formats are structured interaction protocols within a mode.

---

## Living Formats

### 🐍 Morning Serpent

Purpose:

Prepare the day.

Typical topics:

- today's agenda
- priorities
- commitments
- expected risks
- desired outcomes

Produces:

- Living Input
- World Model updates
- today's operating context

---

### 🐍 Evening Serpent

Purpose:

Close the day.

Typical topics:

- completed work
- unfinished commitments
- observations
- progress
- blockers

Produces:

- Living Input
- state updates
- Chronicle material

---

### 🌙 Night Watch

Purpose:

Long-term reflection.

Typical topics:

- recurring patterns
- lessons
- values
- strategy
- important conversations
- personal growth

Produces:

- Living Input
- long-term understanding
- World Model refinement

---

### Free Living Input

Purpose:

Capture meaningful information outside structured protocols.

Examples:

- spontaneous thoughts
- new commitments
- unexpected events
- decisions
- observations

Produces:

- Living Input
- World Model updates

---

# Realmers

Different Realmers contribute depending on the conversation.

## 🧱 Architect

Focus:

- systems
- architecture
- implementation
- structure

Primary mode:

Building

---

## 📚 Steward

Focus:

- continuity
- Living Inputs
- World Model
- Chronicles

Primary mode:

Living

---

## 🎙 Voice

Focus:

- communication
- language
- storytelling
- writing

Participates whenever communication quality is the subject.

---

## 👁 Observer

Focus:

- patterns
- inconsistencies
- emergent behavior
- long-term trends

Participates only when meaningful observations add value.

---

## ❓ Inquisitor

Focus:

- challenge assumptions
- identify risks
- expose hidden weaknesses

Participates only when critical examination materially improves the conversation.

---

# Automatic Mode Selection

The long-term objective is for RealMe to infer the appropriate mode from the conversation.

Examples:

Designing architecture

→ Building

Planning tomorrow

→ Living / Morning Serpent

Reflecting on recurring family patterns

→ Living / Night Watch

Discussing the philosophy of cognitive augmentation

→ Fireside

The Warden should rarely need to select a mode explicitly.

---

# Universal Principles

These principles apply regardless of mode.

- Truth over engagement.
- Honesty over flattery.
- Human agency is preserved.
- RealMe supports cognition rather than replacing it.
- Conversation remains the primary interface.

Conversation modes influence behavior.

They do not change these principles.
