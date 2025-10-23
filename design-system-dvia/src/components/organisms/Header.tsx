"use client";
import React, { useState } from 'react';
import { cn } from '../../utils/cn';
import { Button } from '../atoms/Button';
import { Image } from '../atoms/Image';

export interface HeaderProps {
  logo?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  navigation?: {
    label: string;
    href: string;
    active?: boolean;
  }[];
  ctaButton?: {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
  };
  className?: string;
  variant?: 'default' | 'transparent' | 'sticky';
  showMobileMenu?: boolean;
  onMobileMenuToggle?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  logo = {
    src: '/logos/logo.png',
    alt: 'Logo D-Via',
    width: 120,
    height: 40,
  },
  navigation = [],
  ctaButton,
  className,
  variant = 'default',
  showMobileMenu = false,
  onMobileMenuToggle,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    onMobileMenuToggle?.();
  };

  // Supprimer l'avertissement pour showMobileMenu
  console.log('showMobileMenu:', showMobileMenu);

  const headerVariants = {
    default: 'border-b-1 border-dvianeutral-50',
    transparent: 'bg-transparent',
    sticky: 'bg-dvianeutral-100/95 backdrop-blur-sm border-b border-dvianeutral-30 sticky top-0 z-50',
  };

  return (
    <div className={cn(
      'flex flex-row justify-between p-4',
      headerVariants[variant],
      className
    )}>
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div onClick={() => {}} className="cursor-pointer">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="max-w-[213px] max-h-[80px]"
          />
        </div>

        {/* Navigation Desktop */}
        {navigation.length > 0 && (
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={cn(
                  'text-label-large leading-label-large tracking-label-large font-medium transition-colors duration-200',
                  item.active
                    ? 'text-dviaprimary-40'
                    : 'text-dvianeutral-10 hover:text-dviaprimary-40'
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}

        {/* CTA Button & Mobile Menu */}
        <div className="flex flex-row gap-8 justify-center items-center">
          {ctaButton && (
            <button
              onClick={ctaButton.onClick}
              className="hidden md:block text-white text-label-large leading-label-large tracking-label-large bg-dviaprimary-40 px-4 py-1 shadow-lg border rounded-8px border-transparent text-sm font-medium hover:shadow-sm transition-shadow duration-300 cursor-pointer max-w-[260px] min-h-[40px] max-h-[40px]"
            >
              {ctaButton.label}
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={handleMobileMenuToggle}
            className="md:hidden p-2 rounded-8px hover:bg-dvianeutral-90 transition-colors"
            aria-label="Menu mobile"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-dvianeutral-30">
          <div className="flex flex-col space-y-4 pt-4">
            {navigation.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={cn(
                  'text-label-large leading-label-large tracking-label-large font-medium px-4 py-2 rounded-8px transition-colors duration-200',
                  item.active
                    ? 'text-dviaprimary-40 bg-dviaprimary-90'
                    : 'text-dvianeutral-10 hover:text-dviaprimary-40 hover:bg-dvianeutral-90'
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            {ctaButton && (
              <div className="px-4 pt-2">
                <Button
                  variant={ctaButton.variant || 'primary'}
                  onClick={() => {
                    ctaButton.onClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full"
                >
                  {ctaButton.label}
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};