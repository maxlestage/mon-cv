# App iOS — CV Lestage (WKWebView)

App iOS native minimale qui affiche le CV (`https://cv-lestage-34d2c9ae1cb0.herokuapp.com`)
dans une `WKWebView` plein écran.

Fonctionnalités :

- Plein écran, respect des zones sûres (encoche / Dynamic Island).
- Gestes avant/arrière + **tirer pour rafraîchir**.
- Indicateur de chargement et écran d'erreur « Réessayer » si hors ligne.
- Icône = le « M » du logo (EB Garamond).

## ⚠️ Prérequis (impossible depuis un téléphone seul)

Compiler et installer une app iOS nécessite :

1. Un **Mac** avec **Xcode** (gratuit sur le Mac App Store).
2. Pour l'installer sur un **vrai iPhone** : un **compte développeur Apple**
   (gratuit pour un usage perso limité à 7 jours par build ; **99 $/an** pour
   l'App Store ou une installation durable).

Le simulateur iOS (inclus dans Xcode) permet de tester sans iPhone ni compte.

## Structure

```
ios/
├── project.yml              # définition du projet (XcodeGen)
└── MonCV/
    ├── App.swift            # @main
    ├── ContentView.swift    # UI + états chargement/erreur
    ├── WebView.swift        # WKWebView (UIViewRepresentable)
    ├── Info.plist
    └── Assets.xcassets/     # icône 1024
```

## Ouvrir le projet dans Xcode

### Option A — avec XcodeGen (recommandé)

[XcodeGen](https://github.com/yonaskolb/XcodeGen) génère le `.xcodeproj` depuis
`project.yml` (rien à commiter, pas de conflits de merge) :

```bash
brew install xcodegen
cd ios
xcodegen generate
open MonCV.xcodeproj
```

Puis, dans Xcode : choisis un simulateur (ou ton iPhone) et appuie sur ▶︎.

### Option B — sans XcodeGen (tout manuel)

1. Xcode → **File ▸ New ▸ Project… ▸ iOS ▸ App**.
2. Product Name : `MonCV`, Interface : **SwiftUI**, Language : **Swift**.
3. Supprime les fichiers générés `MonCVApp.swift` / `ContentView.swift`.
4. Glisse dans le projet les fichiers de `ios/MonCV/` (`App.swift`,
   `ContentView.swift`, `WebView.swift`) et le dossier `Assets.xcassets`
   (coche « Copy items if needed »).
5. Cible ▸ onglet **Info** : vérifie `CFBundleDisplayName` = `CV Lestage`.
6. ▶︎ pour lancer.

## Installer sur ton iPhone

1. Branche l'iPhone au Mac (ou active le déploiement sans fil).
2. Xcode ▸ cible **MonCV** ▸ **Signing & Capabilities** : coche
   *Automatically manage signing* et choisis ton **Team** (ton Apple ID).
3. Sélectionne ton iPhone en haut, puis ▶︎.
4. Sur l'iPhone : **Réglages ▸ Général ▸ VPN et gestion de l'appareil** →
   fais confiance à ton certificat de développeur.

## Changer l'URL

Modifie la constante `url` dans [`MonCV/ContentView.swift`](MonCV/ContentView.swift).
