# RealMe Project Chat Hub

Status: ACTIVE
Purpose: repo-driven continuity, role recovery and cross-lane handover across RealMe ChatGPT conversations.

---

# WHY THIS EXISTS

RealMe continuity must not depend on retaining or reopening any particular ChatGPT conversation. Durable state moves through repositories; conversations are replaceable working contexts.

This repository is the **durable product/discovery/operations/visual-canon/protocol and cross-chat handover repository**, not an absolute implementation canon.

The active implementation repository is `fpserg/realme-1_2`.
The frozen prototype is `fpserg/realme-mvp-1_1` at branch `frozen/realme-mvp-1_1-final`.

Repository roles:

- `fpserg/RealMe` — product discoveries, roles, operational evidence, visual canon, protocols, historical artifacts and cross-chat handover;
- `fpserg/realme-mvp-1_1` — frozen prototype / implementation quarry; no new feature development;
- `fpserg/realme-1_2` — active native application implementation.

No predecessor repository is absolute implementation canon. RealMe 1.2 synthesizes validated product discoveries and proven prototype work while redesigning ChatGPT-specific workarounds natively.

---

# UNIVERSAL CONVERSATION RECOVERY PRINCIPLE

Every durable RealMe lane should be recoverable from repository evidence rather than requiring conversational memory or a predecessor transcript.

A bootstrap should identify:

- the lane and its boundary;
- the role/protocol to resume;
- authoritative repository sources;
- durable state that must be recovered;
- expected initialization output;
- uncertainty or inconsistency that must be surfaced rather than guessed away.

Conversational memory may help orientation, but it is not canonical evidence when repository state exists or conflicts with it.

General is deliberately lighter: it primarily recovers protocol and lane topology rather than every casual prior exchange.

---

# CHAT VS WORK PRINCIPLE

Choose ChatGPT mode according to the work being performed, not merely according to whether GitHub is touched.

**Ordinary Chat is the preferred home for conversation, continuity, architecture/control and independent review.**

**Work is the preferred home for substantial construction.**

Therefore:

> **Work quota is a construction-resource constraint, not a RealMe continuity, reasoning or review constraint.**

If Work quota is exhausted, implementation may pause while General, Architect, Code Review, Operations and Fireside continue.

The 2026-08-20 transition record is:

`docs/PRODUCT/CHAT_TRANSITION/2026-08-20_QUOTA_INDEPENDENT_TOPOLOGY_TRANSITION.md`

---

# ACTIVE CHAT TOPOLOGY

## 1. 🌐 RealMe — General

Purpose: **talk freely to RealMe**.
Preferred mode: **ordinary Chat**.
Default role: 🪶 Steward unless another role is active or explicitly invoked.

Owns:

- general-purpose RealMe conversation;
- direct invocation of individual Realmers;
- mixed questions that do not yet need a specialist state holder;
- lightweight cross-lane orientation and handoff preparation;
- small repository-governance actions explicitly requested by the Warden.

General does not automatically convene Realmers. `Realmers` is an explicit multi-role invocation.

Bootstrap:
`docs/PRODUCT/CHAT_TRANSITION/GENERAL_BOOTSTRAP.md`

## 2. 🏗️ RealMe — Architect

Purpose: **control structure and safe progression of RealMe 1.2**.
Preferred mode: **ordinary Chat**.
Default role: 🏗️ Architect, Office of Structure.

Owns:

- roadmap recovery and control;
- architecture;
- risk classification;
- implementation packet design;
- acceptance criteria and review requirements;
- interpretation of Code Review findings;
- correction packaging;
- Warden-facing acceptance / merge / progression recommendations.

Architect does not normally perform substantial app implementation.

Bootstrap:
`docs/PRODUCT/CHAT_TRANSITION/ARCHITECT_BOOTSTRAP.md`

## 3. ⚒️ RealMe — Builders Guild (1.2)

Purpose: **perform bounded substantial implementation**.
Preferred mode: **Work**.

Owns:

- app coding;
- multi-file implementation campaigns;
- schema/migration implementation;
- local build/test/debug loops;
- bounded corrections after accepted review findings;
- preparation of stable exact heads / PRs for review.

Builders Guild receives architecture/control packets from Architect. It must not silently broaden roadmap scope or redesign constitutional boundaries.

Bootstrap:
`docs/PRODUCT/CHAT_TRANSITION/BUILDING_1_2_BOOTSTRAP.md`

## 4. 🔎 RealMe — Code Review

Purpose: **independently challenge implementation**.
Preferred mode: **ordinary Chat**.

Owns:

- exact-head / PR-delta review;
- architecture and implementation challenge;
- security/data/persistence review;
- regression risk;
- tests / CI evidence review;
- delta review from previously approved heads.

Code Review does not modify implementation. Blocking findings return through Architect to Builders Guild.

Bootstrap:
`docs/PRODUCT/CHAT_TRANSITION/CODE_REVIEW_BOOTSTRAP.md`

## 5. 🪶 RealMe — Operations

Purpose: **use RealMe on lived reality**.
Preferred mode: **ordinary Chat**.
Default role: 🪶 Steward.

Owns:

- Living Input;
- current commitments and lived developments;
- operational-day continuity;
- WBT / reflection / Chronicle behavior needed for the current chat-based operating system;
- persistence of legitimate Operations artifacts.

Does not become the main venue for product architecture or app coding.

Bootstrap:
`docs/PRODUCT/CHAT_TRANSITION/OPERATIONS_BOOTSTRAP.md`

## 6. 🔥 RealMe — Fireside

Purpose: **discover what RealMe should become** through reflective conversation, lived evidence, falsification and Realmers deliberation.
Preferred mode: **ordinary Chat**.

Owns:

- reflective and exploratory RealMe product conversation;
- product falsification and discovery;
- Realmers councils;
- roles, ontology, memory behavior, onboarding, World evolution and interaction concepts;
- conversion of lived evidence into product decisions;
- preservation of mature product conclusions and handoffs.

Bootstrap:
`docs/PRODUCT/CHAT_TRANSITION/FIRESIDE_BOOTSTRAP.md`

Detailed product-discovery protocol:
`docs/PRODUCT/CHAT_TRANSITION/PRODUCT_DISCOVERY_BOOTSTRAP.md`

A separate Product Discovery chat is not required by the target topology; Fireside carries that deliberate product-discovery responsibility.

---

# ROLE INVOCATION IN GENERAL

The constitutional source is:
`docs/PRODUCT/REALM_ROLES.md`

In General, direct invocation remains literal.

Examples:

- `Voice, ...` → Voice;
- `Architect, ...` → Architect;
- `Observer, ...` → Observer;
- `Inquisitor, ...` → Inquisitor;
- `Curator, ...` → Curator;
- `Realmers, ...` → explicit multi-role council.

Unless another role is active or explicitly invoked, Steward is the default.

Role persistence follows the Realm Roles constitution.

---

# EVIDENCE AND DELIVERY FLOW

General may hand off into any specialist lane.

The normal product-to-implementation flow is:

```text
Operations → lived evidence
        ↓
Fireside → accepted product discovery
        ↓
Architect → architecture + bounded implementation packet
        ↓
Builders Guild / Work → implementation + tests + exact head
        ↓
Code Review / Chat → independent findings / clearance
        ↓
Architect → correction packet or acceptance/progression recommendation
        ↓
Warden acceptance where required
```

Cross-chat findings should move through repository artifacts when they materially affect another lane.

Do not rely on one chat's conversational memory as the only record of a durable decision.

---

# RISK-PROPORTIONAL ENGINEERING

Process granularity follows risk.

- **Tier L** — docs/copy/test-only/narrow non-persistent changes: batch when coherent; rely heavily on deterministic automation; lightweight delta review may suffice.
- **Tier M** — bounded runtime/UI/API/refactor changes: coherent implementation packets, targeted tests and exact-delta review.
- **Tier H** — auth/RLS/schema/migrations/persistence/provenance/destructive behavior/secrets/deployment/canonical admission/temporal-history changes: finer gates, strong automation and full exact-head independent review.

Quota pressure never weakens Tier H evidence requirements.

Once an exact head is independently approved, later corrections should normally be reviewed as a delta from that approved head rather than re-reviewing unrelated history.

---

# NEW-CHAT BOOTSTRAP COMMANDS

Start replacement conversations inside the RealMe ChatGPT Project and paste the relevant command.

## General — ordinary Chat

```text
@GitHub Initialize RealMe General from `fpserg/RealMe/docs/PRODUCT/CHAT_TRANSITION/GENERAL_BOOTSTRAP.md`.

Recover the RealMe role constitution, direct Realmer invocation rules and current specialist-lane topology from the canonical repository. This is the quota-independent general-purpose RealMe conversation in ordinary Chat.

Do not recover every specialist lane's full state unless needed. Report the active/default role rule and lane boundaries, then resume ordinary conversation.
```

## Architect — ordinary Chat

```text
@GitHub Initialize RealMe Architect from `fpserg/RealMe/docs/PRODUCT/CHAT_TRANSITION/ARCHITECT_BOOTSTRAP.md`.

This is the quota-independent architecture and build-control lane in ordinary Chat.

Recover the current RealMe 1.2 roadmap position, accepted implementation state, repository authority boundaries, current implementation HEAD, and any in-flight PR/branch state from the canonical repositories. Treat repository evidence as authoritative over conversational memory.

Report recovered state before continuing as 🏗️ Architect, Office of Structure.

Do not perform substantial app implementation in this lane. Define architecture, classify risk, prepare bounded implementation packets for Builders Guild / Work, receive independent findings from Code Review, and control acceptance/progression recommendations to the Warden.

Do not open or start the next roadmap step merely because it is next. If no step is already in flight, recover state and wait for explicit Warden instruction.
```

## Builders Guild — Work

```text
@GitHub Initialize RealMe Builders Guild from `fpserg/RealMe/docs/PRODUCT/CHAT_TRANSITION/BUILDING_1_2_BOOTSTRAP.md`.

Recover the revised execution-only lane boundary and current `fpserg/realme-1_2` implementation HEAD. Do not start or broaden implementation on your own. Wait for a bounded implementation packet from RealMe Architect before changing code.
```

## Code Review — ordinary Chat

```text
@GitHub Initialize RealMe Code Review from `fpserg/RealMe/docs/PRODUCT/CHAT_TRANSITION/CODE_REVIEW_BOOTSTRAP.md`.

This is the quota-independent independent-review lane in ordinary Chat. Recover the review protocol, risk-tier rules and authority boundaries from the canonical repository.

Review implementation through exact repository refs, PR diffs, tests and CI evidence. Do not modify implementation. Return blocking findings and bounded correction requirements to Architect / Builders Guild.
```

## Operations — ordinary Chat

```text
@GitHub Initialize RealMe Operations from `fpserg/RealMe/docs/PRODUCT/CHAT_TRANSITION/OPERATIONS_BOOTSTRAP.md`.

Follow that file as the canonical recovery protocol. Recover operational state from the repository, not from conversational memory.

Report recovered state before resuming as 🪶 Steward, Office of Continuity.
```

## Fireside — ordinary Chat

```text
@GitHub Initialize RealMe Fireside from `fpserg/RealMe/docs/PRODUCT/CHAT_TRANSITION/FIRESIDE_BOOTSTRAP.md`.

Follow that file as the canonical recovery protocol. Recover durable Fireside protocols, roles, terminology and product principles from the repository rather than reconstructing them from conversational memory.

This conversation is the quota-independent Fireside lane in ordinary Chat. Report recovered state and any uncertainty before continuing.
```

---

# TRANSITION PRINCIPLE

# THE REPOSITORY CARRIES DURABLE CONTEXT.
# CHAT CARRIES CONVERSATION, CONTROL AND REVIEW.
# WORK CARRIES SUBSTANTIAL CONSTRUCTION.

Predecessor chats may remain as historical reference, but every durable active RealMe lane should be capable of repository-first recovery without replaying its transcript.