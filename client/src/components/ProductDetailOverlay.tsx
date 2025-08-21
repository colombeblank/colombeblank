import React, { useState, useRef, useEffect } from "react";
import { X, ChevronDown } from "lucide-react";
import type { Product } from "@shared/schema";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

interface ProductDetailOverlayProps {
  product: Product | null;
  onClose: () => void;
}

interface MediaItem {
  type: 'image' | 'video';
  url: string;
}

export default function ProductDetailOverlay({ product, onClose }: ProductDetailOverlayProps) {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();
  const mediaContainerRef = useRef<HTMLDivElement>(null);

  if (!product) return null;

  // Combine all media items
  const mediaItems: MediaItem[] = [
    { type: 'image', url: product.imageUrl },
    ...(product.additionalImages?.map(url => ({ type: 'image' as const, url })) || []),
    ...(product.videos?.map(url => ({ type: 'video' as const, url })) || []),
  ];

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      toast({
        title: "Sign in required",
        description: "Please sign in to add items to your cart",
        variant: "destructive",
      });
      return;
    }

    if (product.sizes && product.sizes.length > 1 && !selectedSize) {
      toast({
        title: "Size required",
        description: "Please select a size",
        variant: "destructive",
      });
      return;
    }

    addToCart(product.id, selectedSize || product.sizes?.[0]);
  };

  const handleBuyNow = () => {
    if (!isAuthenticated) {
      toast({
        title: "Sign in required",
        description: "Please sign in to purchase items",
        variant: "destructive",
      });
      return;
    }

    if (product.sizes && product.sizes.length > 1 && !selectedSize) {
      toast({
        title: "Size required",
        description: "Please select a size",
        variant: "destructive",
      });
      return;
    }

    addToCart(product.id, selectedSize || product.sizes?.[0]);
    // In a real app, this would redirect to checkout
    toast({
      title: "Added to cart",
      description: "Item added to cart. Proceed to checkout.",
    });
  };

  return (
    <div className="fixed inset-0 z-50 product-overlay fade-in">
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-primary hover:text-text transition-colors z-20 bg-secondary/80 backdrop-blur-sm rounded-full p-2"
      >
        <X size={16} />
      </button>

      {/* Scrollable Media Container */}
      <div 
        ref={mediaContainerRef}
        className="w-full h-full overflow-y-auto scrollbar-hide"
        style={{ scrollBehavior: 'smooth' }}
      >
        {mediaItems.map((media, index) => (
          <div key={index} className="w-full h-screen flex-shrink-0 relative">
            {media.type === 'image' ? (
              <img 
                src={media.url}
                alt={`${product.name} ${index + 1}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <video 
                src={media.url}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            )}
            
            {/* Media Counter */}
            <div className="absolute top-6 left-6 bg-secondary/80 backdrop-blur-sm px-3 py-1 rounded-full">
              <span className="text-xs font-mono tracking-wider">
                {index + 1}/{mediaItems.length}
              </span>
            </div>
            
            {/* Scroll indicator */}
            {index < mediaItems.length - 1 && (
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-secondary/80 backdrop-blur-sm rounded-full p-2 animate-bounce">
                  <ChevronDown size={16} />
                </div>
              </div>
            )}
          </div>
        ))}
        
        {/* Product Details Section - Last item in scroll */}
        <div className="w-full min-h-screen bg-secondary flex items-center justify-center p-12">
          <div className="max-w-md space-y-8">
            <div className="text-center">
              <h1 className="text-lg tracking-wider mb-4 font-mono">{product.name}</h1>
              <p className="text-primary text-sm tracking-wider font-mono">€{product.price}</p>
            </div>
            
            <div>
              <h3 className="text-xs tracking-wider mb-4 text-primary font-mono text-center">DESCRIPTION</h3>
              <p className="text-xs leading-relaxed font-mono text-center">
                {product.description}
              </p>
            </div>
            
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <h3 className="text-xs tracking-wider mb-4 text-primary font-mono text-center">SIZE</h3>
                <div className="grid grid-cols-4 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`border text-xs py-2 transition-colors font-mono ${
                        selectedSize === size
                          ? "bg-primary text-secondary border-primary"
                          : "border-neutral hover:bg-primary hover:text-secondary"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <div className="space-y-3 pt-4">
              <button 
                onClick={handleAddToCart}
                className="w-full bg-primary text-secondary text-xs tracking-wider py-4 hover:bg-text transition-colors font-mono"
              >
                ADD TO CART
              </button>
              <button 
                onClick={handleBuyNow}
                className="w-full border border-primary text-primary text-xs tracking-wider py-4 hover:bg-primary hover:text-secondary transition-colors font-mono"
              >
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
