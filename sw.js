/* Kube – service worker, versjon 223904fc8673 */
const BASE = "/kube-test/";
// Navnet inneholder stien, så flere apper på samme domene (for eksempel github.io) ikke rydder hverandres lager.
const PREFIX = 'kube:' + BASE + ':';
const CACHE = PREFIX + '223904fc8673';
const FILES = ["/kube-test/index.html","/kube-test/manifest.webmanifest","/kube-test/icons/icon-192.png","/kube-test/icons/maskable-192.png","/kube-test/icons/apple-touch-icon.png","/kube-test/icons/favicon-32.png","/kube-test/assets/AboutSheet-QPPzhPNu.js","/kube-test/assets/actions-B2EXnjQt.js","/kube-test/assets/assemble-CziIlMCR.js","/kube-test/assets/bests-YXTXwmuj.js","/kube-test/assets/board-6NhwTPWO.js","/kube-test/assets/cheat-Bl_h7h5a.js","/kube-test/assets/cheat-D9yFaCLB.css","/kube-test/assets/cockpit-B2ACRZC5.js","/kube-test/assets/cockpit-DOp6sQ08.css","/kube-test/assets/controls-CtU2j3_J.js","/kube-test/assets/core-CpsaBWvA.js","/kube-test/assets/cube-iSAOp81T.js","/kube-test/assets/debug-CKJpNOfX.js","/kube-test/assets/duel-I0bRv1yw.css","/kube-test/assets/DuelLayers--amw0kqg.js","/kube-test/assets/earth-BbLfUD2o.js","/kube-test/assets/earthDownload-BkqxsYHN.js","/kube-test/assets/earthLevels-CTDeIg-Y.js","/kube-test/assets/engine-BjysSBZ1.js","/kube-test/assets/environment-DSKuc47J.js","/kube-test/assets/facelets-Cx602QR_.js","/kube-test/assets/features-cOeJqIiG.js","/kube-test/assets/feedback-CimwsGCY.js","/kube-test/assets/FeedbackSheet-vmj3ne0s.js","/kube-test/assets/forest-lHCQpH47.js","/kube-test/assets/format-Dxs0OJv4.js","/kube-test/assets/gps-sUGouh5b.css","/kube-test/assets/GpsScreen-CC1HaDFg.js","/kube-test/assets/GpsScreen-DtP78DDB.css","/kube-test/assets/GuideCheck-Bnx2swIl.js","/kube-test/assets/helpShowsEdit-BPYJbhKP.js","/kube-test/assets/identity-CCsmMn5N.js","/kube-test/assets/index-B_IB4hJ1.js","/kube-test/assets/index-DLDT3BxX.css","/kube-test/assets/inlineFake-CHiRCYcl.js","/kube-test/assets/jetbrains-mono-latin-500-normal-BWZEU5yA.woff2","/kube-test/assets/jetbrains-mono-latin-ext-500-normal-Cut-4mMH.woff2","/kube-test/assets/JoinScreen-yRNSxEll.js","/kube-test/assets/keys-OilGHZ36.js","/kube-test/assets/KTX2Loader-D6mahAgK.js","/kube-test/assets/lang-wy5mkXiZ.js","/kube-test/assets/leave-Lif9QC2P.js","/kube-test/assets/messages.nb-k9Y1s_3c.js","/kube-test/assets/migrations-DcISz557.js","/kube-test/assets/MovePad-D2MA_mNz.js","/kube-test/assets/MovePad-q7KtqyIy.css","/kube-test/assets/MoveSigns-96zsjfLu.js","/kube-test/assets/moveText-BJI-1Pr_.js","/kube-test/assets/MyReplay-Bnyc1g2j.js","/kube-test/assets/name-xfiMXuO8.js","/kube-test/assets/notation-CaTfMHiJ.js","/kube-test/assets/ocean-k7fuvH5u.js","/kube-test/assets/orientation-DXR0oi7e.js","/kube-test/assets/paint-BCKt5JUQ.js","/kube-test/assets/pending-CPAZ3Vx5.js","/kube-test/assets/placeStatus-C7qiKVYM.js","/kube-test/assets/plan-BWZs0fBC.js","/kube-test/assets/PlayHelpRow-Cel4zeKT.js","/kube-test/assets/playPlan-MiX60sQB.js","/kube-test/assets/prefs-CfP9WEYY.js","/kube-test/assets/preload-helper-CUm7bchG.js","/kube-test/assets/random-UAc98jV9.js","/kube-test/assets/rankedFlow-D2yGFp_H.js","/kube-test/assets/RankedScreen-BvRUaKpJ.css","/kube-test/assets/RankedScreen-vl46YJyx.js","/kube-test/assets/react-Xw9dTyq1.js","/kube-test/assets/realStart-BtkOHUDx.js","/kube-test/assets/recognize-_AoYshU7.js","/kube-test/assets/replay-DgykZsx_.js","/kube-test/assets/replayDb-Cs49VLWd.js","/kube-test/assets/replayLog-vyMkaAdo.js","/kube-test/assets/replays-D2iTrRQJ.js","/kube-test/assets/retiredSettings-C6RQ2_0F.js","/kube-test/assets/rolldown-runtime-hePW80VL.js","/kube-test/assets/rules-BoIY3EXW.js","/kube-test/assets/scan-DVZoqCKk.js","/kube-test/assets/ScanExperience-NAH-UjRo.js","/kube-test/assets/ScanScreen-875lGWnu.js","/kube-test/assets/ScanScreen-k09YTq9J.css","/kube-test/assets/scene-BOe-IHS5.js","/kube-test/assets/schibsted-grotesk-latin-500-normal-rf9C4Thp.woff2","/kube-test/assets/schibsted-grotesk-latin-600-normal-Czv9Obfv.woff2","/kube-test/assets/schibsted-grotesk-latin-700-normal-BkH0uJ1o.woff2","/kube-test/assets/schibsted-grotesk-latin-800-normal-CIaq-TR1.woff2","/kube-test/assets/schibsted-grotesk-latin-ext-500-normal-Ch1izu81.woff2","/kube-test/assets/schibsted-grotesk-latin-ext-600-normal-C5pQPdUJ.woff2","/kube-test/assets/schibsted-grotesk-latin-ext-700-normal-o210KhU4.woff2","/kube-test/assets/schibsted-grotesk-latin-ext-800-normal-CZWJQj-F.woff2","/kube-test/assets/scrambler-9Rn_JZFI.js","/kube-test/assets/scrambler.worker-Dp2CKIir.js","/kube-test/assets/scrambles-B0dsv4gw.js","/kube-test/assets/ScrambleSheet-CsxPqziG.js","/kube-test/assets/ScramblesSheet-BYIsWJr6.js","/kube-test/assets/ScrambleView-DVafX3hr.js","/kube-test/assets/session-Dwv5DYuJ.js","/kube-test/assets/SettingsSheet-C4o-yl1r.js","/kube-test/assets/shareCard-Cgz4mXck.js","/kube-test/assets/ShareSheet-Cmu_aNCg.js","/kube-test/assets/ShareSheet-D_a5F9BZ.css","/kube-test/assets/Sheets-CP3Y8TNd.js","/kube-test/assets/sky-CyaV2QOZ.js","/kube-test/assets/SkyRecords-BQmUKdEV.js","/kube-test/assets/SkyRecords-BYt-ORYl.css","/kube-test/assets/slices-fMwRku9-.js","/kube-test/assets/snapshot-BwPlzOcE.js","/kube-test/assets/SolveSheet-D4GliXoo.js","/kube-test/assets/store-BajD9YYr.js","/kube-test/assets/store-Cbr-m0sq.js","/kube-test/assets/t-D0CjTuUR.js","/kube-test/assets/terrain.worker-CWyvrRRt.js","/kube-test/assets/terrainCache-WthounQz.js","/kube-test/assets/text-Nh1Hcw6c.js","/kube-test/assets/three-IWIDHucs.js","/kube-test/assets/viewControl-D-boSv_U.js","/kube-test/assets/WatchLayer-Bn4hIizE.css","/kube-test/assets/WatchLayer-DsdD6mJz.js","/kube-test/assets/week-DdCnZ_Nv.js","/kube-test/assets/wipeFlow-B03L9oqL.js","/kube-test/assets/wiping-C43ZGAKh.js","/kube-test/assets/World-CJenQWA5.css","/kube-test/assets/World-WRsflY9m.js","/kube-test/assets/worldHint-DobvcWvz.js","/kube-test/assets/WorldLink-Ft1Ydp_j.js","/kube-test/assets/WorldWatch-EzrEmq54.js","/kube-test/icons/monochrome-432.png","/kube-test/leaderboard-rules.html","/kube-test/privacy.html"];
// Sidene i bygget som ikke er appen (for eksempel personvern.html eller lisenser.txt), som stier i adressen.
const PAGES = ["/kube-test/leaderboard-rules.html","/kube-test/lisenser.txt","/kube-test/privacy.html"];
const ENTRY = "/kube-test/assets/index-B_IB4hJ1.js";
// Filene med innholdet i navnet.
const ASSETS = BASE + 'assets/';
// Bildene til stedene som lastes ned (jorda, sted-jorda.md 2.4): et eget, varig lager. Navnet begynner ikke med PREFIX («kube:»), ellers sletter activate det ved hver oppdatering, og 10 MB måtte lastes ned på nytt.
// Appen rydder gamle versjoner selv (src/engine/world/placeCache.ts) og sletter lageret i «Delete all data».
const PLACES_CACHE = 'kube-steder:' + BASE;
const PLACES_DIR = BASE + 'steder/';

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      // Lagrene fra tidligere versjoner. Bare lagrene til denne appen (PREFIX): andre apper på samme domene har sine egne.
      const older = (await caches.keys()).filter((k) => k.startsWith(PREFIX) && k !== CACHE);
      const previous = async (url) => {
        for (const name of older) {
          const hit = await caches.match(url, { cacheName: name });
          if (hit) return hit;
        }
        return null;
      };
      const responses = await Promise.all(
        FILES.map(async (url) => {
          const hashed = url.startsWith(ASSETS);
          const kept = hashed ? await previous(url) : null;
          if (kept) return [url, kept];
          const res = await fetch(hashed ? new Request(url) : new Request(url, { cache: 'reload' }));
          if (!res.ok) throw new Error('Mangler ' + url + ' (' + res.status + ')');
          return [url, res];
        }),
      );
      const index = responses.find(([url]) => url === BASE + 'index.html');
      // Svarer serveren eller et mellomlager med en eldre side, avbrytes installasjonen og den gamle versjonen blir stående.
      if (index && ENTRY && !(await index[1].clone().text()).includes(ENTRY.slice(BASE.length))) throw new Error('Utdatert index.html');
      const cache = await caches.open(CACHE);
      await Promise.all(responses.map(([url, res]) => cache.put(url, res)));
    })(),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith(PREFIX) && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') self.skipWaiting();
});

// Fra lageret først, ellers fra nettet. Det som hentes, lagres under key til neste gang, også uten nett.
function cachedOrFetched(key, req) {
  return caches.match(key, { cacheName: CACHE }).then(
    (hit) =>
      hit ||
      fetch(req).then((res) => {
        if (res.ok && res.type === 'basic') {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(key, copy));
        }
        return res;
      }),
  );
}

// Bildene til stedene: fra lageret først, ellers fra nettet og så lagret til neste gang, også uten nett. Feiler nettet første gang, feiler henting (appen viser meldingen).
function placeFetched(req) {
  return caches.open(PLACES_CACHE).then((cache) =>
    cache.match(req).then(
      (hit) =>
        hit ||
        fetch(req).then((res) => {
          if (res.ok && res.status === 200 && res.type !== 'opaque') cache.put(req, res.clone());
          return res;
        }),
    ),
  );
}

// Siden en adresse viser til, også uten «.html», slik vertene serverer den (/personvern gir personvern.html).
function pageFor(path) {
  if (PAGES.includes(path)) return path;
  if (PAGES.includes(path + '.html')) return path + '.html';
  return null;
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin || !url.pathname.startsWith(BASE)) return;
  if (req.mode === 'navigate') {
    // En side i bygget, for eksempel personvern.html eller lisenser.txt, vises som seg selv.
    const page = pageFor(url.pathname);
    if (page) {
      event.respondWith(cachedOrFetched(page, req));
      return;
    }
    // Alle andre sidebesøk er appen: lagret index.html først, så den åpner seg med en gang, også uten nett.
    // Nye versjoner kommer via en ventende service worker og knappen Oppdater.
    event.respondWith(caches.match(BASE + 'index.html', { cacheName: CACHE }).then((hit) => hit || fetch(req)));
    return;
  }
  if (url.pathname.startsWith(PLACES_DIR)) {
    event.respondWith(placeFetched(req));
    return;
  }
  event.respondWith(cachedOrFetched(req, req));
});
