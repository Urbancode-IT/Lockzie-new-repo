import React, { useState, useRef, useEffect } from 'react';
import './WhatOurClientSays.css';

const VideoCard = ({ video, isActive, onActivate, hasActiveVideo }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (!videoRef.current) return;
    
    if (isActive) {
      setIsMuted(false);
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => setIsPlaying(false));
      setIsPlaying(true);
    } else {
      setIsMuted(true);
      videoRef.current.play().catch(() => setIsPlaying(false));
      setIsPlaying(true);
    }
  }, [isActive]);

  const handleBoxClick = () => {
    if (!videoRef.current) return;

    if (!isActive) {
      onActivate();
    } else {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleEnded = () => {
    if (isActive) {
      onActivate(null);
    } else {
      if (videoRef.current) {
        videoRef.current.play().catch(() => setIsPlaying(false));
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  if (!video.videoSrc) {
    return (
      <div className="rt-card">
        <div className="rt-card-thumbnail" style={{ backgroundImage: `url(${video.videoThumbnail})` }}>
          <div className="rt-play-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5V19L19 12L8 5Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <div className="rt-card-footer">
          <div className="rt-card-avatar" style={{ backgroundImage: `url(${video.avatar})` }}></div>
          <span className="rt-card-name">{video.name}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="rt-card" onClick={handleBoxClick}>
      <div className="rt-card-thumbnail">
        <video 
          ref={videoRef}
          src={video.videoSrc} 
          className="rt-video-element" 
          muted={isMuted} 
          loop={!isActive} 
          playsInline
          onEnded={handleEnded}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        ></video>
        
        {(!isActive || !isPlaying) && (
          <div className={`rt-play-btn ${isActive ? 'rt-play-btn-active' : ''}`}>
            {(!isActive) ? (
              <>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5V19L19 12L8 5Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="rt-play-text rt-play-text-hover">Play</span>
              </>
            ) : (
              <>
                <svg className="rt-icon-paused" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6" y="5" width="4" height="14" fill="#FFFFFF"/>
                  <rect x="14" y="5" width="4" height="14" fill="#FFFFFF"/>
                </svg>
                <svg className="rt-icon-resume" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'none'}}>
                  <path d="M8 5V19L19 12L8 5Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="rt-play-text rt-text-paused">Paused</span>
                <span className="rt-play-text rt-text-resume" style={{display: 'none'}}>Resume</span>
              </>
            )}
          </div>
        )}

        {isActive && (
          <div className="rt-mute-btn" onClick={toggleMute}>
            {isMuted ? (
               <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                 <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
               </svg>
            ) : (
               <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                 <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
               </svg>
            )}
          </div>
        )}
      </div>
      <div className="rt-card-footer">
        <div className="rt-card-avatar">
          <video src={`${video.videoSrc}#t=${video.avatarTime || 2.0}`} className="rt-avatar-video" muted playsInline></video>
        </div>
        <span className="rt-card-name">{video.name}</span>
      </div>
    </div>
  );
};

const WhatOurClientSays = () => {
  const [activeVideoId, setActiveVideoId] = useState(null);
  const hasActiveVideo = activeVideoId !== null;

  // 7 mock videos
  const videos = [
    {
      id: 1,
      name: 'Deepa Balu',
      videoSrc: 'https://res.cloudinary.com/r0vgotvj/video/upload/v1789020862/what_client_says_1_1.mp4',
      avatarTime: 4.0
    },
    {
      id: 2,
      name: 'Jacqueline',
      videoSrc: 'https://res.cloudinary.com/r0vgotvj/video/upload/v1788951840/what_client_syas_2.mp4',
      avatarTime: 3.0
    },
    {
      id: 3,
      name: 'Mithun Revora',
      videoSrc: 'https://res.cloudinary.com/r0vgotvj/video/upload/v1/what_client_says_3.mp4',
      avatarTime: 2.5
    },
    {
      id: 4,
      name: 'Harshini',
      videoSrc: 'https://res.cloudinary.com/r0vgotvj/video/upload/v1/wht_client_says_4.mp4',
      avatarTime: 2.0
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleNext = () => {
    // Only scroll up to length - 3, so 3 cards are always visible
    setCurrentIndex((prevIndex) => (prevIndex < videos.length - 3 ? prevIndex + 1 : prevIndex));
  };

  return (
    <section className="rt-section">
      <div className="rt-container">
        <div className="rt-header">
          <div className="rt-header-text">
            <h2 className="rt-heading">What Our Client Say About Lockzie<br/>Hair Extensions.</h2>
            <p className="rt-subheading">
              Hear how Lockzie has helped thousands of women elevate their style and find their confidence with premium quality hair.
            </p>
          </div>
          <div className="rt-arrows">
            <button className="rt-arrow-btn" onClick={handlePrev} disabled={currentIndex === 0}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.8334 10H4.16669M4.16669 10L10 15.8333M4.16669 10L10 4.16666" stroke="#57534D" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="rt-arrow-btn" onClick={handleNext} disabled={currentIndex >= videos.length - 3}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.16669 10H15.8334M15.8334 10L10 4.16666M15.8334 10L10 15.8333" stroke="#57534D" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="rt-slider-wrapper">
          <div className="rt-slider-track" style={{ transform: `translateX(-${currentIndex * (395 + 24)}px)` }}>
            {videos.map((video) => (
              <VideoCard 
                key={video.id} 
                video={video} 
                isActive={activeVideoId === video.id}
                hasActiveVideo={hasActiveVideo}
                onActivate={(id = video.id) => setActiveVideoId(id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatOurClientSays;
