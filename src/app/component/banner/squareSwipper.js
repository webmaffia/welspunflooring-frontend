"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards, Thumbs } from 'swiper/modules'; // Import necessary modules
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-cards';
import Image from 'next/image';

const SquareSwiper = ({ thumbsSwiper,bannerData }) => {
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
        modules={[Autoplay, EffectCards, Thumbs]} // Include the modules
        thumbs={{ swiper: thumbsSwiper }} // Use the thumbs option to link with the BannerSwiper
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
