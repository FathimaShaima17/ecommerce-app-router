'use client';
import { useCart } from "@/app/context/CartContext";

interface AddToCartButtonProps {
  product: any;
  className?: string; 
}

export default function AddToCartButton({ product, className }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const email = typeof window !== 'undefined' ? localStorage.getItem('email') : null;

    if (!email) {
      if (confirm("Please login first!")) {
        window.location.href = "/login"; 
      }
      return;
    }

    addToCart(product);
  };

  return (
    <button
      onClick={handleAddToCart} 
      className={`bg-gray-900 hover:bg-black transition-colors text-white px-6 py-2 text-sm font-semibold rounded-lg shadow-md ${className || ''}`}
    >
      Add to Cart
    </button>
  );
}
