function getMacOfBone(bone)
{
    var keys = Object.keys(mac2Bones);
    for(var i = 0; i < keys.length; i++){
      if(mac2Bones[keys[i]].id === bone){
        return keys[i];
      }
    }
    return -1;
}

/* This file is is the customization for the model. This takes the aggregration, the bone assigments and then handles the coordinates */ 

var rigPrefix = "mixamorig";

function calibrate()
{
    var keys = Object.keys(mac2Bones);
    for(var i = 0; i < keys.length; i++){
      mac2Bones[keys[i]].calibration.x = mac2Bones[keys[i]].last.x;
      mac2Bones[keys[i]].calibration.y = mac2Bones[keys[i]].last.y;
      mac2Bones[keys[i]].calibration.z = mac2Bones[keys[i]].last.z;
      mac2Bones[keys[i]].calibration.w = mac2Bones[keys[i]].last.w;
    }
}

function handleWSMessage(obj)
{
      mac2Bones[obj.id].last.x = obj.x;
      mac2Bones[obj.id].last.y = obj.y;
      mac2Bones[obj.id].last.z = obj.z;
      mac2Bones[obj.id].last.w = obj.w;
      var bone = mac2Bones[obj.id].id;
      var x = model.getObjectByName(rigPrefix + bone);
      var q = new Quaternion(obj.x, obj.y, obj.z, obj.w);
      var qC = new Quaternion(mac2Bones[obj.id].calibration.x,mac2Bones[obj.id].calibration.y,mac2Bones[obj.id].calibration.z,mac2Bones[obj.id].calibration.w).inverse()
      var qR = q.mul(qC);
      var qF;

    // This switch case is for the bone. You need to define the limb. 

      switch(bone){
        case 'LeftArm':
          qF = qR;
          x.quaternion.set( qF.y, qF.x, -qF.z, -qF.w);
          break;

        case 'LeftForeArm':
          var q = new Quaternion(qR.x, qR.y, qR.z, qR.w);
          console.log(bone)
          var mac = getMacOfBone("LeftArm");
          console.log(mac)
          var qC = new Quaternion(mac2Bones[mac].actual.x,mac2Bones[mac].actual.y,mac2Bones[mac].actual.z,mac2Bones[mac].calibration.w);
            console.log(bone);
          if(Math.abs(q.y - qC.y)>.05){
            qF = q.mul(qC.inverse());
          }
          else{
            qF = qR;
          }
         //   qF = qR;
         qF = new Quaternion(q.x-qC.x, q.y-qC.y, q.z-qC.z, q.w-qC.w)
          x.quaternion.set(-qF.z, qF.x, -qF.y, -qF.w);
          console.log(bone,qR,qF);
          break;

        default:
         qF = qR;
         x.quaternion.set(qF.y, -qF.x, -qF.z, qF.w); // EDIT THIS TO MATCH THE MOVEMENT.  Each one is different, but it takes the measurements of each axis
         break;
      }
    
    //THIS WILL ASSIGN THE "BONES" to the Model 
    
      mac2Bones[obj.id].actual.x = qF.x;
      mac2Bones[obj.id].actual.y = qF.y;
      mac2Bones[obj.id].actual.z = qF.z;
      mac2Bones[obj.id].actual.w = qF.w;
}
