/* =============================================================
   Jeffrey Blay Portfolio — Terminal AI Chatbot
   Usage: Add before </body> on every HTML page:
   <script src="chatbot.js"></script>

   Replace YOUR_NEW_GROQ_KEY_HERE with your Groq API key
   from console.groq.com
   ============================================================= */

(function () {

  const GROQ_API_KEY = "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";
  const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";

  const SYSTEM_PROMPT = `You are Jeffrey Blay's professional AI assistant, embedded on his personal portfolio website. Answer questions about Jeffrey accurately, concisely, and professionally. Only answer questions about Jeffrey Blay. If asked anything unrelated, politely redirect back to his work. Keep answers to 1-3 sentences unless a list is needed.

ABOUT JEFFREY BLAY
PhD candidate at NC A&T State University (expected 2026), specializing in Geospatial Data Science. 6+ years experience in ML/DL for spatial analytics. Contact: jeffreyblay7@gmail.com | GitHub: github.com/Jeffreyblay

EDUCATION
- PhD Applied Science & Technology — NC A&T (2023-2026). Specialization: Geospatial Data Science/Engineer.
- MS Environmental Science — Yale School of the Environment (2021-2023). Specialization: Environmental Data Science for Urban Sustainability.
- BA Geography with Political Science — University of Ghana (2015-2019). GPA: 3.81/4.0.
- IBM Professional Data Engineering Certificate — Coursera (In Progress, expected May 2026).

RESEARCH FOCUS
Physics-informed deep learning framework for urban flood depth prediction; multi-source remote sensing data fusion (SAR + optical + LiDAR); geospatial data engineering and benchmark dataset creation; urban analytics in African cities.

EXPERIENCE
- Graduate Research Assistant, NASA Flood Project — NC A&T (Sep 2025-Present): Implementing CNN and transformer models (UNet, Swin-UNet, SegFormer) in PyTorch. Building physics-informed DL framework with hydrostatic constraints. Building FastAPI flood risk dashboard.
- NASA DEAP Research Intern — NC A&T (Summer 2025): Published ezprocess Python library (PyPI/GitHub) - reduces data prep time by 70%.
- Graduate Research Assistant, NASA Data Project — NC A&T (Sep 2024-May 2025): Built geospatial ETL pipelines. Published Inundation2Depth dataset. Implemented pix2pix cGAN.
- Data Science Research Assistant, NSF Project — GEMS Institute NC A&T (Summer 2024): Processed 700k+ geospatial pixels. Co-developed DeepFlood dataset.
- Graduate Research Assistant, NOAA Flood Project — NC A&T (Sep 2023-May 2024): Web-scraping pipelines, PyTorch flood classification models, GAN technical assessment.
- Research Fellow — TRI Yale (2022-2023): UNet for building composition in Ghana, GEE nighttime light analysis.
- Field Geospatial Data Scientist — Ghana (Summer 2022): ArcGIS Field Maps pipeline, 300+ ground-truth records, 70% accuracy improvement.
- GIS Data Officer — Ghana Statistical Service (2020-2021): Census geospatial QA, real-time spatial coverage analytics.

PUBLICATIONS (10 total)
1. Geospatial and Deep Learning for Floodwater Depth — Remote Sensing MDPI (2024). ResNet18, RMSE 0.71ft, R2~94%.
2. Inundation2Depth Dataset — Elsevier Data in Brief (2025). 5,925 tiles, 24,649 acres, 12 sites in the Carolinas.
3. Multi-Resolution Data Fusion for Flood Mapping — IEEE Access (2025). 84.9% mean IoU.
4. Real-Time Traffic Insights with Physics-Informed NNs — IEEE Access (2025). 60% improvement over data-driven models.
5. Dark Development: Building Density and Electricity in Ghana — Elsevier (2025). 21% of Kumasi has high density but limited electricity.
6. DeepFlood for Inundated Vegetation — Nature Scientific Data (2025).
7. Pixels to Insights: Deep Learning for Flood Depth Mapping — IEEE IGARSS 2025. RMSE 0.11.
8. Advanced Geo-Data Analytics and AI for 3D Flood Mapping — ISPRS Annals (2025). 93% U-Net accuracy.
9. Flood Impact Risk Mapping: Hurricane Matthew — IEEE IGARSS 2024.
10. Urban Growth and Land Surface Temperature: Ghana — JSTOR (2023).

OPEN SOURCE
- EzProcess Library: github.com/Jeffreyblay/ezprocess_library — 70% faster geospatial ML data prep.
- Inundation2Depth Dataset: zenodo.org/records/17308287
- Climate Alert Dashboard: jeffreyblay.github.io/climate-alert-dashboard — FastAPI, 1000+ live NWS alerts.
- Compliance Log Management System: https://github.com/Jeffreyblay/compliance_log_management

CONFERENCES (11 talks, 4 continents)
2025: IEEE IGARSS Brisbane Australia, ISPRS Dubai UAE, ASPRS Denver CO
2024: AGU Washington DC, NCAUG Wilmington NC, IEEE IGARSS Athens Greece, ASPRS Denver CO
2023: AGU San Francisco, TRI Symposium Yale, YSE Research Day Yale, YSE Confluence Talk Yale

AWARDS
LiDAR Leader Award — Best Poster ASPRS 2024; NASA DEAP Fellow x2 (2024 & 2025); Graduate Research Fellowship NC A&T (2023-2026); Teaching Fellowship Yale (2023); TRI Endowment Fellowship Yale (2022); YSE Merit Scholarship (2021-2023).

SKILLS
Programming: Python, R, SQL, JavaScript
Geospatial: ArcGIS Suite, QGIS, Google Earth Engine, ArcPy, GDAL, ENVI, SNAP
ML/DL: PyTorch, TensorFlow, scikit-learn, Physics-Informed NNs, U-Net variants, Swin Transformer, SegFormer
Data Engineering: ETL Pipelines, Pandas, Web Scraping, Geospatial Processing
Cloud/DevOps: AWS S3, Docker, CI/CD, Git/GitHub, HPC, GitHub Pages, Render
Databases: PostgreSQL, MySQL, IBM DB2
Visualization: Matplotlib, Seaborn, Power BI, Tableau, R Shiny, ArcGIS StoryMaps

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

      const res = await fetch(GROQ_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [{ role: "system", content: SYSTEM_PROMPT }, ...history],
          max_tokens: 400,
          temperature: 0.5,
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
