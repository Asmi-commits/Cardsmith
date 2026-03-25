import React from 'react';
import { cn } from '../../utils/helpers';

export default function Card({ children, className, hover = false, ...props }) {
  return (
    <div
      className={cn(
        'rounded-3xl border border-surface-200 dark:border-surface-700',
        'bg-white dark:bg-surface-900',
        hover && 'hover:shadow-lifted hover:-translate-y-0.5 transition-all duration-300 cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}