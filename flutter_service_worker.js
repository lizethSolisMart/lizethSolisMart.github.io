'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "54fca4da3be6e7480ed306cad2cd2d39",
"index.html": "4a66da26853424ad1cfd8f21d8f6bfba",
"/": "4a66da26853424ad1cfd8f21d8f6bfba",
"main.dart.js": "50a882c90a9d714127f1d20a80968b97",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0b5a5db0912dd099a7c5afcfe16e6ce3",
"assets/AssetManifest.json": "6fcba540ea5bb062ef7c3a21b1ea3d4e",
"assets/NOTICES": "40038fc2be57028faa2e588be28a41c2",
"assets/FontManifest.json": "81d0e6184b1d31e2c4d4444f3abd8a3a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/profile_liz.JPG": "2b1e310004a0272f7c4b96a84b1c66b6",
"assets/assets/images/flutter_logo.png": "90a9883005f7bdd1b23bf030736aa878",
"assets/assets/images/profile_madain.JPG": "dc77d2d55c383bda5410a61246739c61",
"assets/assets/images/ai_robot_goal.png": "66efc1bf26b84fc38c228ce54c7afc9b",
"assets/assets/images/clear_design_thunder.png": "d402dda3e89be2c2ef831aa22df77b0d",
"assets/assets/images/internet_future.png": "b1f18beadbed404aad0c3407b8a0e036",
"assets/assets/images/screenshot_9.png": "53f4593bc2a2fc855f7d4a67d891635c",
"assets/assets/images/mentor.png": "6b2307be4bbd73f4dbe2055106bc72ec",
"assets/assets/images/ia_in_education_robot.jpeg": "79ed9ec3991c6dcae267290606a79b54",
"assets/assets/images/screenshot_8.png": "e005c07e47fc23b4f1c0c6acc8714963",
"assets/assets/images/ai_robot.png": "5920a68a06d0a7eb85f5ccc809e46e2f",
"assets/assets/images/laptop_book.jpeg": "ec0f180f8d820b69bf3a53286f79c7fc",
"assets/assets/images/inicio.png": "88455e8c4915f56aa0f586939d8c5e22",
"assets/assets/images/history_origin.png": "5730b65332063d02a0ff1d3c15b776cd",
"assets/assets/images/internet_80s.png": "39dafccbf90493b3fa2d11fb13cd91e1",
"assets/assets/images/clear_design_2.jpg": "4a49a61dde0eb16f3c3b24e9882dccda",
"assets/assets/images/modeling.png": "a5a0a1ef2b05304b72a95ab275a9641e",
"assets/assets/images/clear_design_3.jpg": "ec913fadc018719fc6e0a6a0e19f1e6b",
"assets/assets/images/clear_design_1.jpg": "34ef9b87c3dd607ce66a77a7b093d409",
"assets/assets/images/internet_transformation.png": "d990ebe261855873a4b7a665c274abb7",
"assets/assets/images/advantages_distance.png": "3e0638b1f6e7499e75b0e0f20e1a9546",
"assets/assets/images/profile_xainitzin.JPG": "143608c18c1a1111a9de9cbbed2266fc",
"assets/assets/images/using_ai.png": "a5a70a8a85122aeac349dc442cd92544",
"assets/assets/images/history_future.png": "dd1caff2d8fb59465a4832df342e9d0f",
"assets/assets/images/background_home.png": "cebb5d2617ca2fdad1256c3c398f0d24",
"assets/assets/images/ai_in_education_robot_teacher.jpeg": "a238412acb004de629635b0d22eca5b8",
"assets/assets/images/screenshot_10.png": "c9fcec4d18cca5354022cebd5730fd05",
"assets/assets/images/ai_robot_huge.png": "f83279f1f70bd544dcad4d797129012d",
"assets/assets/images/profile_karen.JPG": "1777dd1acaa8c6f678cc55ca2a43e074",
"assets/assets/images/ai_in_education_huge.jpeg": "284b0de2d7d4b36283154c47ccb328ab",
"assets/assets/images/ai_in_education_goal.jpeg": "c4284c6ecab3f65465dcb1a5f28fa05d",
"assets/assets/images/profile_viri.JPG": "b84047dbce78aa4343dee95fe92582f0",
"assets/assets/images/logo.png": "a7d303e2c352affccb75a863de621f0d",
"assets/assets/images/clear_design_responsive.jpeg": "cb8e93be2fdaa595316999f143343fb2",
"assets/assets/images/internet_aparnet.png": "2dfc31fe6dac3916f52f33553ac331e0",
"assets/assets/images/ai_robot_teach.png": "ee5f590206e89c31dc727439c83de796",
"assets/assets/images/profile.jpeg": "e6af8dc88bcfe4565d7b45ebbc749301",
"assets/assets/images/vs_code.png": "067a4f7bbbb4b7e7bc84773ea849a049",
"assets/assets/images/advantages_introduction.png": "a1fb609547249d1cd883d7995bdd4c35",
"assets/assets/images/screenshot_6.png": "6f7ce160e07ce3b9d56b46ef9271b02a",
"assets/assets/images/advantages_books.png": "17f019d49be30cf3d28e586dcf7d7d8a",
"assets/assets/images/screenshot_7.png": "e708cd8486feba0c20db477dd7116aa3",
"assets/assets/images/history_book.png": "bc325eb36cdc729a0f3f59a2376f98fc",
"assets/assets/images/profile_grecia.JPG": "4658ba2fa2d629e8e22f74cd11e1ca7c",
"assets/assets/images/advantages_time.png": "a72693069add37de66623de27747803d",
"assets/assets/images/screenshot_5.png": "9e25d2abd8ba72df0224e810a9cab204",
"assets/assets/images/screenshot_4.png": "b8ccc1c9c1f3fdb8de5a465ad98a9613",
"assets/assets/images/screenshot_1.png": "7068b408ec8cc00350ed5183cbed11b2",
"assets/assets/images/history_actuality.png": "b7b513f5eca79522169c81adca606ea1",
"assets/assets/images/screenshot_3.png": "8881f351152e20ff70631f2c77561b58",
"assets/assets/images/conclution_girl.png": "8dabf5ede81297e7e1640f6f1d2c2678",
"assets/assets/images/screenshot_2.png": "92dc2a3e1ccbda70d1f52ebdcfbc14d4",
"assets/assets/fonts/Montserrat-Bold.ttf": "c4bd22ebfc4d76f100ebefd2cf916227",
"assets/assets/fonts/Montserrat-Regular.ttf": "430be0dd245faf1cc788fac6680c2d71",
"assets/assets/fonts/Montserrat-Italic.ttf": "2e79685963d89831a0878b5fe44ce9b5",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
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
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
