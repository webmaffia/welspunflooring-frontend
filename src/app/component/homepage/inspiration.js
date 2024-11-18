"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const InspirationSection = ({inspirationSection}) => {
  const inspirations = inspirationSection[0].content
  return (
    <section className="inspiration" data-section="inspiration">
      <div className="section_container inspire_title">
        <h2 className="diamond diamond_white">INSPIRATION</h2>
        <div class="title_container">
            <div class="subtitle_60">
                What spaces look <br />
                like when designed with <br />
                attention to detail
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
          prevEl: '.inspire-prev',
          nextEl: '.inspire-next',
        }}
      >
      

        
        {inspirations.map((inspiration, id) => (
          <div key={id}>
     
       
            {   
              <SwiperSlide>
              <picture>
                <source media="(max-width:540px)" srcSet=
                {`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${inspiration.mobileImages?.data?.attributes?.url}`}
                />
                <img 
                src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${inspiration.images.data.attributes.url}`}
                alt="" className="inspiration_img" width="1920" height="969" />
              </picture>
              <div className="section_container">
                {/* <div className="title_container">
                  <div className="subtitle_60">
                    What spaces look <br />
                    like when designed with <br />
                    attention to detail
                  </div>
                </div> */}
              </div>
            </SwiperSlide>
        }
          </div>
        ))}
        
        {/* Repeat SwiperSlide for other slides */}
    
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
