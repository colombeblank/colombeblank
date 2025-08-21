import React from "react";

interface LeftSidebarProps {
  isOpen: boolean;
  onCategorySelect: (category: string) => void;
  onFilterSelect: (type: string) => void;
  onSortSelect: (sort: string) => void;
}

export default function LeftSidebar({ 
  isOpen, 
  onCategorySelect, 
  onFilterSelect, 
  onSortSelect 
}: LeftSidebarProps) {
  return (
    <aside 
      className={`fixed left-0 top-16 bottom-0 w-64 bg-accent menu-overlay z-40 text-sharp sidebar-left ${
        isOpen ? "open" : ""
      }`}
    >
      <div className="p-6 space-y-8">
        <div>
          <h3 className="text-xs tracking-wider mb-4 text-primary font-mono">SHOP</h3>
          <nav className="space-y-3">
            <button 
              onClick={() => onCategorySelect("women")}
              className="block text-xs hover:text-primary transition-colors font-mono"
            >
              WOMEN
            </button>
            <button 
              onClick={() => onCategorySelect("men")}
              className="block text-xs hover:text-primary transition-colors font-mono"
            >
              MEN
            </button>
            <button 
              onClick={() => onCategorySelect("")}
              className="block text-xs hover:text-primary transition-colors font-mono"
            >
              ALL
            </button>
          </nav>
        </div>
        
        <div>
          <h3 className="text-xs tracking-wider mb-4 text-primary font-mono">FILTER</h3>
          <div className="space-y-3">
            <button 
              onClick={() => onFilterSelect("clothing")}
              className="block text-xs hover:text-primary transition-colors text-left font-mono"
            >
              CLOTHING
            </button>
            <button 
              onClick={() => onFilterSelect("accessories")}
              className="block text-xs hover:text-primary transition-colors text-left font-mono"
            >
              ACCESSORIES
            </button>
            <button 
              onClick={() => onFilterSelect("shoes")}
              className="block text-xs hover:text-primary transition-colors text-left font-mono"
            >
              SHOES
            </button>
            <button 
              onClick={() => onFilterSelect("")}
              className="block text-xs hover:text-primary transition-colors text-left font-mono"
            >
              ALL
            </button>
          </div>
        </div>
        
        <div>
          <h3 className="text-xs tracking-wider mb-4 text-primary font-mono">SORT</h3>
          <div className="space-y-3">
            <button 
              onClick={() => onSortSelect("newest")}
              className="block text-xs hover:text-primary transition-colors text-left font-mono"
            >
              NEWEST
            </button>
            <button 
              onClick={() => onSortSelect("price_low")}
              className="block text-xs hover:text-primary transition-colors text-left font-mono"
            >
              PRICE LOW
            </button>
            <button 
              onClick={() => onSortSelect("price_high")}
              className="block text-xs hover:text-primary transition-colors text-left font-mono"
            >
              PRICE HIGH
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
