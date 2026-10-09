# MON D.E INFAS

Site de préparation au diplôme d'État **IDE et SF** : exercices corrigés (QCD / QCM) et cours.

## Contenu du dépôt

| Fichier | Rôle |
|---|---|
| `index.html` | Page d'accueil et squelette du site |
| `style.css` | Mise en forme (accueil, sommaire, exercices, cours, schémas) |
| `script.js` | Logique : navigation, correction des exercices, affichage des cours |
| `access.js` | Codes d'accès (empreintes SHA-256) par licence, tarifs et contact de l'administrateur |
| `generer-code.html` | Page de l'administrateur pour créer un nouveau code et son empreinte |
| `data.js` | Sommaire (49 épreuves) et exercices corrigés (3 253 questions) |
| `cours.js` | Cours rédigés (HTML + schémas SVG originaux) |
| `de.js` | Sujets du Diplôme d'État (D.E) d'Abidjan, Abengourou, Daloa et Aboisso : 35 sujets, 624 questions corrigées (bouton **SUJET D.E L3** de l'accueil) |
| `jeu.js` | Jeu quiz : QCM tirés au hasard de tous les exercices (`data.js` + `de.js`, environ 1 250 questions) ; à la fin, le « Diplôme d'État D.E — Félicitations » s'affiche (bouton **JEU QUIZ** de l'accueil) |
| `docs.js` | Boutons **DICTIONNAIRE MÉDICAL** (gauche) et **ATLAS IMAGE ANATOMIE** (droite) de l'accueil : lecteur des PDF du dossier `docs/` |
| `docs/` | `atlas-anatomie.pdf` (polycopié d'anatomie illustré, Lille 2017, 483 p.) ; `dictionnaire-medical.pdf` à déposer ici pour activer le dictionnaire |
| `cours-pdf.js` | Bouton **COURS PDF** de l'accueil : un bouton par matière (40 matières) qui ouvre le PDF du dossier `cours-pdf/` |
| `cours-pdf/` | Déposer ici les PDF des cours ; les noms attendus sont listés dans `LISEZ-MOI.txt` (ex. `pediatrie.pdf`, `sante-publique.pdf`) |
| `images/` | Photo d'accueil et figures de l'exercice « appareil locomoteur » |
| `.nojekyll` | Demande à GitHub Pages de servir les fichiers tels quels |

## Mettre le site en ligne avec GitHub Pages

1. Créer un dépôt sur GitHub (par exemple `prepa-infas-2026`).
2. Déposer **tous** les fichiers et le dossier `images/` à la racine du dépôt (bouton *Add file → Upload files*).
3. Aller dans *Settings → Pages*, choisir *Deploy from a branch*, la branche `main` et le dossier `/ (root)`, puis enregistrer.
4. Après une à deux minutes, le site est disponible à l'adresse `https://<votre-pseudo>.github.io/prepa-infas-2026/`.

## Accès

Les codes d'accès sont **désactivés** : tout le contenu est en accès libre. Les fichiers `access.js` et `generer-code.html` restent dans le dépôt (le numéro WhatsApp de l'accueil en dépend) ; pour rétablir les codes, remplacer le début de `requireAccess` dans `script.js` par `if(hasAccess(lv)){done();return}`.

## Ajouter un cours

Dans `cours.js`, ajouter une entrée à l'objet `COURS`, avec la même clé que l'épreuve dans `data.js` (par exemple `cel` pour « Anatomie cellule et tissus ») :

```js
const COURS = { dig: COURS_DIG, cel: '<div class="course"><h3>…</h3><p>…</p></div>' };
```

Les matières qui ont un cours sont reliées automatiquement à leurs exercices (boutons « Voir le cours » et « Passer aux exercices »).

## Remarques

- Le PDF d'origine ne contenait pas de corrigé : les corrections sont rédigées à la main. Les points marqués « à confirmer » doivent être comparés avec votre cours.
- Les schémas du cours sont des illustrations originales, libres d'utilisation.
