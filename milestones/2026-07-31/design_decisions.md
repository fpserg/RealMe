# Design Decisions

## Home

Decision

Home contains only:

- Today
- Map
- Living Input

Reason

The home screen is a doorway, not a dashboard.

---

## Today

Decision

Today is list-first.

Reason

Its purpose is action.

It answers:

"What belongs to today?"

---

## Map

Decision

Map is geographical.

Reason

It answers:

"Where am I?"

rather than

"What should I do?"

Realms are represented as continents.

Users discover Districts, Campaigns and Quests by zooming into the map.

---

## Living Input

Decision

Living Input appears on every screen.

Reason

The Warden should never think about categorization.

The Citadel decides where information belongs.

---

## Navigation

Decision

Home → Today
Home → Map

Map contains no dashboard cards.

Today's agenda belongs only to Today.

Map exists for exploration.

---

## Image Workflow

Decision

Citadel responds with text by default.

Images are created only when explicitly requested.

Reason

Architecture precedes implementation.