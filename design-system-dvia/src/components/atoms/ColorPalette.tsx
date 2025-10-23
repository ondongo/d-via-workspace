import React from 'react';
import { cn } from '../../utils/cn';

export interface ColorPaletteProps {
  className?: string;
}

const colorGroups = [
  {
    name: 'Primaire',
    colors: [
      { name: '10', value: 'var(--color-dviaprimary-10)', textColor: 'text-black' },
      { name: '20', value: 'var(--color-dviaprimary-20)', textColor: 'text-black' },
      { name: '30', value: 'var(--color-dviaprimary-30)', textColor: 'text-black' },
      { name: '40', value: 'var(--color-dviaprimary-40)', textColor: 'text-white' },
      { name: '50', value: 'var(--color-dviaprimary-50)', textColor: 'text-white' },
      { name: '60', value: 'var(--color-dviaprimary-60)', textColor: 'text-white' },
      { name: '70', value: 'var(--color-dviaprimary-70)', textColor: 'text-white' },
      { name: '80', value: 'var(--color-dviaprimary-80)', textColor: 'text-white' },
      { name: '87', value: 'var(--color-dviaprimary-87)', textColor: 'text-white' },
      { name: '90', value: 'var(--color-dviaprimary-90)', textColor: 'text-white' },
      { name: '92', value: 'var(--color-dviaprimary-92)', textColor: 'text-white' },
      { name: '94', value: 'var(--color-dviaprimary-94)', textColor: 'text-white' },
      { name: '95', value: 'var(--color-dviaprimary-95)', textColor: 'text-white' },
      { name: '96', value: 'var(--color-dviaprimary-96)', textColor: 'text-white' },
      { name: '98', value: 'var(--color-dviaprimary-98)', textColor: 'text-white' },
      { name: '99', value: 'var(--color-dviaprimary-99)', textColor: 'text-white' },
      { name: '100', value: 'var(--color-dviaprimary-100)', textColor: 'text-white' },
    ],
    prefix: 'dviaprimary'
  },
  {
    name: 'Secondaire',
    colors: [
      { name: '10', value: 'var(--color-dviasecondary-10)', textColor: 'text-black' },
      { name: '20', value: 'var(--color-dviasecondary-20)', textColor: 'text-black' },
      { name: '30', value: 'var(--color-dviasecondary-30)', textColor: 'text-black' },
      { name: '40', value: 'var(--color-dviasecondary-40)', textColor: 'text-white' },
      { name: '50', value: 'var(--color-dviasecondary-50)', textColor: 'text-white' },
      { name: '60', value: 'var(--color-dviasecondary-60)', textColor: 'text-white' },
      { name: '70', value: 'var(--color-dviasecondary-70)', textColor: 'text-white' },
      { name: '80', value: 'var(--color-dviasecondary-80)', textColor: 'text-white' },
      { name: '87', value: 'var(--color-dviasecondary-87)', textColor: 'text-white' },
      { name: '90', value: 'var(--color-dviasecondary-90)', textColor: 'text-white' },
      { name: '92', value: 'var(--color-dviasecondary-92)', textColor: 'text-white' },
      { name: '94', value: 'var(--color-dviasecondary-94)', textColor: 'text-white' },
      { name: '95', value: 'var(--color-dviasecondary-95)', textColor: 'text-white' },
      { name: '96', value: 'var(--color-dviasecondary-96)', textColor: 'text-white' },
      { name: '98', value: 'var(--color-dviasecondary-98)', textColor: 'text-white' },
      { name: '99', value: 'var(--color-dviasecondary-99)', textColor: 'text-white' },
      { name: '100', value: 'var(--color-dviasecondary-100)', textColor: 'text-white' },
    ],
    prefix: 'dviasecondary'
  },
  {
    name: 'Neutre',
    colors: [
      { name: '10', value: 'var(--color-dvianeutral-10)', textColor: 'text-white' },
      { name: '20', value: 'var(--color-dvianeutral-20)', textColor: 'text-white' },
      { name: '30', value: 'var(--color-dvianeutral-30)', textColor: 'text-white' },
      { name: '40', value: 'var(--color-dvianeutral-40)', textColor: 'text-white' },
      { name: '50', value: 'var(--color-dvianeutral-50)', textColor: 'text-white' },
      { name: '60', value: 'var(--color-dvianeutral-60)', textColor: 'text-white' },
      { name: '70', value: 'var(--color-dvianeutral-70)', textColor: 'text-white' },
      { name: '80', value: 'var(--color-dvianeutral-80)', textColor: 'text-white' },
      { name: '87', value: 'var(--color-dvianeutral-87)', textColor: 'text-white' },
      { name: '90', value: 'var(--color-dvianeutral-90)', textColor: 'text-white' },
      { name: '92', value: 'var(--color-dvianeutral-92)', textColor: 'text-white' },
      { name: '94', value: 'var(--color-dvianeutral-94)', textColor: 'text-white' },
      { name: '95', value: 'var(--color-dvianeutral-95)', textColor: 'text-white' },
      { name: '96', value: 'var(--color-dvianeutral-96)', textColor: 'text-white' },
      { name: '98', value: 'var(--color-dvianeutral-98)', textColor: 'text-white' },
      { name: '99', value: 'var(--color-dvianeutral-99)', textColor: 'text-white' },
      { name: '100', value: 'var(--color-dvianeutral-100)', textColor: 'text-white' },
    ],
    prefix: 'dvianeutral'
  },
  {
    name: 'Neutre Variant',
    colors: [
      { name: '10', value: 'var(--color-dvianeutralvariant-10)', textColor: 'text-white' },
      { name: '20', value: 'var(--color-dvianeutralvariant-20)', textColor: 'text-white' },
      { name: '30', value: 'var(--color-dvianeutralvariant-30)', textColor: 'text-white' },
      { name: '40', value: 'var(--color-dvianeutralvariant-40)', textColor: 'text-white' },
      { name: '50', value: 'var(--color-dvianeutralvariant-50)', textColor: 'text-white' },
      { name: '60', value: 'var(--color-dvianeutralvariant-60)', textColor: 'text-white' },
      { name: '70', value: 'var(--color-dvianeutralvariant-70)', textColor: 'text-white' },
      { name: '80', value: 'var(--color-dvianeutralvariant-80)', textColor: 'text-white' },
      { name: '87', value: 'var(--color-dvianeutralvariant-87)', textColor: 'text-white' },
      { name: '90', value: 'var(--color-dvianeutralvariant-90)', textColor: 'text-white' },
      { name: '92', value: 'var(--color-dvianeutralvariant-92)', textColor: 'text-white' },
      { name: '94', value: 'var(--color-dvianeutralvariant-94)', textColor: 'text-white' },
      { name: '95', value: 'var(--color-dvianeutralvariant-95)', textColor: 'text-white' },
      { name: '96', value: 'var(--color-dvianeutralvariant-96)', textColor: 'text-white' },
      { name: '98', value: 'var(--color-dvianeutralvariant-98)', textColor: 'text-white' },
      { name: '99', value: 'var(--color-dvianeutralvariant-99)', textColor: 'text-white' },
      { name: '100', value: 'var(--color-dvianeutralvariant-100)', textColor: 'text-white' },
    ],
    prefix: 'dvianeutralvariant'
  }
];

export const ColorPalette: React.FC<ColorPaletteProps> = ({ className }) => {
  return (
    <div className={cn('space-y-8', className)}>
      {colorGroups.map((group) => (
        <div key={group.name} className="space-y-4">
          <h3 className="text-lg font-semibold text-dvianeutral-80">
            {group.name}
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-9 gap-4">
            {group.colors.map((color) => (
              <div key={color.name} className="space-y-2">
                <div
                  className="w-full h-16 rounded-lg border border-dvianeutral-30 shadow-sm"
                  style={{ backgroundColor: color.value }}
                />
                <div className="text-center">
                  <div className={cn('text-sm font-medium', color.textColor)}>
                    {color.name}
                  </div>
                  <div className="text-xs text-dvianeutral-60 font-mono">
                    {color.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};