import React, { useState } from "react";
import TopNavigation from "@/components/TopNavigation";
import LeftSidebar from "@/components/LeftSidebar";
import RightTextMenu from "@/components/RightTextMenu";
import ProductGrid from "@/components/ProductGrid";
import ProductDetailOverlay from "@/components/ProductDetailOverlay";
import CartOverlay from "@/components/CartOverlay";
import { CartProvider } from "@/context/CartContext";
import { useAuth } from "@/hooks/useAuth";
import type { Product } from "@shared/schema";

export default function Home() {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const [rightMenuOpen, setRightMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");

  const handleMenuToggle = () => {
    setLeftSidebarOpen(!leftSidebarOpen);
    setRightMenuOpen(false);
  };

  const handleTextMenuToggle = () => {
    setRightMenuOpen(!rightMenuOpen);
    setLeftSidebarOpen(false);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseProduct = () => {
    setSelectedProduct(null);
  };

  const handleCartToggle = () => {
    setCartOpen(!cartOpen);
    setRightMenuOpen(false);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setSelectedType(""); // Reset type filter when changing category
    setLeftSidebarOpen(false);
  };

  const handleFilterSelect = (type: string) => {
    setSelectedType(type);
    setLeftSidebarOpen(false);
  };

  const handleSortSelect = (sort: string) => {
    // TODO: Implement sorting logic
    console.log("Sort by:", sort);
    setLeftSidebarOpen(false);
  };

  // Close menus when clicking outside
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setLeftSidebarOpen(false);
      setRightMenuOpen(false);
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-secondary text-text font-mono">
        <TopNavigation 
          onMenuToggle={handleMenuToggle}
          onTextMenuToggle={handleTextMenuToggle}
        />
        
        <LeftSidebar 
          isOpen={leftSidebarOpen}
          onCategorySelect={handleCategorySelect}
          onFilterSelect={handleFilterSelect}
          onSortSelect={handleSortSelect}
        />
        
        <RightTextMenu 
          isOpen={rightMenuOpen}
          onCartToggle={handleCartToggle}
        />
        
        <ProductGrid 
          category={selectedCategory}
          type={selectedType}
          onProductClick={handleProductClick}
        />
        
        <ProductDetailOverlay 
          product={selectedProduct}
          onClose={handleCloseProduct}
        />
        
        <CartOverlay 
          isOpen={cartOpen}
          onClose={() => setCartOpen(false)}
        />
        
        {/* Overlay for closing menus */}
        {(leftSidebarOpen || rightMenuOpen) && (
          <div 
            className="fixed inset-0 z-30 bg-black bg-opacity-20"
            onClick={handleOverlayClick}
          />
        )}
      </div>
    </CartProvider>
  );
}
