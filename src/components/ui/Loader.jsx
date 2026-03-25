import React from 'react';
import { cn } from '../../utils/helpers';

export default function Loader({ size = 'md', text, className }) {
  const sizes = {
    sm: 'w-5 h-5',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className={cn('flex flex-col items-center gap-3', className)}>
      <div className="relative">
        <div
          className={cn(
            sizes[size],
            'rounded-full border-2 border-surface-200 dark:border-surface-700'
          )}
        />
        <div
          className={cn(
            sizes[size],
            'absolute inset-0 rounded-full border-2 border-transparent border-t-brand-500 animate-spin'
          )}
        />
      </div>
      {text && (
        <p className="text-sm text-surface-500 dark:text-surface-400 animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
}