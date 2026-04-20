# 🌐 Workflow: Global Brotherhood Triage (10/10)

This workflow provides a 10/10 operational overview of the entire Brotherhood ecosystem.

## 🏁 Purpose
- **Visibility**: Real-time status of all core projects.
- **Health**: Monitor build/lint status across the board.
- **Focus**: Track active domains and sessions.
- **Control**: Perform global actions like checkpointing.

## 🛠️ Execution Steps

1. **Run Global Triage**:
   ```powershell
   pwsh c:\Users\alexa\Workspaces\git-status-all.ps1
   ```
   *Optional: Use `-Checkpoint` to auto-commit dirty changes with a generic message.*

2. **Check the Dashboard**:
   Open and inspect `c:\Users\alexa\Workspaces\BROTHERHOOD.md` for a visual overview.

3. **Identify Hotspots**:
   - Projects with ❌ health need immediate fix.
   - Projects with 🚧 DIRTY status need a domain session to continue or close work.

4. **Context Switch**:
   1. Navigate to the project folder.
   2. Run `/domain-session <domain>`.
   3. Update status using `pwsh c:\Users\alexa\Workspaces\update-agent-status.ps1 -Domain <domain> -Health pass`.

## 📢 Global Dashboard
The dashboard (`BROTHERHOOD.md`) is the single source of truth for the Brotherhood's current state.

---
*Standardization v1.1.0 (10/10 Upgrade)*

