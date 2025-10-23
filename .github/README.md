# 🚀 Système CI/CD D-Via

Ce répertoire contient la configuration CI/CD pour le workspace D-Via, un monorepo contenant un design system, une application Next.js et un backend IA.

## 📁 Structure des Workflows

### 1. `cicd.yml` - Pipeline Principal
Pipeline complet qui s'exécute sur les branches `main` et `develop` :

- **Tests et Validation** : Lint, type-check, tests unitaires
- **Build Design System** : Compilation du design system avec upload d'artifacts
- **Build Frontend** : Build de l'application Next.js avec récupération du design system
- **Déploiement** : Déploiement automatique sur Vercel (uniquement sur `main`)
- **Notifications** : Notifications de statut de déploiement

### 2. `pr-checks.yml` - Validation des Pull Requests
Workflow optimisé pour les pull requests :

- **Détection de changements** : Analyse quels composants ont été modifiés
- **Tests conditionnels** : Exécute les tests seulement pour les composants modifiés
- **Build test** : Test de build pour valider la compatibilité
- **Commentaires automatiques** : Mise à jour du statut directement sur la PR

## 🏗️ Architecture du Monorepo

```
d-via-workspace/
├── design-system-dvia/     # Design system React + Tailwind
├── d-via-final/           # Application Next.js
├── dvia-backend-ia/       # Backend Python/IA
└── .github/workflows/     # Configurations CI/CD
```

## 🔧 Fonctionnalités

### ✅ Tests Automatiques
- **Linting** : ESLint pour TypeScript/JavaScript
- **Type Checking** : Validation TypeScript
- **Tests Unitaires** : Tests pour tous les composants
- **Tests de Build** : Validation que tout compile correctement

### 🚀 Déploiement Automatique
- **Déploiement Vercel** : Déploiement automatique sur `main`
- **Gestion des Artifacts** : Partage du design system entre les builds
- **Variables d'environnement** : Configuration sécurisée via secrets GitHub

### 📊 Optimisations
- **Cache NPM** : Cache des dépendances pour des builds plus rapides
- **Tests conditionnels** : Tests seulement pour les composants modifiés
- **Builds parallèles** : Exécution parallèle des tests et builds
- **Artifacts** : Partage des builds entre les jobs

## 🔐 Configuration Requise

### Secrets GitHub
Consultez [SECRETS_SETUP.md](./SECRETS_SETUP.md) pour la configuration des secrets :

- `VERCEL_TOKEN` : Token d'authentification Vercel
- `VERCEL_ORG_ID` : ID de l'organisation Vercel
- `VERCEL_PROJECT_ID` : ID du projet Vercel

### Variables d'Environnement
Ajoutez les variables nécessaires dans les secrets GitHub :
- `NEXT_PUBLIC_API_URL`
- `DATABASE_URL`
- `NEXTAUTH_SECRET`
- `STRIPE_SECRET_KEY`
- etc.

## 📈 Monitoring

### Dashboard GitHub Actions
- Consultez l'onglet "Actions" de votre repository
- Historique des exécutions et logs détaillés
- Notifications en cas d'échec

### Commentaires PR
- Statut automatique des tests sur chaque PR
- Détection des composants modifiés
- Validation de la compatibilité

## 🛠️ Commandes Locales

### Développement
```bash
# Installer toutes les dépendances
npm run install:all

# Démarrer le design system
npm run dev:design-system

# Démarrer l'application Next.js
npm run dev

# Démarrer le backend IA
npm run dev:backend
```

### Build et Tests
```bash
# Linter tous les projets
npm run lint

# Tests de tous les projets
npm run test

# Build complet
npm run build

# Build design system uniquement
npm run build:design-system

# Build frontend uniquement
npm run build:frontend
```

## 🔄 Workflow de Développement

1. **Créer une branche** depuis `develop`
2. **Développer** avec les commandes locales
3. **Créer une PR** vers `develop` ou `main`
4. **Validation automatique** via `pr-checks.yml`
5. **Merge** après validation
6. **Déploiement automatique** si merge vers `main`

## 🐛 Dépannage

### Échec de Build
1. Vérifiez les logs dans GitHub Actions
2. Testez localement avec `npm run build`
3. Vérifiez les dépendances avec `npm run install:all`

### Échec de Déploiement
1. Vérifiez la configuration des secrets Vercel
2. Consultez les logs de déploiement
3. Vérifiez la configuration `vercel.json`

### Tests qui échouent
1. Exécutez `npm run lint` localement
2. Vérifiez les types avec `npm run type-check`
3. Consultez les logs détaillés dans GitHub Actions

## 📚 Ressources

- [Documentation GitHub Actions](https://docs.github.com/en/actions)
- [Documentation Vercel](https://vercel.com/docs)
- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
