var CACHE = "cafofo-v12";
var ARQ = ["./", "index.html", "style.css", "app.js", "data.js", "teste.html", "manifest.json", "icon-192.png", "icon-512.png", "icon-maskable-512.png", "logo.png", "logo-aco.jpg", "icons/nanobanana-color.svg", "icons/gemini-color.svg", "icons/notebooklm.png", "icons/flow.png", "icons/flowmusic.png", "icons/googledocs.svg", "icons/googlesheets.svg", "icons/gmail.svg", "icons/googletranslate.svg", "icons/googledrive.svg", "icons/claude-color.svg", "icons/anthropic-D97757.svg", "icons/anthropic-F59E0B.svg", "icons/openai-10A37F.svg", "icons/openai-34D399.svg", "icons/openai-6EE7B7.svg", "icons/openai-0EA5E9.svg", "icons/openai-A855F7.svg", "icons/sora-color.svg", "icons/copilot-color.svg", "icons/microsoft-38BDF8.svg", "icons/githubcopilot-FFFFFF.svg", "icons/meta-color.svg", "icons/instagram-E1306C.svg", "icons/whatsapp-25D366.svg", "icons/meta-0668E1.svg"];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(ARQ); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

// Rede primeiro (pega atualizacoes); se estiver sem internet, usa o que foi salvo.
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(fetch(e.request).then(function (r) {
    var copia = r.clone();
    caches.open(CACHE).then(function (c) { c.put(e.request, copia); });
    return r;
  }).catch(function () { return caches.match(e.request); }));
});
