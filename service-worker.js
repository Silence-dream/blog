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
    "url": "1logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "404.html",
    "revision": "38787b86cc3518e17122e6c8f5db4a0c"
  },
  {
    "url": "assets/css/0.styles.f3d91526.css",
    "revision": "dadafcaf0121cba53ef09ed50e2c6408"
  },
  {
    "url": "assets/img/modao.c5e328f5.jpg",
    "revision": "c5e328f56beacb400ba7621b99c5cda0"
  },
  {
    "url": "assets/js/1.34ca91e2.js",
    "revision": "8b1bbdaf60d19389e9f6a148efff1217"
  },
  {
    "url": "assets/js/10.84958e65.js",
    "revision": "94fe691a22f428263f0f0e5fe40155db"
  },
  {
    "url": "assets/js/11.805fd50b.js",
    "revision": "e5814d31b94fb716f1d90aeae1139e08"
  },
  {
    "url": "assets/js/12.da21d678.js",
    "revision": "0f81dc68befcbd90cfb6356cf2f4d52b"
  },
  {
    "url": "assets/js/13.b622c5ad.js",
    "revision": "3862163019af06cdeb51662c406c4da5"
  },
  {
    "url": "assets/js/14.afd57a25.js",
    "revision": "588a3ac830a10fbe180695573714f2d7"
  },
  {
    "url": "assets/js/15.dc6bb0fe.js",
    "revision": "246a72efaf422881a5d6ccf4906bcd83"
  },
  {
    "url": "assets/js/16.c9a4fb02.js",
    "revision": "23685fba12dbfff47772f2cdc20cf5c7"
  },
  {
    "url": "assets/js/17.aa27da35.js",
    "revision": "92d814fac63d61b6285afd263261dd49"
  },
  {
    "url": "assets/js/18.407c6cc9.js",
    "revision": "6aa39b82b0e23381b048331ccc594bff"
  },
  {
    "url": "assets/js/19.ad47a6d9.js",
    "revision": "9e5aa4b1616536768e8b44da2ca9d8db"
  },
  {
    "url": "assets/js/20.aafa7a5e.js",
    "revision": "b6f29c61840e2ee0a2a11cadf4b130c5"
  },
  {
    "url": "assets/js/21.a41db98f.js",
    "revision": "00f58606f8a561af95804cf20a924f6d"
  },
  {
    "url": "assets/js/22.71d9138a.js",
    "revision": "e9645a795f9afe27e77e3d865c4f230e"
  },
  {
    "url": "assets/js/23.33c71b7c.js",
    "revision": "a0a2297dbf2d577e1a8745a4cebe1f67"
  },
  {
    "url": "assets/js/24.6ab098f6.js",
    "revision": "b0d768b294b6102b39520fcd09f1f415"
  },
  {
    "url": "assets/js/25.cdd1f25e.js",
    "revision": "36952579e7f120b65b7764b50aad596b"
  },
  {
    "url": "assets/js/26.37a825a2.js",
    "revision": "c9602ae421b04204a9c5c6f1c9c668f9"
  },
  {
    "url": "assets/js/27.7066f0bc.js",
    "revision": "5cc9af4d08a5de4468704fe78290fc5a"
  },
  {
    "url": "assets/js/28.1dcd2771.js",
    "revision": "89e4b0a7e685d57763e5016c6a573930"
  },
  {
    "url": "assets/js/29.f38faf96.js",
    "revision": "c45f7cf6e3bdc0c28e307b6300948114"
  },
  {
    "url": "assets/js/3.3b6ab1b1.js",
    "revision": "44aadf622bc138032f100bde04f2989a"
  },
  {
    "url": "assets/js/30.43e5f373.js",
    "revision": "e2e1307a2a98e596833e10195aa29dac"
  },
  {
    "url": "assets/js/31.b8f7ae61.js",
    "revision": "d8ef8cab5eb3352bee01b0b14b694130"
  },
  {
    "url": "assets/js/32.a6d1b337.js",
    "revision": "c5dd965b84cfccd456ca2ed577b70e12"
  },
  {
    "url": "assets/js/33.00e863a2.js",
    "revision": "dafa51e2cc02c73bd32b21d832c70e7d"
  },
  {
    "url": "assets/js/34.ad0deaa1.js",
    "revision": "e8c4627a2a614cd9907397e3581c12bb"
  },
  {
    "url": "assets/js/35.9ed3730d.js",
    "revision": "a2bdc198ab35a65003dc99b1bc01d6d2"
  },
  {
    "url": "assets/js/36.e607fd56.js",
    "revision": "32cffb8a11d4cdb1784c6060d96f2bf7"
  },
  {
    "url": "assets/js/4.0d587407.js",
    "revision": "5c3b5f1cc5ec3c59e8160d3726474823"
  },
  {
    "url": "assets/js/5.c57e75c2.js",
    "revision": "f6d8bc0865d1528c564b9b704e1cd4ac"
  },
  {
    "url": "assets/js/6.96a6fda2.js",
    "revision": "a61bcdc96885579dacaf0c3df91aee76"
  },
  {
    "url": "assets/js/7.106e942b.js",
    "revision": "5877aa815d269fee25166cbd4d0c7d21"
  },
  {
    "url": "assets/js/8.06ff7940.js",
    "revision": "14756d85a8646233cc835cf0246b1592"
  },
  {
    "url": "assets/js/9.8c7c7a2c.js",
    "revision": "524e61954d2ce2529d8105a2527d4257"
  },
  {
    "url": "assets/js/app.e73cc5e7.js",
    "revision": "7d592315e99d709ee16a921e1657ff01"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/JavaScript/Effective JavaScript 编写高质量JavaScript代码的68个有效方法.html",
    "revision": "f5d2a766a09fec87ccd74e171493c857"
  },
  {
    "url": "blogs/shell/01-windows-powerline.html",
    "revision": "6646ca5ceecd1b1c02bb47fb5908029d"
  },
  {
    "url": "categories/index.html",
    "revision": "ed6bb0aa4ffb739f498699e5a036d769"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "7929e6c224b964afc2433681fcfafcf2"
  },
  {
    "url": "categories/开发工具/index.html",
    "revision": "ccf51ed09b7160eb5c4cd855fa5fd795"
  },
  {
    "url": "docs/Front-end/index.html",
    "revision": "5a95b06b2f1da0448bc09937432795d4"
  },
  {
    "url": "docs/Front-end/React/01-React笔记.html",
    "revision": "0c88e661366cc3bb1f1b6fbb490e571b"
  },
  {
    "url": "docs/Front-end/React/02-Redux笔记.html",
    "revision": "97704b8c23cace79905390ef225e7548"
  },
  {
    "url": "docs/Front-end/React/03-React-hooks.html",
    "revision": "4600d94d1956e4799c8fb037151aa67a"
  },
  {
    "url": "docs/Front-end/React/index.html",
    "revision": "3382fa507d9141a3f2e693d009e06d55"
  },
  {
    "url": "docs/Front-end/TypeScript/01.笔记.html",
    "revision": "1686637529b09c3c0acf3edc8a37f916"
  },
  {
    "url": "docs/Front-end/TypeScript/02.临时笔记.html",
    "revision": "e6aebe8fe26e50e1276a807508442124"
  },
  {
    "url": "docs/Front-end/TypeScript/index.html",
    "revision": "058f0acfcd0c6bc65a07150e3fd69d93"
  },
  {
    "url": "docs/Front-end/Vue/aa.html",
    "revision": "fcd04f8bc79719297b3098d32b1b6893"
  },
  {
    "url": "docs/Front-end/Vue/bb.html",
    "revision": "a5890664eef00548ce7dcd4ed33fcbd0"
  },
  {
    "url": "docs/Front-end/Vue/index.html",
    "revision": "5b1bfedb3ec28d284dbaf060a9277ee1"
  },
  {
    "url": "docs/theme-reco/api.html",
    "revision": "8bd058ad6ae80da84dfa882384e5d6c3"
  },
  {
    "url": "docs/theme-reco/index.html",
    "revision": "ba73eb580804fa2bdb57483b7163ccc5"
  },
  {
    "url": "docs/theme-reco/plugin.html",
    "revision": "0749fd5169e948853c9715041fbbeeb1"
  },
  {
    "url": "docs/theme-reco/theme.html",
    "revision": "28e80d9d8f459f6fbcba40ceec55b5df"
  },
  {
    "url": "docs/深入学习JavaScript/01-JavaScript深入之从原型到原型链.html",
    "revision": "7638b1d7f82abfce79830953a4994a63"
  },
  {
    "url": "docs/深入学习JavaScript/index.html",
    "revision": "7db6610cd7f4d5f2df460faf8b429224"
  },
  {
    "url": "docs/笔记杂项/2021.04.01月考题/01.简答题.html",
    "revision": "fde7f5ddeea9a547a90df1bacd1c349e"
  },
  {
    "url": "docs/笔记杂项/2021.04.01月考题/index.html",
    "revision": "c286ac9232bb2551665772d7bb2e7a7a"
  },
  {
    "url": "docs/笔记杂项/2021.05.31月考题/月考简答题.html",
    "revision": "f393fca2b2d8a30b855f3523a1ca2349"
  },
  {
    "url": "docs/笔记杂项/index.html",
    "revision": "2437366ff80fcbfbaa34fa76c8cd779d"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "a3c4334e108591e8e14ab65d6ba73506"
  },
  {
    "url": "logo.gif",
    "revision": "b334e83801e81cc0f5bf6677e91e6338"
  },
  {
    "url": "tag/index.html",
    "revision": "3e5da00ce50bd7b765a968def19c4995"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "6393123db489e0e69e5ecce498366465"
  },
  {
    "url": "tag/React/index.html",
    "revision": "c1a7a278c5882ffad2bd46d404369b86"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "bb380050a3f53d850915d5c877fadf48"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "df9fa71d3a361c4d75590383a5914206"
  },
  {
    "url": "tag/开发工具/index.html",
    "revision": "411d479c9da95cd19589a2811319d197"
  },
  {
    "url": "timeline/index.html",
    "revision": "8afbe577bdddfa957312033e41eb7f33"
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
