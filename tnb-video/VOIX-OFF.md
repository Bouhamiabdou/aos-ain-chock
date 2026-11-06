# Voix off TNB : feuille d'enregistrement (darija)

Durée de la vidéo avec la voix off actuelle : **66,4 s**. Chaque scène s'allonge
automatiquement pour contenir sa réplique (voir « Calage » plus bas).
Ton : proche, rassurant, sérieux (« un voisin de confiance »), débit naturel.

| # | Scène actuelle | Réplique actuelle | Réplique (darija) |
|---|---|---|---|
| 1 | 0:00,0 → 0:05,9 | 4,9 s | عندك شي أرض فالمدينة وما بنيتيهاش؟ راه عليك ضريبة سميتها **تي إن بي**! |
| 2 | 0:05,9 → 0:16,4 | 9,5 s | الـتي إن بي هي الرسم على الأراضي الحضرية غير المبنية. كتخلصو للجماعة، كل عام، على كل أرض عريانة داخل المدار الحضري. |
| 3 | 0:16,4 → 0:28,7 | 11,2 s | الحساب ساهل: المساحة بالمتر مربع، ضرب الثمن ديال المتر اللي كتحددو الجماعة حسب المنطقة. مثلا: ميتين متر، ضرب عشرة دراهم… ألفين درهم فالعام. |
| 4 | 0:28,7 → 0:34,0 | 4,3 s | خاصك تصرّح وتخلّص قبل فاتح مارس من كل عام. |
| 5 | 0:34,0 → 0:47,8 | 12,8 s | إلا ما خلصتيش؟ كتزاد عليك ذعيرة عشرة فالمية، وخمسة فالمية فالشهر الأول، ونص فالمية على كل شهر من بعد. ويقدرو يحجزو على الحساب ولا الممتلكات… وما تقدرش تبيع الأرض بلا شهادة الأداء. |
| 6 | 0:47,8 → 0:59,7 | 10,8 s | ولكن: إلا خديتي رخصة البناء، عندك إعفاء مؤقت ديال تلت سنين. وكاينين أراضي معفية، بحال اللي ممنوع فيها البناء، ولا اللي ما واصلاش ليها الما والضو. |
| 7 | 0:59,7 → 1:06,4 | 5,7 s | هاد الفلوس كترجع ليك طرقان وضو وخدمات. خلّص فالوقت… مدينتك كتستاهل. |

## Consignes techniques

- **Format** : un seul fichier WAV ou MP3, 44,1 ou 48 kHz, mono ou stéréo.
- **Calage** : laisser environ 0,3 s de silence au début. Enchaîner les répliques en
  respectant les fenêtres ci-dessus. Un léger écart reste possible, je réajuste
  la durée des scènes sur l'audio.
- **Alternative** : 7 fichiers séparés (`01.mp3` … `07.mp3`). Je cale alors chaque scène
  exactement sur la durée de sa réplique.
- **Prise de son** : pièce calme, téléphone à environ 20 cm de la bouche, sans musique.
- Les scènes 5 et 6 sont les plus denses : si elles débordent, raccourcir plutôt
  que d'accélérer le débit.

## Intégration

1. Déposer les 7 répliques dans `tnb-video/public/voiceover/` sous les noms `01.mp3` … `07.mp3`.
2. Rendre la vidéo (la voix off est activée par défaut, et la musique baisse alors automatiquement) :

   ```bash
   npx remotion render TnbVideo out/TNB-darija.mp4
   ```

   Pour la version sans voix (50 s, musique à plein volume) :

   ```bash
   npx remotion render TnbVideo out/TNB-sans-voix.mp4 --props='{"voiceover":false}'
   ```

Chaque réplique démarre 0,3 s après le début de sa scène.

## Calage

La durée d'une scène vaut le maximum entre sa durée de base (version sans voix :
5 / 7 / 10 / 5 / 11 / 7 / 5 s, soit 50 s) et la durée de sa réplique + 1 s
(0,3 s avant, 0,7 s après). Le calcul est fait au rendu par `calculateTnbMetadata`
(`src/TnbVideo.tsx`) : remplacer un fichier de `public/voiceover/` suffit,
les scènes se recalent seules.
La musique de fond (`public/music.mp3`) est une composition originale synthétisée
par `scripts/generate-music.py`, donc libre de droits.

## Voix utilisée

Les fichiers actuels de `public/voiceover/` ont été générés avec ElevenLabs :
voix **« Yassine – Clear and Modern »** (darija marocaine), modèle **Eleven v4**,
avec des indications de jeu `[serious]`, `[firm]` et `[stern]` (sanctions) en tête de réplique.

Chaque fichier est normalisé à -16 LUFS (`ffmpeg -af loudnorm=I=-16:TP=-1.5:LRA=11`).
