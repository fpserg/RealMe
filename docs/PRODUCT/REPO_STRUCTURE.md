# RealMe Repository Structure

The repository is organized by architectural responsibility rather than by implementation details.

Every top-level directory should answer one question.

---

realme/

├── docs/                  # Product and architecture documentation
│
├── app/                   # User-facing application
│
├── core/                  # Pure business logic
│
├── world_model/           # Persistent personal reality
│
├── conversation/          # Conversation orchestration
│
├── llm/                   # LLM abstraction layer
│
├── storage/               # Persistence
│
├── api/                   # Backend API
│
├── tests/                 # Tests
│
├── scripts/               # Development utilities
│
├── assets/                # Static assets
│
├── .github/               # CI/CD
│
└── README.md

---

# docs/

Contains the complete specification.

Never implementation.

Example:

docs/

    01_MVP.md

    02_ARCHITECTURE.md

    03_WORLD_MODEL.md

    04_LIVING_INPUT.md

    05_CONVERSATION_RULES.md

    06_DECISIONS.md

Architecture decisions are recorded here.

No knowledge should live only inside conversations.

---

# app/

Only UI.

No business logic.

Example

app/

    components/

    pages/

    hooks/

    styles/

---

# core/

Pure domain logic.

No UI.

No database.

No LLM calls.

Contains reusable logic.

Example

core/

    entities/

    services/

    use_cases/

    validation/

---

# world_model/

The heart of RealMe.

Responsible only for personal reality.

Example

world_model/

    schema/

    entities/

    relationships/

    updater/

    queries/

    history/

Nothing here should know about ChatGPT.

---

# conversation/

Everything related to dialogue.

conversation/

    living_input/

    prompts/

    realmers/

    chronicle/

    parser/

Responsible for turning conversation into World Model updates.

---

# llm/

Everything model-specific.

llm/

    providers/

        openai/

        gemini/

        anthropic/

    prompts/

    context/

    adapters/

Changing LLM providers should require minimal changes outside this folder.

---

# storage/

Persistence only.

storage/

    database/

    repositories/

    migrations/

    cache/

Business logic never talks directly to SQL.

---

# api/

External interface.

api/

    routes/

    middleware/

    auth/

---

# tests/

Mirror the repository structure.

tests/

    world_model/

    conversation/

    api/

    core/

---

# scripts/

Development only.

Examples

- seed database
- export model
- import model
- backup
- restore

---

# Architectural Dependency Rules

Allowed

UI

↓

Conversation

↓

Core

↓

World Model

↓

Storage

LLM is consulted by Conversation.

The World Model never depends on the LLM.

Storage never depends on UI.

Core never depends on framework code.

---

# Golden Rule

Dependencies always point inward.

The center of the system is the World Model.

Everything else exists to read it, update it or present it.

Nothing should be able to corrupt it.

---

# Long-Term Stability Rule

Folders represent stable architectural concepts.

Never create folders for temporary features.

Examples of bad top-level folders:

feature_x/

new_ui/

prototype/

chat_v2/

experimental/

Features evolve.

Architecture remains.