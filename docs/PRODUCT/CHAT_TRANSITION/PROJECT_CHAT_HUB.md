# RealMe Project Chat Hub

Status: ACTIVE
Purpose: repo-driven continuity and handover across RealMe ChatGPT conversations.

---

# WHY THIS EXISTS

RealMe continuity must not depend on retaining or reopening any particular ChatGPT conversation. Durable state moves through repositories; conversations are replaceable working contexts.

This repository is the **durable product/discovery/operations/visual-canon and cross-chat handover repository**, not an absolute implementation canon.

The active implementation repository is `fpserg/realme-1_2`.
The frozen prototype is `fpserg/realme-mvp-1_1` at branch `frozen/realme-mvp-1_1-final`.

# REPOSITORY ROLES

- `fpserg/RealMe` — product discoveries, roles, operational evidence, visual canon, historical artifacts, protocols, and cross-chat handover.
- `fpserg/realme-mvp-1_1` — frozen prototype / implementation quarry; no new feature development.
- `fpserg/realme-1_2` — active native application implementation.

No predecessor repository is absolute implementation canon. RealMe 1.2 synthesizes validated product discoveries and proven prototype work while redesigning environment-specific workarounds natively.

---

# UNIVERSAL CONVERSATION RECOVERY PRINCIPLE

Every durable RealMe lane should be recoverable from repository evidence rather than requiring conversational memory or a predecessor transcript.

A bootstrap should identify:
- the lane and its boundary;
- the role/protocol to resume;
- the authoritative repository sources to read;
- the durable state that must be recovered;
- the expected initialization report;
- uncertainty or inconsistency that must be surfaced rather than guessed away.

Conversational memory may help orientation, but it is not canonical evidence when repository state exists or conflicts with it.

Not every temporary or experimental conversation needs its own bootstrap. Create or extend a recovery protocol when a lane carries durable responsibility or would be costly to reconstruct manually.

---

# CHAT VS WORK PRINCIPLE

Choose ChatGPT mode according to the work being done, not merely according to whether GitHub is touched.

**Ordinary Chat is the preferred home for continuity-critical conversational lanes** such as Operations and Fireside. These lanes must remain usable without Work-mode quota. Repository reads and legitimate preservation writes are part of their normal operation.

**Work is appropriate for substantial construction**: app implementation, larger coding campaigns, artifact-heavy production, and other tasks that materially benefit from or require Work capabilities.

Therefore Work quota is a construction-resource constraint, not a RealMe continuity constraint.

If a required capability is unavailable in the current mode, report that capability boundary explicitly and hand off the bounded work rather than silently weakening repository continuity.

---

# CHAT TOPOLOGY

## 1. RealMe — Operations

Purpose: **use RealMe on lived reality**.
Preferred mode: **ordinary Chat**.
Default role: 🪶 Steward.

Owns:
- Living Input;
- current commitments and lived developments;
- operational-day continuity while ChatGPT Operations remains in use;
- WBT / reflection / Chronicle behavior needed for the current chat-based operating system;
- persistence of legitimate Operations artifacts.

Does not become the main venue for product architecture or app coding.

Bootstrap:
`docs/PRODUCT/CHAT_TRANSITION/OPERATIONS_BOOTSTRAP.md`

## 2. RealMe — Fireside / Product Discovery / Realmers

Purpose: **discover what RealMe should become** through reflective conversation, lived evidence, falsification and Realmers deliberation.
Preferred mode: **ordinary Chat**.

Owns:
- reflective and exploratory RealMe conversation;
- product falsification and discovery;
- Realmers deliberation;
- roles, ontology, memory behavior, onboarding, World evolution, interaction concepts;
- converting Operations evidence into product decisions;
- preserving mature conclusions and handoffs in the canonical repository.

It should remain willing to ignore implementation convenience while discovering the right product.

Fireside bootstrap:
`docs/PRODUCT/CHAT_TRANSITION/FIRESIDE_BOOTSTRAP.md`

Detailed Product Discovery protocol:
`docs/PRODUCT/CHAT_TRANSITION/PRODUCT_DISCOVERY_BOOTSTRAP.md`

## 3. RealMe — 1.2 Building / Builders Guild

Purpose: **turn accepted product discoveries into architecture and implementation**.
Preferred mode: **Work when substantial construction is being performed**.

Default role: 🏗️ Architect, with explicit Builder phases when writing code.

Owns:
- RealMe 1.2 founding synthesis;
- architecture;
- GitHub implementation;
- infrastructure/database/auth/deployment decisions;
- bounded implementation branches and acceptance gates;
- integration of the Living World.

Bootstrap:
`docs/PRODUCT/CHAT_TRANSITION/BUILDING_1_2_BOOTSTRAP.md`

## 4. RealMe — Code Review

Purpose: **independently challenge what Building produced**.
Mode: choose the mode that supports the required repository inspection/review workload; it is not continuity-critical in the same sense as Operations.

Owns:
- code review;
- architecture challenge;
- security/data/persistence review;
- regression risk;
- PR/commit audits.

It should not become a second concurrent Builder unless explicitly instructed.

Bootstrap:
`docs/PRODUCT/CHAT_TRANSITION/CODE_REVIEW_BOOTSTRAP.md`

---

# EVIDENCE FLOW

Operations → lived evidence → Fireside / Product Discovery / Realmers → accepted product decision → Building → implementation → Code Review → acceptance / correction.

Cross-chat findings should move through repository artifacts when they materially affect another lane.

Do not rely on one chat's conversational memory as the only record of a durable decision.

---

# NEW-CHAT BOOTSTRAP COMMANDS

Start each replacement conversation inside the RealMe ChatGPT Project and paste the relevant command.

## Operations — ordinary Chat

```text
@GitHub Initialize RealMe Operations from `fpserg/RealMe/docs/PRODUCT/CHAT_TRANSITION/OPERATIONS_BOOTSTRAP.md`.

Follow that file as the canonical recovery protocol. Recover operational state from the repository, not from conversational memory.

Report recovered state before resuming as 🪶 Steward, Office of Continuity.

This conversation is the quota-independent Operations/LI lane. It must remain operable in ordinary Chat without depending on Work mode. App development and other Work-dependent building activities belong in separate conversations.
```

## Fireside — ordinary Chat

```text
@GitHub Initialize RealMe Fireside from `fpserg/RealMe/docs/PRODUCT/CHAT_TRANSITION/FIRESIDE_BOOTSTRAP.md`.

Follow that file as the canonical recovery protocol. Recover durable Fireside protocols, roles, terminology and product principles from the repository rather than reconstructing them from conversational memory.

This conversation is the quota-independent Fireside lane in ordinary Chat. Report recovered state and any uncertainty before continuing.
```

## Product Discovery / Realmers

```text
@GitHub Initialize RealMe Product Discovery / Realmers from `fpserg/RealMe/docs/PRODUCT/CHAT_TRANSITION/PRODUCT_DISCOVERY_BOOTSTRAP.md`. Load the referenced product evidence, state the current discovery boundary, and wait for the next product question.
```

## 1.2 Building

```text
@GitHub Initialize RealMe 1.2 Building from `fpserg/RealMe/docs/PRODUCT/CHAT_TRANSITION/BUILDING_1_2_BOOTSTRAP.md`. Verify current HEADs of all referenced repositories, recover the current architecture/build state, and continue as Architect. Do not modify code during initialization.
```

## Code Review

```text
@GitHub Initialize RealMe Code Review from `fpserg/RealMe/docs/PRODUCT/CHAT_TRANSITION/CODE_REVIEW_BOOTSTRAP.md`. Verify the target repository/commit before reviewing. Do not modify implementation unless explicitly asked.
```

---

# TRANSITION PRINCIPLE

# THE REPOSITORY CARRIES DURABLE CONTEXT.
# THE CHAT CARRIES THE CURRENT CONVERSATION.

Predecessor chats may remain as historical reference, but every durable RealMe lane should be capable of repository-first recovery without replaying its transcript.