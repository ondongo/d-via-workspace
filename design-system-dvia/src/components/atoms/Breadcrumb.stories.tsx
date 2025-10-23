import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Atoms/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Le composant Breadcrumb fournit une navigation hiérarchique pour aider les utilisateurs à comprendre leur position dans le site. Il supporte différents styles et peut être utilisé pour la navigation du blog D-Via.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'simple'],
      description: 'Style du breadcrumb',
    },
    separator: {
      control: 'select',
      options: ['/', '>', '→', '•'],
      description: 'Séparateur entre les éléments',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const blogItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Conseils', href: '/blog/conseils' },
  { label: 'Comment choisir un artisan ?', href: '/blog/conseils/choisir-artisan' },
];

const articleItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Rénovation', href: '/blog/renovation' },
  { label: 'Rénover sa salle de bain : guide complet', href: '/blog/renovation/salle-bain-guide' },
];

const categoryItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Catégories', href: '/blog/categories' },
  { label: 'Plomberie', href: '/blog/categories/plomberie' },
];

const searchItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Recherche', href: '/blog/search' },
  { label: 'Résultats pour "rénovation"', href: '/blog/search?q=renovation' },
];

export const Default: Story = {
  args: {
    items: blogItems,
    variant: 'default',
    separator: '/',
  },
};

export const BlogArticle: Story = {
  args: {
    items: articleItems,
    variant: 'default',
    separator: '/',
  },
};

export const BlogCategory: Story = {
  args: {
    items: categoryItems,
    variant: 'default',
    separator: '/',
  },
};

export const BlogSearch: Story = {
  args: {
    items: searchItems,
    variant: 'default',
    separator: '/',
  },
};

export const SimpleVariant: Story = {
  args: {
    items: blogItems,
    variant: 'simple',
    separator: '/',
  },
};

export const DifferentSeparators: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Séparateur "/"</h3>
        <Breadcrumb items={blogItems} separator="/" />
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Séparateur "&gt;"</h3>
        <Breadcrumb items={blogItems} separator=">" />
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Séparateur "→"</h3>
        <Breadcrumb items={blogItems} separator="→" />
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Séparateur "•"</h3>
        <Breadcrumb items={blogItems} separator="•" />
      </div>
    </div>
  ),
};

export const LongBreadcrumb: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Breadcrumb long</h3>
        <Breadcrumb items={articleItems} />
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Breadcrumb court</h3>
        <Breadcrumb items={articleItems.slice(0, 3)} />
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Breadcrumb très court</h3>
        <Breadcrumb items={articleItems.slice(0, 2)} />
      </div>
    </div>
  ),
};

export const BlogScenarios: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Scénarios du blog D-Via</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Page d'accueil du blog</h4>
            <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Blog', href: '/blog' }]} />
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Article de conseils</h4>
            <Breadcrumb items={blogItems} />
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Catégorie spécifique</h4>
            <Breadcrumb items={categoryItems} />
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Résultats de recherche</h4>
            <Breadcrumb items={searchItems} />
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Article détaillé</h4>
            <Breadcrumb items={articleItems} />
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    items: blogItems,
    variant: 'default',
    separator: '/',
  },
};

export const CodeExample: Story = {
  render: () => (
    <div className="p-4">
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Breadcrumb } from '@design-system-dvia/components';

// Breadcrumb basique pour le blog
<Breadcrumb
  items={[
    { label: 'Accueil', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Conseils', href: '/blog/conseils' },
    { label: 'Comment choisir un artisan ?', href: '/blog/conseils/choisir-artisan' },
  ]}
  variant="default"
  separator="/"
/>

// Breadcrumb simple
<Breadcrumb
  items={[
    { label: 'Accueil', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Rénovation', href: '/blog/renovation' },
  ]}
  variant="simple"
  separator=">"
/>

// Avec différents séparateurs
<Breadcrumb
  items={blogItems}
  separator="→"
/>

// Exemples spécifiques au blog D-Via
const blogArticleItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Rénovation', href: '/blog/renovation' },
  { label: 'Rénover sa salle de bain : guide complet', href: '/blog/renovation/salle-bain-guide' },
];

const blogCategoryItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Catégories', href: '/blog/categories' },
  { label: 'Plomberie', href: '/blog/categories/plomberie' },
];

const blogSearchItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Recherche', href: '/blog/search' },
  { label: 'Résultats pour "rénovation"', href: '/blog/search?q=renovation' },
];`}</code>
      </pre>
    </div>
  ),
};