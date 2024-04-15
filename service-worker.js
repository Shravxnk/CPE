self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('my-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/CSS/style.css',
                '/CSS/animate.css',
                '/main.js',
                '/dist/build.js',
                '/images/logo.png',
                '/manifest.json',
                '/package.json',
                '/package-lock.json',
                '/service-worker.js',
                // Add any other assets you want to cache
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
