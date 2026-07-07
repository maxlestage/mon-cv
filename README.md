# mon-cv

CV en ligne bilingue (FR / EN) construit avec **Bun**, **React**, **TypeScript** et **Vite**, déployé automatiquement sur **GitHub Pages**.

## Démarrer

```bash
bun install
bun run dev      # serveur de dev → http://localhost:5173
```

## Scripts

| Commande          | Description                                  |
| ----------------- | -------------------------------------------- |
| `bun run dev`     | Serveur de développement avec rechargement   |
| `bun run build`   | Vérifie les types puis construit dans `dist` |
| `bun run preview` | Prévisualise le build de production          |

## Personnaliser le CV

Tout le contenu est centralisé dans **`src/cv-data.ts`**.
Chaque texte existe en deux langues : `{ fr: "...", en: "..." }`.
Modifie ce fichier uniquement — aucun autre changement de code nécessaire.

- `cvData` : nom, titre, profil, contacts, expériences, formation, compétences, langues
- `uiStrings` : libellés des sections et du bouton d'impression

Un bouton **Imprimer / PDF** génère une version propre via le navigateur.

## Déploiement GitHub Pages

Le workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
construit et déploie le site à chaque push sur `master`/`main`.

Configuration unique côté GitHub : **Settings → Pages → Build and deployment →
Source : GitHub Actions**.

Le site est servi sur : **`https://maxlestage.github.io/mon-cv/`**

> Le `base` est défini sur `/mon-cv/` dans `vite.config.ts`, ce qui correspond
> au nom du dépôt (dépôt projet GitHub Pages). Si tu renommes le dépôt, mets
> cette valeur à jour. Pour servir à la racine (`/`), il faudrait soit un dépôt
> nommé `maxlestage.github.io`, soit un domaine personnalisé.

## Déploiement Heroku

Le site (statique) peut aussi être déployé sur Heroku. Comme l'app y est servie
à la **racine `/`** (et non `/mon-cv/`), le build Heroku force `base=/` :

- [`Procfile`](Procfile) : lance un serveur statique qui écoute sur `$PORT`
  (`serve -s dist -l $PORT`).
- Script `heroku-postbuild` : `vite build --base=/` (les assets pointent vers
  `/assets/...` au lieu de `/mon-cv/assets/...`).
- `serve` est une dépendance de production (elle survit à l'élagage des
  `devDependencies` fait par Heroku après le build).

Déploiement :

```bash
heroku create            # ou: heroku git:remote -a <nom-de-ton-app>
git push heroku master   # buildpack Node.js détecté automatiquement
heroku open
```

> Heroku utilise le buildpack **Node.js** (npm), pas Bun : il lit `package.json`
> et ignore `bun.lock`. Les `devDependencies` (Vite, plugins) sont installées le
> temps du build puis élaguées ; `serve` reste disponible au runtime.
