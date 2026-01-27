---
title: "Geospatial and Deep Learning Approaches for Modeling Floodwater Depth in Urbanized Areas"
collection: publications
category: manuscripts
permalink: /publication/2025-12-24-geospatial-deep-learning
excerpt: 'This paper is about the application of deep learning models for modeling floodwater depth'
date: 2025-12-24
venue: 'Remote Sensing-MDPI'
paperurl: 'https://doi.org/10.3390/rs18010060'

---

**Abstract**
Floodwater depth estimation is essential for disaster response and infrastructure planning yet remains challenging in urban areas with limited gage and hydrological data. This study presents a deep learning-based framework grounded in the hydrostatic equilibrium principle to estimate flood depth using a remote sensing approach. A series of ResNet architectures were trained and evaluated under two different scenarios: (a) a baseline model input using LiDAR-derived DTM and flood extent, and (b) an enhanced model incorporating additional terrain features such as slope, curvature, and TopographicWetness Index (TWI). The results demonstrate that ResNet18 outperformed deeper models, achieving an RMSE of 0.71 ft, Huber Loss of 0.28 ft, MAE of 0.23 ft, SSIM of approximately 99% and R-Squared of approximately 94% under the enhanced scenario. Inclusion of terrain predictors led to significant improvements in prediction accuracy and spatial coherence. They improved Huber Loss by 28%, RMSE by 13%, and MAE by 21%. However, when applied to an unseen peri-urban catchment, model performance declined (RMSE = 1.95 ft), mainly due to limited and temporally misaligned ground truth data, and differences in spatial characteristics. Despite these limitations, ResNet18 generalizes well, mapping flood depth in unseen catchments, and demonstrates the potential for rapid assessments in data-scarce regions.
