# Smoke Simulator — UI Specification

*Draft — Version 0.1*

---

## 1. Overall Architecture

The application is a **single-page application (SPA)** with distinct views swapped in and out by JavaScript. Separate HTML files make state transfer awkward; one shell page keeps the photo, firefinder, and report form accessible simultaneously without data loss between steps.

There is no separate setup screen. The lookout and scenario selectors live in a persistent **header bar** at the top of the page. The large content area below the header serves dual purpose: it shows instructions when the application is launched, and the landscape photo + firefinder after a scenario has been selected.

The workflow is **open**: the trainee can change scenarios at any time, open the report page at any time, etc.  No confirmations required.  Certain controls are enabled only in certain states (Binoculars are only available when a smoke is visible.)

The **map view** is the justified exception: it remains in a separate named browser tab (as currently prototyped in `mapview.html`), opened by the `M` key and reused on subsequent presses. If map view is invoked when the firefinder is not visible, the map opens without a bearing line. (Map view is already implemented in `mapview.html` and includes a bearing line with a distance scale to 25 miles, pan/zoom feature, named landmarks, PLSS and USFS layers.)

---

## 2. Screens

### 2.1 Initial State

When no scenario is active the content area displays instructions in place of the landscape photo. The firefinder azimuth strip is hidden. Suggested content:

- "Your challenge is to identify a smoke in the landscape, determine its location, and complete a smoke report form."
- "Select the desired Lookout and choose a Scenario."

---

### 2.2 Training Screen

The main activity view, shown when a scenario is running.

**Layout:**

```
┌────────────────────────────────────────────────────────────────┐
│ [Lookout ▾][Scenario ▾] [Binoculars][Firefinder][Map][Report][Help] │  header bar
├───┬───┬────────────────────────────────────────────────┬───┬───┤
│   │xx°│                                                │xx°│   │  photo bearing range
│   ├───┘                                                └───│   │
│   │                                                        │   │
│ ‹ │         landscape photo + firefinder overlay           │ › │  panorama nav
│   │                                                        │   │
│   │                                                        │   │
├───┴────────────────────────────────────────────────────────┴───┤
│                azimuth strip (firefinder base plate)           │
└────────────────────────────────────────────────────────────────┘
```

**Header bar** — 

- **Lookout** — dropdown listing available lookout stations: Buck Rock / Delilah / Park Ridge.

- **Scenario** — dropdown listing scenarios by ID for the selected Lookout, plus a *Random* option at the top. Each scenario item is marked with a difficulty level by the first letter (E,M,D). A check mark appears next to each scenario for which the user has submitted a report (during this session - no persistence).
- **Help** — Displays a popup window with directions for using the simulation.
- `B` — toggle binoculars (closeup photograph, like in Learn-your-territory.html. Enabled when smoke is visible.)
- `F` — toggle firefinder sight overlay (enabled when a photo is present)
- `M` — open map view (to a named browser tab, reused)
- sight movement keys (when sight overlay is present) ← / →   move 1′  | Shift + ← / →   move 1° 
- `Tab` — toggle the report page

When a scenario is selected, the first photo in the scenario is displayed, the controls are reset, and the report form is cleared, and the map view tab is closed.

Consistent with the open workflow theme, the user may choose a scenario at any time. The Lookout can be changed at any time, but only effects what is displayed in the Scenario dropdown. (Is there a way to link these into a single control?)

**Panorama navigation** — `‹` and `›` arrow buttons step through photographs sequentially. (Page Up/Page Down are keyboard alternates).  In Single Photo mode they are hidden.  In Panorama Search mode, the smoke is hidden until the trainee navigates to the correct photograph,  This mode is determined by the scenario metadata settings.  In general the administrator should assign Difficult level to scenarios in Panorama Search mode. 

**Photo bearing range** - When a photo is displayed in the window it will be annotated by a small white box in the upper left and right corners.  The left upper box displays the bearing of the left edge of the photo, and the right upper box displays the bearing of the right edge of the photo. These two boxes disappear when the firefinder sight is on (because the azimuth strip contains the same information.)

**Azimuth strip** — the firefinder base plate and vernier plate (as prototyped in `firefinder.html`).

**Closeup View** - A zoom closeup photo can be toggled when a smoke is visible in a photograph. It behaves the same as the one in Learn-your-territory.html. 

**Firefinder overlay** - Already implemented in  `firefinder.html`.   Needs additional mouse control added: clicking the mouse on the photograph moves the firefinder sight to that point. 

---

### 2.3 Report Page

A full page form the user completes after gathering the needed data.

**Fields** (matching `PracticeSmokeReport.txt`):

| Field | Input type |
|---|---|
| Lookout Name | Radio: Buck Rock / Park Ridge / Delilah |
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
| Best Access | text input |
| Time and Date | text input |

When **False** is selected as the classification, the remaining fields dim out (not required).

A **Submit** button at the bottom of the panel triggers evaluation.  

A **Clear** button clears the form (both user entries and evaluation remarks).

Pressing **Tab** toggles the form off (and returns to the Training Screen on the same scenario.)

A **Print** button presents a printable version (PDF?) of the current form.

---

### 2.4 Evaluation

The Report screen is annotated with the correct results after the trainee submits a report. 

**Content:**

- Each report field listed with a green ✓ or red ✗
- Correct value shown beside or beneath any incorrect answer
- Summary score (e.g., "7 of 9 correct")

---

## 3. Navigation Flow

```
Initial state (instructions in content area, all header controls active)
  └─[Scenario selected]──────► Training Screen (photo + firefinder)
                             ├─[‹ ›]────────► same screen, different photo
                             ├─[B]──────────► Binoculars (closeup photo of smoke)
                             ├─[M]──────────► Map tab (named window, reused)
                             ├─[Tab]────────► Report page form appears
                             │    └─[Submit]► Results annotate user's report
                             │               └─[Close]──► Training Screen
                             └─[Quit scenario]──► Idle state (controls re-enabled)
```

---

