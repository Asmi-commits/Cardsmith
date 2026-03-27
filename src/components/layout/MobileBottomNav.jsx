import React from 'react';
import { NavLink } from 'react-router-dom';
import { PlusCircle, Clock, Search, User, Settings } from 'lucide-react';
import { cn } from '../../utils/helpers';

const navItems = [
  { label: 'New', path: '/', icon: PlusCircle },
  { label: 'History', path: '/history', icon: Clock },
  { label: 'Search', path: '/search', icon: Search },
  { label: 'Profile', path: '/profile', icon: User },
  { label: 'Settings', path: '/settings', icon: Settings },
];

export default function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 bg-white/90 dark:bg-surface-900/90 backdrop-blur-lg border-t border-surface-200 dark:border-surface-700 safe-area-pb">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                'flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl transition-colors min-w-[52px]',
                isActive
                  ? 'text-brand-500'
                  : 'text-surface-400 dark:text-surface-500'
              )
            }
          >
            <item.icon size={20} />
            <span className="text-[10px] font-medium">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}