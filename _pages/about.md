---
permalink: /
title: "Welcome to my Website!"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
<!--
# About Me
![Background image](/images/Blay Jeffery 2.jpg)

I am Jeffrey Blay, a passionate and ambitious individual who believes in turning the  
**"IMPOSSIBLE"** into **"I’M POSSIBLE"** through dedication and perseverance.
I am an aspiring **Geospatial Data Scientist/Engineer**, interested in applying data science  
and engineering techniques to extract meaningful insights from complex data to solve real-world problems.
Currently, I am pursuing a **Ph.D. in Applied Science**, specializing in **Geospatial Data Science**,  
with **years of experience** in applying machine learning techniques for spatial modeling and analytics.
I am seeking a **Summer 2026 internship** in data science or geospatial analytics to  
leverage my technical expertise and contribute to impactful projects.-->

<style>
/* ---------- CONTAINER ---------- */
.about-container {
  position: relative;
  min-height: 100vh;
  padding: 80px 20px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  /* Background (static + parallax) */
  background-image: url('/images/Blay Jeffery 2.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* Fade-in animation */
  animation: fadeIn 1.2s ease-in-out forwards;
}

/* ---------- OVERLAY (for readability) ---------- */
.about-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.45); /* Dark overlay */
  z-index: 0;
}

.about-content {
  position: relative;
  z-index: 1; /* Keep text above overlay */
  max-width: 900px;
  margin: 0 auto;
  backdrop-filter: blur(2px); /* Soft text-background separation */
  padding: 20px;
}

/* ---------- HEADER STYLING ---------- */
.about-content h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  text-shadow: 0 2px 6px rgba(0,0,0,0.8);
}

/* ---------- TEXT STYLING ---------- */
.about-content p {
  font-size: 1.25rem;
  line-height: 1.7;
  text-shadow: 0 1px 3px rgba(0,0,0,0.7);
}

/* ---------- FADE-IN KEYFRAME ---------- */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ---------- MOBILE OPTIMIZATION ---------- */
@media (max-width: 768px) {
  .about-container {
    background-attachment: scroll; /* Mobile browsers limit fixed backgrounds */
  }
  .about-content h1 {
    font-size: 2.2rem;
  }
  .about-content p {
    font-size: 1.05rem;
  }
}
</style>


<div class="about-container">
<div class="about-content">

# About Me

I am Jeffrey Blay, a passionate and ambitious individual who believes in turning the  
**"IMPOSSIBLE"** into **"I’M POSSIBLE"** through dedication and perseverance.

I am an aspiring **Geospatial Data Scientist/Engineer**, interested in applying  
data science and engineering techniques to extract meaningful insights from  
complex data to solve real-world problems.

Currently, I am pursuing a **Ph.D. in Applied Science**, specializing in  
**Geospatial Data Science**, with **years of experience** in applying  
machine learning techniques for spatial modeling and analytics.

I am seeking a **Summer 2026 internship** in data science or geospatial  
analytics to leverage my technical expertise and contribute to impactful projects.

</div>
</div>