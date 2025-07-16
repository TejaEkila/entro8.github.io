'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "52924c1b6caee4516dd6e78c0f81c83f",
"version.json": "0c66a02078d10b5ba882fd1ba221c4a7",
"index.html": "c3401df9f1689fd4a5b6bf040dab368d",
"/": "c3401df9f1689fd4a5b6bf040dab368d",
"main.dart.js": "15d082118261588ea8da602634fa0a80",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1f99bb65c8c7f8659378e3a6314e9ca6",
".git/config": "6ff9e177e8e18d9b179a9c7812582c4b",
".git/objects/0d/883ab1fe516d9dd13c80a2659ffd8580639bdd": "267f4a146c8f3deaceb86c0c366b6140",
".git/objects/0c/6ba6d187a00d138955791477075ca735f80762": "717485f41371d1fc6287f2ecf7ca5bd8",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/50/cead6be76523f4b5b188cb013b835c434a97a8": "e3adeb59978ad068264b955fd353c291",
".git/objects/68/2727447a3820cc4ff801e692f13f16d9b1c10e": "f08c70f3729f4f3e2fecde4ced92b29a",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/3b/547e724bd829ff6cf42135661a7b7aa05a01f9": "88ffb3df61579e006ca86e8e7fa22166",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/32/9d93fa13429ad9e6f59e2ae35dd94b1cfd3e6d": "0f8d35d5a1b5305f4e90592e37cbd484",
".git/objects/32/d4ffa01641db88786ef460866ae236f6466bee": "ca95f926e8ccb91fd90c86a814a4d2c7",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/35/c9e33ba09951a9c3ef6749299f40ec5fbaf312": "92393bd74953e92a0a47d0bc81a8e9db",
".git/objects/69/a19d53b6c3fbe7cf1951193982522486b9b56e": "447249960184edaa018a254bb65df807",
".git/objects/3d/ee9de3dd8c040c54409ce6a234be0675f432dc": "643c35f5644b7ae7be065dfdafe41e47",
".git/objects/34/b16bd0f93e550e8cbffc6f2b4c7b88986e2c91": "e57694810c586699d774232a6f1cf265",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/a4/0f761a9156bbc0706abf928aab0b40638a45a1": "153c883020583b876ecd723c1383ae69",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/70fd49942789e6547b0ca38026905ca35d82f5": "5c1eeddfca16c2659fc4ada61841e6b0",
".git/objects/d7/fc86d1e44dd0b1ed2e67386aa5a23f70c5749a": "3b979b92a0b6ce49f770b931a1910867",
".git/objects/a5/3fab264d48cd05ecd073f573b782629cee9032": "2918aaf465064abfb7400b3a584641b5",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/6ba8e257dd0c5294f0b5e8b66b190797c7c204": "d0825cd58ea8b8276d394add82ea232a",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/4374c374b0fa0ed4f1d5805674e4361176b9e9": "aea3604a2e1d117a98006cba5f0055c0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/7d/644a7e898f27b7f64974672fb6f748ab1f8022": "c38b612262cfe016f08acc74c0b93cb9",
".git/objects/45/b88c2c9afb2dca0b990a34489de4af16fc7566": "64bae2e1f27d93a66fa19aaf14b1520e",
".git/objects/74/fce7ebedfd2c5672db4da95384e96405f8ab30": "a254dbd92c883ac02f36a9e37a114f9e",
".git/objects/1a/85c297d08f31ea7181f9d30a3f6a3533d883a0": "1d87f93727106b44c892013ef79f6899",
".git/objects/8f/cd699b940fe6449839a5178149aa03453585fd": "f3f0a31891957a6d62fc18add045b683",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/63e46b6beee5aa4bf5a6b5947521c913760116": "4c39a8701b812666b97ddbe159446c99",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/00/18f535545d5c93c727910d29fbaf4984b82599": "20d404aac5e2407dd1a288061657d43a",
".git/objects/00/f73a18f3a34a5a63ddb12f8a099b8313d1e038": "8dbda2c07c6a5703930f05b1e4e2f08f",
".git/objects/36/9bd66bede4ad5ab02f239a8c84a7d586a19c82": "a56883ec11a6891dae4aa02eefef847a",
".git/objects/5d/547977d00428ad2c2f20977efb02da349eadc7": "15df8301fcb83a1080bb256bb554f9d4",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/65/3615c5ba6c39d8e1a1e51f003470b6993ccac3": "4b83f69fa4cda8c1decbc5d2085044a7",
".git/objects/62/758dfb3165fa8b1f3124ed480428e7b4817be4": "cf3e21aa5e0699e6f7ca87c38cef7ff8",
".git/objects/08/55f9894742306b3592a827efc895812f6e1a1c": "9939353258c4fd9ac210cf9c0cadfd35",
".git/objects/06/d76e838560dfa3e23ae9c3955d4439b3376808": "130d0077a55cdcce36770ea22b18904d",
".git/objects/99/1c8979d168007b04f944492bb3d263764319ef": "c02590c7b7e8b8eada25f6c107e7ead2",
".git/objects/99/ff45fe7fc01789bbb592e326e3029dac182c47": "cdb9030e4b9f0ec53a21c51a971ec166",
".git/objects/52/45501653c3771a8acea32cf23892be5ecdf2a4": "8e8798ca2a1ecb57b9dec06c058f3403",
".git/objects/55/555a51a7a9aa04137bdd2269d4c39313d10832": "17a863d59e7da494c0e7a358749e47cc",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a0/8225c8c95398db1638ca260a3b29c56fde4ec0": "0b2195d87e37fab16b7e507a4875b6d2",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/a9/8f750e3805519654e50a6764ad8c3bba8bc44a": "0d8e1568235a1ac3898d0e01af773d7c",
".git/objects/af/9ef98e31a2938f4c7f88cafef4bb99827d4e0a": "ef70089e33aa10c083975bed131506e4",
".git/objects/af/5ef7fce789c30586e2a83ec4d0f9510e7c1667": "31e86b26d403db1078828ad5e3fda4b0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/26cdf702087c81c7db3336307d66977eaaa82c": "769cab5b32cb43029d12bd4e790c5f3b",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/5488322348851274f99fd3817158053e96045d": "5f7685191741a70a9d593386953fcb99",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/c4/b05f5a1a0a76de6310f9ef9bbb30f2182a0a11": "6fa67da327631fea823071569b8260dd",
".git/objects/f9/94aaca90693e173cb60dabddf5325a09cdf08f": "ef2b6af432457b55153eb8547d34d97d",
".git/objects/f9/84c0e5edd13455719572811f5e4710eac94a48": "c7b70ab5dde6818521772cf729a304ee",
".git/objects/e8/da23129d8325428a2046caa691e0e22d215a4f": "e228413ae7ce6fa3de251a636bfd5264",
".git/objects/fa/91fe6a2af286a3471c8a9a917b31fb6cb09516": "81f79693d6398d9040ced81e63293c2f",
".git/objects/e9/73e755f521a118e5762b9727e8ab30e8b2daed": "d6f78d5885518aebf96dd91068be7984",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/2c/5e1906a9e52274ee667e110da1c1399bba7c4c": "85f20e3f5cab644561b26f958516152c",
".git/objects/2d/af18822dbc7a9e5729e6e1ccade2532ba573d2": "eaf0f36dff0ff87fb09a5aeac81e6cb8",
".git/objects/83/859417854480fbd210105da318cddd1a4d7b0c": "b11755d5a5bc1603397f5f08dbe00127",
".git/objects/77/8efebb87cda527eb40d62c1aa775e89cea98be": "314b08704871ee04ce8016f17c61a97d",
".git/objects/23/e13fcd15a6ea62d6bd795fbcca6db29e7c29d7": "190dd94f1c11f997a735cdee4f26d403",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/12/d22276a538444c15f04fe580025caa9c54f375": "de44e8975a112cb4fbcb665e491707b4",
".git/objects/40/f1694ba4c97cdfaaa99a6459feab9a24614586": "aca2ed34561ba1ba8fc7d7674cd50113",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/2e/ef8c2c1d6e6fdc62d7ac4bf93b6bcd85e83eb3": "b8e0dd93ab42fd9a265d889c3575130b",
".git/objects/14/c8a6c2de8285ee671036d1420576cceaf28b88": "ce5cf0d3f6b11ac08b6faa0015bffbbe",
".git/objects/14/689536dc13e011cd0c9539c5571e356e3c2fc9": "af62e01eefd813bd9a4c477bb9f6f41e",
".git/objects/22/ca810141c79544939ad75b5aa8bd1e35c6685d": "41d7a0f12fbcb3fae07a86655e1d6e76",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "071de72a407e9ca9b71f04a22e699f70",
".git/logs/refs/heads/main": "b2ff991b7ada0c06ab68ae8fb0605114",
".git/logs/refs/remotes/origin/main": "58fa7891d89d9d32dffa41c619a6179e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "ea4c163d6fde92ba1f55a72f5e1a97ef",
".git/refs/remotes/origin/main": "ea4c163d6fde92ba1f55a72f5e1a97ef",
".git/index": "236bc3dfc0394bfa7e2f00558cf897e4",
".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/FETCH_HEAD": "96d2f078709105bf1ac11e1c3c5b65ab",
"assets/AssetManifest.json": "d3096debc0902ca7692144439f4c4caf",
"assets/NOTICES": "a9c5015b1b365c9168094ca73b583cdf",
"assets/FontManifest.json": "a777e81c2f887b0d0fb9f77fdbf98446",
"assets/AssetManifest.bin.json": "dca03b4e6fd8c49bd2e6fe68b8d6ed01",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "70b7deabe4fde396a612a80b496348de",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/4.png": "44fa30902daf3125cec86887e3033da0",
"assets/assets/images/5.png": "3ce27295e080b8abe21af491690dc079",
"assets/assets/images/6.png": "22f88e0c63a2dfb20a6daf5f042389ab",
"assets/assets/images/2.png": "da961d7c3fff363fabc529a8576208b1",
"assets/assets/images/3.png": "7b584f487019fc9d4ad8f1c8f8defbf9",
"assets/assets/images/1.png": "d71188d291a3b9e9c3fd2e9a991ef78c",
"assets/assets/qr-code/qr.png": "fd41f90a8147cecf740e67b717282985",
"assets/assets/fonts/Knewave/Knewave-Regular.ttf": "f77e1ba76d6ce86a4639dce4a09b2db5",
"assets/assets/fonts/Abel/Abel-Regular.ttf": "1052d6ca3993ae24a932304560a4c8b4",
"assets/assets/fonts/MuseoModerno/MuseoModerno-Regular.ttf": "5eb1413281f0b877bb0df3a8a78a9e0a",
"assets/assets/fonts/Agbalumo/Agbalumo-Regular.ttf": "516f83123b9ec7bc15db3239b7953d44",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
