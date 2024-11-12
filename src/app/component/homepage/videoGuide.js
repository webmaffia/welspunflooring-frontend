// components/VideoGuide.js
"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useState, useRef } from 'react';
import 'swiper/swiper-bundle.css';

const VideoGuide = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef(null);

    const handlePlayVideo = (e) => {
        e.preventDefault();
        if (videoRef.current) {
            videoRef.current.play();
            setIsVideoPlaying(true);
        }
    };

    return (
        <section className="video_guide video_section" data-section="video_guide">
            <div className="products_container">
                <div className="swiper_container">
                    {/* Text Swiper */}
                    <Swiper
                        className="swiper_bg videoSwiper2"
                        navigation={{
                            prevEl: '.swiper-prev',
                            nextEl: '.swiper-next',
                        }}
                        pagination={{
                            el: '.swiper_pagination',
                            type: 'fraction',
                        }}
                        loop={true}
                        spaceBetween={100}
                        speed={1400}
                        simulateTouch={false}
                        modules={[Navigation, Pagination]}
                    >
                        <SwiperSlide>
                            <h3 className="subtitle_35">
                                This is what <br />
                                assembling a floor <br />
                                with Click N Lock Tiles <br />
                                within 24 hours <br />
                                looks like
                            </h3>
                            {/* <div className="product_cta">
                                <a href="#" className="view_link whiteBrd">
                                    <div className="link_cta">
                                        <div className="arrow_bg">
                                            <img src="images/icons/arrow-2.webp" alt="" width="20" height="17" />
                                        </div>
                                        <span>WATCH NOW</span>
                                    </div>
                                </a>
                            </div> */}
                        </SwiperSlide>
                    </Swiper>

                    {/* Video Swiper */}
                    <Swiper
                        className="videoSwiper swiper-no-swiping"
                        loop={true}
                        spaceBetween={100}
                        modules={[Navigation]}
                        navigation={{
                            prevEl: '.swiper-prev',
                            nextEl: '.swiper-next',
                        }}
                    >
                        <SwiperSlide>
                            <div className="video_player">
                                <img src="/images/video_poster.webp" alt="" className="poster" width="1130" height="666"
                                    style={{ display: isVideoPlaying ? 'none' : 'block' }}
                                />
                                <a
                                    href="#"
                                    className="click_btn"
                                    onClick={handlePlayVideo}
                                    style={{ display: isVideoPlaying ? 'none' : 'block' }}
                                >
                                    <img src="/images/icons/play_button.webp" alt="" width="109" height="109" />
                                </a>
                                <video
                                    ref={videoRef}
                                    width="1130"
                                    height="666"
                                    loop
                                    muted
                                    style={{ display: isVideoPlaying ? 'block' : 'none' }}
                                >
                                    <source src="/videos/Welspun_Flooring_Furniture.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    <h2 className="diamond diamond_blue">VIDEO GUIDE</h2>
                </div>
            </div>
            <div className="square_box_5"></div>
        </section>
    );
};

export default VideoGuide;
