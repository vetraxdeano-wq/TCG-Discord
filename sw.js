// Service Worker minimal — requis pour PWA installable sur Android/Chrome
const CACHE = 'dcg-v1';
 
self.addEventListener('install', e => {
  self.skipWaiting();
});
 
self.addEventListener('activate', e => {
  e.waitUntil(clients.claim());
});
 
// Réseau d'abord, cache en fallback pour les assets statiques
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
 
