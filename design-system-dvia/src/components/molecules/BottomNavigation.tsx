import React from 'react';
import { cn } from '../../utils/cn';

export interface BottomNavigationItem {
  id: string;
  label: string;
  icon: string | React.ReactNode;
  activeIcon?: string | React.ReactNode;
  href: string;
  onClick?: () => void;
}

export interface BottomNavigationProps {
  items: BottomNavigationItem[];
  activeItem?: string;
  className?: string;
  variant?: 'default' | 'dashboard';
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  items,
  activeItem,
  className,
  variant = 'default',
}) => {
  const variantClasses = {
    default: 'bg-white border-t border-dvianeutral-30',
    dashboard: 'bg-dvianeutral-96',
  };

  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 w-full px-4 py-3 z-[99999] md:hidden flex justify-center',
        variantClasses[variant],
        className
      )}
    >
      <div className="flex flex-row justify-between items-center w-full">
        {items.map((item) => {
          const isActive = activeItem === item.id;
          const iconToShow = isActive && item.activeIcon ? item.activeIcon : item.icon;

          return (
            <div
              key={item.id}
              className={cn(
                'flex flex-col justify-center items-center gap-2',
                isActive
                  ? 'leading-label-medium text-label-medium tracking-label-medium font-semibold'
                  : 'text-dvianeutralvariant-30 leading-label-medium text-label-medium tracking-label-medium'
              )}
            >
              <button
                onClick={item.onClick}
                className={cn(
                  'rounded-28px px-5 py-2 transition-all duration-200 hover:bg-dviasecondary-90 cursor-pointer',
                  isActive && 'bg-dviasecondary-90'
                )}
              >
                {typeof iconToShow === 'string' ? (
                  <img
                    src={iconToShow}
                    alt={item.label}
                    className="w-[24px] h-[24px]"
                  />
                ) : (
                  iconToShow
                )}
              </button>
              <span className="max-w-[70px] group-hover:max-w-[120px] truncate overflow-hidden whitespace-nowrap text-center transition-all duration-300 ease-in-out">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};