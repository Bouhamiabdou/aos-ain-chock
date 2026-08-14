# Dossier de conception — AOS Ain Chock

Site bilingue français / arabe. Palier 1, héros dessiné (pas de vidéo générée, budget crédits à zéro).
Toute la copie ci-dessous part telle quelle dans le build. Les chiffres de bandes sont des points de départ, validés par le test de flick.

## 1. La prémisse de marque

**Le fil.** Un fil seul ne porte rien. Tissés ensemble, les fils portent tout le monde. L'association est le métier à tisser des fonctionnaires de l'arrondissement Ain Chock : chaque service est un fil, chaque dossier déposé est un fil de plus dans l'étoffe. Toute la page enseigne cette idée, du héros au pied de page. Une section qui ne sert pas le fil ne monte pas sur la page.

## 2. La palette (tokens CSS)

Tirée du monde du tissage : nuit encre du bain de teinture, laiton du fil métallique, jade du fil de soie.

```css
:root{
  --canvas:#0B1220;        /* nuit encre, jamais du noir pur */
  --canvas-2:#0F1930;
  --panel:#141F38;
  --accent:#2FB98A;        /* jade, réservé au bouton d'action et à de rares emphases */
  --accent-hover:#46D6A3;
  --accent-muted:rgba(47,185,138,.22);
  --brass:#C9A24B;         /* le fil de laiton, motifs et traits dessinés */
  --text-secondary:#9FAEC6;
  --text-primary:#F0EDE4;
}
```

## 3. Le trio typographique

- Titrage latin : **Bricolage Grotesque** (600, 700). Du caractère, pas un défaut d'habitude.
- Titrage arabe : **Reem Kufi** (600, 700). Koufique géométrique, la même parenté angulaire que le zellige.
- Texte courant : **IBM Plex Sans** (400, 500) et **IBM Plex Sans Arabic** (400, 500). Une seule famille pour les deux alphabets, donc une seule voix.
- Petites étiquettes : **IBM Plex Mono** (500).

## 4. La carte des bandes du héros

Le héros est un métier à tisser dessiné en SVG. Les fils de chaîne descendent, les fils de trame les traversent, et l'étoffe se referme à l'arrivée.

| Bande | Plage (départ) | Moment du dessin | Copie FR (verbatim) | Copie AR (verbatim) | Entrée |
|---|---|---|---|---|---|
| 1 | 0.00 à 0.30 | les fils de chaîne descendent, encore séparés | « Un fil seul ne porte rien. » | «خيط واحد لا يحمل شيئا.» | descente des mots, en écho à la chute des fils |
| 2 | 0.34 à 0.64 | les fils de trame traversent et lient | « Tissés ensemble, ils portent un arrondissement entier. » | «منسوجة معا، تحمل مقاطعة بأكملها.» | assemblage caractère par caractère, en écho à l'entrelacement |
| 3 | 0.68 à 1.00 | l'étoffe est complète et respire | titre + sous-titre + bouton, voir bloc 5 | idem | montée mot à mot, puis sous-titre, puis bouton |

## 5. Le bloc du héros au repos (aussi le héros fixe sur téléphone)

- Titre FR : « Œuvres sociales des fonctionnaires — Arrondissement Ain Chock »
- Titre AR : «الأعمال الاجتماعية لموظفي مقاطعة عين الشق»
- Sous-titre FR : « Santé, colonies de vacances, loisirs, événements. Ce à quoi vous avez droit, écrit noir sur blanc, et comment l'obtenir. »
- Sous-titre AR : «الصحة، المخيمات الصيفية، الترفيه، الأنشطة. حقوقك مكتوبة بوضوح، وكيفية الحصول عليها.»
- Bouton FR : « Déposer une demande » / AR : «تقديم طلب»
- Lien secondaire FR : « Voir les services » / AR : «الخدمات»

## 6. Le plan sous le héros

Une seule action pour toute la page : **déposer une demande**. Chaque section gagne le défilement suivant vers elle.

1. **Le constat.** Étiquette : « Ce que disent les adhérents ». Trois phrases réelles reprises telles quelles : « Je ne savais pas que j'y avais droit. » « Mon dossier est où ? » « Il faut connaître quelqu'un. » Réponse : « Aucune de ces trois phrases ne devrait exister. Tout ce qui suit est écrit, daté et ouvert à tous les adhérents. Rien ne se demande de bouche à oreille. »
2. **Les quatre fils (services).** Santé, Colonies de vacances, Loisirs, Événements. Chaque carte : ce que ça couvre, qui y a droit, un lien vers le formulaire.
3. **Comment ça marche.** Trois étapes numérotées, imagées à égalité. Vérifier son adhésion, réunir les pièces, déposer la demande.
4. **Le moment interactif : tirez le fil.** Appui maintenu. La trame se referme pendant l'appui, et l'étoffe complète révèle la liste des pièces à fournir. Relâcher tôt fait redescendre la progression en douceur. Mouvement réduit : état final immédiat.
5. **Les chiffres.** Adhérents, enfants partis en colonie, dossiers traités dans l'année. Valeurs à confirmer par le bureau, marquées dans le code.
6. **Questions fréquentes.** Les vraies objections : faut-il connaître quelqu'un, combien de temps, suis-je adhérent, est-ce payant, et si c'est refusé.
7. **Déposer une demande.** Formulaire, coordonnées, horaires du bureau.
8. **Pied de page.** Adresse, contact, mention de l'arrondissement.

Microcopie du formulaire : champs « Nom et prénom », « Service ou direction », « Téléphone », « Objet de la demande » (liste : santé, colonie de vacances, loisirs, événement, autre), « Votre message ». Bouton « Envoyer la demande ». Confirmation : « Votre demande est partie. Le bureau vous répond sous cinq jours ouvrables. »

Traitement du formulaire sur un site statique, décidé avec le client : le formulaire écrit la demande, la copie dans le presse-papier, puis propose d'ouvrir la messagerie de la page Facebook de l'association, là où le bureau répond déjà. Aucune adresse électronique n'est publiée par l'association, donc pas de mailto. La destination est dite à l'écran, en toutes lettres.

Une bande photo pleine largeur s'intercale entre les étapes et le moment interactif : la seule image exploitable de la page Facebook, un départ en colonie. Elle est floutée et teintée dans la palette parce qu'elle montre des enfants reconnaissables, et la légende dit que le floutage est volontaire. Une bande unique, donc aucune asymétrie avec des sections voisines sans image.

La phrase de mission de l'association, reprise mot pour mot de sa page : « النهوض بالخدمات الإجتماعية لفائدة موظفات و موظفي مقاطعة عين الشق », en français « Promouvoir les services sociaux au profit des employées et des employés de l'arrondissement Ain Chock. » Elle vit en pied de page et sert de description du site.

## 7. Le calque vectoriel

- **L'élément signature : le fil continu.** Un seul trait de laiton dessiné à la main descend du héros jusqu'au pied de page, se dessine au défilement, et forme un nœud à l'entrée de chaque section. Retiré, la page perd sa colonne vertébrale.
- Le métier à tisser du héros : chaîne verticale, trame horizontale, tension pilotée par le défilement.
- Poussières lentes à niveau de murmure sur le fond fixe.
- Mouvement réduit : tous les tracés sont montrés finis, les moteurs sont arrêtés.

## 7 bis. Les polices, servies par le site

Les cinq familles ne viennent plus de Google. Les fichiers vivent dans `assets/fonts/`, ce qui supprime deux connexions à un serveur étranger et évite d'exposer les visiteurs à un tiers. Chaque fichier est réduit aux seuls caractères de la page, alphabet français complet et ponctuation compris. Les champs du formulaire prennent la police du système, puisque le visiteur y tape ce qu'il veut.

L'arabe est séparé dans `assets/ar.css`, injecté par le script seulement quand quelqu'un bascule la langue. Un visiteur francophone ne télécharge jamais les 66 Ko de polices arabes.

À vérifier après tout ajout de copie : que `document.fonts.check` ne signale aucun caractère manquant dans les deux langues. Si un caractère nouveau apparaît, il faut régénérer les fichiers réduits.

## 8. La liste d'ingénierie

Fond fixe unique en cycle lent, boucle rAF qui se repose une fois convergée, écritures DOM seulement au changement, rythme des bandes validé au test de flick, ombres et voiles de lisibilité sur tout texte posé sur le dessin, `overflow-x: clip` sur `html` et `body`, mouvement réduit honoré dans les deux sens, cibles tactiles de 44 px, repères sémantiques et lien d'évitement, contraste calculé et non deviné. Bascule français / arabe avec `dir="rtl"` et `lang` mis à jour, et toutes les transformations positionnelles reprises en miroir.

## 9. La porte de la copie

Toute la copie ci-dessus part telle quelle. La page construite doit passer la revue : zéro tiret cadratin, zéro mot de catalogue, et le balayage des tics d'écriture automatique. Les triplets voulus du dossier (« Vérifier, réunir, déposer ») sont du métier et restent.
