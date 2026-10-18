"use strict";

const CACHE_NAME = "vorrat-im-blick-offline-v1";
const APP_SHELL_URL = new URL("./", self.registration.scope).href;

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.add(APP_SHELL_URL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys
        .filter(key => key.startsWith("vorrat-im-blick-offline-") && key !== CACHE_NAME)
        .map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET" || request.mode !== "navigate") return;

  event.respondWith(
    fetch(request)
      .then(response => {
        if (response.ok) {
          return caches.open(CACHE_NAME)
            .then(cache => cache.put(APP_SHELL_URL, response.clone()))
            .then(() => response);
        }
        return response;
      })
      .catch(() => caches.open(CACHE_NAME)
        .then(cache => cache.match(request, { ignoreSearch: true }))
        .then(cached => cached || caches.match(APP_SHELL_URL))
        .then(cached => cached || Response.error())
      )
  );
});

