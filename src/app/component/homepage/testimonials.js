// components/TestimonialSection.js
"use client"
import React, { useState } from 'react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

// Install modules


const testimonials = [
    {
        quote: "Redoing our flooring with Welspun Click N Lock Tiles for the homecoming of our baby was the best decision we've made. Hassle-free and time-saving.",
        name: "-Mr. & Mrs. Iyer",
        video: "assets/videos/Welspun_Flooring_Furniture.mp4",
        poster: "images/testimonial_poster.webp",
    },

    {
        quote: "2Redoing our flooring with Welspun Click N Lock Tiles for the homecoming of our baby was the best decision we've made. Hassle-free and time-saving.",
        name: "-Mr. & Mrs. Iyer",
        video: "assets/videos/Welspun_Flooring_Furniture.mp4",
        poster: "images/testimonial_poster.webp",
    },
    // Add more testimonials as needed
];

const TestimonialSection = () => {
   
    const [testimonialSwiper, setTestimonialSwiper] = useState(null);
  



    return (
        <section className="testimonial_section video_section cursor_img" data-section="testimonial_section">
            <a href="testimonial.php" className="view_link cursor_cta purpleBg">
                <div className="link_cta">
                    <div className="arrow_bg">
                        <img src="images/icons/arrow-2.webp" alt="" width="20" height="17" />
                    </div>
                    <span>READ ALL</span>
                </div>
            </a>
            <div className="products_container">
                <div className="section_container">
                    <h2 className="diamond diamond_blue">TESTIMONIALS</h2>
                    <div className="title_container">
                        <div className="subtitle_60">What people say</div>
                    </div>
                </div>
                <div className="swiper_container">
                    <Swiper
                        className="testimonial"
                        loop={true}
                        speed={1400}
                        onSwiper={setTestimonialSwiper}
                        onSlideChange={() => {
                            // Pause all videos when slide changes
                            const videos = document.querySelectorAll('.video_player video');
                            videos.forEach(video => {
                                video.pause();
                                video.currentTime = 0;
                            });
                        }}
                  
                        modules={[Navigation, Thumbs]}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="video_player">
                                    <img
                                        src={testimonial.poster}
                                        alt=""
                                        className="poster"
                                        width="1023"
                                        height="661"
                                    />
                                    <a href="" className="click_btn">
                                        <img src="images/icons/play_button.webp" alt="" width="109" height="109" />
                                    </a>
                                    <video width="1023" height="661" loop muted>
                                        <source src={testimonial.video} type="video/mp4" />
                                    </video>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Swiper
                        className="testimonial2 swiper_bg"
                        loop={true}
                        slidesPerView={1}
                        spaceBetween={100}
                        speed={1400}
                        thumbs={{ swiper: testimonialSwiper }}
               
                        navigation={{
                            prevEl: ".swiper-prev",
                            nextEl: ".swiper-next",
                        }}
                        modules={[Navigation, Thumbs]}
                    >
                         <div className="swiper-tool">
                        <div className="swiper_button">
                            <div className="swiper-prev swiper_arrow">
                                <img src="images/icons/arrow.webp" alt="Previous" width="28" height="13" />
                            </div>
                            <div className="swiper-next swiper_arrow">
                                <img src="images/icons/arrow.webp" alt="Next" width="28" height="13" />
                            </div>
                        </div>
                    </div>
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <p>{testimonial.quote}</p>
                                <h3 className="subtitle_50">{testimonial.name}</h3>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                   
                </div>
            </div>
            <img src="images/icons/inverted.webp" alt="" className="inverted_img" width="389" height="289" />
            <div className="square_box square_box_8"></div>
        </section>
    );
};

export default TestimonialSection;
