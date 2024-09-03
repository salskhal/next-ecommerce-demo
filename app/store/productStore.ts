// productStore.ts
import { create } from "zustand";
import { getProducts, saveProducts } from "../utils/productStorage";



export const useProductStore = create<ProductState>((set, get) => ({
  products: [],
  filteredProducts: [],
  fetchProducts: () => {
    const products = getProducts();
    set({ products, filteredProducts: products });
  },
  addProduct: (product) => {
    set((state) => {
      const newProducts = [...state.products, product];
      saveProducts(newProducts);
      return { products: newProducts, filteredProducts: newProducts };
    });
  },
  updateProduct: (id, updatedProduct) => {
    set((state) => {
      const newProducts = state.products.map((product) =>
        product.id === id ? { ...product, ...updatedProduct } : product
      );
      saveProducts(newProducts);
      return { products: newProducts, filteredProducts: newProducts };
    });
  },
  deleteProduct: (id) => {
    set((state) => {
      const newProducts = state.products.filter((product) => product.id !== id);
      saveProducts(newProducts);
      return { products: newProducts, filteredProducts: newProducts };
    });
  },
  getProductBySlug: (slug) => {
    return get().products.find((product) => product.slug === slug);
  },
  filterByCategory: (category) => {
    set((state) => {
      const filteredProducts = state.products.filter(
        (product) => product.category === category || category === ""
      );
      return { filteredProducts };
    });
  },
  filterByPrice: (price) => {
    set((state) => {
      const filteredProducts = state.products.filter(
        (product) => product.price <= price
      );
      return { filteredProducts };
    });
  },
  filterByPriceRange: (minPrice, maxPrice) => {
    set((state) => {
      const filteredProducts = state.products.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
      return { filteredProducts };
    });
  },
}));