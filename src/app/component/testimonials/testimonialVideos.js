"use client";
import { useRef, useState } from "react";

const TestimonialVideo = () => {
  const videosRef = useRef([]);
  const [isPlayingStates, setIsPlayingStates] = useState(
    new Array(3).fill(false) // Initial state: all videos are not playing
  );

  const videoData = [
    {
      poster: "/images/testimonial/poster/img_1.webp",
      videoSrc: "https://www.youtube.com/embed/7mGkB7T3JWU?enablejsapi=1&rel=0&modestbranding=1",
      name: "Adnan",
      description: "Senior IT Consultant, SAPT Delhi",
    },
    {
      poster: "/images/testimonial/poster/img_2.webp",
      videoSrc: "https://www.youtube.com/embed/6ZyJwFoJBHw?enablejsapi=1&rel=0&modestbranding=1",
      name: "Mr. Sudhakar Manne",
      description: "Hyderabad City",
    },
    {
      poster: "/images/testimonial/poster/img_3.webp",
      videoSrc: "https://www.youtube.com/embed/IIogdF5ZHh4?enablejsapi=1&rel=0&modestbranding=1",
      name: "Maria D'Silva",
      description: "Principal, Infant Jesus School, Pune",
    },
  ];

  const handlePlayClick = (index) => {
    // Play the selected video
    const selectedPlayer = videosRef.current[index];
    if (selectedPlayer) {
      selectedPlayer.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
    }

    // Update playing state
    setIsPlayingStates((prevStates) =>
      prevStates.map((_, idx) => idx === index)
    );
  };

  return (
    <section data-section="testimonial_video" className="testimonial_video bg_f8">
      <div className="testimonial_heading">
        <div className="diamond_title">
          <h2 className="subtitle_45">Video Testimonials</h2>
        </div>
      </div>
      <div className="video_container">
        {videoData.map((video, index) => (
          <div className="video_detail" key={index} style={{ position: "relative" }}>
            <div className="video_content">
              {/* Poster Image */}
              {/* {!isPlayingStates[index] && (
                <img
                  src={video.poster}
                  alt="Video Poster"
                  className="poster_img"
                  style={{
                    width: "641px",
                    height: "897px",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 2,
                  }}
                />
              )} */}

              {/* Play Button */}
              {!isPlayingStates[index] && (
                <button
                  className="play_btn"
                  onClick={() => handlePlayClick(index)}
                  style={{
                    position: "absolute",
                    zIndex: 3,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    background: "none",
                    border: "none",
                  }}
                >
                  <img
                    src="/images/icons/play_button.webp"
                    alt="Play Button"
                    width="50"
                    height="50"
                  />
                </button>
              )}

              {/* Video Iframe */}
              <iframe
                ref={(el) => (videosRef.current[index] = el)}
                src={`${video.videoSrc}?enablejsapi=1`}
                width="641"
                height="897"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 1,
                }}
              ></iframe>
            </div>

            <div className="video_text">
              <div className="video_name">{video.name}</div>
              <div className="video_para">{video.description}</div>
              <div className="top_diamond"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialVideo;
