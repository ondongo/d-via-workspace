import type { Meta, StoryObj } from '@storybook/react';
import { PricingCard } from './PricingCard';

const meta: Meta<typeof PricingCard> = {
  title: 'Molecules/PricingCard',
  component: PricingCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Le composant PricingCard affiche les informations de tarification avec des fonctionnalités, des prix et des boutons d'action. Il respecte parfaitement le design de D-Via.
        `,
      },
    },
  },
  argTypes: {
    featured: {
      control: 'boolean',
      description: 'Mettre en avant cette carte de prix',
    },
    popular: {
      control: 'boolean',
      description: 'Afficher un badge "Populaire"',
    },
    onSelect: {
      action: 'selected',
      description: 'Callback appelé quand la carte est sélectionnée',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'basic-plan',
    name: 'Pack découverte',
    price: '8.99',
    description: 'Créditez votre compte pour analyser 10 devis avec l\'IA.',
    features: [
      '10 crédits d\'analyse de devis',
      'Utilisable à tout moment',
    ],
    href: '/coming',
    featured: false,
    popular: false,
    buttonText: 'Acheter maintenant',
    tierIdx: 0,
    currency: '€',
  },
  render: (args) => (
    <div className="w-96">
      <PricingCard {...args} />
    </div>
  ),
};

export const Featured: Story = {
  args: {
    id: 'pro-plan',
    name: 'Pack pro',
    price: '29.99',
    description: 'Idéal pour un usage plus régulier ou professionnel.',
    features: [
      '30 crédits d\'analyse de devis',
      'Utilisable à tout moment',
      'Sans expiration',
    ],
    href: '/coming',
    featured: true,
    popular: true,
    buttonText: 'Acheter maintenant',
    tierIdx: 1,
    currency: '€',
  },
  render: (args) => (
    <div className="w-96">
      <PricingCard {...args} />
    </div>
  ),
};

export const Popular: Story = {
  args: {
    id: 'popular-plan',
    name: 'Pack populaire',
    price: '19.99',
    description: 'Le choix le plus populaire parmi nos utilisateurs.',
    features: [
      '20 crédits d\'analyse de devis',
      'Support prioritaire',
      'Rapports détaillés',
      'Formation incluse',
    ],
    href: '/coming',
    featured: false,
    popular: true,
    buttonText: 'Choisir le pack populaire',
  },
  render: (args) => (
    <div className="w-80">
      <PricingCard {...args} />
    </div>
  ),
};

export const Comparison: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
      <PricingCard
        id="basic"
        name="Pack découverte"
        price="8.99"
        description="Créditez votre compte pour analyser 10 devis avec l'IA."
        features={[
          '10 crédits d\'analyse de devis',
          'Utilisable à tout moment',
          'Support par email',
        ]}
        href="/coming"
        featured={false}
        popular={false}
        buttonText="Choisir ce pack"
      />
      <PricingCard
        id="pro"
        name="Pack pro"
        price="29.99"
        description="Idéal pour un usage plus régulier ou professionnel."
        features={[
          '30 crédits d\'analyse de devis',
          'Utilisable à tout moment',
          'Sans expiration',
          'Support prioritaire',
          'Rapports détaillés',
        ]}
        href="/coming"
        featured={true}
        popular={true}
        buttonText="Choisir le pack pro"
      />
      <PricingCard
        id="enterprise"
        name="Pack entreprise"
        price="99.99"
        description="Solution complète pour les grandes entreprises."
        features={[
          '100 crédits d\'analyse de devis',
          'Support 24/7',
          'API personnalisée',
          'Formation incluse',
          'Gestionnaire dédié',
        ]}
        href="/coming"
        featured={false}
        popular={false}
        buttonText="Choisir l'entreprise"
      />
    </div>
  ),
};

export const DviaDesign: Story = {
  render: () => (
    <div className="mx-auto grid max-w-lg grid-cols-1 items-center gap-y-6 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
      <PricingCard
        id="pack-5"
        name="Pack découverte"
        price="8.99"
        description="Créditez votre compte pour analyser 10 devis avec l'IA."
        features={[
          '10 crédits d\'analyse de devis',
          'Utilisable à tout moment',
        ]}
        href="/coming"
        featured={false}
        popular={false}
        buttonText="Acheter maintenant"
        tierIdx={0}
        isMultiple={true}
        currency="€"
      />
      <PricingCard
        id="pack-20"
        name="Pack pro"
        price="29.99"
        description="Idéal pour un usage plus régulier ou professionnel."
        features={[
          '30 crédits d\'analyse de devis',
          'Utilisable à tout moment',
          'Sans expiration',
        ]}
        href="/coming"
        featured={true}
        popular={true}
        buttonText="Acheter maintenant"
        tierIdx={1}
        isMultiple={true}
        currency="€"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Design D-Via authentique copié exactement de la page pricing originale avec cartes collées.",
      },
    },
  },
};

export const ColledCards: Story = {
  render: () => (
    <div className="mx-auto grid max-w-lg grid-cols-1 items-center gap-y-6 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
      <PricingCard
        id="pack-5"
        name="Pack découverte"
        price="8.99"
        description="Créditez votre compte pour analyser 10 devis avec l'IA."
        features={[
          '10 crédits d\'analyse de devis',
          'Utilisable à tout moment',
        ]}
        href="/coming"
        featured={false}
        popular={false}
        buttonText="Acheter maintenant"
        tierIdx={0}
        isMultiple={true}
        currency="€"
      />
      <PricingCard
        id="pack-20"
        name="Pack pro"
        price="29.99"
        description="Idéal pour un usage plus régulier ou professionnel."
        features={[
          '30 crédits d\'analyse de devis',
          'Utilisable à tout moment',
          'Sans expiration',
        ]}
        href="/coming"
        featured={true}
        popular={true}
        buttonText="Acheter maintenant"
        tierIdx={1}
        isMultiple={true}
        currency="€"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Cartes collées ensemble comme dans le design D-Via original.",
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    id: 'interactive-plan',
    name: 'Pack interactif',
    price: '49.99',
    description: 'Testez les différentes options de cette carte.',
    features: [
      '50 crédits d\'analyse de devis',
      'Fonctionnalités avancées',
      'Support premium',
    ],
    href: '/coming',
    featured: false,
    popular: false,
    currency: '€',
  },
  render: (args) => (
    <div className="w-80">
      <PricingCard {...args} />
    </div>
  ),
};

export const CodeExample: Story = {
  render: () => (
    <div className="p-4">
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { PricingCard } from '@design-system-dvia/components';

// Carte de prix basique
<PricingCard
  id="basic-plan"
  name="Pack découverte"
  price="8.99€"
  description="Créditez votre compte pour analyser 10 devis avec l'IA."
  features={[
    '10 crédits d\'analyse de devis',
    'Utilisable à tout moment',
  ]}
  href="/coming"
  onSelect={(id) => console.log('Plan sélectionné:', id)}
/>

// Carte mise en avant
<PricingCard
  id="pro-plan"
  name="Pack pro"
  price="29.99€"
  description="Idéal pour un usage plus régulier ou professionnel."
  features={[
    '30 crédits d\'analyse de devis',
    'Utilisable à tout moment',
    'Sans expiration',
  ]}
  href="/coming"
  featured={true}
  popular={true}
  onSelect={(id) => console.log('Plan pro sélectionné:', id)}
/>`}</code>
      </pre>
    </div>
  ),
};