export default function ProductListHeader({
  onFilterCategory,
  onFilterPriceRange,
}: ProductListHeaderProps) {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold">All Products</h2>
      <div className="flex items-center space-x-4">
        <label className="text-sm mr-2">Category:</label>
        <select
          onChange={(e) => onFilterCategory(e.target.value)}
          className="px-2 py-1 border border-gray-300 rounded-md"
        >
          <option value="">All</option>
          <option value="furniture">Furniture</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="appliances">Appliances</option>
          <option value="books">Books</option>
        </select>
        <label className="text-sm mr-2">Price:</label>
        <select
          onChange={(e) => {
            const value = e.target.value;
            if (value === "low") onFilterPriceRange(0, 50);
            else if (value === "medium") onFilterPriceRange(50, 150);
            else if (value === "high") onFilterPriceRange(150, Infinity);
          }}
          className="px-2 py-1 border border-gray-300 rounded-md"
        >
          <option value="">All</option>
          <option value="low">Under $50</option>
          <option value="medium">$50 - $150</option>
          <option value="high">Over $150</option>
        </select>
      </div>
    </div>
  );
}
