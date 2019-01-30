self.addEventListener('install', e => {
    self.skipWaiting(); 
    e.waitUntil(
        caches.open('easyDarts-cache').then(cache => {
            var root = "/";
            return cache.addAll([
              root + '',
              root + 'index.html',
              root + 'android-chrome-192x192.png',
              root + 'android-chrome-512x512.png',
              root + 'apple-touch-icon.png',
              root + 'browserconfig.xml',
              root + 'endings.js',
              root + 'favicon-16x16.png',
              root + 'favicon-32x32.png',
              root + 'favicon.ico',
              root + 'icon.png',
              root + 'indexedDB.js',
              root + 'language.js',
              root + 'media.css',
              root + 'menu.css',
              root + 'mstile-150x150.png',
              root + 'safari-pinned-tab.svg',
              root + 'settings.js',
              root + 'site.webmanifest',
              root + 'styles.css',
              root + 'sw.js',
              root + 'swipe.js',
              root + 'vue.js',
              root + 'vueComponents.js'
            ]);
        })
    );
});