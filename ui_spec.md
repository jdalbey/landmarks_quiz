# Smoke Simulator — UI Specification

*Draft — Version 0.1*

---

## 1. Overall Architecture

The application is a **single-page application (SPA)** with distinct views swapped in and out by JavaScript. Separate HTML files make state transfer awkward; one shell page keeps the photo, firefinder, and report form accessible simultaneously without data loss between steps.

There is no separate setup screen. All scenario controls live in a persistent **header bar** at the top of the page. The large content area below the header serves dual purpose: it shows instructions when no scenario is active (idle state), and the landscape photo + firefinder when a scenario is running.

The workflow is **open**: the trainee can abort a scenario at any time, adjust any control, and start fresh. No confirmations required.

The **map view** is the justified exception: it remains in a separate named browser tab (as currently prototyped in `mapview.html`), opened by the `M` key and reused on subsequent presses.

---

## 2. Screens

### 2.1 Header Bar

Persistent across all states. Contains all scenario controls as dropdowns:

```
[Lookout ▾]  [Mode ▾]  [Difficulty ▾]  [Scenario ▾]  [▶ Start]
```

- **Lookout** — dropdown listing available lookout stations: Buck Rock / Delilah / Park Ridge
- **Mode** — dropdown: *Single Photo* / *Panorama Search*
- **Difficulty** — dropdown: *Easy* / *Medium* / *Difficult*
- **Scenario** — dropdown listing scenarios matching current Lookout/Difficulty filters, plus a *Random* option at the top

During an **active scenario**, Lookout, Mode, and Difficulty are disabled (changing either invalidates the current photo and smoke metadata). The **▶ Start** button is replaced by a **Quit Scenario** button, which re-enables all controls and returns to the idle state — no confirmation dialog.

---

### 2.2 Idle State

When no scenario is active the content area displays instructions in place of the landscape photo. The firefinder azimuth strip is hidden. Suggested content:

- "Your challenge is to identify a smoke in the landscape, determine its location, and complete a smoke report form."

- "Adjust the values above for Lookout, Mode, and Difficulty. "

- "Select a scenario from the dropbox above and press Start."

- Keyboard shortcut reference (`O` sight toggle, `M` map, `← →` move sight, `Shift+← →` move 1°)

  

---

### 2.3 Training Screen

The main activity view, shown when a scenario is running.

**Layout:**

```
┌────────────────────────────────────────────────────────────────┐
│ [Lookout ▾]  [Mode ▾]  [Difficulty ▾]  [Scenario ▾]   [▶ Start]│  header bar
├─────────┬─────┬───────────────────────────────────────────┬────┤
│         │     │                                           │    │
│ compass │  ‹  │  landscape photo + sight overlay          │ ›  │  panorama nav
│         │     │                                           │    │
├─────────┴─────┴───────────────────────────────────────────┴────┤
│                azimuth strip (firefinder base plate)           │
├────────────────────────────────────────────────────────────────┤
│  Az: 274° 32′    [O sight]  [M map]    [Open Report ▸]         │  status bar
└────────────────────────────────────────────────────────────────┘
```


**Header bar** — Lookout, Mode, and Difficulty are disabled and visually dimmed. **Quit Scenario** replaces ▶ Start; pressing it immediately ends the scenario, re-enables all controls, and returns to the idle state.

**Panorama navigation** — `‹` and `›` arrow buttons step through photographs sequentially. In Single Photo mode they are hidden.  In Panorama Search mode, the smoke is hidden until the trainee navigates to the correct photograph,

**Compass Indicator** - a circular compass (see compass.png). In the outer ring, highlight (cyan) the range of bearings corresponding to the view in the current photograph. 

**Azimuth strip** — the firefinder base plate and vernier plate (as prototyped in `firefinder.html`).

**Status bar** — shows the current azimuth readout and controls:

- `B` — toggle binoculars (closeup photograph, like in Learn-your-territory.html. Enabled when smoke is visible.)
- `O` — toggle sight overlay
- `M` — open map view (named tab, reused)
- sight movement keys (when sight overlay is present) ← / →   move 1′  | Shift + ← / →   move 1° 
- **Open Report** — slides the report panel in from the right

---

### 2.3 Report Page

A full page form the user completes after gathering the needed data.

**Fields** (matching `PracticeSmokeReport.txt`):

| Field | Input type |
|---|---|
| Classification | Radio: False / Legitimate / Illegitimate |
| Azimuth — degrees | Number field (the trainee transcribes manually) |
| Azimuth — minutes | Number field (the trainee transcribes manually) |
| Distance | Number field (miles; entered after consulting map) |
| Landmark name | Text input |
| Legal description | Township / Range / Section / Quarter-section fields |
| Base of smoke visible | Radio: Yes / No |
| Volume | Checkbox: Small / Medium / Large |
| Color | Checkbox: White / Grey / Black / Brown |
| Character | Checkbox: Thin / Heavy / Billowing / Blanket / Column / Puffing |
| Drift direction | Checkbox: N / S / E / W |
| Fuel type (optional) | Checkbox: Grass / Brush / Timber / Structure / Vehicle |
| Jurisdiction | radio buttons: SQF SNF SEKI FKU TUU |
| Dispatcher | radio buttons: Porterville,  Sierra,  Ash Mtn Fire, None |

When **False** is selected as the classification, the remaining fields dim out (not required).

A **Submit Report** button at the bottom of the panel triggers evaluation.

---

### 2.5 Evaluation

The Report screen is annotated with the correct results after the trainee submits a report. 

**Content:**

- Each report field listed with a green ✓ or red ✗
- Correct value shown beside or beneath any incorrect answer
- Summary score (e.g., "7 of 9 correct")

**Actions:**

- **Close** — close the results screen.

  

---

## 3. Navigation Flow

```
Idle state (instructions in content area, all header controls active)
  └─[▶ Start]──────────► Training Screen (photo + firefinder)
                             ├─[‹ ›]────────► same screen, different photo
                             ├─[B]──────────► Binoculars (closeup photo of smoke)
                             ├─[M]──────────► Map tab (named window, reused)
                             ├─[Open Report]► Report page form appears
                             │    └─[Submit]► Results annotate user's report
                             │               └─[Close]──► Training Screen
                             └─[Quit scenario]──► Idle state (controls re-enabled)
```

---

