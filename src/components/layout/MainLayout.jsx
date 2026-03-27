import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import MobileBottomNav from './MobileBottomNav';
import { useSidebar } from '../../hooks/useSidebar';

export default function MainLayout({ children }) {
  const sidebar = useSidebar();

  return (
    <div className="flex h-screen overflow-hidden bg-[var(--color-bg)]">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar isCollapsed={sidebar.isCollapsed} onToggleCollapse={sidebar.toggleCollapse} />
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebar.isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={sidebar.close} />
          <div className="absolute left-0 top-0 bottom-0 w-72">
            <Sidebar isCollapsed={false} onToggleCollapse={() => {}} />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header onMenuClick={sidebar.toggle} />
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-24 md:pb-6">
            {children}
          </div>
        </main>
      </div>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden">
        <MobileBottomNav />
      </div>
    </div>
  );
}