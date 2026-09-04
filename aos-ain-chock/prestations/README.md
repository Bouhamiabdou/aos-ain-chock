# Sélecteur de prestations → bordereau des prix — détail estimatif

Application autonome, sans dépendance ni serveur : un seul fichier `index.html`.
Elle s'ouvre par double-clic depuis un poste hors réseau, ou en ligne à l'une des deux adresses ci-dessous.

## Où elle est servie

| Hébergement | Adresse | Publication |
|---|---|---|
| Netlify | <https://aos-ain-chock.netlify.app/prestations/> | à chaque poussée sur `master`, dossier `aos-ain-chock/` fixé par `netlify.toml` |
| GitHub Pages | <https://bouhamiabdou.github.io/aos-ain-chock/prestations/> | à chaque poussée sur `master`, par le flux `.github/workflows/pages.yml` |

Les deux servent le même dossier. L'un couvre l'autre en cas d'indisponibilité
ou de restriction de compte.

## Ce qu'elle fait

1. **Trois référentiels** présentés en arborescence repliable :
   - la liste des prestations de même nature, annexe à la note de service **n° 3.96.5 du 26 février 1996** du Contrôle Général des Engagements de Dépenses de l'État (27 catégories, 352 éléments constitutifs) ;
   - la liste des prestations pouvant faire l'objet de **bons de commande**, annexe n° 3 (rubriques Travaux, Fournitures, Services) ;
   - un **catalogue étendu** de 14 domaines et 127 prestations courantes — informatique et services numériques, réseaux, sûreté, énergie, nettoyage, communication, études, formation, mobilité, santé et social, voirie, assurances, protection au travail. Ce catalogue est **sans valeur réglementaire** : il complète les deux annexes officielles, qui n'ont pas été modifiées. Chaque domaine porte sa **catégorie officielle de rattachement**, reprise dans l'export et à l'impression, pour l'appréciation des prestations de même nature.
2. **Sélection** par case à cocher, par catégorie entière, ou par saisie libre pour les catégories dont le texte se termine par « etc. » (listes non exhaustives).
3. **Descriptif technique généré automatiquement** pour chaque prestation retenue, à partir d'une bibliothèque de descriptifs types intégrée (couverture : 511 des 517 libellés). Le descriptif est modifiable ligne par ligne et régénérable.
4. **Composition du bordereau** :
   - **duplication** d'une ligne pour porter plusieurs spécifications d'une même prestation (deux configurations de poste de travail, deux formats de papier…) ; la variante se place à la suite de la ligne d'origine et son libellé devient modifiable ;
   - **ordonnancement** : ordre des nomenclatures par défaut, ordre manuel dès qu'une ligne est montée ou descendue, avec rétablissement possible en un clic ;
   - retirer une prestation retire aussi ses variantes.
5. **Saisie** de l'unité, de la quantité, du prix unitaire hors taxe et des observations ; calcul du total hors T.V.A., de la T.V.A. au taux choisi (20, 14, 10, 7 % ou exonéré) et du total T.T.C., avec arrêté du montant en toutes lettres.
6. **Mercuriale — mémoire des prix du service.** Base livrée **vide** : aucun prix n'y est supposé. Chaque prestation retenue reçoit son dernier prix connu, avec **sa date et sa source**, affichées sous la ligne ; au-delà du délai de péremption retenu (6, 12 ou 24 mois), le prix est signalé « à réactualiser ». La base s'alimente par import d'un fichier CSV à sept colonnes — référentiel, catégorie, prestation, unité, prix unitaire H.T., date, source — ou en versant les prix du bordereau en cours, datés du jour et rattachés au marché ; elle s'exporte au même format. Deux garde-fous : un prix hérité de la base n'est jamais redaté ni réattribué à un marché où il n'a pas été observé, et retoucher un prix à la main efface sa provenance, qui deviendrait mensongère.
7. **Export Excel (.xlsx)** en deux feuilles : le bordereau des prix — détail estimatif (avec formules vivantes `D×E` et `SUM`) et une récapitulation par catégorie. Un mode « état des besoins » sans prix est également disponible.
8. **Impression** au format A4 d'un document conforme à la présentation administrative, avec cartouches de signature.

La saisie est conservée dans le navigateur (`localStorage`) : fermer l'onglet ne perd rien.

## Réserves documentaires

- **Catégories 13 à 18 manquantes** : le fichier source transmis passe directement de la catégorie 12 à la catégorie 19. Aucune source publique fiable n'a permis de les reconstituer ; elles n'ont pas été inventées. Pour les ajouter, voir ci-dessous.
- **Annexe n° 3** : le décret n° 2.06.388 (2007) qu'elle vise a été abrogé, d'abord par le décret n° 2.12.349 (2013), puis par le décret n° 2.22.431 relatif aux marchés publics, en vigueur depuis le 1<sup>er</sup> septembre 2023. La liste et le plafond des bons de commande doivent être vérifiés au regard du texte en vigueur.
- **Descriptifs techniques** : arrêtés en septembre 2026, rédigés en termes de performances et suivis de la mention « ou équivalent », le renvoi à une marque déterminée étant proscrit dans les spécifications techniques. Ils constituent une base de travail à valider par le service technique compétent avant intégration au dossier d'appel d'offres.

## Maintenance

Tout est dans `index.html`.

- **Ajouter une catégorie ou un élément** : constante `DONNEES`, en tête du premier bloc `<script>`. Chaque catégorie est un objet `{num, libelle, elements[], ouvert}` ; `ouvert: true` signale une liste non exhaustive.
- **Ajouter ou corriger un descriptif** : tableau `DESCRIPTIFS` (règles `{m: [mots-clés], t: "texte"}`, première correspondance retenue) et compléments prioritaires via `DESCRIPTIFS.unshift(...)`. À défaut de correspondance, les textes de `GENERIQUES` s'appliquent selon la nature (fournitures, travaux, services).
- **Modifier la présentation du fichier Excel** : fonction `construireClasseur()`. Le classeur est assemblé en JavaScript pur (ZIP + OOXML), sans aucune bibliothèque externe.
