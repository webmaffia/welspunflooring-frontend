"use client";
import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

const ProductsList = ({ productsByCategory }) => {

   // Rotating placeholder logic
   const placeholders = [
    "Silver Striped Oak",
    "Bianco Travertine",
    "Passage-Mist",
  ];

  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const currentPlaceholder = placeholders[placeholderIndex];

  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCollection, setSelectedCollection] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({});

  // NEW: State for holding search input
  const [searchTerm, setSearchTerm] = useState('');

  const [isScrollActive, setIsScrollActive] = useState(false);
  const scrollDivRef = useRef(null);

  // Set initial state from query parameters when component mounts
  useEffect(() => {
    const categoryFromUrl = searchParams.get("category") || '';
    const collectionFromUrl = searchParams.get("collection") || '';
  
    setSelectedCategory(categoryFromUrl);
    setSelectedCollection(collectionFromUrl);
  
    // Expand category view if category is selected in the URL
    if (categoryFromUrl) {
      setExpandedCategories((prev) => ({
        ...prev,
        [categoryFromUrl]: true,
      }));
    }
  }, [searchParams]);

  useEffect(() => {
    if (scrollDivRef.current) {
      if (scrollDivRef.current.offsetHeight > 600) {
        setIsScrollActive(true);
      } else {
        setIsScrollActive(false);
      }
    }
  }, [selectedCategory]);

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
    setSearchTerm(''); // also clear the search term
    router.push('/'); // or push('/products') if you want to stay on the same page route
  };

  const availableCollections = selectedCategory
    ? [
        ...new Set(
          productsByCategory
            .find(({ category }) => category === selectedCategory)
            ?.products.map(
              (product) => product.attributes.category.data.attributes.collectionName
            ) || []
        ),
      ]
    : [];

  const isFilterApplied = selectedCategory || selectedCollection || searchTerm;

  const formatCategory = (category) => category.replace(/-/g, ' ');

  return (
    <section className="product_listing">
      <div className="product_content">
        <aside>
            {/* NEW: Search Field */}
            <div className="filter_sub_category">
            <div className="filter_title productSearchTitle">SEARCH PRODUCTS</div>
            <input
              type="text"
              placeholder={currentPlaceholder} // <-- rotating placeholder here
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='productSearch'
            />
          </div>
          
          {isFilterApplied && (
            <div className="filter_content filerlabelx">
              <div className="filter">
                <span>FILTERS</span>
                <button onClick={clearFilters} className="clear_filter">
                  CLEAR ALL
                </button>
              </div>
              <div className="filter_box">
                {selectedCategory && (
                  <div className="filter_item">
                    <div className="filter_patch">
                      <span className="filter_text">
                        {formatCategory(selectedCategory)}
                      </span>
                      <button
                        onClick={() => setSelectedCategory('')}
                        className="clear_filter"
                      >
                        <img
                          src="/images/icons/close.webp"
                          alt="Remove"
                          width="8"
                          height="8"
                        />
                      </button>
                    </div>
                  </div>
                )}
                {selectedCollection && (
                  <div className="filter_item">
                    <div className="filter_patch">
                      <span className="filter_text">
                        {formatCategory(selectedCollection)}
                      </span>
                      <button
                        onClick={() => setSelectedCollection('')}
                        className="clear_filter"
                      >
                        <img
                          src="/images/icons/close.webp"
                          alt="Remove"
                          width="8"
                          height="8"
                        />
                      </button>
                    </div>
                  </div>
                )}
                {/* NEW: Show "searchTerm" if applied */}
                {searchTerm && (
                  <div className="filter_item">
                    <div className="filter_patch">
                      <span className="filter_text">Search: {searchTerm}</span>
                      <button
                        onClick={() => setSearchTerm('')}
                        className="clear_filter"
                      >
                        <img
                          src="/images/icons/close.webp"
                          alt="Remove"
                          width="8"
                          height="8"
                        />
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
                    <label
                      className="product_radio"
                      htmlFor={`product_radio_${category}`}
                    >
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
                <div
                  ref={scrollDivRef}
                  className={`filter_label scrolldiv ${
                    isScrollActive ? 'scrollActive' : ''
                  }`}
                >
                  {availableCollections.map((collection) => (
                    <div key={collection} className="label_content">
                      <label
                        className="product_radio"
                        htmlFor={`collection_radio_${collection}`}
                      >
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
            .filter(
              ({ category }) =>
                !selectedCategory || category === selectedCategory
            )
            .map(({ category, products }) => (
              <div key={category} className="product_tile more_products" id={category}>
                <h2 className="product_title">{formatCategory(category)}</h2>
                <div className="product_container">
                  <div className="product_tile_box">
                    {products
                      // Collection Filter
                      .filter(
                        (product) =>
                          !selectedCollection ||
                          product.attributes.category.data.attributes.collectionName ===
                            selectedCollection
                      )
                      // NEW: Search Filter
                      .filter((product) => {
                        const productName =
                          product?.attributes?.subProductName?.toLowerCase() || '';
                        return productName.includes(searchTerm.toLowerCase());
                      })
                      .map((product) => {
                        const imageUrl =
                          product?.attributes?.details?.slider?.[0]?.image?.data?.attributes?.url ||
                          product?.attributes?.details?.slider?.[1]?.image?.data?.attributes?.url;

                        // Skip rendering if no valid image URL is available
                        if (!imageUrl) return null;

                        return (
                          <div key={product.id} className="tile_item">
                            <div className="product_img_box">
                              <Link
                                href={`/product/${
                                  products[0]?.attributes?.category?.data?.attributes?.product?.data?.attributes?.slug ||
                                  ''
                                }/${product.attributes.category.data.attributes.slug}/${
                                  product.attributes.slug
                                }`}
                              >
                                <img
                                  src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${imageUrl}`}
                                  alt={
                                    product?.attributes?.subProductName ||
                                    'Product Image'
                                  }
                                  width="584"
                                  height="511"
                                  className="tile_img"
                                />
                              </Link>
                            </div>
                            <div className="product_text">
                              <h3 className="item_title">
                                {product.attributes.subProductName}
                              </h3>
                              <div className="item_border"></div>
                              <div className="item_sub">
                                {
                                  product.attributes.category.data.attributes
                                    .collectionName
                                }
                              </div>
                            </div>
                            <span className="item_link">
                              <Link
                                href={`/product/${
                                  products[0]?.attributes?.category?.data?.attributes?.product?.data?.attributes?.slug ||
                                  ''
                                }/${product.attributes.category.data.attributes.slug}/${
                                  product.attributes.slug
                                }`}
                              >
                                KNOW MORE
                              </Link>
                            </span>
                          </div>
                        );
                      })}
                  </div>

                  <div className="product_link">
                    <Link
                      href={`/product/${
                        products[0]?.attributes?.category?.data?.attributes?.product?.data?.attributes?.slug ||
                        ''
                      }`}
                    >
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
