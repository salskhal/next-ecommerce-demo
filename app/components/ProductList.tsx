"use client";

import ProductListHeader from "./ProductListHeader";

import { useEffect} from "react";
import ProductCard from "./ProductCard";
import { useProductStore } from "../store/productStore";

export default function ProductList() {
  const { filteredProducts, filterByCategory,filterByPriceRange, products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="px-6 md:px-12 lg:px-32 py-12">
      {/* <ProductListHeader /> */}
      <ProductListHeader 
        onFilterCategory={filterByCategory} 
        onFilterPriceRange={filterByPriceRange} 
      />
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div> */}
      {filteredProducts.length === 0 ? ( // Check if there are no filtered products
        <div className="text-center mt-6">
          <p className="text-lg font-semibold">No products found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
