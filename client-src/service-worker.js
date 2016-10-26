/* global self, caches, fetch, URL, Response */
'use strict';

var config = {
  version: 'v5',
  // Initial caching at startup:
  staticCacheItems: [
    '/app/css/screen.css',
    '/app/images/consultant.jpg',
    '/app/images/photo-camera-with-flash.svg',
    '/app/images/github-octocat.svg',
    '/app/images/logo.png',
    '/dist/main.js',
    '/site.js',
    '/api/offline/',
    '/'
  ],
  cachePathPattern: /^\/(?:(20[0-9]{2}|dist|app|api)\/(.+)?)?$/,
  offlineImage: '<svg role="img" aria-labelledby="offline-title"'
    + ' viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">'
    + '<title id="offline-title">Offline</title>'
    + '<g fill="none" fill-rule="evenodd"><path fill="#D8D8D8" d="M0 0h400v300H0z"/>'
    + '<text fill="#9B9B9B" font-family="Times New Roman,Times,serif" font-size="72" font-weight="bold">'
    + '<tspan x="93" y="172">offline</tspan></text></g></svg>',
  offlinePage: '/offline/',
};

function cacheName (key, opts) {
  return `${opts.version}-${key}`;
}

function addToCache (cacheKey, request, response) {
  if (response.ok) {
    var copy = response.clone();
    caches.open(cacheKey).then( cache => {
      cache.put(request, copy);
    });
  }
  return response;
}

function fetchFromCache (event) {
  return caches.match(event.request).then(response => {
    if (!response) {
      throw Error(`${event.request.url} not found in cache`);
    }
    return response;
  });
}

function onActivate (event, opts) {
  return caches.keys()
    .then(cacheKeys => {
      var oldCacheKeys = cacheKeys.filter(key =>
        key.indexOf(opts.version) !== 0
      );
      var deletePromises = oldCacheKeys.map(oldKey => caches.delete(oldKey));
      return Promise.all(deletePromises);
    });
}

function offlineResponse (resourceType, opts) {
  if (resourceType === 'image') {
    return new Response(opts.offlineImage,
      { headers: { 'Content-Type': 'image/svg+xml' } }
    );
  } else if (resourceType === 'content') {
    return caches.match(opts.offlinePage);
  }
  return undefined;
}

self.addEventListener('install', event => {
  function onInstall (event, opts) {
  	var cacheKey = cacheName('static', opts);
    return caches.open(cacheKey)
      .then(cache =>
        cache.addAll(opts.staticCacheItems).
        then( () => console.log('Stashed the static stuff.'))
      );
  }

  event.waitUntil(
    onInstall(event, config)
    .then( () => self.skipWaiting() )
  );

});

self.addEventListener('activate', event => {
	event.waitUntil(
    	onActivate(event, config)
     		.then( () => self.clients.claim() )
  	);
});

self.addEventListener('fetch', event => {

  function shouldHandleFetch (event, opts) {
    var request            = event.request;
    var url                = new URL(request.url);
    var criteria           = {
      matchesPathPattern: !!(opts.cachePathPattern.exec(url.pathname)),
      isGETRequest      : request.method === 'GET',
      isFromMyOrigin    : url.origin === self.location.origin
    };

    // console.log('Check if url: ', url);
    // console.log('matches: ',opts.cachePathPattern);
    // console.log('If true, cache: ', criteria.matchesPathPattern);

    var failingCriteria    = Object.keys(criteria)
      .filter(criteriaKey => !criteria[criteriaKey]);
    return !failingCriteria.length;
  }

  function onFetch (event, opts) {
    var request = event.request;
    var acceptHeader = request.headers.get('Accept');
    var resourceType = 'static';  // Default:If not image or content, put in static cache
    var cacheKey;

    if (acceptHeader.indexOf('text/html') !== -1) {
      resourceType = 'content';
    } else if (acceptHeader.indexOf('image') !== -1) {
      resourceType = 'image';
    }

    cacheKey = cacheName(resourceType, opts);

    if (resourceType === 'content') {
    	console.log('Adding request to content:', request);
      event.respondWith(
        fetch(request)
          .then(response => addToCache(cacheKey, request, response))
          .catch(() => fetchFromCache(event))
          .catch(() => offlineResponse(resourceType, opts))
      );
    // } else  if (resourceType === 'image') {

    // 	console.log('Adding request to image:', request);
    // 	// Do not cache, I put all images in static!
    } else {

    	console.log('Fetching/Adding request to static:', request);
      event.respondWith(
        fetchFromCache(event)
          .catch(() => fetch(request))
            .then(response => addToCache(cacheName('static', opts), request, response))
          .catch(() => offlineResponse(resourceType, opts))
      );
    }
  }

  if (shouldHandleFetch(event, config)) {
    onFetch(event, config);
  }
});