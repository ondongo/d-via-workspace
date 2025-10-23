import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CardGridScroll, Artisan } from './CardGridScroll';

const meta: Meta<typeof CardGridScroll> = {
  title: 'Molecules/CardGridScroll',
  component: CardGridScroll,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Le composant CardGridScroll affiche une grille de cartes d'artisans avec des effets de défilement et de fondu. Il respecte parfaitement le design de D-Via.

## Caractéristiques

- **Design D-Via** : Respect exact du style de l'application D-Via
- **Effet marquee** : Défilement automatique des cartes
- **Effet fade** : Fondu progressif des cartes sur les bords
- **Responsive** : S'adapte aux écrans mobile et desktop
- **Cartes d'artisans** : Affichage des informations complètes
- **Animations fluides** : Transitions et effets visuels

## Utilisation

Le composant CardGridScroll est idéal pour :
- Afficher des profils d'artisans
- Créer des galeries de cartes
- Présenter des équipes ou des membres
- Créer des carrousels de contenu
- Interfaces de sélection
        `,
      },
    },
  },
  argTypes: {
    artisans: {
      description: 'Liste des artisans à afficher',
      control: { type: 'object' },
    },
    title: {
      description: 'Titre de la section',
      control: { type: 'text' },
    },
    subtitle: {
      description: 'Sous-titre de la section',
      control: { type: 'text' },
    },
    enableMarquee: {
      description: 'Activer l\'effet de défilement automatique',
      control: { type: 'boolean' },
    },
    enableFadeEffect: {
      description: 'Activer l\'effet de fondu sur les bords',
      control: { type: 'boolean' },
    },
    className: {
      description: 'Classes CSS personnalisées',
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardGridScroll>;

// Données de test pour les artisans
const sampleArtisans: Artisan[] = [
  {
    id: '1',
    image: '/artisans/plombier_salledebain_rennes 2.png',
    name: 'Jean Dupont',
    location: 'Rennes',
    job: 'Plombier',
    rating: 5,
    completed: 127,
  },
  {
    id: '2',
    image: '/artisans/plombier_salledebain_rennes 2.png',
    name: 'Marie Martin',
    location: 'Paris',
    job: 'Électricienne',
    rating: 4,
    completed: 89,
  },
  {
    id: '3',
    image: '/artisans/plombier_salledebain_rennes 2.png',
    name: 'Pierre Durand',
    location: 'Lyon',
    job: 'Chauffagiste',
    rating: 5,
    completed: 156,
  },
  {
    id: '4',
    image: '/artisans/plombier_salledebain_rennes 2.png',
    name: 'Sophie Bernard',
    location: 'Marseille',
    job: 'Peintre',
    rating: 4,
    completed: 203,
  },
  {
    id: '5',
    image: '/artisans/plombier_salledebain_rennes 2.png',
    name: 'Lucas Moreau',
    location: 'Toulouse',
    job: 'Menuisier',
    rating: 5,
    completed: 78,
  },
  {
    id: '6',
    image: '/artisans/plombier_salledebain_rennes 2.png',
    name: 'Emma Petit',
    location: 'Nantes',
    job: 'Carreleuse',
    rating: 4,
    completed: 134,
  },
];

export const Default: Story = {
  args: {
    artisans: sampleArtisans,
  },
};

export const WithCustomTitle: Story = {
  args: {
    artisans: sampleArtisans,
    title: 'Nos Artisans Experts',
    subtitle: 'Découvrez notre sélection d\'artisans qualifiés',
  },
  parameters: {
    docs: {
      description: {
        story: 'CardGridScroll avec un titre et sous-titre personnalisés.',
      },
    },
  },
};

export const WithoutMarquee: Story = {
  args: {
    artisans: sampleArtisans,
    enableMarquee: false,
    title: 'Artisans sans défilement',
  },
  parameters: {
    docs: {
      description: {
        story: 'CardGridScroll sans effet de défilement automatique.',
      },
    },
  },
};

export const WithoutFadeEffect: Story = {
  args: {
    artisans: sampleArtisans,
    enableFadeEffect: false,
    title: 'Artisans sans effet de fondu',
  },
  parameters: {
    docs: {
      description: {
        story: 'CardGridScroll sans effet de fondu sur les bords.',
      },
    },
  },
};

export const StaticMode: Story = {
  args: {
    artisans: sampleArtisans,
    enableMarquee: false,
    enableFadeEffect: false,
    title: 'Mode Statique',
    subtitle: 'Cartes statiques sans animations',
  },
  parameters: {
    docs: {
      description: {
        story: 'CardGridScroll en mode complètement statique.',
      },
    },
  },
};

export const FewArtisans: Story = {
  args: {
    artisans: sampleArtisans.slice(0, 3),
    title: 'Peu d\'artisans',
    subtitle: 'Affichage avec seulement 3 artisans',
  },
  parameters: {
    docs: {
      description: {
        story: 'CardGridScroll avec un nombre réduit d\'artisans.',
      },
    },
  },
};

export const ManyArtisans: Story = {
  args: {
    artisans: [
      ...sampleArtisans,
      ...sampleArtisans.map((artisan, index) => ({
        ...artisan,
        id: `${artisan.id}-duplicate-${index}`,
        name: `${artisan.name} ${index + 1}`,
      })),
    ],
    title: 'Beaucoup d\'artisans',
    subtitle: 'Affichage avec de nombreux artisans',
  },
  parameters: {
    docs: {
      description: {
        story: 'CardGridScroll avec un grand nombre d\'artisans.',
      },
    },
  },
};

export const DifferentRatings: Story = {
  args: {
    artisans: [
      { ...sampleArtisans[0], rating: 5, completed: 200 },
      { ...sampleArtisans[1], rating: 4, completed: 150 },
      { ...sampleArtisans[2], rating: 3, completed: 100 },
      { ...sampleArtisans[3], rating: 2, completed: 50 },
      { ...sampleArtisans[4], rating: 1, completed: 25 },
    ],
    title: 'Artisans avec différentes notes',
    subtitle: 'Affichage des différentes évaluations',
  },
  parameters: {
    docs: {
      description: {
        story: 'CardGridScroll avec des artisans ayant différentes notes.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    artisans: sampleArtisans,
    title: 'Artisans Interactifs',
    subtitle: 'Cliquez sur les cartes pour voir les détails',
  },
  parameters: {
    docs: {
      description: {
        story: 'CardGridScroll avec des cartes interactives.',
      },
    },
  },
  render: (args) => (
    <CardGridScroll
      {...args}
      artisans={args.artisans.map(artisan => ({
        ...artisan,
        onClick: () => alert(`Détails de ${artisan.name}`),
      }))}
    />
  ),
};

export const CodeExample: Story = {
  args: {
    artisans: sampleArtisans,
    title: 'Exemple de Code',
    subtitle: 'Comment utiliser le composant CardGridScroll',
  },
  parameters: {
    docs: {
      description: {
        story: `
## Exemple de code

### Utilisation basique

\`\`\`tsx
import { CardGridScroll, Artisan } from '@/components/molecules/CardGridScroll';

const artisans: Artisan[] = [
  {
    id: '1',
    image: '/artisans/plombier.jpg',
    name: 'Jean Dupont',
    location: 'Rennes',
    job: 'Plombier',
    rating: 5,
    completed: 127,
  },
  // ... autres artisans
];

function MyComponent() {
  return (
    <CardGridScroll
      artisans={artisans}
      title="Nos Artisans"
      subtitle="Découvrez notre équipe"
    />
  );
}
\`\`\`

### Avec options personnalisées

\`\`\`tsx
<CardGridScroll
  artisans={artisans}
  title="Artisans Experts"
  subtitle="Sélection de professionnels qualifiés"
  enableMarquee={true}
  enableFadeEffect={true}
  className="my-custom-class"
/>
\`\`\`

### Mode statique

\`\`\`tsx
<CardGridScroll
  artisans={artisans}
  title="Artisans Disponibles"
  enableMarquee={false}
  enableFadeEffect={false}
/>
\`\`\`

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| \`artisans\` | \`Artisan[]\` | - | Liste des artisans à afficher |
| \`title\` | \`string\` | \`"Rejoignez notre communauté d'artisans d'excellence"\` | Titre de la section |
| \`subtitle\` | \`string\` | - | Sous-titre de la section |
| \`enableMarquee\` | \`boolean\` | \`true\` | Activer l'effet de défilement |
| \`enableFadeEffect\` | \`boolean\` | \`true\` | Activer l'effet de fondu |
| \`className\` | \`string\` | - | Classes CSS personnalisées |

## Types

### Artisan
\`\`\`tsx
interface Artisan {
  id: string;
  image: string;
  name: string;
  location: string;
  job: string;
  rating: number;
  completed: number;
}
\`\`\`

## Effets

### Marquee
- Défilement automatique des cartes de droite à gauche
- Animation CSS fluide et continue
- Peut être désactivé avec \`enableMarquee={false}\`

### Fade Effect
- Fondu progressif des cartes sur les bords
- Opacité réduite pour les cartes partiellement visibles
- Améliore la perception de la continuité
- Peut être désactivé avec \`enableFadeEffect={false}\`
        `,
      },
    },
  },
};