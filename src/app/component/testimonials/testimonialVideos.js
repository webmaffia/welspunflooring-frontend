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
      videoSrc: "https://www.youtube.com/embed/7mGkB7T3JWU",
      name: "Adnan",
      description: "Senior IT Consultant, SAPT Delhi",
    },
    {
      poster: "/images/testimonial/poster/img_2.webp",
      videoSrc: "https://www.youtube.com/embed/6ZyJwFoJBHw",
      name: "Mr. Sudhakar Manne",
      description: "Hyderabad City",
    },
    {
      poster: "/images/testimonial/poster/img_3.webp",
      videoSrc: "https://www.youtube.com/embed/IIogdF5ZHh4",
      name: "Maria D'Silva",
      description: "Principal, Infant Jesus School, Pune",
    },
  ];

  const handlePlayClick = (index) => {
    const selectedIframe = videosRef.current[index];
    if (selectedIframe) {
      const iframeSrc = selectedIframe.src;

      // Add autoplay to the selected video
      if (!iframeSrc.includes("?autoplay=1")) {
        selectedIframe.src += "?autoplay=1";
      }

      // Pause other videos
      videosRef.current.forEach((iframe, idx) => {
        if (iframe && idx !== index) {
          iframe.src = iframe.src.replace("?autoplay=1", ""); // Reset other videos
        }
      });

      // Update playing state
      setIsPlayingStates((prevStates) => {
        const newStates = prevStates.map((_, idx) => idx === index);
        return newStates;
      });
    }
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
                  alt=""
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
                src={video.videoSrc}
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
