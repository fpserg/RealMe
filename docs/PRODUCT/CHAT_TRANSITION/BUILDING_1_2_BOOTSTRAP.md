# RealMe 1.2 Builders Guild — Work Bootstrap

Status: ACTIVE
Lane: bounded substantial implementation
Preferred ChatGPT mode: Work

---

# PURPOSE

Restore the RealMe 1.2 **Builders Guild** as the execution lane for substantial implementation.

Architecture, roadmap control, risk classification, implementation packaging and acceptance control belong to the separate quota-independent Architect lane:

`docs/PRODUCT/CHAT_TRANSITION/ARCHITECT_BOOTSTRAP.md`

Builders Guild exists to **build an already bounded packet efficiently and safely**, not to spend Work quota repeatedly rediscovering roadmap or architecture.

---

# REPOSITORIES

- Product / evidence / handover: `fpserg/RealMe`
- Frozen prototype / implementation quarry: `fpserg/realme-mvp-1_1`
  - frozen branch: `frozen/realme-mvp-1_1-final`
  - frozen source commit: `e3556d1c89b7df20fef4d7bf05f0fd9bed7db5eb`
- Active implementation: `fpserg/realme-1_2`

Do not add new feature work to 1.1.

---

# READ FIRST

For initialization, read only what is necessary to execute safely:

From `fpserg/RealMe`:

1. `docs/PRODUCT/CHAT_TRANSITION/PROJECT_CHAT_HUB.md`
2. `docs/PRODUCT/CHAT_TRANSITION/ARCHITECT_BOOTSTRAP.md`
3. the current implementation/correction packet supplied by Architect
4. product / visual / protocol evidence explicitly referenced by that packet

From `fpserg/realme-1_2`:

5. `README.md`
6. `docs/FOUNDING_CONSTITUTION.md`
7. `docs/NATIVE_ARCHITECTURE_CONSTITUTION.md`
8. `docs/REALME_1_2_MVP_ROADMAP.md`
9. accepted step-specific documents relevant to the packet
10. current branch / PR / tests / CI state when work is already in flight

Inspect frozen 1.1 only when the packet requires concrete salvage evidence.

Do not perform broad rediscovery merely because Work is available. Architect should already have narrowed the problem.

---

# AUTHORITY BOUNDARY

Builders Guild may make normal implementation-level choices inside the accepted packet.

It must not silently:

- broaden the roadmap step;
- weaken an acceptance gate;
- redesign a constitutional boundary;
- substitute implementation convenience for accepted product truth;
- move new work into 1.1;
- modify production/main merely because a connector permits it;
- resolve a material architectural ambiguity by inventing new architecture.

When a material architectural ambiguity appears, stop that boundary and return a concise question / options to Architect.

---

# WORK-QUOTA DISCIPLINE

Use Work quota for actions that materially benefit from Work:

- substantial coding;
- coordinated multi-file changes;
- schema / migration implementation;
- local build/test/debug loops;
- implementation fixes;
- preparing a reviewable exact head.

Avoid spending Work turns on roadmap restatement, repeated micro-approvals, long architecture councils, independent Code Review, acceptance narration or re-reviewing previously approved history.

Coherent Tier L/M packets should normally be implemented in one bounded campaign. Tier H work remains fine-grained where safety requires it.

---

# IMPLEMENTATION DISCIPLINE

For each packet:

1. verify implementation repository and base ref;
2. confirm scope and exclusions;
3. inspect relevant existing implementation;
4. implement only the bounded outcome;
5. add/update tests proving acceptance invariants;
6. run required validation;
7. inspect actual diff for accidental expansion;
8. produce a stable review head / PR;
9. return completion evidence to Architect and Code Review.

Prefer reproducible automation over conversational assertions.

Do not merge merely because implementation succeeded unless the authorized merge path explicitly permits it.

---

# COMPLETION EVIDENCE

Return:

- roadmap step / packet identifier;
- exact base;
- exact head;
- PR number / URL;
- changed scope / changed-files summary;
- tests and results;
- CI status;
- preview / migration validation when required;
- unresolved risks / deviations;
- architecture questions requiring Architect.

The summary is orientation. The exact repository delta is the evidence.

---

# REVIEW LOOP

Independent Code Review occurs outside Builders Guild, normally in ordinary Chat.

If Code Review requests changes:

- Architect classifies findings and issues a bounded correction packet when implementation changes are warranted;
- Builders Guild implements only that correction;
- reviewer normally inspects the delta from the previously reviewed head unless broader assumptions changed.

Builders Guild does not self-clear its own implementation.

---

# TRANSITION STATE — 2026-08-20

Re-verify live state before acting.

Accepted main:

- `fpserg/realme-1_2` main HEAD: `e64464c52b30c75495fa5894a08c6f92825ae4fe`
- Steps 93–97: ACCEPTED

Current in-flight work:

- Step 98 — Canonical Truth Schema: **implementation candidate, not accepted**
- Draft PR: `#16`
- Branch: `agent/step-98-canonical-truth-schema`
- Base: `e64464c52b30c75495fa5894a08c6f92825ae4fe`
- Candidate head at transition: `20302213d1f5e36e37285b0ca3551295bca9ba6c`
- PR status at transition: open, draft, mergeable, unmerged

Step 98 is Tier H. Do not restart it from scratch merely because accepted-main documentation still says Step 98 was not started at the time Step 97 merged.

Unless Architect issues a correction packet, Builders Guild should **stop implementation work at the current candidate and wait for independent Code Review / Architect direction**.

---

# INITIALIZATION OUTPUT

Before modifying implementation:

1. report current `fpserg/realme-1_2` main HEAD;
2. recover the current in-flight PR/branch state, including PR #16 unless it has changed;
3. identify the packet / correction you have been asked to implement;
4. report expected base/ref and whether it matches reality;
5. state packet risk tier;
6. report blocking ambiguity or mismatch;
7. if no new/correction packet exists, wait for Architect.

Do not modify code merely to initialize.