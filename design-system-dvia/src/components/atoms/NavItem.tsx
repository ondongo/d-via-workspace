import React from 'react';
import { cn } from '../../utils/cn';
import { Typography } from './Typography';

export interface NavItemProps {
  label: string;
  href: string;
  active?: boolean;
  onClick?: () => void;
  variant?: 'default' | 'minimal' | 'pill';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const NavItem: React.FC<NavItemProps> = ({
  label,
  href,
  active = false,
  onClick,
  variant = 'default',
  size = 'md',
  className,
}) => {
  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-3 py-2 text-sm',
    lg: 'px-4 py-3 text-base',
  };

  const variantClasses = {
    default: cn(
      'relative transition-colors duration-200',
      active
        ? 'text-dviaprimary-50 font-semibold'
        : 'text-dvianeutral-80 hover:text-dviaprimary-50'
    ),
    minimal: cn(
      'transition-colors duration-200',
      active
        ? 'text-dviaprimary-50 font-medium'
        : 'text-dvianeutral-70 hover:text-dviaprimary-50'
    ),
    pill: cn(
      'rounded-full transition-all duration-200',
      active
        ? 'bg-dviaprimary-50 text-white font-medium'
        : 'text-dvianeutral-80 hover:bg-dviaprimary-10 hover:text-dviaprimary-50'
    ),
  };

  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        'cursor-pointer inline-block',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      <Typography
        variant={size === 'lg' ? 'body-large' : 'body-medium'}
        weight={active ? '600' : '400'}
        className="whitespace-nowrap"
      >
        {label}
      </Typography>
      {variant === 'default' && active && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-dviaprimary-50" />
      )}
    </a>
  );
};