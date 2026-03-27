import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { PlusCircle, Clock, Search, User, Settings, PanelLeftClose, PanelLeft, Sparkles } from 'lucide-react';
import { cn } from '../../utils/helpers';
import Tooltip from '../ui/Tooltip';

const navItems = [
  { label: 'New Cards', path: '/', icon: PlusCircle },
  { label: 'History', path: '/history', icon: Clock },
  { label: 'Search', path: '/search', icon: Search },
  { label: 'Profile', path: '/profile', icon: User },
  { label: 'Settings', path: '/settings', icon: Settings },
];

export default function Sidebar({ isCollapsed, onToggleCollapse }) {
  const navigate = useNavigate();

  return (
    <aside
      className={cn(
        'h-screen flex flex-col bg-white dark:bg-surface-900',
        'border-r border-surface-200 dark:border-surface-700',
        'transition-all duration-300 ease-out',
        isCollapsed ? 'w-[72px]' : 'w-64'
      )}
    >
      {/* Logo */}
      <div
        className={cn(
          'flex items-center gap-3 px-5 h-16 border-b border-surface-100 dark:border-surface-800 cursor-pointer',
          isCollapsed && 'justify-center px-0'
        )}
        onClick={() => navigate('/')}
      >
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-500 to-brand-400 flex items-center justify-center flex-shrink-0">
          <Sparkles size={16} className="text-white" />
        </div>
        {!isCollapsed && (
          <span className="font-display text-xl text-surface-900 dark:text-surface-100 tracking-tight">
            CardSmith
          </span>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const link = (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-2xl text-sm font-medium transition-all duration-200',
                  isActive
                    ? 'bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400'
                    : 'text-surface-500 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800 hover:text-surface-700 dark:hover:text-surface-200',
                  isCollapsed && 'justify-center px-0'
                )
              }
            >
              <item.icon size={20} className="flex-shrink-0" />
              {!isCollapsed && <span>{item.label}</span>}
            </NavLink>
          );

          if (isCollapsed) {
            return (
              <Tooltip key={item.path} content={item.label} position="right">
                {link}
              </Tooltip>
            );
          }
          return link;
        })}
      </nav>

      {/* Collapse Toggle */}
      <div className="p-3 border-t border-surface-100 dark:border-surface-800">
        <button
          onClick={onToggleCollapse}
          className={cn(
            'flex items-center gap-3 w-full px-3 py-2.5 rounded-2xl text-sm',
            'text-surface-400 hover:text-surface-600 dark:hover:text-surface-300',
            'hover:bg-surface-100 dark:hover:bg-surface-800 transition-all duration-200',
            isCollapsed && 'justify-center px-0'
          )}
        >
          {isCollapsed ? <PanelLeft size={20} /> : <PanelLeftClose size={20} />}
          {!isCollapsed && <span>Collapse</span>}
        </button>
      </div>
    </aside>
  );
}