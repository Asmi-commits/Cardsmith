import React from 'react';
import { cn } from '../../utils/helpers';

export default function Input({
  label,
  error,
  className,
  containerClassName,
  ...props
}) {
  return (
    <div className={cn('flex flex-col gap-1.5', containerClassName)}>
      {label && (
        <label className="text-sm font-medium text-surface-600 dark:text-surface-400">
          {label}
        </label>
      )}
      <input
        className={cn(
          'w-full px-4 py-3 rounded-2xl text-sm',
          'bg-surface-50 dark:bg-surface-800',
          'border border-surface-200 dark:border-surface-700',
          'text-surface-900 dark:text-surface-100',
          'placeholder:text-surface-400 dark:placeholder:text-surface-500',
          'focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500',
          'transition-all duration-200',
          error && 'border-red-400 focus:ring-red-500/30 focus:border-red-500',
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-red-500 mt-0.5">{error}</p>}
    </div>
  );
}