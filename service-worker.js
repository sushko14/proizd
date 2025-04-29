// Мінімальний service worker для PWA
const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  '/',
  'index.html',
  'style.css',
  'manifest.json',
  'myscript.js',
  'service-worker.js',
  'icon.png',
  // Додай інші файли, які реально існують у проєкті
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName !== CACHE_NAME;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});