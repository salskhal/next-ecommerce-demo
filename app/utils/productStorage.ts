// utils/productStorage.ts


const LOCAL_STORAGE_KEY = 'products';

// This is your default product data
const defaultProducts: Product[] = [
  {
    id: 1,
    title: "Modern Leather Sofa",
    slug: "modern-leather-sofa",
    price: 100,
    oldPrice: 120,
    description: "A sleek and comfortable leather sofa perfect for contemporary living rooms.",
    category: "furniture",
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: 2,
    title: "Modern Leather Chair",
    slug: "modern-leather-chair",
    price: 50,
    oldPrice: 70,
    description: "A sleek and comfortable leather chair perfect for contemporary living rooms.",
    category: "furniture",
    imageUrl: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
}
];

export function getProducts(): Product[] {
  const storedProducts = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (storedProducts) {
    const parsedProducts = JSON.parse(storedProducts);
    // Check if the parsed data is an array and has items
    if (Array.isArray(parsedProducts) && parsedProducts.length > 0) {
      return parsedProducts;
    }
  }
  
  // If no valid products in localStorage, use the default products and save them
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(defaultProducts));
  return defaultProducts;
}

export function saveProducts(products: Product[]): void {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(products));
}