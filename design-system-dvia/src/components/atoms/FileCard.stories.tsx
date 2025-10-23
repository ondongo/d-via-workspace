import type { Meta, StoryObj } from '@storybook/react';
import { FileCard } from './FileCard';

const meta: Meta<typeof FileCard> = {
  title: 'Atoms/FileCard',
  component: FileCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Le composant FileCard affiche une carte de fichier avec icône, nom et actions. Il supporte différentes tailles et peut être utilisé pour représenter des documents, images ou autres fichiers.',
      },
    },
  },
  argTypes: {
    name: {
      control: 'text',
      description: 'Nom du fichier',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Taille de la carte',
    },
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error'],
      description: 'Variante de style',
    },
    disabled: {
      control: 'boolean',
      description: 'Désactiver la carte',
    },
    showAnimation: {
      control: 'boolean',
      description: 'Afficher l\'animation d\'apparition',
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

const fileIcon = (
  <svg className="w-4 h-4 text-dviaprimary-40" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
  </svg>
);

const imageIcon = (
  <svg className="w-4 h-4 text-dviaprimary-40" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" />
  </svg>
);

const pdfIcon = (
  <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
  </svg>
);

export const Default: Story = {
  args: {
    name: 'document.pdf',
    size: 'md',
    variant: 'default',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <FileCard name="document.pdf" size="sm" icon={fileIcon} />
        <FileCard name="document.pdf" size="md" icon={fileIcon} />
        <FileCard name="document.pdf" size="lg" icon={fileIcon} />
      </div>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <FileCard name="document.pdf" variant="default" icon={fileIcon} />
        <FileCard name="success.pdf" variant="success" icon={fileIcon} />
        <FileCard name="warning.pdf" variant="warning" icon={fileIcon} />
        <FileCard name="error.pdf" variant="error" icon={fileIcon} />
      </div>
    </div>
  ),
};

export const FileTypes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <FileCard name="document.pdf" icon={pdfIcon} />
        <FileCard name="image.jpg" icon={imageIcon} />
        <FileCard name="spreadsheet.xlsx" icon={fileIcon} />
        <FileCard name="presentation.pptx" icon={fileIcon} />
        <FileCard name="archive.zip" icon={fileIcon} />
      </div>
    </div>
  ),
};

export const WithCustomIcons: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <FileCard 
          name="document.pdf" 
          icon={
            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
            </svg>
          } 
        />
        <FileCard 
          name="image.png" 
          icon={
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" />
            </svg>
          } 
        />
        <FileCard 
          name="video.mp4" 
          icon={
            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z" />
            </svg>
          } 
        />
        <FileCard 
          name="audio.mp3" 
          icon={
            <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.85 14,18.71V20.77C18.01,19.86 21,16.28 21,12C21,7.72 18.01,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16.02C15.5,15.29 16.5,13.77 16.5,12M3,9V15H7L12,20V4L7,9H3Z" />
            </svg>
          } 
        />
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
          <FileCard name="document.pdf" icon={fileIcon} />
          <FileCard name="image.jpg" variant="success" icon={imageIcon} />
          <FileCard name="warning.pdf" variant="warning" icon={fileIcon} />
          <FileCard name="error.pdf" variant="error" icon={fileIcon} />
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-4">État désactivé</h3>
        <div className="flex flex-wrap gap-4">
          <FileCard name="document.pdf" disabled icon={fileIcon} />
          <FileCard name="image.jpg" disabled variant="success" icon={imageIcon} />
          <FileCard name="warning.pdf" disabled variant="warning" icon={fileIcon} />
          <FileCard name="error.pdf" disabled variant="error" icon={fileIcon} />
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-4">Avec animation</h3>
        <div className="flex flex-wrap gap-4">
          <FileCard name="document.pdf" showAnimation icon={fileIcon} />
          <FileCard name="image.jpg" showAnimation variant="success" icon={imageIcon} />
        </div>
      </div>
    </div>
  ),
};

export const LongNames: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <FileCard name="very-long-document-name-that-should-be-truncated.pdf" icon={fileIcon} />
        <FileCard name="another-very-long-filename-with-many-characters.docx" icon={fileIcon} />
        <FileCard name="short.pdf" icon={fileIcon} />
        <FileCard name="medium-length-document.pdf" icon={fileIcon} />
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    name: 'document.pdf',
    size: 'md',
    variant: 'default',
    icon: fileIcon,
  },
};

export const CodeExample: Story = {
  render: () => (
    <div className="p-4">
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { FileCard } from '@design-system-dvia/components';

// FileCard basique
<FileCard
  name="document.pdf"
  icon={<FileIcon />}
  onClick={() => console.log('File clicked')}
/>

// Avec variante
<FileCard
  name="success.pdf"
  variant="success"
  icon={<FileIcon />}
/>

// Avec taille personnalisée
<FileCard
  name="document.pdf"
  size="lg"
  icon={<FileIcon />}
/>

// Désactivé
<FileCard
  name="document.pdf"
  disabled
  icon={<FileIcon />}
/>

// Avec animation
<FileCard
  name="document.pdf"
  showAnimation
  icon={<FileIcon />}
/>

// Icônes personnalisées par type de fichier
const fileIcon = (
  <svg className="w-4 h-4 text-dviaprimary-40" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
  </svg>
);

const imageIcon = (
  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" />
  </svg>
);

// Utilisation avec différents types
<FileCard name="document.pdf" icon={fileIcon} />
<FileCard name="image.jpg" icon={imageIcon} />`}</code>
      </pre>
    </div>
  ),
};