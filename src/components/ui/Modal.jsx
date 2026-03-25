import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '../../utils/helpers';

export default function Modal({ isOpen, onClose, title, children, className }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className={cn(
          'relative w-full max-w-lg bg-white dark:bg-surface-900 rounded-3xl shadow-lifted',
          'border border-surface-200 dark:border-surface-700',
          'animate-fade-in',
          className
        )}
      >
        <div className="flex items-center justify-between p-6 pb-0">
          {title && (
            <h2 className="text-lg font-display text-surface-900 dark:text-surface-100">
              {title}
            </h2>
          )}
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-surface-400 hover:text-surface-600 hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors"
          >
            <X size={18} />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}