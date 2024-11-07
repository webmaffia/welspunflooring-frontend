// app/products/page.js
import React from 'react';

async function fetchProductSpecifications() {
  const res = await fetch('https://welspun-cms.webmaffia.com/api/product-specifications?populate[category][populate]=product&populate[details][populate]=slider.image');
  const data = await res.json();
  return data.data;
}

const ProductsPage = async () => {
  const productSpecifications = await fetchProductSpecifications();

  // Get all distinct product categories (main products)
  const categories = productSpecifications.reduce((acc, product) => {
    const categoryName = product.attributes.category.data.attributes.product.data.attributes.product_name;
    if (!acc.includes(categoryName)) {
      acc.push(categoryName);
    }
    return acc;
  }, []);

  // Create a category map with filtered products for each category
  const productsByCategory = categories.map(category => {
    const filteredProducts = productSpecifications.filter((product) => 
      product.attributes.category.data.attributes.product.data.attributes.product_name === category
    );
    return { category, products: filteredProducts };
  });

  return (
    // <div>
    //   {productsByCategory.map(({ category, products }) => (
    //     <div key={category}>
    //       <h1>{category}</h1>
    //       <div className="products-list">
    //         {products.map((product) => (
    //           <div key={product.id} className="product-card">
    //             <h2>{product.attributes.subProductName}</h2>
    //             <p>{product.attributes.category.data.attributes.collectionName}</p>
    //             <p>Product: {product.attributes.category.data.attributes.product.data.attributes.product_name}</p>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   ))}
    // </div>

    <section data-section="" class="product_listing">
    <div class="product_filters">
        <div class="filter_span">
            <span>Filter</span>
        </div>
        <div class="product_sort">
            <span>SORT BY</span>
            <span class="select">
                <select name="" id="">
                    <option value="">NEW ARRIVAL</option>
                    <option value="">POPULARITY</option>
                    <option value="">RATING</option>
                    <option value="">LOW TO HIGHT</option>
                    <option value="">HIGHT TO LOW</option>
                </select>
            </span>
        </div>
    </div>
    <div class="product_content">
   


        <div class="product_list">
        {productsByCategory.map(({ category, products }) => (
  <div key={category} className="product_tile more_products" id={category}>
    <h2 className="product_title">{category}</h2>
    <div className="product_container">
      <div className="product_tile_box">
        {products.map((product) => (
          <div key={product.id} className="tile_item">
            <div className="product_img_box">
              <a href={`/product-detail/${product.id}`}>
                <img
                  src={product.attributes.imageUrl || 'assets/images/product_list/img-5.webp'}
                  alt={product.attributes.subProductName}
                  width="584"
                  height="511"
                  className="tile_img"
                />
              </a>
              <a href="" className="degree_360">
                <img src="assets/images/icons/360.webp" alt="360 view" width="48" height="53" />
              </a>
              <a href="" className="heart_svg">
                <span>&#10084;</span> {/* Replace with SVG icons */}
              </a>
              {product.attributes.isNewArrival && (
                <div className="product_label">NEW <br />ARRIVAL</div>
              )}
            </div>
            <div className="product_text">
              <div className="item_title">{product.attributes.subProductName}</div>
              <div className="item_border"></div>
              <div className="item_sub">{product.attributes.subProductCategory}</div>
            </div>
            <span className="item_link">
              <a href={`/product-detail/${product.id}`}>KNOW MORE</a>
            </span>
          </div>
        ))}
      </div>
      <div className="product_link">
        <a href="#" className="view_product">VIEW MORE</a>
        <a href={`/product/${category}`}>EXPLORE {category.toUpperCase()}</a>
      </div>
    </div>
  </div>
))}

        </div>
    </div>
</section>
  );
};

export default ProductsPage;
