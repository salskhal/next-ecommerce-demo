declare interface Metadata {
    title: string;
    description: string;
}

declare interface Product {
    id: number;
    title: string;
    slug: string;
    price: number;
    oldPrice: number;
    description: string;
    category: string;
    imageUrl: string;
}

declare interface ProductState {
    products: Product[];
    filteredProducts: Product[];
    fetchProducts: () => void;
    addProduct: (product: Product) => void;
    updateProduct: (id: number, updatedProduct: Partial<Product>) => void;
    deleteProduct: (id: number) => void;
    getProductBySlug: (slug: string) => Product | undefined;
    filterByCategory: (category: string) => void;
    filterByPrice: (price: number) => void;
    filterByPriceRange: (minPrice: number, maxPrice: number) => void;
}

declare interface EditProductModalProps {
    product: Product;
    isOpen: boolean;
    onClose: () => void;
}

declare interface AddProductModalProps {
    isOpen: boolean;
    onClose: () => void;
}

declare interface ProductListHeaderProps {
    onFilterCategory: (category: string) => void;
    onFilterPriceRange: (minPrice: number, maxPrice: number) => void;
}