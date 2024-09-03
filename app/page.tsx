import { Metadata } from 'next';
import Landing from "./components/Landing";
import ProductList from "./components/ProductList";

export const metadata: Metadata = {
  title: 'Welcome to Our Store | FurnishIt',
  description: 'Discover our wide range of products at great prices. Shop now for the best deals!',
  openGraph: {
    title: 'Welcome to Our Store | FurnishIt',
    description: 'Discover our wide range of products at great prices. Shop now for the best deals!',
    images: [{ url: '/path-to-your-og-image.jpg' }],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Landing />
      <ProductList />
    </main>
  );
}
