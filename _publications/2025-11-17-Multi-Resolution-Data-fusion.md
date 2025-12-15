---
title: "Multi-Resolution Data Fusion for Resilient Flood Mapping"
collection: publications
category: manuscripts
permalink: /publication/2025-11-17-Multi-Resolution-Data-fusion
excerpt: 'This paper is about the implementation of multi-source remote sensing data fusion for flood mapping.'
date: 2025-10-02
venue: 'IEEE Access'
paperurl: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11267202'

---

**Abstract**
Floods are among the most destructive and costly natural disasters worldwide, necessitating accurate and timely mapping for emergency response and impact assessment. Remote sensing offers a valuable means to monitor inundation, yet trade-offs in spatial, spectral, and temporal resolution limit single-sensor approaches. This study presents a comparative analysis of flood mapping using multimodal sensor fusion and semantic segmentation. We integrate high-resolution UAV RGB imagery with Synthetic Aperture Radar (SAR) data from Sentinel-1 and UAVSAR, focusing on the classification of four land cover classes relevant to flooding: inundated vegetation, dry vegetation, open water, and others. A modified U-Net architecture was developed to handle multimodal stacked inputs, allowing systematic evaluation of different sensor combinations. The results show that the combination of RGB UAV with UAVSAR VV polarization at 5 m resolution achieves the highest performance (mean IoU: 84. 9%), outperforming RGB UAV alone (77. 8%) and significantly surpassing the combinations of higher resolutionUAVSAR (1 m, 61. 2%) and Sentinel- 1. These findings highlight the complementary strengths of optical and SAR features, the importance of contextual information, and the counterintuitive benefit of medium-resolution UAVSAR for scene-level understanding. Incorporation of SAR indices such as VH/VV ratios provided modest gains, particularly in vegetation-rich areas. Cross-domain testing with Hurricane Matthew imagery revealed a notable drop in
generalization (best mean IoU: 46.2%), underscoring challenges of domain shift and the need for domain adaptive modeling. Overall, the results emphasize the advantages of multimodal fusion, especially UAVRGB with UAVSAR VV (5 m), for fine-grained flood mapping and suggest future directions in multi-temporal and adaptive frameworks for robust flood monitoring.

