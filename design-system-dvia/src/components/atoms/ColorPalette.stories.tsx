import type { Meta, StoryObj } from '@storybook/react';
import { ColorPalette } from './ColorPalette';

const meta: Meta<typeof ColorPalette> = {
  title: 'Design System/Styles/Color Palette',
  component: ColorPalette,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'La palette de couleurs complète du design system D-Via. Toutes les nuances sont organisées par famille de couleurs avec leurs codes hexadécimaux et leurs utilisations recommandées.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllColors: Story = {
  render: () => (
    <div className="p-8 space-y-12">
      <div>
        <h1 className="text-3xl font-bold mb-8">Palette de couleurs D-Via</h1>
        
        {/* Primary Colors */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-dviaprimary-40">Couleurs Primary</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[10, 20, 30, 40, 50, 60, 70, 80, 87, 90, 92, 94, 95, 96, 98, 99, 100].map((shade) => (
              <div key={shade} className="text-center">
                <div className={`w-full h-20 rounded-lg bg-dviaprimary-${shade} mb-2 shadow-sm`}></div>
                <div className="text-sm font-medium">dviaprimary-{shade}</div>
                <div className="text-xs text-gray-500">Shade {shade}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary Colors */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-dviasecondary-40">Couleurs Secondary</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[10, 20, 30, 40, 50, 60, 70, 80, 87, 90, 92, 94, 95, 96, 98, 99, 100].map((shade) => (
              <div key={shade} className="text-center">
                <div className={`w-full h-20 rounded-lg bg-dviasecondary-${shade} mb-2 shadow-sm`}></div>
                <div className="text-sm font-medium">dviasecondary-{shade}</div>
                <div className="text-xs text-gray-500">Shade {shade}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Neutral Colors */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-dvianeutral-40">Couleurs Neutral</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[10, 20, 30, 40, 50, 60, 70, 80, 87, 90, 92, 94, 95, 96, 98, 99, 100].map((shade) => (
              <div key={shade} className="text-center">
                <div className={`w-full h-20 rounded-lg bg-dvianeutral-${shade} mb-2 shadow-sm`}></div>
                <div className="text-sm font-medium">dvianeutral-{shade}</div>
                <div className="text-xs text-gray-500">Shade {shade}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Neutral Variant Colors */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-dvianeutralvariant-40">Couleurs Neutral Variant</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[10, 20, 30, 40, 50, 60, 70, 80, 87, 90, 92, 94, 95, 96, 98, 99, 100].map((shade) => (
              <div key={shade} className="text-center">
                <div className={`w-full h-20 rounded-lg bg-dvianeutralvariant-${shade} mb-2 shadow-sm`}></div>
                <div className="text-sm font-medium">dvianeutralvariant-{shade}</div>
                <div className="text-xs text-gray-500">Shade {shade}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Error Colors */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-red-600">Couleurs d'erreur</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((shade) => (
              <div key={shade} className="text-center">
                <div className={`w-full h-20 rounded-lg bg-red-${shade} mb-2 shadow-sm`}></div>
                <div className="text-sm font-medium">red-{shade}</div>
                <div className="text-xs text-gray-500">Shade {shade}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
};

export const PrimaryColors: Story = {
  render: () => (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-6">Couleurs Primary - Utilisation recommandée</h2>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-lg bg-dviaprimary-40"></div>
          <div>
            <div className="font-semibold">dviaprimary-40 (Principal)</div>
            <div className="text-sm text-gray-600">Boutons principaux, liens, éléments d'accentuation</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-lg bg-dviaprimary-50"></div>
          <div>
            <div className="font-semibold">dviaprimary-50 (Hover)</div>
            <div className="text-sm text-gray-600">États hover des éléments principaux</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-lg bg-dviaprimary-90"></div>
          <div>
            <div className="font-semibold">dviaprimary-90 (Background)</div>
            <div className="text-sm text-gray-600">Arrière-plans subtils, badges</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-lg bg-dviaprimary-10"></div>
          <div>
            <div className="font-semibold">dviaprimary-10 (Text)</div>
            <div className="text-sm text-gray-600">Texte sur fond primary</div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const NeutralColors: Story = {
  render: () => (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-6">Couleurs Neutral - Hiérarchie textuelle</h2>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-lg bg-dvianeutral-10"></div>
          <div>
            <div className="font-semibold">dvianeutral-10 (Texte principal)</div>
            <div className="text-sm text-gray-600">Titres, texte important</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-lg bg-dvianeutral-50"></div>
          <div>
            <div className="font-semibold">dvianeutral-50 (Bordures)</div>
            <div className="text-sm text-gray-600">Bordures, séparateurs</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-lg bg-dvianeutral-90"></div>
          <div>
            <div className="font-semibold">dvianeutral-90 (Background)</div>
            <div className="text-sm text-gray-600">Arrière-plans de sections</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-lg bg-dvianeutral-96"></div>
          <div>
            <div className="font-semibold">dvianeutral-96 (Background clair)</div>
            <div className="text-sm text-gray-600">Arrière-plans de cartes, inputs</div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const ColorUsage: Story = {
  render: () => (
    <div className="p-8 space-y-8">
      <h2 className="text-2xl font-semibold mb-6">Exemples d'utilisation des couleurs</h2>
      
      {/* Button Examples */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Boutons</h3>
        <div className="flex gap-4 flex-wrap">
          <button className="bg-dviaprimary-40 text-white px-4 py-2 rounded-8px font-medium">
            Bouton principal
          </button>
          <button className="bg-dviasecondary-40 text-white px-4 py-2 rounded-8px font-medium">
            Bouton secondaire
          </button>
          <button className="border border-dvianeutral-50 text-dvianeutral-10 px-4 py-2 rounded-8px font-medium">
            Bouton outline
          </button>
        </div>
      </div>

      {/* Card Examples */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Cartes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-dvianeutral-50 rounded-12px p-4 shadow-md">
            <h4 className="text-dvianeutral-10 font-semibold mb-2">Carte standard</h4>
            <p className="text-dvianeutralvariant-30 text-sm">Contenu de la carte avec texte secondaire</p>
          </div>
          <div className="bg-dvianeutral-96 border border-dvianeutral-50 rounded-12px p-4">
            <h4 className="text-dvianeutral-10 font-semibold mb-2">Carte avec background</h4>
            <p className="text-dvianeutralvariant-30 text-sm">Carte avec arrière-plan subtil</p>
          </div>
        </div>
      </div>

      {/* Text Examples */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Hiérarchie textuelle</h3>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-dvianeutral-10">Titre principal</h1>
          <h2 className="text-xl font-semibold text-dvianeutral-10">Sous-titre</h2>
          <p className="text-dvianeutral-10">Texte normal</p>
          <p className="text-dvianeutralvariant-30">Texte secondaire</p>
          <p className="text-dvianeutralvariant-60">Texte tertiaire</p>
        </div>
      </div>
    </div>
  ),
};

export const Accessibility: Story = {
  render: () => (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-6">Accessibilité des couleurs</h2>
      <div className="space-y-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="font-semibold text-green-800 mb-2">✅ Contraste suffisant</h3>
          <p className="text-green-700 text-sm">
            Les combinaisons de couleurs respectent les ratios de contraste WCAG AA (4.5:1) pour le texte normal et AAA (7:1) pour le texte important.
          </p>
        </div>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h3 className="font-semibold text-yellow-800 mb-2">⚠️ Attention</h3>
          <p className="text-yellow-700 text-sm">
            Évitez d'utiliser uniquement la couleur pour transmettre des informations. Associez toujours des icônes ou du texte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-dviaprimary-40 text-white p-4 rounded-lg">
            <div className="font-semibold">Texte sur primary-40</div>
            <div className="text-sm opacity-90">Ratio de contraste: 4.5:1</div>
          </div>
          <div className="bg-dvianeutral-10 text-white p-4 rounded-lg">
            <div className="font-semibold">Texte sur neutral-10</div>
            <div className="text-sm opacity-90">Ratio de contraste: 21:1</div>
          </div>
        </div>
      </div>
    </div>
  ),
};
