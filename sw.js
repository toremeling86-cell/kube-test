/* Kube – service worker, versjon 5cc60627dc2f */
const BASE = "/kube-test/";
// Navnet inneholder stien, så flere apper på samme domene (for eksempel github.io) ikke rydder hverandres lager.
const PREFIX = 'kube:' + BASE + ':';
const CACHE = PREFIX + '5cc60627dc2f';
const FILES = ["/kube-test/index.html","/kube-test/manifest.webmanifest","/kube-test/icons/icon-192.png","/kube-test/icons/maskable-192.png","/kube-test/icons/apple-touch-icon.png","/kube-test/icons/favicon-32.png","/kube-test/assets/AboutSheet-v5bqeoYy.js","/kube-test/assets/actions-mffWh0dv.js","/kube-test/assets/bandRoom-MSx7aQcU.js","/kube-test/assets/bests-Dj5KMdaH.js","/kube-test/assets/board-B-AWeD0U.js","/kube-test/assets/cheat-D9yFaCLB.css","/kube-test/assets/clouds-C5OtG5hg.webp","/kube-test/assets/cockpit-29RA0TnQ.css","/kube-test/assets/cockpit-CL7bvT2m.js","/kube-test/assets/contract-BQbLe_yS.js","/kube-test/assets/controls-DvcWXluN.js","/kube-test/assets/core-6Fox2abY.js","/kube-test/assets/cube-iSAOp81T.js","/kube-test/assets/debug-CKJpNOfX.js","/kube-test/assets/download-CmO0QBqH.js","/kube-test/assets/duel-CuuhWITX.css","/kube-test/assets/DuelLayers-DuCchyUB.js","/kube-test/assets/earth-CvNxVQs_.webp","/kube-test/assets/earth-tct0idjS.js","/kube-test/assets/earthDownload-D_WpowAt.js","/kube-test/assets/earthLevels-DTsBNkMT.js","/kube-test/assets/earthTextures-C8VOFIMu.js","/kube-test/assets/environment-BgXLsXEr.js","/kube-test/assets/facelets-Cz6QXO3t.js","/kube-test/assets/FailedBody-CDYhFQpm.js","/kube-test/assets/features-DPwMmuB2.js","/kube-test/assets/FeedbackSheet-BSS3JZEJ.js","/kube-test/assets/follow-CDrMepb0.js","/kube-test/assets/forest-Dr3OmTOH.js","/kube-test/assets/format-39h8_phX.js","/kube-test/assets/gps-B7bcf14N.css","/kube-test/assets/GpsScreen-DjgKvRKh.js","/kube-test/assets/GpsScreen-DtP78DDB.css","/kube-test/assets/GuideCheck-C1GtJGI-.js","/kube-test/assets/helpShowsEdit-R_kSfMXQ.js","/kube-test/assets/identity-C-wlmO54.js","/kube-test/assets/index-CBzTf9WN.js","/kube-test/assets/index-CoqS9Cjy.css","/kube-test/assets/inlineFake-Q0a7pV2c.js","/kube-test/assets/jetbrains-mono-latin-500-normal-BWZEU5yA.woff2","/kube-test/assets/jetbrains-mono-latin-ext-500-normal-Cut-4mMH.woff2","/kube-test/assets/JoinScreen-CQIvOFbT.js","/kube-test/assets/keyHints-BuJw964z.js","/kube-test/assets/keys-BMdKzqYR.js","/kube-test/assets/KTX2Loader-DPFYyMVZ.js","/kube-test/assets/lang-DyXZ4AgC.js","/kube-test/assets/leave-rM1kQ53i.js","/kube-test/assets/listName-BiwR3sKg.js","/kube-test/assets/marks-DhD57rME.js","/kube-test/assets/messages.nb-Bj6OcHe3.js","/kube-test/assets/migrations-GyIKsqe5.js","/kube-test/assets/MovePad-DWzw8WRU.js","/kube-test/assets/MovePad-q7KtqyIy.css","/kube-test/assets/MoveSigns-BSx5_hy0.js","/kube-test/assets/moveText-BJI-1Pr_.js","/kube-test/assets/MyReplay-RwRXB60-.js","/kube-test/assets/name-wsikKE0_.js","/kube-test/assets/notation-CaTfMHiJ.js","/kube-test/assets/ocean-C-WH6A2G.js","/kube-test/assets/orientation-Be_D1Qwf.js","/kube-test/assets/paint-5mbrvL5F.js","/kube-test/assets/pending-De7RhR05.js","/kube-test/assets/place-G67ufcJp.js","/kube-test/assets/placeCache-CDy4pKPf.js","/kube-test/assets/plan-CNiqgNfB.js","/kube-test/assets/PlayHelpRow-DGaIbLzq.js","/kube-test/assets/playPlan-ChyJ3EY5.js","/kube-test/assets/prefs-DjBNJ4rd.js","/kube-test/assets/preload-helper-BVxZAXUP.js","/kube-test/assets/random-UAc98jV9.js","/kube-test/assets/ranked-B9k0c_cG.css","/kube-test/assets/ranked-Brg89kUP.js","/kube-test/assets/rankedFlow-DhKX--wZ.js","/kube-test/assets/RankedScreen-BvffwLXJ.js","/kube-test/assets/rankedSession-CEw__Ml0.js","/kube-test/assets/rankedTwo-6o_Xkyco.js","/kube-test/assets/react-CFYXFdqO.js","/kube-test/assets/realStart-hy0gH4vT.js","/kube-test/assets/Recipe-BRuP3kLn.js","/kube-test/assets/recognize-Deq9g4ol.js","/kube-test/assets/replay-CbGWKuJL.js","/kube-test/assets/replayDb-C6U2CxT7.js","/kube-test/assets/replayLog-CKZBT3w1.js","/kube-test/assets/replays-BYaTBSdt.js","/kube-test/assets/rolldown-runtime-XKyaHtl9.js","/kube-test/assets/round-CxRoCRul.js","/kube-test/assets/roundFlow-CGoMR_MM.js","/kube-test/assets/roundMachine-CTEMPHSa.js","/kube-test/assets/rounds-Bk2NBpDt.js","/kube-test/assets/RoundScreen-COT7dNDO.css","/kube-test/assets/RoundScreen-D6hPKT0T.js","/kube-test/assets/roundView-B3qiFrb6.js","/kube-test/assets/rules-CrITLKl4.js","/kube-test/assets/rules2-8tR4ZX7t.js","/kube-test/assets/Say-CeN9p9Wz.js","/kube-test/assets/scan-BiJO6iHN.js","/kube-test/assets/ScanExperience-agN2oILr.js","/kube-test/assets/ScanScreen-C1U1Mi44.css","/kube-test/assets/ScanScreen-DLOChVAr.js","/kube-test/assets/scene-BP3W2H4D.js","/kube-test/assets/schibsted-grotesk-latin-500-normal-rf9C4Thp.woff2","/kube-test/assets/schibsted-grotesk-latin-600-normal-Czv9Obfv.woff2","/kube-test/assets/schibsted-grotesk-latin-700-normal-BkH0uJ1o.woff2","/kube-test/assets/schibsted-grotesk-latin-800-normal-CIaq-TR1.woff2","/kube-test/assets/schibsted-grotesk-latin-ext-500-normal-Ch1izu81.woff2","/kube-test/assets/schibsted-grotesk-latin-ext-600-normal-C5pQPdUJ.woff2","/kube-test/assets/schibsted-grotesk-latin-ext-700-normal-o210KhU4.woff2","/kube-test/assets/schibsted-grotesk-latin-ext-800-normal-CZWJQj-F.woff2","/kube-test/assets/scrambler-BBIbHGcB.js","/kube-test/assets/scrambler.worker-BdiG_Bnn.js","/kube-test/assets/scrambles-iUtASCCJ.js","/kube-test/assets/ScrambleSheet-Do0459V5.js","/kube-test/assets/ScramblesSheet-C1XETG_A.js","/kube-test/assets/ScrambleSteps-6jyJVimS.css","/kube-test/assets/ScrambleSteps-D4wtYchD.js","/kube-test/assets/ScrambleView-Deq1uglU.js","/kube-test/assets/sea-CiXG2hjt.webp","/kube-test/assets/SettingsSheet-GytgjVjd.js","/kube-test/assets/shareCard-DGGVF73d.js","/kube-test/assets/ShareSheet-CEc38YCD.js","/kube-test/assets/ShareSheet-D_a5F9BZ.css","/kube-test/assets/Sheets-B67r5461.js","/kube-test/assets/shell-CJWZtMIw.js","/kube-test/assets/sky-CqXenjfV.js","/kube-test/assets/SkyRecords-D5oIFJcV.css","/kube-test/assets/SkyRecords-DsozJBEq.js","/kube-test/assets/slices-DZrzc4lX.js","/kube-test/assets/SmartCubeMount-CWosoLII.js","/kube-test/assets/SmartCubeMount-DNSu9C-J.css","/kube-test/assets/SmartOffer-Bg5MZJkP.css","/kube-test/assets/SmartOffer-DMeCapIT.js","/kube-test/assets/snapshot-BD0ztSjw.js","/kube-test/assets/SolveSheet-inEvB4G3.js","/kube-test/assets/store-DyFvVpLw.js","/kube-test/assets/t-DgqFG8s4.js","/kube-test/assets/terrain.worker-CqBzxqHc.js","/kube-test/assets/terrainCache-us76TUyH.js","/kube-test/assets/text-DAGJ-mUy.js","/kube-test/assets/text-NxUW0eDd.js","/kube-test/assets/three-DTSqHtj7.js","/kube-test/assets/tokens-CVRN3UQW.js","/kube-test/assets/version-ZbMsV7AF.js","/kube-test/assets/viewControl-Cbi0OAOu.js","/kube-test/assets/WatchLayer-Bc55KKRV.css","/kube-test/assets/WatchLayer-DYk5Jn01.js","/kube-test/assets/week-BTzEG3MR.js","/kube-test/assets/wipeFlow-BI8zA85V.js","/kube-test/assets/wiping-C43ZGAKh.js","/kube-test/assets/World-bC8pdtJ2.css","/kube-test/assets/World-C6fu0aPb.js","/kube-test/assets/worldHint-_vQIgNxi.js","/kube-test/assets/WorldLeagues-C0oFLbc5.js","/kube-test/assets/WorldLink-BZ0MwJqq.js","/kube-test/assets/worldModel-DVRyV4Y9.js","/kube-test/assets/worldNav-D_KpfFRh.js","/kube-test/assets/WorldWatch-CCliKZ5C.js","/kube-test/icons/monochrome-432.png","/kube-test/leaderboard-rules.html","/kube-test/privacy.html"];
// Sidene i bygget som ikke er appen (for eksempel personvern.html eller lisenser.txt), som stier i adressen.
const PAGES = ["/kube-test/leaderboard-rules.html","/kube-test/lisenser.txt","/kube-test/privacy.html"];
const ENTRY = "/kube-test/assets/index-CBzTf9WN.js";
// Alle filene i bygget (uten steder/, som har sitt eget lager), som stier i adressen. Bare disse svarer service workeren på fra lageret, og bare disse lagres.
const KNOWN = new Set(["/kube-test/assets/AboutSheet-v5bqeoYy.js","/kube-test/assets/DuelLayers-DuCchyUB.js","/kube-test/assets/FailedBody-CDYhFQpm.js","/kube-test/assets/FeedbackSheet-BSS3JZEJ.js","/kube-test/assets/GpsScreen-DjgKvRKh.js","/kube-test/assets/GpsScreen-DtP78DDB.css","/kube-test/assets/GuideCheck-C1GtJGI-.js","/kube-test/assets/JoinScreen-CQIvOFbT.js","/kube-test/assets/KTX2Loader-DPFYyMVZ.js","/kube-test/assets/MovePad-DWzw8WRU.js","/kube-test/assets/MovePad-q7KtqyIy.css","/kube-test/assets/MoveSigns-BSx5_hy0.js","/kube-test/assets/MyReplay-RwRXB60-.js","/kube-test/assets/PlayHelpRow-DGaIbLzq.js","/kube-test/assets/RankedScreen-BvffwLXJ.js","/kube-test/assets/Recipe-BRuP3kLn.js","/kube-test/assets/RoundScreen-COT7dNDO.css","/kube-test/assets/RoundScreen-D6hPKT0T.js","/kube-test/assets/Say-CeN9p9Wz.js","/kube-test/assets/ScanExperience-agN2oILr.js","/kube-test/assets/ScanScreen-C1U1Mi44.css","/kube-test/assets/ScanScreen-DLOChVAr.js","/kube-test/assets/ScrambleSheet-Do0459V5.js","/kube-test/assets/ScrambleSteps-6jyJVimS.css","/kube-test/assets/ScrambleSteps-D4wtYchD.js","/kube-test/assets/ScrambleView-Deq1uglU.js","/kube-test/assets/ScramblesSheet-C1XETG_A.js","/kube-test/assets/SettingsSheet-GytgjVjd.js","/kube-test/assets/ShareSheet-CEc38YCD.js","/kube-test/assets/ShareSheet-D_a5F9BZ.css","/kube-test/assets/Sheets-B67r5461.js","/kube-test/assets/SkyRecords-D5oIFJcV.css","/kube-test/assets/SkyRecords-DsozJBEq.js","/kube-test/assets/SmartCubeMount-CWosoLII.js","/kube-test/assets/SmartCubeMount-DNSu9C-J.css","/kube-test/assets/SmartOffer-Bg5MZJkP.css","/kube-test/assets/SmartOffer-DMeCapIT.js","/kube-test/assets/SolveSheet-inEvB4G3.js","/kube-test/assets/WatchLayer-Bc55KKRV.css","/kube-test/assets/WatchLayer-DYk5Jn01.js","/kube-test/assets/World-C6fu0aPb.js","/kube-test/assets/World-bC8pdtJ2.css","/kube-test/assets/WorldLeagues-C0oFLbc5.js","/kube-test/assets/WorldLink-BZ0MwJqq.js","/kube-test/assets/WorldWatch-CCliKZ5C.js","/kube-test/assets/actions-mffWh0dv.js","/kube-test/assets/bandRoom-MSx7aQcU.js","/kube-test/assets/bests-Dj5KMdaH.js","/kube-test/assets/board-B-AWeD0U.js","/kube-test/assets/cheat-D9yFaCLB.css","/kube-test/assets/clouds-C5OtG5hg.webp","/kube-test/assets/cockpit-29RA0TnQ.css","/kube-test/assets/cockpit-CL7bvT2m.js","/kube-test/assets/contract-BQbLe_yS.js","/kube-test/assets/controls-DvcWXluN.js","/kube-test/assets/core-6Fox2abY.js","/kube-test/assets/cube-iSAOp81T.js","/kube-test/assets/debug-CKJpNOfX.js","/kube-test/assets/download-CmO0QBqH.js","/kube-test/assets/duel-CuuhWITX.css","/kube-test/assets/earth-CvNxVQs_.webp","/kube-test/assets/earth-tct0idjS.js","/kube-test/assets/earthDownload-D_WpowAt.js","/kube-test/assets/earthLevels-DTsBNkMT.js","/kube-test/assets/earthTextures-C8VOFIMu.js","/kube-test/assets/environment-BgXLsXEr.js","/kube-test/assets/facelets-Cz6QXO3t.js","/kube-test/assets/features-DPwMmuB2.js","/kube-test/assets/follow-CDrMepb0.js","/kube-test/assets/forest-Dr3OmTOH.js","/kube-test/assets/format-39h8_phX.js","/kube-test/assets/gps-B7bcf14N.css","/kube-test/assets/helpShowsEdit-R_kSfMXQ.js","/kube-test/assets/identity-C-wlmO54.js","/kube-test/assets/index-CBzTf9WN.js","/kube-test/assets/index-CoqS9Cjy.css","/kube-test/assets/inlineFake-Q0a7pV2c.js","/kube-test/assets/jetbrains-mono-cyrillic-500-normal-DJqRU3vO.woff","/kube-test/assets/jetbrains-mono-cyrillic-500-normal-DmUKJPL_.woff2","/kube-test/assets/jetbrains-mono-greek-500-normal-D7SFKleX.woff","/kube-test/assets/jetbrains-mono-greek-500-normal-JpySY46c.woff2","/kube-test/assets/jetbrains-mono-latin-500-normal-BWZEU5yA.woff2","/kube-test/assets/jetbrains-mono-latin-500-normal-CJOVTJB7.woff","/kube-test/assets/jetbrains-mono-latin-ext-500-normal-Cut-4mMH.woff2","/kube-test/assets/jetbrains-mono-latin-ext-500-normal-ckzbgY84.woff","/kube-test/assets/jetbrains-mono-vietnamese-500-normal-DNRqzVM1.woff","/kube-test/assets/keyHints-BuJw964z.js","/kube-test/assets/keys-BMdKzqYR.js","/kube-test/assets/lang-DyXZ4AgC.js","/kube-test/assets/leave-rM1kQ53i.js","/kube-test/assets/listName-BiwR3sKg.js","/kube-test/assets/marks-DhD57rME.js","/kube-test/assets/messages.nb-Bj6OcHe3.js","/kube-test/assets/migrations-GyIKsqe5.js","/kube-test/assets/moveText-BJI-1Pr_.js","/kube-test/assets/name-wsikKE0_.js","/kube-test/assets/notation-CaTfMHiJ.js","/kube-test/assets/ocean-C-WH6A2G.js","/kube-test/assets/orientation-Be_D1Qwf.js","/kube-test/assets/paint-5mbrvL5F.js","/kube-test/assets/pending-De7RhR05.js","/kube-test/assets/place-G67ufcJp.js","/kube-test/assets/placeCache-CDy4pKPf.js","/kube-test/assets/plan-CNiqgNfB.js","/kube-test/assets/playPlan-ChyJ3EY5.js","/kube-test/assets/prefs-DjBNJ4rd.js","/kube-test/assets/preload-helper-BVxZAXUP.js","/kube-test/assets/random-UAc98jV9.js","/kube-test/assets/ranked-B9k0c_cG.css","/kube-test/assets/ranked-Brg89kUP.js","/kube-test/assets/rankedFlow-DhKX--wZ.js","/kube-test/assets/rankedSession-CEw__Ml0.js","/kube-test/assets/rankedTwo-6o_Xkyco.js","/kube-test/assets/react-CFYXFdqO.js","/kube-test/assets/realStart-hy0gH4vT.js","/kube-test/assets/recognize-Deq9g4ol.js","/kube-test/assets/replay-CbGWKuJL.js","/kube-test/assets/replayDb-C6U2CxT7.js","/kube-test/assets/replayLog-CKZBT3w1.js","/kube-test/assets/replays-BYaTBSdt.js","/kube-test/assets/rolldown-runtime-XKyaHtl9.js","/kube-test/assets/round-CxRoCRul.js","/kube-test/assets/roundFlow-CGoMR_MM.js","/kube-test/assets/roundMachine-CTEMPHSa.js","/kube-test/assets/roundView-B3qiFrb6.js","/kube-test/assets/rounds-Bk2NBpDt.js","/kube-test/assets/rules-CrITLKl4.js","/kube-test/assets/rules2-8tR4ZX7t.js","/kube-test/assets/scan-BiJO6iHN.js","/kube-test/assets/scene-BP3W2H4D.js","/kube-test/assets/schibsted-grotesk-latin-500-normal-Ba39e-CX.woff","/kube-test/assets/schibsted-grotesk-latin-500-normal-rf9C4Thp.woff2","/kube-test/assets/schibsted-grotesk-latin-600-normal-BieE9YjJ.woff","/kube-test/assets/schibsted-grotesk-latin-600-normal-Czv9Obfv.woff2","/kube-test/assets/schibsted-grotesk-latin-700-normal-BkH0uJ1o.woff2","/kube-test/assets/schibsted-grotesk-latin-700-normal-Dz-okVa0.woff","/kube-test/assets/schibsted-grotesk-latin-800-normal-CIaq-TR1.woff2","/kube-test/assets/schibsted-grotesk-latin-800-normal-Dl5-MP1T.woff","/kube-test/assets/schibsted-grotesk-latin-ext-500-normal-BjmYCtCC.woff","/kube-test/assets/schibsted-grotesk-latin-ext-500-normal-Ch1izu81.woff2","/kube-test/assets/schibsted-grotesk-latin-ext-600-normal-C5pQPdUJ.woff2","/kube-test/assets/schibsted-grotesk-latin-ext-600-normal-DQsnXf5q.woff","/kube-test/assets/schibsted-grotesk-latin-ext-700-normal-DDW2aNyx.woff","/kube-test/assets/schibsted-grotesk-latin-ext-700-normal-o210KhU4.woff2","/kube-test/assets/schibsted-grotesk-latin-ext-800-normal-CZWJQj-F.woff2","/kube-test/assets/schibsted-grotesk-latin-ext-800-normal-DS3YHxa9.woff","/kube-test/assets/scrambler-BBIbHGcB.js","/kube-test/assets/scrambler.worker-BdiG_Bnn.js","/kube-test/assets/scrambles-iUtASCCJ.js","/kube-test/assets/sea-CiXG2hjt.webp","/kube-test/assets/shareCard-DGGVF73d.js","/kube-test/assets/shell-CJWZtMIw.js","/kube-test/assets/sky-CqXenjfV.js","/kube-test/assets/slices-DZrzc4lX.js","/kube-test/assets/snapshot-BD0ztSjw.js","/kube-test/assets/store-DyFvVpLw.js","/kube-test/assets/t-DgqFG8s4.js","/kube-test/assets/terrain.worker-CqBzxqHc.js","/kube-test/assets/terrainCache-us76TUyH.js","/kube-test/assets/text-DAGJ-mUy.js","/kube-test/assets/text-NxUW0eDd.js","/kube-test/assets/three-DTSqHtj7.js","/kube-test/assets/tokens-CVRN3UQW.js","/kube-test/assets/version-ZbMsV7AF.js","/kube-test/assets/viewControl-Cbi0OAOu.js","/kube-test/assets/week-BTzEG3MR.js","/kube-test/assets/wipeFlow-BI8zA85V.js","/kube-test/assets/wiping-C43ZGAKh.js","/kube-test/assets/worldHint-_vQIgNxi.js","/kube-test/assets/worldModel-DVRyV4Y9.js","/kube-test/assets/worldNav-D_KpfFRh.js","/kube-test/icons/apple-touch-icon.png","/kube-test/icons/favicon-32.png","/kube-test/icons/favicon-64.png","/kube-test/icons/icon-1024.png","/kube-test/icons/icon-192.png","/kube-test/icons/icon-512.png","/kube-test/icons/maskable-192.png","/kube-test/icons/maskable-512.png","/kube-test/icons/monochrome-432.png","/kube-test/index.html","/kube-test/leaderboard-rules.html","/kube-test/lisenser.txt","/kube-test/manifest.webmanifest","/kube-test/privacy.html","/kube-test/screenshots/bred.jpg","/kube-test/screenshots/telefon.jpg","/kube-test/splash/splash-1125x2436.png","/kube-test/splash/splash-1170x2532.png","/kube-test/splash/splash-1179x2556.png","/kube-test/splash/splash-1206x2622.png","/kube-test/splash/splash-1284x2778.png","/kube-test/splash/splash-1290x2796.png","/kube-test/splash/splash-1320x2868.png","/kube-test/splash/splash-750x1334.png","/kube-test/splash/splash-828x1792.png"]);
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
  // Siden spør hvilken startfil denne versjonen har: er det den siden alt kjører, tar den over med en gang, uten omlasting (main.tsx).
  if (event.data === 'entry' && event.ports && event.ports[0]) event.ports[0].postMessage(ENTRY);
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
    // Alle andre sidebesøk er appen: den lagrede index.html med en gang, uten å vente på nettet. Første gang, uten noe lagret, fra nettet.
    event.respondWith(caches.match(BASE + 'index.html', { cacheName: CACHE }).then((hit) => hit || fetch(req)));
    return;
  }
  if (url.pathname.startsWith(PLACES_DIR)) {
    event.respondWith(placeFetched(req));
    return;
  }
  // Bare filene i bygget, uten «?», svares fra lageret og lagres. Alt annet går til nettet som om service workeren ikke var der.
  if (url.search || !KNOWN.has(url.pathname)) return;
  event.respondWith(cachedOrFetched(req, req));
});
