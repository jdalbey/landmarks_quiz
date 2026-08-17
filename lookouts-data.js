// Lookout + panorama photo data for firefinder_simulator.html
//
// Loaded via a plain <script> tag (not fetch/JSON), so the app keeps working
// when the HTML file is opened directly (file://) with no local server —
// same pattern used by panoramas-data.js for Know-your-territory.html.
//
// Structure:
//   LOOKOUTS[lookoutName].photos[] — one entry per photo in that lookout's
//                                    360° panorama set, in left-to-right order
//     id            — unique identifier, referenced by scenarios-data.js
//     src           — path to the photo, relative to firefinder_simulator.html
//     width, height — native pixel dimensions of the photo (measured from
//                     the actual image files)
//     left_azimuth  — compass bearing in degrees at the LEFT edge of the photo
//     right_azimuth — compass bearing in degrees at the RIGHT edge of the photo
//
// ⚠ TODO — left_azimuth/right_azimuth are real survey data that only you can
//   supply. Only delilah_1 has values below, carried over from the bearing
//   range (281°–316°) the simulator already had hardcoded. Every other photo
//   is marked null until real bearings are filled in — the firefinder azimuth
//   exercise will be wrong for a photo whose range isn't set correctly, so
//   don't wire up new scenarios against a null-azimuth photo yet.
//
// ⚠ TODO — Buck Rock and Park Ridge have no panorama photos on disk yet.
//   Add photos here (and matching scenarios in scenarios-data.js) once
//   those sets exist.

const LOOKOUTS = {
  "Delilah": {
    photos: [
      { id: "delilah_1",  src: "images/Landmarks_Delilah1.png",  width: 1920, height: 968,  left_azimuth: 228,  right_azimuth: 250},
      { id: "delilah_2",  src: "images/Landmarks_Delilah2.png",  width: 1920, height: 892,  left_azimuth: 250, right_azimuth: 272 }, 
      { id: "delilah_3",  src: "images/Landmarks_Delilah3.png",  width: 1920, height: 870,  left_azimuth: 272, right_azimuth: 296 }, 
      { id: "delilah_4",  src: "images/Landmarks_Delilah4.png",  width: 1920, height: 921,  left_azimuth: 296, right_azimuth: 321 }, 
      { id: "delilah_5",  src: "images/Landmarks_Delilah5.png",  width: 1920, height: 1009, left_azimuth: 312, right_azimuth: 338 }, 
      { id: "delilah_6",  src: "images/Landmarks_Delilah6.png",  width: 1920, height: 1146, left_azimuth: 338, right_azimuth: 359 }, 
      { id: "delilah_7",  src: "images/Landmarks_Delilah7.png",  width: 1920, height: 1014, left_azimuth: 359, right_azimuth: 20 },
      { id: "delilah_8",  src: "images/Landmarks_Delilah8.png",  width: 1920, height: 1344, left_azimuth: 20, right_azimuth: 42 }, 
      { id: "delilah_9",  src: "images/Landmarks_Delilah9.png",  width: 1919, height: 1009, left_azimuth: 42, right_azimuth: 66 },
      { id: "delilah_10", src: "images/Landmarks_Delilah10.png", width: 1919, height: 1042, left_azimuth: 66, right_azimuth: 89 },
      { id: "delilah_11", src: "images/Landmarks_Delilah11.png", width: 1919, height: 1265, left_azimuth: 89, right_azimuth: 115 },
      { id: "delilah_12", src: "images/Landmarks_Delilah12.png", width: 1919, height: 984,  left_azimuth: 115, right_azimuth: 141 },
      { id: "delilah_13", src: "images/Landmarks_Delilah13.png", width: 1920, height: 888,  left_azimuth: 137, right_azimuth: 162 }, 
      { id: "delilah_14", src: "images/Landmarks_Delilah14.png", width: 1920, height: 1004, left_azimuth: 162, right_azimuth: 185 }, 
      { id: "delilah_15", src: "images/Landmarks_Delilah15.png", width: 1920, height: 1006, left_azimuth: 185, right_azimuth: 216 }, 
      { id: "delilah_16", src: "images/Landmarks_Delilah16.png", width: 1920, height: 1007, left_azimuth: 216, right_azimuth: 235 }  
    ]
  },

  "Buck Rock": {
    photos: [] // TODO: no panorama photos yet
  },

  "Park Ridge": {
    photos: [] // TODO: no panorama photos yet
  }
};
