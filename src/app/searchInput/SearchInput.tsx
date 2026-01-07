"use client";
import React, { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function SearchInputContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSearch = searchParams.get("q") || "";

  return (
    <div className="relative w-full">
      <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-black-400" />
      <input
        type="search"
        placeholder="Search products"
        defaultValue={currentSearch}
        onChange={(e) =>
          router.push(`/products?q=${encodeURIComponent(e.target.value)}`)
        }
        className="w-full rounded-md border border-gray-300 py-2 pl-10 text-sm focus:ring-blue-500 focus:border-blue-500 text-gray-500"
      />
    </div>
  );
}

export default function SearchInput() {
  return (
    <Suspense fallback={
      <div className="relative w-full">
        <input
          type="search"
          placeholder="Search products"
          disabled
          className="w-full rounded-md border border-gray-300 py-2 pl-10 text-sm text-gray-500"
        />
      </div>
    }>
      <SearchInputContent />
    </Suspense>
  );
}