# RealMe UX Review — Session Feedback (v1)

## Overall Assessment

The prototype demonstrates a very strong visual identity and a genuinely differentiated product vision. The fantasy aesthetic, Realm metaphor and overall atmosphere already feel unique.

However, the current implementation behaves like a **fantasy-themed productivity app** rather than a **Living Cognitive Operating System**.

The largest problem is not visual design.

It is that the AI still exposes its internal machinery instead of behaving like an invisible operating system.

Across almost every screen there is too much:

- production language
- implementation language
- AI plumbing
- database thinking
- generic placeholders
- invented content

The interface should expose **meaning**, not **mechanics**.

---

# General Design Principles

## 1. Remove production language

Almost every screen exposes implementation details.

Examples:

- Operational view derived...
- Derived temporal projection...
- Dynamically derived...
- Structured temporal items
- Standing Operational Commitment
- Recurring Rule
- Operational Records
- World Model
- Temporal Engine

This language belongs to developers.

Not users.

RealMe should sound like an operating companion, not backend documentation.

---

## 2. Hide AI implementation

Users should almost never see:

- AI routing
- world model
- memory synchronization
- reasoning pipeline
- temporal engine
- constitutional routing
- operational interpretation

These should become invisible infrastructure.

The product should feel effortless.

---

## 3. AI should infer, not announce

Current UI constantly explains what AI is doing.

Instead:

AI should simply produce the result.

Users care about:

- today's priorities
- tomorrow
- their life
- meaningful guidance

Not AI mechanics.

---

## 4. Replace generic content with derived content

Many screens contain placeholder text:

- Deep synthesis in the Tower.
- Household sanctuary.
- Strategic positioning.
- Reflection.
- Recharge.

These feel like mockups.

Everything should instead be generated from actual user context.

Nothing should appear unless AI has a reason.

---

# Portal

## Works well

- Atmosphere
- World Snapshot
- Visual identity
- Portal concept

## Needs work

Remove production terminology.

The Portal should become:

> "What is happening in my world?"

rather than

> "Derived operational snapshot."

---

# Today

## Agenda & Reasoning

Current:

Operational view derived for Sunday...

Replace with something much simpler.

Examples:

Today's Focus

or

Today

or

Sunday, August 2

Nothing more.

---

## Navigation

The top Today/Horizons navigation duplicates the bottom ribbon.

Likely unnecessary.

---

## World Snapshot

Keep.

It is one of the strongest components.

It conveys context without exposing implementation.

---

## What Belongs To Today (WBT)

Concept is excellent.

Execution needs refinement.

### Rename

Remove:

"What Belongs To Today"

Simply:

Today's Priorities

or

Today

or

Focus

---

### Remove implementation language

Examples to remove:

- Standing Operational Commitment
- Recurring Rule
- Scheduled Occurrence

Users should only see:

Drive home from Stronghold

Tower artifacts dividends

etc.

---

### Cards

Cards work well.

Clicking them to mark completion is significantly better UX than typing:

"Done."

Keep this interaction.

---

### Priority numbering

Not convinced.

May be unnecessary.

Natural ordering may be enough.

---

## Pace Suggestions

Current implementation is almost entirely generic.

Examples:

Morning Block

Afternoon Block

Deep synthesis in the Tower.

These feel invented.

AI should justify every suggestion.

Examples:

Morning:
"Stronghold work before leaving."

Afternoon:
"No deep work recommended today. Family already occupies the remaining day."

or

"You have a three-hour uninterrupted window before Bazis results."

Suggestions should emerge from commitments.

Not templates.

---

# Horizons

## Header

Current:

Derived temporal projection...

108 structured temporal items

Today (2026-08-02)

Wrong language.

Users care about:

Upcoming

Calendar

Next

Schedule

---

## Month View

Concept works.

UI needs improvement.

Boxes are too tall.

Events become invisible until clicked.

The native iPhone calendar remains a much stronger reference.

Users should be able to recognize commitments without opening every day.

---

## Week View

Current week opens showing the past.

Should default to upcoming days.

Missing navigation between weeks.

Today should include:

- scheduled commitments
- emerging commitments
- preparation thresholds

Not only explicit calendar events.

---

## Agenda View

Best implementation in Horizons.

Needs only language cleanup.

---

# Map

## Overall

Potentially the most unique feature in RealMe.

Currently behaves too much like a static visualization.

Should become a living world.

---

## Header

Current:

Warden: Sergey

Sovereign

Today Agenda

Problems:

- Colon after Warden feels wrong.
- Sovereign is unexplained.
- Today Agenda duplicates bottom navigation.

---

## Realm count

Current:

3 Sovereign Realms

8 Domains

Probably unnecessary.

---

## Filters

Uncertain value.

Likely removable.

---

## Map / Territories

Reasonable concept.

Instead of switching tabs,

clicking a colored realm should smoothly zoom into that territory.

More natural.

---

## World State

Good.

Keep.

---

## Map

Problems:

Map is visually cut.

---

North / West / Southeast labels

Probably unnecessary.

The geography is already obvious.

---

Interconnection lines

Currently incorrect.

Example:

Tower

RealMe

Gifted

are unrelated.

Connections should reflect actual semantic relationships, not arbitrary graph edges.

---

Progress bars

Potentially valuable.

But currently meaningless.

Progress toward what?

Completion?

Attention?

Health?

Momentum?

Without explanation they create confusion.

---

Personal domain

Invented.

Should only exist if AI derives it from real life.

---

## Territory Screens

Descriptions are generic.

Percentages are unexplained.

Stronghold commitment appearing inside every Household domain creates duplication.

---

## Inspect interaction

Current behavior:

Click Inspect

↓

Content appears at the bottom.

Requires scrolling.

Instead:

Open immediately.

Modal.

Sheet.

New screen.

Anything except scrolling hundreds of pixels.

---

# Dialogue

## Overall

This should become the flagship experience.

It currently feels like a mock chat.

It should instead feel comparable to the very best AI chat applications.

Visual language should remain RealMe.

Interaction quality should reach ChatGPT, Claude, etc.

---

## Header

Too much production language.

Examples:

Constitutional Routing

AI decides

Realmers Council

Active Realm Role

These expose implementation.

---

## Role switching

Currently requires scrolling back to the top.

Role selector should remain permanently accessible.

Sticky header.

Floating button.

Bottom drawer.

Anything faster.

---

## Conversation quality

Largest weakness in the entire application.

Current responses are:

- robotic
- generic
- repetitive
- obvious
- mechanically descriptive

Compare them to actual high-quality AI conversations.

The difference is enormous.

---

## Recognition failures

Examples observed:

Birthday corrected.

AI acknowledged correction.

Data remained unchanged.

Bazis results were supposedly recorded.

Nothing appeared in Horizons.

Meanwhile unrelated commitments appeared.

This breaks trust.

AI acknowledgement must always result in observable state changes.

---

## Input

Two separate input boxes exist.

Likely unnecessary.

Living Input should probably become the universal input mechanism.

---

# Book of Life

## Overall

Current implementation is disappointing.

It behaves like:

- event log
- operational history
- audit trail

instead of

the autobiography of a life.

---

The Book should become:

AI-curated long-term memory.

Not database records.

Not CRUD history.

Not completed tasks.

Not recurring rule creation.

---

Operational Records should largely disappear from user view.

They belong in developer tools.

Not in the Book.

---

The Book should remember:

- chapters
- turning points
- relationships
- discoveries
- decisions
- identity changes
- long-term patterns

not

Created recurring commitment...

Completed Buy Milk...

Corrected node...

---

# Cross-cutting Product Direction

## RealMe should feel less like software

and more like

an intelligent companion quietly organizing life.

---

## AI should disappear

Users should experience:

clarity

not reasoning.

guidance

not implementation.

meaning

not database operations.

---

## Everything should be derived

No generic placeholders.

No invented summaries.

No filler.

Every sentence should exist because the AI has evidence for writing it.

---

## Biggest Opportunity

The visual identity is already distinctive.

The interaction philosophy can become equally distinctive.

The product should not compete with:

- Notion
- Obsidian
- Todoist

It should create an entirely new category:

**a Living Cognitive Operating System that understands, remembers and gradually explains a person's life.**
