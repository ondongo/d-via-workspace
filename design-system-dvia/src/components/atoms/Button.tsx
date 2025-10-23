import React from 'react';
import { cn } from '../../utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    children, 
    loading = false,
    leftIcon,
    rightIcon,
    disabled,
    ...props 
  }, ref) => {
    const baseClasses = 'whitespace-nowrap flex items-center justify-center text-label-large leading-label-large tracking-label-large shadow-lg border rounded-8px border-transparent text-sm font-medium hover:shadow-sm transition-shadow duration-300 cursor-pointer';
    
    const variants = {
      primary: 'text-white bg-dviaprimary-40 hover:bg-dviaprimary-50 px-4 py-1',
      secondary: 'text-white bg-dviasecondary-40 hover:bg-dviasecondary-50 px-4 py-1',
      outline: 'text-dvianeutral-10 bg-transparent border border-dvianeutral-20 hover:bg-dvianeutral-90 px-4 py-1',
      ghost: 'text-dvianeutral-10 bg-transparent hover:bg-dvianeutral-90 px-4 py-1',
      destructive: 'text-white bg-red-600 hover:bg-red-700 px-4 py-1',
    };

    const sizes = {
      sm: 'px-3 py-1 text-sm',
      md: 'px-4 py-1 text-sm',
      lg: 'px-8 py-2 text-sm',
    };

    return (
      <button
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        disabled={disabled || loading}
        {...props}
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
        {children}
        {!loading && rightIcon && <span className="ml-2 flex items-center">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';