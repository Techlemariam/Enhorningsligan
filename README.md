# 🦄 Enhörningsligan

**Enhörningsligan** är en "Neurodivergent Family Support App" designad för att strukturera privatliv och familjeliv med noll friktion. Appen hostas lokalt på The Brotherhood Edge Gateway för att säkerställa 1ms responstid (vilket minimerar kognitiv belastning) och 100% dataintegritet.

## 🌟 Kärnvision
Att bygga en "osynlig assistent" och hjärnprotes för familjen. Appen ska kännas native och vara momentan. Den förlitar sig på vår The Brotherhood-infrastruktur (Coolify, PostgreSQL, n8n) för att samverka med andra system.

## 🗺️ Roadmap & Features

### Nuvarande Implementation
- [x] Grundläggande PWA/Web App (React/Vite)
- [x] Lokal hosting via Coolify (Edge Gateway)

### Fas 1: "The Brain Prosthesis" (Hjärnprotesen)
- [ ] **Kärnrutiner & Checklists:** Visuella och färgkodade checklistor för morgon- och kvällsrutiner.
- [ ] **Blixtsnabb respons:** Optimerad state management för omedelbar feedback vid interaktion.

### Fas 2: The Morning Board (Skarpt Mål)
- [ ] **TV Dashboard:** En statisk, färgkodad och extremt tydlig "Morning Board" dashboard.
    - Sänds direkt från Edge Gateway (via Jellyfin/Webbläsare) till Google TV i vardagsrummet.
    - **Syfte:** Visar morgonens schema och väder per automatik för att minimera kognitiv belastning och morgonstress innan skola/jobb. Kräver noll interaktion.

### Fas 3: The Invisible Parent (n8n Integrationer)
- [ ] **Smarta Nudges (Automatisering):**
    - Om kvällsrutinen inte är påbörjad i appen kl 19:00 triggas en webhook i n8n.
    - n8n kommunicerar med Home Assistant för att utföra en visuell nudge (t.ex. dimma belysningen i hemmet) istället för muntligt tjat.
- [ ] **Ekosystem-synergi:** Kopplingar mot `Matlogistik` (geofencing för inköpslistor) via n8n.

---

## 🛠️ Teknisk Stack
* **Frontend:** React + Vite (Tailwind via `index.css`)
* **Deployment:** Coolify
* **Databas:** PostgreSQL (Shared via The Vault)
* **Automation:** n8n (Centraliserad Event Bus)
