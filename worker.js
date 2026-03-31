addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (url.pathname === '/a.js') {
    event.respondWith(fetch('https://cdn.jsdelivr.net/gh/S3ns1l1ss/Project-Evil@3447178/a.js'));
  } else {
    event.respondWith(fetch(event.request));
  }
});
