"use client";
import { useEffect, useState } from 'react';
import { fetchProductSpecifications } from '../utils/budgetApi';

export default function BudgetCalculator() {
  const [products, setProducts] = useState([]);
  const [uniqueProducts, setUniqueProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCollection, setSelectedCollection] = useState('');
  const [selectedTile, setSelectedTile] = useState('');
  const [expectedArea, setExpectedArea] = useState('');
  const [result, setResult] = useState(null);

  useEffect(() => {
    async function getProducts() {
      const data = await fetchProductSpecifications();

      const uniqueProductsMap = {};
      const uniqueProductsList = data.filter(product => {
        const productName = product.attributes.category.data.attributes.product.data.attributes.product_name;
        if (!uniqueProductsMap[productName]) {
          uniqueProductsMap[productName] = true;
          return true;
        }
        return false;
      });

      setProducts(data);
      setUniqueProducts(uniqueProductsList);
    }
    getProducts();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setSelectedCollection('');
    setSelectedTile('');
    setResult(null); // Reset result on new product selection
  };

  const handleCalculate = () => {
    if (selectedProduct && selectedCollection && selectedTile && expectedArea) {
      const calculatedPrice = expectedArea * 279.99; // Example calculation
  
      const matchingImages = products.filter(
        (product) => product.attributes.subProductName === selectedTile
      );

      const selectedImageUrl = matchingImages.length > 0 
        ? matchingImages[0].attributes.details.slider[0]?.image?.data?.attributes?.url 
        : '';
      const productSlug = matchingImages.length > 0 
        ? matchingImages[0].attributes.category.data.attributes.product.data.attributes.slug 
        : '';
      const collectionSlug = matchingImages.length > 0 
        ? matchingImages[0].attributes.category.data.attributes.slug 
        : '';
      const tileSlug = matchingImages.length > 0 
        ? matchingImages[0].attributes.slug 
        : '';

      setResult({
        tileName: selectedTile,
        totalPrice: calculatedPrice,
        imageUrl: selectedImageUrl,
        exploreLink: `/products/${productSlug}/${collectionSlug}/${tileSlug}`, // Construct explore link
      });
    } else {
      console.log('Please fill all fields');
    }
  };

  return (
    <section data-section="budget_product" className="budget_product">
      <h2 className="subtitle_60">Choose product</h2>
      <div className="budget_container">
        <div className="budget_calculator">
          <ul className="budget_list">
            {uniqueProducts.map((product) => (
              <li
                key={product.id}
                className={`budget_tab ${selectedProduct?.id === product.id ? 'active' : ''}`}
                onClick={() => handleProductClick(product)}
              >
                {product.attributes.category.data.attributes.product.data.attributes.product_name}
              </li>
            ))}
          </ul>

          {selectedProduct && (
            <div className="budget_tile">
              <div className="budget_select">
                <div className="select_tiles">
                  <select
                    value={selectedCollection}
                    onChange={(e) => setSelectedCollection(e.target.value)}
                    className="choose_tiles"
                  >
                    <option value="" disabled>Choose Collection</option>
                    {[...new Set(products
                      .filter(
                        (p) =>
                          p.attributes.category.data.attributes.product.data.attributes.product_name ===
                          selectedProduct.attributes.category.data.attributes.product.data.attributes.product_name
                      )
                      .map((p) => p.attributes.category.data.attributes.collectionName)
                    )].map((collectionName, index) => (
                      <option key={index} value={collectionName}>
                        {collectionName}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="select_tiles">
                  <select
                    value={selectedTile}
                    onChange={(e) => setSelectedTile(e.target.value)} 
                    className="choose_tiles"
                  >
                    <option value="" disabled>Choose Tile</option>
                    {[...new Set(
                      products
                        .filter(
                          (p) =>
                            p.attributes.category.data.attributes.product.data.attributes.product_name ===
                            selectedProduct.attributes.category.data.attributes.product.data.attributes.product_name &&
                            p.attributes.category.data.attributes.collectionName === selectedCollection
                        )
                        .map((p) => p.attributes.subProductName)
                    )].map((subProductName, index) => (
                      <option key={index} value={subProductName}>
                        {subProductName}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="select_tiles select_area">
                  <select
                    value={expectedArea}
                    onChange={(e) => setExpectedArea(e.target.value)}
                    className="area_tiles"
                  >
                    <option value="" disabled>Expected Area (sq.ft)</option>
                    <option value="100">100 (sq.ft)</option>
                    <option value="200">200 (sq.ft)</option>
                    <option value="300">300 (sq.ft)</option>
                    <option value="400">400 (sq.ft)</option>
                  </select>
                </div>
              </div>

              <div className="budget_cta">
                <button onClick={handleCalculate} className="view_link purpleBg">
                  <div className="link_cta">
                    <div className="arrow_bg">
                      <img src="/images/icons/arrow-2.webp" alt="arrow" width="20" height="17" />
                    </div>
                    <span>CALCULATE <br />NOW</span>
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>

        {result && (
          <div className="budget_result">
            <div className="result_container">
              <img
                src={`https://staging-cms.welspunflooring.com${result.imageUrl}`}
                alt={result.tileName}
                className="tile_img"
                width="225"
                height="236"
              />
              <div className="tile_text">{result.tileName}</div>
              <div className="tile_box">
                <div className="tile_detail">
                  <div className="tile_text">SOFT</div>
                  <div className="tile_number">1033</div>
                </div>
                <div className="tile_detail">
                  <div className="tile_text">TOTAL PRICE</div>
                  <div className="tile_number">{Math.round(result.totalPrice)}/-</div>
                  <p class="costNote">Cost is indicative of the general price range, but not the exact cost</p>
                </div>
              </div>
              <div className="tile_arrow">
                <a href="#contactForm" className="view_link whiteBrd">
                  <div className="link_cta">
                    <div className="arrow_bg">
                      <img src="/images/icons/arrow-2.webp" alt="arrow" width="20" height="17" />
                    </div>
                    <span>MAKE AN ENQUIRY</span>
                  </div>
                </a>
                <a href={result.exploreLink} className="view_link whiteBrd">
                  <div className="link_cta">
                    <div className="arrow_bg">
                      <img src="/images/icons/arrow-2.webp" alt="arrow" width="20" height="17" />
                    </div>
                    <span>EXPLORE</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
