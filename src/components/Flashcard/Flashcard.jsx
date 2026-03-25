import React, { useState } from 'react';
import { cn } from '../../utils/helpers';

export default function Flashcard({ front, back, index }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="perspective-1000 cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div
        className={cn(
          'relative w-full min-h-[220px] transition-transform duration-500 ease-out',
          isFlipped && 'rotate-y-180'
        )}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div
          className={cn(
            'absolute inset-0 backface-hidden rounded-3xl p-6 flex flex-col justify-center',
            'bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700',
            'shadow-soft group-hover:shadow-lifted transition-shadow duration-300'
          )}
        >
          <div className="absolute top-4 left-5 text-[10px] font-mono font-medium text-surface-300 dark:text-surface-600 uppercase tracking-wider">
            Question
          </div>
          <p className="text-base font-medium text-surface-800 dark:text-surface-100 text-center leading-relaxed">
            {front}
          </p>
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <span className="text-[10px] text-surface-300 dark:text-surface-600">
              tap to reveal
            </span>
          </div>
        </div>

        {/* Back */}
        <div
          className={cn(
            'absolute inset-0 backface-hidden rotate-y-180 rounded-3xl p-6 flex flex-col justify-center',
            'bg-[var(--color-card-flip)] border border-brand-100 dark:border-brand-500/20',
            'shadow-soft'
          )}
        >
          <div className="absolute top-4 left-5 text-[10px] font-mono font-medium text-brand-400 dark:text-brand-500 uppercase tracking-wider">
            Answer
          </div>
          <p className="text-sm text-surface-700 dark:text-surface-200 text-center leading-relaxed">
            {back}
          </p>
        </div>
      </div>
    </div>
  );
}