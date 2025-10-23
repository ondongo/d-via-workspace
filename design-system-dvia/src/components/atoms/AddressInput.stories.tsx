import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AddressInput } from './AddressInput';

const meta: Meta<typeof AddressInput> = {
  title: 'Atoms/AddressInput',
  component: AddressInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Le composant AddressInput fournit une interface de saisie d\'adresse avec suggestions automatiques, recherche en temps réel et validation. Il s\'adapte dynamiquement avec des coins arrondis et un bouton de fermeture.',
      },
    },
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Texte d\'aide affiché dans le champ',
    },
    value: {
      control: 'text',
      description: 'Valeur actuelle de l\'input',
    },
    disabled: {
      control: 'boolean',
      description: 'Désactiver l\'input',
    },
    showSuggestions: {
      control: 'boolean',
      description: 'Afficher les suggestions',
    },
    onSelect: {
      action: 'selected',
      description: 'Callback appelé quand une suggestion est sélectionnée',
    },
    onChange: {
      action: 'changed',
      description: 'Callback appelé quand la valeur change',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleSuggestions = [
  {
    display_name: '123 Rue de la Paix, 75001 Paris, France',
    lat: '48.8566',
    lon: '2.3522',
  },
  {
    display_name: '456 Avenue des Champs-Élysées, 75008 Paris, France',
    lat: '48.8566',
    lon: '2.3522',
  },
  {
    display_name: '789 Boulevard Saint-Germain, 75006 Paris, France',
    lat: '48.8566',
    lon: '2.3522',
  },
  {
    display_name: '321 Place de la Bastille, 75011 Paris, France',
    lat: '48.8566',
    lon: '2.3522',
  },
];

export const Default: Story = {
  args: {
    placeholder: 'Où êtes-vous situé ?',
    value: '',
    suggestions: [],
    showSuggestions: true,
  },
};

export const WithSuggestions: Story = {
  args: {
    placeholder: 'Où êtes-vous situé ?',
    value: 'Paris',
    suggestions: sampleSuggestions,
    showSuggestions: true,
  },
};

export const WithValue: Story = {
  args: {
    placeholder: 'Où êtes-vous situé ?',
    value: '123 Rue de la Paix, 75001 Paris',
    suggestions: [],
    showSuggestions: true,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Où êtes-vous situé ?',
    value: 'Adresse verrouillée',
    suggestions: [],
    showSuggestions: true,
    disabled: true,
  },
};

export const WithCustomIcon: Story = {
  args: {
    placeholder: 'Où êtes-vous situé ?',
    value: '',
    suggestions: sampleSuggestions,
    showSuggestions: true,
    icon: (
      <svg className="w-4 h-4 text-dviaprimary-40" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    ),
  },
};

export const Interactive: Story = {
  args: {
    placeholder: 'Tapez votre adresse...',
    value: '',
    suggestions: sampleSuggestions,
    showSuggestions: true,
  },
};

export const WithAPI: Story = {
  render: () => {
    const [value, setValue] = React.useState('');
    const [suggestions, setSuggestions] = React.useState<Array<{display_name: string; lat: string; lon: string}>>([]);
    const [isLoading, setIsLoading] = React.useState(false);

    const handleChange = async (newValue: string) => {
      setValue(newValue);
      
      if (newValue.length > 2) {
        setIsLoading(true);
        // Simulation d'un appel API
        setTimeout(() => {
          setSuggestions(sampleSuggestions.filter(s => 
            s.display_name.toLowerCase().includes(newValue.toLowerCase())
          ));
          setIsLoading(false);
        }, 500);
      } else {
        setSuggestions([]);
      }
    };

    const handleSelect = (suggestion: any) => {
      setValue(suggestion.display_name);
      setSuggestions([]);
    };

    return (
      <div className="w-80">
        <AddressInput
          placeholder="Recherchez une adresse..."
          value={value}
          onChange={handleChange}
          onSelect={handleSelect}
          suggestions={suggestions}
          showSuggestions={true}
          icon={isLoading ? (
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <img src="/icons/LocationBlue.svg" alt="location" className="w-4 h-4" />
          )}
        />
      </div>
    );
  },
};

export const States: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">État vide</h3>
        <AddressInput placeholder="Où êtes-vous situé ?" />
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Avec valeur</h3>
        <AddressInput 
          placeholder="Où êtes-vous situé ?" 
          value="123 Rue de la Paix, Paris"
        />
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Avec suggestions</h3>
        <AddressInput 
          placeholder="Où êtes-vous situé ?" 
          value="Paris"
          suggestions={sampleSuggestions}
        />
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Désactivé</h3>
        <AddressInput 
          placeholder="Où êtes-vous situé ?" 
          value="Adresse verrouillée"
          disabled={true}
        />
      </div>
    </div>
  ),
};

export const CodeExample: Story = {
  render: () => (
    <div className="p-4">
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { AddressInput } from '@design-system-dvia/components';

// Utilisation basique
<AddressInput
  placeholder="Où êtes-vous situé ?"
  value={address}
  onChange={setAddress}
  onSelect={handleAddressSelect}
  suggestions={suggestions}
  showSuggestions={true}
/>

// Avec icône personnalisée
<AddressInput
  placeholder="Recherchez une adresse..."
  value={address}
  onChange={setAddress}
  onSelect={handleAddressSelect}
  suggestions={suggestions}
  icon={<LocationIcon />}
/>

// Désactivé
<AddressInput
  placeholder="Où êtes-vous situé ?"
  value="Adresse verrouillée"
  disabled={true}
/>

// Gestion des suggestions avec API
const [suggestions, setSuggestions] = useState([]);

const handleChange = async (value) => {
  setAddress(value);
  
  if (value.length > 2) {
    const results = await searchAddresses(value);
    setSuggestions(results);
  } else {
    setSuggestions([]);
  }
};

const handleSelect = (suggestion) => {
  setAddress(suggestion.display_name);
  setSuggestions([]);
  // Utiliser suggestion.lat et suggestion.lon pour la géolocalisation
};`}</code>
      </pre>
    </div>
  ),
};