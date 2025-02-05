// Import necessary Swiper components and styles

"use client";
import { Swiper, SwiperSlide } from 'swiper/react';

import { useApi } from '@/app/context/ApiContext';




import { Thumbs,Autoplay } from 'swiper/modules'; // Ensure you're importing from modules
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-fade';
import { useState } from 'react';

const BannerContent = ({bannerData,shouldHideSection}) => {

  const { showBannerContent } = useApi();
   
    const [squareSwiper, setSquareSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
  

  
    const handleNavClick = (index) => {
      setActiveIndex(index);
      squareSwiper.slideToLoop(index); // Swiper's looped index adjustment
  
    };
  
    return (
      <>
        <div className="banner_content">
     
 
          <Swiper
            className="contentSwiper"
            loop={true}
            slidesPerView={1}
            speed={2000}
            autoplay={{
              delay: 2000,
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
              <div
  className={`banner_heading ${item.modifier}`}
>
  {item.heading}
</div>
              <div className="banner_sub_heading">{item.subheading}</div>
            </SwiperSlide>}
          </div>
        ))}
         
           
          </Swiper>
        </div>
  
        {!shouldHideSection && 
        
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
        }

        {/* Navigation Banner */}
     
      </>
    );
  };

export default BannerContent;
