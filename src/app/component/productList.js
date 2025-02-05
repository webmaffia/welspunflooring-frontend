"use client";
import React, { useRef, useState, useEffect,useLayoutEffect  } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const ProductsList = ({ productsByCategory }) => {
  // 1. Rotating placeholder logic
  const placeholders = ["Silver Striped Oak", "Bianco Travertine", "Passage-Mist"];
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const currentPlaceholder = placeholders[placeholderIndex];

  // 2. Next.js hooks for filters
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCollection, setSelectedCollection] = useState("");
  const [expandedCategories, setExpandedCategories] = useState({});

  // 3. Search term state
  const [searchTerm, setSearchTerm] = useState("");

  // const scrollDivRef = useRef(null);
  // const [isScrollActive, setIsScrollActive] = useState(false);

  // 4. On mount, read category/collection from URL
  useEffect(() => {
    const categoryFromUrl = searchParams.get("category") || "";
    const collectionFromUrl = searchParams.get("collection") || "";

    setSelectedCategory(categoryFromUrl);
    setSelectedCollection(collectionFromUrl);

    // Expand category view if category is selected
    if (categoryFromUrl) {
      setExpandedCategories((prev) => ({
        ...prev,
        [categoryFromUrl]: true,
      }));
    }
  }, [searchParams]);

  // 5. Re-check scroll height when relevant states change
  // useLayoutEffect(() => {
  //   // Delay measurement to ensure DOM updates have rendered.
  //   const timer = setTimeout(() => {
  //     if (scrollDivRef.current) {
  //       setIsScrollActive(scrollDivRef.current.offsetHeight > 600);
  //     }
  //   }, 100); // 100ms delay (adjust if needed)

  //   return () => clearTimeout(timer);
  // }, [selectedCategory, selectedCollection, searchTerm, productsByCategory]);

  // Toggle "view more" logic for category expansions
  const toggleViewMore = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  // Handlers for filters
  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    setSelectedCollection("");
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  
    // Update the URL without a navigation event
    const url = new URL(window.location.href);
    url.searchParams.set("category", category);
    url.searchParams.delete("collection"); // Clear collection if needed
    window.history.replaceState(null, "", url.toString());

    if (productListingRef.current) {
      const elementPosition =
        productListingRef.current.getBoundingClientRect().top +
        window.pageYOffset;
      // Convert 7.708vw to pixels
      const offsetInPixels = window.innerWidth * (7.708 / 100);
      const offsetPosition = elementPosition - offsetInPixels;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const productListingRef = useRef(null);
  
  const handleCollectionFilter = (collection) => {
    setSelectedCollection(collection);
    setExpandedCategories((prev) => ({
      ...prev,
      [selectedCategory]: true,
    }));

    // Update the URL without a navigation event
    const url = new URL(window.location.href);
    url.searchParams.set("category", selectedCategory);
    url.searchParams.set("collection", collection);
    window.history.replaceState(null, "", url.toString());

    // Scroll to the product listing section with a 7.708vw offset
    if (productListingRef.current) {
      const elementPosition =
        productListingRef.current.getBoundingClientRect().top +
        window.pageYOffset;
      // Convert 7.708vw to pixels
      const offsetInPixels = window.innerWidth * (7.708 / 100);
      const offsetPosition = elementPosition - offsetInPixels;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };


  const clearFilters = () => {
    setSelectedCategory("");
    setSelectedCollection("");
    setSearchTerm(""); // clear the search term
    router.push("/product"); // Adjust path if needed
  };

  // Show collections for the currently selected category
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

  // Helper: Replace hyphens with spaces
  const formatCategory = (category) => category.replace(/-/g, " ");

  return (
    <section className="product_listing" ref={productListingRef}>
      <div className="product_filters">
        <div className="filter_span">
            <span>Search</span>
        </div>
        <div className="filter_sub_category">
     
            <input
              type="text"
              placeholder={currentPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="productSearch"
            />
          </div>
    </div>
      <div className="product_content">
        <aside>
          {/* Search Field with rotating placeholder */}
          <div className="filter_sub_category">
            <div className="filter_title productSearchTitle">SEARCH PRODUCTS</div>
            <input
              type="text"
              placeholder={currentPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="productSearch"
            />
          </div>

          {/* Show active filters */}
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
                      <span className="filter_text">{formatCategory(selectedCategory)}</span>
                      <button
                        onClick={() => setSelectedCategory("")}
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
                      <span className="filter_text">{formatCategory(selectedCollection)}</span>
                      <button
                        onClick={() => setSelectedCollection("")}
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
                {/* Show "searchTerm" if applied */}
                {searchTerm && (
                  <div className="filter_item">
                    <div className="filter_patch">
                      <span className="filter_text">Search: {searchTerm}</span>
                      <button
                        onClick={() => setSearchTerm("")}
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
                <div
                  // ref={scrollDivRef}
                  className="filter_label scrolldiv"
                >
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
            // First, filter out categories if a category is chosen
            .filter(({ category }) => !selectedCategory || category === selectedCategory)
            // Now map each category
            .map(({ category, products }) => {
              // 1. Filter products by collection
              //    and by search in both subProductName and collectionName
              const filteredProducts = products
                .filter(
                  (product) =>
                    !selectedCollection ||
                    product.attributes.category.data.attributes.collectionName ===
                      selectedCollection
                )
                .filter((product) => {
                  const productName = product?.attributes?.subProductName?.toLowerCase() || "";
                  const collectionName =
                    product?.attributes?.category?.data?.attributes?.collectionName?.toLowerCase() ||
                    "";
                  const searchValue = searchTerm.toLowerCase();

                  // Return true if EITHER the product name OR the collection name matches
                  return productName.includes(searchValue) || collectionName.includes(searchValue);
                });

              // 2. If no products remain, hide the entire block
              if (filteredProducts.length === 0) {
                return null;
              }

              // 3. Otherwise, render this category block
              return (
                <div key={category} className="product_tile more_products" id={category}>
                  <h2 className="product_title">{formatCategory(category)}</h2>
                  <div className="product_container">
                    <div className="product_tile_box">
                      {filteredProducts.map((product) => {
                        const imageUrl =
                          product?.attributes?.details?.slider?.[0]?.image?.data?.attributes?.url ||
                          product?.attributes?.details?.slider?.[1]?.image?.data?.attributes?.url;

                        // Skip if no valid image URL
                        if (!imageUrl) return null;

                        return (
                          <div key={product.id} className="tile_item">
                            <div className="product_img_box">
                              <Link
                                href={`/product/${
                                  products[0]?.attributes?.category?.data?.attributes?.product?.data?.attributes?.slug ||
                                  ""
                                }/${product.attributes.category.data.attributes.slug}/${
                                  product.attributes.slug
                                }`}
                              >
                                <img
                                  src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${imageUrl}`}
                                  alt={product?.attributes?.subProductName || "Product Image"}
                                  width="584"
                                  height="511"
                                  className="tile_img"
                                />
                              </Link>
                            </div>
                            <div className="product_text">
                              <h3 className="item_title">{product.attributes.subProductName}</h3>
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
                                  ""
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
                          ""
                        }`}
                      >
                        EXPLORE {(category || "Category").toUpperCase()}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default ProductsList;
