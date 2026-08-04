const CACHE_NAME = 'offline-v1';
// Add any specific static assets you want to guarantee work offline
const ASSETS = [
  './',
  './index.html',
];

// Install and cache assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Intercept network requests and serve from cache if offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
