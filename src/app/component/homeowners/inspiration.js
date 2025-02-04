"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const LifestyleSection = () => {
  return (
    <section className="inspiration" data-section="inspiration">
      <div className="section_container inspire_title">
        <h2 className="diamond diamond_white">LIFESTYLE</h2>
        <div className="title_container">
          <div className="subtitle_60">
            Anti-skid, scratch & <br />
            stain-resistant tiles <br />
            designed for endless fun <br />
            and comfortable living!
          </div>
        </div>
      </div>

      <Swiper
        className="inspireSwiper swiper-no-swiping"
        modules={[Navigation, Autoplay]}
        loop={true}
        slidesPerView={1}
        speed={1400}
        simulateTouch={false}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".inspire-prev",
          nextEl: ".inspire-next",
        }}
      >
        <SwiperSlide>
          <picture>
            <source
              media="(max-width:540px)"
              srcSet="images/homeowners/lifestyle/mob_img_1.webp"
            />
            <img
              src="images/homeowners/lifestyle/img_1.webp"
              alt="Lifestyle Image 1"
              className="inspiration_img"
              width="1920"
              height="969"
            />
          </picture>
        </SwiperSlide>

        <SwiperSlide>
          <picture>
            <source
              media="(max-width:540px)"
              srcSet="images/homeowners/lifestyle/mob_img_2.webp"
            />
            <img
              src="images/homeowners/lifestyle/img_2.webp"
              alt="Lifestyle Image 2"
              className="inspiration_img"
              width="1920"
              height="969"
            />
          </picture>
        </SwiperSlide>
      </Swiper>

      <div className="swiper_button">
        <div className="inspire-prev swiper_arrow">
          <img src="images/icons/arrow.webp" alt="Previous" width="28" height="13" />
        </div>
        <div className="inspire-next swiper_arrow">
          <img src="images/icons/arrow.webp" alt="Next" width="28" height="13" />
        </div>
      </div>

      <div className="square_box square_box_9"></div>
    </section>
  );
};

export default LifestyleSection;
