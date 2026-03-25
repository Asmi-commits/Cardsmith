import React from 'react';

export default function FlashcardProgress({ current, total, topic }) {
  const percentage = total > 0 ? ((current + 1) / total) * 100 : 0;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-xl text-surface-900 dark:text-surface-100">
          {topic}
        </h2>
        <span className="text-sm font-mono text-surface-400 dark:text-surface-500">
          {current + 1} / {total}
        </span>
      </div>
      <div className="h-1 rounded-full bg-surface-100 dark:bg-surface-800 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-400 transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}