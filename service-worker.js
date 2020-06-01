/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0cf4b69366e6474387b0a182eb07f75a"
  },
  {
    "url": "api/index.html",
    "revision": "e02f46cc39fc1c39ddf61d399e8fed54"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "b217ea963ec2cf3748d55ec1d7766a78"
  },
  {
    "url": "assets/css/0.styles.4841d2bb.css",
    "revision": "e5c82105ebd84f3598ee53ea8bb477cf"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.86ba8fa5.js",
    "revision": "bbee74c9493d9decc2c07c5d5fe6ba48"
  },
  {
    "url": "assets/js/11.f64dc6d0.js",
    "revision": "d7c93e0245e676129301b3ca70d8ada9"
  },
  {
    "url": "assets/js/12.51bd3eac.js",
    "revision": "ec25d49f46ce0d1fda8a1ab8b252a96b"
  },
  {
    "url": "assets/js/13.3878be31.js",
    "revision": "3e697fd7ec84028fc9ddba1139e69291"
  },
  {
    "url": "assets/js/14.1a458a4b.js",
    "revision": "409a018d0ec77390bfcea8b1660670c7"
  },
  {
    "url": "assets/js/15.879d51d2.js",
    "revision": "157f9acb420fec6c794d684eb9a8abbc"
  },
  {
    "url": "assets/js/2.5ec4e8ac.js",
    "revision": "877a231fd3f2bed588d2ab7f305fe708"
  },
  {
    "url": "assets/js/3.0a211d10.js",
    "revision": "370720265e6bd344a8dd01ef3357d9f4"
  },
  {
    "url": "assets/js/4.adf018d3.js",
    "revision": "e43cbaf372325c62d186bd76a6b1d2bf"
  },
  {
    "url": "assets/js/5.9817a826.js",
    "revision": "c445a9d3876d113a8ffa75640d584d8e"
  },
  {
    "url": "assets/js/6.6c9a955a.js",
    "revision": "5d6a5658a0f797bebbc8a6ace3466d24"
  },
  {
    "url": "assets/js/7.914cb002.js",
    "revision": "d5ad2ee40ca89b71bb3af0886e82057e"
  },
  {
    "url": "assets/js/8.4ed3a662.js",
    "revision": "bd1add359b155e122dfd97e77fcf63b5"
  },
  {
    "url": "assets/js/9.032a9536.js",
    "revision": "ff75c26ce4fae35c1e58f25ff62e3cf0"
  },
  {
    "url": "assets/js/app.8c2d7f95.js",
    "revision": "6697fa755bc503a294782f96a18df8fd"
  },
  {
    "url": "devices.png",
    "revision": "73bf6c10c4e9e5e769bc4bac81e3b024"
  },
  {
    "url": "favicon-128.png",
    "revision": "9164c616e213164328aaf8071f5e8d5a"
  },
  {
    "url": "favicon-16.png",
    "revision": "5bc043dba2ae3b27e16bb63e89c0970e"
  },
  {
    "url": "favicon-32.png",
    "revision": "280e893552a95d932583dc3f1084e596"
  },
  {
    "url": "favicon-512.png",
    "revision": "5b7f6b1b0d488319a8475e8f6c878275"
  },
  {
    "url": "favicon-64.png",
    "revision": "6e2b7a92606ce45a9f57356fbb32a7c9"
  },
  {
    "url": "flatbuffers/install/index.html",
    "revision": "73e2a2b74a0b96e0b774408e84d617ac"
  },
  {
    "url": "flatbuffers/schema/index.html",
    "revision": "3d23325a91517a0ae214d752ba78d300"
  },
  {
    "url": "icon-128.png",
    "revision": "0e9ddec1ca8bceae0dda830cebf8aa9f"
  },
  {
    "url": "icon-192.png",
    "revision": "fd6d32cbbee16ff26a3975d585970597"
  },
  {
    "url": "icon-256.png",
    "revision": "c71800b2c4f701b9540b77d9ea0f336c"
  },
  {
    "url": "icon-512.png",
    "revision": "bd295da788c068ddba15fadc5a6c74b0"
  },
  {
    "url": "index.html",
    "revision": "edf596917ad5e15591619dd7f34f3bc3"
  },
  {
    "url": "logo-light.png",
    "revision": "7c6a2a5395c741fbe271ef2a5d8a25ac"
  },
  {
    "url": "pricing/index.html",
    "revision": "18569d48b9106a893d7e2fafece55a4c"
  },
  {
    "url": "sdk/java/index.html",
    "revision": "e98c1c8056806ddad8e2b4158e6b8765"
  },
  {
    "url": "sdk/js/index.html",
    "revision": "31ceb360095aae882d6f734a613d2ded"
  },
  {
    "url": "sdk/py/index.html",
    "revision": "a204bd7b810fba4da9159471407db42f"
  },
  {
    "url": "websocket/index.html",
    "revision": "42a5f719c1e682a6538b10b56f6139ce"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
