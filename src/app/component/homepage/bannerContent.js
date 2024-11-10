// Import necessary Swiper components and styles

"use client";
import { Swiper, SwiperSlide } from 'swiper/react';




import { Thumbs,Autoplay } from 'swiper/modules'; // Ensure you're importing from modules
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-fade';
import { useState } from 'react';

const BannerContent = ({bannerData}) => {

   
    const [squareSwiper, setSquareSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
  

  
    const handleNavClick = (index) => {
      setActiveIndex(index);
      squareSwiper.slideToLoop(index); // Swiper's looped index adjustment
    };
  
    return (
      <>
        <div className="banner_content">
     
          <div
  className={`banner_heading ${bannerData[0].heading !== "Step Up" ? "fs_180_wb" : ""}`}
>
  {bannerData[0].heading}
</div>
          <Swiper
            className="contentSwiper"
            loop={true}
            slidesPerView={1}
            speed={1400}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Thumbs, Autoplay]}
            thumbs={{ swiper: squareSwiper }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >

{bannerData.map((item, index) => (
          <div key={index}>
       
            {/* Assuming each slide has an image */}
            {   <SwiperSlide>
              <h2 className="banner_sub_heading">{item.subheading}</h2>
            </SwiperSlide>}
          </div>
        ))}
         
           
          </Swiper>
        </div>
  
        {/* Navigation Banner */}
        <div className="nav_banner">
          <ul>
            {bannerData.map((navItem, index) => (
              <li
                key={index}
                data-index={index}
                className={activeIndex === index ? 'active' : ''}
                onClick={() => handleNavClick(index)}
              >
                {navItem.slideName}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  };

export default BannerContent;
