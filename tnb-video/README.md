# Vidéo pédagogique TNB (darija)

Vidéo verticale (1080 × 1920, 30 i/s) qui explique la **taxe sur les terrains urbains
non bâtis (TNB)** en darija marocaine, réalisée avec [Remotion](https://www.remotion.dev).

Durée : **66,4 s** avec la voix off (50 s sans).

## Scènes

| # | Composition | Contenu |
|---|---|---|
| 1 | `Hook` | « Vous avez un terrain en ville non construit ? » |
| 2 | `What` | Définition : due à la commune, chaque année, terrain nu dans le périmètre urbain |
| 3 | `Calc` | Calcul : surface × tarif au m² (exemple 200 m² × 10 DH = 2 000 DH) |
| 4 | `Deadline` | Déclarer et payer avant le 1er mars |
| 5 | `Risks` | Pénalité 10 %, majorations 5 % puis 0,5 %/mois, saisie, vente bloquée |
| 6 | `Exemptions` | Exonération 3 ans avec permis de construire, terrains exonérés |
| 7 | `Outro` | Appel à l'action et mention légale |

La vidéo complète est la composition `TnbVideo` ; chaque scène existe aussi seule
dans le dossier `TNB-Scenes` du Studio.

## Commandes

```bash
npm ci                 # installer les dépendances
npm run dev            # ouvrir Remotion Studio (aperçu)
npm run lint           # ESLint + TypeScript

# Rendu final (voix off activée par défaut)
npx remotion render TnbVideo out/TNB-darija.mp4

# Version sans voix, musique à plein volume
npx remotion render TnbVideo out/TNB-sans-voix.mp4 --props='{"voiceover":false}'
```

## Fichiers

- `src/TnbVideo.tsx` : enchaînement des scènes, voix off, musique et calage
  automatique de la durée des scènes sur les répliques.
- `src/scenes/` : une scène par fichier ; `src/Caption.tsx` : sous-titres.
- `public/voiceover/01.mp3` … `07.mp3` : voix off (une réplique par scène).
  Texte, voix utilisée et consignes : [VOIX-OFF.md](VOIX-OFF.md).
- `public/music.mp3` : musique originale générée par `scripts/generate-music.py`
  (sortie WAV, à convertir en MP3).
- `public/Cairo.ttf` : police Cairo (licence OFL), embarquée pour un rendu hors ligne.

## À vérifier avant diffusion

Les montants, délais, pénalités et exonérations doivent être confirmés avec le texte
en vigueur (loi 47.06 relative à la fiscalité des collectivités locales, telle que
modifiée par la loi 14.25) et l'arrêté fiscal de la commune concernée. L'exemple de
calcul est illustratif.
