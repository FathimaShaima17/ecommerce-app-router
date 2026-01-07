"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import jewellery from "@/assets/jewellery.png";
import jacket from "@/assets/jacket.png";
import womenfashion from "@/assets/women.png";

const slides = [
  {
    id: 1,
    title: "Your One-Stop Destination",
    highlight: "for Exquisite Jewellery!",
    description:
      "Premium craftsmanship, certified purity, and secure shopping you can trust.",
    bgColor: "bg-amber-50",
    image: jewellery,
    promos: [
      {
        title: "Wedding Collection",
        subtitle: "Discover timeless designs for your special moments",
        color: "bg-yellow-400",
      },
      {
        title: "Up to 20% OFF",
        subtitle: "On Gold & Diamond Jewellery",
        color: "bg-white",
      },
    ],
  },
  {
    id: 2,
    title: "Winter Essentials",
    highlight: "Stylish Jackets Sale!",
    description:
      "Stay warm and trendy with premium jackets designed for comfort and durability.",
    bgColor: "bg-gradient-to-b from-black/60 via-black/30 to-transparent",
    image: jacket,
    promos: [
      {
        title: "Flat 50% OFF",
        subtitle: "On selected jackets & outerwear",
        color: "bg-blue-400",
      },
      {
        title: "Free Delivery",
        subtitle: "On all jacket orders",
        color: "bg-white",
      },
    ],
  },
  {
    id: 3,
    title: "Womens Collection",
    highlight: "New Season Styles!",
    description:
      "Explore the latest womens fashion designed to elevate your everyday look",
    bgColor:
      "bg-[linear-gradient(to_bottom,oklch(98%_0.06_101.54),oklch(94.5%_0.129_101.54))]",
    image: womenfashion,
    promos: [
      {
        title: "Trending Styles",
        subtitle: "Handpicked looks for every occasion",
        color: "bg-purple-400",
      },
      {
        title: "Buy 2 Get 1",
        subtitle: "On selected womens wear",
        color: "bg-white",
      },
    ],
  },
];

export default function SlidingBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full w-screen">
            <div
              className={`${slide.bgColor} relative max-w-7xl mx-auto px-6 md:px-12 py-10 rounded-3xl overflow-hidden`}
            >
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/10 to-transparent pointer-events-none rounded-b-3xl" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                
                {/* LEFT */}
                <div className="space-y-5">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
                    {slide.title}
                    <span className="block text-blue-600">
                      {slide.highlight}
                    </span>
                  </h1>

                  <p className="text-gray-600 text-base md:text-lg">
                    {slide.description}
                  </p>

                  <div className="flex gap-4 flex-wrap">
                    {slide.promos.map((promo, idx) => (
                      <div
                        key={idx}
                        className={`${promo.color} rounded-2xl p-4 w-56 shadow-lg`}
                      >
                        <h3 className="text-lg font-bold mb-1">
                          {promo.title}
                        </h3>
                        <p className="text-sm text-gray-700 mb-3">
                          {promo.subtitle}
                        </p>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-blue-700 transition">
                          Claim discount
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT */}
                <div className="relative h-[400px] md:h-[500px]">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-contain"
                    priority={slide.id === 1}
                  />

                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-gradient-to-t from-black/20 to-transparent blur-xl" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg">
        <ChevronLeftIcon className="w-6 h-6" />
      </button>

      <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg">
        <ChevronRightIcon className="w-6 h-6" />
      </button>
    </div>
  );
}
