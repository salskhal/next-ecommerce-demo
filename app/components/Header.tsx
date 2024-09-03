"use client";

// components/Header.tsx

import Link from "next/link";
import { useState } from "react";
import AddProductModal from "./AddProductModal";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="bg-white flex justify-between items-center px-6 md:px-12 lg:px-32 py-6 border-b-2">
        <Link href="/">
          <h1 className="text-2xl lg:text-4xl font-bold text-black ">
            Furnish<span className="text-blue-500">It</span>{" "}
          </h1>
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/about" className="text-black">
            {" "}
            About{" "}
          </Link>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Product
          </button>
        </div>
      </nav>
      <AddProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
