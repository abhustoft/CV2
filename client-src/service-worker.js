/* global self, caches, fetch, URL, Response */
'use strict';

var config = {
  version: 'v10',
  // Initial caching at startup:
  staticCacheItems: [
    '/app/css/screen.css',
    '/app/images/consultant.jpg',
    '/app/images/photo-camera-with-flash.svg',
    '/app/images/github-octocat.svg',
    '/app/images/logo.png',
    '/dist/main.js',
    '/site.js',
    '/'
  ],
  cachePathPattern: /^\/(?:(dist|app|api)\/(.+)?)?$/,
  offlineImage: '<svg role="img" aria-labelledby="offline-title"'
    + ' viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">'
    + '<title id="offline-title">Offline</title>'
    + '<g fill="none" fill-rule="evenodd"><path fill="#D8D8D8" d="M0 0h400v300H0z"/>'
    + '<text fill="#9B9B9B" font-family="Times New Roman,Times,serif" font-size="72" font-weight="bold">'
    + '<tspan x="93" y="172">offline</tspan></text></g></svg>',
  offlinePage: '<html><head></head><body><h1 style="max-width:20em;margin: 10% auto">You\'re totally offline, man!</h1></body></html>',
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
  	console.log('returning offline image');
    return new Response(opts.offlineImage,
      { headers: { 'Content-Type': 'image/svg+xml' } }
    );
  } else if (resourceType === 'content') {
  	console.log('returning offline content');
  	 return new Response(opts.offlinePage,
      { headers: { 'Content-Type': 'text/html' } }
    );
  }
  return undefined;
}

self.addEventListener('install', event => {
  function onInstall (event, opts) {
  	var cacheKey = cacheName('static', opts);
    return caches.open(cacheKey)
      .then(cache =>
        cache.addAll(opts.staticCacheItems)
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
    }else if ((request.url.indexOf('WorkExperiences') > -1) || (request.url.indexOf('repos') > -1)) {
      resourceType = 'Changing';
    }

    cacheKey = cacheName(resourceType, opts);

console.log(request.url);

	if (resourceType === 'Changing') {
		event.respondWith(
        fetch(request)
          .then(response => addToCache(cacheKey, request, response))
          .catch(() => fetchFromCache(event))
          .catch(() => offlineResponse(resourceType, opts))
      );

    } else if (resourceType === 'content') {
      event.respondWith(
        fetch(request)
          .then(response => addToCache(cacheKey, request, response))
          .catch(() => fetchFromCache(event))
          .catch(() => offlineResponse(resourceType, opts))
      );
    } else {
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