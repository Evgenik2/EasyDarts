self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('easyDarts-cache').then(cache => {
            return cache.addAll([
              '/',
              '/android-chrome-192x192.png',
              '/android-chrome-512x512.png',
              '/apple-touch-icon.png',
              '/browserconfig.xml',
              '/endings.js',
              '/favicon-16x16.png',
              '/favicon-32x32.png',
              '/favicon.ico',
              '/icon.png',
              '/index.html',
              'indexedDB.js',
              'language.js',
              'media.css',
              'menu.css',
              'mstile-150x150.png',
              'safari-pinned-tab.svg',
              'settings.js',
              'site.manifest',
              'styles.css',
              'sw.js',
              'swipe.js',
              '/vue.js',
              'vueCommands.js'
            ]);
        })
    );
});