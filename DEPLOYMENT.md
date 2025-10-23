# Guide de Déploiement D-Via

Ce guide explique comment déployer le design system et l'application d-via-final sur Vercel avec GitHub Actions.

## Prérequis

1. **Comptes requis :**
   - GitHub (pour le code source)
   - Vercel (pour le déploiement)
   - npm (pour les packages)

2. **Secrets GitHub :**
   - `VERCEL_TOKEN` : Token d'API Vercel
   - `VERCEL_ORG_ID` : ID de l'organisation Vercel
   - `VERCEL_PROJECT_ID` : ID du projet Vercel

## Architecture

```
design-system-dvia/     # Design system (package npm)
├── .github/workflows/
│   └── publish.yml     # Auto-publish sur push main
└── src/               # Composants React

d-via-final/           # Application Next.js
├── .github/workflows/
│   ├── deploy.yml     # Déploiement Vercel
│   └── update-design-system.yml  # Auto-update design system
└── src/               # Application
```

## Processus de Déploiement

### 1. Design System

**Déclenchement automatique :**
- Push sur `main` du design system
- GitHub Actions build et publie automatiquement

**Déploiement manuel :**
```bash
./deploy.sh design-system
```

### 2. Application d-via-final

**Déclenchement automatique :**
- Push sur `main` de d-via-final
- GitHub Actions déploie sur Vercel

**Déploiement manuel :**
```bash
./deploy.sh d-via-final
```

### 3. Déploiement complet

```bash
./deploy.sh both
```

## Configuration Vercel

### 1. Créer un projet Vercel

1. Aller sur [vercel.com](https://vercel.com)
2. Importer le repository GitHub `d-via-final`
3. Configurer les variables d'environnement

### 2. Variables d'environnement

```env
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://d-via-final.vercel.app
# Ajouter vos autres variables...
```

### 3. Configuration automatique

Le fichier `vercel.json` configure :
- Build command : `npm run build`
- Output directory : `.next`
- Runtime : Node.js 18.x
- Cron jobs pour la santé de l'API

## Mise à jour automatique du Design System

### Workflow de mise à jour

1. **Détection :** Cron job quotidien à 9h UTC
2. **Vérification :** Check si le design system a changé
3. **Mise à jour :** Update `package.json` si nécessaire
4. **Test :** Build de l'application
5. **PR :** Création automatique d'une Pull Request

### Configuration du cron

```yaml
on:
  schedule:
    - cron: '0 9 * * *'  # Tous les jours à 9h UTC
```

## Gestion des versions

### Design System

- **Versioning :** Semver (major.minor.patch)
- **Auto-bump :** Patch version sur chaque push
- **Publishing :** GitHub Packages

### Application

- **Dependency :** `@d-via/design-system: file:../design-system-dvia`
- **Update :** Automatique via GitHub Actions

## Scripts de déploiement

### Script principal

```bash
# Déployer le design system
./deploy.sh design-system

# Déployer l'application
./deploy.sh d-via-final

# Déployer les deux
./deploy.sh both
```

### Scripts npm

```bash
# Design system
cd design-system-dvia
npm run build
npm version patch
npm publish

# Application
cd d-via-final
npm update @d-via/design-system
npm run build
```

## Monitoring et Debug

### Logs GitHub Actions

1. Aller sur GitHub > Actions
2. Voir les workflows en cours/terminés
3. Cliquer sur un job pour voir les logs

### Logs Vercel

1. Aller sur Vercel Dashboard
2. Sélectionner le projet
3. Voir les logs de déploiement

### Debug local

```bash
# Tester le build localement
cd d-via-final
npm run build

# Vérifier les dépendances
npm ls @d-via/design-system
```

## Résolution de problèmes

### Erreur de build

1. Vérifier les logs GitHub Actions
2. Tester localement : `npm run build`
3. Vérifier les dépendances

### Erreur de déploiement Vercel

1. Vérifier les variables d'environnement
2. Vérifier la configuration `vercel.json`
3. Vérifier les logs Vercel

### Design system non mis à jour

1. Vérifier le workflow `update-design-system.yml`
2. Vérifier les secrets GitHub
3. Déclencher manuellement le workflow

## Ressources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vercel Documentation](https://vercel.com/docs)
- [npm Publishing Guide](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)

## Contribution

Pour contribuer au déploiement :

1. Fork le repository
2. Créer une branche feature
3. Modifier les workflows si nécessaire
4. Tester localement
5. Créer une Pull Request

---

**Note :** Ce processus est entièrement automatisé. Les développeurs n'ont qu'à pousser du code sur `main` et le déploiement se fait automatiquement.
