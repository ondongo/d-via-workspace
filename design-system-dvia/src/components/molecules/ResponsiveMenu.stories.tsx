import type { Meta, StoryObj } from "@storybook/react";
import { ResponsiveMenu } from "./ResponsiveMenu";

const meta: Meta<typeof ResponsiveMenu> = {
  title: "Molecules/ResponsiveMenu",
  component: ResponsiveMenu,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Le composant ResponsiveMenu fournit une navigation responsive qui s'adapte automatiquement entre desktop et mobile. Il respecte parfaitement le design de D-Via.

        `,
      },
    },
  },

  tags: ["autodocs"],
  argTypes: {
    items: {
      description: "Liste des éléments de menu",
      control: { type: "object" },
    },
    variant: {
      description: "Variante du menu",
      control: { type: "select" },
      options: ["default", "compact"],
    },
    logo: {
      description: "Configuration du logo",
      control: { type: "object" },
    },
    showMobileMenu: {
      description: "Afficher le menu mobile",
      control: { type: "boolean" },
    },
    onMobileMenuToggle: {
      description: "Callback pour le toggle du menu mobile",
      action: "mobileMenuToggle",
    },
    className: {
      description: "Classes CSS personnalisées",
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ResponsiveMenu>;

const defaultMenuItems = [
  {
    label: "Accueil",
    href: "/",
    active: true,
    onClick: () => console.log("Accueil cliqué"),
  },
  {
    label: "Services",
    href: "/services",
    onClick: () => console.log("Services cliqué"),
  },
  {
    label: "À propos",
    href: "/about",
    onClick: () => console.log("À propos cliqué"),
  },
  {
    label: "Contact",
    href: "/contact",
    onClick: () => console.log("Contact cliqué"),
  },
];

export const Default: Story = {
  args: {
    items: defaultMenuItems,
    variant: "default",
  },
};

export const Compact: Story = {
  args: {
    items: defaultMenuItems,
    variant: "compact",
  },
  parameters: {
    docs: {
      description: {
        story: "Version compacte du menu, idéale pour les dashboards.",
      },
    },
  },
};

export const WithLogo: Story = {
  args: {
    items: defaultMenuItems,
    variant: "default",
    logo: {
      src: "/logos/logo.png",
      alt: "Logo D-Via",
      width: 120,
      height: 40,
      onClick: () => console.log("Logo cliqué"),
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Menu avec logo D-Via personnalisé.",
      },
    },
  },
};

export const MobileMenu: Story = {
  args: {
    items: defaultMenuItems,
    variant: "default",
    showMobileMenu: true,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story: "Menu en mode mobile avec hamburger et overlay.",
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    items: defaultMenuItems.map((item) => ({
      ...item,
      onClick: () => console.log(`${item.label} sélectionné`),
    })),
    variant: "default",
    onMobileMenuToggle: (isOpen) => console.log("Menu mobile:", isOpen),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Menu interactif avec callbacks pour les clics et le toggle mobile.",
      },
    },
  },
};

export const DviaDesign: Story = {
  args: {
    items: [
      {
        label: "Accueil",
        href: "/",
        active: true,
        onClick: () => console.log("Accueil cliqué"),
      },
      {
        label: "Services",
        href: "/services",
        onClick: () => console.log("Services cliqué"),
      },
      {
        label: "Artisans",
        href: "/artisans",
        onClick: () => console.log("Artisans cliqué"),
      },
      {
        label: "À propos",
        href: "/about",
        onClick: () => console.log("À propos cliqué"),
      },
      {
        label: "Contact",
        href: "/contact",
        onClick: () => console.log("Contact cliqué"),
      },
    ],
    variant: "default",
    logo: {
      src: "/logos/logo.png",
      alt: "D-Via Logo",
      width: 120,
      height: 40,
      onClick: () => console.log("Logo D-Via cliqué"),
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Menu responsive avec le design exact de D-Via, incluant le logo et la navigation principale.",
      },
    },
  },
};

export const CodeExample: Story = {
  args: {
    items: defaultMenuItems,
    variant: "default",
  },
  parameters: {
    docs: {
      description: {
        story: `
## Exemple de code

### Utilisation basique

\`\`\`tsx
import { ResponsiveMenu } from '@/components/molecules/ResponsiveMenu';

const menuItems = [
  {
    label: 'Accueil',
    href: '/',
    active: true,
    onClick: () => console.log('Accueil cliqué')
  },
  {
    label: 'Services',
    href: '/services',
    onClick: () => console.log('Services cliqué')
  },
  {
    label: 'À propos',
    href: '/about',
    onClick: () => console.log('À propos cliqué')
  },
  {
    label: 'Contact',
    href: '/contact',
    onClick: () => console.log('Contact cliqué')
  }
];

function MyComponent() {
  return (
    <ResponsiveMenu
      items={menuItems}
      variant="default"
    />
  );
}
\`\`\`

### Avec état actif dynamique

\`\`\`tsx
import { ResponsiveMenu } from '@/components/molecules/ResponsiveMenu';
import { useState } from 'react';

function NavigationComponent() {
  const [activeItem, setActiveItem] = useState('Accueil');

  const menuItems = [
    {
      label: 'Accueil',
      href: '/',
      active: activeItem === 'Accueil',
      onClick: () => setActiveItem('Accueil')
    },
    {
      label: 'Services',
      href: '/services',
      active: activeItem === 'Services',
      onClick: () => setActiveItem('Services')
    },
    {
      label: 'À propos',
      href: '/about',
      active: activeItem === 'À propos',
      onClick: () => setActiveItem('À propos')
    },
    {
      label: 'Contact',
      href: '/contact',
      active: activeItem === 'Contact',
      onClick: () => setActiveItem('Contact')
    }
  ];

  return (
    <ResponsiveMenu
      items={menuItems}
      variant="default"
    />
  );
}
\`\`\`

### Variante compacte

\`\`\`tsx
<ResponsiveMenu
  items={menuItems}
  variant="compact"
/>
\`\`\`

### Avec logo personnalisé

\`\`\`tsx
<ResponsiveMenu
  items={menuItems}
  variant="default"
  logo={{
    src: '/logos/logo.png',
    alt: 'Mon Logo',
    width: 120,
    height: 40,
    onClick: () => console.log('Logo cliqué')
  }}
/>
\`\`\`

### Menu mobile avec overlay

\`\`\`tsx
<ResponsiveMenu
  items={menuItems}
  variant="default"
  showMobileMenu={true}
  onMobileMenuToggle={(isOpen) => console.log('Menu mobile:', isOpen)}
/>
\`\`\`

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| \`items\` | \`ResponsiveMenuItem[]\` | - | Liste des éléments de menu |
| \`variant\` | \`'default' \| 'compact'\` | \`'default'\` | Variante du menu |
| \`logo\` | \`ResponsiveMenuLogo\` | - | Configuration du logo |
| \`showMobileMenu\` | \`boolean\` | \`true\` | Afficher le menu mobile |
| \`onMobileMenuToggle\` | \`(isOpen: boolean) => void\` | - | Callback pour le toggle du menu mobile |
| \`className\` | \`string\` | - | Classes CSS personnalisées |

## Types

### ResponsiveMenuItem
\`\`\`tsx
interface ResponsiveMenuItem {
  label: string;
  href: string;
  active?: boolean;
  onClick?: () => void;
}
\`\`\`

### ResponsiveMenuLogo
\`\`\`tsx
interface ResponsiveMenuLogo {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}
\`\`\`

## Variantes

### Default
- Menu standard avec logo et navigation
- Menu hamburger sur mobile
- Overlay semi-transparent

### Compact
- Version compacte du menu
- Moins d'espace vertical
- Idéal pour les dashboards

## Comportement responsive

### Desktop
- Menu horizontal complet
- Logo visible
- Tous les éléments de navigation visibles

### Mobile
- Menu hamburger
- Logo centré
- Menu slide depuis la gauche
- Overlay semi-transparent
- Fermeture automatique au clic sur un élément

## Animations

- **Menu mobile** : Slide depuis la gauche avec transition fluide
- **Overlay** : Fade in/out
- **Hover** : Effets de survol sur les éléments
- **Active** : Indicateur visuel pour l'élément actif
        `,
      },
    },
  },
};
