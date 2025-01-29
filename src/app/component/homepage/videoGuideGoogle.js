import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Controller } from 'swiper/modules';
import { useState, useRef, useEffect } from 'react';

const VideoGuideGoogle = ({ pathname }) => {  // ✅ Fix: Properly destructure props
    const [videoSwiper, setVideoSwiper] = useState(null);
    const [videoSwiper2, setVideoSwiper2] = useState(null);
    const videoPlayersRef = useRef([]);
    const postersRef = useRef([]);
    const playButtonsRef = useRef([]);
    const ytPlayersRef = useRef([]);

    useEffect(() => {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        window.onYouTubeIframeAPIReady = () => {
            ytPlayersRef.current = ytPlayersRef.current.map((iframe, index) => {
                if (iframe) {
                    return new YT.Player(iframe, {
                        events: {
                            onReady: (event) => {
                                console.log(`YouTube player ${index} ready`, event);
                            },
                        },
                    });
                }
                return null;
            });
        };
    }, []);

    const handleSlideChange = () => {
        videoPlayersRef.current.forEach((video, index) => {
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
  
            if (ytPlayersRef.current[index]) {
                ytPlayersRef.current[index].seekTo(0);
                ytPlayersRef.current[index].pauseVideo();
            }
  
            if (postersRef.current[index]) {
                postersRef.current[index].style.display = 'block';
            }
            if (playButtonsRef.current[index]) {
                playButtonsRef.current[index].style.display = 'block';
            }
        });
    };

    return (
        <section className="video_guide video_section" data-section="video_guide">
            <div className="products_container">
                <div className="swiper_container">
                    <div className="swiper swiper_bg swiper-no-swiping videoSwiper2">
                        <div className="swiper-tool">
                            <div className="swiper_pagination"></div>
                            <div className="swiper_button">
                                <div className="swiper-prev swiper_arrow">
                                    <img src="/images/icons/arrow.webp" alt="" width="28" height="13" />
                                </div>
                                <div className="swiper-next swiper_arrow">
                                    <img src="/images/icons/arrow.webp" alt="" width="28" height="13" />
                                </div>
                            </div>
                        </div>
                        <Swiper
                            onSwiper={setVideoSwiper2}
                            modules={[Navigation, Pagination, Controller]}
                            loop
                            slidesPerView={1}
                            spaceBetween={100}
                            speed={1400}
                            navigation={{
                                prevEl: '.swiper-prev',
                                nextEl: '.swiper-next',
                            }}
                            pagination={{
                                el: '.swiper_pagination',
                                type: 'fraction',
                            }}
                            controller={{ control: videoSwiper }}
                            className="videoSwiper2"
                        >
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <h3 className="subtitle_35">
                                    Welspun Flooring carpeted 8 lakh square feet at Google Ananta Bangalore, the second-largest campus outside the U.S.
                                    </h3>
                                </div>
                            </SwiperSlide>

                            {/* ✅ Fix: Properly checking pathname */}
                           
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <h3 className="subtitle_35">
                                        We serviced Communique, Delhi, with our premium flooring solutions, ensuring the installation of the entire flooring in less than a day.
                                        </h3>
                                    </div>
                                </SwiperSlide>
                            
                        </Swiper>
                    </div>
                    <div className="swiper videoSwiper swiper-no-swiping">
                        <Swiper
                            onSwiper={setVideoSwiper}
                            modules={[Controller]}
                            loop
                            watchSlidesProgress
                            controller={{ control: videoSwiper2 }}
                            onSlideChange={handleSlideChange}
                            className="videoSwiper"
                        >
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="video_player">
                                        <iframe
                                            ref={(el) => (ytPlayersRef.current[0] = el)}
                                            width="560"
                                            height="315"
                                            src="https://www.youtube.com/embed/1L88iiVjAw8?enablejsapi=1&rel=0&controls=0"
                                            title="YouTube video player"
                                            style={{ border: 'none' }}
                                            allow="autoplay; encrypted-media"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            </SwiperSlide>

                            
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="video_player">
                                            <iframe
                                                ref={(el) => (ytPlayersRef.current[1] = el)}
                                                width="560"
                                                height="315"
                                                src="https://www.youtube.com/embed/xrwnZICiQb8?enablejsapi=1&rel=0&controls=0"
                                                title="YouTube video player"
                                                style={{ border: 'none' }}
                                                allow="autoplay; encrypted-media"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            
                        </Swiper>
                    </div>
                    <h2 className="diamond diamond_blue">VIDEO GALLERY</h2>
                </div>
            </div>
            <div className="square_box square_box_5"></div>
        </section>
    );
};

export default VideoGuideGoogle;
