'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import AddToCartButton from "@/app/component/addtoCartButton/AddToCartButton";
import { getProductById } from "@/app/services/product-Service";
import Rating from "@/app/component/rating/Rating";


export default function ProductDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white">
        <div className="animate-pulse">
          <div className="h-64 bg-gray-200 rounded mb-4"></div>
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white">
        <p className="text-black text-center">Product not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center justify-center">
          <Image 
            src={product.image} 
            alt={product.title} 
            width={400} 
            height={400} 
            className="object-contain" 
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-zinc-950 mb-2">{product.title}</h1>
          <p className="text-zinc-400 my-4 leading-relaxed">{product.description}</p>
           <Rating value={4} count={128} />
          <div className="mb-6">
            <p className="text-3xl font-bold text-rose-950">₹{(product.price * 83).toFixed(2)}</p>
            <p className="text-sm text-slate-400 mt-1">Inclusive of all taxes</p>
          </div>

          <AddToCartButton product={product} className="bg-sky-950 hover:bg-sky-600 transition-colors text-white px-4 py-2 text-sm rounded-lg font-semibold shadow-md"  />
        </div>
      </div>
    </div>
  );
}