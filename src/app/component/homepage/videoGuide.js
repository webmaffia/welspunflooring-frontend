import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Controller } from 'swiper/modules';
import { useState, useRef, useEffect } from 'react';

const VideoGuide = () => {
    const [videoSwiper, setVideoSwiper] = useState(null);
    const [videoSwiper2, setVideoSwiper2] = useState(null);
    const videoPlayersRef = useRef([]);
    const postersRef = useRef([]);
    const playButtonsRef = useRef([]);
    const ytPlayersRef = useRef([]);

    // Load YouTube IFrame API script
    useEffect(() => {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // Initialize YouTube players after API is ready
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
      // Reset all videos (HTML5 and YouTube) to the beginning and pause them
      videoPlayersRef.current.forEach((video, index) => {
          if (video) {
              video.pause(); // Pause HTML5 video
              video.currentTime = 0; // Reset time to the start
          }
  
          if (ytPlayersRef.current[index]) {
              // Use YT.Player API to reset YouTube videos
              ytPlayersRef.current[index].seekTo(0); // Reset time to the start
              ytPlayersRef.current[index].pauseVideo(); // Pause the video
          }
  
          // Reset poster and play button visibility
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
              // Post a message to the iframe to play the YouTube video
              selectedPlayer.contentWindow.postMessage(
                  '{"event":"command","func":"playVideo","args":""}', 
                  "*"
              );
              console.log(`Playing YouTube video at index ${index}`);
          } else {
              console.error(`YouTube player not initialized for index ${index}`);
          }
      } else {
          const video = videoPlayersRef.current[index];
          if (video) {
              video.play(); // Play HTML5 video directly
          }
      }
  
      // Hide the poster and play button after clicking
      if (poster) poster.style.display = 'none';
      if (playButton) playButton.style.display = 'none';
  
      // Update playing state if you want to track video playing state (optional)
    
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
                                    Welspun Flooring Corporate
                                    </h3>
                                    <div className="product_cta">
                                        <a href="" className="view_link whiteBrd">
                                            <div className="link_cta">
                                                <div className="arrow_bg">
                                                    <img src="/images/icons/arrow-2.webp" alt="" width="20" height="17" />
                                                </div>
                                                <span>WATCH NOW</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <h3 className="subtitle_35">
                                        This is what <br />
                                        assembling a floor <br />
                                        with Click N Lock Tiles <br />
                                        within 24 hours <br />
                                        looks like
                                    </h3>
                                    <div className="product_cta">
                                        <a href="" className="view_link whiteBrd">
                                            <div className="link_cta">
                                                <div className="arrow_bg">
                                                    <img src="/images/icons/arrow-2.webp" alt="" width="20" height="17" />
                                                </div>
                                                <span>WATCH NOW</span>
                                            </div>
                                        </a>
                                    </div>
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
                                            onClick={() => handlePlayClick(0, true)} // Specify isYouTube as true
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
                            
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="video_player">
                                        <img
                                            src="/images/click-n-lock.jpg"
                                            alt=""
                                            className="poster"
                                            width="1130"
                                            height="666"
                                            ref={(el) => (postersRef.current[1] = el)}
                                        />
                                        <button
                                            className="click_btn"
                                            onClick={() => handlePlayClick(1, true)} // Specify isYouTube as true
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
