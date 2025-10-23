"use client";
import React, { useState } from 'react';
import { cn } from '../../utils/cn';
import { NavItem } from '../atoms/NavItem';

export interface ResponsiveMenuProps {
  items: {
    label: string;
    href: string;
    active?: boolean;
    onClick?: () => void;
  }[];
  logo?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    onClick?: () => void;
  };
  className?: string;
  variant?: 'default' | 'compact';
  showMobileMenu?: boolean;
  onMobileMenuToggle?: (isOpen: boolean) => void;
}

export const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({
  items,
  logo,
  className,
  variant = 'default',
  showMobileMenu = true,
  onMobileMenuToggle,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onMobileMenuToggle?.(newState);
  };

  const variantClasses = {
    default: 'py-4 px-6',
    compact: 'py-2 px-4',
  };

  return (
    <nav className={cn('relative bg-white shadow-sm border-b border-dvianeutral-20', variantClasses[variant], className)}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        {logo && (
          <div className="flex-shrink-0">
            <button
              onClick={logo.onClick}
              className="focus:outline-none focus:ring-2 focus:ring-dviaprimary-500 focus:ring-offset-2 rounded-8px"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                width={logo.width || 120}
                height={logo.height || 40}
                className="h-8 w-auto"
              />
            </button>
          </div>
        )}

        {/* Menu desktop */}
        <div className="hidden md:flex flex-row justify-center items-center space-x-8 flex-1">
          {items.map((item, index) => (
            <NavItem
              key={index}
              label={item.label}
              href={item.href}
              active={item.active}
              onClick={item.onClick}
              className="text-dvianeutral-80 hover:text-dviaprimary-500 transition-colors duration-200 font-medium"
            />
          ))}
        </div>

        {/* Bouton hamburger mobile */}
        {showMobileMenu && (
          <div className="flex md:hidden items-center">
            <button
              onClick={handleToggle}
              aria-label="Toggle menu"
              className="p-2 hover:bg-dvianeutral-20 rounded-8px transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-dviaprimary-500 focus:ring-offset-2"
            >
              <svg
                className="w-6 h-6 text-dvianeutral-80"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
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
        )}
      </div>

      {/* Menu mobile slide depuis la droite */}
      {showMobileMenu && (
        <div
          className={cn(
            'fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out',
            isOpen ? 'translate-x-0' : 'translate-x-full',
            'md:hidden pt-20 px-6'
          )}
        >
          <div className="space-y-4">
            {items.map((item, index) => (
              <NavItem
                key={index}
                label={item.label}
                href={item.href}
                active={item.active}
                onClick={() => {
                  item.onClick?.();
                  setIsOpen(false);
                  onMobileMenuToggle?.(false);
                }}
                className="block py-3 px-4 text-dvianeutral-80 hover:text-dviaprimary-500 hover:bg-dvianeutral-10 rounded-8px transition-colors duration-200 font-medium"
              />
            ))}
          </div>
        </div>
      )}

      {/* Overlay semi-transparent */}
      {isOpen && showMobileMenu && (
        <div
          onClick={() => {
            setIsOpen(false);
            onMobileMenuToggle?.(false);
          }}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        />
      )}
    </nav>
  );
};