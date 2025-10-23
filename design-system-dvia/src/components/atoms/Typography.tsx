import React from 'react';
import { cn } from '../../utils/cn';

export interface TypographyProps {
  variant?: 'display-large' | 'display-medium' | 'display-small' | 'headline-large' | 'headline-medium' | 'headline-small' | 'title-large' | 'title-medium' | 'title-small' | 'label-large' | 'label-medium' | 'label-small' | 'body-large' | 'body-medium' | 'body-small';
  weight?: '400' | '500' | '600' | '700';
  color?: 'dviaprimary-10' | 'dviaprimary-20' | 'dviaprimary-30' | 'dviaprimary-40' | 'dviaprimary-50' | 'dviaprimary-60' | 'dviaprimary-70' | 'dviaprimary-80' | 'dviaprimary-87' | 'dviaprimary-90' | 'dviaprimary-92' | 'dviaprimary-94' | 'dviaprimary-95' | 'dviaprimary-96' | 'dviaprimary-98' | 'dviaprimary-99' | 'dviaprimary-100' | 'dviasecondary-10' | 'dviasecondary-20' | 'dviasecondary-30' | 'dviasecondary-40' | 'dviasecondary-50' | 'dviasecondary-60' | 'dviasecondary-70' | 'dviasecondary-80' | 'dviasecondary-87' | 'dviasecondary-90' | 'dviasecondary-92' | 'dviasecondary-94' | 'dviasecondary-95' | 'dviasecondary-96' | 'dviasecondary-98' | 'dviasecondary-99' | 'dviasecondary-100' | 'dvianeutral-10' | 'dvianeutral-20' | 'dvianeutral-30' | 'dvianeutral-40' | 'dvianeutral-50' | 'dvianeutral-60' | 'dvianeutral-70' | 'dvianeutral-80' | 'dvianeutral-87' | 'dvianeutral-90' | 'dvianeutral-92' | 'dvianeutral-94' | 'dvianeutral-95' | 'dvianeutral-96' | 'dvianeutral-98' | 'dvianeutral-99' | 'dvianeutral-100' | 'dvianeutralvariant-10' | 'dvianeutralvariant-20' | 'dvianeutralvariant-30' | 'dvianeutralvariant-40' | 'dvianeutralvariant-50' | 'dvianeutralvariant-60' | 'dvianeutralvariant-70' | 'dvianeutralvariant-80' | 'dvianeutralvariant-87' | 'dvianeutralvariant-90' | 'dvianeutralvariant-92' | 'dvianeutralvariant-94' | 'dvianeutralvariant-95' | 'dvianeutralvariant-96' | 'dvianeutralvariant-98' | 'dvianeutralvariant-99' | 'dvianeutralvariant-100';
  align?: 'left' | 'center' | 'right' | 'justify';
  className?: string;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

const variantClasses = {
  'display-large': 'text-display-large',
  'display-medium': 'text-display-medium',
  'display-small': 'text-display-small',
  'headline-large': 'text-headline-large',
  'headline-medium': 'text-headline-medium',
  'headline-small': 'text-headline-small',
  'title-large': 'text-title-large',
  'title-medium': 'text-title-medium',
  'title-small': 'text-title-small',
  'label-large': 'text-label-large',
  'label-medium': 'text-label-medium',
  'label-small': 'text-label-small',
  'body-large': 'text-body-large',
  'body-medium': 'text-body-medium',
  'body-small': 'text-body-small',
};

const weightClasses = {
  '400': 'font-normal',
  '500': 'font-medium',
  '600': 'font-semibold',
  '700': 'font-bold',
};

const colorClasses = {
  'dviaprimary-10': 'text-dviaprimary-10',
  'dviaprimary-20': 'text-dviaprimary-20',
  'dviaprimary-30': 'text-dviaprimary-30',
  'dviaprimary-40': 'text-dviaprimary-40',
  'dviaprimary-50': 'text-dviaprimary-50',
  'dviaprimary-60': 'text-dviaprimary-60',
  'dviaprimary-70': 'text-dviaprimary-70',
  'dviaprimary-80': 'text-dviaprimary-80',
  'dviaprimary-87': 'text-dviaprimary-87',
  'dviaprimary-90': 'text-dviaprimary-90',
  'dviaprimary-92': 'text-dviaprimary-92',
  'dviaprimary-94': 'text-dviaprimary-94',
  'dviaprimary-95': 'text-dviaprimary-95',
  'dviaprimary-96': 'text-dviaprimary-96',
  'dviaprimary-98': 'text-dviaprimary-98',
  'dviaprimary-99': 'text-dviaprimary-99',
  'dviaprimary-100': 'text-dviaprimary-100',
  'dviasecondary-10': 'text-dviasecondary-10',
  'dviasecondary-20': 'text-dviasecondary-20',
  'dviasecondary-30': 'text-dviasecondary-30',
  'dviasecondary-40': 'text-dviasecondary-40',
  'dviasecondary-50': 'text-dviasecondary-50',
  'dviasecondary-60': 'text-dviasecondary-60',
  'dviasecondary-70': 'text-dviasecondary-70',
  'dviasecondary-80': 'text-dviasecondary-80',
  'dviasecondary-87': 'text-dviasecondary-87',
  'dviasecondary-90': 'text-dviasecondary-90',
  'dviasecondary-92': 'text-dviasecondary-92',
  'dviasecondary-94': 'text-dviasecondary-94',
  'dviasecondary-95': 'text-dviasecondary-95',
  'dviasecondary-96': 'text-dviasecondary-96',
  'dviasecondary-98': 'text-dviasecondary-98',
  'dviasecondary-99': 'text-dviasecondary-99',
  'dviasecondary-100': 'text-dviasecondary-100',
  'dvianeutral-10': 'text-dvianeutral-10',
  'dvianeutral-20': 'text-dvianeutral-20',
  'dvianeutral-30': 'text-dvianeutral-30',
  'dvianeutral-40': 'text-dvianeutral-40',
  'dvianeutral-50': 'text-dvianeutral-50',
  'dvianeutral-60': 'text-dvianeutral-60',
  'dvianeutral-70': 'text-dvianeutral-70',
  'dvianeutral-80': 'text-dvianeutral-80',
  'dvianeutral-87': 'text-dvianeutral-87',
  'dvianeutral-90': 'text-dvianeutral-90',
  'dvianeutral-92': 'text-dvianeutral-92',
  'dvianeutral-94': 'text-dvianeutral-94',
  'dvianeutral-95': 'text-dvianeutral-95',
  'dvianeutral-96': 'text-dvianeutral-96',
  'dvianeutral-98': 'text-dvianeutral-98',
  'dvianeutral-99': 'text-dvianeutral-99',
  'dvianeutral-100': 'text-dvianeutral-100',
  'dvianeutralvariant-10': 'text-dvianeutralvariant-10',
  'dvianeutralvariant-20': 'text-dvianeutralvariant-20',
  'dvianeutralvariant-30': 'text-dvianeutralvariant-30',
  'dvianeutralvariant-40': 'text-dvianeutralvariant-40',
  'dvianeutralvariant-50': 'text-dvianeutralvariant-50',
  'dvianeutralvariant-60': 'text-dvianeutralvariant-60',
  'dvianeutralvariant-70': 'text-dvianeutralvariant-70',
  'dvianeutralvariant-80': 'text-dvianeutralvariant-80',
  'dvianeutralvariant-87': 'text-dvianeutralvariant-87',
  'dvianeutralvariant-90': 'text-dvianeutralvariant-90',
  'dvianeutralvariant-92': 'text-dvianeutralvariant-92',
  'dvianeutralvariant-94': 'text-dvianeutralvariant-94',
  'dvianeutralvariant-95': 'text-dvianeutralvariant-95',
  'dvianeutralvariant-96': 'text-dvianeutralvariant-96',
  'dvianeutralvariant-98': 'text-dvianeutralvariant-98',
  'dvianeutralvariant-99': 'text-dvianeutralvariant-99',
  'dvianeutralvariant-100': 'text-dvianeutralvariant-100',
};

const alignClasses = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
};

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body-medium',
  weight = '400',
  color = 'dvianeutral-10',
  align = 'left',
  className,
  children,
  as: Component = 'p',
  ...props
}) => {
  const variantClass = variantClasses[variant];
  const weightClass = weightClasses[weight];
  const colorClass = colorClasses[color];
  const alignClass = alignClasses[align];

  return React.createElement(
    Component,
    {
      className: cn(
        variantClass,
        weightClass,
        colorClass,
        alignClass,
        className
      ),
      ...props,
    },
    children
  );
};