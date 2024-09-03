// components/ProductCard.tsx
"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import EditProductModal from "./EditProductModal";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      {/* <img
        src={product.imageUrl}
        alt={product.title}
        className="w-full h-48 object-cover"
      /> */}

      <Image
        src={product.imageUrl}
        alt={product.title}
        className="w-full h-48 object-cover"
        width={500}
        height={500}
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{product.title}</h2>
        <p className="text-gray-700 text-base mb-2">{product.description}</p>
        <div className="flex justify-between items-center mb-2">
          <div>
            <span className="text-xl font-bold">${product.price}</span>
            {product.oldPrice && (
              <span className="text-sm text-gray-500 line-through ml-2">
                ${product.oldPrice}
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-3">
          {/* Have an edit button */}
          {/* Have a go to button  */}
          <Link href={`/product/${product.slug}`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View
            </button>
          </Link>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          >
            Edit
          </button>
        </div>
      </div>
      <EditProductModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default ProductCard;
