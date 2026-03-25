import React from 'react';
import { cn } from '../../utils/helpers';

export default function Toggle({ checked, onChange, label, description }) {
  return (
    <label className="flex items-center justify-between gap-4 cursor-pointer group">
      <div className="flex-1">
        {label && (
          <span className="text-sm font-medium text-surface-800 dark:text-surface-200">
            {label}
          </span>
        )}
        {description && (
          <p className="text-xs text-surface-500 dark:text-surface-400 mt-0.5">
            {description}
          </p>
        )}
      </div>
      <div
        className={cn(
          'relative w-11 h-6 rounded-full transition-colors duration-200 ease-out',
          checked ? 'bg-brand-500' : 'bg-surface-300 dark:bg-surface-600'
        )}
        onClick={() => onChange(!checked)}
      >
        <div
          className={cn(
            'absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200 ease-out',
            checked && 'translate-x-5'
          )}
        />
      </div>
    </label>
  );
}