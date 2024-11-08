"use client"
import { useRouter } from 'next/navigation'; // Change to next/navigation
import { useState } from 'react';

const ProductListing = ({ productsByCategory }) => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCollection, setSelectedCollection] = useState(null);

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    setSelectedCollection(null); // Reset collection on category change
    updateURL(category, null);
  };

  const handleCollectionFilter = (collection) => {
    setSelectedCollection(collection);
    updateURL(selectedCategory, collection);
  };

  const updateURL = (category, collection) => {
    const path = collection ? `/products/${category}/${collection}` : `/products/${category}`;
    router.push(path);
  };

  return (
    <section data-section="" className="product_listing">
      <div className="product_content">
        <aside>
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

        {/* Product Listing */}
        <div className="product_list">
          {productsByCategory
            .filter(({ category }) => !selectedCategory || category === selectedCategory)
            .map(({ category, products }) => (
              <div key={category} className="product_tile more_products" id={category}>
                <h2 className="product_title">{category}</h2>
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
                            <Link href={`/products/${selectedCategory}/${selectedCollection || product.attributes.category.data.attributes.collectionName}/${product.attributes.slug}`}>
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
                            <Link href={`/products/${selectedCategory}/${selectedCollection || product.attributes.category.data.attributes.collectionName}/${product.attributes.slug}`}>
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
                    <Link href={`/products/${selectedCategory}`}>
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

export default ProductListing;
