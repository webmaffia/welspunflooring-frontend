import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Controller } from 'swiper/modules';
import { useState, useRef, useEffect } from 'react';

const VideoGuide = () => {
    const [videoSwiper, setVideoSwiper] = useState(null);
    const [videoSwiper2, setVideoSwiper2] = useState(null);
    const videoPlayersRef = useRef([]); // For HTML5 videos
    const postersRef = useRef([]);
    const playButtonsRef = useRef([]);
    const ytPlayersRef = useRef([]); // For YouTube players

    // Load YouTube IFrame API script
    useEffect(() => {
        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }

        window.onYouTubeIframeAPIReady = initializeYouTubePlayers;

        if (window.YT && window.YT.Player) {
            initializeYouTubePlayers();
        }
    }, []);

    // Reinitialize YouTube players on Swiper slide change or when the component re-renders
    const initializeYouTubePlayers = () => {
        ytPlayersRef.current = ytPlayersRef.current.map((iframe, index) => {
            if (iframe) {
                // Destroy existing player if it exists
                if (ytPlayersRef.current[index] && typeof ytPlayersRef.current[index].destroy === 'function') {
                    ytPlayersRef.current[index].destroy();
                }
                return new YT.Player(iframe, {
                    events: {
                        onReady: () => console.log(`YouTube player ${index} is ready`),
                        onError: (error) => console.error(`YouTube player ${index} error:`, error),
                    },
                });
            }
            return null;
        });
    };

    const retryPlayVideo = (player, retries = 3) => {
        if (retries <= 0) {
            console.error('Failed to play YouTube video after retries.');
            return;
        }

        if (player && typeof player.playVideo === 'function') {
            player.playVideo();
        } else {
            console.log('Retrying YouTube player initialization...');
            setTimeout(() => retryPlayVideo(player, retries - 1), 500); // Retry after 500ms
        }
    };

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

    const handlePlayClick = (index, isYouTube = false) => {
        const poster = postersRef.current[index];
        const playButton = playButtonsRef.current[index];

        if (isYouTube) {
            const selectedPlayer = ytPlayersRef.current[index];
            if (selectedPlayer) {
                retryPlayVideo(selectedPlayer);
            } else {
                console.error(`YouTube player not initialized for index ${index}`);
            }
        } else {
            const video = videoPlayersRef.current[index];
            if (video) {
                video.play();
            }
        }

        if (poster) poster.style.display = 'none';
        if (playButton) playButton.style.display = 'none';
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
                            {/* Add SwiperSlide content here */}
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
                            {/* Slide 1 */}
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="video_player">
                                        <img
                                            src="/images/video_poster.webp"
                                            alt=""
                                            className="poster"
                                            width="1130"
                                            height="666"
                                            ref={(el) => (postersRef.current[0] = el)}
                                        />
                                        <button
                                            className="click_btn"
                                            onClick={() => handlePlayClick(0, true)}
                                            ref={(el) => (playButtonsRef.current[0] = el)}
                                        >
                                            <img
                                                src="/images/icons/play_button.webp"
                                                alt=""
                                                width="109"
                                                height="109"
                                            />
                                        </button>
                                        <iframe
                                            ref={(el) => (ytPlayersRef.current[0] = el)}
                                            width="560"
                                            height="315"
                                            src="https://www.youtube.com/embed/ZH-ScwVBn3E?enablejsapi=1&rel=0&controls=0"
                                            title="YouTube video player"
                                            style={{ border: 'none' }}
                                            allow="autoplay; encrypted-media"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* Slide 2 */}
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="video_player">
                                        <img
                                            src="/images/Corporate-video-image-click-n-lock.webp"
                                            alt=""
                                            className="poster"
                                            width="1130"
                                            height="666"
                                            ref={(el) => (postersRef.current[1] = el)}
                                        />
                                        <button
                                            className="click_btn"
                                            onClick={() => handlePlayClick(1, true)}
                                            ref={(el) => (playButtonsRef.current[1] = el)}
                                        >
                                            <img
                                                src="/images/icons/play_button.webp"
                                                alt=""
                                                width="109"
                                                height="109"
                                            />
                                        </button>
                                        <iframe
                                            ref={(el) => (ytPlayersRef.current[1] = el)}
                                            width="560"
                                            height="315"
                                            src="https://www.youtube.com/embed/vACAsXiznNQ?enablejsapi=1&rel=0&controls=0"
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
                    <h2 className="diamond diamond_blue">VIDEO GUIDE</h2>
                </div>
            </div>
            <div className="square_box square_box_5"></div>
        </section>
    );
};

export default VideoGuide;
