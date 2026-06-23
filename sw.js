// Service Worker — offline support for the Budgerigar Genetics Calculator PWA
const CACHE_VERSION = 'v2-2026-06-23';
const STATIC_CACHE = `bgc-static-${CACHE_VERSION}`;
const RUNTIME_CACHE = `bgc-runtime-${CACHE_VERSION}`;

// Core resources to pre-cache on install (the calculator + critical assets)
const PRECACHE_URLS = [
  '/',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/icon-maskable-192.png',
  '/icon-maskable-512.png',
  '/favicon.svg',
  '/og-image.png',
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(STATIC_CACHE).then(cache =>
      cache.addAll(PRECACHE_URLS).catch(err => {
        // Some assets may be missing in dev — don't fail install
        console.warn('PWA precache partial:', err);
      })
    )
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== STATIC_CACHE && k !== RUNTIME_CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // Only handle same-origin GET requests
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  // Skip URLs with query params (pairing URLs) — always go to network for fresh prediction
  // but fall back to cache if offline
  if (url.search) {
    e.respondWith(
      fetch(e.request).catch(() => caches.match('/').then(r => r || caches.match(e.request)))
    );
    return;
  }
  // Cache-first for static assets, stale-while-revalidate for HTML
  e.respondWith(
    caches.match(e.request).then(cached => {
      const networkFetch = fetch(e.request).then(response => {
        if (response.ok) {
          const respClone = response.clone();
          caches.open(RUNTIME_CACHE).then(cache => cache.put(e.request, respClone));
        }
        return response;
      }).catch(() => cached || caches.match('/'));
      return cached || networkFetch;
    })
  );
});
