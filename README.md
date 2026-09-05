# AOS Ain Chock

Site public des **Œuvres sociales des fonctionnaires de l'arrondissement Ain Chock**
(Casablanca) : ce à quoi les agents ont droit — santé, colonies de vacances, loisirs,
événements — et comment en faire la demande.

En ligne : <https://aos-ain-chock.netlify.app>

## Ce que contient ce dépôt

Trois dossiers, dont **un seul part en ligne** :

| Dossier | Rôle | Publié ? |
|---|---|---|
| `aos-ain-chock/` | Le site lui-même. C'est le dossier publié par Netlify. | ✅ oui |
| `aos-atelier/` | Atelier de conception : maquettes, propositions de logo, emblème SVG, planche de revue, design package. Sert à la fabrication, pas aux visiteurs. | ❌ non |
| `10k-websites-skill/` | Outil de méthode (skill) utilisé pour construire le site. Ce n'est pas le projet. | ❌ non |

Le cloisonnement est assuré par `netlify.toml` (`publish = "aos-ain-chock"`) :
tout ce qui est en dehors de ce dossier reste privé, même s'il est committé ici.

## Lancer le site en local

Le site est en HTML/CSS/JS pur, sans build ni dépendance à installer :

```bash
npx -y http-server aos-ain-chock -p 4173 -c-1
```

Puis ouvrir <http://localhost:4173>. C'est la commande déjà enregistrée dans
`.claude/launch.json`.

Ouvrir `aos-ain-chock/index.html` par double-clic fonctionne aussi, mais passer par
le serveur local reste plus fidèle au rendu en ligne.

## Comment le site est construit

La page d'accueil tient dans **un seul fichier**, `aos-ain-chock/index.html`
(~68 Ko), CSS et JavaScript inclus. Pas de framework, pas d'étape de build, pas de
`npm install`.

Le dossier publié contient aussi des pages autonomes à côté de l'accueil, dans leur
propre sous-dossier et documentées chez elles — aujourd'hui `prestations/`, un
sélecteur de prestations qui exporte un bordereau des prix au format Excel. Elles
sont servies par la même configuration Netlify, sans build ni dépendance, et ne sont
pas liées depuis la page d'accueil.

- **Polices auto-hébergées.** Les `.woff2` de `assets/fonts/` sont des
  sous-ensembles réduits aux seuls caractères utilisés — d'où leur petite taille.
  Bricolage Grotesque (titres), IBM Plex Sans (texte), IBM Plex Mono.
- **Bilingue FR / ع.** Le bouton de langue bascule `lang` et `dir` sur `<html>`.
  Les polices arabes (Reem Kufi, IBM Plex Sans Arabic) vivent dans un fichier à part,
  `assets/ar.css`, **chargé seulement au premier passage en arabe** : un visiteur
  francophone ne les télécharge jamais. Le choix est retenu dans `localStorage`
  sous la clé `aos-lang`.
- **Animations au scroll.** Un fil SVG se dessine au fil de la page et relie les
  sections, les bandes de texte apparaissent par paliers. Le tout est piloté en
  `requestAnimationFrame` et **se coupe automatiquement** si le visiteur a demandé
  moins d'animations (`prefers-reduced-motion`).
- **Dégradation propre.** L'apparition de la page est une animation CSS partant de
  l'invisible, pas un état par défaut : si le JavaScript échoue, la page reste
  lisible au lieu de rester blanche.
- **Cache.** Les polices sont figées pour un an (`immutable`) et les autres assets
  pour une semaine. Ces règles d'en-tête sont déclarées côté Netlify — vérifiez où
  avant de les modifier : à la racine dans `netlify.toml`, ou dans
  `aos-ain-chock/_headers`, qui a l'avantage de suivre le dossier publié même lors
  d'un dépôt manuel.

## Modifier le contenu

Les textes sont écrits en clair dans `index.html`, section par section
(`#constat`, `#services`, `#etapes`, `#fil`, `#saison`, `#questions`, `#demande`).
Chaque chaîne a son équivalent arabe au même endroit.

Après une modification, vérifier les deux langues **et** le rendu sur mobile :
le passage en RTL déplace plusieurs éléments (flèches, listes, champs de formulaire).

## Déploiement

Le site est publié à **deux adresses**, qui servent toutes deux le dossier
`aos-ain-chock/` et se mettent à jour **à chaque poussée sur `master`** :

| Hébergement | Adresse | Comment |
|---|---|---|
| Netlify | <https://aos-ain-chock.netlify.app/> | dossier fixé par `netlify.toml` |
| GitHub Pages | <https://bouhamiabdou.github.io/aos-ain-chock/> | flux `.github/workflows/pages.yml` |

L'une couvre l'autre en cas d'indisponibilité ou de restriction de compte. Aucune
commande de build des deux côtés : le dossier est servi tel quel.

### Si un déploiement Netlify échoue

Vérifiez d'abord le message du déploiement plutôt que le code. Sur un dépôt
**privé**, Netlify refuse de construire quand l'auteur des commits n'est pas un
membre vérifié du compte :

```
Build blocked: Unrecognized Git contributor.
This plan allows only verified account members to push to private repos.
```

La construction est alors refusée avant même de lire un fichier — aucune
modification du dépôt n'y changera rien. Cela se règle côté Netlify (vérifier le
contributeur, ou lever la vérification stricte pour ce projet). GitHub Pages n'est
pas concerné par cette restriction et continue de publier.
