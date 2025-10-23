import type { Meta, StoryObj } from '@storybook/react';
import { FileMarquee } from './FileMarquee';

const meta: Meta<typeof FileMarquee> = {
  title: 'Molecules/FileMarquee',
  component: FileMarquee,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Le composant FileMarquee affiche une liste de fichiers avec un effet de défilement continu. Il respecte parfaitement le design de D-Via.
        `,
      },
    },
  },

  tags: ["autodocs"],
  argTypes: {
    files: {
      description: 'Liste des noms de fichiers à afficher',
      control: { type: 'object' },
    },
    direction: {
      description: 'Direction du défilement',
      control: { type: 'select' },
      options: ['left', 'right'],
    },
    speed: {
      description: 'Vitesse du défilement',
      control: { type: 'select' },
      options: ['slow', 'normal', 'fast'],
    },
    showAnimation: {
      description: 'Afficher l\'animation de défilement',
      control: { type: 'boolean' },
    },
    className: {
      description: 'Classes CSS personnalisées',
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FileMarquee>;

const sampleFiles = [
  'document.pdf',
  'image.jpg',
  'spreadsheet.xlsx',
  'presentation.pptx',
  'video.mp4',
];

const manyFiles = Array.from({ length: 20 }, (_, i) => `file-${i + 1}.pdf`);

export const Default: Story = {
  args: {
    files: sampleFiles,
  },
};

export const RightDirection: Story = {
  args: {
    files: sampleFiles,
    direction: 'right',
  },
};

export const SlowSpeed: Story = {
  args: {
    files: sampleFiles,
    speed: 'slow',
  },
};

export const FastSpeed: Story = {
  args: {
    files: sampleFiles,
    speed: 'fast',
  },
};

export const NoAnimation: Story = {
  args: {
    files: sampleFiles,
    showAnimation: false,
  },
};

export const ManyFiles: Story = {
  args: {
    files: manyFiles,
    speed: 'normal',
  },
};

export const SingleFile: Story = {
  args: {
    files: ['important-document.pdf'],
  },
};

export const CodeExample: Story = {
  args: {
    files: sampleFiles,
    direction: 'left',
    speed: 'normal',
    showAnimation: true,
  },
  parameters: {
    docs: {
      description: {
        story: `
## Exemple de code

### Utilisation basique

\`\`\`tsx
import { FileMarquee } from '@/components/molecules/FileMarquee';

const files = [
  'document.pdf',
  'image.jpg',
  'spreadsheet.xlsx',
  'presentation.pptx',
  'video.mp4',
];

function MyComponent() {
  return (
    <FileMarquee
      files={files}
      direction="left"
      speed="normal"
      showAnimation={true}
    />
  );
}
\`\`\`

### Défilement vers la droite

\`\`\`tsx
<FileMarquee
  files={files}
  direction="right"
  speed="fast"
  showAnimation={true}
/>
\`\`\`

### Sans animation

\`\`\`tsx
<FileMarquee
  files={files}
  showAnimation={false}
/>
\`\`\`

### Vitesse lente

\`\`\`tsx
<FileMarquee
  files={files}
  speed="slow"
  direction="left"
/>
\`\`\`

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| \`files\` | \`string[]\` | - | Liste des noms de fichiers |
| \`direction\` | \`'left' \| 'right'\` | \`'left'\` | Direction du défilement |
| \`speed\` | \`'slow' \| 'normal' \| 'fast'\` | \`'normal'\` | Vitesse du défilement |
| \`showAnimation\` | \`boolean\` | \`true\` | Afficher l'animation |
| \`className\` | \`string\` | - | Classes CSS personnalisées |

## Vitesses

### Slow
- Défilement lent et fluide
- Idéal pour la lecture

### Normal
- Vitesse de défilement standard
- Équilibre entre lisibilité et dynamisme

### Fast
- Défilement rapide
- Idéal pour les effets visuels
        `,
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    files: sampleFiles,
    onFileClick: (fileName) => console.log('File clicked:', fileName),
  },
};

export const MixedFileTypes: Story = {
  args: {
    files: [
      'document.pdf',
      'image.png',
      'spreadsheet.xlsx',
      'presentation.pptx',
      'archive.zip',
      'code.js',
      'style.css',
      'readme.md',
    ],
  },
};
