import React from 'react';
import { cn } from '../../utils/cn';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    type = 'text', 
    label, 
    error, 
    helperText,
    leftIcon,
    rightIcon,
    size = 'md',
    id,
    ...props 
  }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    
    const baseClasses = 'w-full border px-4 py-3 flex items-center gap-2 rounded-8px border-dvianeutral-50 bg-white text-sm text-dvianeutralvariant-30 outline-none placeholder:text-dvianeutralvariant-30 placeholder:text-sm placeholder:font-normal transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0';
    
    const sizes = {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4 text-sm',
      lg: 'h-12 px-5 text-sm',
    };

    const stateClasses = error
      ? 'border-dviaerror-40 focus:ring-dviaerror-40 focus:border-dviaerror-40'
      : 'border-dvianeutral-50 focus:ring-dviaprimary-40 focus:border-dviaprimary-40';

    const iconClasses = leftIcon ? 'pl-10' : rightIcon ? 'pr-10' : '';

    return (
      <div className="space-y-1">
        {label && (
          <label 
            htmlFor={inputId}
            className="block text-label-medium text-dvianeutral-10"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dvianeutral-60">
              {leftIcon}
            </div>
          )}
          <input
            id={inputId}
            type={type}
            className={cn(
              baseClasses,
              sizes[size],
              stateClasses,
              iconClasses,
              className
            )}
            ref={ref}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dvianeutral-60">
              {rightIcon}
            </div>
          )}
        </div>
        {error && (
          <p className="text-body-small text-dviaerror-40">{error}</p>
        )}
        {helperText && !error && (
          <p className="text-body-small text-dvianeutralvariant-30">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';