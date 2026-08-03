// Panorama + landmark data for Learn-your-territory.html
//
// Loaded via a plain <script> tag (not fetch/JSON), so the app keeps working
// when the HTML file is opened directly (file://) with no local server.
// It's still a separate, human-readable, easily-edited text file.
//
// Structure:
//   PANORAMAS[lookoutName].photos[]  — one entry per photo in that lookout's
//                                      360° set, in left-to-right order
//     src           — path to the photo, relative to Learn-your-territory.html
//     width, height — native pixel dimensions of that photo
//     landmarks[]   — landmarks visible in this photo. Same fields as before:
//       x1, y1  — top end of the line (undecorated, label appears above here)
//       x2, y2  — bottom end of the line (dot or arrow, points to the land feature)
//       label   — name displayed when the user clicks the line; use \n to
//                 break it across multiple lines, e.g. "No Name Mtn\nSec 4 NW 1/4"
//       target  — shape of the symbol drawn at (x2,y2), one of:
//                   "circle"  — land feature is visible; open circle outline
//                   "ellipse" — land feature is visible; open ellipse outline
//                   "arrow"   — land feature is not directly visible (canyon,
//                               valley, etc.); tip is drawn as an arrowhead
//       closeup — path to a closeup photo of this landmark, or null to disable
const PANORAMAS = {
  "Delilah": {
    photos: [
      // Add more photos here as they become available — each one gets its own
      // width/height and landmarks[], e.g.:
      {
         src: "images/Landmarks_Delilah1.png", width: 1920, height: 968,
         landmarks: [
          { id:1, x1:1037,  y1:60, x2:1037,  y2:428, label: "Squaw Valley (FKU)", target: "ellipse", closeup: null   },
          { id:2, x1:1432,  y1:60, x2:1432,  y2:314, label: "Bald Mt (FKU)",             target: "circle", closeup: null  },
          { id:3, x1:1844, y1:60, x2:1844, y2:219, label: "Bear Mt (FKU)",             target: "circle", closeup: "images/closeups/bear_mtn_fresno.jpg"},
 ]
      },
      {
         src: "images/Landmarks_Delilah2.png", width: 1920, height: 892,
         landmarks: [          
            { id:1, x1:504, y1:60, x2:504, y2:255, label: "Dalton Mt (FKU)",               target: "circle", closeup: null   },
            { id:2, x1:1470, y1:60, x2:1470, y2:427, label: "Wonder Valley (FKU)", target: "ellipse", closeup: "images/wonder_valley.png" },
            { id:3, x1:1736, y1:60, x2:1736, y2:223, label: "Tivy Mountain (FKU)", target: "circle", closeup: null } 
 ]
      },
      {
         src: "images/Landmarks_Delilah3.png", width: 1920, height: 870,
         landmarks: [
            { id:1, x1:844, y1:60, x2:844, y2:296, label: "Hughes Mountain (FKU)", target: "circle", closeup: null },
            { id:2, x1:1509, y1:60, x2:1509, y2:423, label: "Island Park - West (FKU)", target: "circle", closeup: null },
            { id:3, x1:1705, y1:60, x2:1705, y2:439, label: "Lakeview Rec Area\nSierra", target: "circle", closeup: "images/boat_dock.png" }, 
 ]
      },
      {
         src: "images/Landmarks_Delilah4.png", width: 1920, height: 921,
         landmarks: [
            { id:1, x1:169, y1:60, x2:169, y2:244, label: "Hog Mountain ()", target: "circle", closeup: null },
            { id:2, x1:962, y1:60, x2:962, y2:278, label: "Oat Mountain (FKU)", target: "circle", closeup: null },
]
      },
      {
         src: "images/Landmarks_Delilah5.png", width: 1920, height: 1008,
         landmarks: [
            { id:1, x1:944, y1:60, x2:944, y2:372, label: "Secata Ridge (SNF)", target: "circle", closeup: null },
            { id:2, x1:1091, y1:60, x2:1091, y2:621, label: "White Deer Saddle ()", target: "circle", closeup: null },
 ]
      },
      {
         src: "images/Landmarks_Delilah6.png", width: 1920, height: 1146,
         landmarks: [
            { id:1, x1:461, y1:60, x2:461, y2:319, label: "Fence Meadow Lookout (SNF)", target: "circle", closeup: null },
            { id:2, x1:1688, y1:60, x2:1688, y2:918, label: "Balch Camp (SNF)", target: "circle", closeup: null },
 ]
      },
      {
         src: "images/Landmarks_Delilah7.png", width: 1920, height: 1014,
         landmarks: [
            { id:1, x1:861, y1:60, x2:861, y2:369, label: "Patterson Bluffs (SNF)", target: "circle", closeup: null },
            { id:2, x1:1028, y1:60, x2:1028, y2:151, label: "Nelson Mtn (SNF)", target: "circle", closeup: null },
            { id:3, x1:1218, y1:60, x2:1218, y2:555, label: "Penstocks (SNF)", target: "circle", closeup: "images/closeups/penstocks.jpg" },
 ]
      },
      {
         src: "images/Landmarks_Delilah8.png", width: 1920, height: 1344,
         landmarks: [
            { id:1, x1:194, y1:60, x2:194, y2:1318, label: "Kings River (SNF)", target: "circle", closeup: null },
            { id:2, x1:437, y1:60, x2:437, y2:788, label: "Bear Wallow (SNF)", target: "circle", closeup: null },
            { id:3, x1:1848, y1:60, x2:1848, y2:191, label: "Finger Rock (SNF)", target: "circle", closeup: "images/finger_rock.jpg" },
 ]
      },
      {
         src: "images/Landmarks_Delilah9.png", width: 1920, height: 1009,
         landmarks: [
            { id:1, x1:1391, y1:60, x2:1391, y2:163, label: "Spanish Mtn (SNF)", target: "circle", closeup: null },
            { id:2, x1:1655, y1:60, x2:1655, y2:813, label: "Verplank Saddle (SQF)", target: "circle", closeup: null },
 ]
      },
      {
         src: "images/Landmarks_Delilah10.png", width: 1920, height: 1042,
         landmarks: [
            { id:1, x1:1280, y1:60, x2:1280, y2:136, label: "Converse Mtn ()", target: "circle", closeup: null },
            { id:2, x1:1500, y1:60, x2:1500, y2:990, label: "Sampson Crk (SQF)", target: "arrow", closeup: null },
 ]
      },
      {
         src: "images/Landmarks_Delilah11.png", width: 1920, height: 1265,
         landmarks: [
            { id:1, x1:1621, y1:60, x2:1621, y2:1192, label: "Samson Flat (SQF)", target: "circle", closeup: null },
            { id:2, x1:1380, y1:60, x2:1380, y2:461, label: "Mill Creek (SQF)", target: "arrow", closeup: null },
            { id:3, x1:883, y1:60, x2:883, y2:181, label: "McGee Overlook ()", target: "circle", closeup: "images/mcgee_overlook.jpg" },
 ]
      },
      {
         src: "images/Landmarks_Delilah12.png", width: 1920, height: 984,
         landmarks: [
            { id:1, x1:620, y1:60, x2:620, y2:213, label: "Big Baldy ()", target: "circle", closeup: null },
            { id:2, x1:1503, y1:200, x2:1503, y2:324, label: "Logger Pt ()", target: "circle", closeup: null },
 ]
      },
      {
         src: "images/Landmarks_Delilah13.png", width: 1920, height: 1008,
         landmarks: [
            { id:1, x1:965, y1:250, x2:965, y2:410, label: "Shadequarter Mtn ()", target: "circle", closeup: null },
            { id:2, x1:1338, y1:270, x2:1338, y2:535, label: "Sequoia Highlands Camp ()", target: "circle", closeup: "images/sequoia_highlands_cabin.png" },
 ]
      },
      {
         src: "images/Landmarks_Delilah14.png", width: 1920, height: 1004,
         landmarks: [
            { id:1, x1:165, y1:360, x2:165, y2:552, label: "Bear Mtn (TUU)", target: "circle", closeup: null },
 ]
      },
      {
         src: "images/Landmarks_Delilah15.png", width: 1920, height: 1006,
         landmarks: [
            { id:1, x1:726, y1:120, x2:726, y2:708, label: "Delilah Rd ()", target: "circle", closeup: null },
 ]
      },
      {
         src: "images/Landmarks_Delilah16.png", width: 1920, height: 1007,
         landmarks: [
            { id:1, x1:1838, y1:300, x2:1838, y2:585, label: "Reedley ()", target: "circle", closeup: null },
 ]
      },

    ]
  },
};
