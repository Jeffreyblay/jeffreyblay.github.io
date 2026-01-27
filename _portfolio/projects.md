---
title: "Development Projects"
excerpt: "Full-stack data engineering and analytics applications that solve real-world problems.<br/><img src='/images/rs_gis/logo_rs.jpg'>"
collection: portfolio
---

<!-- ADD PROJECT SUMMARY TO ALL PROJECTS-->
### Climate and Extreme Weather Alert Dashboard

**Summary:** This project is a production-ready, full-stack web application that provides real-time weather monitoring and risk assessment by ingesting live National Weather Service alerts, processing them through an ETL pipeline, and delivering actionable insights via an interactive analytics dashboard.

**Objective:** To build an end-to-end data engineering solution that transforms raw weather alert data into structured, risk-scored insights accessible to businesses and communities for informed decision-making during climate emergencies.

**Method:** Developed a RESTful API backend using FastAPI with multi-parameter filtering capabilities, implemented custom risk-scoring algorithms for severity categorization, built a responsive JavaScript frontend with real-time data visualization, and deployed the system using Docker with automated CI/CD workflows on Render and GitHub Pages.

**Outcome:** Delivered a live application processing 1,000+ active alerts across 50 U.S. states with 99% uptime, sub-500ms API response times, and an analytics dashboard calculating 6+ real-time metrics including severity breakdowns, top event types, and risk distributions—demonstrating production-grade data engineering from API integration to user-facing deployment.

**Tech Stack:** Python, FastAPI, JavaScript, HTML/CSS, Docker, CI/CD, RESTful APIs, Git/GitHub

**Links:** [Live Dashboard](https://jeffreyblay.github.io/climate-alert-dashboard/) | [GitHub](https://github.com/Jeffreyblay/climate-alert-etl) | [API Docs](https://climate-alert-etl.onrender.com/docs)


<div style="text-align:center; margin-bottom:20px;">
  <img src="/images/projects/app_interface.png" alt="penalty" style="max-width:80%;">
  <p style="font-size:0.9em; margin-top:5px;">Climate and Extreme Weather Alert Dashboard</p>
</div>


---