import React, { useState, useRef } from 'react';
import './Video.css';

const Video = () => {
  const [isPaused, setPaused] = useState(false);
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    if (isPaused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setPaused((prevPaused) => !prevPaused);
  };

  return (
    <div className="vid-video-container">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        loop
        onClick={handleVideoClick}
        className="vid-video"
      >
        <source
          src="https://streaming-us-prod.cms.commerce.dynamics.com/f47f3a9c-fb34-4be0-8bd8-d18449ead1d9/92457605-1604-4f86-842a-2f56e469_650.mp4"
          type="video/mp4"
        />
      </video>
      <div className="vid-text-container">
        <p className="vid-text">Sunrise Session</p>
        <p className="vid-custom-text">Kiana Anderson</p>
        <p className="vid-additional-text">Pro Surfer | Read Her Story</p>
        <button className="vid-button1">SHOP SURFBOARD</button>
      </div>
    </div>
  );
};

export default Video;
