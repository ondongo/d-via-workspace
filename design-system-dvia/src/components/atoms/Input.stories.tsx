import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Le composant Input est un champ de saisie stylisé qui respecte le design system D-Via. Il supporte différents types, états et variantes avec une gestion complète des erreurs et de l\'accessibilité.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'Type de l\'input HTML',
    },
    placeholder: {
      control: 'text',
      description: 'Texte d\'espace réservé',
    },
    value: {
      control: 'text',
      description: 'Valeur de l\'input',
    },
    variant: {
      control: 'select',
      options: ['default', 'error', 'success', 'warning'],
      description: 'Variante de style',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Taille de l\'input',
    },
    disabled: {
      control: 'boolean',
      description: 'Désactiver l\'input',
    },
    required: {
      control: 'boolean',
      description: 'Champ obligatoire',
    },
    label: {
      control: 'text',
      description: 'Label de l\'input',
    },
    helperText: {
      control: 'text',
      description: 'Texte d\'aide',
    },
    errorMessage: {
      control: 'text',
      description: 'Message d\'erreur',
    },
    leftIcon: {
      control: 'object',
      description: 'Icône à gauche',
    },
    rightIcon: {
      control: 'object',
      description: 'Icône à droite',
    },
    className: {
      control: 'text',
      description: 'Classes CSS supplémentaires',
    },
    onChange: {
      action: 'changed',
      description: 'Callback appelé lors du changement',
    },
    onFocus: {
      action: 'focused',
      description: 'Callback appelé lors du focus',
    },
    onBlur: {
      action: 'blurred',
      description: 'Callback appelé lors de la perte de focus',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const searchIcon = (
  <svg className="w-4 h-4 text-dvianeutral-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const emailIcon = (
  <svg className="w-4 h-4 text-dvianeutral-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
  </svg>
);

const lockIcon = (
  <svg className="w-4 h-4 text-dvianeutral-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const eyeIcon = (
  <svg className="w-4 h-4 text-dvianeutral-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

export const Default: Story = {
  args: {
    placeholder: 'Saisissez votre texte...',
    type: 'text',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-4">Variantes de style</h3>
        <div className="space-y-4">
          <Input
            placeholder="État normal"
            variant="default"
            label="Nom"
          />
          <Input
            placeholder="État d'erreur"
            variant="error"
            label="Email"
            errorMessage="Email invalide"
          />
          <Input
            placeholder="État de succès"
            variant="success"
            label="Code postal"
            helperText="Code postal valide"
          />
          <Input
            placeholder="État d'avertissement"
            variant="warning"
            label="Téléphone"
            helperText="Format recommandé: 06 12 34 56 78"
          />
        </div>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-4">Tailles différentes</h3>
        <div className="space-y-4">
          <Input
            placeholder="Petit"
            size="sm"
            label="Small"
          />
          <Input
            placeholder="Moyen"
            size="md"
            label="Medium"
          />
          <Input
            placeholder="Grand"
            size="lg"
            label="Large"
          />
        </div>
      </div>
    </div>
  ),
};

export const Types: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-4">Types d'input</h3>
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Texte"
            label="Texte"
          />
          <Input
            type="email"
            placeholder="email@example.com"
            label="Email"
            leftIcon={emailIcon}
          />
          <Input
            type="password"
            placeholder="Mot de passe"
            label="Mot de passe"
            leftIcon={lockIcon}
            rightIcon={eyeIcon}
          />
          <Input
            type="number"
            placeholder="123456"
            label="Nombre"
          />
          <Input
            type="tel"
            placeholder="06 12 34 56 78"
            label="Téléphone"
          />
          <Input
            type="url"
            placeholder="https://example.com"
            label="URL"
          />
          <Input
            type="search"
            placeholder="Rechercher..."
            label="Recherche"
            leftIcon={searchIcon}
          />
        </div>
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-4">Avec icônes</h3>
        <div className="space-y-4">
          <Input
            placeholder="Avec icône gauche"
            leftIcon={searchIcon}
            label="Recherche"
          />
          <Input
            placeholder="Avec icône droite"
            rightIcon={eyeIcon}
            label="Mot de passe"
            type="password"
          />
          <Input
            placeholder="Avec les deux icônes"
            leftIcon={emailIcon}
            rightIcon={eyeIcon}
            label="Email"
            type="email"
          />
        </div>
      </div>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-4">États</h3>
        <div className="space-y-4">
          <Input
            placeholder="Normal"
            label="Normal"
          />
          <Input
            placeholder="Désactivé"
            label="Désactivé"
            disabled
          />
          <Input
            placeholder="Obligatoire"
            label="Obligatoire"
            required
          />
          <Input
            placeholder="Avec valeur"
            label="Avec valeur"
            value="Valeur pré-remplie"
          />
        </div>
      </div>
    </div>
  ),
};

export const WithMessages: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-4">Avec messages</h3>
        <div className="space-y-4">
          <Input
            placeholder="Avec texte d'aide"
            label="Code postal"
            helperText="Format: 5 chiffres"
          />
          <Input
            placeholder="Avec erreur"
            label="Email"
            variant="error"
            errorMessage="Veuillez saisir un email valide"
          />
          <Input
            placeholder="Avec succès"
            label="Nom d'utilisateur"
            variant="success"
            helperText="Nom d'utilisateur disponible"
          />
        </div>
      </div>
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className="max-w-md space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Formulaire d'inscription</h3>
      <form className="space-y-4">
        <Input
          type="text"
          placeholder="Jean Dupont"
          label="Nom complet"
          required
        />
        <Input
          type="email"
          placeholder="jean.dupont@example.com"
          label="Email"
          leftIcon={emailIcon}
          required
        />
        <Input
          type="password"
          placeholder="••••••••"
          label="Mot de passe"
          leftIcon={lockIcon}
          rightIcon={eyeIcon}
          required
          helperText="Minimum 8 caractères"
        />
        <Input
          type="tel"
          placeholder="06 12 34 56 78"
          label="Téléphone"
        />
        <button
          type="submit"
          className="w-full bg-dviaprimary-40 text-white py-2 px-4 rounded-8px hover:bg-dviaprimary-50 transition-colors"
        >
          S'inscrire
        </button>
      </form>
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    placeholder: 'Tapez quelque chose...',
    type: 'text',
    label: 'Input interactif',
  },
};

export const CodeExample: Story = {
  render: () => (
    <div className="p-4">
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Input } from '@design-system-dvia/components';

// Input basique
<Input
  placeholder="Saisissez votre texte..."
  type="text"
/>

// Avec label et validation
<Input
  type="email"
  placeholder="email@example.com"
  label="Email"
  required
  errorMessage="Email invalide"
  variant="error"
/>

// Avec icônes
<Input
  type="password"
  placeholder="Mot de passe"
  label="Mot de passe"
  leftIcon={<LockIcon />}
  rightIcon={<EyeIcon />}
/>

// Avec texte d'aide
<Input
  type="text"
  placeholder="Code postal"
  label="Code postal"
  helperText="Format: 5 chiffres"
  variant="success"
/>

// Différentes tailles
<Input size="sm" placeholder="Petit" />
<Input size="md" placeholder="Moyen" />
<Input size="lg" placeholder="Grand" />

// Désactivé
<Input
  placeholder="Désactivé"
  disabled
/>

// Avec gestion d'événements
<Input
  placeholder="Avec callbacks"
  onChange={(e) => console.log('Changement:', e.target.value)}
  onFocus={() => console.log('Focus')}
  onBlur={() => console.log('Blur')}
/>

// Exemple de formulaire complet
<form className="space-y-4">
  <Input
    type="text"
    placeholder="Nom complet"
    label="Nom complet"
    required
  />
  <Input
    type="email"
    placeholder="email@example.com"
    label="Email"
    leftIcon={<EmailIcon />}
    required
  />
  <Input
    type="password"
    placeholder="••••••••"
    label="Mot de passe"
    leftIcon={<LockIcon />}
    rightIcon={<EyeIcon />}
    required
    helperText="Minimum 8 caractères"
  />
</form>`}</code>
      </pre>
    </div>
  ),
};