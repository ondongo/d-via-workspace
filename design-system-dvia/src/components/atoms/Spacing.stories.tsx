import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Design System/Styles/Spacing & Layout',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Système d\'espacement et de mise en page D-Via. Utilisez ces classes pour créer des layouts cohérents et harmonieux.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SpacingScale: Story = {
  render: () => (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold mb-8">Système d'espacement D-Via</h1>
      
      <div>
        <h2 className="text-2xl font-semibold mb-6">Échelle d'espacement</h2>
        <div className="space-y-4">
          {[
            { class: 'p-1', value: '4px', description: 'Très petit espacement' },
            { class: 'p-2', value: '8px', description: 'Petit espacement' },
            { class: 'p-3', value: '12px', description: 'Espacement petit-moyen' },
            { class: 'p-4', value: '16px', description: 'Espacement moyen (base)' },
            { class: 'p-6', value: '24px', description: 'Espacement grand' },
            { class: 'p-8', value: '32px', description: 'Espacement très grand' },
            { class: 'p-12', value: '48px', description: 'Espacement extra grand' },
            { class: 'p-16', value: '64px', description: 'Espacement maximum' },
          ].map((spacing) => (
            <div key={spacing.class} className="flex items-center gap-4">
              <div className="w-16 text-sm font-mono">{spacing.class}</div>
              <div className="w-12 text-sm text-gray-500">{spacing.value}</div>
              <div className="w-48 text-sm text-gray-600">{spacing.description}</div>
              <div className={`${spacing.class} bg-dviaprimary-40 rounded-4px`}></div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6">Espacement directionnel</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Padding</h3>
            <div className="space-y-2">
              {['pt', 'pr', 'pb', 'pl', 'px', 'py'].map((direction) => (
                <div key={direction} className="flex items-center gap-4">
                  <div className="w-12 text-sm font-mono">{direction}-4</div>
                  <div className={`${direction}-4 bg-dviaprimary-40 rounded-4px h-8`}></div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Margin</h3>
            <div className="space-y-2">
              {['mt', 'mr', 'mb', 'ml', 'mx', 'my'].map((direction) => (
                <div key={direction} className="flex items-center gap-4">
                  <div className="w-12 text-sm font-mono">{direction}-4</div>
                  <div className="relative">
                    <div className="w-8 h-8 bg-gray-200 rounded-4px"></div>
                    <div className={`${direction}-4 bg-dviaprimary-40 rounded-4px w-8 h-8 absolute`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const BorderRadius: Story = {
  render: () => (
    <div className="p-8 space-y-8">
      <h2 className="text-2xl font-semibold mb-6">Coins arrondis</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { class: 'rounded-none', value: '0px', description: 'Aucun arrondi' },
          { class: 'rounded-sm', value: '2px', description: 'Très petit arrondi' },
          { class: 'rounded', value: '4px', description: 'Petit arrondi' },
          { class: 'rounded-md', value: '6px', description: 'Arrondi moyen' },
          { class: 'rounded-lg', value: '8px', description: 'Arrondi grand' },
          { class: 'rounded-xl', value: '12px', description: 'Arrondi très grand' },
          { class: 'rounded-2xl', value: '16px', description: 'Arrondi extra grand' },
          { class: 'rounded-3xl', value: '24px', description: 'Arrondi maximum' },
          { class: 'rounded-full', value: '50%', description: 'Complètement arrondi' },
        ].map((radius) => (
          <div key={radius.class} className="text-center">
            <div className={`w-20 h-20 bg-dviaprimary-40 mb-2 ${radius.class}`}></div>
            <div className="text-sm font-mono">{radius.class}</div>
            <div className="text-xs text-gray-500">{radius.value}</div>
            <div className="text-xs text-gray-600">{radius.description}</div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Coins arrondis personnalisés D-Via</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { class: 'rounded-8px', value: '8px', description: 'Standard D-Via' },
            { class: 'rounded-12px', value: '12px', description: 'Cartes D-Via' },
            { class: 'rounded-28px', value: '28px', description: 'Boutons D-Via' },
          ].map((radius) => (
            <div key={radius.class} className="text-center">
              <div className={`w-20 h-20 bg-dviaprimary-40 mb-2 ${radius.class}`}></div>
              <div className="text-sm font-mono">{radius.class}</div>
              <div className="text-xs text-gray-500">{radius.value}</div>
              <div className="text-xs text-gray-600">{radius.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const Shadows: Story = {
  render: () => (
    <div className="p-8 space-y-8">
      <h2 className="text-2xl font-semibold mb-6">Ombres</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { class: 'shadow-sm', description: 'Ombre subtile' },
          { class: 'shadow', description: 'Ombre standard' },
          { class: 'shadow-md', description: 'Ombre moyenne' },
          { class: 'shadow-lg', description: 'Ombre grande' },
          { class: 'shadow-xl', description: 'Ombre très grande' },
          { class: 'shadow-2xl', description: 'Ombre maximum' },
        ].map((shadow) => (
          <div key={shadow.class} className="text-center">
            <div className={`w-24 h-24 bg-white rounded-lg ${shadow.class} mb-2`}></div>
            <div className="text-sm font-mono">{shadow.class}</div>
            <div className="text-xs text-gray-600">{shadow.description}</div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const LayoutGrid: Story = {
  render: () => (
    <div className="p-8 space-y-8">
      <h2 className="text-2xl font-semibold mb-6">Grille de mise en page</h2>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Grille responsive</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="bg-dviaprimary-40 rounded-lg p-4 text-white text-center">
              Colonne {i + 1}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Flexbox</h3>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="bg-dviaprimary-40 rounded-lg p-4 text-white flex-1">Flex 1</div>
            <div className="bg-dviaprimary-40 rounded-lg p-4 text-white flex-1">Flex 1</div>
            <div className="bg-dviaprimary-40 rounded-lg p-4 text-white flex-1">Flex 1</div>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="bg-dviaprimary-40 rounded-lg p-4 text-white">Gauche</div>
            <div className="bg-dviaprimary-40 rounded-lg p-4 text-white">Centre</div>
            <div className="bg-dviaprimary-40 rounded-lg p-4 text-white">Droite</div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const ResponsiveBreakpoints: Story = {
  render: () => (
    <div className="p-8 space-y-8">
      <h2 className="text-2xl font-semibold mb-6">Points de rupture responsive</h2>
      
      <div className="space-y-4">
        {[
          { breakpoint: 'sm', min: '640px', description: 'Petits écrans' },
          { breakpoint: 'md', min: '768px', description: 'Tablettes' },
          { breakpoint: 'lg', min: '1024px', description: 'Laptops' },
          { breakpoint: 'xl', min: '1280px', description: 'Desktops' },
          { breakpoint: '2xl', min: '1536px', description: 'Grands écrans' },
        ].map((bp) => (
          <div key={bp.breakpoint} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-16 text-sm font-mono font-semibold">{bp.breakpoint}</div>
            <div className="w-20 text-sm text-gray-600">{bp.min}+</div>
            <div className="text-sm text-gray-700">{bp.description}</div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Exemple d'utilisation</h3>
        <div className="bg-gray-100 p-4 rounded-lg">
          <pre className="text-sm overflow-x-auto">
{`<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div className="p-4 bg-white rounded-lg">Colonne 1</div>
  <div className="p-4 bg-white rounded-lg">Colonne 2</div>
  <div className="p-4 bg-white rounded-lg">Colonne 3</div>
</div>`}
          </pre>
        </div>
      </div>
    </div>
  ),
};
