import React from 'react';
import { cn } from '../../utils/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ 
    className, 
    title, 
    subtitle, 
    variant = 'default',
    padding = 'md',
    children, 
    ...props 
  }, ref) => {
    const baseClasses = 'rounded-12px border border-dvianeutral-50 shadow-md bg-white transition-all duration-200';
    
    const variants = {
      default: '',
      elevated: 'shadow-lg hover:shadow-xl',
      outlined: 'border-dvianeutral-30 hover:border-dvianeutral-50',
    };

    const paddings = {
      none: '',
      sm: 'p-3',
      md: 'p-4',
      lg: 'p-6',
    };

    return (
      <div
        ref={ref}
        className={cn(
          baseClasses,
          variants[variant],
          className
        )}
        {...props}
      >
        {(title || subtitle) && (
          <div className={cn('border-b border-dvianeutral-50', paddings[padding])}>
            {title && (
              <h3 className="text-title-large text-dvianeutral-10 font-semibold">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-body-medium text-dvianeutralvariant-30 mt-1">
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className={cn(paddings[padding])}>
          {children}
        </div>
      </div>
    );
  }
);

Card.displayName = 'Card';