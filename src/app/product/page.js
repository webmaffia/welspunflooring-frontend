// app/products/page.js
import React ,{ Suspense }  from 'react';
import ProductsList from '../component/productList';
import AssistanceSection from '../component/assistance';
import ContactForm from '../component/homepage/contactus';

export async function generateMetadata() {
  return {
    title: "Check out Welspun Flooring Products",
    description: "Welspun Flooring - Products -  .Know more about this product here.",
  }
}

// Fetch data in the component with ISR using Next.js App Router style
async function fetchProductSpecifications() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/product-specifications?populate[category][populate]=product&populate[details][populate]=slider.image`,
    {
      cache: 'no-cache',
    }
  );
  
  const data = await res.json();
  return data.data;
}

const ProductsPage = async () => {
  const productSpecifications = await fetchProductSpecifications();

  // Get all distinct product categories
  const categories = productSpecifications.reduce((acc, product) => {
    const categoryName = product?.attributes?.category?.data?.attributes?.product?.data?.attributes?.slug;
    if (categoryName && !acc.includes(categoryName)) {
      acc.push(categoryName);
    }
    return acc;
  }, []);

  // Map products to categories
  const productsByCategory = categories.map((category) => {
    const filteredProducts = productSpecifications.filter(
      (product) =>
        product?.attributes?.category?.data?.attributes?.product?.data?.attributes?.slug === category
    );
    return { category, products: filteredProducts };
  });

  return (
    <main className="wrapper">
      <div className="product_list_wrapper">
        <section className="banner inner_banner">
          <picture>
            <source media="(max-width:540px)" srcSet="/images/product_list/banner_mob.webp" />
            <img src="/images/product_list/banner.webp" alt="" width="1920" height="472" />
          </picture>
          <div className="inner_content">
            <h1 className="banner_heading">Styles that cater to <br />different spaces and budgets</h1>
            <div className="banner_sub_heading">Designs that impress the Earth as well</div>
          </div>
        </section>

        {/* Pass data to ProductsList component */}
       
        <Suspense fallback={<div>Loading...</div>}>
        <ProductsList productsByCategory={productsByCategory} categories={categories} />
    </Suspense>
        <AssistanceSection />
        <ContactForm />
      </div>
    </main>
  );
};

export default ProductsPage;