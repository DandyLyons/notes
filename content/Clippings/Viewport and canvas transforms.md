---
title: Viewport and canvas transforms
author: 
contentPublished: 
noteCreated: 2024-11-29
tags:
  - clippings
  - article
description: "Introduction: This is an overview of the 2D transforms going on for nodes from the moment they draw their content locally to the time they are drawn onto the screen. This overview discusses very lo..."
takeaways: 
url: https://docs.godotengine.org/en/stable/tutorials/2d/2d_transforms.html#introduction
---
## Highlights
This is an overview of the 2D transforms going on for nodes from the moment they draw their content locally to the time they are drawn onto the screen. This overview discusses very low level details of the engine.

The goal of this tutorial is to teach a way for feeding input events to the Input with a position in the correct coordinate system.

A more extensive description of all coordinate systems and 2d transforms is available in [2D coordinate systems and 2D transforms](https://docs.godotengine.org/en/stable/contributing/development/core_and_modules/2d_coordinate_systems.html#doc-2d-coordinate-systems).

every CanvasItem node will reside in a *Canvas Layer*

Every canvas layer has a transform (translation, rotation, scale, etc.)

To convert a CanvasItem local coordinate to an actual screen coordinate, the following chain of transforms must be applied:

![../../_images/viewport_transforms3.webp](https://docs.godotengine.org/en/stable/_images/viewport_transforms3.webp)

