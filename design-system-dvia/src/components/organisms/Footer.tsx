import React from 'react';
import { cn } from '../../utils/cn';
import { Image } from '../atoms/Image';

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterProps {
  logo?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  description?: string;
  contact?: {
    email?: string;
    phone?: string;
  };
  sections?: FooterSection[];
  socialLinks?: {
    platform: string;
    href: string;
    icon: React.ReactNode;
  }[];
  newsletter?: {
    title: string;
    description?: string;
    placeholder?: string;
    buttonText?: string;
    onSubmit?: (email: string) => void;
  };
  copyright?: string;
  className?: string;
  variant?: 'default' | 'minimal' | 'extended';
}

export const Footer: React.FC<FooterProps> = ({
  logo = {
    src: '/logos/logo.png',
    alt: 'Logo D-Via',
    width: 150,
    height: 60,
  },
  contact = {
    email: 'contact@d-via.com',
    phone: '+33 2 89 54 36 17',
  },
  sections = [
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
  socialLinks = [
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
  newsletter,
  copyright = `© ${new Date().getFullYear()} D-VIA. Tous droits réservés.`,
  className,
  variant = 'default',
}) => {
  const footerVariants = {
    default: 'border-t border-dvianeutral-50',
    minimal: 'bg-dvianeutral-10 border-t border-dvianeutral-30',
    extended: 'bg-dvianeutral-90 text-white',
  };



  return (
    <footer className={cn('flex flex-col md:flex-row items-center md:items-start justify-center p-8 mt-10 gap-10 md:gap-24', footerVariants[variant], className)}>
      <div className="flex flex-col gap-4 max-w-xs items-center">
        <Image
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          className="object-contain"
        />

        <div className="flex flex-col gap-2 items-center">
          <p className="text-dvianeutralvariant-30 text-sm leading-relaxed">
            {contact.email}
          </p>

          <p className="text-dvianeutralvariant-30 text-sm leading-relaxed">
            {contact.phone}
          </p>
        </div>

        <button
          className="relative px-3 py-3 rounded-full text-dvianeutral-10 flex items-center justify-center cursor-pointer overflow-hidden"
          aria-label="Envoyer"
        >
          <span className="absolute inset-0 bg-dvianeutral-10 opacity-10 rounded-full transition hover:opacity-30"></span>
          {socialLinks[0]?.icon}
        </button>

        <p className="text-dvianeutralvariant-30 text-sm leading-relaxed">
          {copyright}
        </p>
      </div>

      <div className="flex flex-row gap-10 md:gap-24">
        {/* Colonne Société */}
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-[14px] md:text-[16px] text-dvianeutral-10 leading-headline-small tracking-headline-small mb-4">
            Société
          </p>
          {sections[0]?.links.map((link, linkIndex) => (
            <a
              key={linkIndex}
              href={link.href}
              className="text-dvianeutralvariant-30 hover:text-dvianeutralvariant-50 transition text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Colonne Support */}
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-[14px] md:text-[16px] text-dvianeutral-10 leading-headline-small tracking-headline-small mb-4">
            Support
          </p>
          {sections[1]?.links.map((link, linkIndex) => (
            <a
              key={linkIndex}
              href={link.href}
              className="text-dvianeutralvariant-30 hover:text-dvianeutralvariant-50 transition text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Colonne Restez informés */}
      {newsletter && (
        <div className="flex flex-col gap-4 max-w-sm">
          <p className="font-semibold text-[14px] md:text-[16px] text-dvianeutral-10 leading-headline-small tracking-headline-small mb-2">
            {newsletter.title}
          </p>
          <form className="relative w-full max-w-sm">
            <input
              type="email"
              placeholder="Votre email"
              className="w-full pr-12 p-2 border border-dvianeutral-50 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-dviaprimary-40 text-dvianeutralvariant-30 placeholder:text-dvianeutralvariant-30 placeholder:text-sm text-sm"
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 px-3 py-1 rounded-md bg-dviaprimary-40 hover:bg-dviaprimary-60 text-white flex items-center justify-center cursor-pointer"
              aria-label="Envoyer"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </form>
        </div>
      )}
    </footer>
  );
};