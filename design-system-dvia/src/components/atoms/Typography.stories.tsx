import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Design System/Styles/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Le système typographique D-Via fournit une hiérarchie claire et cohérente avec des variantes prédéfinies, des poids, des couleurs et des alignements. Il utilise le système de design D-Via pour assurer la cohérence visuelle.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['display-large', 'display-medium', 'display-small', 'headline-large', 'headline-medium', 'headline-small', 'title-large', 'title-medium', 'title-small', 'label-large', 'label-medium', 'label-small', 'body-large', 'body-medium', 'body-small'],
      description: 'Variante de taille et de style de la typographie',
    },
    weight: {
      control: 'select',
      options: ['400', '500', '600', '700'],
      description: 'Poids de la police',
    },
    color: {
      control: 'select',
      options: ['dviaprimary-10', 'dviaprimary-20', 'dviaprimary-30', 'dviaprimary-40', 'dviaprimary-50', 'dviaprimary-60', 'dviaprimary-70', 'dviaprimary-80', 'dviaprimary-87', 'dviaprimary-90', 'dviaprimary-92', 'dviaprimary-94', 'dviaprimary-95', 'dviaprimary-96', 'dviaprimary-98', 'dviaprimary-99', 'dviaprimary-100', 'dviasecondary-10', 'dviasecondary-20', 'dviasecondary-30', 'dviasecondary-40', 'dviasecondary-50', 'dviasecondary-60', 'dviasecondary-70', 'dviasecondary-80', 'dviasecondary-87', 'dviasecondary-90', 'dviasecondary-92', 'dviasecondary-94', 'dviasecondary-95', 'dviasecondary-96', 'dviasecondary-98', 'dviasecondary-99', 'dviasecondary-100', 'dvianeutral-10', 'dvianeutral-20', 'dvianeutral-30', 'dvianeutral-40', 'dvianeutral-50', 'dvianeutral-60', 'dvianeutral-70', 'dvianeutral-80', 'dvianeutral-87', 'dvianeutral-90', 'dvianeutral-92', 'dvianeutral-94', 'dvianeutral-95', 'dvianeutral-96', 'dvianeutral-98', 'dvianeutral-99', 'dvianeutral-100', 'dvianeutralvariant-10', 'dvianeutralvariant-20', 'dvianeutralvariant-30', 'dvianeutralvariant-40', 'dvianeutralvariant-50', 'dvianeutralvariant-60', 'dvianeutralvariant-70', 'dvianeutralvariant-80', 'dvianeutralvariant-87', 'dvianeutralvariant-90', 'dvianeutralvariant-92', 'dvianeutralvariant-94', 'dvianeutralvariant-95', 'dvianeutralvariant-96', 'dvianeutralvariant-98', 'dvianeutralvariant-99', 'dvianeutralvariant-100'],
      description: 'Couleur du texte selon la palette D-Via',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
      description: 'Alignement du texte',
    },
    as: {
      control: 'select',
      options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'div'],
      description: 'Élément HTML à utiliser',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TypographyScale: Story = {
  render: () => (
    <div className="space-y-8 p-8 max-w-4xl">
      <div>
        <h2 className="text-2xl font-bold mb-6">Échelle typographique D-Via</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-dviaprimary-40">Display</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-dviaprimary-40 pl-4">
                <Typography variant="display-large" color="dvianeutral-10">
                  Display Large - 48px
                </Typography>
                <p className="text-sm text-gray-500 mt-1">Titres de page principaux, hero sections</p>
              </div>
              <div className="border-l-4 border-dviaprimary-40 pl-4">
                <Typography variant="display-medium" color="dvianeutral-10">
                  Display Medium - 40px
                </Typography>
                <p className="text-sm text-gray-500 mt-1">Titres de section importants</p>
              </div>
              <div className="border-l-4 border-dviaprimary-40 pl-4">
                <Typography variant="display-small" color="dvianeutral-10">
                  Display Small - 32px
                </Typography>
                <p className="text-sm text-gray-500 mt-1">Titres de section secondaires</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-dviaprimary-40">Headline</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-dviaprimary-40 pl-4">
                <Typography variant="headline-large" color="dvianeutral-10">
                  Headline Large - 28px
                </Typography>
                <p className="text-sm text-gray-500 mt-1">Titres de cartes, modales</p>
              </div>
              <div className="border-l-4 border-dviaprimary-40 pl-4">
                <Typography variant="headline-medium" color="dvianeutral-10">
                  Headline Medium - 24px
                </Typography>
                <p className="text-sm text-gray-500 mt-1">Sous-titres de section</p>
              </div>
              <div className="border-l-4 border-dviaprimary-40 pl-4">
                <Typography variant="headline-small" color="dvianeutral-10">
                  Headline Small - 20px
                </Typography>
                <p className="text-sm text-gray-500 mt-1">Titres de composants</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-dviaprimary-40">Title</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-dviaprimary-40 pl-4">
                <Typography variant="title-large" color="dvianeutral-10">
                  Title Large - 18px
                </Typography>
                <p className="text-sm text-gray-500 mt-1">Titres de listes, tableaux</p>
              </div>
              <div className="border-l-4 border-dviaprimary-40 pl-4">
                <Typography variant="title-medium" color="dvianeutral-10">
                  Title Medium - 16px
                </Typography>
                <p className="text-sm text-gray-500 mt-1">Titres de sous-sections</p>
              </div>
              <div className="border-l-4 border-dviaprimary-40 pl-4">
                <Typography variant="title-small" color="dvianeutral-10">
                  Title Small - 14px
                </Typography>
                <p className="text-sm text-gray-500 mt-1">Titres de champs, labels</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-dviaprimary-40">Label</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-dviaprimary-40 pl-4">
                <Typography variant="label-large" color="dvianeutral-10">
                  Label Large - 14px
                </Typography>
                <p className="text-sm text-gray-500 mt-1">Labels de boutons, navigation</p>
              </div>
              <div className="border-l-4 border-dviaprimary-40 pl-4">
                <Typography variant="label-medium" color="dvianeutral-10">
                  Label Medium - 12px
                </Typography>
                <p className="text-sm text-gray-500 mt-1">Labels de champs, badges</p>
              </div>
              <div className="border-l-4 border-dviaprimary-40 pl-4">
                <Typography variant="label-small" color="dvianeutral-10">
                  Label Small - 10px
                </Typography>
                <p className="text-sm text-gray-500 mt-1">Labels de statut, annotations</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-dviaprimary-40">Body</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-dviaprimary-40 pl-4">
                <Typography variant="body-large" color="dvianeutral-10">
                  Body Large - 16px
                </Typography>
                <p className="text-sm text-gray-500 mt-1">Texte principal, paragraphes</p>
              </div>
              <div className="border-l-4 border-dviaprimary-40 pl-4">
                <Typography variant="body-medium" color="dvianeutral-10">
                  Body Medium - 14px
                </Typography>
                <p className="text-sm text-gray-500 mt-1">Texte standard, descriptions</p>
              </div>
              <div className="border-l-4 border-dviaprimary-40 pl-4">
                <Typography variant="body-small" color="dvianeutral-10">
                  Body Small - 12px
                </Typography>
                <p className="text-sm text-gray-500 mt-1">Texte secondaire, annotations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const FontWeights: Story = {
  render: () => (
    <div className="space-y-6 p-8">
      <h2 className="text-2xl font-bold mb-6">Poids de police</h2>
      
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-24 text-sm text-gray-500">400 - Normal</div>
          <Typography variant="title-large" weight="400">
            Texte normal
          </Typography>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-24 text-sm text-gray-500">500 - Medium</div>
          <Typography variant="title-large" weight="500">
            Texte medium
          </Typography>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-24 text-sm text-gray-500">600 - Semibold</div>
          <Typography variant="title-large" weight="600">
            Texte semibold
          </Typography>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-24 text-sm text-gray-500">700 - Bold</div>
          <Typography variant="title-large" weight="700">
            Texte bold
          </Typography>
        </div>
      </div>
    </div>
  ),
};

export const ColorUsage: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <h2 className="text-2xl font-bold mb-6">Utilisation des couleurs</h2>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Couleurs de texte</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-32 text-sm text-gray-500">Principal</div>
            <Typography variant="body-large" color="dvianeutral-10">
              Texte principal - dvianeutral-10
            </Typography>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-32 text-sm text-gray-500">Secondaire</div>
            <Typography variant="body-large" color="dvianeutralvariant-30">
              Texte secondaire - dvianeutralvariant-30
            </Typography>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-32 text-sm text-gray-500">Tertiaire</div>
            <Typography variant="body-large" color="dvianeutralvariant-60">
              Texte tertiaire - dvianeutralvariant-60
            </Typography>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-32 text-sm text-gray-500">Accent</div>
            <Typography variant="body-large" color="dviaprimary-40">
              Texte d'accent - dviaprimary-40
            </Typography>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-32 text-sm text-gray-500">Erreur</div>
            <Typography variant="body-large" color="red-600">
              Texte d'erreur - red-600
            </Typography>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Exemples d'utilisation</h3>
        <div className="space-y-4">
          <div className="bg-white border border-dvianeutral-50 rounded-12px p-6">
            <Typography variant="headline-medium" color="dvianeutral-10" className="mb-2">
              Titre de carte
            </Typography>
            <Typography variant="body-medium" color="dvianeutralvariant-30" className="mb-4">
              Description de la carte avec du texte secondaire pour expliquer le contenu.
            </Typography>
            <Typography variant="label-medium" color="dviaprimary-40">
              Action requise
            </Typography>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const ResponsiveTypography: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <h2 className="text-2xl font-bold mb-6">Typographie responsive</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Titres adaptatifs</h3>
          <div className="space-y-4">
            <div className="text-[24px] md:text-[40px] leading-display-small tracking-display-small md:leading-display-medium md:tracking-display-medium font-bold text-dvianeutral-10">
              Titre responsive (24px mobile, 40px desktop)
            </div>
            <div className="text-[20px] md:text-[28px] leading-headline-small tracking-headline-small md:leading-headline-large md:tracking-headline-large font-semibold text-dvianeutral-10">
              Sous-titre responsive (20px mobile, 28px desktop)
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Texte adaptatif</h3>
          <div className="space-y-4">
            <div className="text-sm md:text-base leading-body-small md:leading-body-large text-dvianeutral-10">
              Texte qui s'adapte à la taille d'écran (14px mobile, 16px desktop)
            </div>
            <div className="text-xs md:text-sm leading-label-small md:leading-label-medium text-dvianeutralvariant-30">
              Texte secondaire responsive (12px mobile, 14px desktop)
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    children: 'Texte interactif - Modifiez les propriétés dans les contrôles',
    variant: 'title-medium',
    weight: '600',
    color: 'dviaprimary-40',
    align: 'center',
  },
  render: (args) => (
    <div className="p-8 bg-gray-50 rounded-lg">
      <Typography {...args} />
    </div>
  ),
};

export const CodeExample: Story = {
  render: () => (
    <div className="p-4">
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Typography } from '@design-system-dvia/components';

// Utilisation basique
<Typography variant="title-large" weight="600" color="dviaprimary-40">
  Titre principal
</Typography>

// Avec alignement
<Typography variant="body-medium" align="center" color="dvianeutral-60">
  Texte centré
</Typography>

// Élément HTML personnalisé
<Typography as="h2" variant="headline-medium" weight="700">
  Titre de section
</Typography>

// Typographie responsive
<div className="text-[24px] md:text-[40px] leading-display-small md:leading-display-medium font-bold">
  Titre responsive
</div>`}</code>
      </pre>
    </div>
  ),
};