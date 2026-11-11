/* Kube – service worker, versjon 26677eb6f6a9 */
const BASE = "/kube-test/";
// Navnet inneholder stien, så flere apper på samme domene (for eksempel github.io) ikke rydder hverandres lager.
const PREFIX = 'kube:' + BASE + ':';
const CACHE = PREFIX + '26677eb6f6a9';
const FILES = ["/kube-test/index.html","/kube-test/manifest.webmanifest","/kube-test/icons/icon-192.png","/kube-test/icons/maskable-192.png","/kube-test/icons/apple-touch-icon.png","/kube-test/icons/favicon-32.png","/kube-test/assets/AboutSheet-BSJZBcnu.js","/kube-test/assets/actions-BUBb8Xlh.js","/kube-test/assets/assemble-CwBo6KW_.js","/kube-test/assets/bests-DBtGsYCB.js","/kube-test/assets/board-8f8V0cgw.js","/kube-test/assets/cheat-CGxbcppw.js","/kube-test/assets/cheat-D9yFaCLB.css","/kube-test/assets/clouds-C5OtG5hg.webp","/kube-test/assets/cockpit-CwRPnvtW.js","/kube-test/assets/cockpit-hDARFUH2.css","/kube-test/assets/controls-CVUlTB9p.js","/kube-test/assets/core-6Fox2abY.js","/kube-test/assets/cube-iSAOp81T.js","/kube-test/assets/debug-CKJpNOfX.js","/kube-test/assets/download-1KvkqjAV.js","/kube-test/assets/duel-I0bRv1yw.css","/kube-test/assets/DuelLayers-DE-ilF6h.js","/kube-test/assets/earth-CvNxVQs_.webp","/kube-test/assets/earth-DDI5K9cU.js","/kube-test/assets/earthDownload-2UHAeQqM.js","/kube-test/assets/earthLevels-DTsBNkMT.js","/kube-test/assets/earthTextures-C8VOFIMu.js","/kube-test/assets/engine-BMEdqAYh.js","/kube-test/assets/environment-BgXLsXEr.js","/kube-test/assets/facelets-Cz6QXO3t.js","/kube-test/assets/features-1Mfxz7ST.js","/kube-test/assets/feedback-BxpD2JrN.js","/kube-test/assets/FeedbackSheet-BSDKpa-5.js","/kube-test/assets/forest-Dr3OmTOH.js","/kube-test/assets/format-XGU-fKOT.js","/kube-test/assets/gps-B7bcf14N.css","/kube-test/assets/GpsScreen-Cv4xrBWG.js","/kube-test/assets/GpsScreen-DtP78DDB.css","/kube-test/assets/GuideCheck-DEamxhwK.js","/kube-test/assets/helpShowsEdit-khwfZwoI.js","/kube-test/assets/identity-CpmICJDs.js","/kube-test/assets/index-BJEYnvsW.js","/kube-test/assets/index-BXYgvcBB.css","/kube-test/assets/inlineFake-CwjfltiB.js","/kube-test/assets/jetbrains-mono-latin-500-normal-BWZEU5yA.woff2","/kube-test/assets/jetbrains-mono-latin-ext-500-normal-Cut-4mMH.woff2","/kube-test/assets/JoinScreen-DdBqDiKf.js","/kube-test/assets/keys-CA-94KRF.js","/kube-test/assets/KTX2Loader-DPFYyMVZ.js","/kube-test/assets/lang-C3O0t7o_.js","/kube-test/assets/leave-C0tVQxGM.js","/kube-test/assets/marks-DhD57rME.js","/kube-test/assets/messages.nb-CrLVwonp.js","/kube-test/assets/migrations-B2OdtFE1.js","/kube-test/assets/MovePad-Bmpul_CV.js","/kube-test/assets/MovePad-q7KtqyIy.css","/kube-test/assets/MoveSigns-DZ8O4-4o.js","/kube-test/assets/moveText-BJI-1Pr_.js","/kube-test/assets/MyReplay-Bm-Ry4p7.js","/kube-test/assets/name-wsikKE0_.js","/kube-test/assets/notation-CaTfMHiJ.js","/kube-test/assets/ocean-C-WH6A2G.js","/kube-test/assets/orientation-Be_D1Qwf.js","/kube-test/assets/paint-CI99ejx9.js","/kube-test/assets/pending-B1Kg7RXe.js","/kube-test/assets/placeCache-CDy4pKPf.js","/kube-test/assets/plan-CNiqgNfB.js","/kube-test/assets/PlayHelpRow-CaKpoDCf.js","/kube-test/assets/playPlan-ChyJ3EY5.js","/kube-test/assets/prefs-Cp4dko0q.js","/kube-test/assets/preload-helper-BVxZAXUP.js","/kube-test/assets/random-UAc98jV9.js","/kube-test/assets/rankedFlow-tQxaZRdi.js","/kube-test/assets/RankedScreen-BvRUaKpJ.css","/kube-test/assets/RankedScreen-DlNr-R4A.js","/kube-test/assets/rankedSession-BV-U_RVH.js","/kube-test/assets/rankedTwo-CmwUdHZg.js","/kube-test/assets/react-DUz72-CK.js","/kube-test/assets/realStart-BHGiBsH1.js","/kube-test/assets/recognize-Deq9g4ol.js","/kube-test/assets/replay-CbGWKuJL.js","/kube-test/assets/replayDb-C6U2CxT7.js","/kube-test/assets/replayLog-CKZBT3w1.js","/kube-test/assets/replays-BnT5_xxL.js","/kube-test/assets/rolldown-runtime-XKyaHtl9.js","/kube-test/assets/round-Cvp6tR0G.js","/kube-test/assets/roundFlow-B_xDI6mg.js","/kube-test/assets/roundMachine-CMAxte__.js","/kube-test/assets/rounds-Bk2NBpDt.js","/kube-test/assets/RoundScreen-BC5jja-7.js","/kube-test/assets/RoundScreen-C6YAvmPi.css","/kube-test/assets/roundView-DIpZSG5A.js","/kube-test/assets/rules-DHtAYqSH.js","/kube-test/assets/ScanExperience-BgTC5u_3.js","/kube-test/assets/ScanScreen-C1U1Mi44.css","/kube-test/assets/ScanScreen-DT8Mpl-5.js","/kube-test/assets/scene-DQm80uRc.js","/kube-test/assets/schibsted-grotesk-latin-500-normal-rf9C4Thp.woff2","/kube-test/assets/schibsted-grotesk-latin-600-normal-Czv9Obfv.woff2","/kube-test/assets/schibsted-grotesk-latin-700-normal-BkH0uJ1o.woff2","/kube-test/assets/schibsted-grotesk-latin-800-normal-CIaq-TR1.woff2","/kube-test/assets/schibsted-grotesk-latin-ext-500-normal-Ch1izu81.woff2","/kube-test/assets/schibsted-grotesk-latin-ext-600-normal-C5pQPdUJ.woff2","/kube-test/assets/schibsted-grotesk-latin-ext-700-normal-o210KhU4.woff2","/kube-test/assets/schibsted-grotesk-latin-ext-800-normal-CZWJQj-F.woff2","/kube-test/assets/scrambler-DgX0opVA.js","/kube-test/assets/scrambler.worker-BdiG_Bnn.js","/kube-test/assets/scrambles-Zl24syBz.js","/kube-test/assets/ScrambleSheet-w_LoXNPD.js","/kube-test/assets/ScramblesSheet-BVWEgcIP.js","/kube-test/assets/ScrambleView-Di9QPjdj.js","/kube-test/assets/sea-CiXG2hjt.webp","/kube-test/assets/session-Dwv5DYuJ.js","/kube-test/assets/SettingsSheet-C0rlVoDD.js","/kube-test/assets/shareCard-wiAuBOCn.js","/kube-test/assets/ShareSheet-Cv7PlkEr.js","/kube-test/assets/ShareSheet-D_a5F9BZ.css","/kube-test/assets/Sheets-9lcW-mFL.js","/kube-test/assets/shell-DWz3zfJG.js","/kube-test/assets/size2-DBWF2_6G.js","/kube-test/assets/sky-CqXenjfV.js","/kube-test/assets/SkyRecords-CrBGV_z8.css","/kube-test/assets/SkyRecords-re1mHy7G.js","/kube-test/assets/slices-DZrzc4lX.js","/kube-test/assets/snapshot-BD0ztSjw.js","/kube-test/assets/SolveSheet-DjywXyee.js","/kube-test/assets/store-Dby4c1kh.js","/kube-test/assets/store-DLDWjK92.js","/kube-test/assets/t-5RQxE9pA.js","/kube-test/assets/terrain.worker-CqBzxqHc.js","/kube-test/assets/terrainCache-us76TUyH.js","/kube-test/assets/text-BMeJGTRZ.js","/kube-test/assets/three-DTSqHtj7.js","/kube-test/assets/version-BAQKPoCm.js","/kube-test/assets/viewControl-Cbi0OAOu.js","/kube-test/assets/WatchLayer-Bc55KKRV.css","/kube-test/assets/WatchLayer-Cys61uKc.js","/kube-test/assets/week-BsjSoU-n.js","/kube-test/assets/wipeFlow-CPrPDvft.js","/kube-test/assets/wiping-C43ZGAKh.js","/kube-test/assets/World-CelbmyuD.js","/kube-test/assets/World-DLN7Zsc5.css","/kube-test/assets/worldHint-Bg9BQ8-e.js","/kube-test/assets/WorldLeagues-Dbb5ltn0.js","/kube-test/assets/WorldLink-h0kMcllz.js","/kube-test/assets/worldModel-xOAb5cPU.js","/kube-test/assets/WorldWatch-D6WhUL2U.js","/kube-test/icons/monochrome-432.png","/kube-test/leaderboard-rules.html","/kube-test/privacy.html"];
// Sidene i bygget som ikke er appen (for eksempel personvern.html eller lisenser.txt), som stier i adressen.
const PAGES = ["/kube-test/leaderboard-rules.html","/kube-test/lisenser.txt","/kube-test/privacy.html"];
const ENTRY = "/kube-test/assets/index-BJEYnvsW.js";
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
