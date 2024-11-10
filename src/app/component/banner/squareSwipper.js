"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards } from 'swiper/modules'; // Import necessary modules
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-cards';
import Image from 'next/image';

const SquareSwiper = ({ setThumbsSwiper,bannerData }) => {
  return (
    <div className="square_banner">
      <Swiper
        className='squareSwiper'
        effect="cards"
        grabCursor={true}
        loop={true}
        speed={2000}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectCards]} // Include the modules
        onSwiper={setThumbsSwiper} // Use the thumbs option to link with the BannerSwiper
      >

{bannerData.map((squareImage, id) => (
          <div key={id}>
       
            {  <SwiperSlide>
          <img 
              src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${squareImage?.slideImage?.data?.attributes?.url}`} 
 
            alt="Home" width={553} height={554} />
        </SwiperSlide>}
          </div>
        ))}
        
     
      </Swiper>
    </div>
  );
};

export default SquareSwiper;
