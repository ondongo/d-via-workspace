import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Le composant Button fournit des boutons stylisés avec différentes variantes, tailles et états. Il utilise le système de design D-Via avec un texte blanc par défaut et des styles cohérents.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'destructive'],
      description: 'Style visuel du bouton',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Taille du bouton',
    },
    disabled: {
      control: 'boolean',
      description: 'Désactiver le bouton',
    },
    loading: {
      control: 'boolean',
      description: 'Afficher un état de chargement',
    },
    onClick: {
      action: 'clicked',
      description: 'Callback appelé au clic',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Bouton par défaut',
    variant: 'primary',
    size: 'md',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-4">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <Button
          leftIcon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          }
        >
          Ajouter
        </Button>
        
        <Button
          rightIcon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          }
        >
          Suivant
        </Button>
        
        <Button
          leftIcon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
          }
          rightIcon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          }
        >
          Télécharger
        </Button>
      </div>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-4">États normaux</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Normal</Button>
          <Button variant="secondary">Normal</Button>
          <Button variant="outline">Normal</Button>
          <Button variant="ghost">Normal</Button>
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-4">États hover</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" className="hover:bg-dviaprimary-50">Hover Primary</Button>
          <Button variant="secondary" className="hover:bg-dviasecondary-50">Hover Secondary</Button>
          <Button variant="outline" className="hover:bg-dvianeutral-90">Hover Outline</Button>
          <Button variant="ghost" className="hover:bg-dvianeutral-90">Hover Ghost</Button>
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-4">États désactivés</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" disabled>Disabled Primary</Button>
          <Button variant="secondary" disabled>Disabled Secondary</Button>
          <Button variant="outline" disabled>Disabled Outline</Button>
          <Button variant="ghost" disabled>Disabled Ghost</Button>
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-4">États de chargement</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" loading>Loading Primary</Button>
          <Button variant="secondary" loading>Loading Secondary</Button>
          <Button variant="outline" loading>Loading Outline</Button>
          <Button variant="ghost" loading>Loading Ghost</Button>
        </div>
      </div>
    </div>
  ),
};

export const TextColors: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-4">Couleurs de texte par variante</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Button variant="primary">Primary - Texte blanc</Button>
            <span className="text-sm text-gray-600">text-white</span>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="secondary">Secondary - Texte blanc</Button>
            <span className="text-sm text-gray-600">text-white</span>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="outline">Outline - Texte sombre</Button>
            <span className="text-sm text-gray-600">text-dvianeutral-10</span>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost">Ghost - Texte sombre</Button>
            <span className="text-sm text-gray-600">text-dvianeutral-10</span>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="destructive">Destructive - Texte blanc</Button>
            <span className="text-sm text-gray-600">text-white</span>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const DviaExamples: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-4">Exemples D-Via</h3>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="lg">
              Commencer en tant que client
            </Button>
            
            <Button variant="primary" size="lg">
              Commencer en tant qu'artisan
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" size="md">
              Contacter
            </Button>
            
            <Button variant="primary" size="md">
              Appeler
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button variant="ghost" size="sm">
              Voir plus
            </Button>
            
            <Button variant="destructive" size="sm">
              Supprimer
            </Button>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    children: 'Bouton interactif',
    variant: 'primary',
    size: 'md',
  },
};

export const CodeExample: Story = {
  render: () => (
    <div className="p-4">
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Button } from '@design-system-dvia/components';

// Bouton basique avec texte blanc
<Button variant="primary">
  Commencer
</Button>

// Bouton avec icônes
<Button
  variant="primary"
  leftIcon={<PlusIcon />}
  rightIcon={<ArrowRightIcon />}
>
  Ajouter un élément
</Button>

// Bouton de chargement
<Button variant="primary" loading>
  Chargement...
</Button>

// Bouton désactivé
<Button variant="primary" disabled>
  Non disponible
</Button>

// Différentes variantes
<Button variant="primary">Primary - Texte blanc</Button>
<Button variant="secondary">Secondary - Texte blanc</Button>
<Button variant="outline">Outline - Texte sombre</Button>
<Button variant="ghost">Ghost - Texte sombre</Button>
<Button variant="destructive">Destructive - Texte blanc</Button>

// Différentes tailles
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Exemples D-Via
<Button variant="primary" size="lg">
  Commencer en tant que client
</Button>

<Button variant="outline" size="md">
  Contacter un artisan
</Button>`}</code>
      </pre>
    </div>
  ),
};