# D-Via Design System

Design System React avec Tailwind CSS pour l'écosystème D-Via.

## Installation

```bash
npm install @gloireondongo/d-via-design-system
```

## Utilisation

```tsx
import { Button, Card, Typography } from '@gloireondongo/d-via-design-system';

function App() {
  return (
    <div>
      <Typography variant="headline-large">Bienvenue sur D-Via</Typography>
      <Card>
        <Button variant="primary">Commencer</Button>
      </Card>
    </div>
  );
}
```

## Documentation

- **Storybook** : https://d-via-workspace-design-system-dvia.vercel.app
- **Package npm** : https://www.npmjs.com/package/@gloireondongo/d-via-design-system

## Composants disponibles

### Atoms
- Button
- Input
- Typography
- Image
- NavItem
- FileCard
- ColorPalette
- Spacing
- Breadcrumb
- AddressInput

### Molecules
- Card
- Modal
- Accordion
- BottomNavigation
- BottomActionButton
- NavigationRail
- ResponsiveMenu
- PricingCard
- ArtisanCard
- CardGridScroll
- FileMarquee

### Organisms
- Header
- Footer

## Développement

### Installation
```bash
npm install
```

### Storybook
```bash
npm run storybook
```

### Build
```bash
npm run build
```

### Tests
```bash
npm run test
```

### Linting
```bash
npm run lint
```

## Technologies

- React 18
- TypeScript
- Tailwind CSS
- Storybook
- Radix UI
- Framer Motion
- React Icons

## Versioning

Le design system suit le versioning sémantique :
- **Patch** : Corrections de bugs
- **Minor** : Nouvelles fonctionnalités
- **Major** : Changements breaking

## Publication

La publication est automatique via GitHub Actions lors des push sur main.

## Licence

MIT