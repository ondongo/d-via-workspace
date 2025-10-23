# D-Via Design System

Un système de design complet pour l'application D-Via, construit avec React, TypeScript et Tailwind CSS v4.

## 🎨 Palette de couleurs

### Couleurs primaires (D-Via Primary)
- **dviaprimary-40**: `#e5451d` - Couleur principale (rouge/orange)
- **dviaprimary-50**: `#e96443` - Hover state
- **dviaprimary-10**: `#391107` - Texte sombre
- **dviaprimary-90**: `#fbe0d9` - Arrière-plan clair

### Couleurs secondaires (D-Via Secondary)
- **dviasecondary-40**: `#f97c27` - Couleur secondaire (orange)
- **dviasecondary-50**: `#fa924b` - Hover state

### Couleurs neutres (D-Via Neutral)
- **dvianeutral-10**: `#3f2825` - Texte principal
- **dvianeutral-20**: `#7e514b` - Texte secondaire
- **dvianeutral-90**: `#feefed` - Arrière-plan principal
- **dvianeutral-100**: `#ffffff` - Blanc

### Couleurs neutres variantes (D-Via Neutral Variant)
- **dvianeutralvariant-10**: `#060d18` - Texte sombre
- **dvianeutralvariant-40**: `#163360` - Bleu foncé
- **dvianeutralvariant-90**: `#d8dde5` - Gris clair

## 📝 Typographie

### Tailles de police
- **Display Large**: 57px (3.5625rem)
- **Display Medium**: 45px (2.8125rem)
- **Display Small**: 36px (2.25rem)
- **Headline Large**: 32px (2rem)
- **Headline Medium**: 28px (1.75rem)
- **Headline Small**: 24px (1.5rem)
- **Title Large**: 20px (1.25rem)
- **Title Small**: 14px (0.875rem)
- **Label Large**: 14px (0.875rem)
- **Label Medium**: 12px (0.75rem)
- **Label Small**: 11px (0.6875rem)
- **Body Large**: 16px (1rem)
- **Body Medium**: 14px (0.875rem)
- **Body Small**: 12px (0.75rem)

### Police
- **Famille**: Montserrat
- **Poids**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

## 🎯 Composants

### Atoms
- **Button**: Boutons avec variantes (primary, secondary, outline, ghost, destructive)
- **Input**: Champs de saisie
- **Typography**: Texte avec variantes de taille et couleur
- **Image**: Images avec lazy loading
- **ColorPalette**: Aperçu des couleurs
- **NavItem**: Éléments de navigation
- **Breadcrumb**: Fil d'Ariane
- **AddressInput**: Champ d'adresse
- **FileCard**: Carte de fichier

### Molecules
- **Card**: Cartes de contenu
- **Accordion**: Accordéons (FAQ)
- **Modal**: Modales
- **BottomActionButton**: Bouton d'action mobile
- **ArtisanCard**: Carte d'artisan
- **BottomNavigation**: Navigation mobile
- **ResponsiveMenu**: Menu responsive
- **ArtisanGrid**: Grille d'artisans
- **PricingCard**: Carte de tarification
- **NavigationRail**: Rail de navigation desktop
- **FileMarquee**: Défilement de fichiers

### Organisms
- **Header**: En-tête de page
- **Footer**: Pied de page

## 🚀 Installation

### Dans le projet D-Via

1. **Installer le design system** :
```bash
npm install @d-via/design-system
```

2. **Importer les styles** dans votre `globals.css` :
```css
@import "@d-via/design-system/dist/index.css";
```

3. **Utiliser les composants** :
```tsx
import { Button, Typography, Card } from '@d-via/design-system';

function MyComponent() {
  return (
    <Card className="p-6">
      <Typography variant="headline-medium" color="dvianeutral-10">
        Mon titre
      </Typography>
      <Button variant="primary" size="md">
        Mon bouton
      </Button>
    </Card>
  );
}
```

## 🎨 Utilisation des couleurs

### Classes Tailwind personnalisées
```tsx
// Couleurs de texte
<div className="text-dviaprimary-40">Texte rouge principal</div>
<div className="text-dvianeutral-10">Texte neutre sombre</div>

// Couleurs d'arrière-plan
<div className="bg-dviaprimary-40">Arrière-plan rouge</div>
<div className="bg-dvianeutral-90">Arrière-plan neutre clair</div>

// Border radius personnalisés
<div className="rounded-8px">Coins arrondis 8px</div>
<div className="rounded-12px">Coins arrondis 12px</div>
<div className="rounded-28px">Coins arrondis 28px</div>
```

## 📱 Responsive Design

Le design system est entièrement responsive avec des breakpoints Tailwind :
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## 🎭 Animations

### Animations personnalisées
- **marquee**: Défilement horizontal (30s)
- **marqueeGrid**: Défilement de grille (20s)
- **animate-reverse**: Direction inverse
- **animate-25s**: Animation 25s

## 🛠️ Développement

### Scripts disponibles
```bash
# Développement
npm run dev

# Build
npm run build

# Storybook
npm run storybook

# Tests
npm run test

# Lint
npm run lint
```

### Structure du projet
```
src/
├── components/
│   ├── atoms/          # Composants de base
│   ├── molecules/      # Composants composés
│   └── organisms/      # Composants complexes
├── styles/
│   └── globals.css     # Styles globaux et variables
└── utils/
    └── cn.ts          # Utilitaires (clsx + tailwind-merge)
```

## 📦 Assets

Le design system inclut tous les assets nécessaires :
- **Logos**: `public/logos/`
- **Icônes**: `public/icons/`
- **Illustrations**: `public/illustrations/`
- **Dashboard**: `public/dashboard/`

## 🔧 Configuration

### Tailwind CSS v4
Le design system utilise Tailwind CSS v4 avec :
- Configuration `@theme` dans le CSS
- Variables CSS personnalisées
- Plugin PostCSS `@tailwindcss/postcss`

### TypeScript
- Types complets pour tous les composants
- Props typées avec interfaces
- Support des refs React

## 📄 Licence

MIT - Voir le fichier LICENSE pour plus de détails.

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📞 Support

Pour toute question ou problème, contactez l'équipe D-Via.