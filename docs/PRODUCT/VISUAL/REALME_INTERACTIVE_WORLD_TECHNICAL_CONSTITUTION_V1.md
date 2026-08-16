# REALME_INTERACTIVE_WORLD_TECHNICAL_CONSTITUTION_V1.md

Version: 1.0
Status: FROZEN — Step 92
Scope: Interactive World implementation contract
Authority: Warden-approved Steps 89–91, amended before freeze

---

# I. PRIME LAW

# THE PAINTING IS THE GEOGRAPHY.
# THE CODE IS THE SEMANTICS.

Frozen visual masters determine terrain, coastline, mountains, settlements, visible roads, spatial character and visual relationships. Code must not independently reconstruct a competing geography.

Code owns identity, hierarchy, interaction geometry, navigation, state and dynamic overlays.

---

# II. SEMANTIC HIERARCHY

WORLD → REALM → DOMAIN → LOCUS → relevant activity/history/state.

Commitments/events/state may be projected onto this hierarchy but are not a fourth geographic order equivalent to World/Realm/Domain.

The current 3-Realm / 9-Domain World is the Warden's current discovered World, not a universal hard-coded RealMe template. The product architecture must eventually support 0..N Realms, 0..N Domains per Realm and 0..N Loci per Domain.

# THE HIERARCHY IS PRODUCT ARCHITECTURE.
# THE CURRENT GEOGRAPHY IS USER STATE.

---

# III. CURRENT CANONICAL INSTANCE

World:
- Household — NW;
- Career — NE;
- Third — S.

Household:
- Stronghold — NW / NNW;
- Family — middle;
- Capital — E / SE.

Career:
- Lighthouse / TMT — NW coast;
- Confluence — middle;
- Observatory / Strategy — SE inland highlands.

Third:
- RealMe Laboratory — N / northern promontory;
- Gifted — W;
- Tower — E;
- continent continues S beyond viewport.

Superseded semantics must not return as current canon: Leadership as current Domain, RealMe Monastery, Strategy Citadel, archipelago/island cosmology, or Citadel as a World obligation.

---

# IV. STABLE IDENTITY AND COMPATIBILITY

Machine identity and display identity are separate. A place may be renamed or reconceptualized without destroying historical references.

Legacy aliases resolve one-way into current identities. Example: legacy `leadership` may resolve to current Confluence during migration. Canonical output must not resolve Confluence back into Leadership.

Compatibility preserves history; it does not preserve obsolete ontology.

Do not recklessly rename persisted IDs until their dependencies are known.

---

# V. ASSET CONSTITUTION

Current canonical visual registry contains 13 semantic-zoom masters:

- world;
- realm.household;
- realm.career;
- realm.third;
- domain.stronghold;
- domain.family;
- domain.capital;
- domain.tmt;
- domain.confluence;
- domain.strategy;
- domain.tower;
- domain.realme;
- domain.gifted.

Deprecated cosmological asset names such as `worldArchipelago`, `householdIsland`, `careerIsland`, `thirdIsland` must migrate toward semantic naming. Water and landmass form are visual facts, not ontology.

All canonical masters are native 9:16 portrait / mobile-first. Responsive layouts may change presentation but must not invent a second desktop geography.

---

# VI. COORDINATE AND INTERACTION GEOMETRY

All map interaction coordinates are normalized to the relevant parent master (0..1 or percentage equivalent), never current screen pixels and not one universal 3200×2000 geography.

Every navigable child has three distinct spatial concepts:

1. Visual anchor — where its identity glyph appears.
2. Hit region — where a user can reasonably tap to select it.
3. Entry focus — where the camera converges during transition.

# ANCHOR ≠ HIT REGION ≠ CAMERA TARGET.

Hit regions are not limited to landmark pixels. They may be ellipses or polygons and should provide mobile-safe tap targets without drawing visible borders.

# CLICKABLE CENTRES NEED BREATHING ROOM, NOT VISIBLE BORDERS.

---

# VII. NAVIGATION LAW

# ONE TAP = ONE SEMANTIC SCALE INWARD.

World tap → Realm.
Realm tap → Domain.
Domain tap → Locus/activity where applicable.

Ordinary map navigation does not skip levels. Explicit deep links from other product surfaces may enter deeper levels directly.

Back reverses exactly one semantic step. A modal/overlay closes back to its underlying geographic level rather than forcing a geographic retreat.

---

# VIII. DOUBLE-TAP LAW — WARDEN AMENDMENT BEFORE STEP 92

# TAP = APPROACH ONE SEMANTIC LEVEL.
# DOUBLE TAP = RETREAT ONE SEMANTIC LEVEL.

Double-tap-back is an intentional RealMe spatial gesture, not an accidental legacy behaviour.

A visible/standard Back action remains available and performs the same outward semantic operation. Double tap is therefore an accelerator, never the only escape mechanism.

Double tap must not be reassigned to optical zoom by default.

Implementation must test event ambiguity between single-tap inward navigation and double-tap retreat. Preferred first prototype: double-tap retreat is recognized on non-interactive/background terrain so it does not compete directly with a landmark's single-tap inward action. If device testing supports reliable immediate gesture handling without perceptible single-tap delay or transition reversal, broader double-tap retreat may be enabled.

# THE GESTURE GRAMMAR IS SEMANTIC, NOT PHOTOGRAPHIC.

---

# IX. PINCH AND PAN LAW

Pinch may inspect, magnify or reframe the current semantic master. It must not automatically enter or leave a Realm/Domain because an optical zoom threshold was crossed.

# OPTICAL ZOOM ≠ SEMANTIC ZOOM.

Pan is permitted while the current master is optically enlarged. Bounds prevent losing the canonical composition entirely. At base scale the master remains centered.

---

# X. SEMANTIC TRANSITION LAW

The user should perceive approach to an already-visible place even though destination levels use separate paintings.

Canonical transition sequence:
1. target acquisition with restrained Realm-colour focus;
2. pan/scale toward entry focus;
3. destination master dissolves in;
4. visual landmark/terrain correspondence aligns the two scales;
5. destination settles to its base framing and child hit regions activate.

# LANDMARKS ARE TRANSITION ANCHORS.
# SEMANTIC ZOOM = VISUAL APPROACH + INFORMATION DISCLOSURE.

Initial engineering target: roughly 450–700 ms total, tuned on real devices. Reduced-motion mode substitutes a short dissolve.

Realm colours are UI signatures, not landscape filters: Household green, Career blue, Third purple.

---

# XI. DOMAIN ENTRY LAW

Domain navigation resolves to the canonical Domain master.

WORLD MASTER → REALM MASTER → DOMAIN MASTER.

A zoomed Realm crop may be the transition origin but is not the final Domain view.

---

# XII. DYNAMIC STATE AND DISCOVERY

Frozen paintings establish stable geographic identity. Dynamic state is a separate layer: commitments, deadlines, WBT activity, newly discovered structure, attention cues, Realm state and future environmental metaphors.

# CANONICAL GEOGRAPHY AND DYNAMIC STATE ARE SEPARATE LAYERS.

Semantic discovery precedes visual regeneration:

WORLD MODEL → VISUAL WORLD.

An image must not create ontology merely because a generated feature appears in it.

Structural change should regenerate only affected masters where possible. A new Domain in Third may require the new Domain master, Third Realm master, and World master only if World-scale identity materially changes; unrelated masters should not be regenerated automatically.

---

# XIII. LEGACY MAP MIGRATION

Retain/migrate where genuinely useful:
- stable IDs;
- Realm membership;
- display names;
- aliases;
- semantic metadata used elsewhere;
- interaction anchors;
- commitment resolution;
- Domain normalization/mapping;
- restrained theme-colour metadata.

Retire as canonical geographic truth:
- procedural continent outlines;
- lakes/mountains/forests encoded as a competing map;
- synthetic roads/rivers;
- ships/sea monsters;
- old atlas elevations used only by the superseded renderer;
- fixed 3200×2000 absolute geography;
- stale lore tied to superseded paintings.

Legacy renderer dependencies may survive temporarily if clearly marked noncanonical.

No generic new `Place` ontology is introduced before migration. Canonicalize the existing WorldNode/Realm/Domain/anchor/commitment structure first; abstract only if real duplication remains.

---

# XIV. IMPLEMENTATION SEQUENCE

1. Freeze canonical IDs, names and alias rules.
2. Introduce semantic artwork registry.
3. Install World + Realm masters.
4. Replace World/Realm anchors and hit regions.
5. Remove pinch-triggered semantic transitions.
6. Implement tap-driven World → Realm transitions.
7. Install nine Domain masters.
8. Make Realm → Domain resolve to Domain artwork.
9. Install Domain hit regions and entry-focus metadata.
10. Add Leadership → Confluence compatibility migration.
11. Replace stale RealMe/Strategy/Stronghold/Tower metadata.
12. Retire old geographic rendering dependencies.
13. Reconnect commitments and Loci.
14. Validate all 13 masters on mobile.
15. Remove obsolete assets/code only after validation.

The working app must remain usable during migration.

---

# XV. NON-REGRESSION

World reconstruction must not break Today, Calendar, Chronicles, Living Input, commitment creation/editing, WBT state, World Model or existing persistence.

Frozen geography, Realm/Domain identity and semantic hierarchy must not be changed merely to fit implementation convenience.

---

# XVI. MVP ACCEPTANCE TEST

On an iPhone-sized viewport a user can:
- open World and recognize the three Realms;
- tap a Realm and perceive approach rather than an unrelated screen switch;
- recognize the same geography at Realm scale;
- tap each Domain and arrive at its canonical Domain master;
- return Domain → Realm → World through explicit Back;
- use double tap as an optional one-level semantic retreat without losing an explicit Back path;
- pinch/pan without accidentally changing semantic level;
- repeat navigation for all nine Domains without spatial confusion.

# THE WORLD MUST FEEL CONTINUOUS.

---

# XVII. ARCHITECTURAL BOUNDARY

Three layers remain distinct:

WORLD MODEL — what exists and what it means.

VISUAL WORLD DEFINITION — masters, anchors, hit regions, transition correspondence.

WORLD VIEWER — navigation and interaction with those representations.

RealMe does not ship one fixed fantasy world. It ships an engine capable of turning an evolving personal ontology into an explorable World. The current frozen World is the first fully authored instance of that engine, not its hard-coded template.
