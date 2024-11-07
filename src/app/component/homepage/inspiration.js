"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const InspirationSection = () => {
  return (
    <section className="inspiration" data-section="inspiration">
      <div className="section_container inspire_title">
        <h2 className="diamond diamond_white">INSPIRATION</h2>
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
          prevEl: '.inspire-prev',
          nextEl: '.inspire-next',
        }}
      >
        <SwiperSlide>
          <picture>
            <source media="(max-width:540px)" srcSet="images/inspirational/inspiration-mob.webp" />
            <img src="images/inspirational/img-1.webp" alt="" className="inspiration_img" width="1920" height="969" />
          </picture>
          <div className="section_container">
            <div className="title_container">
              <div className="subtitle_60">
                What spaces look <br />
                like when designed with <br />
                attention to detail
              </div>
            </div>
          </div>
        </SwiperSlide>
        
        {/* Repeat SwiperSlide for other slides */}
        <SwiperSlide>
          <picture>
            <source media="(max-width:540px)" srcSet="images/inspirational/inspiration-mob.webp" />
            <img src="images/inspirational/img-2.webp" alt="" className="inspiration_img" width="1920" height="969" />
          </picture>
          <div className="section_container">
            <div className="title_container">
              <div className="subtitle_60">
                What spaces look <br />
                like when designed with <br />
                attention to detail
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Add more SwiperSlides as needed */}
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

export default InspirationSection;
