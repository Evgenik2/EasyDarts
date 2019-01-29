self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('easyDarts-cache').then(cache => {
            var root = "/EasyDarts/";
            return cache.addAll([
              root + '',

            ]);
        })
    );
});