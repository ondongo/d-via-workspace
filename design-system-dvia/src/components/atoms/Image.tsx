import React from 'react';
import { cn } from '../../utils/cn';

export interface ImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  variant?: 'default' | 'rounded' | 'circle' | 'square';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  quality?: number;
  fill?: boolean;
  onClick?: () => void;
  onLoad?: () => void;
  onError?: () => void;
}

const sizeClasses = {
  xs: 'w-8 h-8',
  sm: 'w-12 h-12',
  md: 'w-16 h-16',
  lg: 'w-24 h-24',
  xl: 'w-32 h-32',
  '2xl': 'w-48 h-48',
  full: 'w-full h-full',
};

const variantClasses = {
  default: 'rounded-none',
  rounded: 'rounded-8px',
  circle: 'rounded-full',
  square: 'rounded-none',
};

const objectFitClasses = {
  cover: 'object-cover',
  contain: 'object-contain',
  fill: 'object-fill',
  none: 'object-none',
  'scale-down': 'object-scale-down',
};

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  variant = 'default',
  size,
  objectFit = 'cover',
  className,
  loading = 'lazy',
  priority = false,
  placeholder = 'empty',
  blurDataURL,
  quality = 75,
  fill = false,
  onClick,
  onLoad,
  onError,
  ...props
}) => {
  const sizeClass = size ? sizeClasses[size] : '';
  const variantClass = variantClasses[variant];
  const objectFitClass = objectFitClasses[objectFit];

  const imageProps: any = {
    src,
    alt,
    className: cn(
      variantClass,
      sizeClass,
      objectFitClass,
      onClick && 'cursor-pointer',
      className
    ),
    loading,
    priority,
    placeholder,
    blurDataURL,
    quality,
    fill,
    onClick,
    onLoad,
    onError,
    ...props,
  };

  // Si width et height sont définis, les utiliser
  if (width && height && !fill) {
    imageProps.width = width;
    imageProps.height = height;
  }

  return (
    <img
      {...imageProps}
      style={{
        ...(width && height && !fill && { width, height }),
        ...(fill && { width: '100%', height: '100%' }),
      }}
    />
  );
};