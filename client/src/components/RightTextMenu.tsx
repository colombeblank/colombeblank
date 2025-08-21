import React from "react";
import { Link } from "wouter";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/context/CartContext";

interface RightTextMenuProps {
  isOpen: boolean;
  onCartToggle: () => void;
}

export default function RightTextMenu({ isOpen, onCartToggle }: RightTextMenuProps) {
  const { isAuthenticated } = useAuth();
  const { cartCount } = useCart();

  return (
    <aside 
      className={`fixed right-0 top-16 bottom-0 w-64 bg-accent menu-overlay z-40 text-sharp sidebar-right ${
        isOpen ? "open" : ""
      }`}
    >
      <div className="p-6 space-y-8">
        <div>
          <h3 className="text-xs tracking-wider mb-4 text-primary font-mono">ACCOUNT</h3>
          <nav className="space-y-3">
            {!isAuthenticated ? (
              <>
                <a 
                  href="/api/login" 
                  className="block text-xs hover:text-primary transition-colors font-mono"
                >
                  SIGN IN
                </a>
                <p className="text-xs text-text font-mono opacity-75">
                  Sign in to save items to cart
                </p>
              </>
            ) : (
              <>
                <a 
                  href="/api/logout" 
                  className="block text-xs hover:text-primary transition-colors font-mono"
                >
                  SIGN OUT
                </a>
              </>
            )}
          </nav>
        </div>
        
        <div>
          <h3 className="text-xs tracking-wider mb-4 text-primary font-mono">SUPPORT</h3>
          <nav className="space-y-3">
            <Link to="/faq" className="block text-xs hover:text-primary transition-colors font-mono">
              FAQ
            </Link>
            <Link to="/support" className="block text-xs hover:text-primary transition-colors font-mono">
              SUPPORT
            </Link>
            <Link to="/contact" className="block text-xs hover:text-primary transition-colors font-mono">
              CONTACT
            </Link>
            <Link to="/shipping" className="block text-xs hover:text-primary transition-colors font-mono">
              SHIPPING
            </Link>
            <Link to="/returns" className="block text-xs hover:text-primary transition-colors font-mono">
              RETURNS
            </Link>
            <Link to="/size-guide" className="block text-xs hover:text-primary transition-colors font-mono">
              SIZE GUIDE
            </Link>
          </nav>
        </div>
        
        <div>
          <h3 className="text-xs tracking-wider mb-4 text-primary font-mono">EXPLORE</h3>
          <nav className="space-y-3">
            <Link to="/about" className="block text-xs hover:text-primary transition-colors font-mono">
              ABOUT
            </Link>
          </nav>
        </div>
        
        <div>
          <button 
            onClick={() => {
              if (!isAuthenticated) {
                window.location.href = "/api/login";
              } else {
                onCartToggle();
              }
            }}
            className="text-xs tracking-wider text-primary hover:text-text transition-colors font-mono"
          >
            CART {isAuthenticated ? `(${cartCount})` : '(SIGN IN)'}
          </button>
        </div>
      </div>
    </aside>
  );
}
