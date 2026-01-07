'use client';
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProductCard from "@/app/component/productCard/ProductCard";
import { getAllProducts } from "@/app/services/product-Service";


export default function ProductsPage() {
  const searchParams = useSearchParams();
  const search = searchParams.get("q") || "";

  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProducts().then(setProducts).finally(() => setLoading(false));
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filteredProducts.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
