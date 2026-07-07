# mon-cv

CV en ligne bilingue (FR / EN) construit avec **Bun**, **React**, **TypeScript** et **Vite**, déployé sur **Heroku**.

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

## Déploiement Heroku

Le site est servi à la **racine `/`** du domaine Heroku (`base: "/"` dans
`vite.config.ts`) :

- [`Procfile`](Procfile) : lance un serveur statique qui écoute sur `$PORT`
  (`serve -s dist -l $PORT`).
- Script `heroku-postbuild` : `vite build` (build de production dans `dist`).
- `serve` est une dépendance de production (elle survit à l'élagage des
  `devDependencies` fait par Heroku après le build).

Déploiement :

```bash
heroku create            # ou: heroku git:remote -a <nom-de-ton-app>
git push heroku master   # buildpack Node.js détecté automatiquement
heroku open
```

Le plus simple depuis le dashboard Heroku : onglet **Deploy** → connecter le
dépôt GitHub → activer les **Automatic deploys** sur `master`.

> Heroku utilise le buildpack **Node.js** (npm), pas Bun : il lit `package.json`
> et ignore `bun.lock`. Les `devDependencies` (Vite, plugins) sont installées le
> temps du build puis élaguées ; `serve` reste disponible au runtime.
