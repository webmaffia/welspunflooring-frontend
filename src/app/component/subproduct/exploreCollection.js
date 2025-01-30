import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ExploreCollection = ({ product }) => {
  const collections = product || [];

  // Create a map to track unique collections by `slug`
  const uniqueCollections = [];
  const seenSlugs = new Set();

  // Loop through collections and add only unique ones to uniqueCollections array
  collections.forEach((collection) => {
    const slug = collection?.attributes?.category?.data?.attributes?.slug;
    if (slug && !seenSlugs.has(slug)) {
      uniqueCollections.push(collection);
      seenSlugs.add(slug);
    }
  });

  // Limit to the first 3 unique items
  const limitedUniqueCollections = uniqueCollections.slice(0, 3);

  // Extract product name from the first collection safely
  const productName = limitedUniqueCollections?.[0]?.attributes?.category?.data?.attributes?.product?.data?.attributes?.product_name || '';

  console.log('Product Name:', productName); // Debugging log

  // If product name includes "PurGloss Tiles" or "Multistile", do not render the section
  if (
    productName &&
    (
      productName.includes("PurGloss Tiles") ||
      productName.includes("Multistile") ||
      productName.includes("Wall to Wall Carpet")
    )
  ) {
    return null;
  }
  

  return (
    <section data-section="explore_collection" className="explore_collection">
      <div className="square_box square_box_16"></div>
      <div className="explore_title">
        Explore other collections from {productName}
      </div>
      <div className="explore_container">
        {limitedUniqueCollections.map((collection, index) => {
          const categoryData = collection?.attributes?.category?.data;
          const collectionName = categoryData?.attributes?.collectionName || 'Unknown Collection';
          const slug = categoryData?.attributes?.slug || '#';
          const imageUrl = categoryData?.attributes?.image?.data?.attributes?.url;

          return (
            <div className="explore_box" key={index}>
              {imageUrl && (
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${imageUrl}`}
                  alt={collectionName}
                  width={465}
                  height={433}
                  layout="responsive"
                />
              )}
              <div className="collection_overlay">
                <h3 className="subtitle_60">{collectionName}</h3>
                <Link href={`/product?category=${categoryData?.attributes?.product?.data?.attributes?.slug}&collection=${collectionName}`}>
                  EXPLORE
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="square_box square_box_17"></div>
    </section>
  );
};

export default ExploreCollection;
