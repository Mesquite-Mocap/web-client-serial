# web-client-serial

This is the code that displays the aggregated data, as well as reading the information from the Raspberry Pi

## Breakdown of Files

1. server.js  is a simple server running
2. package-lock.json is the list of packages used in this code
3. /node_modules/ are libraries that the node server uses in this code. each of these files has their own readme
4. /docs/ the code that visualizes the data on the rig. Refer to the ReadMe in this file. 


## What to do 

Clone the [web-client-serial](https://github.com/Mesquite-Mocap/web-client-serial) repo on to your computer. 

Navigate to the [mappings.js](https://github.com/Mesquite-Mocap/web-client-serial/blob/main/docs/mappings.js) file in the docs folder of the web-client-serial directory. 

Change the mac addresses from "00:00:00:00:00:XX" to the specific mac addresses of each of your T-Watches. This is why we wrote down the addresses for each watch earlier. 

The code shows which joint each Pod should be. If you do not already have them, you can find the mac addresses (along with the output data) of your T-Watch in the serial monitor in the Arduino IDE while it is plugged in and running the code. In your terminal on MacOS or terminal emulation on Windows ([GitBash](https://gitforwindows.org/) is a good one), ‘cd’ to the web-client-serial folder, then enter in ‘node server.js’. 

After this, you can go to the [local host](http://localhost:1234). When you hit the Connect button at the top, a drop down menu will show you the available serial ports. Click on the serial port that your Raspberry pi is sending data to. The 3D model on the screen should now move according to the Pod. Each T-Watch controls a different joint of the model based on your custom mapping.
