const cache_name = 'v3',
urlsToCache = [
    './',
   './estilo.css',
    './calculadora.js',
    './index.html',
    './manifest.webmanifest',
    './img/icons-192.png',
    './img/icons-512.png'
    
]

//para funcionar sin conexion
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(cache_name)
          .then(cache => {
            return cache.addAll(urlsToCache)
              .then(() => self.skipWaiting())
          })
          .catch(err => console.log('Falló registro de cache', err))
      )
    })
//para funcionar sin conexion
self.addEventListener('activate', e => {
    const cacheWhitelist = [cache_name]

    e.waitUntil(
      caches.keys()
        .then(cacheNames => {
          return Promise.all(
            cacheNames.map(cacheName => {
              //Eliminamos lo que ya no se necesita en cache
              if (cacheWhitelist.indexOf(cacheName) === -1) {
                return caches.delete(cacheName)
              }
            })
          )
        })
        // Le indica al SW activar el cache actual
        .then(() => self.clients.claim())
    )
  })

//recuperae archivos
self.addEventListener('fetch', e => {
 //Responder ya sea con el objeto en caché o continuar y buscar la url real
 e.respondWith(
    caches.match(e.request)
      .then(res => {
        if (res) {
          //recuperar del cache
          return res
        }
        //recuperar de la petición a la url
        return fetch(e.request)
      })
  )
})