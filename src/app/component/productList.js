"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

const ProductsList = ({ productsByCategory }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCollection, setSelectedCollection] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({});

  // Set initial state from query parameters when component mounts
  useEffect(() => {
    const categoryFromUrl = searchParams.get("category") || '';
    const collectionFromUrl = searchParams.get("collection") || '';
  
    setSelectedCategory(categoryFromUrl);
    setSelectedCollection(collectionFromUrl);
  
    // Expand category view if collection is selected in the URL
    if (categoryFromUrl) {
      setExpandedCategories((prev) => ({
        ...prev,
        [categoryFromUrl]: true,
      }));
    }
  }, [searchParams]);

  const toggleViewMore = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    setSelectedCollection('');
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
    router.push(`?category=${category}`);
  };

  const handleCollectionFilter = (collection) => {
    setSelectedCollection(collection);
    setExpandedCategories((prev) => ({
      ...prev,
      [selectedCategory]: true,
    }));
    router.push(`?category=${selectedCategory}&collection=${collection}`);
    
  };

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedCollection('');
    router.push('/');
  };

  const availableCollections = selectedCategory
    ? [...new Set(
        productsByCategory
          .find(({ category }) => category === selectedCategory)
          ?.products.map((product) => product.attributes.category.data.attributes.collectionName) || []
      )]
    : [];

  const isFilterApplied = selectedCategory || selectedCollection;

  const formatCategory = (category) => category.replace(/-/g, ' ');

  return (
    <section className="product_listing">
      <div className="product_content">
        <aside>
          {isFilterApplied && (
            <div className="filter_content">
              <div className="filter">
                <span>FILTERS</span>
                <button onClick={clearFilters} className="clear_filter">CLEAR ALL</button>
              </div>
              <div className="filter_box">
                {selectedCategory && (
                  <div className="filter_item">
                    <div className="filter_patch">
                      <span className="filter_text">{formatCategory(selectedCategory)}</span>
                      <button onClick={() => setSelectedCategory('')} className="clear_filter">
                        <img src="/images/icons/close.webp" alt="Remove" width="8" height="8" />
                      </button>
                    </div>
                  </div>
                )}
                {selectedCollection && (
                  <div className="filter_item">
                    <div className="filter_patch">
                      <span className="filter_text">{formatCategory(selectedCollection)}</span>
                      <button onClick={() => setSelectedCollection('')} className="clear_filter">
                        <img src="/images/icons/close.webp" alt="Remove" width="8" height="8" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          {/* Category Filter */}
          <div className="filter_category">
            <div className="filter_sub_category">
              <div className="filter_title">PRODUCTS</div>
              <div className="filter_label">
                {productsByCategory.map(({ category }) => (
                  <div key={category} className="label_content">
                    <label className="product_radio" htmlFor={`product_radio_${category}`}>
                      <input
                        id={`product_radio_${category}`}
                        className="input"
                        type="radio"
                        name="product_radio"
                        onChange={() => handleCategoryFilter(category)}
                        checked={selectedCategory === category}
                      />
                      <span>{formatCategory(category)}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Collection Filter */}
            {selectedCategory && (
              <div className="filter_sub_category">
                <div className="filter_title">COLLECTION</div>
                <div className="filter_label">
                  {availableCollections.map((collection) => (
                    <div key={collection} className="label_content">
                      <label className="product_radio" htmlFor={`collection_radio_${collection}`}>
                        <input
                          id={`collection_radio_${collection}`}
                          className="input"
                          type="radio"
                          name="collection_radio"
                          onChange={() => handleCollectionFilter(collection)}
                          checked={selectedCollection === collection}
                        />
                        <span>{collection}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>

        <div className="product_list">
          {productsByCategory
            .filter(({ category }) => !selectedCategory || category === selectedCategory)
            .map(({ category, products }) => (
              <div key={category} className="product_tile more_products" id={category}>
                <h2 className="product_title">{formatCategory(category)}</h2>
                <div className="product_container">
                  <div className="product_tile_box">
                    {(expandedCategories[category] ? products : products.slice(0, 4))
                      .filter((product) =>
                        !selectedCollection ||
                        product.attributes.category.data.attributes.collectionName === selectedCollection
                      )
                      .map((product) => (
                        <div key={product.id} className="tile_item">
                          <div className="product_img_box">
                            <Link href={`/products/${products[0]?.attributes?.category?.data?.attributes?.product?.data?.attributes?.slug || ''}/${product.attributes.category.data.attributes.slug}/${product.attributes.slug}`}>
                              <img
                                src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${product?.attributes?.details?.slider[1]?.image?.data?.attributes?.url || product?.attributes?.details?.slider[0]?.image?.data?.attributes?.url}`} 
                                alt={product?.attributes?.subProductName || 'Product Image'}
                                width="584"
                                height="511"
                                className="tile_img"
                              />



{/* <img
  src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${(() => {
    const slider = product?.attributes?.details?.slider || [];
    // Fetch candidates for indexes 2, 3, and 4
    const candidates = [slider[1], slider[2], slider[3]];
    // Filter to only include valid images
    const availableImages = candidates.filter(image => image?.image?.data?.attributes?.url);
    // Randomly pick an image from available ones or fallback to the first
    const selectedImage = 
      availableImages.length > 0 
        ? availableImages[Math.floor(Math.random() * availableImages.length)]
        : slider[0];
    return selectedImage?.image?.data?.attributes?.url || '';
  })()}`}
  alt={product?.attributes?.subProductName || 'Product Image'}
  width="584"
  height="511"
  className="tile_img"
/> */}
                            </Link>
                          </div>
                          <div className="product_text">
                            <div className="item_title">{product.attributes.subProductName}</div>
                            <div className="item_border"></div>
                            <div className="item_sub">{product.attributes.category.data.attributes.collectionName}</div>
                          </div>
                          <span className="item_link">
                            <Link href={`/products/${products[0]?.attributes?.category?.data?.attributes?.product?.data?.attributes?.slug || ''}/${product.attributes.category.data.attributes.slug}/${product.attributes.slug}`}>
                              KNOW MORE
                            </Link>
                          </span>
                        </div>
                      ))}
                  </div>
                  <div className="product_link">
                    <button onClick={() => toggleViewMore(category)} className="view_product">
                      {expandedCategories[category] ? "VIEW LESS" : "VIEW MORE"}
                    </button>
                    <Link href={`/products/${products[0]?.attributes?.category?.data?.attributes?.product?.data?.attributes?.slug || ''}`}>
                      EXPLORE {(category || 'Category').toUpperCase()}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsList;
