import type { Meta, StoryObj } from '@storybook/react';
import { ArtisanCard } from './ArtisanCard';

const meta: Meta<typeof ArtisanCard> = {
  title: 'Molecules/ArtisanCard',
  component: ArtisanCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Le composant ArtisanCard respecte exactement le design de d-via avec deux variantes : dashboard (carte détaillée) et grid (carte compacte pour les grilles). Il affiche les informations de l\'artisan, ses évaluations, sa localisation et des actions de contact.',
      },
    },
  },
  argTypes: {
    name: {
      control: 'text',
      description: 'Nom de l\'artisan',
    },
    company: {
      control: 'text',
      description: 'Nom de l\'entreprise',
    },
    description: {
      control: 'text',
      description: 'Description de l\'entreprise',
    },
    image: {
      control: 'text',
      description: 'URL de l\'image de l\'artisan',
    },
    rating: {
      control: { type: 'range', min: 1, max: 5, step: 0.1 },
      description: 'Note de l\'artisan (1-5)',
    },
    reviews: {
      control: 'number',
      description: 'Nombre d\'avis',
    },
    verified: {
      control: 'boolean',
      description: 'Artisan vérifié',
    },
    location: {
      control: 'text',
      description: 'Localisation de l\'artisan',
    },
    distance: {
      control: 'text',
      description: 'Distance depuis l\'utilisateur',
    },
    availability: {
      control: 'text',
      description: 'Disponibilité de l\'artisan',
    },
    certifications: {
      control: 'object',
      description: 'Liste des certifications',
    },
    job: {
      control: 'text',
      description: 'Métier de l\'artisan (pour variante grid)',
    },
    completed: {
      control: 'number',
      description: 'Nombre de chantiers réalisés (pour variante grid)',
    },
    variant: {
      control: 'select',
      options: ['dashboard', 'grid'],
      description: 'Variante de la carte',
    },
    opacity: {
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
      description: 'Opacité de la carte (pour animations)',
    },
    onContactClick: {
      action: 'contact clicked',
      description: 'Callback appelé au clic sur "Contacter"',
    },
    onCallClick: {
      action: 'call clicked',
      description: 'Callback appelé au clic sur l\'icône d\'appel',
    },
    onOptionsClick: {
      action: 'options clicked',
      description: 'Callback appelé au clic sur les options',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleArtisan = {
  name: 'Jean Dupont',
  company: 'Rénovation Habitat',
  description: 'Entreprise générale de rénovation',
  image: '/artisans/plombier_salledebain_rennes 2.png',
  rating: 4.8,
  reviews: 127,
  verified: true,
  location: 'Rennes, France',
  distance: '2.5 km',
  availability: 'Disponible cette semaine',
  certifications: ['Qualibat', 'RGE', 'Garantie décennale'],
  job: 'Plombier',
  completed: 156,
};

export const Dashboard: Story = {
  args: {
    ...sampleArtisan,
    variant: 'dashboard',
  },
};

export const Grid: Story = {
  args: {
    ...sampleArtisan,
    variant: 'grid',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Variante Dashboard</h3>
        <div className="max-w-xs">
          <ArtisanCard
            {...sampleArtisan}
            variant="dashboard"
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Variante Grid</h3>
        <div className="max-w-xs">
          <ArtisanCard
            {...sampleArtisan}
            variant="grid"
          />
        </div>
      </div>
    </div>
  ),
};

export const WithDifferentRatings: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ArtisanCard
          {...sampleArtisan}
          name="Artisan 5 étoiles"
          rating={5}
          reviews={89}
          variant="dashboard"
        />
        <ArtisanCard
          {...sampleArtisan}
          name="Artisan 4 étoiles"
          rating={4.2}
          reviews={45}
          variant="dashboard"
        />
        <ArtisanCard
          {...sampleArtisan}
          name="Artisan 3 étoiles"
          rating={3.1}
          reviews={12}
          verified={false}
          variant="dashboard"
        />
      </div>
    </div>
  ),
};

export const VerifiedVsUnverified: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ArtisanCard
          {...sampleArtisan}
          name="Artisan Vérifié"
          verified={true}
          variant="dashboard"
        />
        <ArtisanCard
          {...sampleArtisan}
          name="Artisan Non Vérifié"
          verified={false}
          variant="dashboard"
        />
      </div>
    </div>
  ),
};

export const WithCertifications: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ArtisanCard
          {...sampleArtisan}
          name="Artisan Certifié"
          certifications={['Qualibat', 'RGE', 'Garantie décennale', 'Charte qualité']}
          variant="dashboard"
        />
        <ArtisanCard
          {...sampleArtisan}
          name="Artisan Sans Certifications"
          certifications={[]}
          variant="dashboard"
        />
      </div>
    </div>
  ),
};

export const GridWithOpacity: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Grille avec opacité variable</h3>
        <div className="flex gap-4">
          <ArtisanCard
            {...sampleArtisan}
            name="Opacité 100%"
            opacity={1}
            variant="grid"
          />
          <ArtisanCard
            {...sampleArtisan}
            name="Opacité 70%"
            opacity={0.7}
            variant="grid"
          />
          <ArtisanCard
            {...sampleArtisan}
            name="Opacité 40%"
            opacity={0.4}
            variant="grid"
          />
        </div>
      </div>
    </div>
  ),
};

export const DifferentJobs: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Différents métiers (variante grid)</h3>
        <div className="flex gap-4 flex-wrap">
          <ArtisanCard
            {...sampleArtisan}
            name="Pierre Martin"
            job="Plombier"
            completed={89}
            variant="grid"
          />
          <ArtisanCard
            {...sampleArtisan}
            name="Marie Dubois"
            job="Électricienne"
            completed={156}
            variant="grid"
          />
          <ArtisanCard
            {...sampleArtisan}
            name="Paul Leroy"
            job="Chauffagiste"
            completed={203}
            variant="grid"
          />
          <ArtisanCard
            {...sampleArtisan}
            name="Sophie Moreau"
            job="Peintre"
            completed={67}
            variant="grid"
          />
        </div>
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    ...sampleArtisan,
    variant: 'dashboard',
  },
};

export const CodeExample: Story = {
  render: () => (
    <div className="p-4">
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { ArtisanCard } from '@design-system-dvia/components';

// Variante Dashboard (carte détaillée)
<ArtisanCard
  name="Jean Dupont"
  company="Rénovation Habitat"
  description="Entreprise générale de rénovation"
  image="/artisans/artisan.jpg"
  rating={4.8}
  reviews={127}
  verified={true}
  location="Rennes, France"
  distance="2.5 km"
  availability="Disponible cette semaine"
  certifications={['Qualibat', 'RGE', 'Garantie décennale']}
  onContactClick={() => console.log('Contact clicked')}
  onCallClick={() => console.log('Call clicked')}
  onOptionsClick={() => console.log('Options clicked')}
  variant="dashboard"
/>

// Variante Grid (carte compacte)
<ArtisanCard
  name="Pierre Martin"
  image="/artisans/artisan.jpg"
  rating={4.5}
  location="Paris, France"
  job="Plombier"
  completed={89}
  variant="grid"
  opacity={1}
/>

// Avec opacité pour animations
<ArtisanCard
  {...artisanData}
  variant="grid"
  opacity={0.7}
/>

// Sans vérification
<ArtisanCard
  {...artisanData}
  verified={false}
  variant="dashboard"
/>

// Avec certifications personnalisées
<ArtisanCard
  {...artisanData}
  certifications={['Qualibat', 'RGE', 'Charte qualité']}
  variant="dashboard"
/>

// Exemple d'utilisation dans une grille
const artisans = [
  { name: 'Artisan 1', job: 'Plombier', completed: 89, ... },
  { name: 'Artisan 2', job: 'Électricien', completed: 156, ... },
  { name: 'Artisan 3', job: 'Chauffagiste', completed: 203, ... },
];

<div className="flex gap-4">
  {artisans.map((artisan, index) => (
    <ArtisanCard
      key={index}
      {...artisan}
      variant="grid"
      opacity={opacities[index]}
    />
  ))}
</div>`}</code>
      </pre>
    </div>
  ),
};