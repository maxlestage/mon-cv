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

Le site sera servi sur : `https://maxlestage.github.io/mon-cv/`

> Le `base` est défini sur `/mon-cv/` dans `vite.config.ts`. Si tu renommes le
> dépôt, mets cette valeur à jour pour qu'elle corresponde au nouveau nom.
