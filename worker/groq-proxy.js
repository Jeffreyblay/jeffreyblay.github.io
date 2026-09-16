/* =============================================================
   Groq proxy — Cloudflare Worker

   Keeps the Groq API key server-side. chatbot.js calls this
   Worker instead of api.groq.com directly, so the key never
   ships to the browser and can't be scraped/deactivated.

   Deploy: Cloudflare dashboard → Workers & Pages → Create →
   "Create Worker" → paste this file's contents → Deploy.
   Then: Bindings → Add binding → Secrets Store → create/select
   a secret named GROQ_API_KEY with your Groq key as the value.
   (Secrets Store bindings are objects — value is read via
   `await env.GROQ_API_KEY.get()`, not `env.GROQ_API_KEY` directly.)
   ============================================================= */

const ALLOWED_ORIGIN = "https://jeffreyblay.github.io";
const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
// Tried in order. If Groq retires one (404 model_not_found), the next is used,
// so the chat keeps working instead of returning an error to the browser.
const MODELS = [
  "llama-3.1-8b-instant",
  "openai/gpt-oss-20b",
  "openai/gpt-oss-120b",
];
const MAX_MESSAGES = 20; // caps history size the client can send

function corsHeaders(origin) {
  const allow = origin === ALLOWED_ORIGIN ? origin : ALLOWED_ORIGIN;
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const headers = corsHeaders(origin);

    if (request.method === "OPTIONS") {
      return new Response(null, { headers });
    }

    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { ...headers, "Content-Type": "application/json" },
      });
    }

    if (origin !== ALLOWED_ORIGIN) {
      return new Response(JSON.stringify({ error: "Forbidden origin" }), {
        status: 403,
        headers: { ...headers, "Content-Type": "application/json" },
      });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: "Invalid JSON" }), {
        status: 400,
        headers: { ...headers, "Content-Type": "application/json" },
      });
    }

    const messages = Array.isArray(body.messages) ? body.messages.slice(-MAX_MESSAGES) : null;
    if (!messages || !messages.length) {
      return new Response(JSON.stringify({ error: "messages[] required" }), {
        status: 400,
        headers: { ...headers, "Content-Type": "application/json" },
      });
    }

    const groqKey = await env.GROQ_API_KEY.get();

    let groqRes, data;
    for (const model of MODELS) {
      groqRes = await fetch(GROQ_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${groqKey}`,
        },
        body: JSON.stringify({
          model,
          messages,
          max_tokens: 400,
          temperature: 0.5,
        }),
      });
      data = await groqRes.text();
      if (groqRes.ok) break;
      // Only a retired/unavailable model is worth retrying; other errors are real.
      if (!(groqRes.status === 404 && data.includes("model_not_found"))) break;
    }

    return new Response(data, {
      status: groqRes.status,
      headers: { ...headers, "Content-Type": "application/json" },
    });
  },
};
