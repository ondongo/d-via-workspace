import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { BottomNavigation, BottomNavigationItem } from './BottomNavigation';

const meta: Meta<typeof BottomNavigation> = {
  title: 'Molecules/BottomNavigation',
  component: BottomNavigation,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Le composant BottomNavigation fournit une navigation mobile en bas d'écran avec des icônes et des labels. Il est conçu pour être utilisé sur mobile uniquement et respecte parfaitement le design de D-Via.

## Caractéristiques

- **Navigation mobile** : Affiché uniquement sur mobile (masqué sur desktop)
- **Icônes actives/inactives** : Support des icônes différentes selon l'état actif
- **Animations fluides** : Transitions et effets hover
- **Design D-Via** : Respect exact du style de l'application D-Via
- **Z-index élevé** : Positionné au-dessus de tous les autres éléments

## Utilisation

Le BottomNavigation est idéal pour :
- Navigation principale sur mobile
- Dashboard mobile
- Applications avec navigation par onglets
- Interface utilisateur mobile responsive
        `,
      },
    },
  },
  argTypes: {
    items: {
      description: 'Liste des éléments de navigation',
      control: { type: 'object' },
    },
    activeItem: {
      description: 'ID de l\'élément actuellement actif',
      control: { type: 'text' },
    },
    variant: {
      description: 'Variante de style',
      control: { type: 'select' },
      options: ['default', 'dashboard'],
    },
    className: {
      description: 'Classes CSS personnalisées',
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BottomNavigation>;

// Données de test pour les icônes D-Via
const dashboardItems: BottomNavigationItem[] = [
  {
    id: 'analysis',
    label: 'Analyse de devis',
    icon: '/dashboard/quick_reference_all.svg',
    activeIcon: '/dashboard/active/quick_reference_all.svg',
    href: '/dashboard/clients',
    onClick: () => console.log('Analyse de devis'),
  },
  {
    id: 'artisans',
    label: 'Artisans',
    icon: '/dashboard/search.svg',
    activeIcon: '/dashboard/active/search.svg',
    href: '/dashboard/clients/search',
    onClick: () => console.log('Artisans'),
  },
  {
    id: 'articles',
    label: 'Articles',
    icon: '/dashboard/articles.svg',
    activeIcon: '/dashboard/active/articles.svg',
    href: '/dashboard/articles',
    onClick: () => console.log('Articles'),
  },
];

const defaultItems: BottomNavigationItem[] = [
  {
    id: 'home',
    label: 'Accueil',
    icon: '🏠',
    activeIcon: '🏡',
    href: '/',
    onClick: () => console.log('Accueil'),
  },
  {
    id: 'search',
    label: 'Recherche',
    icon: '🔍',
    activeIcon: '🔎',
    href: '/search',
    onClick: () => console.log('Recherche'),
  },
  {
    id: 'profile',
    label: 'Profil',
    icon: '👤',
    activeIcon: '👨‍💼',
    href: '/profile',
    onClick: () => console.log('Profil'),
  },
  {
    id: 'settings',
    label: 'Paramètres',
    icon: '⚙️',
    activeIcon: '🔧',
    href: '/settings',
    onClick: () => console.log('Paramètres'),
  },
];

export const Default: Story = {
  args: {
    items: defaultItems,
    activeItem: 'home',
  },
};

export const Dashboard: Story = {
  args: {
    items: dashboardItems,
    activeItem: 'analysis',
    variant: 'dashboard',
  },
  parameters: {
    docs: {
      description: {
        story: 'Variante dashboard avec les icônes exactes de D-Via et le style approprié.',
      },
    },
  },
};

export const WithDifferentActiveItem: Story = {
  args: {
    items: dashboardItems,
    activeItem: 'artisans',
    variant: 'dashboard',
  },
  parameters: {
    docs: {
      description: {
        story: 'Navigation avec un élément différent actif (Artisans).',
      },
    },
  },
};

export const FourItems: Story = {
  args: {
    items: [
      ...defaultItems,
      {
        id: 'notifications',
        label: 'Notifications',
        icon: '🔔',
        activeIcon: '🔔',
        href: '/notifications',
        onClick: () => console.log('Notifications'),
      },
    ],
    activeItem: 'search',
  },
  parameters: {
    docs: {
      description: {
        story: 'Navigation avec 4 éléments, montrant la répartition équilibrée.',
      },
    },
  },
};

export const FiveItems: Story = {
  args: {
    items: [
      ...defaultItems,
      {
        id: 'notifications',
        label: 'Notifications',
        icon: '🔔',
        activeIcon: '🔔',
        href: '/notifications',
        onClick: () => console.log('Notifications'),
      },
      {
        id: 'help',
        label: 'Aide',
        icon: '❓',
        activeIcon: '❓',
        href: '/help',
        onClick: () => console.log('Aide'),
      },
    ],
    activeItem: 'profile',
  },
  parameters: {
    docs: {
      description: {
        story: 'Navigation avec 5 éléments, testant la limite de l\'espace disponible.',
      },
    },
  },
};

export const WithLongLabels: Story = {
  args: {
    items: [
      {
        id: 'very-long-label',
        label: 'Élément avec un label très long',
        icon: '📝',
        activeIcon: '📄',
        href: '/long',
        onClick: () => console.log('Label long'),
      },
      {
        id: 'short',
        label: 'Court',
        icon: '⚡',
        activeIcon: '⚡',
        href: '/short',
        onClick: () => console.log('Court'),
      },
      {
        id: 'medium',
        label: 'Label moyen',
        icon: '📊',
        activeIcon: '📈',
        href: '/medium',
        onClick: () => console.log('Moyen'),
      },
    ],
    activeItem: 'very-long-label',
  },
  parameters: {
    docs: {
      description: {
        story: 'Test avec des labels de différentes longueurs pour vérifier le comportement de troncature.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    items: dashboardItems,
    activeItem: 'analysis',
    variant: 'dashboard',
  },
  parameters: {
    docs: {
      description: {
        story: 'Navigation interactive - cliquez sur les éléments pour voir les changements d\'état.',
      },
    },
  },
  render: (args) => {
    const [activeItem, setActiveItem] = React.useState(args.activeItem);
    
    const itemsWithClick = args.items.map(item => ({
      ...item,
      onClick: () => {
        setActiveItem(item.id);
        item.onClick?.();
      },
    }));

    return (
      <BottomNavigation
        {...args}
        items={itemsWithClick}
        activeItem={activeItem}
      />
    );
  },
};

export const CodeExample: Story = {
  args: {
    items: dashboardItems,
    activeItem: 'analysis',
    variant: 'dashboard',
  },
  parameters: {
    docs: {
      description: {
        story: `
## Exemple de code

\`\`\`tsx
import { BottomNavigation, BottomNavigationItem } from '@/components/molecules/BottomNavigation';

const items: BottomNavigationItem[] = [
  {
    id: 'analysis',
    label: 'Analyse de devis',
    icon: '/dashboard/quick_reference_all.svg',
    activeIcon: '/dashboard/active/quick_reference_all.svg',
    href: '/dashboard/clients',
    onClick: () => console.log('Analyse de devis'),
  },
  {
    id: 'artisans',
    label: 'Artisans',
    icon: '/dashboard/search.svg',
    activeIcon: '/dashboard/active/search.svg',
    href: '/dashboard/clients/search',
    onClick: () => console.log('Artisans'),
  },
  {
    id: 'articles',
    label: 'Articles',
    icon: '/dashboard/articles.svg',
    activeIcon: '/dashboard/active/articles.svg',
    href: '/dashboard/articles',
    onClick: () => console.log('Articles'),
  },
];

function MyComponent() {
  const [activeItem, setActiveItem] = useState('analysis');

  return (
    <BottomNavigation
      items={items}
      activeItem={activeItem}
      variant="dashboard"
    />
  );
}
\`\`\`

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| \`items\` | \`BottomNavigationItem[]\` | - | Liste des éléments de navigation |
| \`activeItem\` | \`string\` | - | ID de l'élément actuellement actif |
| \`variant\` | \`'default' \| 'dashboard'\` | \`'default'\` | Variante de style |
| \`className\` | \`string\` | - | Classes CSS personnalisées |

## BottomNavigationItem

| Prop | Type | Description |
|------|------|-------------|
| \`id\` | \`string\` | Identifiant unique de l'élément |
| \`label\` | \`string\` | Texte affiché sous l'icône |
| \`icon\` | \`string \| React.ReactNode\` | Icône à afficher (inactive) |
| \`activeIcon\` | \`string \| React.ReactNode\` | Icône à afficher quand actif |
| \`href\` | \`string\` | URL de destination |
| \`onClick\` | \`() => void\` | Fonction appelée au clic |
        `,
      },
    },
  },
};