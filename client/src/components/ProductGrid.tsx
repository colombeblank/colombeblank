import React from "react";
import { useQuery } from "@tanstack/react-query";
import type { Product } from "@shared/schema";

interface ProductGridProps {
  category?: string;
  type?: string;
  onProductClick: (product: Product) => void;
}

// Mock product images - replace with actual product data
const mockProducts: Product[] = [
  {
    id: "1",
    name: "Minimalist Coat",
    description: "A carefully crafted minimalist coat featuring clean lines and premium materials.",
    price: "450.00",
    category: "women",
    type: "clothing",
    imageUrl: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
    additionalImages: ["https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800"],
    sizes: ["XS", "S", "M", "L"],
    inStock: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    name: "Structured Shirt",
    description: "White structured shirt with clean architectural lines.",
    price: "280.00",
    category: "women",
    type: "clothing",
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
    additionalImages: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800"],
    sizes: ["XS", "S", "M", "L"],
    inStock: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    name: "Luxury Handbag",
    description: "Premium leather handbag in neutral tone.",
    price: "720.00",
    category: "women",
    type: "accessories",
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
    additionalImages: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800"],
    sizes: ["ONE SIZE"],
    inStock: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    name: "Minimalist Trousers",
    description: "High-end minimalist black trousers with perfect tailoring.",
    price: "380.00",
    category: "men",
    type: "clothing",
    imageUrl: "https://images.unsplash.com/photo-1506629905607-54777dc6e61c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
    additionalImages: ["https://images.unsplash.com/photo-1506629905607-54777dc6e61c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800"],
    sizes: ["28", "30", "32", "34", "36"],
    inStock: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "5",
    name: "Cashmere Sweater",
    description: "Elegant grey cashmere sweater with luxurious feel.",
    price: "520.00",
    category: "women",
    type: "clothing",
    imageUrl: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
    additionalImages: ["https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800"],
    sizes: ["XS", "S", "M", "L"],
    inStock: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "6",
    name: "Premium Leather Shoes",
    description: "Handcrafted black leather shoes with timeless design.",
    price: "680.00",
    category: "men",
    type: "shoes",
    imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
    additionalImages: ["https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800"],
    sizes: ["39", "40", "41", "42", "43", "44"],
    inStock: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "7",
    name: "Minimalist Dress",
    description: "White minimalist dress with clean silhouette.",
    price: "420.00",
    category: "women",
    type: "clothing",
    imageUrl: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
    additionalImages: ["https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800"],
    sizes: ["XS", "S", "M", "L"],
    inStock: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "8",
    name: "Leather Jacket",
    description: "High-end leather jacket in classic black.",
    price: "850.00",
    category: "men",
    type: "clothing",
    imageUrl: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
    additionalImages: ["https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export default function ProductGrid({ category, type, onProductClick }: ProductGridProps) {
  // Query products from API
  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products", category, type],
    retry: false,
  });

  // Use API data if available, fallback to mock data for demonstration
  const displayProducts = products.length > 0 ? products : mockProducts;
  
  // Filter products based on category and type
  const filteredProducts = displayProducts.filter(product => {
    if (category && product.category !== category) return false;
    if (type && product.type !== type) return false;
    return true;
  });

  if (isLoading) {
    return (
      <main className="pt-16 min-h-screen flex items-center justify-center">
        <p className="text-text text-xs font-mono">Loading...</p>
      </main>
    );
  }

  return (
    <main className="pt-16">
      <div className="space-y-0">
        {filteredProducts.map((product) => (
          <div 
            key={product.id}
            className="product-item cursor-pointer h-screen w-full relative"
            onClick={() => onProductClick(product)}
          >
            <img 
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </div>
        ))}
        
        {filteredProducts.length === 0 && (
          <div className="h-screen flex items-center justify-center">
            <p className="text-text text-xs font-mono">No products found</p>
          </div>
        )}
      </div>
    </main>
  );
}
