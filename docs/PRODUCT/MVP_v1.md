# RealMe MVP v1
## Purpose

RealMe is not a note-taking application, a productivity system, or a chatbot.

Its purpose is to become a persistent cognitive companion that gradually reduces the user's cognitive load by maintaining an up-to-date model of the user's world.

The MVP validates one core architectural hypothesis:

> Conversation is the interface.
> The World Model is the memory.

---

# Core Principles

## 1. Conversation First

The user never interacts with databases, forms, dashboards or knowledge graphs.

Everything happens through natural conversation.

The interface should feel like talking to ChatGPT.

---

## 2. World Model as Personal Source of Truth

The application maintains a structured representation of the user's personal world.

Examples include:

- Realms
- People
- Places
- Projects
- Campaigns
- Relationships
- Current state
- Principles
- History

The World Model stores facts about the user's life.

It does **not** store general knowledge.

---

## 3. ChatGPT as General Source of Knowledge

The LLM is responsible for:

- reasoning
- analysis
- creativity
- conversation
- planning
- synthesis

The LLM does not own long-term personal memory.

Instead it consults the World Model whenever personal context is required.

---

# Primary User Interaction

The default interaction mode is **Living Input (LI).**

Example:

> Went to Stronghold.
> Roman measured the mirror location.
> Rocking Owling to sleep while listening to a client call.

The user is simply describing life.

No formatting is required.

---

# Internal Flow

Every Living Input follows the same pipeline.

User Conversation

↓

LLM understands intent

↓

Generate candidate World Model updates

↓

Update persistent World Model

↓

Continue natural conversation

The user never sees the update process.

---

# MVP Scope

The MVP intentionally supports only one capability:

**Keeping an accurate World Model through conversation.**

It does not attempt to solve productivity, planning, journaling or automation.

Those become possible only after the World Model exists.

---

# World Model (initial version)

The first version should support only a small number of entity types.

## Person

Examples:

- Sergey
- Oksi
- Ivan
- Roman
- Denis

---

## Realm

Examples:

- Career
- Household
- Stronghold
- Citadel

---

## Campaign

Examples:

- Bathroom Campaign
- AI Foundations
- Weekly Buy-Side Ideas

---

## Place

Examples:

- Apartment
- Stronghold
- Office

---

## Principle

Stable insights that survived reflection.

Example:

"Conversation is the interface. The World Model is the memory."

---

## Event

Things that happened.

Example:

Roman measured mirror location.

---

## Current State

Represents what is true now.

Examples:

Current location

Current activity

Campaign status

Current focus

---

# Success Criteria

The MVP is successful if, after several days of Living Inputs, the assistant can answer questions such as:

- What projects am I currently working on?
- What happened yesterday?
- Who is Roman?
- What is the Bathroom Campaign?
- What changed since last week?
- Which campaigns are currently active?

without relying on long chat history.

---

# Out of Scope

The MVP deliberately excludes:

- dashboards
- kanban boards
- task management
- calendars
- reminders
- graphs
- analytics
- manual tagging
- manual ontology editing
- visualization

---

# Long-Term Vision

The World Model becomes the persistent representation of the user's personal reality.

ChatGPT becomes the reasoning engine operating on top of that reality.

Together they create a conversational cognitive operating system that helps the user think without requiring the user to maintain the system itself.