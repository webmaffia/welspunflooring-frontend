// components/ProductFilter.js
import React from 'react';

const ProductFilter = ({ handleCategoryChange }) => (
  <aside>
    <div className="filter_category">
      <div className="filter_sub_category">
        <div className="filter_title">PRODUCTS</div>
        <div className="filter_label">
          <div className="label_content">
            <label className="product_radio" htmlFor="product_radio_1">
              <input
                id="product_radio_1"
                className="input"
                type="radio"
                name="product_radio"
                onChange={() => handleCategoryChange('CLICK N LOCK® TILES')}
              />
              <span>CLICK N LOCK® TILES</span>
            </label>
          </div>
          <div className="label_content">
            <label className="product_radio" htmlFor="product_radio_2">
              <input
                id="product_radio_2"
                className="input"
                type="radio"
                name="product_radio"
                onChange={() => handleCategoryChange('CARPET TILES')}
              />
              <span>CARPET TILES</span>
            </label>
          </div>
          <div className="label_content">
            <label className="product_radio" htmlFor="product_radio_3">
              <input
                id="product_radio_3"
                className="input"
                type="radio"
                name="product_radio"
                onChange={() => handleCategoryChange('WALL TO WALL')}
              />
              <span>WALL TO WALL</span>
            </label>
          </div>
          <div className="label_content">
            <label className="product_radio" htmlFor="product_radio_4">
              <input
                id="product_radio_4"
                className="input"
                type="radio"
                name="product_radio"
                onChange={() => handleCategoryChange('GREENS')}
              />
              <span>GREENS</span>
            </label>
          </div>
          <div className="label_content">
            <label className="product_radio" htmlFor="product_radio_5">
              <input
                id="product_radio_5"
                className="input"
                type="radio"
                name="product_radio"
                onChange={() => handleCategoryChange('MULTISTILE™')}
              />
              <span>MULTISTILE™</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </aside>
);

export default ProductFilter;
