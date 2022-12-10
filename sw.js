/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-148cb7e5'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "404.html",
    "revision": "53a481106787050fb858a779b5af068e"
  }, {
    "url": "assets/_...all_-058ef576.css",
    "revision": "da4db93d105de07ef5e67483bbfb823b"
  }, {
    "url": "assets/_...all_-dbb08008.js",
    "revision": "91a96605dfe09110d155955b357f35a0"
  }, {
    "url": "assets/app-17ec8227.js",
    "revision": "7477757e3ff32c1c85b2f6fa568d8e68"
  }, {
    "url": "assets/Gallery-d86c8b5b.js",
    "revision": "85bcba1fb3c6cb47123c174786e78034"
  }, {
    "url": "assets/impressum-1beb6e84.js",
    "revision": "5e4def1de6a5da8e3c7f6e03dec8d81c"
  }, {
    "url": "assets/index-061835db.js",
    "revision": "434ced7c017817851e8298e03b582663"
  }, {
    "url": "assets/index-926068f3.css",
    "revision": "bc09752a9417b909dc47c189d286495c"
  }, {
    "url": "assets/index-9c944857.js",
    "revision": "fb8ffd2bb031bf6489e9b656f6d14db7"
  }, {
    "url": "assets/index-dc2d1865.js",
    "revision": "504fb98151d4395d67bb5bfadc2d13ca"
  }, {
    "url": "assets/index-fba0da16.css",
    "revision": "95738f375ac5a99bb4b5d1ec8f7533dc"
  }, {
    "url": "assets/legal-1efe7131.js",
    "revision": "c6e526e192e1e983619a5b93d9bf62e4"
  }, {
    "url": "assets/slide-in-c60ecd6b.js",
    "revision": "7dea4297e7b925903434fb149c8c8eff"
  }, {
    "url": "assets/virtual_pwa-register-c720c811.js",
    "revision": "c035578cc4a3c11fdc4bd71998f4a8a1"
  }, {
    "url": "assets/workbox-window.prod.es5-295a6886.js",
    "revision": "b8c9397a5a7bdb9aee024d2c57d41845"
  }, {
    "url": "drawings.html",
    "revision": "ef0a74176124b48326c44de3fb09ce03"
  }, {
    "url": "graphic-design.html",
    "revision": "44aed2cb4cbef94eeb4646340458735e"
  }, {
    "url": "impressum.html",
    "revision": "3e3bb9efb698990e575c899520685086"
  }, {
    "url": "index.html",
    "revision": "00cbcdd17d166e2c4f206bdd23eb9d04"
  }, {
    "url": "legal.html",
    "revision": "137adcb1d4db5b79ef162608417221e7"
  }, {
    "url": "motion-design.html",
    "revision": "a7e9a3c942373c940e4ce2897bcb6f36"
  }, {
    "url": "logo.svg",
    "revision": "0caa6b54fb9265b4cec00d9dbe94b140"
  }, {
    "url": "robots.txt",
    "revision": "e7575cf6d7bd2395b20ff14185a2cc37"
  }, {
    "url": "pwa-192x192.png",
    "revision": "50c6dd7ba79ea7e15e6f9840513fc016"
  }, {
    "url": "pwa-512x512.png",
    "revision": "edd03016ee9a7915929021c23e9f31a0"
  }, {
    "url": "manifest.webmanifest",
    "revision": "3dfd412ab2ecc320692aabe5f3d3589f"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
