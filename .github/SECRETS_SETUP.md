# Configuration des Secrets GitHub pour CI/CD

Ce document explique comment configurer les secrets GitHub nécessaires pour le pipeline CI/CD de D-Via.

## Secrets Requis

Pour que le déploiement automatique fonctionne, vous devez configurer les secrets suivants dans votre repository GitHub :

### 1. VERCEL_TOKEN
- **Description** : Token d'authentification Vercel
- **Comment l'obtenir** :
  1. Allez sur [Vercel Dashboard](https://vercel.com/dashboard)
  2. Cliquez sur votre profil (coin supérieur droit)
  3. Allez dans "Settings" > "Tokens"
  4. Créez un nouveau token avec les permissions appropriées
- **Permissions nécessaires** : Deploy, Project, Team

### 2. VERCEL_ORG_ID
- **Description** : ID de votre organisation Vercel
- **Comment l'obtenir** :
  1. Allez sur [Vercel Dashboard](https://vercel.com/dashboard)
  2. Sélectionnez votre équipe/organisation
  3. Allez dans "Settings" > "General"
  4. Copiez l'ID de l'équipe

### 3. VERCEL_PROJECT_ID
- **Description** : ID du projet Vercel
- **Comment l'obtenir** :
  1. Allez sur votre projet dans Vercel Dashboard
  2. Allez dans "Settings" > "General"
  3. Copiez l'ID du projet

## Comment Configurer les Secrets

1. Allez sur votre repository GitHub
2. Cliquez sur "Settings" (onglet en haut)
3. Dans le menu de gauche, cliquez sur "Secrets and variables" > "Actions"
4. Cliquez sur "New repository secret"
5. Ajoutez chaque secret avec son nom et sa valeur

## Variables d'Environnement Optionnelles

Si vous avez besoin de variables d'environnement spécifiques pour votre application, vous pouvez les ajouter dans les secrets GitHub :

- `NEXT_PUBLIC_API_URL`
- `DATABASE_URL`
- `NEXTAUTH_SECRET`
- `STRIPE_SECRET_KEY`
- etc.

## Test de la Configuration

Une fois les secrets configurés, le pipeline CI/CD se déclenchera automatiquement :
- Sur chaque push vers `main` ou `develop`
- Sur chaque pull request vers `main` ou `develop`

Vous pouvez vérifier le statut des déploiements dans l'onglet "Actions" de votre repository GitHub.

## Dépannage

### Erreur de Token Vercel
- Vérifiez que le token a les bonnes permissions
- Assurez-vous que le token n'a pas expiré

### Erreur d'ID d'Organisation/Projet
- Vérifiez que les IDs sont corrects
- Assurez-vous que le projet existe dans Vercel

### Échec de Build
- Vérifiez les logs dans l'onglet "Actions"
- Assurez-vous que toutes les dépendances sont correctement installées
