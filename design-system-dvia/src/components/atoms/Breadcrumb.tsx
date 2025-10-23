import React from 'react';
import { cn } from '../../utils/cn';
import { Typography } from './Typography';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

export interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  title?: string;
  className?: string;
  variant?: 'default' | 'simple';
  separator?: React.ReactNode;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items = [],
  title,
  className,
  variant = 'default',
  separator = '/',
}) => {
  if (variant === 'simple' && title) {
    return (
      <Typography
        variant="headline-medium"
        weight="600"
        className={cn(
          'text-headline-small leading-headline-small tracking-headline-small text-dvianeutral-10 font-[600] px-6',
          'md:text-display-medium md:leading-display-medium md:tracking-display-medium',
          className
        )}
      >
        {title}
      </Typography>
    );
  }

  if (items.length === 0) return null;

  return (
    <nav className={cn('flex items-center space-x-2', className)}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <span className="text-dvianeutral-60 mx-2">
              {separator}
            </span>
          )}
          {item.href && !item.active ? (
            <a
              href={item.href}
              className="text-dvianeutral-60 hover:text-dviaprimary-40 transition-colors"
            >
              <Typography variant="body-medium">
                {item.label}
              </Typography>
            </a>
          ) : (
            <Typography
              variant="body-medium"
              className={cn(
                item.active ? 'text-dvianeutral-10 font-semibold' : 'text-dvianeutral-60'
              )}
            >
              {item.label}
            </Typography>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};