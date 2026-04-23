---
description: "Antigravity Factory: The Fabrication Line"
command: "/factory"
category: "core"
trigger: "manual"
version: "2.0.0"
telemetry: "enabled"
primary_agent: "@coder"
domain: "engineering"
---

# 🏭 Antigravity Factory (Taktpinne)

Welcome to the Factory. This is where high-level designs are transformed into production-ready code through a standardized, three-station fabrication process.

---

## 🏗️ The Fabrication Stations

### Station 1: Design (`/factory design`)
Refines the feature request into a technical specification.
- **Input:** User Idea or Roadmap Item
- **Output:** `specs/FEATURE_NAME.md`
- **Agent:** `@architect`

### Station 2: Fabrication (`/factory fabrication`)
The core build phase where code is written following the spec.
- **Input:** Verified Specification
- **Output:** Functional Implementation + Documentation
- **Agent:** `@coder`

### Station 3: Verification (`/factory verify`)
Ensures quality, types, and logic alignment.
- **Input:** New Code
- **Output:** 100/100 Quality Score
- **Agent:** `@qa`

---

## 📊 Status Dashboard

**Command:** `/factory status`

Run the live status dashboard to see factory mode, active fabrication, queue, debt, and CI health:

```powershell
# // turbo
powershell scripts/factory-manager.ps1 STATUS
```

The dashboard displays:
- **Mode** — ON (auto-flow), OFF (halted), MANUAL (step-by-step)
- **Git** — Current branch + uncommitted changes
- **CI** — Latest GitHub Actions run status
- **Active** — Features currently in fabrication (`[/]` in backlog)
- **Queue** — Next high/critical priority features (`[ ]` in backlog)
- **Inventory** — Spec count + open debt items

> [!TIP]
> This same data is available in `/status` under the **Factory Health** module.

---

## 🚀 Getting Started

1. Check the status: `/factory status`
2. Claim a task from the backlog.
3. Start at Station 1: `/factory design [feature]`

## Version History

### 2.0.0 (2026-04-22)

- Standardized Factory implementation for Taktpinne.
- Added live `/factory status` dashboard via `factory-manager.ps1 STATUS`.
- Integrated factory health into `/status` workflow.
