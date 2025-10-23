import type { Meta, StoryObj } from '@storybook/react';
import { NavigationRail } from './NavigationRail';

const meta: Meta<typeof NavigationRail> = {
  title: 'Molecules/NavigationRail',
  component: NavigationRail,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Le composant NavigationRail fournit une barre de navigation latérale avec des icônes et des labels. Il respecte parfaitement le design de D-Via.
        `,
      },
    },
  },

  tags: ["autodocs"],
  argTypes: {
    variant: {
      description: 'Variante de style de la barre de navigation',
      control: { type: 'select' },
      options: ['default', 'compact'],
    },
    expandOnHover: {
      description: 'Étendre la barre au survol',
      control: { type: 'boolean' },
    },
    items: {
      description: 'Liste des éléments de navigation',
      control: { type: 'object' },
    },
    activeItem: {
      description: 'ID de l\'élément actuellement actif',
      control: { type: 'text' },
    },
    className: {
      description: 'Classes CSS personnalisées',
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NavigationRail>;

const defaultItems = [
  {
    id: 'home',
    label: 'Accueil',
    icon: '/icons/home.svg',
    activeIcon: '/icons/home-active.svg',
    href: '/',
  },
  {
    id: 'Blog',
    label: 'Blog',
    icon: '/icons/products.svg',
    activeIcon: '/icons/products-active.svg',
    href: '/blog',
  },

];

export const Default: Story = {
  args: {
    items: defaultItems,
    activeItem: 'home',
    logo: {
      src: '/logos/logo.png',
      alt: 'Logo',
      width: 48,
      height: 48,
    },
  },
};

export const Compact: Story = {
  args: {
    items: defaultItems,
    activeItem: 'Blog',
    variant: 'compact',
    logo: {
      src: '/logos/logo.png',
      alt: 'Logo',
      width: 40,
      height: 40,
    },
  },
};

export const WithoutLogo: Story = {
  args: {
    items: defaultItems,
    activeItem: 'settings',
  },
};

export const NoHover: Story = {
  args: {
    items: defaultItems,
    activeItem: 'home',
    expandOnHover: false,
    logo: {
      src: '/logos/logo.png',
      alt: 'Logo',
      width: 48,
      height: 48,
    },
  },
};

export const ManyItems: Story = {
  args: {
    items: [
      ...defaultItems,
      {
        id: 'analytics',
        label: 'Analytics',
        icon: '/icons/analytics.svg',
        activeIcon: '/icons/analytics-active.svg',
        href: '/analytics',
      },
      {
        id: 'reports',
        label: 'Rapports',
        icon: '/icons/reports.svg',
        activeIcon: '/icons/reports-active.svg',
        href: '/reports',
      },
      {
        id: 'help',
        label: 'Aide',
        icon: '/icons/help.svg',
        activeIcon: '/icons/help-active.svg',
        href: '/help',
      },
    ],
    activeItem: 'analytics',
    logo: {
      src: '/logos/logo.png',
      alt: 'Logo',
      width: 48,
      height: 48,
    },
  },
};

export const CodeExample: Story = {
  args: {
    items: defaultItems,
    activeItem: 'home',
  },
  parameters: {
    docs: {
      description: {
        story: `
## Exemple de code

### Utilisation basique

\`\`\`tsx
import { NavigationRail } from '@/components/molecules/NavigationRail';

const items = [
  {
    id: 'home',
    label: 'Accueil',
    icon: '/icons/home.svg',
    href: '/',
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: '/icons/dashboard.svg',
    href: '/dashboard',
  },
  // ... autres éléments
];

function MyComponent() {
  return (
    <NavigationRail
      items={items}
      activeItem="home"
    />
  );
}
\`\`\`

### Avec expansion au hover

\`\`\`tsx
<NavigationRail
  items={items}
  activeItem="dashboard"
  expandOnHover={true}
  variant="default"
/>
\`\`\`

### Mode compact

\`\`\`tsx
<NavigationRail
  items={items}
  activeItem="settings"
  variant="compact"
  expandOnHover={false}
/>
\`\`\`

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| \`items\` | \`NavigationRailItem[]\` | - | Liste des éléments de navigation |
| \`activeItem\` | \`string\` | - | ID de l'élément actuellement actif |
| \`variant\` | \`'default' \| 'compact'\` | \`'default'\` | Variante de style |
| \`expandOnHover\` | \`boolean\` | \`false\` | Étendre la barre au survol |
| \`className\` | \`string\` | - | Classes CSS personnalisées |

## Types

### NavigationRailItem
\`\`\`tsx
interface NavigationRailItem {
  id: string;
  label: string;
  icon: string;
  activeIcon?: string;
  href: string;
  onClick?: () => void;
}
\`\`\`

## Variantes

### Default
- Barre de navigation standard
- Largeur normale
- Labels visibles

### Compact
- Barre de navigation compacte
- Largeur réduite
- Optimisée pour les petits espaces
        `,
      },
    },
  },
};
