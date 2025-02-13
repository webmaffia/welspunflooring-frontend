// app/products/[categorySlug]/[collectionSlug]/[subProductSlug]/page.js
import AssistanceSection from '@/app/component/assistance';
import ContactForm from '@/app/component/homepage/contactus';
import CareInstructions from '@/app/component/subproduct/careInstruction';
import ProductDetail from '@/app/component/subproduct/details';
import TileSpecification from '@/app/component/subproduct/tileSpecification';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ExploreCollection from '@/app/component/subproduct/exploreCollection';

export async function generateMetadata({ params }) {
  const { slug, collectionSlug, subProductSlug } = params;

  // Fetch product data
  const res2 = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/product-specifications?filters[slug][$eq]=${subProductSlug}&filters[category][slug][$eq]=${collectionSlug}&filters[category][product][slug][$eq]=${slug}&populate=seo`,
    { cache: 'no-cache' }
  );

  const productData2 = await res2.json();
  const product2 = productData2.data[0];

  if (!product2) {
    return {
      title: 'Product Not Found - Welspun Flooring',
      description: 'The product you are looking for does not exist.',
    };
  }

  const seo = product2?.attributes?.seo;

  return {
    title: seo?.metaTitle || 'Welspun Flooring - High-Quality Products',
    description: seo?.metaDescription || 'Discover premium flooring solutions by Welspun.',
    canonical: seo?.canonical || `${process.env.NEXT_PUBLIC_SITE_URL}/products/${subProductSlug}`,
  };
}

const SubProductPage = async ({ params }) => {
  const { slug, collectionSlug, subProductSlug } = params;

  // Fetch product data
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/product-specifications?filters[slug][$eq]=${subProductSlug}&filters[category][slug][$eq]=${collectionSlug}&filters[category][product][slug][$eq]=${slug}&populate[category][populate]=product,image&populate[details][populate]=slider.image,point,warranty&populate[specification][populate]=icon&populate[careInstruction][populate]=point`,
    { cache: 'no-cache' }
  );

  const productData = await res.json();
  const product = productData.data[0];

  if (!product) {
    notFound();
  }

  const collectionName = product?.attributes?.category?.data?.attributes?.collectionName;
  const productName = product?.attributes?.category?.data?.attributes?.product?.data?.attributes?.product_name;

  let productByCollectionsData = null;
  let productByProductNameData = null;

  if (collectionName) {
    const productByCollections = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/product-specifications?filters[category][slug][$eq]=${collectionSlug}&filters[category][product][slug][$eq]=${slug}&populate=swatch,high_res_assets`,
      { cache: 'no-cache' }
    );
    productByCollectionsData = await productByCollections.json();
  }

  if (productName) {
    const productByProdName = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/product-specifications?filters[category][product][product_name][$eq]=${productName}&populate[category][populate]=product,image&populate[category]=collectionName`
    );
    productByProductNameData = await productByProdName.json();
  }

  const lookbookRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/categories?filters[slug][$eq]=${collectionSlug}&filters[product][slug][$eq]=${slug}&populate=lookbook`,
    { cache: 'no-cache' }
  );
  const lookbookData = await lookbookRes.json();
  
  // Debugging log
  // console.log('Lookbook API Response:', JSON.stringify(lookbookData, null, 2));
  
  const highRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/product-specifications?filters[slug][$eq]=${subProductSlug}&filters[category][slug][$eq]=${collectionSlug}&filters[category][product][slug][$eq]=${slug}&populate=high_res_assets`,
    { cache: 'no-cache' }
  );
  const highResData = await highRes.json();

  console.log('highResData API Response:', JSON.stringify(highResData, null, 2));

  return (
    <main className="wrapper">
      <div className="product_list_wrapper">
        <ProductDetail product={product} collection={productByCollectionsData?.data || []} lookbookUrls={lookbookData} highResData={highResData} />
        <TileSpecification specifications={product} />
        <CareInstructions product={product} />
        <AssistanceSection />
        <ExploreCollection product={productByProductNameData?.data || []} />
        <section data-section="more_tile_link" className="more_tile_link">
          <Link href={`/product/${product.attributes.category.data.attributes.product.data.attributes.slug}`}>
            {product.attributes.category.data.attributes.product.data.attributes.product_name}
          </Link>
        </section>
        <ContactForm />
      </div>
    </main>
  );
};

export default SubProductPage;
