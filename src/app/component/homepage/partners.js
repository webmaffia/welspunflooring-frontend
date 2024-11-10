"use client";
import React from 'react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

const PartnerSection = ({ partnerData }) => {
  // Check if partnerData and partnerLogo exist and have elements
  if (!partnerData || !partnerData.partnerLogo || partnerData.partnerLogo.length === 0) {
    return <p>No partners data available.</p>;
  }

  return (
    <section className="partners_section" data-section="partners_section">
      <div className="diamond_title">
        <h2 className="diamond diamond_blue">{partnerData.sectionName}</h2>
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
        {partnerData.partnerLogo.map((partner, index) => {
          const imageUrl = partner.images?.data?.attributes?.url;
          if (!imageUrl) {
            return null; // Skip if the image URL is missing
          }
          return (
            <SwiperSlide key={partner.id || index}>
              <img
                src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${imageUrl}`}
                alt={partner.images.data.attributes.alternativeText || 'Partner logo'}
                className={`partner_img ${index % 2 !== 0 ? 'down_img' : ''}`} // Add `down_img` to every alternate slide
                width="284"
                height="284"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default PartnerSection;
