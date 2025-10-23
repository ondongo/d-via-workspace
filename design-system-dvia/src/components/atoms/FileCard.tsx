import React from 'react';
import { cn } from '../../utils/cn';

export interface FileCardProps {
  name: string;
  icon?: string | React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline' | 'filled';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  isVisible?: boolean;
  showAnimation?: boolean;
}

export const FileCard: React.FC<FileCardProps> = ({
  name,
  icon,
  size = 'md',
  variant = 'default',
  className,
  onClick,
  disabled = false,
  isVisible = true,
  showAnimation = true,
}) => {
  const sizeClasses = {
    sm: 'px-3 py-2 text-xs',
    md: 'px-4 py-3 text-sm',
    lg: 'px-5 py-4 text-base',
  };

  const variantClasses = {
    default: 'bg-dvianeutral-96 border border-dvianeutral-50 text-dvianeutral-10',
    outline: 'bg-transparent border border-dvianeutral-50 text-dvianeutral-10',
    filled: 'bg-dvianeutral-96 border-0 text-dvianeutral-10',
  };

  const defaultIcon = (
    <img 
      src="/icons/draftPrimary.svg" 
      alt="file" 
      className="w-3 h-3 md:w-4 md:h-4 text-dviaprimary-40" 
    />
  );

  return (
    <div
      className={cn(
        'flex items-center gap-2 px-4 py-3 bg-dvianeutral-96 border border-dvianeutral-50 text-dvianeutral-10 rounded-12px whitespace-nowrap shadow-md text-xs md:text-sm transition-opacity duration-700 ease-in-out cursor-pointer',
        sizeClasses[size],
        variantClasses[variant],
        !isVisible && showAnimation && 'opacity-40',
        isVisible && showAnimation && 'opacity-100',
        disabled && 'opacity-50 cursor-not-allowed',
        onClick && !disabled && 'hover:shadow-md hover:scale-105',
        className
      )}
      onClick={disabled ? undefined : onClick}
    >
      {icon || defaultIcon}
      <span className="truncate">{name}</span>
    </div>
  );
};