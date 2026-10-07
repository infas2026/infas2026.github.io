# PREPA INFAS 2026

Site de préparation au diplôme d'État **IDE et SF** : exercices corrigés (QCD / QCM) et cours.

## Contenu du dépôt

| Fichier | Rôle |
|---|---|
| `index.html` | Page d'accueil et squelette du site |
| `style.css` | Mise en forme (accueil, sommaire, exercices, cours, schémas) |
| `script.js` | Logique : navigation, correction des exercices, affichage des cours |
| `data.js` | Sommaire (49 épreuves) et exercices corrigés (3 253 questions) |
| `cours.js` | Cours rédigés (HTML + schémas SVG originaux) |
| `images/` | Photo d'accueil et figures de l'exercice « appareil locomoteur » |
| `.nojekyll` | Demande à GitHub Pages de servir les fichiers tels quels |

## Mettre le site en ligne avec GitHub Pages

1. Créer un dépôt sur GitHub (par exemple `prepa-infas-2026`).
2. Déposer **tous** les fichiers et le dossier `images/` à la racine du dépôt (bouton *Add file → Upload files*).
3. Aller dans *Settings → Pages*, choisir *Deploy from a branch*, la branche `main` et le dossier `/ (root)`, puis enregistrer.
4. Après une à deux minutes, le site est disponible à l'adresse `https://<votre-pseudo>.github.io/prepa-infas-2026/`.

## Ajouter un cours

Dans `cours.js`, ajouter une entrée à l'objet `COURS`, avec la même clé que l'épreuve dans `data.js` (par exemple `cel` pour « Anatomie cellule et tissus ») :

```js
const COURS = { dig: COURS_DIG, cel: '<div class="course"><h3>…</h3><p>…</p></div>' };
```

Les matières qui ont un cours sont reliées automatiquement à leurs exercices (boutons « Voir le cours » et « Passer aux exercices »).

## Remarques

- Le PDF d'origine ne contenait pas de corrigé : les corrections sont rédigées à la main. Les points marqués « à confirmer » doivent être comparés avec votre cours.
- Les schémas du cours sont des illustrations originales, libres d'utilisation.
