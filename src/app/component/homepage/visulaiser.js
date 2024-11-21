"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,EffectFade,Navigation, Pagination, Thumbs } from 'swiper/modules';
import { useState,useEffect } from 'react';
import 'swiper/swiper-bundle.css';

const Visualiser = ({visuliserData}) => {

  const content = visuliserData[0]
  const slides = visuliserData[0].images

  
    return (
        <section className="visualize" data-section="visualize">
        <Swiper
          className="visualSwiper"
          spaceBetween={30}
          effect="fade"
          speed={1000}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
     
          modules={[Autoplay, EffectFade]}
        >

{slides.map((slide, index) => (
          <div key={index}>
       
            {/* Assuming each slide has an image */}
        

               { <SwiperSlide>
            <picture>
              <source media="(max-width:540px)" srcSet={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${slide?.mobileImages?.data?.attributes?.url}`} />
              <img src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${slide?.images?.data?.attributes?.url}`} alt="" width="1920" height="969" />
            </picture>
          </SwiperSlide>
}
          </div>
        ))}
          {/* <SwiperSlide>
            <picture>
              <source media="(max-width:540px)" srcSet="images/visualizer/visualizer-mob.webp" />
              <img src="images/visualizer/visualizer.webp" alt="" width="1920" height="969" />
            </picture>
          </SwiperSlide>
  
          <SwiperSlide>
            <picture>
              <source media="(max-width:540px)" srcSet="images/visualizer/visualizer-mob.webp" />
              <img src="images/visualizer/visualizer_2.webp" alt="" width="1920" height="969" />
            </picture>
          </SwiperSlide>
  
          <SwiperSlide>
            <picture>
              <source media="(max-width:540px)" srcSet="images/visualizer/visualizer-mob.webp" />
              <img src="images/visualizer/visualizer_3.webp" alt="" width="1920" height="969" />
            </picture>
          </SwiperSlide>
  
          <SwiperSlide>
            <picture>
              <source media="(max-width:540px)" srcSet="images/visualizer/visualizer-mob.webp" />
              <img src="images/visualizer/visualizer_4.webp" alt="" width="1920" height="969" />
            </picture>
          </SwiperSlide> */}
  
       
        </Swiper>
  
        <div className="section_container visualize_section">
          <h2 className="diamond diamond_blue">{content.sectionName}</h2>
          <div className="title_container">
            <h3 className="subtitle_60">
            {content.heading}
            </h3>
            <p>
             {content.description}
            </p>
            {/* <div className="visualize_container">
              <a href="">
                <img src="/images/icons/camera.webp" alt="" width="51" height="45" />
                <span>TAKE PHOTO</span>
              </a>
              <form action="upload.php" method="post" encType="multipart/form-data">
                <a href="#" onClick={() => document.getElementById('fileToUpload').click()}>
                  <img src="/images/icons/gallery.webp" alt="" width="51" height="45" />
                  <span>PHOTO LIBRARY</span>
                </a>
                <input type="file" name="fileToUpload" id="fileToUpload" style={{ display: 'none' }} onChange={(e) => e.target.form.submit()} />
              </form>
              <a href="">
                <img src="/images/icons/panorama.webp" alt="" width="51" height="45" />
                <span>UPLOAD A PANORAMA SHOT</span>
              </a>
            </div> */}
          </div>
        </div>
        <div className="square_box square_box_6"></div>
      </section>
    );
  };
  
  export default Visualiser;