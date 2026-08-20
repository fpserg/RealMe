# RealMe — Quota-Independent Chat Topology Transition

Date: 2026-08-20
Status: ACTIVE TRANSITION RECORD
Authority: Warden-requested process simplification
Scope: ChatGPT project lanes and repository-first recovery; no native-app product semantics are changed by this document

---

# 1. WHY THE TOPOLOGY CHANGES

The previous RealMe project topology concentrated architecture, implementation and review inside Work-mode conversations. That made Work quota a constraint not only on construction but also on planning, review and continuity.

The revised topology separates **conversation / control / review** from **substantial construction**.

The governing principle is:

> **Spend Work quota on changing the implementation, not on talking about changing the implementation.**

This does not lower engineering standards.

Quality and safety remain grounded in:

- explicit architectural boundaries;
- risk-proportional implementation granularity;
- automated tests and CI;
- exact repository refs;
- independent Code Review;
- explicit Warden authority for major acceptance and roadmap changes.

---

# 2. TARGET ACTIVE TOPOLOGY

| Lane | Preferred mode | Purpose |
|---|---|---|
| 🌐 RealMe — General | ordinary Chat | Free-form RealMe room; direct access to individual Realmers; cross-lane orientation |
| 🏗️ RealMe — Architect | ordinary Chat | Roadmap, architecture, risk classification, implementation packets, acceptance control |
| ⚒️ RealMe — Builders Guild (1.2) | Work | Substantial implementation and implementation fixes |
| 🔎 RealMe — Code Review | ordinary Chat | Independent exact-ref implementation audit |
| 🪶 RealMe — Operations | ordinary Chat | LI, WBT, Freeze, Chronicle and lived continuity |
| 🔥 RealMe — Fireside | ordinary Chat | Product discovery, falsification, Realmers councils and product constitution |

Only **Builders Guild** is expected to require Work for normal operation.

If Work quota is exhausted, implementation may pause while General, Architect, Code Review, Operations and Fireside continue functioning.

---

# 3. LANE DEFINITIONS

## 🌐 General

General is intentionally not an office with a single specialist agenda.

It is where the Warden may freely talk to RealMe and directly invoke any Realmer.

Examples:

- `Voice, ...` → Voice answers;
- `Architect, ...` → Architect answers;
- `Inquisitor, ...` → Inquisitor answers;
- `Realmers, ...` → explicit multi-role council.

General primarily recovers protocol, not every casual prior exchange.

Canonical bootstrap:
`docs/PRODUCT/CHAT_TRANSITION/GENERAL_BOOTSTRAP.md`

## 🏗️ Architect

Architect is the quota-independent technical control tower.

It owns:

- current roadmap position;
- architecture;
- implementation boundaries;
- risk tiering;
- implementation packet preparation;
- review requirements;
- interpretation of Code Review findings;
- acceptance / merge recommendations and Warden-facing progression control.

It does not perform substantial app implementation as its normal job.

Canonical bootstrap:
`docs/PRODUCT/CHAT_TRANSITION/ARCHITECT_BOOTSTRAP.md`

## ⚒️ Builders Guild

Builders Guild is the construction site.

It receives a bounded implementation packet from Architect, performs substantial code/migration/test work in Work mode, and returns exact completion evidence.

It must not silently redesign architecture or broaden the accepted step.

Canonical bootstrap:
`docs/PRODUCT/CHAT_TRANSITION/BUILDING_1_2_BOOTSTRAP.md`

## 🔎 Code Review

Code Review is independent assurance and should operate in ordinary Chat by default.

It inspects the actual exact repository head / PR delta, tests and CI evidence. It does not modify implementation during review.

When correction is required, findings return through Architect to Builders Guild.

Canonical bootstrap:
`docs/PRODUCT/CHAT_TRANSITION/CODE_REVIEW_BOOTSTRAP.md`

## 🪶 Operations

Operations remains a quota-independent ordinary Chat lane carrying lived operational continuity.

Canonical bootstrap:
`docs/PRODUCT/CHAT_TRANSITION/OPERATIONS_BOOTSTRAP.md`

## 🔥 Fireside

Fireside remains a quota-independent ordinary Chat lane for deliberate RealMe product discovery and Realmers deliberation.

Canonical bootstrap:
`docs/PRODUCT/CHAT_TRANSITION/FIRESIDE_BOOTSTRAP.md`

`PRODUCT_DISCOVERY_BOOTSTRAP.md` remains the detailed product-discovery protocol used by Fireside; a separate Product Discovery chat is not required by the target topology.

---

# 4. NEW TECHNICAL DELIVERY FLOW

Normal implementation flow:

```text
Operations / Fireside / General evidence
        ↓
Architect
  - define bounded outcome
  - classify risk
  - define acceptance evidence
        ↓
Builders Guild / Work
  - implement
  - test
  - produce exact head / PR
        ↓
Code Review / Chat
  - inspect exact delta
  - challenge safety / correctness
        ↓
Architect
  - classify findings
  - correction packet if required
  - acceptance / merge recommendation
        ↓
Warden acceptance / progression where required
```

A review correction loop returns only the bounded correction to Builders Guild.

---

# 5. RISK-PROPORTIONAL PROCESS

The old workflow sometimes used the same ceremonial granularity for very different risk levels. The new workflow makes granularity proportional to risk.

## Tier L — low risk

Typical examples:

- documentation;
- copy / status strings;
- test-only changes;
- narrow non-persistent presentation deltas.

May be batched and reviewed lightly when deterministic automation proves the relevant invariants.

## Tier M — medium risk

Typical examples:

- bounded UI features;
- reversible business logic;
- non-destructive APIs;
- isolated refactors with runtime impact.

Use coherent implementation packets, targeted tests and exact-delta review.

## Tier H — high / constitutional risk

Typical examples:

- authentication / authorization;
- RLS;
- schema and migrations;
- persistence / provenance;
- destructive operations;
- secrets;
- deployment / production boundaries;
- canonical admission / World Model mutation;
- temporal-history rewriting.

Keep fine-grained gates, strong automation and full exact-head independent review.

Work quota pressure never weakens Tier H evidence requirements.

---

# 6. DELTA REVIEW PRINCIPLE

Once an exact head is independently approved, that clearance becomes a review anchor.

A later correction or acceptance delta should normally be reviewed from the approved head to the new head, not by repeating a full historical review.

Broader review is required only when the new delta can invalidate previously accepted assumptions, security boundaries or tests.

Documentation-only acceptance/status changes above an already approved implementation do not automatically require a full implementation re-review.

---

# 7. CURRENT IMPLEMENTATION BASELINE AT TRANSITION

On 2026-08-20, the authoritative `fpserg/realme-1_2` README and MVP roadmap reported:

- Step 93 — ACCEPTED;
- Step 94 — ACCEPTED;
- Step 95 — ACCEPTED;
- Step 96 — ACCEPTED;
- Step 97 — ACCEPTED;
- Step 98 — Canonical Truth Schema — NOT STARTED.

Always verify live repository state before acting; this section is a historical transition anchor, not a permanent current-status source.

Step 98 is Tier H because it introduces the first constitutional database migration and the persisted separation of observation, interpretation, admission and World Model state.

---

# 8. MIGRATION ACTIONS

## A. General

Keep the existing ordinary Chat `🌐 RealMe — General` as General.

Do not convert it into Architect.

From this transition onward, follow:
`docs/PRODUCT/CHAT_TRANSITION/GENERAL_BOOTSTRAP.md`

General stays deliberately broad and allows direct invocation of individual Realmers.

## B. Architect — create a new ordinary Chat

Create a new project chat named:

`🏗️ RealMe — Architect`

Paste the bootstrap command in Section 9 below.

Successful recovery requires exact repository orientation and a report of current roadmap state before any implementation packet is issued.

## C. Builders Guild — retain existing Work chat

Keep the existing Work conversation:

`⚒️ RealMe — Builders Guild (1.2)`

Before new implementation, ask it to reload the revised canonical Builders Guild bootstrap and wait for the Architect packet.

Do not recreate the Work thread merely for this topology change unless its context is unusable.

## D. Code Review — ordinary Chat

The active Code Review lane should be an ordinary Chat initialized from the revised Code Review bootstrap.

Any predecessor Work-mode Code Review thread becomes historical after the Chat-mode reviewer recovers successfully.

Do not require Work solely for repository inspection, PR-diff review, test/CI evidence review or acceptance-delta review.

## E. Operations

Keep the recovered ordinary Chat Operations lane.

No additional migration is required beyond following its canonical bootstrap.

## F. Fireside

Keep the recovered ordinary Chat Fireside lane.

No additional migration is required beyond following its canonical bootstrap and Product Discovery protocol.

## G. Historical conversations

Do not delete predecessor threads.

Where useful, rename superseded conversations with `(old)` to make the active topology visually obvious.

Historical threads are reference material, not canonical durable state.

---

# 9. NEW ARCHITECT CHAT — EXACT INITIALIZATION PROMPT

Paste this as the first message in a new ordinary Chat inside the RealMe project:

```text
@GitHub Initialize RealMe Architect from `fpserg/RealMe/docs/PRODUCT/CHAT_TRANSITION/ARCHITECT_BOOTSTRAP.md`.

This is the quota-independent architecture and build-control lane in ordinary Chat.

Recover the current RealMe 1.2 roadmap position, accepted implementation state, repository authority boundaries, current implementation HEAD, and any in-flight PR/branch state from the canonical repositories. Treat repository evidence as authoritative over conversational memory.

Report recovered state before continuing as 🏗️ Architect, Office of Structure.

Do not perform substantial app implementation in this lane. Define architecture, classify risk, prepare bounded implementation packets for Builders Guild / Work, receive independent findings from Code Review, and control acceptance/progression recommendations to the Warden.

Do not open or start the next roadmap step merely because it is next. If no step is already in flight, recover state and wait for explicit Warden instruction.
```

---

# 10. BUILDERS GUILD REFRESH PROMPT

Send this to the existing Work-mode Builders Guild before the next implementation campaign:

```text
@GitHub Reload the current Builders Guild protocol from `fpserg/RealMe/docs/PRODUCT/CHAT_TRANSITION/BUILDING_1_2_BOOTSTRAP.md`.

The architecture/control function has moved to the quota-independent `RealMe — Architect` Chat lane. Recover the revised lane boundary and current implementation HEAD, but do not start or broaden implementation on your own.

From now on, use Work primarily for substantial implementation, tests, migrations, debugging and bounded corrections. Wait for a current implementation packet from Architect before changing code.
```

---

# 11. CODE REVIEW INITIALIZATION PROMPT

For a fresh ordinary Chat reviewer:

```text
@GitHub Initialize RealMe Code Review from `fpserg/RealMe/docs/PRODUCT/CHAT_TRANSITION/CODE_REVIEW_BOOTSTRAP.md`.

This is the quota-independent independent-review lane in ordinary Chat. Recover the review protocol, risk-tier rules and authority boundaries from the canonical repository.

Review implementation through exact repository refs, PR diffs, tests and CI evidence. Do not modify implementation. Return blocking findings and bounded correction requirements to Architect / Builders Guild.

If no review target is currently supplied, recover protocol and current high-level implementation state, then wait for Architect's review handoff.
```

---

# 12. GENERAL RECOVERY PROMPT

A future replacement General chat may be initialized with:

```text
@GitHub Initialize RealMe General from `fpserg/RealMe/docs/PRODUCT/CHAT_TRANSITION/GENERAL_BOOTSTRAP.md`.

Recover the RealMe role constitution, direct Realmer invocation rules and current specialist-lane topology from the canonical repository. This is the quota-independent general-purpose RealMe conversation in ordinary Chat.

Do not recover every specialist lane's full state unless needed. Report the active/default role rule and lane boundaries, then resume ordinary conversation.
```

---

# 13. SUCCESS CONDITION

The transition is complete when:

- General remains a free-form ordinary Chat;
- Architect is initialized in ordinary Chat and can recover current implementation/roadmap state from repositories;
- Builders Guild recognizes that it is the Work execution lane and waits for Architect packets;
- Code Review operates independently in ordinary Chat;
- Operations and Fireside remain repository-first ordinary Chat lanes;
- only substantial implementation normally depends on Work quota;
- no safety/constitutional acceptance gate has been weakened by the topology change.

---

# 14. ENDURING PRINCIPLE

# THE REPOSITORY CARRIES DURABLE CONTEXT.
# CHAT CARRIES CONVERSATION, CONTROL AND REVIEW.
# WORK CARRIES SUBSTANTIAL CONSTRUCTION.

Quota scarcity may delay construction.

It must not make RealMe forget, stop operating, stop thinking, or lower its engineering safety bar.