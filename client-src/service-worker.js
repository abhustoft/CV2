var CACHE_NAME = 'my-pwa-cache-v7';
var urlsToCache = [
  '/',
  '/dist/main.js',
  '/app/css/screen.css'
  // Production: ( https://jakearchibald.com/2016/caching-best-practices/)
  // '/dist/main.<hash>.js',
  // '/app/css/screen.<hash>.css'
];
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        // Open a cache and cache our files
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
    console.log('Service worker fetch: ',event.request.url);
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener('activate', event => {
  console.log('Ready to handle fetches!');
  // delete any caches that aren't in expectedCaches
  // which will get rid of static-v1
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        if (!urlsToCache.includes(key)) {
          return caches.delete(key);
        }
      })
    )).then(() => {
      console.log('Latest version now ready to handle fetches!');
    })
  );
});