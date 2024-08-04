importScripts('/u/bundle.js?v=2');
importScripts('/u/config.js?v=2');
importScripts(__uv$config.sw || '/u/sw.js?v=2');

const uv = new UVServiceWorker();

async function handleRequest(event) {
    if (uv.route(event)) {
        return await uv.fetch(event);
    }
    
    return await fetch(event.request)
}

self.addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event));
});