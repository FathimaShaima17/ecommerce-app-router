'use client';
import React from "react";
import { useCart } from "@/app/context/CartContext";
import CartItem from "@/app/component/cartItem/CartItem";
import Image from "next/image";
import Link from "next/link";
import CartImage from '@/assets/cart.jpg';

export default function CartPage() {
  const { cart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <Image 
          src={CartImage} 
          alt="Empty Cart" 
          width={300} 
          height={300}
          className="opacity-50 mb-6"
        />
        <h2 className="text-2xl font-bold text-black mb-2">Your cart is empty</h2>
        <p className="text-gray-600 mb-6">Looks like you haven't added anything yet</p>
        <Link 
          href="/products"
          className="bg-gray-900 hover:bg-black transition-colors text-white px-6 py-3 rounded-lg font-semibold"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold mb-6 text-zinc-950">My Cart</h1>
      <div className="space-y-4 bg-white rounded-lg p-6 shadow-sm">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    
        <div className="flex justify-between items-center border-t-2 border-gray-200 pt-6">
          <span className="text-xl font-bold text-black">Total:</span>
          <span className="text-2xl font-bold text-black">
            ₹{(totalPrice * 83).toFixed(2)}
          </span>
        </div>
        
      
    </div>
  );
}