// app/products/[categorySlug]/[collectionSlug]/[subProductSlug]/page.js
import AssistanceSection from '@/app/component/assistance';
import ContactForm from '@/app/component/homepage/contactus';
import CareInstructions from '@/app/component/subproduct/careInstruction';
import ProductDetail from '@/app/component/subproduct/details';
import TileSpecification from '@/app/component/subproduct/tileSpecification';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ExploreCollection from '@/app/component/subproduct/exploreCollection';

const SubProductPage = async ({ params }) => {
  const { subProductSlug } = params;

  // Fetch product data
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/product-specifications?filters[slug][$eq]=${subProductSlug}&populate[category][populate]=product,image&populate[details][populate]=slider.image,point&populate[specification][populate]=icon&populate[careInstruction][populate]=point`
  );

  const productData = await res.json();
  const product = productData.data[0];

  // Handle the case when product is not found
  if (!product) {
    notFound(); // Render a 404 page if product not found
  }

  const collectionName = product?.attributes?.category?.data?.attributes?.collectionName;
  const productName = product?.attributes?.category?.data?.attributes?.product?.data?.attributes?.product_name;

  let productByCollectionsData = null;
  let productByProductNameData = null;

  // Fetch products by collection based on `collectionName`
  if (collectionName) {
    const productByCollections = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/product-specifications?filters[category][collectionName][$eq]=${collectionName}&populate=swatch`
    );
    productByCollectionsData = await productByCollections.json();
  } else {
    console.log("Collection name is not defined.");
  }

  // Fetch products by product name
  if (productName) {
    const productByProdName = await fetch(

      `${process.env.NEXT_PUBLIC_API_URL}/product-specifications?filters[category][product][product_name][$eq]=${productName}&populate[category][populate]=product,image&populate[category]=collectionName`

    );
    productByProductNameData = await productByProdName.json();
  } else {
    console.log("Product name is not defined.");
  }

  return (
    <main className="wrapper">
      <div className="product_list_wrapper">
        <ProductDetail product={product} collection={productByCollectionsData?.data || []} />
        <TileSpecification specifications={product} />
        <CareInstructions product={product} />
        <AssistanceSection />
        <ExploreCollection product={productByProductNameData?.data || []} />
        <section data-section="more_tile_link" className="more_tile_link">
          <Link href={`/products/${product.attributes.category.data.attributes.product.data.attributes.slug}`}>
            {product.attributes.category.data.attributes.product.data.attributes.product_name}
          </Link>
        </section>
        <ContactForm />
      </div>
    </main>
  );
};

export default SubProductPage;
