# D-Via Workspace

Monorepo contenant tous les projets de la plateforme D-Via.

## Structure du projet

```
d-via-workspace/
├── d-via-final/              # Application Next.js principale
├── design-system-dvia/       # Design System réutilisable
├── dvia-backend-ia/          # Backend IA avec système RAG
└── README.md                 # Ce fichier
```

## Projets

### 1. **d-via-final** - Application principale
- **Technologie** : Next.js 14, TypeScript, Tailwind CSS
- **Description** : Application web complète pour la plateforme D-Via
- **Fonctionnalités** : Landing page, dashboard, gestion des artisans et clients
- **Déploiement** : Vercel avec GitHub Actions

### 2. **design-system-dvia** - Design System
- **Technologie** : React, TypeScript, Storybook, Tailwind CSS
- **Description** : Bibliothèque de composants réutilisables
- **Fonctionnalités** : Composants UI, thème D-Via, documentation Storybook
- **Publication** : GitHub Packages

### 3. **dvia-backend-ia** - Backend IA
- **Technologie** : Python, RAG (Retrieval Augmented Generation)
- **Description** : API d'analyse de documents et d'intelligence artificielle
- **Fonctionnalités** : Analyse de devis, génération de contenu IA

## Installation et développement

### Prérequis
- Node.js 18+
- Python 3.8+
- npm ou yarn

### Installation globale
```bash
# Cloner le repository
git clone https://github.com/ondongo/d-via-workspace.git
cd d-via-workspace

# Installer les dépendances de tous les projets
npm install
```

### Développement par projet

#### Application principale (d-via-final)
```bash
cd d-via-final
npm install
npm run dev
```

#### Design System
```bash
cd design-system-dvia
npm install
npm run storybook
npm run build
```

#### Backend IA
```bash
cd dvia-backend-ia
pip install -r requirements.txt
python rag.py
```

## 🔄 Workflow de développement

1. **Design System** : Développement et test des composants
2. **Publication** : Bump de version et publication sur GitHub Packages
3. **Application** : Mise à jour automatique via GitHub Actions
4. **Déploiement** : Déploiement automatique sur Vercel

## 📦 Scripts disponibles

### Workspace
```bash
npm run dev          # Démarrer tous les projets en mode développement
npm run build        # Builder tous les projets
npm run test         # Lancer tous les tests
```

### Design System
```bash
npm run storybook    # Démarrer Storybook
npm run build        # Builder le design system
npm run bump         # Bump de version automatique
```

### Application
```bash
npm run dev          # Démarrer en mode développement
npm run build        # Builder pour la production
npm run start        # Démarrer en mode production
```

## Déploiement

- **Application** : Déploiement automatique sur Vercel via GitHub Actions
- **Design System** : Publication automatique sur GitHub Packages
- **Backend IA** : Déploiement sur votre infrastructure préférée

## Documentation

- [Guide de déploiement](./DEPLOYMENT.md)
- [Design System Storybook](https://ondongo.github.io/design-system-dvia)
- [API Documentation](./dvia-backend-ia/README.md)

## Contribution

1. Fork le repository
2. Créer une branche feature (`git checkout -b feature/amazing-feature`)
3. Commit les changements (`git commit -m 'Add amazing feature'`)
4. Push vers la branche (`git push origin feature/amazing-feature`)
5. Ouvrir une Pull Request


##  Équipe

- **Développement** :Marvin, Gloire Ondongo
- **Design** :Eva, Matys
