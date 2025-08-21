import React from "react";

interface TopNavigationProps {
  onMenuToggle: () => void;
  onTextMenuToggle: () => void;
}

export default function TopNavigation({ onMenuToggle, onTextMenuToggle }: TopNavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary border-b border-neutral">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Menu Button */}
        <button 
          onClick={onMenuToggle}
          className="text-primary hover:text-text transition-colors"
        >
          <span className="block w-5 h-0.5 bg-current mb-1"></span>
          <span className="block w-5 h-0.5 bg-current mb-1"></span>
          <span className="block w-5 h-0.5 bg-current"></span>
        </button>
        
        {/* Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="h-8 w-32 flex items-center justify-center text-xs font-mono tracking-wider text-primary font-medium">
            COLOMBE BLANK
          </div>
        </div>
        
        {/* Text Menu */}
        <button 
          onClick={onTextMenuToggle}
          className="text-primary hover:text-text transition-colors text-xs tracking-wider font-mono"
        >
          MENU
        </button>
      </div>
    </nav>
  );
}
