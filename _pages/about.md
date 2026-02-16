---
permalink: /
title: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style>


.page__content {
  margin: 0 !important;
  padding: 0 !important;
  width: 100% !important;
}

.page__inner-wrap {
  margin: 0 !important;
  padding: 0 !important;
}

/* HERO SECTION */
.hero-section {
  position: relative;
  width: 100%;
  min-height: 200vh;
  background-image: url('/images/Blay Jeffery 2.jpg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: #020617;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
}

.hero-content {
  background: rgba(0, 0, 0, 0.65);
  padding: 50px;
  border-radius: 14px;
  backdrop-filter: blur(10px);
  max-width: 800px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
}

.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 25px;
  color: white;
  line-height: 1.3;
}

.hero-content p {
  font-size: 1.2rem;
  color: #e2e8f0;
  line-height: 1.8;
  margin-bottom: 15px;
}

/* DASHBOARD SECTION */

.dashboard-section {
  background: linear-gradient(180deg, rgba(46, 60, 71, 0.08) 40%, rgba(3, 3, 3, 0.08) 60%);
  padding: 100px 20px;
}

.dashboard-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  max-width: 1100px;
  margin: auto;
  gap: 30px;
}

.metric-card {
  background: rgba(7, 12, 17, 0.69);
  border: 1px solid rgba(5, 10, 13, 0.84);
  padding: 50px 20px;
  border-radius: 14px;
  text-align: center;
  transition: all 0.35s ease;
  backdrop-filter: blur(12px);
}

.metric-card:hover {
  transform: translateY(-12px);
  border-color: rgba(214, 245, 245, 0.84);
  box-shadow: 0 20px 40px rgb(251, 251, 251);
}

.metric-number {
  font-size: 3.5rem;
  font-weight: 700;
  color: #fbfbfb;
}

.metric-label {
  font-size: 1.2rem;
  color: #f8f8f9;
  margin-top: 12px;
}

/* RESPONSIVE */

@media (max-width: 768px) {

  .hero-content h1 {
    font-size: 1.8rem;
  }

  .hero-content p {
    font-size: 1rem;
  }

  .hero-content {
    padding: 30px;
  }

  .hero-section {
    background-attachment: scroll;
    min-height: auto;
  }

}

</style>

<section>
<div class="hero-section">
  <div class="hero-content">
    <h1>About Me</h1>

    <p> 
      I’m Jeffrey Blay, a Geospatial Data Scientist specializing in scalable AI-driven solutions for spatial intelligence and predictive analytics. With a strong focus on geospatial data engineering, I design robust data pipelines and advanced machine learning systems that transform complex spatial data into actionable insights for real-world risk modeling and evidence-based decision-making.
    
    </p>

  </div>
</div>
</section>

<!-- DASHBOARD SECTION -->

<section class="dashboard-section">

  <div class="dashboard-container">

    <div class="metric-card">
      <div class="metric-number">{{ site.publications | size }}</div>
      <div class="metric-label">Publications</div>
    </div>

    <div class="metric-card">
      <div class="metric-number">{{ site.portfolio | size }}</div>
      <div class="metric-label">Projects</div>
    </div>

    <div class="metric-card">
      <div class="metric-number">{{ site.talks | size }}</div>
      <div class="metric-label">Talks & Conferences</div>
    </div>

    <div class="metric-card">
      <div class="metric-number">6+</div>
      <div class="metric-label">Years Experience</div>
    </div>

  </div>

</section> 


<!-- LATEST PUBLICATIONS -->

<section class="dashboard-section">

<h2 class="section-header">Latest Publications</h2>

<div class="card-grid">

{% assign pubs = site.publications | sort: 'date' | reverse %}
{% for post in pubs limit:3 %}

<div class="card">

<div class="card-title">{{ post.title }}</div>

<div class="card-meta">
{{ post.venue }} • {{ post.date | date: "%Y" }}
</div>

<a href="{{ post.url }}">View Publication →</a>

</div>

{% endfor %}

</div>

</section>

<!-- LATEST PROJECTS -->

<section class="dashboard-section">

<h2 class="section-header">Featured Projects</h2>

<div class="card-grid">

{% assign projects = site.portfolio | sort: 'date' | reverse %}
{% for post in projects limit:3 %}

<div class="card">

<div class="card-title">{{ post.title }}</div>

<div class="card-meta">
{{ post.excerpt | strip_html | truncate: 80 }}
</div>

<a href="{{ post.url }}">View Project →</a>

</div>

{% endfor %}

</div>

</section>

