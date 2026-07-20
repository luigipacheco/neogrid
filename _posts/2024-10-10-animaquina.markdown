---
layout: post
title:  "Animaquina"
date: 2024-10-10 18:54:32 -0500
thumbnail: assets/images/thumbnails/animaquina.png
permalink: /animaquina/
caption: Animaquina
categories: robotics
---
{% include video.html youtube="fK9M8f3fa6o" title="Animaquina overview" %}

**Animaquina** is a robot IDE that controls and simulates robotic arms directly inside **Blender**. Instead of learning a vendor's proprietary software, you program, visualize, and move real robots from Blender's 3D viewport — the same environment designers already model in. I built it to close the gap between digital simulation and physical execution, for designers, engineers, and students working with robots.

![Animaquina Interface](/assets/images/animaquina/animaquina-interface.png)

## Features

What it can do today:

- **IP-based Robot Connection**: Connect and control robots over an IP network.
- **Real-time Manipulation**: Move and adjust robots directly within Blender’s 3D viewport.
- **Digital Twin Synchronization**: Keep the digital model synchronized with the physical robot.
- **Real-time Movement Visualization**: Visualize robot movements in real time for immediate feedback.
- **Manual Mode**: Manipulate the physical robot manually, with real-time updates in the digital twin.
- **Marker Placement**: Digitize features of the working environment by placing markers in the digital model.
- **Toolpath Execution**: Create and run toolpaths based on mesh object vertices, useful for complex manufacturing tasks.
- **Info Panel**: Display the current joint rotation and TCP (Tool Center Point) position.
- **VR and XR Integration**: Integrates with Freebird XR, allowing for immersive interaction in virtual or extended reality environments.

{% include video.html youtube="S1i2mHIK08o" title="Animaquina demo" %}

![Animaquina Interface](/assets/images/animaquina/animaquina-real-time-robotics.gif)
## Supported Robot Versions

Animaquina supports different robot models, each optimized for specific platforms:

- **Animaquina-UR**: Compatible with **Universal Robots**, tested with models UR5e, UR10e, and UR20.
- **Animaquina-Xarm**: Compatible with **UFactory Xarm** robots, tested with the Xarm-6.
- **Animaquina-KUKA**: Compatible with **KUKA** robots (limited functionality), tested with KUKA Agilus KR10-1100.

For support or custom integrations, feel free to reach out at: `luigi(at)neobrutal(dot)com`.

## Applications

Where I've seen it used, and where I want to take it:

1. **Hybrid Manufacturing**: 
    - Develop, manage, and run robotic toolpaths for **3D printing**, **CNC milling**, and more, directly from Blender.
2. **Art Installations**: 
    - Create interactive art pieces that respond to environmental inputs, choreographed through Blender.
3. **Theatre and Stage Performances**: 
    - Control moving stage elements, enabling complex choreographies and dynamic performances.
4. **Education**: 
    - Teach concepts of robotics within an integrated and easy-to-use environment, making learning more interactive.
5. **Prototyping**: 
    - Quickly test robotic motion in the real world, with direct control from Blender for faster iteration cycles.


{% include image-gallery.html folder="/assets/images/animaquina/gallery" %}