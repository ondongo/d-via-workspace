import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Organisms/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Le composant Header fournit une navigation principale avec logo, menu de navigation et bouton CTA. Il s\'adapte automatiquement aux écrans mobiles et desktop.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'transparent', 'sticky'],
      description: 'Variante de style du header',
    },
    showMobileMenu: {
      control: 'boolean',
      description: 'Afficher le menu mobile',
    },
    onMobileMenuToggle: {
      action: 'mobileMenuToggled',
      description: 'Callback appelé quand le menu mobile est basculé',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logo: {
      src: '/logos/logo.png',
      alt: 'Logo D-Via',
      width: 120,
      height: 40,
    },
    navigation: [
      { label: 'Accueil', href: '/', active: true },
      { label: 'Services', href: '/services' },
      { label: 'À propos', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    ctaButton: {
      label: 'Commencer',
      onClick: () => console.log('CTA clicked'),
      variant: 'primary',
    },
  },
};

export const WithNavigation: Story = {
  args: {
    logo: {
      src: '/logos/logo.png',
      alt: 'Logo D-Via',
      width: 120,
      height: 40,
    },
    navigation: [
      { label: 'Accueil', href: '/', active: false },
      { label: 'Services', href: '/services', active: true },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'À propos', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
    ctaButton: {
      label: 'Demander un devis',
      onClick: () => console.log('Devis demandé'),
      variant: 'primary',
    },
  },
};

export const WithoutCTA: Story = {
  args: {
    logo: {
      src: '/logos/logo.png',
      alt: 'Logo D-Via',
      width: 120,
      height: 40,
    },
    navigation: [
      { label: 'Accueil', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'À propos', href: '/about' },
    ],
  },
};



export const Sticky: Story = {
  args: {
    logo: {
      src: '/logos/logo.png',
      alt: 'Logo D-Via',
      width: 120,
      height: 40,
    },
    navigation: [
      { label: 'Accueil', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'À propos', href: '/about' },
    ],
    ctaButton: {
      label: 'Commencer',
      onClick: () => console.log('CTA clicked'),
      variant: 'primary',
    },
    variant: 'sticky',
  },
  decorators: [
    (Story) => (
      <div className="h-screen">
        <Story />
        <div className="p-8 space-y-4">
          <h2 className="text-2xl font-bold">Contenu de la page</h2>
          <p>Faites défiler pour voir l'effet sticky du header.</p>
          {Array.from({ length: 20 }, (_, i) => (
            <p key={i}>Paragraphe {i + 1} - Lorem ipsum dolor sit amet...</p>
          ))}
        </div>
      </div>
    ),
  ],
};

export const MobileMenu: Story = {
  args: {
    logo: {
      src: '/logos/logo.png',
      alt: 'Logo D-Via',
      width: 120,
      height: 40,
    },
    navigation: [
      { label: 'Accueil', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'À propos', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
    ctaButton: {
      label: 'Commencer',
      onClick: () => console.log('CTA clicked'),
      variant: 'primary',
    },
    showMobileMenu: true,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const Interactive: Story = {
  args: {
    logo: {
      src: '/logos/logo.png',
      alt: 'Logo D-Via',
      width: 120,
      height: 40,
    },
    navigation: [
      { label: 'Accueil', href: '/', active: false },
      { label: 'Services', href: '/services', active: true },
      { label: 'À propos', href: '/about', active: false },
    ],
    ctaButton: {
      label: 'Commencer',
      onClick: () => console.log('CTA clicked'),
      variant: 'primary',
    },
  },
};

export const CodeExample: Story = {
  render: () => (
    <div className="p-4">
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Header } from '@design-system-dvia/components';

// Header basique
<Header
  logo={{
    src: '/logos/logo.png',
    alt: 'Logo D-Via',
    width: 120,
    height: 40,
  }}
  navigation={[
    { label: 'Accueil', href: '/', active: true },
    { label: 'Services', href: '/services' },
    { label: 'À propos', href: '/about' },
  ]}
  ctaButton={{
    label: 'Commencer',
    onClick: () => console.log('CTA clicked'),
    variant: 'primary',
  }}
/>

// Header transparent
<Header
  variant="transparent"
  logo={{
    src: '/logos/logo.png',
    alt: 'Logo D-Via',
    width: 120,
    height: 40,
  }}
  navigation={[
    { label: 'Accueil', href: '/' },
    { label: 'Services', href: '/services' },
  ]}
  ctaButton={{
    label: 'Commencer',
    onClick: () => console.log('CTA clicked'),
    variant: 'outline',
  }}
/>

// Header sticky
<Header
  variant="sticky"
  logo={{
    src: '/logos/logo.png',
    alt: 'Logo D-Via',
    width: 120,
    height: 40,
  }}
  navigation={[
    { label: 'Accueil', href: '/' },
    { label: 'Services', href: '/services' },
  ]}
  onMobileMenuToggle={() => console.log('Menu mobile toggled')}
/>`}</code>
      </pre>
    </div>
  ),
};