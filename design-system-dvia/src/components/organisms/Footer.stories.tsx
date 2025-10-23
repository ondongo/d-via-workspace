import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Organisms/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Le composant Footer fournit une section de pied de page complète avec logo, liens de navigation, informations de contact et newsletter. Il s\'adapte aux différentes tailles d\'écran.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'minimal', 'extended'],
      description: 'Variante de style du footer',
    },
    onNewsletterSubmit: {
      action: 'newsletterSubmitted',
      description: 'Callback appelé quand la newsletter est soumise',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logo: {
      src: '/logos/logo.png',
      alt: 'Logo D-Via',
      width: 150,
      height: 60,
    },
    contact: {
      email: 'contact@d-via.com',
      phone: '+33 2 89 54 36 17',
    },
    sections: [
      {
        title: 'Société',
        links: [
          { label: 'À propos de nous', href: '/about' },
          { label: 'Carrières', href: '/careers' },
          { label: 'Blog', href: '/blog' },
          { label: 'Contactez-nous', href: '/contact' },
          { label: 'Tarifs', href: '/pricing' },
          { label: 'Témoignages', href: '/testimonials' },
        ],
      },
      {
        title: 'Support',
        links: [
          { label: "Centre d'aide", href: '/help' },
          { label: "Conditions d'utilisation", href: '/terms' },
          { label: 'Mentions légales', href: '/legal' },
          { label: 'Politique de confidentialité', href: '/privacy' },
          { label: 'Statut', href: '/status' },
        ],
      },
    ],
    socialLinks: [
      {
        platform: 'Instagram',
        href: 'https://instagram.com/dvia',
        icon: (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
          </svg>
        ),
      },
    ],
    newsletter: {
      title: 'Restez informés',
      description: 'Recevez nos dernières actualités et offres spéciales.',
      placeholder: 'Votre email',
      buttonText: 'S\'abonner',
      onSubmit: (email) => console.log('Newsletter submitted:', email),
    },
  },
};

export const Minimal: Story = {
  args: {
    logo: {
      src: '/logos/logo.png',
      alt: 'Logo D-Via',
      width: 150,
      height: 60,
    },
    contact: {
      email: 'contact@d-via.com',
      phone: '+33 2 89 54 36 17',
    },
    sections: [
      {
        title: 'Liens utiles',
        links: [
          { label: 'À propos', href: '/about' },
          { label: 'Contact', href: '/contact' },
          { label: 'Mentions légales', href: '/legal' },
        ],
      },
    ],
    variant: 'minimal',
  },
};

export const Extended: Story = {
  args: {
    logo: {
      src: '/logos/logo.png',
      alt: 'Logo D-Via',
      width: 150,
      height: 60,
    },
    contact: {
      email: 'contact@d-via.com',
      phone: '+33 2 89 54 36 17',
    },
    sections: [
      {
        title: 'Société',
        links: [
          { label: 'À propos de nous', href: '/about' },
          { label: 'Carrières', href: '/careers' },
          { label: 'Blog', href: '/blog' },
          { label: 'Contactez-nous', href: '/contact' },
          { label: 'Tarifs', href: '/pricing' },
          { label: 'Témoignages', href: '/testimonials' },
        ],
      },
      {
        title: 'Support',
        links: [
          { label: "Centre d'aide", href: '/help' },
          { label: "Conditions d'utilisation", href: '/terms' },
          { label: 'Mentions légales', href: '/legal' },
          { label: 'Politique de confidentialité', href: '/privacy' },
          { label: 'Statut', href: '/status' },
        ],
      },
      {
        title: 'Ressources',
        links: [
          { label: 'Documentation', href: '/docs' },
          { label: 'API', href: '/api' },
          { label: 'Intégrations', href: '/integrations' },
          { label: 'Changelog', href: '/changelog' },
        ],
      },
    ],
    socialLinks: [
      {
        platform: 'Instagram',
        href: 'https://instagram.com/dvia',
        icon: (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
          </svg>
        ),
      },
      {
        platform: 'Twitter',
        href: 'https://twitter.com/dvia',
        icon: (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        ),
      },
    ],
    newsletter: {
      title: 'Restez informés',
      description: 'Recevez nos dernières actualités et offres spéciales.',
      placeholder: 'Votre email',
      buttonText: 'S\'abonner',
      onSubmit: (email) => console.log('Newsletter submitted:', email),
    },
    variant: 'extended',
  },
};

export const WithNewsletter: Story = {
  args: {
    logo: {
      src: '/logos/logo.png',
      alt: 'Logo D-Via',
      width: 150,
      height: 60,
    },
    contact: {
      email: 'contact@d-via.com',
      phone: '+33 2 89 54 36 17',
    },
    sections: [
      {
        title: 'Société',
        links: [
          { label: 'À propos de nous', href: '/about' },
          { label: 'Carrières', href: '/careers' },
          { label: 'Blog', href: '/blog' },
        ],
      },
    ],
    newsletter: {
      title: 'Newsletter',
      description: 'Inscrivez-vous pour recevoir nos dernières actualités.',
      placeholder: 'Entrez votre email',
      buttonText: 'S\'inscrire',
      onSubmit: (email) => console.log('Newsletter submitted:', email),
    },
  },
};

export const WithoutNewsletter: Story = {
  args: {
    logo: {
      src: '/logos/logo.png',
      alt: 'Logo D-Via',
      width: 150,
      height: 60,
    },
    contact: {
      email: 'contact@d-via.com',
      phone: '+33 2 89 54 36 17',
    },
    sections: [
      {
        title: 'Société',
        links: [
          { label: 'À propos de nous', href: '/about' },
          { label: 'Carrières', href: '/careers' },
          { label: 'Blog', href: '/blog' },
          { label: 'Contactez-nous', href: '/contact' },
        ],
      },
      {
        title: 'Support',
        links: [
          { label: "Centre d'aide", href: '/help' },
          { label: "Conditions d'utilisation", href: '/terms' },
          { label: 'Mentions légales', href: '/legal' },
        ],
      },
    ],
  },
};

export const Interactive: Story = {
  args: {
    logo: {
      src: '/logos/logo.png',
      alt: 'Logo D-Via',
      width: 150,
      height: 60,
    },
    contact: {
      email: 'contact@d-via.com',
      phone: '+33 2 89 54 36 17',
    },
    sections: [
      {
        title: 'Société',
        links: [
          { label: 'À propos de nous', href: '/about' },
          { label: 'Carrières', href: '/careers' },
          { label: 'Blog', href: '/blog' },
        ],
      },
    ],
    newsletter: {
      title: 'Restez informés',
      placeholder: 'Votre email',
      buttonText: 'S\'abonner',
      onSubmit: (email) => console.log('Newsletter submitted:', email),
    },
  },
};

export const CodeExample: Story = {
  render: () => (
    <div className="p-4">
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Footer } from '@design-system-dvia/components';

// Footer basique
<Footer
  logo={{
    src: '/logos/logo.png',
    alt: 'Logo D-Via',
    width: 150,
    height: 60,
  }}
  contact={{
    email: 'contact@d-via.com',
    phone: '+33 2 89 54 36 17',
  }}
  sections={[
    {
      title: 'Société',
      links: [
        { label: 'À propos de nous', href: '/about' },
        { label: 'Carrières', href: '/careers' },
        { label: 'Blog', href: '/blog' },
      ],
    },
  ]}
  newsletter={{
    title: 'Restez informés',
    placeholder: 'Votre email',
    buttonText: 'S\'abonner',
    onSubmit: (email) => console.log('Newsletter submitted:', email),
  }}
/>

// Footer minimal
<Footer
  variant="minimal"
  logo={{
    src: '/logos/logo.png',
    alt: 'Logo D-Via',
    width: 150,
    height: 60,
  }}
  contact={{
    email: 'contact@d-via.com',
    phone: '+33 2 89 54 36 17',
  }}
  sections={[
    {
      title: 'Liens utiles',
      links: [
        { label: 'À propos', href: '/about' },
        { label: 'Contact', href: '/contact' },
      ],
    },
  ]}
/>

// Footer étendu
<Footer
  variant="extended"
  logo={{
    src: '/logos/logo.png',
    alt: 'Logo D-Via',
    width: 150,
    height: 60,
  }}
  contact={{
    email: 'contact@d-via.com',
    phone: '+33 2 89 54 36 17',
  }}
  sections={[
    {
      title: 'Société',
      links: [
        { label: 'À propos de nous', href: '/about' },
        { label: 'Carrières', href: '/careers' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: "Centre d'aide", href: '/help' },
        { label: "Conditions d'utilisation", href: '/terms' },
      ],
    },
  ]}
  socialLinks={[
    {
      platform: 'Instagram',
      href: 'https://instagram.com/dvia',
      icon: <InstagramIcon />,
    },
  ]}
  newsletter={{
    title: 'Restez informés',
    onSubmit: (email) => console.log('Newsletter submitted:', email),
  }}
/>`}</code>
      </pre>
    </div>
  ),
};