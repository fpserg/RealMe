# 03 — World Model

# Purpose

Define the durable understanding maintained by RealMe.

The World Model represents the Warden's world independently of any individual conversation, session, or operational day.

It is the single source of durable truth from which reasoning, operational views, and future decisions are derived.

---

# Architectural Principle

RealMe does not persist conversations.

RealMe persists understanding.

Conversations are transient.

Understanding is durable.

---

# The World Model

The World Model is a typed property graph.

It represents durable understanding through:

- nodes;
- relationships;
- properties.

Together these describe the Warden's operating environment.

The World Model defines *what is known*, not *how it is currently being used*.

---

# World Model Invariants

The following principles are fundamental to the architecture.

## Single Source of Truth

The World Model is the only source of durable knowledge.

No derived view may become an independent source of truth.

---

## Durable Understanding

Only information expected to remain useful beyond the current interaction belongs in the World Model.

Temporary reasoning, conversation context and execution state remain outside the World Model.

---

## Stable Identity

Every node possesses a stable identity independent of its relationships.

Relationships may change without changing the identity of the underlying concept.

---

## Explicit Relationships

Connections between concepts are represented explicitly rather than through duplication.

Relationships are durable knowledge.

---

## Derived Execution

Operational structures are derived from the World Model.

Execution never defines understanding.

---

## Evolvable Ontology

The architectural principles of the World Model are stable.

The ontology used to represent the Warden's world is intentionally minimal and may evolve as implementation reveals better representations.

---

# Ontology

The World Model represents durable concepts as typed nodes connected through typed relationships.

The MVP defines an initial ontology sufficient to represent the Warden's world.

Examples of node types include:

- Realm
- Domain
- Commitment
- Person
- Place
- Event
- Asset

These types are not intended to be exhaustive.

Additional types should only be introduced when existing concepts and relationships cannot adequately represent new knowledge.

---

# Relationships

Relationships connect nodes.

They represent durable understanding that cannot be expressed through isolated concepts.

Examples include:

- belongs to
- contains
- depends on
- involves
- occurs at
- located at
- responsible for
- related to

Relationships are first-class elements of the World Model.

---

# Properties

Nodes and relationships possess properties describing their durable characteristics.

Examples include:

- title
- description
- status
- priority
- timestamps
- confidence

Properties describe existing concepts.

They do not exist independently.

---

# Ownership

Every durable fact belongs to exactly one location within the World Model.

Knowledge should not be duplicated.

When multiple concepts share understanding, they should reference one another through relationships rather than maintain separate copies.

---

# Relationship to Living Inputs

Living Inputs are observations.

Reconciliation determines whether they modify the World Model.

Only accepted understanding becomes durable knowledge.

Conversation history itself is never part of the World Model.

---

# Relationship to Application State

Application State exists to execute the present.

The World Model exists to understand the past and improve the future.

Runtime state is derived from the World Model whenever possible and discarded when no longer required.

---

# Relationship to Derived Views

Operational structures such as:

- Operational Record
- WBT
- WBTD
- Chronicle

are derived from the World Model together with current operational context.

These views exist to support execution rather than define durable knowledge.

---

# Future Evolution

Future versions may introduce:

- richer ontologies;
- additional relationship semantics;
- graph-native persistence;
- semantic reasoning over relationships;
- multiple interconnected World Models.

These extensions should preserve the architectural principles defined in this document.

---

# Guiding Principle

The World Model represents durable understanding of the Warden's world.

Everything else exists to interpret it, operate upon it, or derive views from it.