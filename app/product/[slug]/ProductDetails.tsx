"use client";
import Image from "next/image";
import { useProductStore } from "@/app/store/productStore";
import { useEffect, useState } from "react";

export default function ProductDetails({params}: {params: {slug: string}}) {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const { getProductBySlug, fetchProducts } = useProductStore();
  const { slug } = params;

  useEffect(() => {
    // Fetch products once to ensure they are available in the store
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    // Retrieve the product using slug from the store
    if (slug) {
      const foundProduct = getProductBySlug(slug);
      setProduct(foundProduct);
    }
  }, [slug, getProductBySlug]);

  if (!product) {
    // Render a loading state while the product data is being fetched
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Loading...</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <div className="px-6 md:px-12 lg:px-32 py-12 bg-[#F6F5FF]">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Product Details
        </h1>
      </div>
      <div>
        <div className="px-6 md:px-12 lg:px-32 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex justify-center">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-[500px] h-[300px] object-cover"
                  width={500}
                  height={500}
                  placeholder="blur" // Use blur-up effect while loading
                  blurDataURL="/path-to-blur-image-placeholder" // Replace with actual blur placeholder path
                  loading="lazy" // Load image lazily
                  priority={false} // Do not prioritize loading this image
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
              <p className="text-gray-700 text-base mb-2">
                {product.description}
              </p>
              <div className="flex items-center mb-4">
                <span className="text-xl font-bold">${product.price}</span>
                {product.oldPrice && (
                  <span className="text-sm text-gray-500 line-through ml-2">
                    ${product.oldPrice}
                  </span>
                )}
              </div>

              <div className="flex items-center mt-6">
                <span className="text-gray-500">Category:</span>
                <span className="text-gray-700 ml-2">{product.category}</span>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-bold mb-2">Description</h3>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam auctor, libero a tincidunt tincidunt, dolor nunc
                  vestibulum turpis, in ultricies purus nunc nec ipsum. Nulla
                  facilisi.
                </p>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-bold mb-2">Specifications</h3>
                <ul className="list-disc text-gray-700 text-base pl-6">
                  <li>Material: Wood</li>
                  <li>Color: Brown</li>
                  <li>Size: 10x10x10</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

