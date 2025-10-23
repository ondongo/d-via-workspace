"use client";
import React from 'react';
import { cn } from '../../utils/cn';

export interface NavigationRailItem {
  id: string;
  label: string;
  icon: string | React.ReactNode;
  activeIcon?: string | React.ReactNode;
  href: string;
  onClick?: () => void;
}

export interface NavigationRailProps {
  items: NavigationRailItem[];
  activeItem?: string;
  logo?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    onClick?: () => void;
  };
  className?: string;
  variant?: 'default' | 'compact';
  expandOnHover?: boolean;
}

export const NavigationRail: React.FC<NavigationRailProps> = ({
  items,
  activeItem,
  logo,
  className,
  variant = 'default',
  expandOnHover = true,
}) => {
  const variantClasses = {
    default: 'w-[90px] hover:w-[160px]',
    compact: 'w-[70px] hover:w-[140px]',
  };

  return (
    <div
      className={cn(
        'group fixed top-0 left-0 h-screen z-50 bg-dvianeutral-90 border-r border-dvianeutral-50 transition-all duration-300 ease-in-out overflow-hidden',
        expandOnHover && variantClasses[variant],
        className
      )}
    >
      <div className="flex flex-col py-[44px] justify-between h-full min-h-screen items-center">
        {/* Logo */}
        {logo && (
          <div 
            onClick={logo.onClick}
            className={cn(
              'cursor-pointer transition-all duration-200',
              logo.onClick && 'hover:opacity-80'
            )}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              width={logo.width || 48}
              height={logo.height || 48}
              className="transition-all duration-200"
            />
          </div>
        )}

        {/* Navigation Items */}
        <div className="flex flex-col gap-4 justify-center items-center">
          {items.map((item) => {
            const isActive = activeItem === item.id;
            const iconToShow = isActive && item.activeIcon ? item.activeIcon : item.icon;

            return (
              <div
                key={item.id}
                className="flex flex-col justify-center items-center gap-2 text-dvianeutralvariant-30 leading-label-medium text-label-medium tracking-label-medium"
              >
                <button
                  onClick={item.onClick}
                  className={cn(
                    'rounded-28px px-5 py-2 transition-all duration-200 hover:bg-dviasecondary-90 cursor-pointer',
                    isActive && 'bg-dviasecondary-90'
                  )}
                >
                  {typeof iconToShow === 'string' ? (
                    <img
                      src={iconToShow}
                      alt={item.label}
                      className="w-[24px] h-[24px]"
                    />
                  ) : (
                    iconToShow
                  )}
                </button>
                <span className="max-w-[70px] group-hover:max-w-[120px] truncate overflow-hidden whitespace-nowrap text-center transition-all duration-300 ease-in-out">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Bottom section - can be used for user menu, settings, etc. */}
        <div className="flex flex-col justify-center items-center">
          {/* This can be customized based on needs */}
        </div>
      </div>
    </div>
  );
};