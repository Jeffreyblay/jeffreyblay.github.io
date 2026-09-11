/* =============================================================
   Jeffrey Blay Portfolio — Terminal AI Chatbot
   Usage: Add before </body> on every HTML page:
   <script src="chatbot.js"></script>

   Requests go through a Cloudflare Worker (see /worker) that
   holds the Groq API key server-side, so no key ships to the
   browser. Set WORKER_URL below to your deployed Worker's URL.
   ============================================================= */

(function () {

  const WORKER_URL = "https://groq-proxy.blaystudies.workers.dev/";

  const SYSTEM_PROMPT = `You are Jeffrey Blay's professional AI assistant, embedded on his personal portfolio website. Answer questions about Jeffrey accurately, concisely, and professionally. Only answer questions about Jeffrey Blay. If asked anything unrelated, politely redirect back to his work. Keep answers to 1-3 sentences unless a list is needed.

ABOUT JEFFREY BLAY
Applied Science PhD candidate at NC A&T State University (expected December 2026), specializing in Geospatial Data Science, with 5+ years of experience in spatial AI, remote sensing, ML/computer vision, and geospatial data engineering. Based in Greensboro, NC. Contact: jeffreyblay7@gmail.com | GitHub: github.com/Jeffreyblay

EDUCATION
- PhD Applied Science & Technology — NC A&T (expected December 2026). Specialization: Geospatial Data Science. Relevant courses: Machine Learning and Data Mining, Big Data Analytics, Advanced Geospatial Analysis, Neural Networks, Statistical Methods, Multivariate Statistics for Engineers.
- MS Environmental Science — Yale School of the Environment (May 2023). Specialization: Environmental Data Science for Urban Sustainability & Resilience.
- BA Geography with Political Science — University of Ghana (May 2019). GPA: 3.81/4.0.

CERTIFICATIONS
- IBM Professional Data Engineering — Coursera (In Progress, expected September 2026)
- Foundations of AI Engineering — CodePath (2026)

RESEARCH FOCUS
Physics-informed deep learning framework for urban flood depth prediction; multi-source remote sensing data fusion (SAR + optical + LiDAR); geospatial data engineering and benchmark dataset creation; urban analytics in African cities.

EXPERIENCE
- Geospatial Research Engineer, Remote Sensing & GIS Lab — NC A&T (Jun 2026-Present): Building a QGIS plugin that deploys CNN and transformer-based flood-depth models for on-demand inference by end users; assessing disaster impacts on crop-specific land cover and vulnerable communities using federal datasets and Google Earth Engine; leading a peer-reviewed journal publication on a physics-informed AI framework for urban flood modeling and infrastructure vulnerability assessment.
- Geospatial Data Science Research Assistant, NASA Environmental Data Project — GEMS Institute, NC A&T (Sep 2024-May 2026): Developed and optimized CNN and transformer models (Swin-UNet, SegFormer, UNet, Attention UNet, UNet++) in PyTorch for urban flood-depth prediction, achieving ~0.19 ft average MAE; built a physics-informed deep learning framework with domain-knowledge constraints improving physical consistency by ~84% over conventional DL; built geospatial ETL pipelines (rasterio, GDAL, pandas) processing ~347M pixel-level records; published ezprocess (PyPI/GitHub) cutting data-prep time by ~85%; led a 4-person team publishing a novel flood-depth benchmark dataset.
- Data Science Research Assistant, NSF Multimodal Data Fusion Project — Remote Sensing & GIS Lab, NC A&T (Jun-Aug 2024): Built ETL workflows (NumPy, pandas) preparing ~700K geospatial point records, cutting data-prep time by 60%; evaluated Random Forest and XGBoost flood prediction models with cross-validation; co-published a multi-source inundated-vegetation dataset with a 5-member team; developed automated geospatial QA/QC and validation tests.
- Graduate Research Assistant — Remote Sensing & GIS Lab, NC A&T (Sep 2023-May 2024): Python web-scraping workflows (Beautiful Soup, SQLite) curating ~1,000 web images; PyTorch framework for flood image classification (GoogLeNet, ResNet18); technical assessment of GAN-based approaches for flood mapping.
- GIS & Community Engagement Manager — Urban Resources Initiative (May-Aug 2023): Managed 7 community greenspace groups, translating neighborhood priorities into weekly project plans; delivered ArcGIS Pro/QGIS analyses and visualizations supporting stakeholder decision-making.
- Teaching Fellow, Real-world Environmental Data Science — Yale (Jan-May 2023): Mentored 12 students in Python-based environmental data science; supported reproducible workflows with Google Colab, GitHub, and GitHub Classroom.
- Research Assistant, NASA Environmental Justice Project — Hixon Center for Urban Ecology, Yale (Sep 2022-May 2023): Census block-level analysis of multispectral imagery to identify urban heat island (UHI) vulnerable communities; ArcPy/SQL workflows for land surface temperature; time-series analysis of heat and tree-cover disparities in R (sp, dplyr, ggplot2).
- Research Fellow, TRI Research Fellowship — Yale (May 2022-May 2023): Trained a U-Net regression model predicting building composition across metropolitan Ghana from Landsat imagery (R² ~75%); processed VIIRS nighttime light data in Google Earth Engine to map electricity infrastructure gaps; deployed an Integrated Field Mapping & Real-Time Monitoring System (ArcGIS Pro/Online, Field Maps, Dashboards) collecting 300+ ground-truth building observations and improving data collection accuracy by 90%.
- Geospatial Research Assistant, Urban Africa Project — Seto Lab, Yale (Sep 2021-May 2022): Google Earth Engine workflows preprocessing millions of satellite pixels; trained segmentation models across 800+ image tiles on an HPC Linux cluster with scalable batch-processing pipelines.
- Geospatial Data Analyst — National Census Secretariat, Ghana Statistical Service (Sep 2020-Jun 2021): Geospatial QA/QC on national census datasets (CRS, geometry, attribute integrity); restructured and corrected Supervisory Area boundary datasets; spatial analysis identifying difficult-to-enumerate areas and near-real-time coverage analytics with a 15-member team.
- Teaching/Research Assistant, Remote Sensing/GIS Lab — University of Ghana (Sep 2019-Aug 2020): Ran tutorial sessions for 150 undergraduates; graded GIS projects.
- Physical Planning Intern — Awutu Senya East Municipal Authority, Ghana (May-Aug 2018): Land-use analysis with GIS and aerial imagery.

PUBLICATIONS (10 total)
1. Inundation2Depth: A multi-source dataset for floodwater depth estimation — Data in Brief (2026). 5,925 tiles, 24,649 acres, 12 sites in the Carolinas.
2. Geospatial and Deep Learning Approaches for Modeling Floodwater Depth in Urbanized Areas — Remote Sensing MDPI (2025).
3. Pixels to Insights: Deep Learning for Floodwater Depth Mapping in Settlement Areas — IEEE IGARSS 2025.
4. Advanced Geo-Data Analytics and AI for 3D Flood Mapping to Protect Built Assets — ISPRS Geospatial Week 2025, Dubai.
5. Flood Impact Risk Mapping in Settlement Areas from a 3D Perspective: Hurricane Matthew — IEEE IGARSS 2024.
6. Dark Development: Satellite Analysis of Building Density and Electricity Provision in Ghana's Urban Areas — SSRN (2024).
7. Multi-Resolution Data Fusion for Resilient Flood Mapping — IEEE Access (2025). 84.9% mean IoU. (co-author)
8. DeepFlood for Inundated Vegetation High-Resolution Dataset — Nature Scientific Data (2025). (co-author)
9. Urban Growth and Land Surface Temperature Dynamics: Lessons from Ghana — Theoretical and Empirical Research in Urban Management (2023). (co-author)
10. Real-Time Traffic Insights With Physics-Informed Neural Networks — IEEE Access (2025). (co-author)

PROJECTS (open source / applied)
- GridVision MLOps (2026): jeffreyblay.github.io/energy_demand_mlops — end-to-end MLOps system forecasting US electricity demand for 9 balancing authorities. Daily GitHub Actions cron retrains a LightGBM quantile model (P10/P50/P90), gates candidates against production + a naive baseline before auto-promotion, serves via FastAPI + Postgres/PostGIS (Supabase) to a React/MapLibre/deck.gl 3D dashboard. Git repo itself acts as the model registry.
- PawPal+ (2026): github.com/Jeffreyblay/applied-ai-system-final-project — pet-care scheduling and RAG assistant (Python, Streamlit, Gemini API, Pytest) generating priority-based, conflict-aware daily plans with time-budget optimization, reminders, and personalized pet-care Q&A.
- Quickview Geodata Portal (2026): jeffreyblay.github.io/quickview-geodata-portal — open-source geospatial platform to upload (CSV, GeoJSON, JSON, XML, zipped Shapefile, or by URL), filter, style (graduated/categorized symbology), analyze (Buffer, KDE Hotspot, DBSCAN, Nearest Neighbor, Attribute Stats), and view vector data in 2D or 3D (deck.gl); exports to GeoJSON, CSV, JSON, GeoParquet, and GML. Stack: FastAPI, GeoPandas, scikit-learn, Leaflet.js, deck.gl, Docker; deployed on GitHub Pages + Render. Code: github.com/Jeffreyblay/quickview-geodata-portal
- Weather Alert Dashboard (2026): jeffreyblay.github.io/climate-alert-dashboard — real-time NWS alert monitoring with REST API filtering, analytics, and risk scoring across all 50 US states (FastAPI, Docker, CI/CD).
- EzProcess Library (2025): github.com/Jeffreyblay/ezprocess_library — open-source geospatial preprocessing library on PyPI/GitHub; cuts ML data-prep time by ~85%.
- Inundation2Depth Dataset: zenodo.org/records/17308287
- Compliance Log Management System: github.com/Jeffreyblay/compliance_log_management

CONFERENCES (11 talks, 4 continents)
2025: IEEE IGARSS Brisbane Australia, ISPRS Dubai UAE, ASPRS Denver CO
2024: AGU Washington DC, NCAUG Wilmington NC, IEEE IGARSS Athens Greece, ASPRS Denver CO
2023: AGU San Francisco, TRI Symposium Yale, YSE Research Day Yale, YSE Confluence Talk Yale

AWARDS
Outstanding Doctoral Graduate Research Assistant Award — College of Science and Technology, NC A&T (2026); LiDAR Leader Award — Best Poster, ASPRS & Geo Week 2024; Graduate Research Assistant Fellowship NC A&T (2023-2026); Teaching Fellowship Yale (2023); TRI Research Endowment Fellowship Yale (2022); YSE Need-Based & Merit Scholarship (2021-2023).

SKILLS
Programming: Python, R, SQL, JavaScript
Machine Learning & Deep Learning: PyTorch, TensorFlow, scikit-learn; supervised learning (Logistic Regression, Random Forest, XGBoost, LightGBM, UNet, Attention-UNet, Swin-UNet, SegFormer, Physics-Informed Neural Networks); model evaluation (Huber Loss, RMSE, MAE, SSIM, Precision, Recall, AUC-ROC, Physics-Informed Loss); unsupervised learning (K-means)
Geospatial & Remote Sensing: ArcGIS Pro, ArcGIS Online, ArcPy, QGIS, Google Earth Engine, GDAL, ENVI, SNAP, Spatial Analysis, Remote Sensing, Geospatial Data QA/QC, PostGIS, MapLibre GL
Data Engineering: ETL Pipelines, Data Preprocessing, Web Scraping, Apache Airflow, RDBMS
Statistics & Analytics: Spatial Statistics, Geostatistics, Time-Series Analysis, Statistical Modeling, Multivariate Analysis, Hypothesis Testing
Cloud, DevOps & Infrastructure: AWS (S3, EC2), Docker, CI/CD, Git, GitHub, GitHub Actions, HPC, Render
Web & APIs: FastAPI, RESTful APIs, Streamlit, Vercel, HTML/CSS
Databases: PostgreSQL, MySQL, IBM DB2, Supabase
Visualization: Matplotlib, Seaborn, Power BI, Tableau, R Shiny, ArcGIS Dashboards, ArcGIS StoryMaps, Google Data Studio

SERVICE
- Secretary & Social Media Manager — ASPRS Student Chapter NC A&T (2024-2026)
- Lead Instructor — CoST Young Scientist Day Geospatial Workshop (2025)
- Student Representative — BIOMES Seminar Committee Yale (2022-2023)
- Co-Founder & Executive Director — Good Lead Foundation Tarkwa Ghana (2019-Present)

RULES: Only use info above. Never invent details. For hiring questions mention jeffreyblay7@gmail.com. Keep answers concise.`;

  /* ── FONTS ── */
  if (!document.getElementById("jb-mono-font")) {
    const l = document.createElement("link");
    l.id = "jb-mono-font";
    l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap";
    document.head.appendChild(l);
  }

  /* ── STYLES ── */
  const style = document.createElement("style");
  style.textContent = `
    #jb-term-wrap,#jb-term-wrap *{box-sizing:border-box;margin:0;padding:0;}

    #jb-term-wrap{
      position:fixed;bottom:16px;right:16px;z-index:9999;
      width:min(420px, calc(100vw - 32px));font-family:'JetBrains Mono',monospace;
    }

    /* ── 1. TOOLTIP ── */
    #jb-tooltip{
      text-align:center;margin-bottom:8px;
      animation:jbTipBob 3s ease-in-out infinite;
    }
    #jb-tip-inner{
      display:inline-flex;align-items:center;gap:7px;
      background:rgba(217,119,6,0.12);
      border:1px solid rgba(217,119,6,0.32);
      border-radius:20px;padding:5px 16px;
      font-size:11px;color:#f59e0b;letter-spacing:0.06em;
    }
    #jb-tip-dot{
      width:7px;height:7px;border-radius:50%;
      background:#f59e0b;flex-shrink:0;
      animation:jbDotPulse 1.5s ease-in-out infinite;
    }
    @keyframes jbTipBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
    @keyframes jbDotPulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.35;transform:scale(0.7)}}

    /* ── 2. LABELED BORDER ── */
    #jb-outer{
      border:1px solid rgba(217,119,6,0.28);
      border-radius:6px;padding:3px;
      position:relative;
      background:rgba(217,119,6,0.03);
    }
    #jb-outer-lbl{
      position:absolute;top:-9px;left:14px;
      background:var(--page-bg, #080b0f);
      padding:0 7px;
      font-size:9px;color:rgba(217,119,6,0.8);
      letter-spacing:0.14em;text-transform:uppercase;
    }

    /* ── 3. TRIGGER BAR ── */
    #jb-trigger{
      display:flex;align-items:center;gap:8px;
      background:#0a0a0a;border:1px solid #2a2a2a;border-radius:4px;
      padding:10px 14px;cursor:pointer;width:100%;
      transition:border-color .2s,background .2s;
      position:relative;
    }
    #jb-trigger:hover{border-color:#f59e0b;background:#0d0d0d;}
    .jb-tdots{display:flex;gap:5px;}
    .jb-tdot{width:11px;height:11px;border-radius:50%;}
    #jb-tlabel{font-size:11px;color:#555;letter-spacing:.08em;flex:1;text-align:center;}
    #jb-tcursor{font-size:12px;color:#f59e0b;animation:jbBlink 1s step-end infinite;}
    @keyframes jbBlink{0%,100%{opacity:1}50%{opacity:0}}

    /* ── 4. AI BADGE ── */
    #jb-badge{
      position:absolute;top:-10px;right:-10px;
      width:26px;height:26px;border-radius:50%;
      background:#d97706;border:2px solid #080b0f;
      display:flex;align-items:center;justify-content:center;
      font-size:9px;font-weight:500;color:#080b0f;letter-spacing:0.04em;
    }
    #jb-badge::after{
      content:'';position:absolute;inset:-3px;border-radius:50%;
      border:2px solid rgba(217,119,6,0.5);
      animation:jbRing 1.8s ease-out infinite;
    }
    @keyframes jbRing{0%{transform:scale(1);opacity:0.9}100%{transform:scale(1.85);opacity:0}}

    /* ── TERMINAL PANEL ── */
    #jb-panel{
      display:none;flex-direction:column;
      background:#0a0a0a;border:1px solid #2a2a2a;border-radius:6px;
      overflow:hidden;margin-bottom:10px;
    }
    #jb-panel.open{display:flex;animation:jbUp .22s ease;}
    @keyframes jbUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}

    /* title bar */
    #jb-titlebar{
      background:#1a1a1a;padding:8px 12px;
      display:flex;align-items:center;gap:6px;
      border-bottom:1px solid #2a2a2a;flex-shrink:0;user-select:none;
    }
    .jb-wdot{width:12px;height:12px;border-radius:50%;cursor:pointer;transition:opacity .15s;}
    .jb-wdot:hover{opacity:.7;}
    #jb-winname{font-size:10px;color:#555;letter-spacing:.08em;flex:1;text-align:center;}

    /* output */
    #jb-output{
      padding:12px;display:flex;flex-direction:column;gap:2px;
      max-height:320px;overflow-y:auto;flex:1;
    }
    #jb-output::-webkit-scrollbar{width:3px;}
    #jb-output::-webkit-scrollbar-thumb{background:#2a2a2a;border-radius:2px;}

    .jbt{font-size:11px;line-height:1.72;word-break:break-word;}
    .jbt-prompt{color:#f59e0b;}
    .jbt-cmd{color:#fff;}
    .jbt-res{color:#4ade80;padding-left:16px;display:block;margin-top:1px;}
    .jbt-err{color:#f87171;padding-left:16px;display:block;}
    .jbt-comment{color:#3a3a3a;}
    .jbt-proc{color:#4ade80;opacity:.6;padding-left:16px;display:block;animation:jbFade .9s ease-in-out infinite alternate;}
    @keyframes jbFade{from{opacity:.2}to{opacity:.75}}

    /* chips */
    #jb-chips{
      padding:6px 12px 8px;display:flex;flex-wrap:wrap;gap:5px;
      border-top:1px solid #1a1a1a;
    }
    .jb-chip{
      font-size:10px;letter-spacing:.04em;padding:4px 10px;border-radius:2px;
      border:1px solid #2a2a2a;background:transparent;color:#555;
      cursor:pointer;transition:all .15s;font-family:'JetBrains Mono',monospace;
    }
    .jb-chip:hover{border-color:#f59e0b;color:#f59e0b;background:rgba(245,158,11,.07);}

    /* input */
    #jb-inputbar{
      padding:9px 12px;border-top:1px solid #1a1a1a;
      display:flex;align-items:center;gap:8px;
      background:#0d0d0d;flex-shrink:0;
    }
    #jb-iprompt{font-size:11px;color:#f59e0b;flex-shrink:0;white-space:nowrap;}
    #jb-input{
      flex:1;background:transparent;border:none;outline:none;
      font-family:'JetBrains Mono',monospace;font-size:11px;color:#fff;min-width:0;
    }
    #jb-input::placeholder{color:#333;}
    #jb-run{
      font-size:10px;color:#f59e0b;background:none;border:none;
      cursor:pointer;font-family:'JetBrains Mono',monospace;
      letter-spacing:.06em;flex-shrink:0;padding:0;transition:color .15s;
    }
    #jb-run:hover{color:#fff;}
  `;
  document.head.appendChild(style);

  /* ── HTML ── */
  const wrap = document.createElement("div");
  wrap.id = "jb-term-wrap";
  wrap.innerHTML = `
    <div id="jb-panel">
      <div id="jb-titlebar">
        <div class="jb-wdot" style="background:#ff5f57" title="Close" onclick="jbClose()"></div>
        <div class="jb-wdot" style="background:#febc2e"></div>
        <div class="jb-wdot" style="background:#28c840"></div>
        <div id="jb-winname">jeffrey-blay — ask.sh</div>
      </div>
      <div id="jb-output"></div>
      <div id="jb-chips">
        <span class="jb-chip" data-q="What is Jeffrey's PhD research about?">phd_research</span>
        <span class="jb-chip" data-q="What are Jeffrey's top publications?">publications</span>
        <span class="jb-chip" data-q="What tools and skills does Jeffrey have?">skills_stack</span>
        <span class="jb-chip" data-q="What awards and fellowships has Jeffrey received?">awards</span>
        <span class="jb-chip" data-q="Is Jeffrey open to new opportunities?">open_to_work</span>
      </div>
      <div id="jb-inputbar">
        <span id="jb-iprompt">visitor@jblay:~$</span>
        <input id="jb-input" type="text" placeholder='ask "your question here"' autocomplete="off">
        <button id="jb-run">run ↵</button>
      </div>
    </div>

    <div id="jb-tooltip">
      <div id="jb-tip-inner">
        <div id="jb-tip-dot"></div>
        Ask AI about Jeffrey
      </div>
    </div>

    <div id="jb-outer">
      <div id="jb-outer-lbl">JBlay AI Assistant</div>
      <div id="jb-trigger">
        <div class="jb-tdots">
          <div class="jb-tdot" style="background:#ff5f57"></div>
          <div class="jb-tdot" style="background:#febc2e"></div>
          <div class="jb-tdot" style="background:#28c840"></div>
        </div>
        <div id="jb-tlabel">jeffrey-blay — ask.sh</div>
        <div id="jb-tcursor">▋</div>
        <div id="jb-badge">AI</div>
      </div>
    </div>
  `;
  document.body.appendChild(wrap);

  /* ── REFS ── */
  const panel   = document.getElementById("jb-panel");
  const trigger = document.getElementById("jb-trigger");
  const outer   = document.getElementById("jb-outer");
  const tooltip = document.getElementById("jb-tooltip");
  const output  = document.getElementById("jb-output");
  const chips   = document.getElementById("jb-chips");
  const input   = document.getElementById("jb-input");
  const runBtn  = document.getElementById("jb-run");
  const history = [];
  let busy = false;
  let booted = false;

  /* ── LINE HELPERS ── */
  function line(html) {
    const d = document.createElement("div");
    d.className = "jbt";
    d.innerHTML = html;
    output.appendChild(d);
    output.scrollTop = output.scrollHeight;
    return d;
  }
  function removeLast() {
    const all = output.querySelectorAll(".jbt");
    if (all.length) all[all.length - 1].remove();
  }
  function idleCursor() {
    line(`<span class="jbt-prompt">visitor@jblay:~$ </span><span style="display:inline-block;width:7px;height:11px;background:#f59e0b;vertical-align:middle;animation:jbBlink 1s step-end infinite;"></span>`);
  }
  function boot() {
    output.innerHTML = "";
    line(`<span class="jbt-comment"># JBlay's AI Assistant v1.0</span>`);
    line(`<span class="jbt-comment"># Powered by Groq · llama-3.3-70b-versatile</span>`);
    line(`<span class="jbt-comment"># Ask me anything about Jeffrey below</span>`);
    line(`&nbsp;`);
    line(`<span class="jbt-res">→ Hi! I'm Jeffrey's AI assistant. Ask me about his research, publications, skills, or experience.</span>`);
    line(`&nbsp;`);
    idleCursor();
  }

  /* ── OPEN / CLOSE ── */
  function jbOpen() {
    panel.classList.add("open");
    tooltip.style.display = "none";
    outer.style.display = "none";
    if (!booted) { booted = true; boot(); }
    setTimeout(() => input.focus(), 150);
  }
  window.jbClose = function () {
    panel.classList.remove("open");
    tooltip.style.display = "block";
    outer.style.display = "block";
  };

  trigger.addEventListener("click", jbOpen);

  /* ── SEND ── */
  async function send(q) {
    if (!q.trim() || busy) return;
    busy = true;
    input.value = "";
    chips.style.display = "none";

    removeLast();
    const shortQ = q.length > 44 ? q.slice(0, 41) + "..." : q;
    line(`<span class="jbt-prompt">visitor@jblay:~$ </span><span class="jbt-cmd">ask "${shortQ}"</span>`);
    const proc = line(`<span class="jbt-proc">▋ querying knowledge base...</span>`);

    history.push({ role: "user", content: q });

    try {
      const ctrl = new AbortController();
      const t = setTimeout(() => ctrl.abort(), 30000);

      const res = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [{ role: "system", content: SYSTEM_PROMPT }, ...history],
        }),
        signal: ctrl.signal,
      });

      clearTimeout(t);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content || "No response. Please try again.";
      history.push({ role: "assistant", content: reply });

      proc.remove();
      reply.split("\n").forEach(l => {
        if (l.trim()) line(`<span class="jbt-res">→ ${l.trim()}</span>`);
      });

    } catch (err) {
      proc.remove();
      history.pop();
      if (err.name === "AbortError") {
        line(`<span class="jbt-err">✗ request timed out. please try again.</span>`);
      } else {
        line(`<span class="jbt-err">✗ ${err.message}</span>`);
      }
    } finally {
      busy = false;
      line(`&nbsp;`);
      idleCursor();
      output.scrollTop = output.scrollHeight;
    }
  }

  /* ── EVENTS ── */
  runBtn.addEventListener("click", () => send(input.value));
  input.addEventListener("keydown", e => { if (e.key === "Enter") send(input.value); });
  document.querySelectorAll(".jb-chip").forEach(c => {
    c.addEventListener("click", () => send(c.dataset.q));
  });

})();
