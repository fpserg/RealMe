# RealMe Project Chat Hub

Status: ACTIVE
Purpose: repo-driven handover into new ChatGPT Project chats when legacy chats cannot be moved.

---

# WHY THIS EXISTS

The legacy RealMe chats cannot currently be moved into the new ChatGPT Project. Their continuity therefore moves through the repositories rather than through chat transfer.

This repository is the **handover sandbox and evidence base**, not an absolute implementation canon.

The active implementation repository is `fpserg/realme-1_2`.
The frozen prototype is `fpserg/realme-mvp-1_1` at branch `frozen/realme-mvp-1_1-final`.

# REPOSITORY ROLES

- `fpserg/RealMe` — product discoveries, roles, operational evidence, visual canon, historical artifacts, and cross-chat handover.
- `fpserg/realme-mvp-1_1` — frozen prototype / implementation quarry; no new feature development.
- `fpserg/realme-1_2` — active native application implementation.

No predecessor repository is absolute implementation canon. RealMe 1.2 synthesizes validated product discoveries and proven prototype work while redesigning environment-specific workarounds natively.

---

# CHAT TOPOLOGY

## 1. RealMe — Operations

Purpose: **use RealMe on lived reality**.

Default role: 🪶 Steward.

Owns:
- Living Input;
- current commitments and lived developments;
- operational-day continuity while ChatGPT Operations remains in use;
- WBT / reflection / Chronicle behavior needed for the current chat-based operating system.

Does not become the main venue for product architecture or app coding.

Bootstrap:
`docs/PRODUCT/CHAT_TRANSITION/OPERATIONS_BOOTSTRAP.md`

## 2. RealMe — Product Discovery / Realmers

Purpose: **discover what RealMe should become**.

Owns:
- product falsification and discovery;
- Realmers deliberation;
- roles, ontology, memory behavior, onboarding, World evolution, interaction concepts;
- converting Operations evidence into product decisions.

It should remain willing to ignore implementation convenience while discovering the right product.

Bootstrap:
`docs/PRODUCT/CHAT_TRANSITION/PRODUCT_DISCOVERY_BOOTSTRAP.md`

## 3. RealMe — 1.2 Building

Purpose: **turn accepted product discoveries into architecture and implementation**.

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

Operations → lived evidence → Product Discovery / Realmers → accepted product decision → Building → implementation → Code Review → acceptance / correction.

Cross-chat findings should move through repository artifacts when they materially affect another lane.

Do not rely on one chat's conversational memory as the only record of a durable decision.

---

# NEW-CHAT BOOTSTRAP COMMANDS

Start each replacement chat **inside the RealMe ChatGPT Project** and paste the relevant command.

## Operations

```text
@GitHub Initialize RealMe Operations from `fpserg/RealMe/docs/PRODUCT/CHAT_TRANSITION/OPERATIONS_BOOTSTRAP.md`. Follow that file and report recovered state before resuming as Steward.
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

Legacy chats may remain as historical reference, but new Project chats should be able to initialize correctly without replaying their entire transcripts.