import React from "react";
import Image from "next/image";
import communicate from '@/assets/communication.png';
import about from '@/assets/about.png';
import Link from "next/link";


export default function AboutPage() {
  return (
    <div>
   <section className="h-[300px] bg-zinc-300 flex items-center">
     <Image src={about} alt="communicate" className="rounded-xl w-[500px] h-[300px] mr-[100px]"/>
  <div className="max-w-7xl mx-auto px-6">
    <h1 className="text-5xl font-bold text-white">About BuyNest</h1>
    <p className="text-zinc-400 mt-2">
      Smart shopping. Trusted delivery.
    </p>
  </div>
  </section>


  <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto grid grid-cols-2 gap-12 items-center">
    
     <Image src={communicate} alt="communicate" className="rounded-xl w-[500px] h-[300px] mr-[100px]"/>


    <div>
      <h2 className="text-3xl font-bold text-zinc-900">
        A Community of Smart Shoppers
      </h2>
      <p className="text-zinc-600 mt-4">
        BuyNest brings quality products, fast delivery,
        and secure checkout — all in one place.
      </p>
    </div>

  </div>
</section>
<section className="bg-zinc-100 py-16">
  <div className="max-w-7xl mx-auto grid grid-cols-4 text-center">
    <div>
      <h3 className="text-4xl font-bold">10K+</h3>
      <p className="text-zinc-600">Customers</p>
    </div>
    <div>
      <h3 className="text-4xl font-bold">5+</h3>
      <p className="text-zinc-600">Categories</p>
    </div>
    <div>
      <h3 className="text-4xl font-bold">24/7</h3>
      <p className="text-zinc-600">Support</p>
    </div>
    <div>
      <h3 className="text-4xl font-bold">100%</h3>
      <p className="text-zinc-600">Secure</p>
    </div>
  </div>
</section>
<section className="py-20 bg-zinc-500 text-center text-white">
  <h2 className="text-4xl font-bold">
    Let's Shop Smarter with BuyNest
  </h2>
   <Link href="/products">
  <button className="mt-6 px-8 py-3 bg-white text-blue-950 rounded-full">
    Explore Products
  </button>
  </Link>
</section>


</div>
  );
}
