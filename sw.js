/* Kube – service worker, versjon 309ce84ca890 */
const BASE = "/kube-test/";
// Navnet inneholder stien, så flere apper på samme domene (for eksempel github.io) ikke rydder hverandres lager.
const PREFIX = 'kube:' + BASE + ':';
const CACHE = PREFIX + '309ce84ca890';
const FILES = ["/kube-test/index.html","/kube-test/manifest.webmanifest","/kube-test/icons/icon-192.png","/kube-test/icons/maskable-192.png","/kube-test/icons/apple-touch-icon.png","/kube-test/icons/favicon-32.png","/kube-test/assets/AboutSheet-Bk9FAiJ2.js","/kube-test/assets/actions-M2wORE5B.js","/kube-test/assets/assemble-BPzOglFR.js","/kube-test/assets/bests-Ih-_BkSx.js","/kube-test/assets/board-z-ebXhZs.js","/kube-test/assets/cockpit-B49nSA7p.js","/kube-test/assets/cockpit-DJMGqXnr.css","/kube-test/assets/controls-Cr7XRr4S.js","/kube-test/assets/core-CpsaBWvA.js","/kube-test/assets/cube-iSAOp81T.js","/kube-test/assets/debug-CKJpNOfX.js","/kube-test/assets/duel-DNDH2tKY.css","/kube-test/assets/DuelLayers-quJ-rphz.js","/kube-test/assets/earth-e5fZdDVG.js","/kube-test/assets/earthDownload-B9S1lFKu.js","/kube-test/assets/earthLevels-CTDeIg-Y.js","/kube-test/assets/engine-CptCV2rc.js","/kube-test/assets/environment-34Omgejg.js","/kube-test/assets/facelets-CtvIj8gs.js","/kube-test/assets/features-cOeJqIiG.js","/kube-test/assets/feedback-CimwsGCY.js","/kube-test/assets/FeedbackSheet-By9gbn2Z.js","/kube-test/assets/forest-Jbp13LAn.js","/kube-test/assets/format-DxVVn489.js","/kube-test/assets/gps-DYQwOccy.css","/kube-test/assets/GpsScreen-BXzp8xXO.js","/kube-test/assets/GpsScreen-DtP78DDB.css","/kube-test/assets/GuideCheck-QXfctq6_.js","/kube-test/assets/helpShowsEdit-yzVrXQtk.js","/kube-test/assets/identity-CCsmMn5N.js","/kube-test/assets/index-2f96w3Uw.css","/kube-test/assets/index-B_zxEuXE.js","/kube-test/assets/inlineFake-DNlg_amR.js","/kube-test/assets/jetbrains-mono-latin-500-normal-BWZEU5yA.woff2","/kube-test/assets/jetbrains-mono-latin-ext-500-normal-Cut-4mMH.woff2","/kube-test/assets/JoinScreen-Bkgm3tSS.js","/kube-test/assets/keys-OilGHZ36.js","/kube-test/assets/KTX2Loader-Dqc3JHri.js","/kube-test/assets/lang-wy5mkXiZ.js","/kube-test/assets/leave-D31EMqfJ.js","/kube-test/assets/messages.nb-CLH4eL1E.js","/kube-test/assets/migrations-DcISz557.js","/kube-test/assets/MovePad-Ctgi4-Yd.js","/kube-test/assets/MovePad-DM-vHehG.css","/kube-test/assets/moveText-BJI-1Pr_.js","/kube-test/assets/name-xfiMXuO8.js","/kube-test/assets/notation-CaTfMHiJ.js","/kube-test/assets/ocean-CFlpsobp.js","/kube-test/assets/orientation-DEJFhAgw.js","/kube-test/assets/paint-DWYwseB9.js","/kube-test/assets/pending-B_wcXKRL.js","/kube-test/assets/placeStatus-C7qiKVYM.js","/kube-test/assets/plan-BWZs0fBC.js","/kube-test/assets/PlayHelpRow-CXMQXYvK.js","/kube-test/assets/playPlan-MiX60sQB.js","/kube-test/assets/prefs-CfP9WEYY.js","/kube-test/assets/preload-helper-CUm7bchG.js","/kube-test/assets/random-UAc98jV9.js","/kube-test/assets/rankedFlow-B0bb3Fhc.js","/kube-test/assets/RankedScreen-CaGRfmAw.css","/kube-test/assets/RankedScreen-JKIm0zQe.js","/kube-test/assets/react-Xw9dTyq1.js","/kube-test/assets/realStart-DwUBtJBe.js","/kube-test/assets/Recipe-KAs9oaQV.js","/kube-test/assets/recognize-_AoYshU7.js","/kube-test/assets/replay-Bua6EB2c.js","/kube-test/assets/replayDb-BjqnlqoO.js","/kube-test/assets/replayLog-h7V1a3Dw.js","/kube-test/assets/replays-DoAUsrdU.js","/kube-test/assets/retiredSettings-C6RQ2_0F.js","/kube-test/assets/rolldown-runtime-hePW80VL.js","/kube-test/assets/rules-BoIY3EXW.js","/kube-test/assets/scan-B9pHlkNq.js","/kube-test/assets/ScanExperience-BvzXZQ70.js","/kube-test/assets/ScanScreen-CPtD06M2.js","/kube-test/assets/ScanScreen-k09YTq9J.css","/kube-test/assets/scene-rHpcA31F.js","/kube-test/assets/schibsted-grotesk-latin-500-normal-rf9C4Thp.woff2","/kube-test/assets/schibsted-grotesk-latin-600-normal-Czv9Obfv.woff2","/kube-test/assets/schibsted-grotesk-latin-700-normal-BkH0uJ1o.woff2","/kube-test/assets/schibsted-grotesk-latin-800-normal-CIaq-TR1.woff2","/kube-test/assets/schibsted-grotesk-latin-ext-500-normal-Ch1izu81.woff2","/kube-test/assets/schibsted-grotesk-latin-ext-600-normal-C5pQPdUJ.woff2","/kube-test/assets/schibsted-grotesk-latin-ext-700-normal-o210KhU4.woff2","/kube-test/assets/schibsted-grotesk-latin-ext-800-normal-CZWJQj-F.woff2","/kube-test/assets/scrambler-Dnln2S-R.js","/kube-test/assets/scrambler.worker-CVA_bE9u.js","/kube-test/assets/scrambles-NMsBeKVY.js","/kube-test/assets/ScrambleSheet-na4-hQGa.js","/kube-test/assets/ScramblesSheet-ClVPWElR.js","/kube-test/assets/ScrambleView-BJENYhFG.js","/kube-test/assets/session-Dwv5DYuJ.js","/kube-test/assets/SettingsSheet-CFB3NS4e.js","/kube-test/assets/shareCard-5hxtSJsu.js","/kube-test/assets/ShareSheet-BsiGh_q6.js","/kube-test/assets/ShareSheet-D_a5F9BZ.css","/kube-test/assets/Sheets-3-IYIoTZ.js","/kube-test/assets/sky-VT6Mf4IE.js","/kube-test/assets/SkyRecords-3LsERXJl.css","/kube-test/assets/SkyRecords-BxtfX8WL.js","/kube-test/assets/slices-fMwRku9-.js","/kube-test/assets/snapshot-BwF45_eG.js","/kube-test/assets/SolveSheet-DFq2S6hf.js","/kube-test/assets/store-By6tYzEh.js","/kube-test/assets/store-cISDZC8D.js","/kube-test/assets/t-Dgxw8ZQv.js","/kube-test/assets/terrain.worker-CWyvrRRt.js","/kube-test/assets/terrainCache-WthounQz.js","/kube-test/assets/text-Cugv5ZDg.js","/kube-test/assets/three-CM7b8LB_.js","/kube-test/assets/viewControl-BAXplJYI.js","/kube-test/assets/week-DdCnZ_Nv.js","/kube-test/assets/wipeFlow-DxcVqdw8.js","/kube-test/assets/wiping-C43ZGAKh.js","/kube-test/assets/World-DkW0OMyw.js","/kube-test/assets/World-taLGh35P.css","/kube-test/assets/worldHint-DobvcWvz.js","/kube-test/assets/WorldLink-Bmv4fapa.js","/kube-test/icons/monochrome-432.png","/kube-test/leaderboard-rules.html","/kube-test/privacy.html"];
// Sidene i bygget som ikke er appen (for eksempel personvern.html eller lisenser.txt), som stier i adressen.
const PAGES = ["/kube-test/leaderboard-rules.html","/kube-test/lisenser.txt","/kube-test/privacy.html"];
const ENTRY = "/kube-test/assets/index-B_zxEuXE.js";
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
