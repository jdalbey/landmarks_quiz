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
    // Each photo has its own set of landmarks. Don't forget to add photo width/height.
    photos: [
      {
         src: "images/Landmarks_Delilah1.png", width: 1920, height: 968,
         landmarks: [
          { id:1, x1:1000, y1:60, x2:1000,  y2:428, label: "Squaw Valley (FKU)", target: "ellipse", closeup: null   },
          { id:2, x1:1432,  y1:100, x2:1432,  y2:314, label: "Bald Mtn (FKU)",             target: "circle", closeup: null  },
          { id:3, x1:1844, y1:60, x2:1844, y2:219, label: "Bear Mtn (FKU)",             target: "circle", closeup: "images/closeups/bear_mtn_fresno.jpg"},
          { id:4, x1:555, y1:100, x2:721, y2:407, label: "Dude Ridge (SQF)", target: "circle", closeup: null},
          { id:4, x1:555, y1:100, x2:322, y2:321, label: "Dude Ridge (SQF)", target: "circle", closeup: null},
          { id:5, x1:1222, y1:100, x2:1222, y2:409, label: "Silver Tank/Dollar General (FKU)", target: "circle", closeup: "images/silver_tank.png"},
          { id:6, x1:1336, y1:60, x2:1336, y2:305, label: "Granite Hill (FKU)", target: "circle", closeup: null},
          { id:7, x1:1699, y1:100, x2:1799, y2:749, label: "Hopewell Rd (FKU)", target: "arrow", closeup: null},
          { id:8, x1:719, y1:60, x2:719, y2:300, label: "4 radio towers", target: "circle", closeup: "images/four_radio_towers.jpg"},

 ]
      },
      {
         src: "images/Landmarks_Delilah2.png", width: 1920, height: 892,
         landmarks: [          
            { id:1, x1:504, y1:100, x2:504, y2:255, label: "Dalton Mtn (FKU)",               target: "circle", closeup: null   },
            { id:2, x1:1470, y1:60, x2:1470, y2:427, label: "Wonder Valley (FKU)", target: "ellipse", closeup: "images/wonder_valley.png" },
            { id:3, x1:1736, y1:60, x2:1736, y2:223, label: "Tivy Mtn (FKU)", target: "circle", closeup: null }, 
          { id:4, x1:186, y1:60, x2:186, y2:345, label: "Elwood Rd (FKU)", target: "arrow", closeup: null},
          { id:5, x1:490, y1:60, x2:490, y2:216, label: "Jess Morrow Mtn (FKU)", target: "circle", closeup: null},
          { id:6, x1:1305,  y1:60, x2:1305, y2:288, label: "Harmon Pk (FKU)", target: "circle", closeup: null},
          { id:7, x1:890,  y1:60, x2:882, y2:278, label: "Piedra silo", target: "circle", closeup: "images/piedra_silo.png"},
          { id:8, x1:800,  y1:100, x2:838, y2:294, label: "Caglia ranch (FKU)", target: "circle", closeup: "images/white_fence_ranch.png"},
          { id:9, x1:1414,  y1:100, x2:1414, y2:570, label: "Mill Crk (FKU)", target: "circle", closeup: null},
          { id:10, x1:1880, y1:50, x2:1880, y2:241, label: "Shaw Ave", target: "circle", closeup: null},


 ]
      },
      {
         src: "images/Landmarks_Delilah3.png", width: 1920, height: 870,
         landmarks: [
            { id:1, x1:335, y1:120, x2:335, y2:507, label: "Luckett Mtn", target: "circle", closeup: null},
            { id:2, x1:405, y1:60, x2:405, y2:405, label: "Flat above and \nWest of Zebe Creek\n(FKU)", target: "circle", closeup: null},
            { id:3, x1:600, y1:150, x2:600, y2:525, label: "Rancheria Crk (FKU)", target: "arrow", closeup: null},
            { id:4, x1:658, y1:110, x2:658, y2:470, label: "Sycamore Crk (FKU)", target: "arrow", closeup: null},
            { id:5, x1:671, y1:60, x2:671, y2:375, label: "Pine Flat Dam (FKU)", target: "arrow", closeup: null},
            { id:6, x1:844, y1:60, x2:844, y2:296, label: "Hughes Mtn (FKU)", target: "circle", closeup: null },
            { id:7, x1:1021, y1:110, x2:1021, y2:362, label: "Pk 2672?\nT13S R25E Sec 4 NW1/4 (FKU)", target: "circle", closeup: null},
            { id:8, x1:1067, y1:60, x2:1067, y2:253, label: "Red Mtn (FKU)", target: "circle", closeup: null},
            { id:9, x1:1406, y1:140, x2:1406, y2:425, label: "Pine Flat Lake (FKU)", target: "circle", closeup: null},
            { id:10, x1:1509, y1:170, x2:1509, y2:423, label: "Island Park - West (FKU)", target: "circle", closeup: null },
            { id:11, x1:1705, y1:150, x2:1705, y2:439, label: "Lakeview Rec Area\n(SNF)", target: "circle", closeup: "images/boat_dock.png" },
            { id:12, x1:1185, y1:60, x2:1185, y2:364, label: "Pk 2122?", target: "circle", closeup: null},
            { id:13, x1:1245, y1:30, x2:1245, y2:215, label: "Owens Mtn", target: "circle", closeup: null},
            { id:14, x1:1335, y1:60, x2:1335, y2:244, label: "Wildcat Mtn (FKU)", target: "circle", closeup: null},
            { id:15, x1:1356, y1:100, x2:1356, y2:337, label: "Hughes Crk (FKU)", target: "circle", closeup: null},
            { id:16, x1:1579, y1:60, x2:1579, y2:315, label: "Granite Ridge (FKU)", target: "circle", closeup: null},
            { id:17, x1:1646, y1:100, x2:1646, y2:350, label: "Deer Crk (FKU)", target: "circle", closeup: null},
            { id:18, x1:813, y1:160, x2:813, y2:857, label: "Hopewell Rd? (FKU)", target: "circle", closeup: null},
            { id:19, x1:1140, y1:140, x2:1140, y2:690, label: "White Deer Crk? (FKU)", target: "circle", closeup: null},
            { id:20, x1:1780, y1:190, x2:1709, y2:664, label: "Ranch on 12S19 (FKU)", target: "circle", closeup: "images/closeups/ranch12s19.jpg" },

 ]
      },
      {
         src: "images/Landmarks_Delilah4.png", width: 1920, height: 921,
         landmarks: [
            { id:1, x1:169, y1:60, x2:169, y2:244, label: "Hog Mtn (SNF)", target: "circle", closeup: null },
            { id:2, x1:955, y1:100, x2:962, y2:278, label: "Oat Mtn (SQF)", target: "circle", closeup: null },
            { id:3, x1:439, y1:60, x2:439, y2:385, label: "Lefever Crk (SQF)", target: "arrow", closeup: null },
            { id:4, x1:637, y1:60, x2:637, y2:219, label: "Red Mtn (FKU)", target: "circle", closeup: null },
            { id:5, x1:753, y1:120, x2:805, y2:302, label: "Watts Vly (FKU)", target: "circle", closeup: null },
            { id:6, x1:818, y1:60, x2:808, y2:207, label: "Green Mtn (FKU)", target: "circle", closeup: null },
            { id:7, x1:1013, y1:60, x2:1003, y2:178, label: "Black Mtn (FKU)", target: "circle", closeup: null },
            { id:8, x1:1125, y1:140, x2:1156, y2:276, label: "Watts Vly Rd (FKU)", target: "arrow", closeup: null },
            { id:9, x1:1200, y1:100, x2:1232, y2:239, label: "Sierra Union HS", target: "circle", closeup: null },
            { id:10, x1:1275, y1:60, x2:1286, y2:215, label: "Auberry", target: "ellipse", closeup: null },
            { id:11, x1:1340, y1:100, x2:1285, y2:272, label: "Burrough Vly (FKU)", target: "circle", closeup: null },
            { id:12, x1:296, y1:100, x2:296, y2:445, label: "Twin Chimneys (FKU)", target: "circle", closeup: "images/twin_chimneys.png" },
            { id:13, x1:1632, y1:60, x2:1632, y2:172, label: "Burrough Mtn (SNF)", target: "circle", closeup: null },
            { id:14, x1:1689, y1:100, x2:1689, y2:224, label: "Branford Mtn (SNF)", target: "circle", closeup: null },
            { id:15, x1:1681, y1:130, x2:1681, y2:258, label: "Eagle Pk (SNF)", target: "circle", closeup: null },
            { id:16, x1:1780, y1:60, x2:1780, y2:172, label: "Hwy 168 Four Lane (SNF)", target: "circle", closeup: null },
]
      },
      {
         src: "images/Landmarks_Delilah5.png", width: 1920, height: 1008,
         landmarks: [
            { id:1, x1:900, y1:60, x2:432, y2:402, label: "Secata Ridge (SNF)", target: "circle", closeup: null },
            { id:1, x1:900, y1:60, x2:944, y2:372, label: "Secata Ridge (SNF)", target: "circle", closeup: null },
            { id:2, x1:473, y1:60, x2:473, y2:300, label: "Davis Mtn (SNF)", target: "circle", closeup: null },
            { id:3, x1:649, y1:100, x2:649, y2:347, label: "Cat's Head (SNF)", target: "circle", closeup: null },
            { id:4, x1:703, y1:60, x2:703, y2:302, label: "Slick Rock Jenny (SNF)", target: "circle", closeup: null },
            { id:5, x1:1091, y1:110, x2:1091, y2:621, label: "White Deer Saddle (FKU)", target: "circle", closeup: null },
            { id:6, x1:1213, y1:60, x2:1213, y2:602, label: "Rancheria Falls (SNF)", target: "circle", closeup: null },
            { id:7, x1:1385, y1:60, x2:1385, y2:514, label: "Rancheria Crk (SNF)", target: "circle", closeup: null },
            { id:8, x1:1662, y1:60, x2:1662, y2:188, label: "Shuteye LO (SNF)", target: "circle", closeup: null },
            { id:9, x1:1809, y1:60, x2:1809, y2:205, label: "Musick Mtn (SNF)", target: "circle", closeup: null },
            { id:10, x1:1824, y1:100, x2:1824, y2:210, label: "Shaver Lk (SNF)", target: "arrow", closeup: null },
 ]
      },
      {
         src: "images/Landmarks_Delilah6.png", width: 1920, height: 1146,
         landmarks: [
            { id:1, x1:461, y1:60, x2:461, y2:319, label: "Fence Meadow Lookout (SNF)", target: "circle", closeup: null },
            { id:2, x1:1688, y1:140, x2:1688, y2:918, label: "Balch Camp (SNF)", target: "circle", closeup: null },
            { id:3, x1:577, y1:100, x2:577, y2:662, label: "Sycamore Springs Crk (SNF)", target: "circle", closeup: null },
            { id:4, x1:746, y1:60, x2:746, y2:218, label: "Bald Mtn (SNF)", target: "circle", closeup: null },
            { id:5, x1:1165, y1:100, x2:1138, y2:532, label: "Bear Meadow Crk (SNF)", target: "circle", closeup: null },
            { id:6, x1:1125, y1:60, x2:1138, y2:251, label: "Dinkey Mtn (SNF)", target: "circle", closeup: null },
            { id:7, x1:1471, y1:100, x2:1357, y2:718, label: "Dinkey Crk (SNF)", target: "arrow", closeup: null },
            { id:8, x1:1471, y1:100, x2:1471, y2:512, label: "Dinkey Crk (SNF)", target: "arrow", closeup: null },
            { id:9, x1:1384, y1:60, x2:1384, y2:219, label: "Kaiser Pk (SNF)", target: "circle", closeup: null },
            { id:10, x1:944, y1:100, x2:944, y2:929, label: "Kings River (SNF)", target: "arrow", closeup: null },

 ]
      },
      {
         src: "images/Landmarks_Delilah7.png", width: 1920, height: 1014,
         landmarks: [
            { id:1, x1:315, y1:100, x2:315, y2:740, label: "N. Fork Kings River (SNF)", target: "arrow", closeup: null },
            { id:2, x1:417, y1:60, x2:417, y2:327, label: "Indian Rock (SNF)", target: "circle", closeup: null },
            { id:3, x1:734, y1:60, x2:734, y2:158, label: "Three Sisters (SNF)", target: "circle", closeup: null },
            { id:4, x1:861, y1:110, x2:861, y2:369, label: "Patterson Bluffs (SNF)", target: "circle", closeup: null },
            { id:5, x1:1028, y1:60, x2:1028, y2:151, label: "Nelson Mtn (SNF)", target: "circle", closeup: null },
            { id:6, x1:1218, y1:110, x2:1218, y2:555, label: "Penstocks (SNF)", target: "circle", closeup: "images/closeups/penstocks.jpg" },
            { id:7, x1:1631, y1:60, x2:1631, y2:206, label: "Sheeps Head (SNF)", target: "circle", closeup: null },
            { id:8, x1:1501, y1:100, x2:1501, y2:511, label: "Patterson Crk Falls (SNF)", target: "circle", closeup: null },
            { id:9, x1:1827, y1:60, x2:1827, y2:327, label: "Weir Crk (SNF)", target: "circle", closeup: null },
 ]
      },
      {
         src: "images/Landmarks_Delilah8.png", width: 1920, height: 1344,
         landmarks: [
            { id:2, x1:212, y1:60, x2:212, y2:177, label: "Black Rock (SNF)", target: "circle", closeup: null },
            { id:1, x1:157, y1:100, x2:194, y2:1318, label: "Kings River (SNF)", target: "circle", closeup: null },
            { id:3, x1:437, y1:525, x2:437, y2:788, label: "Bear Wallow (SNF)", target: "ellipse", closeup: null },
            { id:4, x1:780, y1:60, x2:790, y2:275, label: "Wishon Lk (SNF)", target: "arrow", closeup: null },
            { id:5, x1:565, y1:60, x2:355, y2:490, label: "Rodgers Ridge (SNF)", target: "circle", closeup: null },
            { id:5, x1:565, y1:60, x2:706, y2:476, label: "Rodgers Ridge (SNF)", target: "circle", closeup: null },
            { id:6, x1:955, y1:60, x2:955, y2:188, label: "Mt. Henry (SNF)", target: "circle", closeup: null },
            { id:7, x1:925, y1:100, x2:944, y2:306, label: "Granite Gorge (SNF)", target: "arrow", closeup: null },
            { id:8, x1:1313, y1:100, x2:1313, y2:269, label: "Sugarpine Hill (SNF)", target: "circle", closeup: null },
            { id:9, x1:1345, y1:60, x2:1345, y2:178, label: "Loper Pk (SNF)", target: "circle", closeup: null },
            { id:10, x1:1774, y1:60, x2:1774, y2:173, label: "Hoffman Mt (SNF)", target: "circle", closeup: null },
            { id:11, x1:1848, y1:100, x2:1848, y2:191, label: "Finger Rock (SNF)", target: "circle", closeup: "images/finger_rock.jpg" },
            { id:12, x1:1555, y1:60, x2:1251, y2:371, label: "Rodgers Ridge (SNF)", target: "circle", closeup: null },
            { id:12, x1:1555, y1:60, x2:1552, y2:340, label: "Rodgers Ridge (SNF)", target: "circle", closeup: null },
            { id:13, x1:975, y1:400, x2:975, y2:440, label: "Black Rock CG (Approx) (SNF)", target: "arrow", closeup: null },

 ]
      },
      {
         src: "images/Landmarks_Delilah9.png", width: 1920, height: 1009,
         landmarks: [
            { id:1, x1:384, y1:60, x2:384, y2:229, label: "Mt. Goddard (KNP)", target: "circle", closeup: null },
            { id:2, x1:488, y1:60, x2:488, y2:213, label: "Castle Pk (SNF)", target: "circle", closeup: null },
            { id:3, x1:744, y1:60, x2:744, y2:456, label: "Spring Crk (SNF)", target: "arrow", closeup: null },
            { id:4, x1:854, y1:60, x2:854, y2:211, label: "Garlic Mdw (SNF)", target: "circle", closeup: null },
            { id:5, x1:1100, y1:100, x2:900, y2:355, label: "Garlic Spur (SNF)", target: "circle", closeup: null },
            { id:5, x1:1100, y1:100, x2:1182, y2:405, label: "Garlic Spur (SNF)", target: "circle", closeup: null },
            { id:6, x1:990, y1:60, x2:990, y2:358, label: "Garlic Mdw Crk (SNF)", target: "arrow", closeup: null },
            { id:7, x1:1274, y1:140, x2:1274, y2:356, label: "Rough Spur (SNF)", target: "circle", closeup: null },
            { id:8, x1:1483, y1:100, x2:1483, y2:386, label: "Rough Crk (SNF)", target: "arrow", closeup: null },
            { id:9, x1:1391, y1:60, x2:1391, y2:163, label: "Spanish Mtn (SNF)", target: "circle", closeup: null },
            { id:10, x1:1635, y1:550, x2:1655, y2:813, label: "Verplank Saddle (SQF)", target: "circle", closeup: null },
            { id:11, x1:1211, y1:500, x2:1211, y2:692, label: "Kings River (SNF)", target: "arrow", closeup: null },
            { id:12, x1:1593, y1:140, x2:1500, y2:666, label: "Hoist Ridge (SQF)", target: "circle", closeup: null },
            { id:12, x1:1593, y1:140, x2:1724, y2:600, label: "Hoist Ridge (SQF)", target: "circle", closeup: null },
            { id:13, x1:1794, y1:60, x2:1794, y2:308, label: "Deer Ridge (SNF)", target: "circle", closeup: null },
 ]
      },
      {
         src: "images/Landmarks_Delilah10.png", width: 1920, height: 1042,
         landmarks: [
            { id:1, x1:225, y1:60, x2:229, y2:206, label: "Middle Fork Kings Rvr (SNF)", target: "arrow", closeup: null },
            { id:2, x1:290, y1:100, x2:270, y2:505, label: "Verplank Crk (SQF)", target: "arrow", closeup: null },
            { id:3, x1:406, y1:60, x2:406, y2:199, label: "Gorge of Despair (SNF)", target: "arrow", closeup: null },
            { id:4, x1:601, y1:60, x2:601, y2:146, label: "Silver Spur (SNF)", target: "circle", closeup: null },
            { id:5, x1:847, y1:60, x2:847, y2:104, label: "Mt Harrington (SNF)", target: "circle", closeup: null },
            { id:6, x1:691, y1:100, x2:389, y2:311, label: "Hoist Ridge (SQF)", target: "circle", closeup: null },
            { id:6, x1:691, y1:100, x2:691, y2:246, label: "Hoist Ridge (SQF)", target: "circle", closeup: null },
            { id:6, x1:691, y1:100, x2:1008, y2:213, label: "Hoist Ridge (SQF)", target: "circle", closeup: null },
            { id:7, x1:1203, y1:60, x2:1203, y2:127, label: "Wren Pk (SNF)", target: "circle", closeup: null },
            { id:8, x1:1280, y1:100, x2:1280, y2:136, label: "Converse Mtn (SQF)", target: "circle", closeup: null },
            { id:9, x1:1421, y1:100, x2:1421, y2:967, label: "Sampson Crk (SQF)", target: "arrow", closeup: null },
            { id:10, x1:1528, y1:60, x2:1528, y2:159, label: "Mt Clarence King (KNP)", target: "circle", closeup: null },
            { id:11, x1:800, y1:200, x2:658, y2:381, label: "Verplank Ridge (SQF)", target: "circle", closeup: null },
            { id:11, x1:800, y1:200, x2:1013, y2:310, label: "Verplank Ridge (SQF)", target: "circle", closeup: null },
            { id:12, x1:1200, y1:500, x2:1639, y2:667, label: "Mill Flat Crk (SQF)", target: "arrow", closeup: null },
            { id:12, x1:1200, y1:500, x2:809, y2:755, label: "Mill Flat Crk (SQF)", target: "arrow", closeup: null },


 ]
      },
      {
         src: "images/Landmarks_Delilah11.png", width: 1920, height: 1265,
         landmarks: [
            { id:4, x1:708, y1:60, x2:708, y2:153, label: "Cherry Gap (SQF)", target: "arrow", closeup: null },
            { id:1, x1:1621, y1:100, x2:1621, y2:1192, label: "Sampson Flat (SQF)", target: "ellipse", closeup: null },
            { id:2, x1:1310, y1:60, x2:1310, y2:465, label: "Mill Flat Crk (SQF)", target: "arrow", closeup: null },
            { id:3, x1:883, y1:60, x2:883, y2:181, label: "McGee Overlook (SQF)", target: "circle", closeup: "images/mcgee_overlook.jpg" },
            { id:5, x1:1068, y1:60, x2:1068, y2:736, label: "McKenzie Ridge (SQF)", target: "circle", closeup: null },
            { id:6, x1:1413, y1:100, x2:1413, y2:324, label: "Abbot Crk (SQF)", target: "arrow", closeup: null },
            { id:7, x1:1552, y1:60, x2:1552, y2:135, label: "Park Ridge (KNP)", target: "circle", closeup: null },
            { id:8, x1:1765, y1:60, x2:1765, y2:167, label: "Manzanita patch (KNP)", target: "circle", closeup: null },
            { id:9, x1:830, y1:100, x2:858, y2:568, label: "Goodmill (SQF)", target: "arrow", closeup: null },
 ]
      },
      {
         src: "images/Landmarks_Delilah12.png", width: 1920, height: 984,
         landmarks: [
            { id:1, x1:55, y1:60, x2:55, y2:253, label: "Grant Grove (KNP)", target: "ellipse", closeup: null },
            { id:2, x1:220, y1:60, x2:220, y2:192, label: "Park Ridge LO (KNP)", target: "circle", closeup: null },
            { id:3, x1:303, y1:100, x2:303, y2:416, label: "McKenzie Ridge (SQF)", target: "circle", closeup: null },
            { id:4, x1:452, y1:60, x2:452, y2:243, label: "Millwood (approx) (SQF)", target: "arrow", closeup: null },
            { id:5, x1:620, y1:60, x2:620, y2:213, label: "Big Baldy (KNP)", target: "circle", closeup: null },
            { id:6, x1:879, y1:60, x2:879, y2:255, label: "Redwood Mt (KNP)", target: "circle", closeup: null },
            { id:7, x1:1062, y1:60, x2:1062, y2:261, label: "Mineral King (SNP)", target: "ellipse", closeup: null },
            { id:8, x1:1241, y1:100, x2:1241, y2:364, label: "Hwy 180 below 245", target: "circle", closeup: "images/closeups/hwy180_roadcut.jpg" },
            { id:9, x1:1503, y1:200, x2:1503, y2:324, label: "Logger Pt (SQF)", target: "circle", closeup: null },
            { id:10, x1:1450, y1:100, x2:1450, y2:525, label: "Davis Y (SQF)", target: "circle", closeup: "images/closeups/davis_jct.jpg" },
            { id:11, x1:1784, y1:100, x2:1784, y2:377, label: "Eshom Pt (SQF)", target: "circle", closeup: null },
            { id:12, x1:1864, y1:200, x2:1864, y2:755, label: "Davis Rd (SQF)", target: "circle", closeup: null },
            { id:13, x1:1696, y1:140, x2:1696, y2:414, label: "Pinehurst (SQF)", target: "ellipse", closeup: null },
            { id:14, x1:1732, y1:240, x2:1732, y2:674, label: "Fox Spring (SQF)", target: "circle", closeup: null },

 ]
      },
      {
         src: "images/Landmarks_Delilah13.png", width: 1920, height: 1008,
         landmarks: [
            { id:1, x1:965, y1:250, x2:965, y2:410, label: "Shadequarter Mtn (TUU)", target: "circle", closeup: null },
            { id:2, x1:1338, y1:270, x2:1338, y2:535, label: "Sequoia Highlands Camp (FKU)", target: "circle", closeup: "images/sequoia_highlands_cabin.png" },
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
            { id:1, x1:726, y1:120, x2:726, y2:708, label: "Delilah Rd (SQF)", target: "circle", closeup: null },
 ]
      },
      {
         src: "images/Landmarks_Delilah16.png", width: 1920, height: 1007,
         landmarks: [
            { id:1, x1:1838, y1:300, x2:1838, y2:585, label: "Reedley", target: "ellipse", closeup: null },
 ]
      },

    ]
  },
};
