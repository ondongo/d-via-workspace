import React from 'react';
import { cn } from '../../utils/cn';

export interface BottomActionButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  sticky?: boolean;
  className?: string;
  showOnMobile?: boolean;
  showOnDesktop?: boolean;
}

export const BottomActionButton: React.FC<BottomActionButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  sticky = true,
  className,
  showOnMobile = true,
  showOnDesktop = false,
}) => {
  const visibilityClasses = cn(
    showOnMobile && 'md:hidden',
    showOnDesktop && 'hidden md:block',
    !showOnMobile && !showOnDesktop && 'block'
  );

  const positionClasses = sticky ? 'fixed bottom-0 left-0 w-full z-[99999]' : 'relative';

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-1 text-sm',
    lg: 'px-6 py-2 text-base',
  };

  const variantClasses = {
    primary: 'text-white bg-dviaprimary-40 hover:bg-dviaprimary-50',
    secondary: 'text-white bg-dviasecondary-40 hover:bg-dviasecondary-50',
    outline: 'text-dvianeutral-10 bg-transparent border border-dvianeutral-20 hover:bg-dvianeutral-90',
    ghost: 'text-dvianeutral-10 bg-transparent hover:bg-dvianeutral-90',
  };

  return (
    <div
      className={cn(
        positionClasses,
        'bg-dvianeutral-96 px-4 py-6 flex justify-center',
        visibilityClasses,
        className
      )}
    >
      <button
        onClick={onClick}
        disabled={disabled || loading}
        className={cn(
          'text-label-large leading-label-large tracking-label-large shadow-lg border rounded-8px border-transparent font-medium hover:shadow-sm transition-shadow duration-300 cursor-pointer whitespace-nowrap flex items-center justify-center gap-2',
          sizeClasses[size],
          variantClasses[variant],
          fullWidth ? 'w-full' : 'max-w-[260px]',
          size === 'md' && 'h-[40px]',
          (disabled || loading) && 'opacity-50 cursor-not-allowed'
        )}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!loading && leftIcon && <span className="mr-2 flex items-center">{leftIcon}</span>}
        {label}
        {!loading && rightIcon && <span className="ml-2 flex items-center">{rightIcon}</span>}
      </button>
    </div>
  );
};