import type { Meta, StoryObj } from '@storybook/react';
import { Image } from './Image';

const meta: Meta<typeof Image> = {
  title: 'Atoms/Image',
  component: Image,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Le composant Image est un wrapper optimisé pour les images avec support du lazy loading, gestion des erreurs, et différentes variantes de style. Il s\'intègre parfaitement avec le design system D-Via.',
      },
    },
  },
  argTypes: {
    src: {
      control: 'text',
      description: 'URL de l\'image',
    },
    alt: {
      control: 'text',
      description: 'Texte alternatif pour l\'accessibilité',
    },
    width: {
      control: 'number',
      description: 'Largeur de l\'image en pixels',
    },
    height: {
      control: 'number',
      description: 'Hauteur de l\'image en pixels',
    },
    variant: {
      control: 'select',
      options: ['default', 'rounded', 'circle', 'thumbnail'],
      description: 'Style de l\'image',
    },
    objectFit: {
      control: 'select',
      options: ['cover', 'contain', 'fill', 'none', 'scale-down'],
      description: 'Comment l\'image s\'adapte au conteneur',
    },
    lazy: {
      control: 'boolean',
      description: 'Activer le lazy loading',
    },
    className: {
      control: 'text',
      description: 'Classes CSS supplémentaires',
    },
    onError: {
      action: 'error',
      description: 'Callback appelé en cas d\'erreur de chargement',
    },
    onLoad: {
      action: 'loaded',
      description: 'Callback appelé quand l\'image est chargée',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Images de test
const logoImage = '/logos/logo.png';
const artisanImage = '/artisans/plombier_salledebain_rennes 2.png';
const placeholderImage = 'https://via.placeholder.com/300x200/4F46E5/FFFFFF?text=Image+Placeholder';

export const Default: Story = {
  args: {
    src: logoImage,
    alt: 'Logo D-Via',
    width: 200,
    height: 80,
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-4">Variantes de style</h3>
        <div className="flex flex-wrap gap-6 items-center">
          <div className="text-center">
            <Image
              src={logoImage}
              alt="Default"
              width={120}
              height={60}
              variant="default"
            />
            <p className="text-xs text-gray-600 mt-2">Default</p>
          </div>
          <div className="text-center">
            <Image
              src={logoImage}
              alt="Rounded"
              width={120}
              height={60}
              variant="rounded"
            />
            <p className="text-xs text-gray-600 mt-2">Rounded</p>
          </div>
          <div className="text-center">
            <Image
              src={artisanImage}
              alt="Circle"
              width={80}
              height={80}
              variant="circle"
            />
            <p className="text-xs text-gray-600 mt-2">Circle</p>
          </div>
          <div className="text-center">
            <Image
              src={logoImage}
              alt="Thumbnail"
              width={80}
              height={60}
              variant="thumbnail"
            />
            <p className="text-xs text-gray-600 mt-2">Thumbnail</p>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const ObjectFit: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-4">Object Fit</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {['cover', 'contain', 'fill', 'none', 'scale-down'].map((fit) => (
            <div key={fit} className="text-center">
              <div className="w-32 h-24 border border-gray-300 overflow-hidden mb-2">
                <Image
                  src={artisanImage}
                  alt={`Object fit ${fit}`}
                  width={128}
                  height={96}
                  objectFit={fit as any}
                />
              </div>
              <p className="text-xs text-gray-600">{fit}</p>
            </div>
          ))}
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
        <div className="flex flex-wrap gap-6 items-end">
          <div className="text-center">
            <Image
              src={logoImage}
              alt="Small"
              width={80}
              height={40}
            />
            <p className="text-xs text-gray-600 mt-2">80x40</p>
          </div>
          <div className="text-center">
            <Image
              src={logoImage}
              alt="Medium"
              width={120}
              height={60}
            />
            <p className="text-xs text-gray-600 mt-2">120x60</p>
          </div>
          <div className="text-center">
            <Image
              src={logoImage}
              alt="Large"
              width={200}
              height={100}
            />
            <p className="text-xs text-gray-600 mt-2">200x100</p>
          </div>
          <div className="text-center">
            <Image
              src={logoImage}
              alt="Extra Large"
              width={300}
              height={150}
            />
            <p className="text-xs text-gray-600 mt-2">300x150</p>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const LazyLoading: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-4">Lazy Loading</h3>
        <div className="space-y-4">
          <p className="text-sm text-gray-600">
            Les images ci-dessous sont chargées de manière paresseuse. Faites défiler pour les voir apparaître.
          </p>
          <div className="space-y-8">
            {Array.from({ length: 5 }, (_, i) => (
              <div key={i} className="text-center">
                <Image
                  src={`${placeholderImage}&text=Image+${i + 1}`}
                  alt={`Lazy image ${i + 1}`}
                  width={200}
                  height={120}
                  lazy
                  variant="rounded"
                />
                <p className="text-xs text-gray-600 mt-2">Image {i + 1} (Lazy)</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
};

export const ErrorHandling: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-4">Gestion des erreurs</h3>
        <div className="flex flex-wrap gap-6">
          <div className="text-center">
            <Image
              src="invalid-url.jpg"
              alt="Image invalide"
              width={120}
              height={80}
              onError={() => console.log('Erreur de chargement')}
            />
            <p className="text-xs text-gray-600 mt-2">Image invalide</p>
          </div>
          <div className="text-center">
            <Image
              src={logoImage}
              alt="Image valide"
              width={120}
              height={80}
              onLoad={() => console.log('Image chargée')}
            />
            <p className="text-xs text-gray-600 mt-2">Image valide</p>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Responsive: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-4">Images responsives</h3>
        <div className="w-full max-w-4xl">
          <Image
            src={artisanImage}
            alt="Image responsive"
            width={400}
            height={300}
            className="w-full h-auto"
            variant="rounded"
          />
          <p className="text-xs text-gray-600 mt-2 text-center">
            Image qui s'adapte à la largeur du conteneur
          </p>
        </div>
      </div>
    </div>
  ),
};

export const WithCustomClasses: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-4">Classes personnalisées</h3>
        <div className="flex flex-wrap gap-6">
          <div className="text-center">
            <Image
              src={logoImage}
              alt="Avec ombre"
              width={120}
              height={60}
              className="shadow-lg"
            />
            <p className="text-xs text-gray-600 mt-2">Avec ombre</p>
          </div>
          <div className="text-center">
            <Image
              src={logoImage}
              alt="Avec bordure"
              width={120}
              height={60}
              className="border-2 border-dviaprimary-40"
            />
            <p className="text-xs text-gray-600 mt-2">Avec bordure</p>
          </div>
          <div className="text-center">
            <Image
              src={logoImage}
              alt="Avec filtre"
              width={120}
              height={60}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
            <p className="text-xs text-gray-600 mt-2">Avec filtre</p>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    src: logoImage,
    alt: 'Logo D-Via',
    width: 200,
    height: 80,
    variant: 'rounded',
    lazy: false,
  },
};

export const CodeExample: Story = {
  render: () => (
    <div className="p-4">
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Image } from '@design-system-dvia/components';

// Image basique
<Image
  src="/logos/logo.png"
  alt="Logo D-Via"
  width={200}
  height={80}
/>

// Avec variante
<Image
  src="/logos/logo.png"
  alt="Logo D-Via"
  width={120}
  height={60}
  variant="rounded"
/>

// Image circulaire
<Image
  src="/artisans/artisan.jpg"
  alt="Artisan"
  width={80}
  height={80}
  variant="circle"
/>

// Avec lazy loading
<Image
  src="/images/large-image.jpg"
  alt="Image large"
  width={400}
  height={300}
  lazy
/>

// Avec object fit
<Image
  src="/images/artisan.jpg"
  alt="Artisan"
  width={200}
  height={150}
  objectFit="cover"
  variant="rounded"
/>

// Avec gestion d'erreur
<Image
  src="/images/image.jpg"
  alt="Image"
  width={200}
  height={150}
  onError={() => console.log('Erreur de chargement')}
  onLoad={() => console.log('Image chargée')}
/>

// Responsive avec classes personnalisées
<Image
  src="/images/hero.jpg"
  alt="Image hero"
  width={800}
  height={400}
  className="w-full h-auto shadow-lg"
  variant="rounded"
/>

// Thumbnail
<Image
  src="/images/thumbnail.jpg"
  alt="Thumbnail"
  width={80}
  height={60}
  variant="thumbnail"
/>`}</code>
      </pre>
    </div>
  ),
};