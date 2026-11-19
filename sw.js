// MultiCalc: service worker (funcionamento offline)
// Ao alterar o site, aumente o número da versão para forçar a atualização.
const VERSAO = 'multicalc-v4';
const ARQUIVOS = [
    './',
    './index.html',
    './manifest.webmanifest',
    './icon.svg',
    './icon-192.png',
    './icon-512.png',
    './icon-maskable-512.png',
    './apple-touch-icon.png',
    './favicon-32.png'
];

self.addEventListener('install', e => {
    e.waitUntil(caches.open(VERSAO).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys()
            .then(chaves => Promise.all(chaves.filter(k => k !== VERSAO).map(k => caches.delete(k))))
            .then(() => self.clients.claim())
    );
});

// Cache primeiro, atualizando em segundo plano. Páginas abrem mesmo sem internet.
self.addEventListener('fetch', e => {
    const req = e.request;
    if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;

    e.respondWith(
        caches.match(req, { ignoreSearch: true }).then(emCache => {
            const rede = fetch(req).then(res => {
                if (res && res.ok) {
                    const copia = res.clone();
                    caches.open(VERSAO).then(c => c.put(req, copia));
                }
                return res;
            }).catch(() => emCache || (req.mode === 'navigate' ? caches.match('./index.html') : undefined));
            return emCache || rede;
        })
    );
});
