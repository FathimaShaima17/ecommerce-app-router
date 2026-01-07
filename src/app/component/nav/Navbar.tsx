"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  BellIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useCart } from "@/app/context/CartContext";
import { useRouter, useSearchParams } from "next/navigation";

const categories = [
  { name: "Electronics", slug: "electronics" },
  { name: "Men's Clothing", slug: "men's clothing" },
  { name: "Women's Clothing", slug: "women's clothing" },
  { name: "Jewelery", slug: "jewelery" },
];

export default function Navbar() {
  const { cart } = useCart();

  const [email, setEmail] = useState<string | null>(null);

  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSearch = searchParams.get("q") || "";

  // email from localStorae
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedEmail = localStorage.getItem("email");
      setEmail(storedEmail);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("email");
    setEmail(null);
    window.location.href = "/login";
  };

  return (
    <Disclosure as="nav" className="bg-white shadow sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between items-center">
              <div className="flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100">
                  {open ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Logo */}
              <Link href="/" className="text-xl font-bold text-gray-900">
                Buy<span className="text-blue-500">Nest</span>
              </Link>

              <div className="hidden sm:flex flex-1 max-w-md mx-8">
                <div className="relative w-full">
                  <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-black-400" />
                  <input
                    type="search"
                    placeholder="Search products"
                    defaultValue={currentSearch}
                    onChange={(e) =>
                      router.push(
                        `/products?q=${encodeURIComponent(e.target.value)}`
                      )
                    }
                    className="w-full rounded-md border border-gray-300 py-2 pl-10 text-sm focus:ring-blue-500 focus:border-blue-500 text-gray-500"
                  />
                </div>
              </div>

              <div className="hidden sm:flex items-center space-x-6 text-black">
                <Link href="/" className="text-sm font-medium">
                  Home
                </Link>
                <Link href="/products" className="text-sm font-medium">
                  Products
                </Link>

                <Link href="/about" className="text-sm font-medium">
                  About
                </Link>

                <Link href="/contact" className="text-sm font-medium">
                  Contact
                </Link>

                <Link href="/cart" className="relative">
                  <ShoppingCartIcon className="h-6 w-6" />
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                      {cart.length}
                    </span>
                  )}
                </Link>

                <BellIcon className="h-6 w-6 text-gray-700" />

                {!email ? (
                  <Link
                    href="/login"
                    className="flex items-center gap-1 text-sky-600 hover:text-sky-700"
                  >
                    <UserIcon className="h-6 w-6" />
                    Login
                  </Link>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-1 text-blue-600 font-semibold"
                  >
                    <UserIcon className="h-6 w-6" /> {email} | Logout
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="hidden sm:block border-t border-gray-200">
            <div className="mx-auto max-w-7xl px-4">
              <div className="flex h-12 items-center space-x-6">
                <Link
                  href="/products"
                  className="rounded-md border px-4 py-1.5 text-sm   text-gray-700 hover:text-gray-900"
                >
                  All Products
                </Link>

                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/products?category=${encodeURIComponent(
                      category.slug
                    )}`}
                    className="text-sm font-medium text-gray-700 hover:text-gray-900"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden px-4 pb-4">
            <Link href="/products" className="block py-2">
              Products
            </Link>
            <Link href="/about" className="block py-2">
              About
            </Link>
            <Link href="/contact" className="block py-2">
              Contact
            </Link>

            <div className="border-t pt-3 mt-3">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/products?category=${encodeURIComponent(
                    category.slug
                  )}`}
                  className="block py-2"
                >
                  {category.name}
                </Link>
              ))}
            </div>

            <Link
              href="/cart"
              className="block mt-4 text-center bg-blue-500 text-black py-2 rounded"
            >
              Cart ({cart.length})
            </Link>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
