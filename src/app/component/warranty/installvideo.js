"use client"
import { useRef, useState } from 'react';

export default function InstallVideo() {
  const videoRef = useRef(null); // Reference for the video element
  const [isPlaying, setIsPlaying] = useState(false); // State to manage play button and poster visibility

  const handlePlay = (e) => {
    e.preventDefault();

    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true); // Hide play button and poster
    }
  };

  return (
    <div className="install_video">
      <div className="video_content">
        {/* Poster Image */}
        {!isPlaying && (
          <img
            src="/images/warranty/video_poster.webp"
            alt=""
            className="poster_img"
            width="611"
            height="611"
          />
        )}

        {/* Play Button */}
        {!isPlaying && (
          <a href="#" onClick={handlePlay} className="play_btn">
            <img src="/images/icons/play_button.webp" alt="Play" width="641" height="897" />
          </a>
        )}

        {/* Video Element */}
        <video ref={videoRef} width="611" height="611" loop muted>
          <source src="/videos/Welspun_Flooring_Furniture.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
