# REALME_WORLD_MAP_ASSEMBLY_ROADMAP.md

Version: 1.1

---

# Purpose

This document defines the production roadmap for assembling the RealMe visual World from the inside out.

The objective is to create a coherent spatial system across:

1. World View
2. Realm View
3. Domain View

The World should not be generated as one illustration that simultaneously invents:

- geography;
- Realm identity;
- Domain identity;
- architecture;
- mobile composition.

Instead:

1. establish the global visual and spatial grammar;
2. design each Domain as a real place;
3. derive Realm geography from established Domains;
4. derive the final World Map from established Realms.

The final result should feel like one continuous fantasy World through which the user can zoom.

---

# I. Core Principle

The hierarchy is:

```text
World defines laws
        ↓
Domains establish identity
        ↓
Realms establish geographic relationships
        ↓
World Map assembles the complete geography
```

The World Map must not invent the Domains.

The Realm Maps must not reinvent the Domains.

A Domain seen from the World should be recognizably the same place that appears when the user zooms into it.

---

# II. Universal Image Architecture

These rules apply to:

- World Map;
- Realm Maps;
- Domain Views;
- future map-related visual assets.

## Master Format

Every image uses:

- Aspect ratio: 16:9
- Preferred resolution: 2560 × 1440
- Minimum resolution: 1920 × 1080
- Format: PNG, WebP or high-quality JPG

Do NOT create portrait-native Domain or Realm images.

---

# III. Mobile-First Safe Corridor

RealMe is primarily used on an iPhone 16 Pro Max in vertical orientation.

Therefore every 16:9 image must be designed around a **central portrait-safe focus area**.

Conceptually:

```text
┌───────────────────────────────────────────────────────────┐
│                                                           │
│ atmospheric      │     MOBILE-SAFE      │ atmospheric    │
│ peripheral       │     FOCUS AREA       │ peripheral     │
│ scenery          │                      │ scenery        │
│                  │ essential content    │                │
│                  │ must remain here     │                │
│                                                           │
└───────────────────────────────────────────────────────────┘
```

The exact crop may vary slightly depending on RealMe UI implementation.

Therefore:

- all essential landmarks;
- all Domain focal structures;
- all important paths;
- all major visual storytelling;

must remain concentrated around the central vertical region.

The outer left and right areas may contain:

- mountains;
- coastline;
- forests;
- minor settlements;
- distant towers;
- sea;
- clouds;
- ships;
- ruins;
- decorative geography.

When viewed vertically, RealMe should crop **atmosphere rather than meaning**.

---

# IV. Shared Visual Language

All maps and Domain views belong to one World.

Use:

- fantasy strategy-game cartography;
- slightly elevated three-dimensional perspective;
- mild isometric influence;
- hand-painted illustration;
- visible painterly texture;
- sunrise or early-morning illumination;
- warm directional sunlight;
- atmospheric depth;
- natural haze and clouds;
- rich but restrained fantasy detail;
- readable silhouettes.

Reference feeling:

- classic painted fantasy strategy-game maps;
- illustrated fantasy atlases;
- Heroes of Might and Magic-like environmental storytelling;

without directly copying any existing game's visual assets.

Avoid:

- photorealism;
- hyperrealistic AI concept art;
- glossy CGI;
- vector graphics;
- flat maps;
- infographic aesthetics;
- excessive micro-detail;
- cyberpunk unless conceptually required;
- visual clutter.

---

# V. Semantic Separation

Artwork represents:

- places;
- geography;
- architecture;
- terrain;
- atmosphere.

RealMe UI represents:

- Realm names;
- Domain names;
- Today;
- Horizons;
- Commitments;
- Campaigns;
- status;
- progress;
- navigation;
- selections.

Therefore background artwork contains:

**NO TEXT.**

Never bake into the image:

- Realm names;
- Domain names;
- fake fantasy names;
- map titles;
- legends;
- UI labels;
- compass text;
- banners containing writing;
- invented RealMe concepts.

The image should remain semantically clean.

---

# VI. Phase 1 — World Skeleton

## Objective

Create the global geographic composition before Domain detail is finalized.

This is a structural reference, not the final World Map.

Fix:

- camera angle;
- light direction;
- Realm positions;
- Realm scale;
- major mountains;
- coastlines;
- central sea;
- mobile-safe corridor;
- approximate Domain zones.

## Canonical Geography

```text
NORTH

HOUSEHOLD                         CAREER
Realm                             Realm
Northwest                         Northeast

               CENTRAL SEA

               THIRD REALM
                  South
```

All three Realm territories should have broadly comparable geographic and visual weight.

## Household Realm

Character:

- green;
- fertile;
- inhabited;
- warm;
- cultivated.

Northern frontier:

- major snowy mountain range.

Stronghold must eventually occupy the northernmost important location beneath these mountains.

## Career Realm

Character:

- rugged;
- institutional;
- purposeful;
- ambitious.

Terrain:

- rocky highlands;
- mountain passes;
- cliffs;
- ports;
- roads;
- bridges;
- communication routes.

Do not visually duplicate Household's snowy alpine identity.

## Third Realm

Character:

- mysterious;
- experimental;
- less domesticated;
- unusual.

Terrain:

- dark stone;
- strange geology;
- crystalline zones;
- isolated valleys;
- cliffs;
- mist;
- unusual waterways.

---

# Phase 1 Output

One 16:9 World Skeleton reference.

---

# Phase 1 AI Prompt

Create a 16:9 fantasy world-map composition for a mobile-first life operating system called RealMe.

This is a WORLD SKELETON, not the final detailed World Map.

The goal is to establish geography, camera position and spatial grammar.

WORLD STRUCTURE:

- Household Realm occupies the NORTHWEST.
- Career Realm occupies the NORTHEAST.
- Third Realm occupies the SOUTH.

All three Realms should have broadly equal visual and geographic importance.

They form a loose triangular geography around a central sea.

MOBILE-FIRST REQUIREMENT:

The master image is 16:9, but its primary use is inside a vertical iPhone viewport.

Concentrate all future important Domain zones inside the CENTRAL PORTRAIT-SAFE AREA of the landscape image.

The far left and right portions of the 16:9 image should contain mainly secondary scenery.

Cropping the image vertically must remove atmosphere rather than essential geography.

HOUSEHOLD REALM:

Green, fertile and inhabited.

Include forests, cultivated valleys, waterways, farmland and settlements.

Create a dramatic snowy mountain range along the northern frontier.

Reserve the northernmost important location beneath these snowy mountains for the future Stronghold Domain.

CAREER REALM:

Rugged, purposeful and institutional.

Use rocky mountains, cliffs, passes, roads, bridges, ports and communication routes.

Career should visibly differ from Household.

Avoid repeating Household's major snowy alpine identity.

THIRD REALM:

Southern, mysterious and experimental.

Use darker stone, unusual geology, isolated plateaus, strange valleys, crystalline areas, mist and unusual waterways.

CAMERA:

Use a slightly elevated 3D fantasy-map perspective with mild isometric qualities.

STYLE:

Hand-painted fantasy strategy-game illustration.

Painterly texture.

Sunrise or early morning.

Warm directional sunlight.

Atmospheric depth and clouds.

Natural deep-blue sea.

DO NOT INCLUDE:

- Realm labels;
- Domain labels;
- fake place names;
- map title;
- text;
- UI;
- detailed final Domain buildings.

Instead create clear geographic zones where future Domain landmarks can later be placed.

The result should feel like the geographic skeleton of one coherent fantasy World.

---

# VII. Phase 2 — Domain Identity Design

## Objective

Design every Domain as an actual place before assembling Realm and World Maps.

Each Domain must establish:

1. dominant landmark;
2. architectural language;
3. terrain identity;
4. atmosphere;
5. dominant silhouette;
6. one or two secondary motifs;
7. map-scale identity.

Every Domain image remains **16:9**.

Every Domain image also follows the **central portrait-safe focus area** rule.

The central crop should contain:

- the main Domain landmark;
- important interactive environmental zones;
- enough surrounding geography to communicate identity.

The landscape edges may contain secondary scenery.

This allows the same image architecture to work across horizontal and vertical RealMe layouts.

---

# VIII. Household Realm Domains

## 1. Stronghold

### Identity

Stronghold is:

- northern;
- rooted;
- lived-in;
- increasingly cultivated;
- a home rather than a fortress.

Architecture should subtly recall the real Stronghold without reproducing it literally.

Key cues:

- compact two-storey form;
- dark red/brown materials;
- broad horizontal silhouette;
- terraces or balconies;
- restrained asymmetry;
- warm windows;
- fantasy reinterpretation.

Snowy mountains rise prominently behind it.

### Stronghold AI Prompt

Create a 16:9 fantasy Domain environment for RealMe.

DOMAIN: STRONGHOLD.

IMPORTANT COMPOSITION RULE:

Although the image is 16:9, its primary viewing mode is a vertical iPhone viewport.

Place the Stronghold itself and all essential Domain geography inside the CENTRAL PORTRAIT-SAFE AREA.

The left and right edges may contain secondary mountains, forest, gardens, outbuildings and atmospheric scenery.

VISUAL IDENTITY:

Stronghold is a fantasy home, not a medieval military castle.

Create a substantial but intimate two-storey manor-fortress using dark red-brown brick or stone.

Use:

- broad horizontal proportions;
- subtle asymmetry;
- terraces or balconies;
- dark rooflines;
- warm windows.

The architecture should subtly remind the viewer of a modern family house without becoming a literal architectural replica.

LOCATION:

Stronghold is the northernmost important place in Household Realm.

Large dramatic SNOW-CAPPED MOUNTAINS rise immediately behind it.

Surrounding terrain is:

- green;
- cultivated;
- increasingly planted;
- bordered by woodland.

Include gardens, paths and modest utility structures.

ATMOSPHERE:

Morning or sunrise light.

Warm, inhabited and peaceful.

STYLE:

Hand-painted fantasy strategy-game environment.

Slightly elevated 3D perspective.

Painterly rather than photorealistic.

Leave natural low-complexity environmental areas where RealMe UI may later display:

- Today;
- Horizons;
- Commitments;
- Campaigns.

Do not draw floating UI elements.

NO TEXT.

The dominant Stronghold silhouette must remain recognizable when reduced to a small landmark on the World Map.

---

## 2. Family

### Identity

Family is the inhabited heartland.

It should communicate:

- belonging;
- continuity;
- children;
- shared life;
- warmth.

### Family AI Prompt

Create a 16:9 fantasy Domain environment for RealMe.

DOMAIN: FAMILY.

Use a landscape master composition with all essential Domain content inside the CENTRAL PORTRAIT-SAFE AREA for vertical mobile viewing.

Family is the warm inhabited heart of Household Realm.

Create:

- a clustered settlement;
- several homes;
- shared courtyards;
- gardens;
- trees;
- paths;
- small waterways;
- warm hearth light;
- spaces suggesting children and family life.

Avoid one giant central castle.

The settlement should feel intimate and organic.

At map scale, Family should be recognizable as a warm cluster of inhabited buildings with one modest central gathering place.

STYLE:

Hand-painted fantasy strategy-game environment.

Elevated 3D perspective.

Painterly.

Warm morning light.

Leave low-complexity areas around the central settlement where RealMe UI can later represent:

- Today;
- Horizons;
- Commitments;
- Campaigns.

NO TEXT.

NO fake fantasy labels.

NO floating dashboard panels.

---

## 3. Capital

### Identity

Capital represents Household financial and resource infrastructure.

It is not royal wealth.

It is practical prosperity.

### Capital AI Prompt

Create a 16:9 fantasy Domain environment for RealMe.

DOMAIN: CAPITAL.

Keep the essential Domain structures inside the CENTRAL PORTRAIT-SAFE AREA.

Capital represents practical household resources, financial infrastructure and stewardship of capital.

Create a prosperous but restrained river or harbour settlement.

Include:

- one recognizable civic or treasury-like building;
- trade houses;
- warehouses;
- docks or river infrastructure;
- orderly roads;
- visible movement of goods and resources.

Capital should feel stable, useful and prosperous.

Avoid:

- giant golden palace;
- royal imagery;
- excessive luxury;
- modern banks.

At map scale, Capital should be recognizable as a compact waterfront commercial-civic centre.

STYLE:

Hand-painted fantasy strategy-game environment.

Elevated 3D perspective.

Painterly.

Warm disciplined atmosphere.

Leave environmental space for future RealMe UI.

NO TEXT.

---

# IX. Career Realm Domains

## 4. Leadership

### Identity

Leadership represents:

- responsibility;
- coordination;
- authority;
- people coming together for decisions.

### Leadership AI Prompt

Create a 16:9 fantasy Domain environment for RealMe.

DOMAIN: LEADERSHIP.

Place the central Leadership landmark and all important Domain geography inside the CENTRAL PORTRAIT-SAFE AREA.

Create a compact council citadel or command complex.

Include:

- broad central council hall;
- smaller connected chambers;
- roads converging toward it;
- lookout structures;
- restrained banners without writing.

Leadership should feel important but not imperial.

It must not visually dominate Strategy or TMT.

Avoid a giant palace.

MAP-SCALE IDENTITY:

One strong institutional silhouette recognizable at distance.

STYLE:

Hand-painted fantasy strategy-game art.

Rugged Career terrain.

Elevated 3D perspective.

Purposeful rather than luxurious.

Leave environmental areas suitable for later RealMe UI representing:

- Today;
- Horizons;
- Commitments;
- Campaigns.

NO TEXT.

---

## 5. Strategy

### Identity

Strategy represents:

- seeing terrain;
- identifying routes;
- thinking ahead;
- coordinating long-range campaigns.

### Strategy AI Prompt

Create a 16:9 fantasy Domain environment for RealMe.

DOMAIN: STRATEGY.

Keep the essential fortress-observatory and surrounding route network inside the CENTRAL PORTRAIT-SAFE AREA.

Create a high observatory-fortress or strategic command outpost.

It should overlook:

- branching roads;
- mountain passes;
- distant Realm geography;
- possible sea routes.

Include:

- lookout towers;
- high terraces;
- map-room-like architectural cues;
- visible routes moving in different directions.

The environment should communicate perspective, planning and long-range awareness.

Do not make it primarily military.

MAP-SCALE IDENTITY:

A distinctive high fortress-observatory overlooking branching routes.

STYLE:

Painterly fantasy strategy-game environment.

Elevated 3D perspective.

Rugged Career terrain.

Morning atmospheric light.

NO TEXT.

---

## 6. TMT

### Identity

TMT represents:

- signals;
- technology;
- communications;
- connectivity;
- observation.

Preserve the successful signal-tower / lighthouse concept.

### TMT AI Prompt

Create a 16:9 fantasy Domain environment for RealMe.

DOMAIN: TMT.

Place the main signal landmark inside the CENTRAL PORTRAIT-SAFE AREA.

Create a major communication tower, signal lighthouse or technological observatory.

Possible environment:

- cliff or coast;
- visible sea routes;
- beacon;
- restrained blue energy;
- smaller relay towers;
- mirrors;
- arcane signal instruments;
- cable-like fantasy mechanisms;
- ports or roads.

The place should visibly feel connected to distant places.

Do not make it cyberpunk.

Do not use modern antennas literally.

MAP-SCALE IDENTITY:

One unmistakable communication beacon or tower.

STYLE:

Fantasy technology.

Hand-painted strategy-game environment.

Elevated 3D perspective.

Painterly.

NO TEXT.

---

# X. Third Realm Domains

## 7. RealMe

### Identity

RealMe is a laboratory.

Not:

- monastery;
- palace;
- wizard academy.

It is where the World is observed, interpreted and redesigned.

### RealMe AI Prompt

Create a 16:9 fantasy Domain environment for RealMe.

DOMAIN: REALME.

All essential laboratory structures must remain inside the CENTRAL PORTRAIT-SAFE AREA.

RealMe is a FANTASY LABORATORY.

It must not look primarily like:

- a monastery;
- a palace;
- a wizard school.

Create an experimental research complex containing:

- observatory domes;
- connected research buildings;
- glass or crystal structures;
- arcane instruments;
- restrained luminous conduits;
- experimental towers;
- subtle teal or cyan illumination.

The laboratory should feel like a place where the World is studied, understood and redesigned.

Mysterious but purposeful.

MAP-SCALE IDENTITY:

A distinctive laboratory / observatory complex with recognizable domes.

STYLE:

Hand-painted fantasy strategy-game environment.

Dark Third Realm geology.

Elevated 3D perspective.

Painterly, not science-fiction CGI.

NO TEXT.

---

## 8. Gifted

### Identity

Gifted remains a crystalline wilderness.

It should feel discovered rather than built.

### Gifted AI Prompt

Create a 16:9 fantasy Domain environment for RealMe.

DOMAIN: GIFTED.

Place the primary crystalline landscape inside the CENTRAL PORTRAIT-SAFE AREA.

Create an unusual amethyst wilderness containing:

- violet crystal formations;
- large crystalline outcrops;
- glowing geology;
- winding paths;
- rugged rock;
- sparse mysterious vegetation;
- perhaps a few small structures integrated into the landscape.

Gifted should feel discovered rather than constructed.

Avoid a giant palace or city.

MAP-SCALE IDENTITY:

A distinctive cluster or valley of large luminous crystals.

STYLE:

Painterly fantasy strategy-game environment.

Elevated 3D perspective.

Mysterious but not sinister.

NO TEXT.

NO crypto symbols.

---

## 9. Tower

### Identity

Tower remains singular.

A solitary elevated spire.

### Tower AI Prompt

Create a 16:9 fantasy Domain environment for RealMe.

DOMAIN: TOWER.

Keep the Tower and its immediate landscape inside the CENTRAL PORTRAIT-SAFE AREA.

Create one elegant isolated celestial or arcane spire.

Characteristics:

- dramatic verticality;
- narrow approach path;
- surrounding cliffs or elevated terrain;
- subtle beacon or light near the upper structure;
- contemplative atmosphere;
- some secondary scenery, but no competing major towers.

MAP-SCALE IDENTITY:

One unmistakable tall spire.

STYLE:

Hand-painted fantasy strategy-game environment.

Elevated 3D perspective.

Painterly.

Atmospheric.

Compatible with RealMe Laboratory and Gifted.

NO TEXT.

---

# XI. Phase 3 — Realm Assembly

## Objective

Once Domain identities are established, assemble them into coherent Realm landscapes.

Do NOT redesign the Domains.

The Realm-generation task is primarily:

- geography;
- spacing;
- roads;
- terrain transitions;
- internal visual identity;
- mobile composition.

Every Realm Map is also:

- 16:9;
- designed around a central portrait-safe focus area.

The three Domain landmarks of each Realm must all remain within that safe area.

---

# XII. Household Realm Assembly

## Fixed Domains

- Stronghold
- Family
- Capital

## Geographic Logic

Stronghold:

- northernmost;
- beneath snowy mountains.

Family:

- inhabited heartland.

Capital:

- connected to coast, river or harbour infrastructure.

Household should feel:

- warm;
- cultivated;
- inhabited;
- organic.

---

# Household Realm AI Prompt

Create a 16:9 fantasy Realm Map for the HOUSEHOLD REALM.

Use three ALREADY-ESTABLISHED Domain identities:

STRONGHOLD:
- northernmost;
- red-brown fantasy family manor;
- snowy mountains behind it;
- cultivated land.

FAMILY:
- warm clustered settlement;
- gardens;
- homes;
- inhabited heartland.

CAPITAL:
- practical prosperous waterfront civic-commercial centre;
- docks;
- warehouses;
- resource infrastructure.

DO NOT redesign these Domains.

MOBILE-FIRST COMPOSITION:

All three Domain landmarks must fit inside the CENTRAL PORTRAIT-SAFE AREA.

Outer left and right areas should contain mainly secondary scenery.

GEOGRAPHY:

Stronghold must be the northernmost Domain.

Family should occupy the inhabited centre.

Capital should connect naturally to water and transport.

Use:

- farmland;
- forests;
- rivers;
- roads;
- gardens;
- lakes;
- villages.

Connect all three Domains naturally.

The Realm should feel warm, fertile, inhabited and lived-in.

Keep the three Domain landmarks broadly equal in visual importance.

STYLE:

16:9.

Hand-painted fantasy strategy-game map.

Elevated 3D perspective.

Painterly.

Sunrise-compatible light.

NO TEXT.

---

# XIII. Career Realm Assembly

## Fixed Domains

- Leadership
- Strategy
- TMT

## Career Realm AI Prompt

Create a 16:9 fantasy Realm Map for the CAREER REALM.

Use three ALREADY-ESTABLISHED Domain identities:

LEADERSHIP:
compact council citadel and coordination centre.

STRATEGY:
high observatory-fortress overlooking routes and passes.

TMT:
communication lighthouse / signal tower with connectivity infrastructure.

DO NOT redesign these Domains.

MOBILE-FIRST COMPOSITION:

All three Domain landmarks must remain inside the CENTRAL PORTRAIT-SAFE AREA.

Use outer image areas for secondary cliffs, mountains, roads, sea and distant infrastructure.

GEOGRAPHY:

Career should feel:

- rugged;
- purposeful;
- institutional;
- ambitious.

Use:

- rocky mountains;
- ridges;
- cliffs;
- passes;
- roads;
- bridges;
- ports;
- communication routes.

Do NOT mirror Household geography.

Career should not share Household's dominant snowy alpine identity.

VISUAL BALANCE:

Leadership, Strategy and TMT must have broadly equal visual mass.

STYLE:

16:9.

Hand-painted fantasy strategy-game map.

Elevated 3D perspective.

Painterly.

NO TEXT.

---

# XIV. Third Realm Assembly

## Fixed Domains

- RealMe
- Gifted
- Tower

## Third Realm AI Prompt

Create a 16:9 fantasy Realm Map for the THIRD REALM.

Use three ALREADY-ESTABLISHED Domain identities:

REALME:
fantasy laboratory / observatory complex with restrained teal illumination.

GIFTED:
amethyst crystalline wilderness.

TOWER:
singular isolated celestial spire.

DO NOT redesign these Domains.

MOBILE-FIRST COMPOSITION:

All three Domain landmarks must remain inside the CENTRAL PORTRAIT-SAFE AREA.

Use outer landscape areas for cliffs, strange geology, mist, waterways and secondary wilderness.

The Third Realm should feel:

- mysterious;
- experimental;
- less domesticated;
- unusual but not sinister.

Use:

- dark stone;
- crystalline valleys;
- cliffs;
- isolated plateaus;
- mist;
- unusual waterways.

All three Domain landmarks should remain broadly comparable in visual importance.

STYLE:

16:9.

Hand-painted fantasy strategy-game map.

Elevated 3D perspective.

Painterly.

NO TEXT.

---

# XV. Phase 4 — Map-Scale Landmark Derivation

## Objective

After the full Domain environments are approved, derive simplified landmark versions for Realm and World scale.

Do not reinterpret them.

Reduce each Domain to:

1. dominant silhouette;
2. primary color/material cue;
3. one secondary identifying motif.

## AI Prompt Template

Take the approved visual design of:

[DOMAIN]

Create its MAP-SCALE representation for the RealMe fantasy World Map.

DO NOT redesign the Domain.

Preserve:

1. dominant silhouette;
2. primary material or color cue;
3. one secondary identifying feature;
4. immediate surrounding terrain identity.

Remove small details that would disappear at distance.

The landmark must remain recognizable when occupying only approximately 5–10% of the World Map.

STYLE:

Hand-painted fantasy strategy-game cartography.

Painterly.

Elevated 3D perspective.

NO TEXT.

NO UI.

---

# XVI. Phase 5 — Final World Map Assembly

## Inputs

Before generating the final World Map, require:

- approved World Skeleton;
- approved Household Realm Map;
- approved Career Realm Map;
- approved Third Realm Map;
- nine approved Domain identities;
- nine approved map-scale landmark derivatives.

Only then generate the final map.

---

# XVII. Final World Map AI Prompt

Create the FINAL REALME WORLD MAP.

FORMAT:

16:9.

Preferred resolution 2560 × 1440.

PRIMARY DEVICE:

Vertical iPhone 16 Pro Max.

Therefore design the 16:9 composition around a CENTRAL PORTRAIT-SAFE FOCUS AREA.

All nine primary Domain landmarks must remain visible within or immediately adjacent to this central safe corridor.

The far left and far right portions of the landscape image should contain secondary scenery rather than essential geography.

Cropping to vertical must remove atmosphere, not ontology.

WORLD GEOGRAPHY:

NORTHWEST:
HOUSEHOLD REALM

NORTHEAST:
CAREER REALM

SOUTH:
THIRD REALM

All three Realms should have broadly equal geographic and visual weight.

Separate them naturally through sea and geography.

DO NOT draw Realm borders.

HOUSEHOLD:

Warm, fertile and inhabited.

Stronghold:
- northernmost Household location;
- red-brown fantasy home;
- snowy mountains immediately behind it.

Family:
- warm inhabited settlement.

Capital:
- practical waterfront commercial-civic centre.

CAREER:

Rugged, institutional and purposeful.

Leadership:
- council citadel.

Strategy:
- high observatory-fortress overlooking routes.

TMT:
- communication / signal tower.

THIRD REALM:

Mysterious and experimental.

RealMe:
- fantasy laboratory / observatory complex.

Gifted:
- crystalline amethyst wilderness.

Tower:
- singular celestial spire.

DO NOT REDESIGN ANY DOMAIN.

Use the established Domain landmark references.

REALM DIFFERENTIATION:

Household should feel inhabited and warm.

Career should feel purposeful, institutional and ambitious.

Third Realm should feel mysterious and experimental.

The three should clearly belong to one World while remaining visually distinct.

VISUAL LANGUAGE:

- hand-painted;
- fantasy strategy-game cartography;
- illustrated rather than photorealistic;
- slightly elevated 3D / mild isometric perspective;
- sunrise or early morning;
- warm directional sunlight;
- atmospheric depth;
- haze;
- clouds;
- rich blue sea;
- natural coastline;
- small islets;
- painterly texture.

Avoid:

- ultra-realistic AI concept art;
- glossy CGI;
- flat vectors;
- infographic styling;
- excessive micro-detail.

VISUAL HIERARCHY:

All three Realms should have broadly equal weight.

All nine Domains should have broadly comparable landmark prominence.

Leadership must not visually overpower Strategy or TMT.

Stronghold must not overpower Family or Capital.

RealMe must not overpower Gifted or Tower.

SEMANTIC CLEANLINESS:

ABSOLUTELY NO TEXT.

No Realm names.

No Domain names.

No fake place names.

No map title.

No compass labels.

No legend.

No UI.

No written banners.

The final image should feel like one coherent fantasy World containing three distinct civilizations.

A user seeing the full map should feel that every landmark is a real place that can be approached and entered.

A user seeing only the vertical mobile crop should still retain the complete functional geography of RealMe.

---

# XVIII. Phase 6 — Validation

Do not accept an image purely because it is beautiful.

Validate functionality.

---

## Mobile Crop Test

Crop the image to the actual RealMe vertical viewport.

Check:

- Are all essential Realm areas present?
- Are all nine Domain landmarks identifiable?
- Are important landmarks dangerously close to crop edges?
- Does the composition still feel intentional?
- Is enough environment visible around each landmark for UI overlays?

Failure here requires composition changes.

---

## Domain Continuity Test

For each Domain ask:

> Does the World Map landmark clearly represent the same place shown in its Domain View?

If not, reject or revise the landmark.

Zooming should feel like approaching the same location.

---

## Realm Identity Test

Hide all RealMe UI labels.

Ask:

> Can Household, Career and Third Realm still be distinguished by visual character?

Expected:

Household:
warm / inhabited / cultivated.

Career:
rugged / purposeful / institutional.

Third:
mysterious / experimental / strange.

If Realm identity depends on labels, revise the Realm visual language.

---

## Equal Weight Test

Check that:

- three Realms have broadly equal prominence;
- nine Domains have broadly comparable visual weight;
- no Domain accidentally becomes the visual capital of the entire World.

---

## Stronghold Test

Stronghold must:

- be the northernmost important Household location;
- have snowy mountains behind it;
- subtly echo the real Stronghold;
- remain clearly fantasy;
- read primarily as a home rather than military fortress.

---

## Semantic Cleanliness Test

Reject artwork containing:

- labels;
- fake names;
- invented RealMe concepts;
- decorative UI;
- fake signs;
- redundant map text.

Artwork is geography.

RealMe owns semantics.

---

## Style Test

Accept only if the final style remains:

- painterly;
- fantasy-cartographic;
- slightly 3D;
- atmospheric;
- sunrise-lit;
- illustrated.

Reject if it becomes:

- photorealistic;
- glossy;
- generic high-resolution AI fantasy art;
- flat vector graphics.

---

# XIX. Recommended Production Sequence

```text
01. World Skeleton

HOUSEHOLD DOMAINS
02. Stronghold
03. Family
04. Capital

CAREER DOMAINS
05. Leadership
06. Strategy
07. TMT

THIRD REALM DOMAINS
08. RealMe Laboratory
09. Gifted
10. Tower

REALMS
11. Household Realm Map
12. Career Realm Map
13. Third Realm Map

DERIVATIVES
14. Stronghold map-scale landmark
15. Family map-scale landmark
16. Capital map-scale landmark
17. Leadership map-scale landmark
18. Strategy map-scale landmark
19. TMT map-scale landmark
20. RealMe map-scale landmark
21. Gifted map-scale landmark
22. Tower map-scale landmark

WORLD
23. Final World Map Draft
24. Mobile Crop Test
25. Domain Continuity Test
26. Realm Identity Test
27. Equal Weight Test
28. Final Corrections
29. World Map v1.0
```

---

# XX. Asset Relationship

The visual system should ultimately behave conceptually like this:

```text
WORLD MAP

      zoom
       ↓

REALM MAP

      zoom
       ↓

DOMAIN VIEW
```

But production works partly in the opposite direction:

```text
WORLD RULES
     ↓
DOMAIN IDENTITY
     ↓
REALM GEOGRAPHY
     ↓
FINAL WORLD MAP
```

This distinction is deliberate.

Navigation is top-down.

Visual creation is mostly bottom-up.

---

# XXI. Acceptance Principle

Do not ask the World Map to invent the World.

Do not ask Realm Maps to invent their Domains.

Discover the places first.

Then determine how they relate geographically.

Then map them.

The final World Map should not feel illustrated.

It should feel discovered.