import React from 'react';
import { cn } from '../../utils/helpers';
import { CARD_COUNTS } from '../../utils/constants';

export default function FlashcardCountSelector({ value, onChange }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-surface-600 dark:text-surface-400">
        Number of cards
      </label>
      <div className="flex gap-2">
        {CARD_COUNTS.map((count) => (
          <button
            key={count}
            onClick={() => onChange(count)}
            className={cn(
              'flex-1 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 border',
              value === count
                ? 'bg-brand-500 text-white border-brand-500 shadow-md'
                : 'bg-surface-50 dark:bg-surface-800 text-surface-500 dark:text-surface-400 border-surface-200 dark:border-surface-700 hover:border-surface-300 dark:hover:border-surface-600'
            )}
          >
            {count}
          </button>
        ))}
      </div>
    </div>
  );
}