import CacheHelper from './utils/cache-helper';

const assetsToCache = [
  './',
  './images/icons/icon-72x72.png',
  './images/icons/icon-96x96.png',
  './images/icons/icon-128x128.png',
  './images/icons/icon-144x144.png',
  './images/icons/icon-152x152.png',
  './images/icons/icon-192x192.png',
  './images/icons/icon-384x384.png',
  './images/icons/icon-512x512.png',
  './index.html',
  './images/icon/favicon.png',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUtil(CacheHelper.cachingAppShell([...assetsToCache]));
  console.log('Caching Assets....');
});

self.addEventListener('activate', (event) => {
  event.waitUtil(CacheHelper.deleteOldCache());
  console.log('Activate service worker...');
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
