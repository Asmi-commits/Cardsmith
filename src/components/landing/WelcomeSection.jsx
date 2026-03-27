import React from 'react';
import { Sparkles } from 'lucide-react';

export default function WelcomeSection() {
  return (
    <div className="text-center mb-8">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-medium mb-4">
        <Sparkles size={14} />
        AI-Powered Flashcards
      </div>
      <h1 className="font-display text-4xl sm:text-5xl text-surface-900 dark:text-surface-50 mb-3 tracking-tight">
        Learn anything,<br />
        <span className="italic text-brand-500">faster.</span>
      </h1>
      <p className="text-surface-500 dark:text-surface-400 max-w-md mx-auto leading-relaxed">
        Enter a topic or upload your study material, and CardSmith will craft 
        beautiful flashcards tailored for effective learning.
      </p>
    </div>
  );
}