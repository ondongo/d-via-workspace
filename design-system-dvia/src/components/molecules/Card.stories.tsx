import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card } from './Card';
import { Button } from '../atoms/Button';
import { Typography } from '../atoms/Typography';

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Le composant Card fournit un conteneur flexible pour organiser du contenu avec un style cohérent. Il respecte parfaitement le design de D-Via.

## Caractéristiques

- **Design D-Via** : Respect exact du style de l'application D-Via
- **Variantes** : Default, elevated, outlined
- **Padding flexible** : None, sm, md, lg
- **Header optionnel** : Titre et sous-titre
- **Accessible** : Support des attributs HTML natifs
- **Responsive** : S'adapte à tous les écrans

## Utilisation

Le composant Card est idéal pour :
- Organiser du contenu en sections
- Créer des cartes d'information
- Afficher des données structurées
- Créer des interfaces modulaires
- Dashboard et interfaces administratives
        `,
      },
    },
  },
  argTypes: {
    title: {
      description: 'Titre de la carte',
      control: { type: 'text' },
    },
    subtitle: {
      description: 'Sous-titre de la carte',
      control: { type: 'text' },
    },
    variant: {
      description: 'Variante de style de la carte',
      control: { type: 'select' },
      options: ['default', 'elevated', 'outlined'],
    },
    padding: {
      description: 'Espacement interne de la carte',
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg'],
    },
    children: {
      description: 'Contenu de la carte',
      control: { type: 'text' },
    },
    className: {
      description: 'Classes CSS personnalisées',
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: 'Contenu de la carte par défaut',
  },
};

export const WithTitle: Story = {
  args: {
    title: 'Titre de la carte',
    children: 'Contenu de la carte avec un titre.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Carte avec un titre.',
      },
    },
  },
};

export const WithTitleAndSubtitle: Story = {
  args: {
    title: 'Titre de la carte',
    subtitle: 'Sous-titre descriptif',
    children: 'Contenu de la carte avec titre et sous-titre.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Carte avec un titre et un sous-titre.',
      },
    },
  },
};

export const Elevated: Story = {
  args: {
    title: 'Carte Élevée',
    subtitle: 'Avec ombre plus prononcée',
    variant: 'elevated',
    children: 'Cette carte a une ombre plus prononcée et un effet hover.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Variante elevated avec ombre plus prononcée.',
      },
    },
  },
};

export const Outlined: Story = {
  args: {
    title: 'Carte Contour',
    subtitle: 'Avec bordure mise en évidence',
    variant: 'outlined',
    children: 'Cette carte a une bordure mise en évidence avec effet hover.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Variante outlined avec bordure mise en évidence.',
      },
    },
  },
};

export const DifferentPaddings: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card title="Padding Small" padding="sm">
        <Typography variant="body-small">
          Contenu avec padding small (p-3)
        </Typography>
      </Card>
      <Card title="Padding Medium" padding="md">
        <Typography variant="body-medium">
          Contenu avec padding medium (p-4)
        </Typography>
      </Card>
      <Card title="Padding Large" padding="lg">
        <Typography variant="body-large">
          Contenu avec padding large (p-6)
        </Typography>
      </Card>
      <Card title="No Padding" padding="none">
        <div className="p-4 bg-dvianeutral-94 rounded-8px">
          <Typography variant="body-medium">
            Contenu sans padding (padding="none")
          </Typography>
        </div>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparaison des différents paddings disponibles.',
      },
    },
  },
};

export const WithComplexContent: Story = {
  args: {
    title: 'Carte Complexe',
    subtitle: 'Avec contenu riche',
    variant: 'elevated',
    children: (
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-dviaprimary-40 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">D</span>
          </div>
          <div>
            <Typography variant="title-medium">D-Via</Typography>
            <Typography variant="body-small" className="text-dvianeutral-30">
              Plateforme de gestion
            </Typography>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-dvianeutral-94 rounded-8px">
            <Typography variant="title-large" className="text-dviaprimary-40">150+</Typography>
            <Typography variant="body-small">Clients</Typography>
          </div>
          <div className="text-center p-3 bg-dvianeutral-94 rounded-8px">
            <Typography variant="title-large" className="text-dviaprimary-40">98%</Typography>
            <Typography variant="body-small">Satisfaction</Typography>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Button variant="primary" size="sm">
            En savoir plus
          </Button>
          <Button variant="outline" size="sm">
            Contact
          </Button>
        </div>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Carte avec du contenu complexe incluant des statistiques et des boutons.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    title: 'Carte Interactive',
    subtitle: 'Cliquez pour voir les effets',
    variant: 'elevated',
    children: 'Cette carte a des effets hover et peut être cliquée.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Carte interactive avec effets hover.',
      },
    },
  },
  render: (args) => (
    <Card
      {...args}
      className="cursor-pointer hover:scale-105 transition-transform duration-200"
      onClick={() => alert('Carte cliquée !')}
    />
  ),
};

export const CodeExample: Story = {
  args: {
    title: 'Exemple de Code',
    subtitle: 'Comment utiliser le composant Card',
    variant: 'elevated',
    children: 'Contenu de la carte',
  },
  parameters: {
    docs: {
      description: {
        story: `
## Exemple de code

### Utilisation basique

\`\`\`tsx
import { Card } from '@/components/molecules/Card';

function MyComponent() {
  return (
    <Card title="Ma Carte">
      <p>Contenu de la carte</p>
    </Card>
  );
}
\`\`\`

### Avec toutes les options

\`\`\`tsx
import { Card } from '@/components/molecules/Card';
import { Button } from '@/components/atoms/Button';

function ComplexCard() {
  return (
    <Card
      title="Titre de la carte"
      subtitle="Sous-titre descriptif"
      variant="elevated"
      padding="lg"
      className="max-w-md"
    >
      <div className="space-y-4">
        <p>Contenu de la carte avec espacement.</p>
        <Button variant="primary" size="sm">
          Action
        </Button>
      </div>
    </Card>
  );
}
\`\`\`

### Carte cliquable

\`\`\`tsx
<Card
  title="Carte Cliquable"
  variant="elevated"
  className="cursor-pointer hover:scale-105 transition-transform"
  onClick={() => console.log('Carte cliquée')}
>
  <p>Cliquez sur cette carte</p>
</Card>
\`\`\`

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| \`title\` | \`string\` | - | Titre de la carte |
| \`subtitle\` | \`string\` | - | Sous-titre de la carte |
| \`variant\` | \`'default' \| 'elevated' \| 'outlined'\` | \`'default'\` | Variante de style |
| \`padding\` | \`'none' \| 'sm' \| 'md' \| 'lg'\` | \`'md'\` | Espacement interne |
| \`children\` | \`React.ReactNode\` | - | Contenu de la carte |
| \`className\` | \`string\` | - | Classes CSS personnalisées |

## Variantes

### Default
- Ombre standard
- Bordure subtile
- Style de base

### Elevated
- Ombre plus prononcée
- Effet hover avec ombre étendue
- Idéal pour les cartes importantes

### Outlined
- Bordure mise en évidence
- Effet hover sur la bordure
- Idéal pour les cartes secondaires

## Padding

- \`none\` : Aucun padding
- \`sm\` : Padding petit (p-3)
- \`md\` : Padding moyen (p-4) - défaut
- \`lg\` : Padding large (p-6)
        `,
      },
    },
  },
};