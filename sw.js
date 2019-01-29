self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('easyDarts-cache').then(cache => {
            return cache.addAll([

            ]);
        })
    );
});