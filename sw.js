/* Kube – service worker, versjon ef5b950e27ab */
const BASE = "/kube-test/";
// Navnet inneholder stien, så flere apper på samme domene (for eksempel github.io) ikke rydder hverandres lager.
const PREFIX = 'kube:' + BASE + ':';
const CACHE = PREFIX + 'ef5b950e27ab';
const FILES = ["/kube-test/index.html","/kube-test/manifest.webmanifest","/kube-test/icons/icon-192.png","/kube-test/icons/maskable-192.png","/kube-test/icons/apple-touch-icon.png","/kube-test/icons/favicon-32.png","/kube-test/assets/AboutSheet-BijsXiJd.js","/kube-test/assets/actions-w0T-ZvXU.js","/kube-test/assets/assemble-BIHyfXp9.js","/kube-test/assets/bests-CMx6xmkD.js","/kube-test/assets/board-BhBGU_uc.js","/kube-test/assets/cheat-BsAXI7Nb.js","/kube-test/assets/cheat-D9yFaCLB.css","/kube-test/assets/clouds-C5OtG5hg.webp","/kube-test/assets/cockpit-BWTEzPuX.js","/kube-test/assets/cockpit-hDARFUH2.css","/kube-test/assets/controls-Bhq7K6gn.js","/kube-test/assets/core-6Fox2abY.js","/kube-test/assets/cube-iSAOp81T.js","/kube-test/assets/debug-CKJpNOfX.js","/kube-test/assets/download-DCsSq6wR.js","/kube-test/assets/duel-I0bRv1yw.css","/kube-test/assets/DuelLayers-Qg6HO2YK.js","/kube-test/assets/earth-B8tnlLYG.js","/kube-test/assets/earth-CvNxVQs_.webp","/kube-test/assets/earthDownload-Ck38WkwE.js","/kube-test/assets/earthLevels-DTsBNkMT.js","/kube-test/assets/earthTextures-C8VOFIMu.js","/kube-test/assets/engine-BZhCnMYA.js","/kube-test/assets/environment-BgXLsXEr.js","/kube-test/assets/facelets-CtRHj3-H.js","/kube-test/assets/features-1Mfxz7ST.js","/kube-test/assets/feedback-CnxHptk7.js","/kube-test/assets/FeedbackSheet-Cl0bJozc.js","/kube-test/assets/forest-Dr3OmTOH.js","/kube-test/assets/format-L-bINzp1.js","/kube-test/assets/gps-B7bcf14N.css","/kube-test/assets/GpsScreen-B-VEFVnt.js","/kube-test/assets/GpsScreen-DtP78DDB.css","/kube-test/assets/GuideCheck-B0gtyte7.js","/kube-test/assets/helpShowsEdit-DUoUH_ZP.js","/kube-test/assets/identity-C72abFaD.js","/kube-test/assets/index-BXYgvcBB.css","/kube-test/assets/index-CJ8bYaPf.js","/kube-test/assets/inlineFake-Ay8Vjc0X.js","/kube-test/assets/jetbrains-mono-latin-500-normal-BWZEU5yA.woff2","/kube-test/assets/jetbrains-mono-latin-ext-500-normal-Cut-4mMH.woff2","/kube-test/assets/JoinScreen-RnyGZTzn.js","/kube-test/assets/keys-B0eQ3FXG.js","/kube-test/assets/KTX2Loader-DPFYyMVZ.js","/kube-test/assets/lang-FI2NrQ3w.js","/kube-test/assets/leave-CwtIuh-x.js","/kube-test/assets/marks-DhD57rME.js","/kube-test/assets/messages.nb-DiGqBXzt.js","/kube-test/assets/migrations-BfaikB_4.js","/kube-test/assets/MovePad-Bn8f4zcC.js","/kube-test/assets/MovePad-q7KtqyIy.css","/kube-test/assets/MoveSigns-DZ8O4-4o.js","/kube-test/assets/moveText-BJI-1Pr_.js","/kube-test/assets/MyReplay-CnukjOwq.js","/kube-test/assets/name-C_SPk0dm.js","/kube-test/assets/notation-CaTfMHiJ.js","/kube-test/assets/ocean-C-WH6A2G.js","/kube-test/assets/orientation-Be_D1Qwf.js","/kube-test/assets/paint-CG64cU7E.js","/kube-test/assets/pending-D41Px6Q_.js","/kube-test/assets/placeCache-CDy4pKPf.js","/kube-test/assets/plan-CNiqgNfB.js","/kube-test/assets/PlayHelpRow-Ddjv7GuK.js","/kube-test/assets/playPlan-D9wlQv-E.js","/kube-test/assets/prefs-my2uL3ql.js","/kube-test/assets/preload-helper-BVxZAXUP.js","/kube-test/assets/random-UAc98jV9.js","/kube-test/assets/rankedFlow-BPgBvTG4.js","/kube-test/assets/RankedScreen-BvRUaKpJ.css","/kube-test/assets/RankedScreen-CCVivayx.js","/kube-test/assets/react-DUz72-CK.js","/kube-test/assets/realStart-Dao0yRqv.js","/kube-test/assets/recognize-Deq9g4ol.js","/kube-test/assets/replay-B86GcxDZ.js","/kube-test/assets/replayDb-C6U2CxT7.js","/kube-test/assets/replayLog-BZmcACTS.js","/kube-test/assets/replays-BhawCFB5.js","/kube-test/assets/retiredSettings-C6RQ2_0F.js","/kube-test/assets/rolldown-runtime-XKyaHtl9.js","/kube-test/assets/rounds-Bk2NBpDt.js","/kube-test/assets/rules-CnRALJ7T.js","/kube-test/assets/scan-BfwA33Zg.js","/kube-test/assets/ScanExperience-7tOVS3qC.js","/kube-test/assets/ScanScreen-B2hRfcuj.js","/kube-test/assets/ScanScreen-C1U1Mi44.css","/kube-test/assets/scene-DCiShpO_.js","/kube-test/assets/schibsted-grotesk-latin-500-normal-rf9C4Thp.woff2","/kube-test/assets/schibsted-grotesk-latin-600-normal-Czv9Obfv.woff2","/kube-test/assets/schibsted-grotesk-latin-700-normal-BkH0uJ1o.woff2","/kube-test/assets/schibsted-grotesk-latin-800-normal-CIaq-TR1.woff2","/kube-test/assets/schibsted-grotesk-latin-ext-500-normal-Ch1izu81.woff2","/kube-test/assets/schibsted-grotesk-latin-ext-600-normal-C5pQPdUJ.woff2","/kube-test/assets/schibsted-grotesk-latin-ext-700-normal-o210KhU4.woff2","/kube-test/assets/schibsted-grotesk-latin-ext-800-normal-CZWJQj-F.woff2","/kube-test/assets/scrambler-BISLE16F.js","/kube-test/assets/scrambler.worker-BdiG_Bnn.js","/kube-test/assets/scrambles-BdSy6ZS2.js","/kube-test/assets/ScrambleSheet-t_STrro4.js","/kube-test/assets/ScramblesSheet-D0c4TFt8.js","/kube-test/assets/ScrambleView-Cca59I4u.js","/kube-test/assets/sea-CiXG2hjt.webp","/kube-test/assets/session-Dwv5DYuJ.js","/kube-test/assets/SettingsSheet-D7lBl0WM.js","/kube-test/assets/shareCard-BhmMeeGO.js","/kube-test/assets/ShareSheet-Ca9S9BQi.js","/kube-test/assets/ShareSheet-D_a5F9BZ.css","/kube-test/assets/Sheets-CX1YJGS0.js","/kube-test/assets/shell-CJWZtMIw.js","/kube-test/assets/sky-CqXenjfV.js","/kube-test/assets/SkyRecords-5FKcJYvU.css","/kube-test/assets/SkyRecords-yMUR9hQe.js","/kube-test/assets/slices-DZrzc4lX.js","/kube-test/assets/snapshot-B6QYzhzh.js","/kube-test/assets/SolveSheet--qJz7Bfq.js","/kube-test/assets/store-5Wj9bABl.js","/kube-test/assets/store-DKVv68z0.js","/kube-test/assets/t-C8trk7c0.js","/kube-test/assets/terrain.worker-CqBzxqHc.js","/kube-test/assets/terrainCache-us76TUyH.js","/kube-test/assets/text-BTqA-Ufq.js","/kube-test/assets/three-DTSqHtj7.js","/kube-test/assets/viewControl-CZjtZnyC.js","/kube-test/assets/WatchLayer-Bc55KKRV.css","/kube-test/assets/WatchLayer-DTNpfVKy.js","/kube-test/assets/week-BE2FYJJL.js","/kube-test/assets/wipeFlow-CtbwQheZ.js","/kube-test/assets/wiping-C43ZGAKh.js","/kube-test/assets/World-DLN7Zsc5.css","/kube-test/assets/World-egkPjR5B.js","/kube-test/assets/worldHint-CnCYyAqf.js","/kube-test/assets/WorldLink-DjvPj2QJ.js","/kube-test/assets/WorldWatch-C9hZ89Oe.js","/kube-test/icons/monochrome-432.png","/kube-test/leaderboard-rules.html","/kube-test/privacy.html"];
// Sidene i bygget som ikke er appen (for eksempel personvern.html eller lisenser.txt), som stier i adressen.
const PAGES = ["/kube-test/leaderboard-rules.html","/kube-test/lisenser.txt","/kube-test/privacy.html"];
const ENTRY = "/kube-test/assets/index-CJ8bYaPf.js";
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
