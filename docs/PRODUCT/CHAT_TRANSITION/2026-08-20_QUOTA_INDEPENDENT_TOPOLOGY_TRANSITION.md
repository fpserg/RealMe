# RealMe — Quota-Independent Chat Topology Transition

Date: 2026-08-20
Status: ACTIVE TRANSITION RECORD
Authority: Warden-requested process simplification
Scope: ChatGPT project lanes and repository-first recovery; no native-app product semantics are changed by this document

---

# 1. WHY THE TOPOLOGY CHANGES

The previous RealMe project topology concentrated architecture, implementation and review inside Work-mode conversations. That made Work quota a constraint not only on construction but also on planning, review and continuity.

The revised topology separates **conversation / control / review** from **substantial construction**.

> **Spend Work quota on changing implementation, not on talking about changing implementation.**

Engineering standards remain grounded in explicit boundaries, risk-proportional granularity, automated tests/CI, exact refs, independent Code Review and Warden authority.

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

Only Builders Guild is expected to require Work for normal operation.

If Work quota is exhausted, implementation may pause while General, Architect, Code Review, Operations and Fireside continue.

---

# 3. LANE DEFINITIONS

## 🌐 General

The Warden's free-form room for talking to RealMe. Individual Realmers may be invoked directly; `Realmers` explicitly invokes the multi-role council.

Bootstrap: `docs/PRODUCT/CHAT_TRANSITION/GENERAL_BOOTSTRAP.md`

## 🏗️ Architect

Quota-independent technical control tower: current roadmap position, architecture, implementation boundaries, risk tiering, implementation packets, review requirements, correction packaging and Warden-facing acceptance/progression recommendations.

Bootstrap: `docs/PRODUCT/CHAT_TRANSITION/ARCHITECT_BOOTSTRAP.md`

## ⚒️ Builders Guild

Work-mode construction site. Receives bounded packets from Architect, performs substantial code/migration/test work and returns exact completion evidence. It must not silently redesign architecture or broaden the step.

Bootstrap: `docs/PRODUCT/CHAT_TRANSITION/BUILDING_1_2_BOOTSTRAP.md`

## 🔎 Code Review

Quota-independent assurance lane. Inspects actual exact heads / PR deltas, tests and CI evidence. It does not modify implementation during review. Findings return through Architect to Builders Guild.

Bootstrap: `docs/PRODUCT/CHAT_TRANSITION/CODE_REVIEW_BOOTSTRAP.md`

## 🪶 Operations

Quota-independent lived-operation lane.

Bootstrap: `docs/PRODUCT/CHAT_TRANSITION/OPERATIONS_BOOTSTRAP.md`

## 🔥 Fireside

Quota-independent deliberate product-discovery lane. `PRODUCT_DISCOVERY_BOOTSTRAP.md` remains its deeper discovery protocol; a separate Product Discovery chat is not required.

Bootstrap: `docs/PRODUCT/CHAT_TRANSITION/FIRESIDE_BOOTSTRAP.md`

---

# 4. TECHNICAL DELIVERY FLOW

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

A correction loop returns only the bounded correction to Builders Guild.

---

# 5. RISK-PROPORTIONAL PROCESS

- **Tier L** — docs/copy/test-only/narrow non-persistent changes: batch coherently; deterministic automation and lightweight delta review may suffice.
- **Tier M** — bounded runtime/UI/API/refactor changes: coherent implementation packet, targeted tests and exact-delta review.
- **Tier H** — auth/RLS/schema/migrations/persistence/provenance/destructive behavior/secrets/deployment/canonical admission/temporal-history changes: finer gates, strong automation and full exact-head independent review.

Work quota pressure never weakens Tier H evidence requirements.

---

# 6. DELTA REVIEW PRINCIPLE

Once an exact head is independently approved, it becomes a review anchor.

Later corrections or acceptance deltas should normally be reviewed from that approved head to the new head rather than by repeating unrelated historical review.

Expand beyond the delta when the new change can invalidate earlier assumptions, security boundaries or tests.

Documentation-only acceptance/status changes above an approved implementation do not automatically require full implementation re-review.

---

# 7. IMPLEMENTATION STATE AT THE TRANSITION

This is the exact handoff state observed on 2026-08-20. Always re-verify live state.

## Accepted main

- Repository: `fpserg/realme-1_2`
- Main HEAD: `e64464c52b30c75495fa5894a08c6f92825ae4fe`
- Steps 93–97: ACCEPTED
- Step 97 merge: PR #15 integrated into main

The accepted-main README/roadmap still says Step 98 was not started at the moment Step 97 merged. That string does **not** describe the current branch/PR state.

## In-flight Step 98

Step 98 has since started and already has an implementation candidate:

- Step: **98 — Canonical Truth Schema**
- Risk: **Tier H**
- Draft PR: `fpserg/realme-1_2#16`
- Branch: `agent/step-98-canonical-truth-schema`
- Base/main: `e64464c52b30c75495fa5894a08c6f92825ae4fe`
- Candidate head observed at transition: `20302213d1f5e36e37285b0ca3551295bca9ba6c`
- PR state observed: open, draft, mergeable, unmerged
- Distance reported in PR: 1 ahead, 0 behind
- Scope reported in PR: 28 files

Builder-reported validation at that candidate included local `pnpm check`, GitHub Actions run #73, Netlify Deploy Preview and staging rollback-only checks. Production was reported unchanged.

These validation statements are **reported evidence until independently checked by Code Review**.

The migration must therefore preserve the existing Step 98 candidate rather than restarting Step 98.

---

# 8. MIGRATION ACTIONS

## A. General

Keep the existing ordinary Chat `🌐 RealMe — General` as General. Do not convert it into Architect.

From this transition onward, follow `GENERAL_BOOTSTRAP.md`.

## B. Architect — create a new ordinary Chat

Create `🏗️ RealMe — Architect` in ordinary Chat and initialize it using Section 9.

It must recover PR #16 as the current in-flight Step 98 candidate, distinguish accepted-main state from branch state, and continue control from there.

It must **not** reopen Step 98 from scratch.

## C. Builders Guild — retain existing Work chat

Keep `⚒️ RealMe — Builders Guild (1.2)` in Work.

Reload its revised bootstrap. Because Step 98 already has a candidate head, Builders Guild should now wait for Code Review / Architect direction unless a bounded correction packet is issued.

## D. Code Review — ordinary Chat

The active Code Review lane should be ordinary Chat initialized from the revised Code Review bootstrap.

Its immediate review target at the transition is PR #16 / the current exact Step 98 head unless Architect identifies a newer target.

Any predecessor Work-mode Code Review thread becomes historical after the Chat-mode reviewer recovers successfully.

## E. Operations

Keep the recovered ordinary Chat Operations lane. No further migration is required.

## F. Fireside

Keep the recovered ordinary Chat Fireside lane. No further migration is required.

## G. Historical conversations

Do not delete predecessor threads. Rename superseded conversations with `(old)` where helpful.

Historical threads are reference material, not canonical durable state.

---

# 9. NEW ARCHITECT CHAT — EXACT INITIALIZATION PROMPT

Paste this as the first message in a new ordinary Chat inside the RealMe project:

```text
@GitHub Initialize RealMe Architect from `fpserg/RealMe/docs/PRODUCT/CHAT_TRANSITION/ARCHITECT_BOOTSTRAP.md`.

This is the quota-independent architecture and build-control lane in ordinary Chat.

Recover the current RealMe 1.2 roadmap position, accepted implementation state, repository authority boundaries, current main HEAD, and all relevant in-flight PR/branch state from the canonical repositories. Treat repository evidence as authoritative over conversational memory.

Important transition anchor: Step 97 is accepted on main, while Step 98 already has an in-flight draft implementation candidate in `fpserg/realme-1_2` PR #16. Resolve the live PR #16 state and exact head rather than restarting Step 98 or relying only on the main README status string.

Report recovered state before continuing as 🏗️ Architect, Office of Structure.

Do not perform substantial app implementation in this lane. Define architecture, classify risk, prepare bounded implementation/correction packets for Builders Guild / Work, receive independent findings from Code Review, and control acceptance/progression recommendations to the Warden.

If PR #16 remains the current candidate, continue from review/acceptance control. Do not open the next roadmap step merely because it is next.
```

---

# 10. BUILDERS GUILD REFRESH PROMPT

Send this to the existing Work-mode Builders Guild:

```text
@GitHub Reload the current Builders Guild protocol from `fpserg/RealMe/docs/PRODUCT/CHAT_TRANSITION/BUILDING_1_2_BOOTSTRAP.md`.

The architecture/control function has moved to the quota-independent `RealMe — Architect` Chat lane.

Recover the revised lane boundary and current `fpserg/realme-1_2` state, including Step 98 draft PR #16 and its live exact head. Do not restart Step 98, broaden it, or merge it on your own.

From now on, use Work primarily for substantial implementation, tests, migrations, debugging and bounded corrections. If the current Step 98 candidate is already complete, wait for independent Code Review / Architect direction unless a correction packet is issued.
```

---

# 11. CODE REVIEW INITIALIZATION PROMPT

For a fresh ordinary Chat reviewer:

```text
@GitHub Initialize RealMe Code Review from `fpserg/RealMe/docs/PRODUCT/CHAT_TRANSITION/CODE_REVIEW_BOOTSTRAP.md`.

This is the quota-independent independent-review lane in ordinary Chat. Recover the review protocol, risk-tier rules and authority boundaries from the canonical repository.

The current transition target is Step 98 draft PR #16 in `fpserg/realme-1_2`. Resolve its live exact head/status and independently review the implementation through exact repository refs, PR diffs, tests, CI, migration/staging evidence and relevant constitutional documents.

Do not modify implementation. Return blocking findings and bounded correction requirements to Architect / Builders Guild.
```

---

# 12. GENERAL RECOVERY PROMPT

A future replacement General chat may use:

```text
@GitHub Initialize RealMe General from `fpserg/RealMe/docs/PRODUCT/CHAT_TRANSITION/GENERAL_BOOTSTRAP.md`.

Recover the RealMe role constitution, direct Realmer invocation rules and current specialist-lane topology from the canonical repository. This is the quota-independent general-purpose RealMe conversation in ordinary Chat.

Do not recover every specialist lane's full state unless needed. Report the active/default role rule and lane boundaries, then resume ordinary conversation.
```

---

# 13. SUCCESS CONDITION

The transition is complete when:

- General remains free-form ordinary Chat;
- Architect is initialized in ordinary Chat and recovers PR #16/current roadmap state correctly;
- Builders Guild recognizes it is the Work execution lane and waits for bounded packets/corrections;
- Code Review operates independently in ordinary Chat and can audit PR #16/exact deltas;
- Operations and Fireside remain repository-first ordinary Chat lanes;
- only substantial implementation normally depends on Work quota;
- no safety/constitutional acceptance gate is weakened.

---

# 14. ENDURING PRINCIPLE

# THE REPOSITORY CARRIES DURABLE CONTEXT.
# CHAT CARRIES CONVERSATION, CONTROL AND REVIEW.
# WORK CARRIES SUBSTANTIAL CONSTRUCTION.

Quota scarcity may delay construction.

It must not make RealMe forget, stop operating, stop thinking, or lower its engineering safety bar.