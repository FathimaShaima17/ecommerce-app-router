'use client';
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import Rating from "@/app/component/rating/Rating";


export default function ProductCard({ product }: { product: any }) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); 
    e.stopPropagation();

    // Check = user is logged in
    const email = typeof window !== 'undefined' ? localStorage.getItem('email') : null;

    if (!email) {
      if (confirm("Please login first!")) {
        window.location.href = "/login";   // go to login page if not logged in
      }
      return;
    }

    addToCart(product); //cart add cheyya login allenkill  login cheyyanam   
  
  };

  return (
    <div className="rounded-2xl border-white bg-white p-4 shadow-sm flex flex-col justify-between h-full">
      <div>
        <Link href={`/products/${product.id}`} className="block">
          <div className="w-full h-88 flex items-center justify-center mb-3 bg-zinc-100">
            <Image
              src={product.image}
              alt={product.title}
              width={150}
              height={150}
              className="object-contain max-h-full"
            />
          </div>
        </Link>
        <h2 className="mt-2 text-big font-semibold line-clamp-2 text-zinc-950 min-h-[40px]">
          {product.title}
        </h2> 
        <Rating value={4} count={128} />
        <span className="font-bold text-zinc-900 text-lg block mt-2">
          ₹{(product.price * 83).toFixed(2)}
        </span>
      </div>
      
      <div className="mt-4 flex flex-col gap-2">
        <Link 
          href={`/products/${product.id}`}
          className="text-center border-2 border-zinc-300 text-zinc-700 hover:bg-blue-300 transition-colors px-4 py-2 text-sm rounded-lg font-semibold"
        >
          View Details
        </Link>
        <button
          onClick={handleAddToCart} 
          className="bg-zinc-900 hover:bg-zinc-500 transition-colors text-white px-4 py-2 text-sm rounded-lg font-semibold shadow-md"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
