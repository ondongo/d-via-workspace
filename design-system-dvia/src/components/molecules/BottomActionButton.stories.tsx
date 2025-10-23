import type { Meta, StoryObj } from '@storybook/react';
import { BottomActionButton } from './BottomActionButton';

const meta: Meta<typeof BottomActionButton> = {
  title: 'Molecules/BottomActionButton',
  component: BottomActionButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Le composant BottomActionButton est un bouton d\'action fixé en bas de l\'écran, idéal pour les actions principales sur mobile et desktop. Il respecte le design system D-Via avec des variantes et des icônes personnalisables.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Texte du bouton',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost'],
      description: 'Variante de style du bouton',
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
      description: 'Afficher un indicateur de chargement',
    },
    leftIcon: {
      control: 'object',
      description: 'Icône à gauche du texte',
    },
    rightIcon: {
      control: 'object',
      description: 'Icône à droite du texte',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Bouton pleine largeur',
    },
    sticky: {
      control: 'boolean',
      description: 'Bouton collé en bas de l\'écran',
    },
    className: {
      control: 'text',
      description: 'Classes CSS supplémentaires',
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

const plusIcon = (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
);

const checkIcon = (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const arrowRightIcon = (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const phoneIcon = (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const mailIcon = (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export const Default: Story = {
  args: {
    label: 'Action principale',
    variant: 'primary',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-md">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Variantes de style</h3>
        <div className="space-y-2">
          <BottomActionButton
            label="Primary"
            variant="primary"
            onClick={() => console.log('Primary clicked')}
          />
          <BottomActionButton
            label="Secondary"
            variant="secondary"
            onClick={() => console.log('Secondary clicked')}
          />
          <BottomActionButton
            label="Outline"
            variant="outline"
            onClick={() => console.log('Outline clicked')}
          />
          <BottomActionButton
            label="Ghost"
            variant="ghost"
            onClick={() => console.log('Ghost clicked')}
          />
        </div>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-md">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Tailles différentes</h3>
        <div className="space-y-2">
          <BottomActionButton
            label="Small"
            size="sm"
            onClick={() => console.log('Small clicked')}
          />
          <BottomActionButton
            label="Medium"
            size="md"
            onClick={() => console.log('Medium clicked')}
          />
          <BottomActionButton
            label="Large"
            size="lg"
            onClick={() => console.log('Large clicked')}
          />
        </div>
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-md">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Avec icônes</h3>
        <div className="space-y-2">
          <BottomActionButton
            label="Ajouter un projet"
            leftIcon={plusIcon}
            onClick={() => console.log('Add project clicked')}
          />
          <BottomActionButton
            label="Confirmer"
            leftIcon={checkIcon}
            variant="secondary"
            onClick={() => console.log('Confirm clicked')}
          />
          <BottomActionButton
            label="Continuer"
            rightIcon={arrowRightIcon}
            variant="outline"
            onClick={() => console.log('Continue clicked')}
          />
          <BottomActionButton
            label="Appeler"
            leftIcon={phoneIcon}
            rightIcon={arrowRightIcon}
            variant="ghost"
            onClick={() => console.log('Call clicked')}
          />
        </div>
      </div>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-md">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">États</h3>
        <div className="space-y-2">
          <BottomActionButton
            label="Normal"
            onClick={() => console.log('Normal clicked')}
          />
          <BottomActionButton
            label="Désactivé"
            disabled
            onClick={() => console.log('Disabled clicked')}
          />
          <BottomActionButton
            label="En chargement"
            loading
            onClick={() => console.log('Loading clicked')}
          />
          <BottomActionButton
            label="Pleine largeur"
            fullWidth
            onClick={() => console.log('Full width clicked')}
          />
        </div>
      </div>
    </div>
  ),
};

export const Sticky: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-md">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Bouton collé</h3>
        <div className="space-y-2">
          <BottomActionButton
            label="Bouton collé en bas"
            sticky
            onClick={() => console.log('Sticky clicked')}
          />
          <BottomActionButton
            label="Bouton normal"
            onClick={() => console.log('Normal clicked')}
          />
        </div>
      </div>
    </div>
  ),
};

export const MobileActions: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-md">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Actions mobiles</h3>
        <div className="space-y-2">
          <BottomActionButton
            label="Contacter l'artisan"
            leftIcon={mailIcon}
            variant="primary"
            fullWidth
            onClick={() => console.log('Contact artisan clicked')}
          />
          <BottomActionButton
            label="Appeler maintenant"
            leftIcon={phoneIcon}
            variant="secondary"
            fullWidth
            onClick={() => console.log('Call now clicked')}
          />
          <BottomActionButton
            label="Voir le profil"
            rightIcon={arrowRightIcon}
            variant="outline"
            fullWidth
            onClick={() => console.log('View profile clicked')}
          />
        </div>
      </div>
    </div>
  ),
};

export const FormActions: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-md">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Actions de formulaire</h3>
        <div className="space-y-2">
          <BottomActionButton
            label="Enregistrer les modifications"
            leftIcon={checkIcon}
            variant="primary"
            onClick={() => console.log('Save clicked')}
          />
          <BottomActionButton
            label="Annuler"
            variant="outline"
            onClick={() => console.log('Cancel clicked')}
          />
          <BottomActionButton
            label="Supprimer"
            variant="ghost"
            onClick={() => console.log('Delete clicked')}
          />
        </div>
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    label: 'Bouton interactif',
    variant: 'primary',
    leftIcon: plusIcon,
  },
};

export const CodeExample: Story = {
  render: () => (
    <div className="p-4">
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { BottomActionButton } from '@design-system-dvia/components';

// Bouton basique
<BottomActionButton
  label="Action principale"
  variant="primary"
  onClick={() => console.log('Clicked')}
/>

// Avec icône
<BottomActionButton
  label="Ajouter un projet"
  leftIcon={<PlusIcon />}
  variant="primary"
  onClick={() => console.log('Add project')}
/>

// Bouton collé en bas
<BottomActionButton
  label="Bouton collé"
  sticky
  variant="primary"
  onClick={() => console.log('Sticky clicked')}
/>

// Pleine largeur
<BottomActionButton
  label="Pleine largeur"
  fullWidth
  variant="secondary"
  onClick={() => console.log('Full width clicked')}
/>

// Avec état de chargement
<BottomActionButton
  label="En cours..."
  loading
  variant="primary"
  onClick={() => console.log('Loading clicked')}
/>

// Désactivé
<BottomActionButton
  label="Désactivé"
  disabled
  variant="primary"
  onClick={() => console.log('Disabled clicked')}
/>

// Différentes variantes
<BottomActionButton label="Primary" variant="primary" />
<BottomActionButton label="Secondary" variant="secondary" />
<BottomActionButton label="Outline" variant="outline" />
<BottomActionButton label="Ghost" variant="ghost" />

// Différentes tailles
<BottomActionButton label="Small" size="sm" />
<BottomActionButton label="Medium" size="md" />
<BottomActionButton label="Large" size="lg" />

// Actions mobiles typiques
<BottomActionButton
  label="Contacter l'artisan"
  leftIcon={<MailIcon />}
  variant="primary"
  fullWidth
  onClick={() => contactArtisan()}
/>

<BottomActionButton
  label="Appeler maintenant"
  leftIcon={<PhoneIcon />}
  variant="secondary"
  fullWidth
  onClick={() => callArtisan()}
/>

// Actions de formulaire
<BottomActionButton
  label="Enregistrer"
  leftIcon={<CheckIcon />}
  variant="primary"
  onClick={() => saveForm()}
/>

<BottomActionButton
  label="Annuler"
  variant="outline"
  onClick={() => cancelForm()}
/>`}</code>
      </pre>
    </div>
  ),
};