/* =============================================================
   Jeffrey Blay Portfolio — AI Chatbot Widget
   Usage: Add this ONE line before </body> on every HTML page:
   <script src="chatbot.js"></script>
   
   After deploying your Cloudflare Worker, replace WORKER_URL
   below with your actual Worker URL.
   ============================================================= */

(function () {

  const GROQ_API_KEY = "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";
  const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";

  const SYSTEM_PROMPT = `You are Jeffrey Blay's professional AI assistant, embedded on his personal portfolio website. Answer questions about Jeffrey accurately, concisely, and professionally. Only answer questions about Jeffrey Blay — if asked anything unrelated, politely redirect back to his work. Keep answers to 2–4 sentences unless a list is needed.

ABOUT JEFFREY BLAY
PhD candidate at NC A&T State University (expected 2026), specializing in Geospatial Data Science. 5+ years experience in ML/DL for spatial analytics. Contact: jeffreyblay7@gmail.com | GitHub: github.com/Jeffreyblay

EDUCATION
- PhD Applied Science & Technology — NC A&T (2023–2026, expected). Specialization: Geospatial Data Science.
- MS Environmental Science — Yale School of the Environment (2021–2023). Specialization: Environmental Data Science for Urban Sustainability.
- BA Geography with Political Science — University of Ghana (2015–2019). GPA: 3.81/4.0.
- IBM Professional Data Engineering Certificate — Coursera (In Progress, expected May 2026).

RESEARCH FOCUS
Physics-informed deep learning for urban flood depth prediction; multi-source remote sensing data fusion (SAR + optical + LiDAR); geospatial data engineering and benchmark dataset creation; urban analytics in African cities (heat islands, building density, electricity infrastructure).

EXPERIENCE
- Graduate Research Assistant, NASA Flood Project — NC A&T (Sep 2025–Present): Implementing CNN and transformer models (UNet, Swin-UNet, SegFormer) in PyTorch for flood-depth prediction. Building physics-informed DL framework with hydrostatic constraints. Building FastAPI flood risk dashboard.
- NASA DEAP Research Intern — NC A&T (Summer 2025): Trained U-Net models in TensorFlow. Published ezprocess Python library to PyPI/GitHub — reduces data prep time by 70%.
- Graduate Research Assistant, NASA Data Project — NC A&T (Sep 2024–May 2025): Built geospatial ETL pipelines. Led team to publish Inundation2Depth dataset. Implemented pix2pix cGAN for flood depth.
- Data Science Research Assistant, NSF Project — GEMS Institute NC A&T (Summer 2024): Processed 700k+ geospatial pixels. Co-developed DeepFlood dataset.
- Graduate Research Assistant, NOAA Flood Project — NC A&T (Sep 2023–May 2024): Web-scraping pipelines, PyTorch flood classification models, GAN technical assessment.
- Research Fellow — TRI Yale (2022–2023): UNet for building composition in Ghana, Google Earth Engine nighttime light analysis.
- Field Geospatial Data Scientist — Ghana (Summer 2022): ArcGIS Field Maps pipeline, 300+ ground-truth records, 70% accuracy improvement.
- GIS Data Officer — Ghana Statistical Service (2020–2021): Census geospatial QA, real-time spatial coverage analytics.

PUBLICATIONS (10 total)
1. "Geospatial and Deep Learning Approaches for Modeling Floodwater Depth" — Remote Sensing MDPI (2024). ResNet18, RMSE 0.71ft, R²~94%.
2. "Inundation2Depth: A Multi-Source Dataset for Floodwater Depth Estimation" — Elsevier Data in Brief (2025). 5,925 tiles, 24,649 acres, 12 sites in the Carolinas.
3. "Multi-Resolution Data Fusion for Resilient Flood Mapping" — IEEE Access (2025). 84.9% mean IoU.
4. "Real-Time Traffic Insights with Physics-Informed Neural Networks" — IEEE Access (2025). 60% improvement over data-driven models.
5. "Dark Development: Building Density and Electricity in Ghana" — Elsevier (2025). 21% of Kumasi has high density but limited electricity.
6. "DeepFlood for Inundated Vegetation" — Nature Scientific Data (2025).
7. "Pixels to Insights: Deep Learning for Floodwater Depth Mapping" — IEEE IGARSS 2025. RMSE 0.11.
8. "Advanced Geo-Data Analytics and AI for 3D Flood Mapping" — ISPRS Annals (2025). 93% U-Net accuracy.
9. "Flood Impact Risk Mapping from a 3D Perspective: Hurricane Matthew" — IEEE IGARSS 2024.
10. "Urban Growth and Land Surface Temperature Dynamics: Lessons from Ghana" — JSTOR (2023).

OPEN SOURCE PROJECTS
- EzProcess Library: Python library for geospatial ML/DL preprocessing. PyPI + GitHub. 70% faster data prep. github.com/Jeffreyblay/ezprocess_library
- Inundation2Depth Dataset: 5,925-tile benchmark. zenodo.org/records/17308287
- Climate & Extreme Weather Alert Dashboard: FastAPI + JS, 1,000+ live NWS alerts, 50 states. jeffreyblay.github.io/climate-alert-dashboard

CONFERENCES & TALKS (11 total, 4 continents)
2025: IEEE IGARSS Brisbane Australia, ISPRS Geospatial Week Dubai UAE, ASPRS Denver CO
2024: AGU Washington DC, NCAUG Wilmington NC, IEEE IGARSS Athens Greece, ASPRS Denver CO
2023: AGU San Francisco CA, TRI Symposium Yale, YSE Research Day Yale, YSE Confluence Talk Yale

AWARDS & FELLOWSHIPS
LiDAR Leader Award — Best Poster ASPRS 2024; NASA DEAP Research Fellow (2024 & 2025); Graduate Research Fellowship NC A&T (2023–2026); Teaching Fellowship Yale (2023); TRI Endowment Fellowship Yale (2022); YSE Merit Scholarship Yale (2021–2023).

SKILLS
Programming: Python, R, SQL, JavaScript
Geospatial: ArcGIS Suite, QGIS, Google Earth Engine, ArcPy, GDAL, ENVI, SNAP
ML/DL: PyTorch, TensorFlow, scikit-learn, Physics-Informed NNs, U-Net variants, Transformers (Swin, SegFormer)
Data Engineering: ETL Pipelines, Pandas, Web Scraping, Geospatial Processing
Cloud & DevOps: AWS S3, Docker, CI/CD, Git/GitHub, HPC, GitHub Pages, Render
Databases: PostgreSQL, MySQL, IBM DB2
Visualization: Matplotlib, Seaborn, Power BI, Tableau, R Shiny, ArcGIS StoryMaps

SERVICE & LEADERSHIP
Secretary & Social Media Manager — ASPRS Student Chapter NC A&T (2024–2026); Lead Instructor — CoST Young Scientist Day Geospatial Workshop (2025); Student Representative — BIOMES Seminar Committee Yale (2022–2023); Co-Founder & Executive Director — Good Lead Foundation Tarkwa Ghana (2019–Present).

RESPONSE RULES
- 2–4 sentences for simple questions; bullet points for lists
- Never invent information not listed above
- For hiring/collaboration questions, mention jeffreyblay7@gmail.com
- If asked something unrelated to Jeffrey, say: "I can only answer questions about Jeffrey's background and work. Is there something specific I can help with?"`;

  /* ── STYLES ── */
  const style = document.createElement("style");
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap');

    #jb-chat-wrap * { box-sizing: border-box; margin: 0; padding: 0; }

    #jb-chat-wrap {
      position: fixed;
      bottom: 28px;
      right: 28px;
      z-index: 9999;
      font-family: 'JetBrains Mono', monospace;
    }

    /* Bubble button */
    #jb-bubble {
      width: 56px; height: 56px;
      border-radius: 50%;
      background: #d97706;
      border: none;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: background 0.2s, transform 0.2s;
      position: relative;
    }
    #jb-bubble:hover { background: #f59e0b; transform: scale(1.06); }
    #jb-bubble svg { width: 24px; height: 24px; stroke: #080b0f; fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }

    /* Pulse dot */
    #jb-pulse {
      position: absolute; top: -2px; right: -2px;
      width: 14px; height: 14px;
      border-radius: 50%;
      background: #f59e0b;
      border: 2px solid #080b0f;
      animation: jbPulse 2s ease-in-out infinite;
    }
    @keyframes jbPulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.35); opacity: 0.6; }
    }

    /* Panel */
    #jb-panel {
      position: absolute;
      bottom: 68px; right: 0;
      width: 340px;
      background: #0d1117;
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 10px;
      overflow: hidden;
      display: none;
      flex-direction: column;
      box-shadow: 0 20px 60px rgba(0,0,0,0.5);
      animation: jbSlideUp 0.22s ease;
    }
    #jb-panel.open { display: flex; }
    @keyframes jbSlideUp {
      from { opacity: 0; transform: translateY(12px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* Header */
    #jb-header {
      background: #12181f;
      padding: 14px 16px;
      border-bottom: 1px solid rgba(255,255,255,0.06);
      display: flex; align-items: center; gap: 10px;
    }
    #jb-avatar {
      width: 34px; height: 34px; border-radius: 50%;
      background: #d97706;
      display: flex; align-items: center; justify-content: center;
      font-family: 'Cormorant Garamond', serif;
      font-size: 14px; font-weight: 700; color: #080b0f;
      flex-shrink: 0;
    }
    #jb-header-info { flex: 1; }
    #jb-header-name { font-size: 12px; font-weight: 500; color: #fff; letter-spacing: 0.04em; }
    #jb-header-status { font-size: 10px; color: rgba(255,255,255,0.35); letter-spacing: 0.04em; display: flex; align-items: center; gap: 5px; margin-top: 2px; }
    #jb-status-dot { width: 6px; height: 6px; border-radius: 50%; background: #22c55e; flex-shrink: 0; }
    #jb-close { background: none; border: none; cursor: pointer; color: rgba(255,255,255,0.3); font-size: 18px; line-height: 1; padding: 2px; transition: color 0.15s; }
    #jb-close:hover { color: rgba(255,255,255,0.7); }

    /* Messages */
    #jb-messages {
      padding: 14px 14px 8px;
      display: flex; flex-direction: column; gap: 12px;
      max-height: 260px; overflow-y: auto;
      scroll-behavior: smooth;
    }
    #jb-messages::-webkit-scrollbar { width: 3px; }
    #jb-messages::-webkit-scrollbar-track { background: transparent; }
    #jb-messages::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }

    .jb-msg { display: flex; gap: 8px; align-items: flex-start; }
    .jb-msg.user { flex-direction: row-reverse; }
    .jb-msg-av {
      width: 26px; height: 26px; border-radius: 50%; flex-shrink: 0;
      display: flex; align-items: center; justify-content: center;
      font-size: 9px; font-weight: 500; margin-top: 2px;
    }
    .jb-msg-av.bot { background: #1c2530; color: rgba(255,255,255,0.5); border: 1px solid rgba(255,255,255,0.07); }
    .jb-msg-av.usr { background: #d97706; color: #080b0f; }
    .jb-msg-bub {
      max-width: 220px; padding: 9px 12px; border-radius: 6px;
      font-size: 12px; line-height: 1.65;
    }
    .jb-msg-bub.bot { background: #1c2530; color: rgba(255,255,255,0.78); border: 1px solid rgba(255,255,255,0.06); }
    .jb-msg-bub.usr { background: #d97706; color: #080b0f; }

    /* Typing */
    .jb-typing-dots { display: flex; gap: 4px; align-items: center; padding: 6px 2px; }
    .jb-typing-dots span {
      width: 6px; height: 6px; border-radius: 50%;
      background: rgba(255,255,255,0.3);
      animation: jbDot 1.2s ease-in-out infinite;
    }
    .jb-typing-dots span:nth-child(2) { animation-delay: 0.2s; }
    .jb-typing-dots span:nth-child(3) { animation-delay: 0.4s; }
    @keyframes jbDot {
      0%,60%,100% { transform: translateY(0); }
      30% { transform: translateY(-5px); }
    }

    /* Suggestions */
    #jb-suggestions {
      padding: 4px 12px 10px;
      display: flex; flex-wrap: wrap; gap: 5px;
    }
    .jb-chip {
      font-size: 10px; letter-spacing: 0.04em;
      padding: 4px 10px; border-radius: 20px;
      border: 1px solid rgba(217,119,6,0.3);
      background: rgba(217,119,6,0.07); color: #d97706;
      cursor: pointer; transition: all 0.15s;
    }
    .jb-chip:hover { background: rgba(217,119,6,0.18); border-color: rgba(217,119,6,0.6); }

    /* Input row */
    #jb-input-row {
      padding: 10px 12px;
      border-top: 1px solid rgba(255,255,255,0.06);
      display: flex; gap: 8px; align-items: center;
      background: #0a0e14;
    }
    #jb-input {
      flex: 1;
      background: #1c2530;
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 4px; padding: 8px 10px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px; color: rgba(255,255,255,0.8);
      outline: none; transition: border-color 0.2s;
    }
    #jb-input::placeholder { color: rgba(255,255,255,0.2); }
    #jb-input:focus { border-color: rgba(217,119,6,0.45); }
    #jb-send {
      width: 32px; height: 32px; border-radius: 4px;
      background: #d97706; border: none; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; transition: background 0.2s;
    }
    #jb-send:hover { background: #f59e0b; }
    #jb-send svg { width: 14px; height: 14px; stroke: #080b0f; fill: none; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }

    #jb-error { font-size: 10px; color: #f87171; padding: 4px 14px 8px; letter-spacing: 0.04em; display: none; }
  `;
  document.head.appendChild(style);

  /* ── HTML ── */
  const wrap = document.createElement("div");
  wrap.id = "jb-chat-wrap";
  wrap.innerHTML = `
    <div id="jb-panel">
      <div id="jb-header">
        <div id="jb-avatar">JB</div>
        <div id="jb-header-info">
          <div id="jb-header-name">Ask about Jeffrey</div>
          <div id="jb-header-status"><span id="jb-status-dot"></span>AI assistant · Powered by Groq</div>
        </div>
        <button id="jb-close" title="Close">✕</button>
      </div>
      <div id="jb-messages"></div>
      <div id="jb-suggestions">
        <span class="jb-chip" data-q="What is Jeffrey's PhD research about?">PhD research?</span>
        <span class="jb-chip" data-q="What are Jeffrey's top publications?">Top publications?</span>
        <span class="jb-chip" data-q="What tools and skills does Jeffrey have?">Skills & tools?</span>
        <span class="jb-chip" data-q="What is the EzProcess library?">EzProcess?</span>
        <span class="jb-chip" data-q="Is Jeffrey open to new opportunities?">Open to work?</span>
      </div>
      <div id="jb-error">Something went wrong. Please try again.</div>
      <div id="jb-input-row">
        <input id="jb-input" type="text" placeholder="Ask anything about Jeffrey…" autocomplete="off">
        <button id="jb-send">
          <svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </button>
      </div>
    </div>
    <button id="jb-bubble" title="Ask about Jeffrey">
      <div id="jb-pulse"></div>
      <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    </button>
  `;
  document.body.appendChild(wrap);

  /* ── STATE ── */
  const history = [];
  let isOpen = false;
  let isLoading = false;

  const panel     = document.getElementById("jb-panel");
  const bubble    = document.getElementById("jb-bubble");
  const closeBtn  = document.getElementById("jb-close");
  const messages  = document.getElementById("jb-messages");
  const input     = document.getElementById("jb-input");
  const sendBtn   = document.getElementById("jb-send");
  const sugg      = document.getElementById("jb-suggestions");
  const errorBox  = document.getElementById("jb-error");

  /* ── HELPERS ── */
  function togglePanel() {
    isOpen = !isOpen;
    panel.classList.toggle("open", isOpen);
    if (isOpen && messages.children.length === 0) addBotMsg("Hi! I'm Jeffrey's AI assistant. Ask me anything about his research, publications, experience, or skills.");
    if (isOpen) setTimeout(() => input.focus(), 220);
  }

  function addBotMsg(text) {
    const div = document.createElement("div");
    div.className = "jb-msg";
    div.innerHTML = `<div class="jb-msg-av bot">JB</div><div class="jb-msg-bub bot">${text}</div>`;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function addUserMsg(text) {
    const div = document.createElement("div");
    div.className = "jb-msg user";
    div.innerHTML = `<div class="jb-msg-av usr">You</div><div class="jb-msg-bub usr">${text}</div>`;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function showTyping() {
    const div = document.createElement("div");
    div.className = "jb-msg";
    div.id = "jb-typing";
    div.innerHTML = `<div class="jb-msg-av bot">JB</div><div class="jb-msg-bub bot"><div class="jb-typing-dots"><span></span><span></span><span></span></div></div>`;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function removeTyping() {
    const t = document.getElementById("jb-typing");
    if (t) t.remove();
  }

  function hideSuggestions() {
    if (sugg) sugg.style.display = "none";
  }

  function showError(msg) {
    errorBox.textContent = msg || "Something went wrong. Please try again.";
    errorBox.style.display = "block";
    setTimeout(() => { errorBox.style.display = "none"; }, 4000);
  }

  /* ── WAKE UP hint removed — no server needed ── */

  /* ── SEND MESSAGE ── */
  async function send(text) {
    if (!text.trim() || isLoading) return;
    isLoading = true;
    hideSuggestions();
    errorBox.style.display = "none";

    addUserMsg(text);
    history.push({ role: "user", content: text });
    input.value = "";
    showTyping();

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 30000);

      const res = await fetch(GROQ_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...history,
          ],
          max_tokens: 400,
          temperature: 0.5,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content || "Sorry, I couldn't get a response. Please try again.";

      removeTyping();
      addBotMsg(reply);
      history.push({ role: "assistant", content: reply });

    } catch (err) {
      removeTyping();
      if (err.name === "AbortError") {
        addBotMsg("Request timed out. Please try again.");
      } else {
        showError("Something went wrong. Please try again.");
      }
      history.pop();
      console.error("Chatbot error:", err);
    } finally {
      isLoading = false;
    }
  }

  /* ── EVENTS ── */
  bubble.addEventListener("click", togglePanel);
  closeBtn.addEventListener("click", togglePanel);
  sendBtn.addEventListener("click", () => send(input.value));
  input.addEventListener("keydown", e => { if (e.key === "Enter") send(input.value); });

  document.querySelectorAll(".jb-chip").forEach(chip => {
    chip.addEventListener("click", () => send(chip.dataset.q));
  });

})();
