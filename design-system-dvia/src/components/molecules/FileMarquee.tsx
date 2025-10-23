import React from 'react';
import { cn } from '../../utils/cn';
import { FileCard } from '../atoms/FileCard';

export interface FileMarqueeProps {
  files: string[];
  direction?: 'left' | 'right';
  speed?: 'slow' | 'normal' | 'fast';
  className?: string;
  showAnimation?: boolean;
  onFileClick?: (fileName: string) => void;
}

export const FileMarquee: React.FC<FileMarqueeProps> = ({
  files,
  direction = 'left',
  speed = 'normal',
  className,
  showAnimation = true,
  onFileClick,
}) => {
  const speedClasses = {
    slow: 'animate-marquee-slow',
    normal: 'animate-marquee',
    fast: 'animate-marquee-fast',
  };

  const directionClasses = {
    left: 'animate-marquee',
    right: 'animate-marquee-reverse',
  };

  return (
    <div className={cn('relative w-full overflow-hidden', className)}>
      <div
        className={cn(
          'flex w-max space-x-4',
          showAnimation && directionClasses[direction],
          showAnimation && speedClasses[speed]
        )}
      >
        {/* Render files twice for seamless loop */}
        {[...files, ...files].map((file, index) => (
          <FileCard
            key={`${file}-${index}`}
            name={file}
            onClick={() => onFileClick?.(file)}
            className="flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};