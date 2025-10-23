# D-Via Final

Application Next.js principale de l'écosystème D-Via.

## Déploiement

- **URL** : https://d-via-workspace-d-via.vercel.app
- **Plateforme** : Vercel
- **Déploiement** : Automatique via GitHub Actions

## Technologies

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Prisma
- NextAuth.js
- Design System D-Via

## Fonctionnalités

### Pages publiques
- Landing page
- Page artisans
- Page pricing
- Page coming soon

### Dashboard
- Interface clients
- Recherche d'artisans
- Gestion des devis

### Intégrations
- Design System D-Via
- Google Cloud Document AI
- Stripe (paiements)
- NextAuth.js (authentification)

## Développement

### Installation
```bash
npm install
```

### Variables d'environnement
```bash
# .env.local
DATABASE_URL="your_database_url"
NEXTAUTH_SECRET="your_secret"
NEXTAUTH_URL="http://localhost:3000"
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"
STRIPE_SECRET_KEY="your_stripe_secret"
STRIPE_PUBLISHABLE_KEY="your_stripe_public"
```

### Développement
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Production
```bash
npm run start
```

## Structure

```
src/
├── app/                    # App Router Next.js
│   ├── (landing)/         # Pages publiques
│   ├── dashboard/         # Dashboard clients
│   └── api/              # API routes
├── components/            # Composants React
│   ├── atoms/            # Composants de base
│   ├── molecules/        # Composants composés
│   └── organisms/        # Composants complexes
├── providers/            # Context providers
├── hooks/                # Hooks personnalisés
└── utils/                # Utilitaires
```

## Design System

L'application utilise le design system D-Via :
- Package : `@gloireondongo/d-via-design-system`
- Documentation : https://d-via-workspace-design-system-dvia.vercel.app
- Mise à jour : Automatique via CI/CD

## Base de données

- **ORM** : Prisma
- **Base** : SQLite (dev) / PostgreSQL (prod)
- **Migrations** : `npx prisma migrate dev`

## Authentification

- **Provider** : NextAuth.js
- **Méthodes** : Google OAuth
- **Sessions** : JWT

## API

### Routes disponibles
- `/api/documentai` : Traitement de documents
- `/api/openapi` : Documentation API

## Déploiement

### Vercel
- Déploiement automatique sur push main
- Variables d'environnement configurées
- Build optimisé pour la production

### CI/CD
- Tests automatiques
- Build et déploiement
- Mise à jour du design system

## Licence

MIT