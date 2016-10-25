 // Check for browser support of service worker
    if ('serviceWorker' in navigator) {
     navigator.serviceWorker.register('service-worker.js')
     .then(registration => {
       // Successful registration
       console.log('site.js: Service worker registration successful:', registration);
     }).catch( err => {
       // Failed registration, service worker won’t be installed
       console.log('site.js: Service worker registration failed, error:', err);
     });
 }