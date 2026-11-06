# AOS Ain Chock

Site public des **Œuvres sociales des fonctionnaires de l'arrondissement Ain Chock**
(Casablanca) : ce à quoi les agents ont droit — santé, colonies de vacances, loisirs,
événements — et comment en faire la demande.

En ligne : <https://aos-ain-chock.netlify.app>

## Ce que contient ce dépôt

Deux dossiers, dont **un seul part en ligne** :

| Dossier | Rôle | Publié ? |
|---|---|---|
| `aos-ain-chock/` | Le site lui-même. C'est le dossier publié par Netlify. | ✅ oui |
| `aos-atelier/` | Atelier de conception : maquettes, propositions de logo, emblème SVG, planche de revue, design package. Sert à la fabrication, pas aux visiteurs. | ❌ non |

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

Le dossier publié contient aussi `404.html`, la page d'erreur du site, et
`prestations/index.html`, une simple redirection : le bordereau des prix, qui était
servi à cette adresse, est une application sans lien avec l'AOS. Il a son propre
dépôt (`bordereau-prix`) et sa propre adresse, <https://bordereau-prix.netlify.app/>.

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
- **Cache et sécurité.** Les polices sont figées pour un an (`immutable`), les
  images et la feuille arabe pour une semaine. Ces règles, avec les en-têtes de
  sécurité, sont dans `aos-ain-chock/_headers`, qui suit le dossier publié même lors
  d'un dépôt manuel.

## Modifier le contenu

Les textes sont écrits en clair dans `index.html`, section par section
(`#constat`, `#services`, `#etapes`, `#fil`, `#saison`, `#questions`, `#demande`).
Chaque chaîne a son équivalent arabe au même endroit.

Après une modification, vérifier les deux langues **et** le rendu sur mobile :
le passage en RTL déplace plusieurs éléments (flèches, listes, champs de formulaire).

## Déploiement

Le site est publié par **Netlify**, à chaque poussée sur `master`. Un second
hébergement sur **GitHub Pages** est prévu par le flux `.github/workflows/pages.yml`,
mais il n'est pas encore actif (voir plus bas). Les deux servent le dossier
`aos-ain-chock/` :

| Hébergement | Adresse | Comment |
|---|---|---|
| Netlify | <https://aos-ain-chock.netlify.app/> | dossier fixé par `netlify.toml` |
| GitHub Pages | <https://bouhamiabdou.github.io/aos-ain-chock/> (pas encore actif) | flux `.github/workflows/pages.yml` |

Aucune commande de build des deux côtés : le dossier est servi tel quel.

### Activer GitHub Pages

Tant que Pages n'est pas activé, chaque poussée sur `master` produit un déploiement
`github-pages` en échec (« Create Pages site failed. Resource not accessible by
integration ») : le flux n'a pas le droit d'activer Pages lui-même. Pour l'activer :

1. le dépôt doit être **public** (ou le compte GitHub en offre **Pro**) ;
2. *Settings → Pages → Build and deployment → Source* : **GitHub Actions** ;
3. *Actions → Publier sur GitHub Pages → Run workflow* sur `master`.

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
contributeur, ou lever la vérification stricte pour ce projet). GitHub Pages, une fois
activé, n'est pas concerné par cette restriction.
