import React from 'react';
import Image from 'next/image';

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

  return (
    <section data-section="explore_collection" className="explore_collection">
      <div className="square_box square_box_16"></div>
      <div className="explore_title">
        Explore other collections from {limitedUniqueCollections[0]?.attributes?.category?.data?.attributes?.product?.data?.attributes?.product_name}
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
                <div className="subtitle_60">{collectionName}</div>
                <a href={`/products/${slug}`}>EXPLORE</a>
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