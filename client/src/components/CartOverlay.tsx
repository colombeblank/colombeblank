import React from "react";
import { X, Minus, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface CartOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartOverlay({ isOpen, onClose }: CartOverlayProps) {
  const { cartItems, cartTotal, updateCartItem, removeCartItem, createOrder } = useCart();

  if (!isOpen) return null;

  const handleQuantityChange = (id: string, currentQuantity: number | null, change: number) => {
    const newQuantity = (currentQuantity || 0) + change;
    if (newQuantity <= 0) {
      removeCartItem(id);
    } else {
      updateCartItem(id, newQuantity);
    }
  };

  const handleCheckout = () => {
    createOrder();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 product-overlay fade-in">
      <div className="flex h-full">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-primary hover:text-text transition-colors z-10"
        >
          <X size={20} />
        </button>
        
        {/* Cart Content */}
        <div className="flex-1 flex items-center justify-center p-12">
          <div className="max-w-2xl w-full">
            <h2 className="text-sm tracking-wider mb-8 text-primary font-mono">SHOPPING CART</h2>
            
            <div className="space-y-6">
              {cartItems.length === 0 ? (
                <div className="text-xs text-text font-mono">Your cart is empty</div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 border-b border-neutral pb-4">
                    <img 
                      src={item.product.imageUrl}
                      alt={item.product.name}
                      className="w-20 h-24 object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-xs font-mono mb-1">{item.product.name}</h3>
                      <p className="text-xs text-text font-mono mb-2">€{item.product.price}</p>
                      {item.size && (
                        <p className="text-xs text-text font-mono">Size: {item.size}</p>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity, -1)}
                        className="w-6 h-6 border border-neutral flex items-center justify-center hover:bg-primary hover:text-secondary transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-xs font-mono w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity, 1)}
                        className="w-6 h-6 border border-neutral flex items-center justify-center hover:bg-primary hover:text-secondary transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeCartItem(item.id)}
                      className="text-xs text-text hover:text-primary transition-colors font-mono"
                    >
                      REMOVE
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
        
        {/* Cart Summary */}
        <div className="w-80 bg-secondary p-12 flex flex-col justify-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-xs tracking-wider mb-4 text-primary font-mono">SUMMARY</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span>SUBTOTAL</span>
                  <span>€{cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xs font-mono">
                  <span>SHIPPING</span>
                  <span>FREE</span>
                </div>
                <div className="border-t border-neutral pt-2 mt-4">
                  <div className="flex justify-between text-xs font-bold font-mono">
                    <span>TOTAL</span>
                    <span>€{cartTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {cartItems.length > 0 && (
              <button 
                onClick={handleCheckout}
                className="w-full bg-primary text-secondary text-xs tracking-wider py-4 hover:bg-text transition-colors font-mono"
              >
                CHECKOUT
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
