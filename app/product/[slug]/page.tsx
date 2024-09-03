import { Metadata } from "next"
import ProductDetails from "./ProductDetails"



export const metadata: Metadata = {
  title: 'Product Details | FurnishIt',
  description: 'Explore the details of our product and make an informed decision.',
  openGraph: {
    title: 'Product Details | FurnishIt',
    description: 'Explore the details of our product and make an informed decision.',
    images: [{ url: '/path-to-your-og-image.jpg' }],
  },
};



export default function Product({params}: {params: {slug: string}}) {
  return (
    <ProductDetails 
      params={params}
     />
  )
}
// app/product/[slug]/page.tsx




