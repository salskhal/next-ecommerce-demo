"use client";

import { useState } from "react";
import { useProductStore } from "../store/productStore";
// import { getRandomFurnitureImageUrl } from "../utils/unsplashImageFetcher";
import { getRandomImageUrl } from "../utils/getRandomImageUrl";

const AddProductModal = ({ isOpen, onClose }: AddProductModalProps) => {
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: 0,
    oldPrice: 0,
    description: "",
    category: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { addProduct } = useProductStore();

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const imageUrl =  getRandomImageUrl();
      addProduct({
        ...newProduct,
        id: Date.now(),
        slug: newProduct.title.toLowerCase().replace(/ /g, "-"),
        category: newProduct.category,
        imageUrl,
      });
      onClose();
    } catch (error) {
      console.error("Error adding product:", error);
      // You might want to show an error message to the user here
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={newProduct.title}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Price</label>
            <input
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Old Price (Optional)</label>
            <input
              type="number"
              name="oldPrice"
              value={newProduct.oldPrice}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Description</label>
            <textarea
              name="description"
              value={newProduct.description}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Category</label>
            {/* select */}
            <select
              name="category"
              value={newProduct.category}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select a category</option>
              <option value="furniture">Furniture</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="appliances">Appliances</option>
              <option value="books">Books</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
              disabled={isLoading}
            >
              {isLoading ? "Adding..." : "Add Product"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-black px-4 py-2 rounded"
              disabled={isLoading}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
