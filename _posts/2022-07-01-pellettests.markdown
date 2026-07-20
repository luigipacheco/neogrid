---
layout: post
title:  "Robot Fabrication with 3DP Plastic"
date:   2022-07-01 18:54:32 -0500
image: assets/images/fulls/cd.jpg
permalink: /robotic-pellet-extruder/
thumbnail: assets/images/thumbnails/pellet.png
caption: Robotic Fabrication
categories: robotics
---

## Integrating a Pellet Extruder with a KUKA Robot

For this project I integrated **Massive Dimension's pellet extruder** with a **KUKA robot** using an IoT approach: the extruder and the robot talk to each other over a UDP connection, so the extrusion can be adjusted in real time while the robot prints.

I developed the **ESP32 firmware**, a customized **OSC (Open Sound Control) interface**, and the toolpath integration. Because the extruder speaks OSC, it can be driven from **Grasshopper**, **Blender**, or even **TouchOSC** on a phone — whatever fits the experiment.

![Pellet Extruder in Action](/assets/images/pellet/pellet.jpg)

### Custom Interfaces and Toolpath Integration

The point of the OSC layer is flexibility: instead of baking extrusion values into the toolpath, the interface lets us change flow and speed live, mid-print. That makes the setup useful for experimentation, not just production runs.

![Kuka Robot with Pellet Extruder](/assets/images/pellet/pellet1.jpg)

![Robot-Pellet Extruder Integration](/assets/images/pellet/pellet2.jpg)

### Lab Capabilities

This setup expanded our lab's robotic 3D printing capabilities — large-format plastic printing with real-time control, and a communication pattern (UDP + OSC) we've since reused for other tools.

![3D Printing with Robot and Pellet Extruder](/assets/images/pellet/pellet3.jpg)

![Advanced 3D Printing Setup](/assets/images/pellet/pellet5.jpg)
