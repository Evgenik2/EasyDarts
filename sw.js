self.addEventListener('install', e => {
    self.skipWaiting(); 
    e.waitUntil(
        caches.open('easyDarts-cache').then(cache => {
            //var root = "/EasyDarts/";
            return cache.addAll([
              '/',
              'index.html',
              'android-chrome-192x192.png',
              'android-chrome-512x512.png',
              'apple-touch-icon.png',
              'browserconfig.xml',
              'endings.js',
              'favicon-16x16.png',
              'favicon-32x32.png',
              'favicon.ico',
              'icon.png',
              'indexedDB.js',
              'language.js',
              'media.css',
              'menu.css',
              'mstile-150x150.png',
              'safari-pinned-tab.svg',
              'settings.js',
              'site.webmanifest',
              'styles.css',
              'sw.js',
              'swipe.js',
              'vue.js',
              'vueComponents.js'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
  console.log(event.request.url);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});