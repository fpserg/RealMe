# Three Layers of RealMe

> "A world before an app."

RealMe consists of three independent layers.

---

# Layer I — The World

This is what exists regardless of software.

It includes:

- Realms
- Domains
- Roles
- Lore
- Chronicles
- Quests
- Campaigns
- Stones
- XP
- Badges
- Memories

Everything in this layer should remain meaningful even if the application disappears.

The World is the source of truth.

---

# Layer II — The Product

The application is only one interface to the World.

Responsibilities:

- visualize the World
- organize information
- reduce friction
- provide reminders
- support motivation

The Product must never redefine the World.

It only reveals it.

---

# Layer III — The Builders

Everything required to create the Product.

Examples:

- PDRs
- Architecture
- Screens
- Components
- Source code
- Repository structure
- Design decisions

Builder artifacts may change frequently.

The World should change very slowly.

---

# Design Principle

Whenever uncertainty appears, determine first:

"Which layer does this belong to?"

If it belongs to the World,
do not solve it with code.

If it belongs to the Product,
do not solve it with lore.

If it belongs to the Builders,
do not treat it as permanent canon.