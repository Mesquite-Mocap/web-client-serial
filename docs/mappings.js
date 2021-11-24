/* Remember the Mac addresses?  This is where you align the Mac addresses to the seed.
id: these are cases for us to code in custom.js. These are the cases that will align limb, to coordinates to be visualized
calibration: this is the T pose
last: last location 
actual: the real time data stream*/

var mac2Bones = {
  "84:0D:8E:07:32:24" : {id: "LeftArm", calibration:{x:0, y:0, z:0, w:1}, last:{x:0, y:0, z:0, w:1}, actual:{x:0, y:0, z:0, w:1}}, 
  "24:62:AB:DD:C4:3C" : {id: "LeftForeArm", calibration:{x:0, y:0, z:0, w:1}, last:{x:0, y:0, z:0, w:1}, actual:{x:0, y:0, z:0, w:1}},
  "00:00:00:00:00:02" : {id: "LeftHand", calibration:{x:0, y:0, z:0, w:1}, last:{x:0, y:0, z:0, w:1}, actual:{x:0, y:0, z:0, w:1}},
  "00:00:00:00:00:03" : {id: "LeftUpLeg", calibration:{x:0, y:0, z:0, w:1}, last:{x:0, y:0, z:0, w:1}, actual:{x:0, y:0, z:0, w:1}},
  "00:00:00:00:00:04" : {id: "LeftLeg", calibration:{x:0, y:0, z:0, w:1}, last:{x:0, y:0, z:0, w:1}, actual:{x:0, y:0, z:0, w:1}},
  "00:00:00:00:00:05" : {id: "LeftFoot", calibration:{x:0, y:0, z:0, w:1}, last:{x:0, y:0, z:0, w:1}, actual:{x:0, y:0, z:0, w:1}},
  "00:00:00:00:00:06" : {id: "LeftShoulder", calibration:{x:0, y:0, z:0, w:1}, last:{x:0, y:0, z:0, w:1}, actual:{x:0, y:0, z:0, w:1}},
  "00:00:00:00:00:07" : {id: "LeftToeBase", calibration:{x:0, y:0, z:0, w:1}, last:{x:0, y:0, z:0, w:1}, actual:{x:0, y:0, z:0, w:1}},
  "00:00:00:00:00:00" : {id: "RightForeArm", calibration:{x:0, y:0, z:0, w:1}, last:{x:0, y:0, z:0, w:1}, actual:{x:0, y:0, z:0, w:1}},
  "00:00:00:00:00:09" : {id: "RightArm", calibration:{x:0, y:0, z:0, w:1}, last:{x:0, y:0, z:0, w:1}, actual:{x:0, y:0, z:0, w:1}},
  "00:00:00:00:00:10" : {id: "RightHand", calibration:{x:0, y:0, z:0, w:1}, last:{x:0, y:0, z:0, w:1}, actual:{x:0, y:0, z:0, w:1}},
  "00:00:00:00:00:11" : {id: "RightUpLeg", calibration:{x:0, y:0, z:0, w:1}, last:{x:0, y:0, z:0, w:1}, actual:{x:0, y:0, z:0, w:1}},
  "00:00:00:00:00:12" : {id: "RightLeg", calibration:{x:0, y:0, z:0, w:1}, last:{x:0, y:0, z:0, w:1}, actual:{x:0, y:0, z:0, w:1}},
  "00:00:00:00:00:13" : {id: "RightFoot", calibration:{x:0, y:0, z:0, w:1}, last:{x:0, y:0, z:0, w:1}, actual:{x:0, y:0, z:0, w:1}},
  "00:00:00:00:00:14" : {id: "RightShoulder", calibration:{x:0, y:0, z:0, w:1}, last:{x:0, y:0, z:0, w:1}, actual:{x:0, y:0, z:0, w:1}},
  "00:00:00:00:00:15" : {id: "RightToeBase", calibration:{x:0, y:0, z:0, w:1}, last:{x:0, y:0, z:0, w:1}, actual:{x:0, y:0, z:0, w:1}},
  "00:00:00:00:00:16" : {id: "Hips", calibration:{x:0, y:0, z:0, w:1}, last:{x:0, y:0, z:0, w:1}, actual:{x:0, y:0, z:0, w:1}},
  "00:00:00:00:00:17" : {id: "Head", calibration:{x:0, y:0, z:0, w:1}, last:{x:0, y:0, z:0, w:1}, actual:{x:0, y:0, z:0, w:1}},
  "00:00:00:00:00:18" : {id: "Neck", calibration:{x:0, y:0, z:0, w:1}, last:{x:0, y:0, z:0, w:1}, actual:{x:0, y:0, z:0, w:1}},
  "00:00:00:00:00:19" : {id: "Spine", calibration:{x:0, y:0, z:0, w:1}, last:{x:0, y:0, z:0, w:1}, actual:{x:0, y:0, z:0, w:1}},
  "00:00:00:00:00:20" : {id: "", calibration:{x:0, y:0, z:0, w:1}, last:{x:0, y:0, z:0, w:1}, actual:{x:0, y:0, z:0, w:1}},
  "00:00:00:00:00:21" : {id: "", calibration:{x:0, y:0, z:0, w:1}, last:{x:0, y:0, z:0, w:1}, actual:{x:0, y:0, z:0, w:1}},
  "00:00:00:00:00:22" : {id: "", calibration:{x:0, y:0, z:0, w:1}, last:{x:0, y:0, z:0, w:1}, actual:{x:0, y:0, z:0, w:1}},
  "00:00:00:00:00:23" : {id: "", calibration:{x:0, y:0, z:0, w:1}, last:{x:0, y:0, z:0, w:1}, actual:{x:0, y:0, z:0, w:1}},
  "00:00:00:00:00:24" : {id: "", calibration:{x:0, y:0, z:0, w:1}, last:{x:0, y:0, z:0, w:1}, actual:{x:0, y:0, z:0, w:1}}
}
