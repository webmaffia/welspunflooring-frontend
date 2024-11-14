// components/TestimonialSection.js
"use client"
import React, { useState } from 'react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

const TestimonialSection = ({testimonial}) => {
    const [testimonialSwiper, setTestimonialSwiper] = useState(null);
    const testimonials = testimonial[0];

    return (
        <section className="testimonial_section video_section cursor_img" data-section="testimonial_section">
            {/* <a href="testimonial.php" className="view_link cursor_cta purpleBg">
                <div className="link_cta">
                    <div className="arrow_bg">
                        <img src="images/icons/arrow-2.webp" alt="" width="20" height="17" />
                    </div>
                    <span>READ ALL</span>
                </div>
            </a> */}
            <div className="products_container">
                <div className="section_container">
                    <h2 className="diamond diamond_blue">{testimonials.sectionName}</h2>
                    <div className="title_container">
                        <div className="subtitle_60">What people say</div>
                    </div>
                </div>
                <div className="swiper_container">
                    <Swiper
                        className="testimonial"
                        loop={true}
                        speed={1400}
                        autoplay={{
                            delay: 3000, // Auto-play delay in milliseconds
                            disableOnInteraction: false, // Keeps autoplay running even after manual interaction
                        }}
                        // pagination={{
                        //     clickable: true, // Enable pagination control click
                        //     type: 'fraction', // Show fraction pagination (e.g., "1/10")
                        // }}
                        onSwiper={setTestimonialSwiper}
                        onSlideChange={() => {
                            // Pause all videos when slide changes
                            const videos = document.querySelectorAll('.video_player video');
                            videos.forEach(video => {
                                video.pause();
                                video.currentTime = 0;
                            });
                        }}
                        modules={[Navigation, Pagination, Thumbs]} // Add Pagination here
                        simulateTouch={false} // Disable mouse swipe
                    >
                        {testimonials.testimonial.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="video_player">
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${testimonial.image.data.attributes.url}`}
                                        alt=""
                                        className="poster"
                                        width="1023"
                                        height="661"
                                    />
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
                        simulateTouch={false} // Disable mouse swipe
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
                        {testimonials.testimonial.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <p>
                                    {testimonial.description.map((item, index) => (
                                        <div key={index}>
                                            {item.children.map((child, childIndex) => (
                                                <span key={childIndex}>{child.text}</span>
                                            ))}
                                        </div>
                                    ))}
                                </p>
                                <h3 className="subtitle_50">{testimonial.testimonialName}</h3>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <img src="/images/icons/inverted.webp" alt="" className="inverted_img" width="389" height="289" />
            <div className="square_box square_box_8"></div>
        </section>
    );
};

export default TestimonialSection;
