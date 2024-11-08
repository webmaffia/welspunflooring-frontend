"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const ProductsList = ({ productsByCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCollection, setSelectedCollection] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({});

  // Toggle showing all products for a specific category
  const toggleViewMore = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  // Handle category filter selection
  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    setSelectedCollection(''); // Reset collection filter on category change
      setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  // Handle collection filter selection
  const handleCollectionFilter = (collection) => {
    setSelectedCollection(collection);
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedCollection('');
  };

  // Get collections based on selected category
  const availableCollections = selectedCategory
    ? [
        ...new Set(
          productsByCategory
            .find(({ category }) => category === selectedCategory)
            ?.products.map((product) => product.attributes.category.data.attributes.collectionName) || []
        ),
      ]
    : [];

  const isFilterApplied = selectedCategory || selectedCollection;

  // Helper function for generating product links
  const generateProductLink = (product) => {
    const categorySlug = product.attributes.category.data.attributes.slug || '';
    const productSlug = product.attributes.slug;
    const parentCategorySlug =
      productsByCategory.find(({ category }) => category === selectedCategory)?.products[0]?.attributes.category.data.attributes.product.data.attributes.slug || '';
    
    return `/products/${parentCategorySlug}/${categorySlug}/${productSlug}`;
  };

  return (
    <section data-section="" className="product_listing">
      <div className="product_content">
        <aside>
          {isFilterApplied && (
            <div className="filter_content">
              <div className="filter">
                <span>FILTERS</span>
                <button onClick={clearFilters} className="clear_filter c">
                  CLEAR ALL
                </button>
              </div>
              <div className="filter_box">
                {selectedCategory && (
                  <div className="filter_item">
                    <div className="filter_patch">
                      <span className="filter_text">{selectedCategory}</span>
                      <button onClick={() => setSelectedCategory('')} className="clear_filter">
                        <img src="/images/icons/close.webp" alt="Remove" width="8" height="8" />
                      </button>
                    </div>
                  </div>
                )}
                {selectedCollection && (
                  <div className="filter_item">
                    <div className="filter_patch">
                      <span className="filter_text">{selectedCollection}</span>
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
                      <span>{category}</span>
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
          {/* Product Listing */}
          {productsByCategory
            .filter(({ category }) => !selectedCategory || category === selectedCategory)
            .map(({ category, products }) => (
              <div key={category} className="product_tile more_products" id={category}>
                <h2 className="product_title">{category}</h2>
                <div className="product_container">
                  <div className="product_tile_box">
                    {(expandedCategories[category] ? products : products.slice(0, 4))
                      .filter(
                        (product) =>
                          !selectedCollection ||
                          product.attributes.category.data.attributes.collectionName === selectedCollection
                      )
                      .map((product) => (
                        <div key={product.id} className="tile_item">
                          <div className="product_img_box">
                            <Link href={generateProductLink(product)}>
                              <img
                                src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${product?.attributes?.details?.slider[1]?.image?.data?.attributes?.url || product?.attributes?.details?.slider[0]?.image?.data?.attributes?.url}`}
                                alt={product?.attributes?.subProductName || 'Product Image'}
                                width="584"
                                height="511"
                                className="tile_img"
                              />
                            </Link>
                          </div>
                          <div className="product_text">
                            <div className="item_title">{product.attributes.subProductName}</div>
                            <div className="item_border"></div>
                            <div className="item_sub">{product.attributes.category.data.attributes.collectionName}</div>
                          </div>
                          <span className="item_link">
                            <Link href={generateProductLink(product)}>KNOW MORE</Link>
                          </span>
                        </div>
                      ))}
                  </div>
                  <div className="product_link">
                    <button onClick={() => toggleViewMore(category)} className="view_product">
                      {expandedCategories[category] ? 'VIEW LESS' : 'VIEW MORE'}
                    </button>
                    <Link href={`/products/${category}`}>EXPLORE {category.toUpperCase()}</Link>
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
