var CACHE = "cafofo-v9";
var ARQ = ["./", "index.html", "style.css", "app.js", "data.js", "teste.html", "manifest.json", "icon-192.png", "icon-512.png", "icon-maskable-512.png", "logo.png", "logo-aco.jpg", "icons/nanobanana-color.svg", "icons/gemini-color.svg", "icons/notebooklm.png", "icons/flow.png", "icons/flowmusic.png", "icons/googledocs.svg", "icons/googlesheets.svg", "icons/gmail.svg", "icons/googletranslate.svg", "icons/googledrive.svg"];

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
