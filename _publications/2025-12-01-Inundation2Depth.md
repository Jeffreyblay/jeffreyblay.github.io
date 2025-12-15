---
title: "Inundation2Depth: A multi-source dataset for floodwater depth estimation in urban areas"
collection: publications
category: manuscripts
permalink: /publication/2025-12-01-Inundation2Depth
excerpt: 'This paper is about a comprehensive datasets for training and evaluation ML/DL models for predicting urban flood depth'
date: 2025-12-01
venue: 'Elsevier'
paperurl: 'https://doi.org/10.1016/j.dib.2025.112347'

---

**Abstract**
Floods impose severe risks in urban areas, yet operational mapping often stops at inundation extent rather than depth, which is critical for assessing and managing accessibility, and risk. Progress in deep learning offers a path forward but is constrained by the scarcity of large quantity, georeferenced depth datasets that are well labelled. Inundation2Depth dataset pairs inundation extent-depth labels derived from aerial imagery and LiDAR (Light Detection and Ranging)-based DTMs (Digital Terrain Models) under hydrostatic assumptions (water-surface elevation relative to terrain). The dataset encompass 12 flood affected areas across North and South Carolina in the Southeastern United States, covering 24,649.88 acres with diverse environmental characteristics. Data acquisition spans the period between 2016 and 2018, corresponding to two major hurricane flood events that significantly impacted the Carolinas. The sources include complementary layers from multi-sensor remote sensing imagery (thus, Optical and LiDAR point cloud data), which were preprocessed through standard correction, normalization, and georeferencing steps to ensure spatial consistency across scenes. Data are provided as scene-level raster and 256×256 tiles, available in both raw and normalized versions with consistent naming to support direct integration in machine/deep learning pipelines. It constitutes a total of 5925 overlapping tiles. This dataset’s unique characteristics, such as spatial diversity and standardized format, make it valuable for developing and evaluating flood detection, segmentation, and damage assessment models. Inundation2Depth lowers the data barrier for GeoAI research on urban flood severity and promotes comparability across methods and study areas. The generated dataset was validated through a hydrodynamic modeling approach using HEC-RAS Rain-on-Grid tool.

