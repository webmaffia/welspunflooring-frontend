// components/BannerSwiper.js

"use client";
// components/BannerSwiper.js
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules'; // Ensure you're importing from modules
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-fade';
import Image from 'next/image';

const BannerSwiper = ({bannerData,setThumbsSwiper}) => {




  return (
    <div dir="rtl" className="swiper bannerSwiper">
      <Swiper
        loop={true}
        speed={2000}
        effect="fade"
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
      
        modules={[Autoplay, EffectFade]} // Use the imported modules here
        spaceBetween={30}
        slidesPerView={1}
        onSwiper={setThumbsSwiper}
      >
       

        {bannerData.map((bgslide, id) => (
          <div key={id}>
     
       
            {   <SwiperSlide>
          <picture>/
            <source media="(max-width:540px)" srcSet={bgslide?.slideMobileBg?.data?.attributes?.url} />
            <Image 
            
            src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${bgslide?.slideBg?.data?.attributes?.url}`} 
             alt="Home Banner" width={1920} height={1073} />
          </picture>
        </SwiperSlide>}
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSwiper;
