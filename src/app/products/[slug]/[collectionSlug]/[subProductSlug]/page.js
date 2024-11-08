// app/products/[categorySlug]/[collectionSlug]/[subProductSlug]/page.js
import { notFound } from 'next/navigation';

const SubProductPage = async ({ params }) => {
  const { subProductSlug } = params;

  // Fetch product data
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/product-specifications?filters[slug][$eq]=${subProductSlug}&populate[category][populate]=product&populate[details][populate]=slider.image`
  );

  const productData = await res.json();
  const product = productData.data[0];

  // Handle the case when product is not found
  if (!product) {
    notFound(); // This will render a 404 page
  }

  return (
    <div>
      <h1>{product.attributes.details.heading}</h1>
      {/* Render other product details here */}
    </div>
  );
};

// Generate static paths
export async function generateStaticParams() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/product-specifications?populate[category][populate]=product&populate[details][populate]=slider.image`
  );
  const products = await res.json();

  return products.data.map((product) => ({
    categorySlug: product.attributes.category.data.attributes.product.data.attributes.slug,
    collectionSlug: product.attributes.category.data.attributes.slug,
    subProductSlug: product.attributes.slug,
  }));
}

export default SubProductPage;
