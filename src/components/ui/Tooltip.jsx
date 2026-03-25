import React, { useState } from 'react';
import { cn } from '../../utils/helpers';

export default function Tooltip({ children, content, position = 'top' }) {
  const [visible, setVisible] = useState(false);

  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && content && (
        <div
          className={cn(
            'absolute z-50 px-3 py-1.5 text-xs font-medium whitespace-nowrap',
            'bg-surface-900 dark:bg-surface-100 text-white dark:text-surface-900',
            'rounded-xl shadow-lg pointer-events-none',
            'animate-fade-in',
            positionClasses[position]
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
}