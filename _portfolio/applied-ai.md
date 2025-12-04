---
title: "Applied AI (Artificial Intelligence)"
excerpt: "Practical machine learning and AI projects that turn algorithms into real-world, industry-relevant solutions.<br/><img src='/images/applied_ai/logo.png'>"
collection: portfolio
---

<!-- ADD PROJECT SUMMARY TO ALL PROJECTS-->
### Physics-Informed (PI) Deep Learning for Urban Flood Depth prediction

**Summary:** This project focuses on developing a physics-informed deep learning framework to predict urban flood depth under hydrostatic conditions. The work integrates remote sensing data, with a hydrology-aware U-Net architecture for physically consistent depth estimation.

**Objective:** To build a physics-informed U-Net that accurately predicts urban flood depth using hydrostatic and terrain-based constraints.

**Method:** Developed a deep learning pipeline with custom total loss functions that incorporate hydrological and terrain principles for model training and evaluation.

**Outcome:** Demonstrated a functional framework for physics-informed flood depth prediction, under hydrostatic conditions, with preliminary results of 0.67ft RMSE, and 0.23 ft MAE, suitable for high resolution urban applications. 


<div style="text-align:center; margin-bottom:20px;">
  <img src="/images/applied_ai/terrain_pen.png" alt="penalty" style="max-width:80%;">
  <p style="font-size:0.9em; margin-top:5px;">Terrain Penalty weights to enforce PI consistence during training.</p>
</div>

<div style="text-align:center; margin-bottom:20px;">
  <img src="/images/applied_ai/pi.png" alt="Flood risk map" style="max-width:80%;">
  <p style="font-size:0.9em; margin-top:5px;">Predicted results on test set.</p>
</div>

---

### Transformer Models for Urban Flood Depth prediction

**Summary:** This project applies transformer-based geospatial deep learning models to predict urban floodwater depth using remote sensing and terrain data. The goal is to leverage advanced attention mechanisms to enhance spatial understanding and depth estimation in complex urban environments.

**Objective:** To develop and test transformer architectures for accurate, high-resolution prediction of floodwater depth in urban areas.

**Method:** Implemented transformer models (Swin Transformer, and SegFormer) using the Pytorch library to generate flood-depth predictions.

**Outcome:** Produced a transformer-based flood-depth prediction framework capable of capturing fine-scale spatial patterns and providing reliable outputs for urban flood-risk analytics.


<div style="text-align:center; margin-bottom:20px;">
  <img src="/images/applied_ai/transformer_loss.png" alt="loss" style="max-width:80%;">
  <p style="font-size:0.9em; margin-top:5px;">Validation loss from models' training.</p>
</div>

<div style="text-align:center; margin-bottom:20px;">
  <img src="/images/applied_ai/transformers2.png" alt="predicted results" style="max-width:80%;">
  <p style="font-size:0.9em; margin-top:5px;">Predicted results and evaluation errors on test set.</p>
</div>

---

### EzProcess: Rapid Geospatial Data Prep for ML/DL

**Summary:** Developed EZProcess, a Python library for easy processing of remote sensing and geospatial data to support machine learning and deep learning workflows. The library streamlines data preparation for a wide range of geospatial AI applications.

**Objective:** To create a reusable tool that simplifies and standardizes geospatial data preprocessing for ML/DL model training.

**Method:** Implemented modular functions for raster/mask handling, normalization, stacking, and pipeline automation to efficiently prepare geospatial datasets for AI tasks, using various python libraries

**Outcome:** Developed and published a versatile library that accelerates geospatial data workflows, ensures reproducibility, and supports scalable ML/DL model development across applications.


[Use library](https://github.com/Jeffreyblay/ezprocess_library)

 [Read about library](https://medium.com/@jeffreyblay7/ezprocess-a-lightweight-python-library-for-geospatial-data-engineering-bb0f90e2b0c3)

---
### Inundation2Depth: Geospatial Data for ML/DL Flood Prediction

**Summary:** Curated and developed the Inundation2Depth datasets, a high-resolution geospatial dataset linking flood inundation extent to measured floodwater depth. The dataset supports training and evaluation of ML/DL models for accurate flood-depth prediction.

**Objective:** To create standardized, high-quality datasets that enable data-driven modeling of urban and regional floodwater depth.

**Method:** Leveraged Python and Arcpy to process multi-source remote sensing data to generate structured datasets suitable for machine learning and deep learning tasks.

**Outcome:** Delivered a benchmark dataset that facilitates AI-based flood-depth modeling, accelerates research, and improves reproducibility in geospatial flood analytics.

[Download data](https://zenodo.org/records/17308287?preview=1&token=eyJhbGciOiJIUzUxMiJ9.eyJpZCI6IjJiNjcwYzYzLTkxNzAtNDg3OC1hYTZkLWExOWMwNTRjMzlhZCIsImRhdGEiOnt9LCJyYW5kb20iOiI5YmYwNjdlMjI0ZGI3YTRhMWM5NGM3MTZlYTE3MTMxMiJ9.4Yb0b9fRvJ6OkEsAAgjWzdAQXJ_FdO8dKulAt3pke3p8I3CIlJSJ1fhlwm3Y4a06nsGiyBH25sGSpWywLKPy-A)

<div style="text-align:center; margin-bottom:20px;">
  <img src="/images/applied_ai/inundation2depth.jpg" alt="workflow" style="max-width:80%;">
  <p style="font-size:0.9em; margin-top:5px;">Data curation and processing workflow</p>
</div>

---