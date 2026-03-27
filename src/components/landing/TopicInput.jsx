import React from 'react';
import { BookOpen } from 'lucide-react';
import { SAMPLE_TOPICS } from '../../utils/constants';

export default function TopicInput({ value, onChange }) {
  return (
    <div className="space-y-3">
      <div className="relative">
        <BookOpen
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-surface-400"
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="What would you like to study?"
          className="w-full pl-12 pr-4 py-4 rounded-2xl text-sm bg-surface-50 dark:bg-surface-800 border border-surface-200 dark:border-surface-700 text-surface-900 dark:text-surface-100 placeholder:text-surface-400 dark:placeholder:text-surface-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all duration-200"
        />
      </div>

      {/* Suggestion chips */}
      <div className="flex flex-wrap gap-2">
        {SAMPLE_TOPICS.slice(0, 4).map((topic) => (
          <button
            key={topic}
            onClick={() => onChange(topic)}
            className="px-3 py-1.5 text-xs font-medium rounded-xl bg-surface-100 dark:bg-surface-800 text-surface-500 dark:text-surface-400 hover:bg-surface-200 dark:hover:bg-surface-700 hover:text-surface-700 dark:hover:text-surface-200 border border-surface-200 dark:border-surface-700 transition-all duration-200"
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
}