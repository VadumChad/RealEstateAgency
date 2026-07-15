const CACHE_NAME = 'agence-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/catalog.html',
  '/news.html',
  '/districts.html',
  '/reviews.html',
  '/reviews-video.html',
  '/contacts.html',
  '/steps.html',
  '/faq.html',
  '/policy.html',
  '/hot.html',
  '/admin.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});