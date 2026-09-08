const CACHE="bcn-gps-guide-v1.3.7";
const CORE=["./route-data.js?v=1.3.7","./map-style.json?v=1.3.7","./index.html?v=1.3.7","./styles.css?v=1.3.7","./app.js?v=1.3.7","./manifest.webmanifest?v=1.3.7","./icon.svg?v=1.3.7"];
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  const u=new URL(e.request.url);
  if(u.origin!==self.location.origin){e.respondWith(fetch(e.request));return}
  if(e.request.mode==="navigate"){
    e.respondWith(fetch(e.request,{cache:"no-store"}).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put("./index.html?v=1.3.7",copy)).catch(()=>{});return r}).catch(()=>caches.match("./index.html?v=1.3.7")));
    return;
  }
  e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request)));
});

