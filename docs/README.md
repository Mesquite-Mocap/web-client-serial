# DOCS

This is the visualization piece of the pod.  

## Overview of the Files

1. /models/ are the models downloded from Mixamo
2. /jsm/ are the java script modeling information
3. custom.js: this is the script that runs the calibration, and the movement function
4. index.html: the html page that will show the model and movement
5. mappings.js: this takes the MAC address of each device and align it to a limb.
6. Quaternion.min.js:  Math for the Quaternions
7. Serial.js: code for the raspberry pi to push the data via serial 

## What to do 

Clone the [web-client-serial](https://github.com/Mesquite-Mocap/web-client-serial) repo on to your computer. 

Navigate to the [mappings.js](https://github.com/Mesquite-Mocap/web-client-serial/blob/main/docs/mappings.js) file in the docs folder of the web-client-serial directory. 

Change the mac addresses from "00:00:00:00:00:XX" to the specific mac addresses of each of your T-Watches. This is why we wrote down the addresses for each watch earlier. 

The code shows which joint each Pod should be. If you do not already have them, you can find the mac addresses (along with the output data) of your T-Watch in the serial monitor in the Arduino IDE while it is plugged in and running the code. In your terminal on MacOS or terminal emulation on Windows ([GitBash](https://gitforwindows.org/) is a good one), ‘cd’ to the web-client-serial folder, then enter in ‘node server.js’. 

After this, you can go to the [local host](http://localhost:1234). When you hit the Connect button at the top, a drop down menu will show you the available serial ports. Click on the serial port that your Raspberry pi is sending data to. The 3D model on the screen should now move according to the Pod. Each T-Watch controls a different joint of the model based on your custom mapping.
