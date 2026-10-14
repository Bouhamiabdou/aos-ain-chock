# Voix off TNB : feuille d'enregistrement (darija)

Durée totale : **50 s**. Chaque réplique doit tenir dans la fenêtre de sa scène.
Ton : proche, rassurant, sérieux (« un voisin de confiance »), débit naturel.

| # | Fenêtre | Durée max | Réplique (darija) |
|---|---|---|---|
| 1 | 0:00 → 0:05 | 5 s | عندك شي أرض فالمدينة وما بنيتيهاش؟ راه عليك ضريبة سميتها **تي إن بي**! |
| 2 | 0:05 → 0:12 | 7 s | الـتي إن بي هي الرسم على الأراضي الحضرية غير المبنية. كتخلصو للجماعة، كل عام، على كل أرض عريانة داخل المدار الحضري. |
| 3 | 0:12 → 0:22 | 10 s | الحساب ساهل: المساحة بالمتر مربع، ضرب الثمن ديال المتر اللي كتحددو الجماعة حسب المنطقة. مثلا: ميتين متر، ضرب عشرة دراهم… ألفين درهم فالعام. |
| 4 | 0:22 → 0:27 | 5 s | خاصك تصرّح وتخلّص قبل فاتح مارس من كل عام. |
| 5 | 0:27 → 0:38 | 11 s | إلا ما خلصتيش؟ كتزاد عليك ذعيرة عشرة فالمية، وخمسة فالمية فالشهر الأول، ونص فالمية على كل شهر من بعد. ويقدرو يحجزو على الحساب ولا الممتلكات… وما تقدرش تبيع الأرض بلا شهادة الأداء. |
| 6 | 0:38 → 0:45 | 7 s | ولكن: إلا خديتي رخصة البناء، عندك إعفاء مؤقت ديال تلت سنين. وكاينين أراضي معفية، بحال اللي ممنوع فيها البناء، ولا اللي ما واصلاش ليها الما والضو. |
| 7 | 0:45 → 0:50 | 5 s | هاد الفلوس كترجع ليك طرقان وضو وخدمات. خلّص فالوقت… مدينتك كتستاهل. |

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

Déposer le ou les fichiers dans `tnb-video/public/voiceover/` (ou les envoyer dans la conversation).
Ils seront ajoutés à la composition avec `<Audio>` de `@remotion/media`,
et la durée des scènes sera recalée sur l'audio.
