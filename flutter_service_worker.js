'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "0ffee0e39ba912a07b4e32031d6654a5",
  ".git/config": "1e541c41760c66ae218d1d9f3916ba6f",
  ".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
  ".git/FETCH_HEAD": "57c621b84547de39ffae342cddb483fb",
  ".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
  ".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
  ".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
  ".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
  ".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
  ".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
  ".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
  ".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
  ".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
  ".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
  ".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
  ".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
  ".git/index": "2f6a18e0b1689ee1fa663ca6f59a7662",
  ".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
  ".git/logs/HEAD": "b596d00a3dfe081cd5d5dbb68bdae44d",
  ".git/logs/refs/heads/main": "9c1bac34d8ba72def952c14f8c1a5869",
  ".git/logs/refs/remotes/origin/main": "3047dc744ab5c80934516ff5ce4cf53f",
  ".git/objects/11/d532d9a6809fa5b855b57894c46290e9abad5c": "01156a2665ce27a50885faf2af48e6ca",
  ".git/objects/18/78a2c46dd6c1acf52cd4bea6a0fcf6b0b46fdb": "77c8d8baac65d37f38c181d5257af458",
  ".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
  ".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
  ".git/objects/4a/a5c09c3e34db408c0f40b4465bec86173beaa5": "562ae22b0a207d1b452636c9b02ebc89",
  ".git/objects/69/7ffe385966ed9aa03c73a438900de518ed0c5f": "a72df1f538f38f7346df5d0437ccb47e",
  ".git/objects/6e/001fe586e0bde02dccf237456582f223a7965f": "c7431d03388b974e3bc5be6f3bc13b75",
  ".git/objects/74/c09d15c11ced4ba6ad2ea97c5ad0eb02b2f014": "f44cd7b18bedf0989eef5ab819406c57",
  ".git/objects/7b/8c04bf7749af5b35e57374bf844de6f78f3442": "aac1c655f64a7a408001339bc34578fe",
  ".git/objects/84/e48aa8c2835cfa1d259e4eab2a0a888e741582": "d28ec4875f634713f73e276c8f09f1ec",
  ".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
  ".git/objects/88/eabd4cc4dd44e832839a61545606b239422211": "0747f4051e16cc07a55dcc52293b8655",
  ".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
  ".git/objects/9b/e3d92538ddb6aa01f0013ba4ef75dd1a3efabc": "f76497b9c8bce05731379c3dad4c1e67",
  ".git/objects/b5/5ca8180170e000eb22bf4b4b597d8a26d3482c": "83cc2852f7a205a0ba846ff408038b5d",
  ".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
  ".git/objects/cc/bcb0b3938fa72e7229f96fe64e49e3064e22e3": "1d755c19f586cb018791f6f676d021c6",
  ".git/objects/e0/e0fb3c3ba6606a9c075cff24c48cd8d7409386": "c2edebdb21678145e30176db7cfe85bb",
  ".git/objects/e1/32695b799c189e414290eb8d5219343295576b": "c7ee258be44fc18d4208d3d287779344",
  ".git/refs/heads/main": "d736ba735e990a22578dc9c6098c6974",
  ".git/refs/remotes/origin/main": "d736ba735e990a22578dc9c6098c6974",
  "assets/AssetManifest.json": "35ef44051169ea1af3f9a02c08e4fdd5",
  "assets/assets/imgs/hero.png": "8ce5b826d11d9daa4d12716a8041b84b",
  "assets/assets/imgs/hero.svg": "a63f36fe938f240690116bff9f79b16b",
  "assets/assets/imgs/logo.png": "4e7a7e7c5455201441197e9d9f1f57cb",
  "assets/assets/imgs/logo.svg": "00abbdcd5bcbf8a8287dd46227bf3a88",
  "assets/assets/lotties/hero.json": "8d09108ce5aba4e200e60d605cf4f6fc",
  "assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
  "assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
  "assets/google_fonts/Ubuntu/Ubuntu-Bold.ttf": "e00e2a77dd88a8fe75573a5d993af76a",
  "assets/google_fonts/Ubuntu/Ubuntu-BoldItalic.ttf": "48c161df9991f9b0f6e4a858e95e415e",
  "assets/google_fonts/Ubuntu/Ubuntu-Italic.ttf": "4b96047e4af086277cdaeb9e60857534",
  "assets/google_fonts/Ubuntu/Ubuntu-Light.ttf": "277289c53af7cb469c1dc5dca3adca35",
  "assets/google_fonts/Ubuntu/Ubuntu-LightItalic.ttf": "d96027148c57a715e372789a90f69e8f",
  "assets/google_fonts/Ubuntu/Ubuntu-Medium.ttf": "8e22c2a6e3a3c679787e763a97fa11f7",
  "assets/google_fonts/Ubuntu/Ubuntu-MediumItalic.ttf": "0fbe070c207e3a869cc9e02f234f81e5",
  "assets/google_fonts/Ubuntu/Ubuntu-Regular.ttf": "2505bfbd9bde14a7829cc8c242a0d25c",
  "assets/google_fonts/Ubuntu/UFL.txt": "d0caf9a1862ec0d230ce8a7414213976",
  "assets/NOTICES": "8456361f51b03174ab2b491eec2a2b42",
  "assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
  "assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
  "assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
  "assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
  "icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
  "icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
  "index.html": "f57d426c5e2c9086dd97a15d2ecce4e2",
  "/": "f57d426c5e2c9086dd97a15d2ecce4e2",
  "main.dart.js": "8059d03108a09a10749e5735ce805245",
  "manifest.json": "5a2c0526f1fe73e6f211bc7a9d15c210",
  "README.md": "d9f777e353521174ef1df6aea52da183",
  "version.json": "426313f2f3133c2f20415344c4a22df3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  // "/",
  "main.dart.js",
  "index.html",
  "assets/NOTICES",
  "assets/AssetManifest.json",
  "assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, { 'cache': 'reload' })));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function (event) {
  return event.waitUntil(async function () {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) => {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
