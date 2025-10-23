# D-Via Workspace

Monorepo contenant l'écosystème complet D-Via : Design System, Application Frontend et Backend IA.

## Structure du projet

```
d-via-workspace/
├── design-system-dvia/     # Design System React + Tailwind CSS
├── d-via-final/           # Application Next.js principale
├── dvia-backend-ia/       # Backend IA avec RAG
└── .github/workflows/     # CI/CD GitHub Actions
```

## Projets inclus

### Design System D-Via
- **Localisation** : `design-system-dvia/`
- **Technologies** : React, TypeScript, Tailwind CSS, Storybook
- **Package npm** : `@gloireondongo/d-via-design-system`
- **Documentation** : [Storybook en ligne](https://d-via-workspace-design-system-dvia.vercel.app)

### Application D-Via Final
- **Localisation** : `d-via-final/`
- **Technologies** : Next.js 15, React, TypeScript, Prisma
- **Déploiement** : [Vercel](https://d-via-workspace-d-via.vercel.app)

### Backend IA
- **Localisation** : `dvia-backend-ia/`
- **Technologies** : Python, RAG (Retrieval Augmented Generation)

## Installation

### Prérequis
- Node.js >= 20.0.0
- npm >= 8.0.0
- Python 3.8+ (pour le backend IA)

### Installation complète
```bash
# Cloner le repository
git clone https://github.com/ondongo/d-via-workspace.git
cd d-via-workspace

# Installation de tous les projets
npm run install:all
```

## Scripts disponibles

### Installation
```bash
npm run install:all              # Installation complète
npm run install:design-system    # Design system uniquement
npm run install:frontend         # Frontend uniquement
npm run install:backend          # Backend uniquement
```

### Développement
```bash
npm run dev:design-system        # Dev design system (Storybook)
npm run dev:frontend             # Dev frontend (Next.js)
npm run dev:backend              # Dev backend (Python)
```

### Build
```bash
npm run build:all                # Build complet
npm run build:design-system      # Build design system
npm run build:frontend           # Build frontend
```

### Tests et qualité
```bash
npm run test                     # Tests complets
npm run lint                     # Linting complet
npm run type-check               # Vérification TypeScript
```

### Design System
```bash
npm run bump:design-system:patch # Bump version patch
npm run bump:design-system:minor # Bump version minor
npm run bump:design-system:major # Bump version major
npm run publish:design-system    # Publication npm
```

## CI/CD

### Workflows GitHub Actions

1. **main.yml** : Pipeline principal
   - Validation et tests
   - Publication automatique du design system sur npm
   - Build et déploiement sur Vercel
   - Mise à jour automatique de d-via-final

2. **bump-design-system.yml** : Gestion des versions
   - Bump manuel des versions
   - Mise à jour automatique de d-via-final

3. **test.yml** : Tests de build
   - Validation des builds sans déploiement

### Secrets requis

- `NPM_TOKEN` : Token npm pour la publication
- `VERCEL_TOKEN` : Token Vercel pour le déploiement
- `VERCEL_ORG_ID` : ID de l'organisation Vercel
- `VERCEL_DESIGN_SYSTEM_PROJECT_ID` : ID projet design system
- `VERCEL_D_VIA_FINAL_PROJECT_ID` : ID projet d-via-final

## URLs de déploiement

- **Design System (Storybook)** : https://d-via-workspace-design-system-dvia.vercel.app
- **Application D-Via** : https://d-via-workspace-d-via.vercel.app
- **Package npm** : https://www.npmjs.com/package/@gloireondongo/d-via-design-system

## Workflow de développement

1. **Modifier le design system**
   - Faire les changements dans `design-system-dvia/`
   - Tester avec Storybook : `npm run dev:design-system`

2. **Publier les changements**
   - Push sur main → Publication automatique sur npm
   - Ou bump manuel : `npm run bump:design-system:patch`

3. **Mise à jour automatique**
   - d-via-final se met à jour automatiquement
   - Déploiement automatique sur Vercel

4. **Développement frontend**
   - Modifier `d-via-final/`
   - Tester localement : `npm run dev:frontend`

## Technologies utilisées

### Design System
- React 18
- TypeScript
- Tailwind CSS
- Storybook
- Radix UI
- Framer Motion

### Frontend
- Next.js 15
- React 18
- TypeScript
- Prisma
- NextAuth.js
- Tailwind CSS

### Backend IA
- Python 3.8+
- RAG (Retrieval Augmented Generation)
- Google Cloud Document AI

### CI/CD
- GitHub Actions
- Vercel
- npm

## Contribution

1. Fork le repository
2. Créer une branche feature
3. Faire les modifications
4. Tester localement
5. Créer une Pull Request

## Licence

MIT

## Auteur

Gloire Ondongo