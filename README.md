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

Le `base` est défini sur `/` dans `vite.config.ts` : le site est servi à la
racine. Cela nécessite **l'une** de ces configurations GitHub Pages :

- un dépôt nommé `maxlestage.github.io` → `https://maxlestage.github.io/`
- **ou** un domaine personnalisé (ajoute un fichier `public/CNAME` contenant
  ton domaine, et configure-le dans Settings → Pages)

> Sans cela, un dépôt projet (`mon-cv`) est servi sur
> `https://maxlestage.github.io/mon-cv/` et les assets renverraient des 404
> avec `base: "/"`. Dans ce cas, remets `base: "/mon-cv/"`.
