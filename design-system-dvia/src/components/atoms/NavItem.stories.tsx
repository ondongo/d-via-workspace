import type { Meta, StoryObj } from '@storybook/react';
import { NavItem } from './NavItem';

const meta: Meta<typeof NavItem> = {
  title: 'Atoms/NavItem',
  component: NavItem,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Le composant NavItem est un élément de navigation stylisé qui respecte le design system D-Via. Il supporte différents états, icônes et peut être utilisé dans des menus horizontaux ou verticaux.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Texte du lien de navigation',
    },
    href: {
      control: 'text',
      description: 'URL de destination',
    },
    active: {
      control: 'boolean',
      description: 'État actif du lien',
    },
    disabled: {
      control: 'boolean',
      description: 'Désactiver le lien',
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'ghost'],
      description: 'Variante de style',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Taille du NavItem',
    },
    icon: {
      control: 'object',
      description: 'Icône à afficher',
    },
    rightIcon: {
      control: 'object',
      description: 'Icône à droite',
    },
    className: {
      control: 'text',
      description: 'Classes CSS supplémentaires',
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

const homeIcon = (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const userIcon = (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const settingsIcon = (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const chevronRightIcon = (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export const Default: Story = {
  args: {
    label: 'Accueil',
    href: '/',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-4">Variantes de style</h3>
        <div className="flex flex-col space-y-2">
          <NavItem
            label="Default"
            href="/default"
            variant="default"
          />
          <NavItem
            label="Primary"
            href="/primary"
            variant="primary"
          />
          <NavItem
            label="Secondary"
            href="/secondary"
            variant="secondary"
          />
          <NavItem
            label="Ghost"
            href="/ghost"
            variant="ghost"
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
        <div className="flex flex-col space-y-2">
          <NavItem
            label="Small"
            href="/small"
            size="sm"
          />
          <NavItem
            label="Medium"
            href="/medium"
            size="md"
          />
          <NavItem
            label="Large"
            href="/large"
            size="lg"
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
        <div className="flex flex-col space-y-2">
          <NavItem
            label="Accueil"
            href="/"
            icon={homeIcon}
          />
          <NavItem
            label="Profil"
            href="/profile"
            icon={userIcon}
          />
          <NavItem
            label="Paramètres"
            href="/settings"
            icon={settingsIcon}
            rightIcon={chevronRightIcon}
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
        <div className="flex flex-col space-y-2">
          <NavItem
            label="Normal"
            href="/normal"
          />
          <NavItem
            label="Actif"
            href="/active"
            active
          />
          <NavItem
            label="Désactivé"
            href="/disabled"
            disabled
          />
        </div>
      </div>
    </div>
  ),
};

export const NavigationMenu: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-4">Menu de navigation horizontal</h3>
        <nav className="flex space-x-6">
          <NavItem
            label="Accueil"
            href="/"
            icon={homeIcon}
            active
          />
          <NavItem
            label="Services"
            href="/services"
          />
          <NavItem
            label="À propos"
            href="/about"
          />
          <NavItem
            label="Contact"
            href="/contact"
          />
        </nav>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-4">Menu de navigation vertical</h3>
        <nav className="flex flex-col space-y-2 w-64">
          <NavItem
            label="Tableau de bord"
            href="/dashboard"
            icon={homeIcon}
            active
          />
          <NavItem
            label="Profil"
            href="/profile"
            icon={userIcon}
          />
          <NavItem
            label="Paramètres"
            href="/settings"
            icon={settingsIcon}
            rightIcon={chevronRightIcon}
          />
          <NavItem
            label="Déconnexion"
            href="/logout"
            variant="ghost"
            disabled
          />
        </nav>
      </div>
    </div>
  ),
};

export const BreadcrumbStyle: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-4">Style fil d'Ariane</h3>
        <nav className="flex items-center space-x-2 text-sm">
          <NavItem
            label="Accueil"
            href="/"
            variant="ghost"
            size="sm"
          />
          <span className="text-dvianeutral-60">/</span>
          <NavItem
            label="Blog"
            href="/blog"
            variant="ghost"
            size="sm"
          />
          <span className="text-dvianeutral-60">/</span>
          <NavItem
            label="Article"
            href="/blog/article"
            variant="ghost"
            size="sm"
            active
          />
        </nav>
      </div>
    </div>
  ),
};

export const MobileMenu: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-4">Menu mobile</h3>
        <div className="bg-dvianeutral-90 p-4 rounded-8px w-64">
          <nav className="flex flex-col space-y-1">
            <NavItem
              label="Accueil"
              href="/"
              icon={homeIcon}
              active
              size="lg"
            />
            <NavItem
              label="Services"
              href="/services"
              size="lg"
            />
            <NavItem
              label="Portfolio"
              href="/portfolio"
              size="lg"
            />
            <NavItem
              label="À propos"
              href="/about"
              size="lg"
            />
            <NavItem
              label="Contact"
              href="/contact"
              size="lg"
            />
          </nav>
        </div>
      </div>
    </div>
  ),
};

export const FooterLinks: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-4">Liens de footer</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-dvianeutral-10 mb-2">Société</h4>
            <nav className="flex flex-col space-y-1">
              <NavItem
                label="À propos"
                href="/about"
                variant="ghost"
                size="sm"
              />
              <NavItem
                label="Carrières"
                href="/careers"
                variant="ghost"
                size="sm"
              />
              <NavItem
                label="Blog"
                href="/blog"
                variant="ghost"
                size="sm"
              />
            </nav>
          </div>
          <div>
            <h4 className="font-semibold text-dvianeutral-10 mb-2">Support</h4>
            <nav className="flex flex-col space-y-1">
              <NavItem
                label="Centre d'aide"
                href="/help"
                variant="ghost"
                size="sm"
              />
              <NavItem
                label="Contact"
                href="/contact"
                variant="ghost"
                size="sm"
              />
              <NavItem
                label="Mentions légales"
                href="/legal"
                variant="ghost"
                size="sm"
              />
            </nav>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    label: 'Lien interactif',
    href: '/interactive',
    icon: homeIcon,
  },
};

export const CodeExample: Story = {
  render: () => (
    <div className="p-4">
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { NavItem } from '@design-system-dvia/components';

// NavItem basique
<NavItem
  label="Accueil"
  href="/"
/>

// Avec icône
<NavItem
  label="Profil"
  href="/profile"
  icon={<UserIcon />}
/>

// Avec icônes gauche et droite
<NavItem
  label="Paramètres"
  href="/settings"
  icon={<SettingsIcon />}
  rightIcon={<ChevronRightIcon />}
/>

// États
<NavItem
  label="Actif"
  href="/active"
  active
/>
<NavItem
  label="Désactivé"
  href="/disabled"
  disabled
/>

// Variantes
<NavItem label="Default" href="/" variant="default" />
<NavItem label="Primary" href="/" variant="primary" />
<NavItem label="Secondary" href="/" variant="secondary" />
<NavItem label="Ghost" href="/" variant="ghost" />

// Tailles
<NavItem label="Small" href="/" size="sm" />
<NavItem label="Medium" href="/" size="md" />
<NavItem label="Large" href="/" size="lg" />

// Menu de navigation horizontal
<nav className="flex space-x-6">
  <NavItem
    label="Accueil"
    href="/"
    icon={<HomeIcon />}
    active
  />
  <NavItem
    label="Services"
    href="/services"
  />
  <NavItem
    label="À propos"
    href="/about"
  />
  <NavItem
    label="Contact"
    href="/contact"
  />
</nav>

// Menu de navigation vertical
<nav className="flex flex-col space-y-2">
  <NavItem
    label="Tableau de bord"
    href="/dashboard"
    icon={<HomeIcon />}
    active
  />
  <NavItem
    label="Profil"
    href="/profile"
    icon={<UserIcon />}
  />
  <NavItem
    label="Paramètres"
    href="/settings"
    icon={<SettingsIcon />}
    rightIcon={<ChevronRightIcon />}
  />
</nav>

// Fil d'Ariane
<nav className="flex items-center space-x-2">
  <NavItem
    label="Accueil"
    href="/"
    variant="ghost"
    size="sm"
  />
  <span>/</span>
  <NavItem
    label="Blog"
    href="/blog"
    variant="ghost"
    size="sm"
  />
  <span>/</span>
  <NavItem
    label="Article"
    href="/blog/article"
    variant="ghost"
    size="sm"
    active
  />
</nav>

// Liens de footer
<nav className="flex flex-col space-y-1">
  <NavItem
    label="À propos"
    href="/about"
    variant="ghost"
    size="sm"
  />
  <NavItem
    label="Carrières"
    href="/careers"
    variant="ghost"
    size="sm"
  />
  <NavItem
    label="Blog"
    href="/blog"
    variant="ghost"
    size="sm"
  />
</nav>`}</code>
      </pre>
    </div>
  ),
};