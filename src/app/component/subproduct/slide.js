"use client";

import React, { useState } from 'react';

const ProductSlides = ({ images }) => {
  const [activeImage, setActiveImage] = useState('img-1');

  // Log to verify if images are being received correctly
  

  const sliderImages =  images.attributes.details.slider || [];

  const handleImageClick = (imgId) => {
    setActiveImage(imgId);
  };

  return (
    <div className="product_slides">
      <div className="our_product">
        <div className="our_product_content">
          {sliderImages.length > 0 ? (
            sliderImages.map((image, index) => {
              const imageUrl = `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${image?.image?.data?.attributes?.url}`;
            

              return (
                <div
                  key={index}
                  data-img={`img-${index + 1}`}
                  className={`swiper-slide image_item ${activeImage === `img-${index + 1}` ? 'active' : ''}`}
                  onClick={() => handleImageClick(`img-${index + 1}`)}
                >
                  {imageUrl ? (
                    <img 
                      src={imageUrl}
                      alt="" 
                      width="800" 
                      height="843" 
                    />
                  ) : (
                    <p>No Image Available</p>
                  )}
                </div>
              );
            })
          ) : (
            <p>No images found.</p>
          )}
        </div>
      </div>

      <div className="product_main_img">
        {sliderImages.map((image, index) => {
          const imageUrl = `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${image?.image?.data?.attributes?.url}`;

          return (
            <div
              key={index}
              className={`product_view ${activeImage === `img-${index + 1}` ? 'active' : ''}`}
              id={`img-${index + 1}`}
            >
              {imageUrl ? (
                <img 
                  src={imageUrl} 
                  alt="" 
                  width="800" 
                  height="843" 
                />
              ) : (
                <p>No Image Available</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSlides;
