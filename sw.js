/* Kube – service worker, versjon f445bce9b827 */
const BASE = "/kube-test/";
// Navnet inneholder stien, så flere apper på samme domene (for eksempel github.io) ikke rydder hverandres lager.
const PREFIX = 'kube:' + BASE + ':';
const CACHE = PREFIX + 'f445bce9b827';
const FILES = ["/kube-test/index.html","/kube-test/manifest.webmanifest","/kube-test/icons/icon-192.png","/kube-test/icons/maskable-192.png","/kube-test/icons/apple-touch-icon.png","/kube-test/icons/favicon-32.png","/kube-test/assets/AboutSheet-DMfTck3H.js","/kube-test/assets/actions-BCMmTaRc.js","/kube-test/assets/bandRoom-CSE1S1Tf.js","/kube-test/assets/bests-B2uJ3Hnu.js","/kube-test/assets/board-gaE7R1aT.js","/kube-test/assets/cheat-D9yFaCLB.css","/kube-test/assets/clouds-C5OtG5hg.webp","/kube-test/assets/cockpit-29RA0TnQ.css","/kube-test/assets/cockpit-CL7bvT2m.js","/kube-test/assets/contract-BQbLe_yS.js","/kube-test/assets/controls-DvcWXluN.js","/kube-test/assets/core-6Fox2abY.js","/kube-test/assets/cube-iSAOp81T.js","/kube-test/assets/debug-CKJpNOfX.js","/kube-test/assets/download-CmO0QBqH.js","/kube-test/assets/duel-CuuhWITX.css","/kube-test/assets/DuelLayers-D55VdsMn.js","/kube-test/assets/earth-CvNxVQs_.webp","/kube-test/assets/earth-DT_vTE-2.js","/kube-test/assets/earthDownload-D2uOBZHu.js","/kube-test/assets/earthLevels-DTsBNkMT.js","/kube-test/assets/earthTextures-aQ5FlPSm.js","/kube-test/assets/environment-tI-qWeQ6.js","/kube-test/assets/facelets-Cz6QXO3t.js","/kube-test/assets/FailedBody-BSN8sMaV.js","/kube-test/assets/features-DPwMmuB2.js","/kube-test/assets/FeedbackSheet-Csuz5D_5.js","/kube-test/assets/follow-C91Q2vKJ.js","/kube-test/assets/forest-BTsTevlH.js","/kube-test/assets/format-DSrCoThU.js","/kube-test/assets/frameTime-CARriO8x.js","/kube-test/assets/gps-B7bcf14N.css","/kube-test/assets/GpsScreen-DtP78DDB.css","/kube-test/assets/GpsScreen-eeHthGLW.js","/kube-test/assets/GuideCheck-D-tShAkU.js","/kube-test/assets/helpShowsEdit-C-d5Gs7o.js","/kube-test/assets/identity-C-wlmO54.js","/kube-test/assets/index-CoqS9Cjy.css","/kube-test/assets/index-wd8dyAQc.js","/kube-test/assets/inlineFake-BSMm3Ky1.js","/kube-test/assets/jetbrains-mono-latin-500-normal-BWZEU5yA.woff2","/kube-test/assets/jetbrains-mono-latin-ext-500-normal-Cut-4mMH.woff2","/kube-test/assets/JoinScreen-fg1x_wD5.js","/kube-test/assets/keyHints-BuJw964z.js","/kube-test/assets/keys-BMdKzqYR.js","/kube-test/assets/KTX2Loader-61a0m-QN.js","/kube-test/assets/lang-DyXZ4AgC.js","/kube-test/assets/lazyDebug-C7Q0OidV.js","/kube-test/assets/leave-CZh-RnFu.js","/kube-test/assets/legacyLooks-B4j3Z-x5.js","/kube-test/assets/listName-Ybp6M9Ze.js","/kube-test/assets/looks-CApPgfxF.js","/kube-test/assets/marks-DhD57rME.js","/kube-test/assets/measure-BcabV4w3.js","/kube-test/assets/messages.nb-DQ6kVM0N.js","/kube-test/assets/migrations-BesRAjC0.js","/kube-test/assets/MovePad-BX5tnlkU.js","/kube-test/assets/MovePad-q7KtqyIy.css","/kube-test/assets/MoveSigns-BSx5_hy0.js","/kube-test/assets/moveText-BJI-1Pr_.js","/kube-test/assets/MyReplay-vR-133Qr.js","/kube-test/assets/name-wsikKE0_.js","/kube-test/assets/notation-CaTfMHiJ.js","/kube-test/assets/ocean-DqjJ2-rz.js","/kube-test/assets/orientation-CKZt_ff1.js","/kube-test/assets/paint-BuiKxwIS.js","/kube-test/assets/pending-CXVNzFrJ.js","/kube-test/assets/place-G67ufcJp.js","/kube-test/assets/placeCache-CDy4pKPf.js","/kube-test/assets/plan-CNiqgNfB.js","/kube-test/assets/PlayHelpRow-GyaPuIPx.js","/kube-test/assets/playPlan-ChyJ3EY5.js","/kube-test/assets/precompile-DPZwKZPA.js","/kube-test/assets/prefs-DjBNJ4rd.js","/kube-test/assets/preload-helper-BVxZAXUP.js","/kube-test/assets/random-UAc98jV9.js","/kube-test/assets/ranked-B9k0c_cG.css","/kube-test/assets/ranked-Bo_4roCX.js","/kube-test/assets/rankedFlow-D7UdLgEO.js","/kube-test/assets/RankedScreen-D0i0kI9G.js","/kube-test/assets/rankedSession-CHB0aQ-Y.js","/kube-test/assets/rankedTwo-6o_Xkyco.js","/kube-test/assets/react-CFYXFdqO.js","/kube-test/assets/realStart-BIBrkg69.js","/kube-test/assets/Recipe-CBa3hRVW.js","/kube-test/assets/recognize-Deq9g4ol.js","/kube-test/assets/replay-CbGWKuJL.js","/kube-test/assets/replayDb-C6U2CxT7.js","/kube-test/assets/replayLog-CKZBT3w1.js","/kube-test/assets/replays-CoD-6UAw.js","/kube-test/assets/rolldown-runtime-XKyaHtl9.js","/kube-test/assets/round-CxRoCRul.js","/kube-test/assets/roundFlow-CR3VvJ6u.js","/kube-test/assets/roundMachine-CZktug7l.js","/kube-test/assets/rounds-Bk2NBpDt.js","/kube-test/assets/RoundScreen-COT7dNDO.css","/kube-test/assets/RoundScreen-DZLDSfDA.js","/kube-test/assets/roundView-Cp-WgpMm.js","/kube-test/assets/rules-CrITLKl4.js","/kube-test/assets/rules2-8tR4ZX7t.js","/kube-test/assets/Say-DeplqV0j.js","/kube-test/assets/scan-BiJO6iHN.js","/kube-test/assets/ScanExperience-DixgPsBv.js","/kube-test/assets/ScanScreen-C1U1Mi44.css","/kube-test/assets/ScanScreen-CK_YUNBu.js","/kube-test/assets/scene-OIHOMOpf.js","/kube-test/assets/schibsted-grotesk-latin-500-normal-rf9C4Thp.woff2","/kube-test/assets/schibsted-grotesk-latin-600-normal-Czv9Obfv.woff2","/kube-test/assets/schibsted-grotesk-latin-700-normal-BkH0uJ1o.woff2","/kube-test/assets/schibsted-grotesk-latin-800-normal-CIaq-TR1.woff2","/kube-test/assets/schibsted-grotesk-latin-ext-500-normal-Ch1izu81.woff2","/kube-test/assets/schibsted-grotesk-latin-ext-600-normal-C5pQPdUJ.woff2","/kube-test/assets/schibsted-grotesk-latin-ext-700-normal-o210KhU4.woff2","/kube-test/assets/schibsted-grotesk-latin-ext-800-normal-CZWJQj-F.woff2","/kube-test/assets/scrambler-BBIbHGcB.js","/kube-test/assets/scrambler.worker-BdiG_Bnn.js","/kube-test/assets/scrambles-aU79jX-A.js","/kube-test/assets/ScrambleSheet-C4xW-g98.js","/kube-test/assets/ScramblesSheet-BZDZc6xT.js","/kube-test/assets/ScrambleSteps-6jyJVimS.css","/kube-test/assets/ScrambleSteps-B1D9ltAy.js","/kube-test/assets/ScrambleView-lKtGRDDU.js","/kube-test/assets/sea-CiXG2hjt.webp","/kube-test/assets/SettingsSheet-DbAlMPg4.js","/kube-test/assets/shareCard-GaieHnbc.js","/kube-test/assets/ShareSheet-Bq9osWDu.js","/kube-test/assets/ShareSheet-D_a5F9BZ.css","/kube-test/assets/Sheets-BDrtVotV.js","/kube-test/assets/shell-CJWZtMIw.js","/kube-test/assets/sky-CK57yIHO.js","/kube-test/assets/SkyRecords-BtGRBrEf.js","/kube-test/assets/SkyRecords-D5oIFJcV.css","/kube-test/assets/slices-DZrzc4lX.js","/kube-test/assets/SmartCubeMount-DNSu9C-J.css","/kube-test/assets/SmartCubeMount-Nm24A-5i.js","/kube-test/assets/SmartOffer-Bg5MZJkP.css","/kube-test/assets/SmartOffer-BxJyKjnC.js","/kube-test/assets/snapshot-Dvdu1RNk.js","/kube-test/assets/SolveSheet-6jHfYr30.js","/kube-test/assets/stopt-EXUosqzn.js","/kube-test/assets/store-tSylkEZX.js","/kube-test/assets/studioRig-ChHxXgFe.js","/kube-test/assets/t-o-kB0VPQ.js","/kube-test/assets/terrain.worker-CqBzxqHc.js","/kube-test/assets/terrainCache-us76TUyH.js","/kube-test/assets/text-CiZsrjcP.js","/kube-test/assets/text-DAGJ-mUy.js","/kube-test/assets/three-BdY2bnFj.js","/kube-test/assets/tokens-CVRN3UQW.js","/kube-test/assets/version-D18o2Iy6.js","/kube-test/assets/viewControl-C2-VpfuF.js","/kube-test/assets/WatchLayer-Bc55KKRV.css","/kube-test/assets/WatchLayer-UvVFqfBm.js","/kube-test/assets/week-BTzEG3MR.js","/kube-test/assets/wipeFlow-CSfpdSZX.js","/kube-test/assets/wiping-C43ZGAKh.js","/kube-test/assets/World-A_gs5uHQ.js","/kube-test/assets/World-bC8pdtJ2.css","/kube-test/assets/worldHint-_vQIgNxi.js","/kube-test/assets/WorldLeagues-DUjKkRGt.css","/kube-test/assets/WorldLeagues-Frf5Jyz4.js","/kube-test/assets/WorldLink-BM5tuzPa.js","/kube-test/assets/worldModel-CnBqUE_d.js","/kube-test/assets/worldNav-U2xv-MWc.js","/kube-test/assets/WorldWatch-cbtH-uBu.js","/kube-test/icons/monochrome-432.png","/kube-test/leaderboard-rules.html","/kube-test/privacy.html"];
// Sidene i bygget som ikke er appen (for eksempel personvern.html eller lisenser.txt), som stier i adressen.
const PAGES = ["/kube-test/leaderboard-rules.html","/kube-test/lisenser.txt","/kube-test/privacy.html"];
const ENTRY = "/kube-test/assets/index-wd8dyAQc.js";
// Alle filene i bygget (uten steder/, som har sitt eget lager), som stier i adressen. Bare disse svarer service workeren på fra lageret, og bare disse lagres.
const KNOWN = new Set(["/kube-test/assets/AboutSheet-DMfTck3H.js","/kube-test/assets/DuelLayers-D55VdsMn.js","/kube-test/assets/FailedBody-BSN8sMaV.js","/kube-test/assets/FeedbackSheet-Csuz5D_5.js","/kube-test/assets/GpsScreen-DtP78DDB.css","/kube-test/assets/GpsScreen-eeHthGLW.js","/kube-test/assets/GuideCheck-D-tShAkU.js","/kube-test/assets/JoinScreen-fg1x_wD5.js","/kube-test/assets/KTX2Loader-61a0m-QN.js","/kube-test/assets/MovePad-BX5tnlkU.js","/kube-test/assets/MovePad-q7KtqyIy.css","/kube-test/assets/MoveSigns-BSx5_hy0.js","/kube-test/assets/MyReplay-vR-133Qr.js","/kube-test/assets/PlayHelpRow-GyaPuIPx.js","/kube-test/assets/RankedScreen-D0i0kI9G.js","/kube-test/assets/Recipe-CBa3hRVW.js","/kube-test/assets/RoundScreen-COT7dNDO.css","/kube-test/assets/RoundScreen-DZLDSfDA.js","/kube-test/assets/Say-DeplqV0j.js","/kube-test/assets/ScanExperience-DixgPsBv.js","/kube-test/assets/ScanScreen-C1U1Mi44.css","/kube-test/assets/ScanScreen-CK_YUNBu.js","/kube-test/assets/ScrambleSheet-C4xW-g98.js","/kube-test/assets/ScrambleSteps-6jyJVimS.css","/kube-test/assets/ScrambleSteps-B1D9ltAy.js","/kube-test/assets/ScrambleView-lKtGRDDU.js","/kube-test/assets/ScramblesSheet-BZDZc6xT.js","/kube-test/assets/SettingsSheet-DbAlMPg4.js","/kube-test/assets/ShareSheet-Bq9osWDu.js","/kube-test/assets/ShareSheet-D_a5F9BZ.css","/kube-test/assets/Sheets-BDrtVotV.js","/kube-test/assets/SkyRecords-BtGRBrEf.js","/kube-test/assets/SkyRecords-D5oIFJcV.css","/kube-test/assets/SmartCubeMount-DNSu9C-J.css","/kube-test/assets/SmartCubeMount-Nm24A-5i.js","/kube-test/assets/SmartOffer-Bg5MZJkP.css","/kube-test/assets/SmartOffer-BxJyKjnC.js","/kube-test/assets/SolveSheet-6jHfYr30.js","/kube-test/assets/WatchLayer-Bc55KKRV.css","/kube-test/assets/WatchLayer-UvVFqfBm.js","/kube-test/assets/World-A_gs5uHQ.js","/kube-test/assets/World-bC8pdtJ2.css","/kube-test/assets/WorldLeagues-DUjKkRGt.css","/kube-test/assets/WorldLeagues-Frf5Jyz4.js","/kube-test/assets/WorldLink-BM5tuzPa.js","/kube-test/assets/WorldWatch-cbtH-uBu.js","/kube-test/assets/actions-BCMmTaRc.js","/kube-test/assets/bandRoom-CSE1S1Tf.js","/kube-test/assets/bests-B2uJ3Hnu.js","/kube-test/assets/board-gaE7R1aT.js","/kube-test/assets/cheat-D9yFaCLB.css","/kube-test/assets/clouds-C5OtG5hg.webp","/kube-test/assets/cockpit-29RA0TnQ.css","/kube-test/assets/cockpit-CL7bvT2m.js","/kube-test/assets/contract-BQbLe_yS.js","/kube-test/assets/controls-DvcWXluN.js","/kube-test/assets/core-6Fox2abY.js","/kube-test/assets/cube-iSAOp81T.js","/kube-test/assets/debug-CKJpNOfX.js","/kube-test/assets/download-CmO0QBqH.js","/kube-test/assets/duel-CuuhWITX.css","/kube-test/assets/earth-CvNxVQs_.webp","/kube-test/assets/earth-DT_vTE-2.js","/kube-test/assets/earthDownload-D2uOBZHu.js","/kube-test/assets/earthLevels-DTsBNkMT.js","/kube-test/assets/earthTextures-aQ5FlPSm.js","/kube-test/assets/environment-tI-qWeQ6.js","/kube-test/assets/facelets-Cz6QXO3t.js","/kube-test/assets/features-DPwMmuB2.js","/kube-test/assets/follow-C91Q2vKJ.js","/kube-test/assets/forest-BTsTevlH.js","/kube-test/assets/format-DSrCoThU.js","/kube-test/assets/frameTime-CARriO8x.js","/kube-test/assets/gps-B7bcf14N.css","/kube-test/assets/helpShowsEdit-C-d5Gs7o.js","/kube-test/assets/identity-C-wlmO54.js","/kube-test/assets/index-CoqS9Cjy.css","/kube-test/assets/index-wd8dyAQc.js","/kube-test/assets/inlineFake-BSMm3Ky1.js","/kube-test/assets/jetbrains-mono-cyrillic-500-normal-DJqRU3vO.woff","/kube-test/assets/jetbrains-mono-cyrillic-500-normal-DmUKJPL_.woff2","/kube-test/assets/jetbrains-mono-greek-500-normal-D7SFKleX.woff","/kube-test/assets/jetbrains-mono-greek-500-normal-JpySY46c.woff2","/kube-test/assets/jetbrains-mono-latin-500-normal-BWZEU5yA.woff2","/kube-test/assets/jetbrains-mono-latin-500-normal-CJOVTJB7.woff","/kube-test/assets/jetbrains-mono-latin-ext-500-normal-Cut-4mMH.woff2","/kube-test/assets/jetbrains-mono-latin-ext-500-normal-ckzbgY84.woff","/kube-test/assets/jetbrains-mono-vietnamese-500-normal-DNRqzVM1.woff","/kube-test/assets/keyHints-BuJw964z.js","/kube-test/assets/keys-BMdKzqYR.js","/kube-test/assets/lang-DyXZ4AgC.js","/kube-test/assets/lazyDebug-C7Q0OidV.js","/kube-test/assets/leave-CZh-RnFu.js","/kube-test/assets/legacyLooks-B4j3Z-x5.js","/kube-test/assets/listName-Ybp6M9Ze.js","/kube-test/assets/looks-CApPgfxF.js","/kube-test/assets/marks-DhD57rME.js","/kube-test/assets/measure-BcabV4w3.js","/kube-test/assets/messages.nb-DQ6kVM0N.js","/kube-test/assets/migrations-BesRAjC0.js","/kube-test/assets/moveText-BJI-1Pr_.js","/kube-test/assets/name-wsikKE0_.js","/kube-test/assets/notation-CaTfMHiJ.js","/kube-test/assets/ocean-DqjJ2-rz.js","/kube-test/assets/orientation-CKZt_ff1.js","/kube-test/assets/paint-BuiKxwIS.js","/kube-test/assets/pending-CXVNzFrJ.js","/kube-test/assets/place-G67ufcJp.js","/kube-test/assets/placeCache-CDy4pKPf.js","/kube-test/assets/plan-CNiqgNfB.js","/kube-test/assets/playPlan-ChyJ3EY5.js","/kube-test/assets/precompile-DPZwKZPA.js","/kube-test/assets/prefs-DjBNJ4rd.js","/kube-test/assets/preload-helper-BVxZAXUP.js","/kube-test/assets/random-UAc98jV9.js","/kube-test/assets/ranked-B9k0c_cG.css","/kube-test/assets/ranked-Bo_4roCX.js","/kube-test/assets/rankedFlow-D7UdLgEO.js","/kube-test/assets/rankedSession-CHB0aQ-Y.js","/kube-test/assets/rankedTwo-6o_Xkyco.js","/kube-test/assets/react-CFYXFdqO.js","/kube-test/assets/realStart-BIBrkg69.js","/kube-test/assets/recognize-Deq9g4ol.js","/kube-test/assets/replay-CbGWKuJL.js","/kube-test/assets/replayDb-C6U2CxT7.js","/kube-test/assets/replayLog-CKZBT3w1.js","/kube-test/assets/replays-CoD-6UAw.js","/kube-test/assets/rolldown-runtime-XKyaHtl9.js","/kube-test/assets/round-CxRoCRul.js","/kube-test/assets/roundFlow-CR3VvJ6u.js","/kube-test/assets/roundMachine-CZktug7l.js","/kube-test/assets/roundView-Cp-WgpMm.js","/kube-test/assets/rounds-Bk2NBpDt.js","/kube-test/assets/rules-CrITLKl4.js","/kube-test/assets/rules2-8tR4ZX7t.js","/kube-test/assets/scan-BiJO6iHN.js","/kube-test/assets/scene-OIHOMOpf.js","/kube-test/assets/schibsted-grotesk-latin-500-normal-Ba39e-CX.woff","/kube-test/assets/schibsted-grotesk-latin-500-normal-rf9C4Thp.woff2","/kube-test/assets/schibsted-grotesk-latin-600-normal-BieE9YjJ.woff","/kube-test/assets/schibsted-grotesk-latin-600-normal-Czv9Obfv.woff2","/kube-test/assets/schibsted-grotesk-latin-700-normal-BkH0uJ1o.woff2","/kube-test/assets/schibsted-grotesk-latin-700-normal-Dz-okVa0.woff","/kube-test/assets/schibsted-grotesk-latin-800-normal-CIaq-TR1.woff2","/kube-test/assets/schibsted-grotesk-latin-800-normal-Dl5-MP1T.woff","/kube-test/assets/schibsted-grotesk-latin-ext-500-normal-BjmYCtCC.woff","/kube-test/assets/schibsted-grotesk-latin-ext-500-normal-Ch1izu81.woff2","/kube-test/assets/schibsted-grotesk-latin-ext-600-normal-C5pQPdUJ.woff2","/kube-test/assets/schibsted-grotesk-latin-ext-600-normal-DQsnXf5q.woff","/kube-test/assets/schibsted-grotesk-latin-ext-700-normal-DDW2aNyx.woff","/kube-test/assets/schibsted-grotesk-latin-ext-700-normal-o210KhU4.woff2","/kube-test/assets/schibsted-grotesk-latin-ext-800-normal-CZWJQj-F.woff2","/kube-test/assets/schibsted-grotesk-latin-ext-800-normal-DS3YHxa9.woff","/kube-test/assets/scrambler-BBIbHGcB.js","/kube-test/assets/scrambler.worker-BdiG_Bnn.js","/kube-test/assets/scrambles-aU79jX-A.js","/kube-test/assets/sea-CiXG2hjt.webp","/kube-test/assets/shareCard-GaieHnbc.js","/kube-test/assets/shell-CJWZtMIw.js","/kube-test/assets/sky-CK57yIHO.js","/kube-test/assets/slices-DZrzc4lX.js","/kube-test/assets/snapshot-Dvdu1RNk.js","/kube-test/assets/stopt-EXUosqzn.js","/kube-test/assets/store-tSylkEZX.js","/kube-test/assets/studioRig-ChHxXgFe.js","/kube-test/assets/t-o-kB0VPQ.js","/kube-test/assets/terrain.worker-CqBzxqHc.js","/kube-test/assets/terrainCache-us76TUyH.js","/kube-test/assets/text-CiZsrjcP.js","/kube-test/assets/text-DAGJ-mUy.js","/kube-test/assets/three-BdY2bnFj.js","/kube-test/assets/tokens-CVRN3UQW.js","/kube-test/assets/version-D18o2Iy6.js","/kube-test/assets/viewControl-C2-VpfuF.js","/kube-test/assets/week-BTzEG3MR.js","/kube-test/assets/wipeFlow-CSfpdSZX.js","/kube-test/assets/wiping-C43ZGAKh.js","/kube-test/assets/worldHint-_vQIgNxi.js","/kube-test/assets/worldModel-CnBqUE_d.js","/kube-test/assets/worldNav-U2xv-MWc.js","/kube-test/icons/apple-touch-icon.png","/kube-test/icons/favicon-32.png","/kube-test/icons/favicon-64.png","/kube-test/icons/icon-1024.png","/kube-test/icons/icon-192.png","/kube-test/icons/icon-512.png","/kube-test/icons/maskable-192.png","/kube-test/icons/maskable-512.png","/kube-test/icons/monochrome-432.png","/kube-test/index.html","/kube-test/leaderboard-rules.html","/kube-test/lisenser.txt","/kube-test/manifest.webmanifest","/kube-test/privacy.html","/kube-test/screenshots/bred.jpg","/kube-test/screenshots/telefon.jpg","/kube-test/splash/splash-1125x2436.png","/kube-test/splash/splash-1170x2532.png","/kube-test/splash/splash-1179x2556.png","/kube-test/splash/splash-1206x2622.png","/kube-test/splash/splash-1284x2778.png","/kube-test/splash/splash-1290x2796.png","/kube-test/splash/splash-1320x2868.png","/kube-test/splash/splash-750x1334.png","/kube-test/splash/splash-828x1792.png"]);
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
    // NETT_FORST_TESTLENKE: nettet først for sidebesøk, bare på testlenken (build/pwa.ts, TEST_BASE).
    const fresh = Promise.race([
      fetch(BASE + 'index.html', { cache: 'no-cache' })
        .then((res) => (res.status === 200 && !res.redirected ? res : null))
        .catch(() => null),
      new Promise((resolve) => setTimeout(() => resolve(null), 3000)),
    ]).catch(() => null);
    event.respondWith(fresh.then((res) => res || caches.match(BASE + 'index.html', { cacheName: CACHE }).then((hit) => hit || fetch(req))));
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
