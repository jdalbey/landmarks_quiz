// Training scenario data for firefinder_simulator.html
//
// Loaded via a plain <script> tag, same as lookouts-data.js — keeps working
// when the HTML file is opened directly (file://) with no local server.
//
// A scenario names one or more photos (by id, from LOOKOUTS in
// lookouts-data.js) to be navigable, and — if there's smoke to find —
// where it's composited on top of one of those photos and what the
// correctly-filled-out Smoke Report should say.
//
// Structure:
//   SCENARIOS[scenarioId]
//     label      — text shown in the Scenario dropdown
//     lookout    — which LOOKOUTS entry this scenario belongs to; used to
//                  filter the Scenario dropdown when a Lookout is selected
//     photoIds   — photos the trainee can page through (Prev/Next) during
//                  this scenario, in order; smoke (if any) appears on one
//                  of them
//     smoke      — omit entirely for a "no smoke" / false-alarm scenario.
//                    photoId      — which photo in photoIds shows the smoke
//                    overlayImage — transparent plume graphic composited
//                                   onto the panorama at (xPos, yPos)
//                    xPos, yPos   — where the BASE of the plume sits on the
//                                   photo, in PIXELS, measured on the photo
//                                   file at its native resolution (the same
//                                   width/height recorded for that photo in
//                                   lookouts-data.js) — the same convention
//                                   already used for landmark markers
//                                   (x1/y1/x2/y2) in panoramas-data.js. Open
//                                   the photo file in any image editor (e.g.
//                                   GIMP, Preview, Photoshop), hover the
//                                   pointer where the smoke's base should
//                                   sit, and read off its pixel coordinates
//                                   directly — no fractions or unit
//                                   conversion needed. (0, 0) is the photo's
//                                   top-left corner; x increases left→right,
//                                   y increases top→bottom.
//                                   firefinder_simulator.html converts these
//                                   native pixel coordinates to on-screen
//                                   position each time it positions the
//                                   overlay (see initFirefinder()): xPos /
//                                   photo.width and yPos / photo.height give
//                                   the fraction across the photo, which is
//                                   then scaled to however large the photo
//                                   is currently rendered — so the same
//                                   xPos/yPos stay correctly placed at any
//                                   window size or zoom level. The overlay
//                                   image itself is anchored by this point
//                                   at its bottom-center (CSS
//                                   translate(-50%,-100%) on #smoke-overlay),
//                                   like a map pin, so xPos/yPos mark where
//                                   the smoke touches the ground, not the
//                                   top-left corner of the graphic.
//                    widthPx      — overlay's displayed width, in pixels,
//                                   measured against the SAME native photo
//                                   resolution as xPos/yPos (e.g. if you
//                                   eyeball the plume as ~100px wide on the
//                                   full-size photo, use 100 here). Scaled
//                                   the same way as xPos/yPos at render
//                                   time; height follows automatically to
//                                   keep the overlay image's own aspect
//                                   ratio.
//                    closeupImage — shown when the trainee uses Binoculars
//     answers    — the graded Smoke Report answer key. `azimuth` is NOT
//                  stored redundantly here — it's derived at grading time
//                  from smoke.xPos (as a fraction of the photo's native
//                  width) plus the photo's left_azimuth/right_azimuth, so
//                  the answer key can never drift out of sync with where
//                  the smoke is actually drawn. Only its grading tolerance
//                  (azimuth_tolerance_min) lives here.
//
// ⚠ TODO — every field under `answers` below (distance, landmark, legal
//   description, jurisdiction, dispatcher, volume/color/character/drift,
//   fuel, best access) is SAMPLE/PLACEHOLDER content, not real survey data.
//   evaluateReport() in firefinder_simulator.html still only grades the
//   Classification field — it does NOT yet check these against the answer
//   key. Fill in real answers here and extend evaluateReport() to use them
//   before treating any of this as a trustworthy graded exercise.
//
// "Random" in the Scenario dropdown is not a data entry here — the app
// picks a random scenario id (excluding itself) that matches the selected
// Lookout at runtime. See pickRandomScenario() in firefinder_simulator.html.

const SCENARIOS = {

  "d1": {
    label: "Delilah #1 (Easy)",
    lookout: "Delilah",
    photoIds: ["delilah_3"],
    smoke: {
      photoId: "delilah_3",
      overlayImage: "assets/white_smoke.png",
      xPos: 1606, yPos: 434, widthPx: 96,   // pixel coords on the 1920x870 native photo
      closeupImage: "assets/smoke_closeup_fallback.png"
    },
    answers: { // TODO: placeholder — see file header
      classification: "illegitimate",
      azimuth_tolerance_min: 15,
      distance: { miles: 6.2, tolerance: 0.5 },
      landmark: "Hume Lake",
      legal: { township: 14, range: 29, section: 22, quarter: "NE" },
      base_visible: "yes",
      volume: ["medium"],
      color: ["grey", "white"],
      character: ["billowing"],
      drift: "N",
      fuel: ["timber"],
      jurisdiction: "SQF",
      dispatcher: "porterville"
    }
  },

  "d2": {
    label: "Delilah #2 (Easy)",
    lookout: "Delilah",
    photoIds: ["delilah_2"],
    smoke: {
      photoId: "delilah_2",
      overlayImage: "assets/black_smoke.png",
      xPos: 1450, yPos: 438, widthPx: 77,   // pixel coords on the 1920x968 native photo
      closeupImage: null
    },
    answers: { // TODO: placeholder — see file header
      classification: "illegitimate",
      azimuth_tolerance_min: 15,
      distance: { miles: 4.8, tolerance: 0.5 },
      landmark: "Bald Mountain",
      legal: { township: 13, range: 28, section: 9, quarter: "SW" },
      base_visible: "no",
      volume: ["small"],
      color: ["white"],
      character: ["thin"],
      drift: "E",
      fuel: ["brush"],
      jurisdiction: "FKU",
      dispatcher: "sierra"
    }
  },

  "d3": {
    label: "Delilah #3 (Medium)",
    lookout: "Delilah",
    photoIds: ["delilah_1"],
    smoke: {
      photoId: "delilah_1",
      overlayImage: "assets/black_smoke.png",
      xPos: 384, yPos: 561, widthPx: 96,   // pixel coords on the 1920x968 native photo
      closeupImage: null
    },
    answers: { // TODO: placeholder — see file header
      classification: "legitimate",
      azimuth_tolerance_min: 10,
      distance: { miles: 9.1, tolerance: 0.5 },
      landmark: "Squaw Valley",
      legal: { township: 15, range: 27, section: 3, quarter: "NW" },
      base_visible: "yes",
      volume: ["large"],
      color: ["black", "grey"],
      character: ["column", "heavy"],
      drift: "S",
      fuel: ["timber", "brush"],
      jurisdiction: "FKU",
      dispatcher: "sierra"
    }
  },

  "d4": {
    label: "Delilah #4 (Difficult)",
    lookout: "Delilah",
    photoIds: ["delilah_1",'delilah_2','delilah_3','delilah_4','delilah_5','delilah_6','delilah_7','delilah_8','delilah_9','delilah_10','delilah_11','delilah_12','delilah_13','delilah_14','delilah_15','delilah_16'],
    smoke: {
      photoId: "delilah_3",
      overlayImage: "assets/white_smoke.png",
      xPos: 1632, yPos: 658, widthPx: 67,   // pixel coords on the 1920x968 native photo
      closeupImage: null
    },
    answers: { // TODO: placeholder — see file header
      classification: "false",
      azimuth_tolerance_min: 10,
      distance: null,
      landmark: "Bear Mountain (dust, not smoke)",
      legal: null,
      base_visible: "no",
      volume: ["small"],
      color: ["white"],
      character: ["thin", "puffing"],
      drift: "W",
      fuel: [],
      jurisdiction: "FKU",
      dispatcher: "none"
    }
  }

};
