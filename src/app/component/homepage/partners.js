// components/PartnerSection.js
"use client"
import React from 'react';
import { Autoplay,FreeMode} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

// Install modules


const partners = [
  { img: 'images/partner/img-1.webp', alt: 'Partner 1' },
  { img: 'images/partner/img-2.webp', alt: 'Partner 2', down_img: true },
  { img: 'images/partner/img-3.webp', alt: 'Partner 3' },
  { img: 'images/partner/img-4.webp', alt: 'Partner 4', down_img: true },
  { img: 'images/partner/img-5.webp', alt: 'Partner 5' },
  { img: 'images/partner/img-4.webp', alt: 'Partner 6', down_img: true }
];

const PartnerSection = () => {
  return (
    <section className="partners_section" data-section="partners_section">
      <div className="diamond_title">
        <h2 className="diamond diamond_blue">PARTNERS</h2>
      </div>
      <Swiper
        className="partnerSwiper swiper-no-swiping"
        loop={true}
        freeMode={true}
        spaceBetween={0}
        grabCursor={true}
        slidesPerView={7}
        autoplay={{
          delay: 1,
          disableOnInteraction: true,
        }}
        modules={[Autoplay, FreeMode]}
        speed={5000}
        simulateTouch={false}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 50, simulateTouch: false },
          768: { slidesPerView: 2, spaceBetween: 40, simulateTouch: false },
          1024: { slidesPerView: 4, spaceBetween: 70, simulateTouch: false },
        }}
      >
        {partners.map((partner, index2) => (
          <SwiperSlide key={index2}>
            <img
              src={partner.img}
              alt={partner.alt}
              className={`partner_img ${partner.down_img ? 'down_img' : ''}`}
              width="284"
              height="284"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PartnerSection;
