---
permalink: /
title: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
<!--
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
  background: linear-gradient(180deg, rgba(18, 25, 31, 0.48) 40%, rgba(3, 3, 3, 0.32) 60%);
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
-->


<!-- DASHBOARD SECTION -->
<!--
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

-->

<!-- LATEST PUBLICATIONS -->
<!--
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
-->
<!-- LATEST PROJECTS -->
<!--
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
-->

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">

<style>
/* ── RESET & TOKENS ─────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --ink:        #0a0c0f;
  --ink-2:      #1a1e24;
  --ink-3:      #2a3040;
  --muted:      #6b7588;
  --muted-2:    #8f9ab0;
  --surface:    #f0f2f5;
  --surface-2:  #e4e8ef;
  --amber:      #d97706;
  --amber-glow: #f59e0b;
  --amber-dim:  rgba(217, 119, 6, 0.12);
  --teal:       #0d9488;
  --teal-dim:   rgba(13, 148, 136, 0.10);
  --white:      #ffffff;
  --grid-line:  rgba(10, 12, 15, 0.06);

  --font-display: 'Syne', sans-serif;
  --font-mono:    'JetBrains Mono', monospace;
  --font-body:    'Inter', sans-serif;
}

/* ── LAYOUT WRAPPERS (override theme) ──────────────────────── */
.page__content,
.page__inner-wrap {
  margin: 0 !important;
  padding: 0 !important;
  width: 100% !important;
  max-width: 100% !important;
}

/* ── SHARED ─────────────────────────────────────────────────── */
.jb-section {
  font-family: var(--font-body);
  background: var(--white);
  padding: 96px 24px;
}

.jb-container {
  max-width: 1080px;
  margin: 0 auto;
}

.jb-label {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--amber);
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.jb-label::before {
  content: '';
  display: inline-block;
  width: 20px;
  height: 1px;
  background: var(--amber);
}

/* ── HERO ────────────────────────────────────────────────────── */
.jb-hero {
  font-family: var(--font-body);
  background: var(--ink);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 80px 24px 80px;
}

/* Coordinate grid texture */
.jb-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
  background-size: 60px 60px;
  background-color: transparent;
  opacity: 0.35;
  pointer-events: none;
}

/* Amber glow blob */
.jb-hero::after {
  content: '';
  position: absolute;
  top: -20%;
  right: -10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(217,119,6,0.18) 0%, transparent 70%);
  pointer-events: none;
}

.jb-hero-inner {
  position: relative;
  z-index: 1;
  max-width: 1080px;
  margin: 0 auto;
  width: 100%;
}

.jb-hero-eyebrow {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--amber-glow);
  margin-bottom: 28px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.jb-hero-eyebrow::before {
  content: '';
  display: inline-block;
  width: 32px;
  height: 1px;
  background: var(--amber-glow);
}

.jb-hero h1 {
  font-family: var(--font-display);
  font-size: clamp(3rem, 7vw, 6rem);
  font-weight: 800;
  line-height: 1.05;
  color: var(--white);
  margin-bottom: 8px;
  letter-spacing: -0.02em;
}

.jb-hero h1 span.accent {
  color: var(--amber-glow);
}

.jb-hero-subtitle {
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--amber);
  letter-spacing: 0.08em;
  margin-bottom: 36px;
  margin-top: 16px;
}

.jb-hero-bio {
  font-size: 17px;
  line-height: 1.75;
  color: rgba(255,255,255,0.62);
  max-width: 640px;
  margin-bottom: 52px;
}

.jb-hero-bio strong {
  color: rgba(255,255,255,0.9);
  font-weight: 500;
}

/* CTA buttons */
.jb-cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 72px;
}

.jb-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.05em;
  padding: 12px 24px;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
}

.jb-btn-primary {
  background: var(--amber);
  color: var(--ink);
  border: 1px solid var(--amber);
}

.jb-btn-primary:hover {
  background: var(--amber-glow);
  border-color: var(--amber-glow);
  transform: translateY(-2px);
}

.jb-btn-ghost {
  background: transparent;
  color: rgba(255,255,255,0.8);
  border: 1px solid rgba(255,255,255,0.2);
}

.jb-btn-ghost:hover {
  border-color: rgba(255,255,255,0.5);
  color: var(--white);
  transform: translateY(-2px);
}

/* Stat strip */
.jb-hero-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  border-top: 1px solid rgba(255,255,255,0.08);
  padding-top: 40px;
}

.jb-stat {
  flex: 1;
  min-width: 140px;
  padding: 0 32px 0 0;
  margin-right: 32px;
  border-right: 1px solid rgba(255,255,255,0.08);
}

.jb-stat:last-child {
  border-right: none;
}

.jb-stat-num {
  font-family: var(--font-display);
  font-size: 2.8rem;
  font-weight: 800;
  color: var(--white);
  line-height: 1;
  margin-bottom: 6px;
}

.jb-stat-num span {
  color: var(--amber-glow);
}

.jb-stat-label {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted-2);
}

/* Scroll cue */
.jb-scroll-cue {
  position: absolute;
  bottom: 36px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.25);
  animation: jb-bob 2.4s ease-in-out infinite;
}

.jb-scroll-cue::after {
  content: '';
  display: block;
  width: 1px;
  height: 32px;
  background: linear-gradient(to bottom, rgba(255,255,255,0.25), transparent);
}

@keyframes jb-bob {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50%       { transform: translateX(-50%) translateY(6px); }
}

/* ── SKILLS SECTION ─────────────────────────────────────────── */
.jb-skills {
  background: var(--ink-2);
  padding: 96px 24px;
  font-family: var(--font-body);
  position: relative;
  overflow: hidden;
}

.jb-skills::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
}

.jb-skills-inner {
  position: relative;
  z-index: 1;
  max-width: 1080px;
  margin: 0 auto;
}

.jb-skills-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 56px;
  flex-wrap: wrap;
  gap: 20px;
}

.jb-skills-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--white);
  letter-spacing: -0.02em;
}

.jb-skills-title em {
  color: var(--amber-glow);
  font-style: normal;
}

/* Skill category grid */
.jb-skill-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2px;
}

.jb-skill-card {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  padding: 32px 28px;
  position: relative;
  transition: all 0.25s ease;
  cursor: default;
}

.jb-skill-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--amber);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.jb-skill-card:hover::before {
  transform: scaleX(1);
}

.jb-skill-card:hover {
  background: rgba(255,255,255,0.055);
}

.jb-skill-icon {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  color: var(--amber);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.jb-skill-icon::before {
  content: '';
  width: 6px;
  height: 6px;
  background: var(--amber);
  border-radius: 50%;
}

.jb-skill-card h3 {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 20px;
  letter-spacing: -0.01em;
}

.jb-tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.jb-tag {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.06em;
  padding: 5px 10px;
  border-radius: 2px;
  background: rgba(255,255,255,0.05);
  color: rgba(255,255,255,0.55);
  border: 1px solid rgba(255,255,255,0.08);
  transition: all 0.2s;
}

.jb-tag:hover {
  background: var(--amber-dim);
  color: var(--amber-glow);
  border-color: rgba(217,119,6,0.3);
}

/* ── TIMELINE / STORY SECTION ───────────────────────────────── */
.jb-story {
  background: var(--white);
  padding: 96px 24px;
  font-family: var(--font-body);
}

.jb-story-inner {
  max-width: 1080px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}

.jb-story-left h2 {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--ink);
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
  margin-top: 8px;
}

.jb-story-left h2 em {
  color: var(--amber);
  font-style: normal;
  display: block;
}

.jb-story-left p {
  font-size: 15px;
  line-height: 1.8;
  color: var(--muted);
  margin-bottom: 16px;
}

.jb-story-left p strong {
  color: var(--ink-3);
  font-weight: 500;
}

/* Timeline */
.jb-timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
}

.jb-timeline::before {
  content: '';
  position: absolute;
  left: 8px;
  top: 12px;
  bottom: 0;
  width: 1px;
  background: var(--surface-2);
}

.jb-tl-item {
  display: flex;
  gap: 24px;
  padding-bottom: 36px;
  position: relative;
}

.jb-tl-dot {
  flex-shrink: 0;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: var(--white);
  border: 2px solid var(--surface-2);
  margin-top: 2px;
  z-index: 1;
  transition: border-color 0.2s;
}

.jb-tl-item:hover .jb-tl-dot {
  border-color: var(--amber);
}

.jb-tl-dot.active {
  background: var(--amber);
  border-color: var(--amber);
}

.jb-tl-body {}

.jb-tl-year {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  color: var(--amber);
  letter-spacing: 0.1em;
  margin-bottom: 4px;
}

.jb-tl-role {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 3px;
}

.jb-tl-org {
  font-size: 13px;
  color: var(--muted-2);
  margin-bottom: 8px;
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.04em;
}

.jb-tl-desc {
  font-size: 13.5px;
  line-height: 1.65;
  color: var(--muted);
}

/* ── PUBLICATIONS SECTION ───────────────────────────────────── */
.jb-pubs {
  background: var(--surface);
  padding: 96px 24px;
  font-family: var(--font-body);
}

.jb-pubs-inner {
  max-width: 1080px;
  margin: 0 auto;
}

.jb-section-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 48px;
  flex-wrap: wrap;
  gap: 16px;
}

.jb-section-head h2 {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 700;
  color: var(--ink);
  letter-spacing: -0.02em;
}

.jb-view-all {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--amber);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: gap 0.2s;
}

.jb-view-all:hover {
  gap: 10px;
}

.jb-view-all::after { content: '→'; }

/* Pub cards */
.jb-pub-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.jb-pub-card {
  background: var(--white);
  border: 1px solid var(--surface-2);
  padding: 28px 32px;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 24px;
  transition: all 0.2s;
  text-decoration: none;
  position: relative;
  overflow: hidden;
}

.jb-pub-card::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: var(--amber);
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 0.25s ease;
}

.jb-pub-card:hover {
  border-color: rgba(217,119,6,0.25);
  box-shadow: 0 4px 24px rgba(0,0,0,0.06);
}

.jb-pub-card:hover::after {
  transform: scaleY(1);
}

.jb-pub-meta {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  color: var(--amber);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.jb-pub-title {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--ink);
  line-height: 1.35;
  margin-bottom: 6px;
}

.jb-pub-venue {
  font-size: 13px;
  color: var(--muted);
}

.jb-pub-arrow {
  font-size: 20px;
  color: var(--surface-2);
  transition: color 0.2s, transform 0.2s;
  font-family: var(--font-mono);
}

.jb-pub-card:hover .jb-pub-arrow {
  color: var(--amber);
  transform: translateX(4px);
}

/* ── PROJECTS SECTION ───────────────────────────────────────── */
.jb-projects {
  background: var(--ink);
  padding: 96px 24px;
  font-family: var(--font-body);
  position: relative;
  overflow: hidden;
}

.jb-projects::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
}

.jb-projects-inner {
  position: relative;
  z-index: 1;
  max-width: 1080px;
  margin: 0 auto;
}

.jb-projects-head h2 {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 700;
  color: var(--white);
  letter-spacing: -0.02em;
}

.jb-projects-head .jb-view-all {
  color: var(--amber);
}

.jb-proj-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 48px;
}

.jb-proj-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.07);
  padding: 32px 28px;
  border-radius: 2px;
  transition: all 0.25s;
  text-decoration: none;
  display: block;
  position: relative;
}

.jb-proj-card:hover {
  background: rgba(255,255,255,0.07);
  border-color: rgba(217,119,6,0.3);
  transform: translateY(-4px);
}

.jb-proj-number {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  color: rgba(255,255,255,0.18);
  margin-bottom: 20px;
}

.jb-proj-title {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--white);
  line-height: 1.3;
  margin-bottom: 12px;
  letter-spacing: -0.01em;
}

.jb-proj-excerpt {
  font-size: 13.5px;
  line-height: 1.65;
  color: rgba(255,255,255,0.45);
  margin-bottom: 24px;
}

.jb-proj-cta {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.08em;
  color: var(--amber);
  display: flex;
  align-items: center;
  gap: 6px;
  transition: gap 0.2s;
}

.jb-proj-card:hover .jb-proj-cta {
  gap: 10px;
}

.jb-proj-cta::after { content: '→'; }

/* ── CONTACT STRIP ──────────────────────────────────────────── */
.jb-contact {
  background: var(--amber);
  padding: 80px 24px;
  font-family: var(--font-body);
}

.jb-contact-inner {
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 32px;
}

.jb-contact h2 {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 800;
  color: var(--ink);
  letter-spacing: -0.02em;
  line-height: 1.15;
  max-width: 480px;
}

.jb-contact-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.jb-contact-link {
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.06em;
  color: var(--ink);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  background: rgba(0,0,0,0.08);
  border: 1px solid rgba(0,0,0,0.12);
  border-radius: 3px;
  transition: all 0.2s;
}

.jb-contact-link:hover {
  background: rgba(0,0,0,0.14);
  transform: translateX(4px);
}

/* ── RESPONSIVE ─────────────────────────────────────────────── */
@media (max-width: 768px) {
  .jb-hero-stats {
    gap: 24px;
  }

  .jb-stat {
    flex: 0 0 calc(50% - 12px);
    border-right: none;
    margin-right: 0;
    padding-right: 0;
  }

  .jb-story-inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .jb-pub-card {
    grid-template-columns: 1fr;
  }

  .jb-pub-arrow { display: none; }

  .jb-cta-row { flex-direction: column; }
  .jb-btn { justify-content: center; }
}

/* ── ENTRANCE ANIMATIONS ────────────────────────────────────── */
@keyframes jb-fade-up {
  from { opacity: 0; transform: translateY(22px); }
  to   { opacity: 1; transform: translateY(0); }
}

.jb-hero-inner > * {
  animation: jb-fade-up 0.65s ease both;
}

.jb-hero-eyebrow { animation-delay: 0.05s; }
.jb-hero h1      { animation-delay: 0.15s; }
.jb-hero-subtitle{ animation-delay: 0.22s; }
.jb-hero-bio     { animation-delay: 0.30s; }
.jb-cta-row      { animation-delay: 0.38s; }
.jb-hero-stats   { animation-delay: 0.46s; }
</style>

<!-- ═══════════════════════════════════════════════════════ HERO -->
<section class="jb-hero">
  <div class="jb-hero-inner">

    <div class="jb-hero-eyebrow">Geospatial · Data Science · Remote Sensing</div>

    <h1>Jeffrey<br><span class="accent">Blay.</span></h1>

    <div class="jb-hero-subtitle">// Geospatial Data Scientist &amp; Engineer</div>

    <p class="jb-hero-bio">
      I build <strong>scalable AI-driven pipelines</strong> that transform raw spatial data into actionable intelligence — from satellite imagery to predictive risk models. My work sits at the intersection of <strong>geospatial engineering, machine learning, spatial statistics and analytics, and evidence-based decision-making</strong>.
    </p>

    <div class="jb-cta-row">
      <a href="/publications/" class="jb-btn jb-btn-primary">View Publications</a>
      <a href="/portfolio/" class="jb-btn jb-btn-ghost">Explore Projects</a>
    </div>

    <div class="jb-hero-stats">
      <div class="jb-stat">
        <div class="jb-stat-num">{{ site.publications | size }}<span>+</span></div>
        <div class="jb-stat-label">Publications</div>
      </div>
      <div class="jb-stat">
        <div class="jb-stat-num">{{ site.portfolio | size }}</div>
        <div class="jb-stat-label">Projects</div>
      </div>
      <div class="jb-stat">
        <div class="jb-stat-num">{{ site.talks | size }}</div>
        <div class="jb-stat-label">Talks &amp; Conferences</div>
      </div>
      <div class="jb-stat">
        <div class="jb-stat-num">6<span>+</span></div>
        <div class="jb-stat-label">Years Experience</div>
      </div>
    </div>

  </div>

  <div class="jb-scroll-cue">scroll</div>
</section>

<!-- ════════════════════════════════════════════════════ SKILLS -->
<section class="jb-skills">
  <div class="jb-skills-inner">

    <div class="jb-skills-header">
      <div>
        <div class="jb-label" style="color:var(--amber-glow)">Technical Arsenal</div>
        <div class="jb-skills-title">Built for <em>spatial intelligence</em></div>
      </div>
    </div>

    <div class="jb-skill-grid">

      <div class="jb-skill-card">
        <div class="jb-skill-icon">Geospatial &amp; GIS</div>
        <h3>Spatial Analysis</h3>
        <div class="jb-tag-list">
          <span class="jb-tag">ArcGIS Suite</span>
          <span class="jb-tag">QGIS</span>
          <span class="jb-tag">PostGIS</span>
          <span class="jb-tag">GeoPandas</span>
          <span class="jb-tag">Shapely</span>
          <span class="jb-tag">GDAL/OGR</span>
          <span class="jb-tag">Leaflet</span>
          <span class="jb-tag">Mapbox</span>
        </div>
      </div>

      <div class="jb-skill-card">
        <div class="jb-skill-icon">Remote Sensing</div>
        <h3>Earth Observation</h3>
        <div class="jb-tag-list">
          <span class="jb-tag">Google Earth Engine</span>
          <span class="jb-tag">SNAP</span>
          <span class="jb-tag">ENVI</span>
          <span class="jb-tag">Multispectral</span>
          <span class="jb-tag">Hyperspectral</span>
          <span class="jb-tag">SAR Analysis</span>
          <span class="jb-tag">LiDAR</span>
        </div>
      </div>

      <div class="jb-skill-card">
        <div class="jb-skill-icon">ML &amp; AI</div>
        <h3>Machine Learning</h3>
        <div class="jb-tag-list">
          <span class="jb-tag">PyTorch</span>
          <span class="jb-tag">TensorFlow</span>
          <span class="jb-tag">scikit-learn</span>
          <span class="jb-tag">GAN</span>
          <span class="jb-tag">PINN</span>
          <span class="jb-tag">Computer-vision</span>
          <span class="jb-tag">LLM</span>
        </div>
      </div>

      <div class="jb-skill-card">
        <div class="jb-skill-icon">Data Engineering</div>
        <h3>Pipelines &amp; Cloud</h3>
        <div class="jb-tag-list">
          <span class="jb-tag">Python</span>
          <span class="jb-tag">SQL</span>
          <span class="jb-tag">Apache Spark</span>
          <span class="jb-tag">AWS</span>
          <span class="jb-tag">Google Cloud</span>
          <span class="jb-tag">Docker</span>
          <span class="jb-tag">DB2</span>
          <span class="jb-tag">RDBMS</span>
        </div>
      </div>

      <div class="jb-skill-card">
        <div class="jb-skill-icon">Analytics &amp; Viz</div>
        <h3>Data Storytelling</h3>
        <div class="jb-tag-list">
          <span class="jb-tag">Power BI</span>
          <span class="jb-tag">Tableau</span>
          <span class="jb-tag">Matplotlib</span>
          <span class="jb-tag">Plotly</span>
          <span class="jb-tag">Folium</span>
          <span class="jb-tag">R / ggplot2</span>
        </div>
      </div>

      <div class="jb-skill-card">
        <div class="jb-skill-icon">Research</div>
        <h3>Academic &amp; Applied</h3>
        <div class="jb-tag-list">
          <span class="jb-tag">Risk Modeling</span>
          <span class="jb-tag">Predictive Analytics</span>
          <span class="jb-tag">Spatial Statistics</span>
          <span class="jb-tag">Urban Analytics</span>
          <span class="jb-tag">ETL Pipelines</span>
          <span class="jb-tag">Field Data Collection</span>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ════════════════════════════════════════════════════= STORY -->
<section class="jb-story">
  <div class="jb-story-inner">

    <div class="jb-story-left">
      <div class="jb-label">About Me</div>
      <h2>Where geography meets <em>data engineering.</em></h2>
      <p>
        I'm a <strong>Geospatial Data Scientist</strong> with 6+ years turning satellite imagery, sensor networks, and geospatial datasets into production-grade ML systems and spatial analytics platforms.
      </p>
      <p>
        My work spans <strong>remote sensing, risk modeling, and spatial data infrastructure</strong> — designing pipelines that scale from research prototypes to enterprise solutions. I care deeply about rigorous methodology and communicating complex spatial phenomena clearly.
      </p>
      <p>
        I'm equally at home writing a Python ETL pipeline, training a deep learning classifier on multispectral high-resolution UAV imagery, or publishing peer-reviewed research — and I think the best data scientists live comfortably in all three worlds.
      </p>
      <a href="/cv/" class="jb-btn jb-btn-primary" style="display:inline-flex; margin-top: 24px; background: var(--amber); border-color: var(--amber); color: var(--ink);">Download CV</a>
    </div>

    <div class="jb-story-right">
      <div class="jb-label">Experience</div>

      <div class="jb-timeline">

        <div class="jb-tl-item">
          <div class="jb-tl-dot active"></div>
          <div class="jb-tl-body">
            <div class="jb-tl-year">2025 — Present</div>
            <div class="jb-tl-role">Graduate Research Assistant</div>
            <div class="jb-tl-org">Current Role</div>
            <div class="jb-tl-desc">Designing scalable ETL pipelines for spatial intelligence and predictive risk analytics. Leading Physics-Informed ML model development for 3D flood risk modeling with geospatial data.</div>
          </div>
        </div>

        <div class="jb-tl-item">
          <div class="jb-tl-dot"></div>
          <div class="jb-tl-body">
            <div class="jb-tl-year">Summer 2025</div>
            <div class="jb-tl-role">Data Science Research Assistant</div>
            <div class="jb-tl-org">Previous Position</div>
            <div class="jb-tl-desc">Built geospatial data pipelines integrating remote sensing data with enterprise databases. Developed spatial models for environmental and urban planning applications.</div>
          </div>
        </div>

        <div class="jb-tl-item">
          <div class="jb-tl-dot"></div>
          <div class="jb-tl-body">
            <div class="jb-tl-year">2018 — 2020</div>
            <div class="jb-tl-role">Remote Sensing Specialist</div>
            <div class="jb-tl-org">Research / Early Career</div>
            <div class="jb-tl-desc">Image classification, change detection analysis, and field data collection for land use mapping projects. Applied machine learning to multispectral satellite datasets.</div>
          </div>
        </div>

      </div>
    </div>

  </div>
</section>

<!-- ═══════════════════════════════════════════════ PUBLICATIONS -->
<section class="jb-pubs">
  <div class="jb-pubs-inner">

    <div class="jb-section-head">
      <div>
        <div class="jb-label">Research</div>
        <h2>Latest Publications</h2>
      </div>
      <a href="/publications/" class="jb-view-all">All publications</a>
    </div>

    <div class="jb-pub-list">
      {% assign pubs = site.publications | sort: 'date' | reverse %}
      {% for post in pubs limit:4 %}
      <a class="jb-pub-card" href="{{ post.url }}">
        <div>
          <div class="jb-pub-meta">{{ post.date | date: "%Y" }} &nbsp;·&nbsp; {{ post.venue }}</div>
          <div class="jb-pub-title">{{ post.title }}</div>
          <div class="jb-pub-venue">{{ post.excerpt | strip_html | truncate: 100 }}</div>
        </div>
        <div class="jb-pub-arrow">→</div>
      </a>
      {% endfor %}
    </div>

  </div>
</section>

<!-- ════════════════════════════════════════════════= PROJECTS -->
<section class="jb-projects">
  <div class="jb-projects-inner">

    <div class="jb-section-head jb-projects-head" style="margin-bottom:0">
      <div>
        <div class="jb-label" style="color:var(--amber-glow)">Portfolio</div>
        <h2>Featured Projects</h2>
      </div>
      <a href="/portfolio/" class="jb-view-all">All projects</a>
    </div>

    <div class="jb-proj-grid">
      {% assign projects = site.portfolio | sort: 'date' | reverse %}
      {% for post in projects limit:3 %}
      <a class="jb-proj-card" href="{{ post.url }}">
        <div class="jb-proj-number">{{ forloop.index | prepend: '00' | slice: -2, 2 }}</div>
        <div class="jb-proj-title">{{ post.title }}</div>
        <div class="jb-proj-excerpt">{{ post.excerpt | strip_html | truncate: 110 }}</div>
        <div class="jb-proj-cta">View project</div>
      </a>
      {% endfor %}
    </div>

  </div>
</section>

<!-- ════════════════════════════════════════════════= CONTACT -->
<section class="jb-contact">
  <div class="jb-contact-inner">

    <h2>Let's build something with spatial data.</h2>

    <div class="jb-contact-links">
      <a href="mailto:jeffreyblay7@gmail.com" class="jb-contact-link">✉ Gmail</a>
      <a href="https://www.linkedin.com/in/jeffrey-blay/" class="jb-contact-link" target="_blank">LinkedIn</a>
      <a href="https://github.com/Jeffreyblay" class="jb-contact-link" target="_blank">GitHub</a>
    </div>

  </div>
</section>