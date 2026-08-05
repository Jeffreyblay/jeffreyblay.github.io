# Groq proxy — Cloudflare Worker

Keeps your Groq API key off the public site. `chatbot.js` calls this Worker;
the Worker calls Groq using a key stored as a Cloudflare secret, never sent
to the browser.

## Deploy (dashboard, no CLI needed)

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Create Worker**.
2. Pick the **"Hello World"** template (not "Workflows Starter" — that one ships
   with a Workflow binding that will block deploys unless you export a matching
   class). Name it (e.g. `jblay-groq-proxy`) → **Deploy**.
3. **Edit code** → select all, delete, paste in the contents of `groq-proxy.js` → **Deploy**.
4. **Bindings** tab → **Add binding** → **Secrets Store** →
   - create/select a secret named `GROQ_API_KEY`
   - Value: your Groq key (get a fresh one from console.groq.com — rotate the old exposed one)
   → save, then **Deploy** again if it doesn't auto-redeploy.
   (Newer Cloudflare accounts use Secrets Store bindings, which are objects —
   the code reads the value via `await env.GROQ_API_KEY.get()`. If your account
   instead shows a plain "Secret" text field under Settings, that's the older
   style and `env.GROQ_API_KEY` would be the string directly — adjust the one
   `.get()` call in `groq-proxy.js` accordingly if so.)
5. Copy the Worker's URL, shown at the top of the dashboard —
   looks like `https://jblay-groq-proxy.<your-subdomain>.workers.dev`.
6. Paste that URL into `chatbot.js` as `WORKER_URL` (see comment at the top of that file).

## Deploy (CLI, optional)

```
npm install -g wrangler
wrangler login
cd worker
wrangler deploy
```
Then create the Secrets Store binding and attach it via the dashboard (Bindings
tab) as in step 4 above, or with `wrangler secrets-store` commands if your
wrangler version supports it — Secrets Store CLI support varies by version.

## Notes

- The Worker only accepts requests from `https://jeffreyblay.github.io` (see
  `ALLOWED_ORIGIN` in `groq-proxy.js`) — update that if the site's domain changes.
- Free tier is 100,000 requests/day, far more than a portfolio chatbot needs.
- If you ever change models or system-prompt handling, `groq-proxy.js` just
  forwards whatever `messages[]` array the client sends — no other changes needed.
