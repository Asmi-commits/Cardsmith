import React from 'react';
import { Menu, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function Header({ onMenuClick }) {
  const { isDark, toggle } = useTheme();

  return (
    <header className="h-14 flex items-center justify-between px-4 sm:px-6 border-b border-surface-100 dark:border-surface-800 bg-white/80 dark:bg-surface-900/80 backdrop-blur-md">
      {/* Mobile menu button */}
      <button
        onClick={onMenuClick}
        className="md:hidden p-2 -ml-2 rounded-xl text-surface-500 hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors"
      >
        <Menu size={20} />
      </button>

      {/* Spacer for desktop */}
      <div className="hidden md:block" />

      {/* Right actions */}
      <div className="flex items-center gap-2">
        <button
          onClick={toggle}
          className="p-2 rounded-xl text-surface-500 hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </header>
  );
}