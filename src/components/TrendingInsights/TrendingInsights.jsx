import React, { useState, useRef, useEffect } from 'react';
import './TrendingInsights.css';

const TrendingVideoCard = ({ item, positionClass, isActiveCenter, onClick, isPlaying, setPlaying }) => {
  const videoRef = useRef(null);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStartedPlaying, setHasStartedPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      setHasPlayed(true);
    }
  }, [isPlaying]);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        if (!hasStartedPlaying) {
          videoRef.current.currentTime = 0; // Play from exactly 0:00 when first started
          setHasStartedPlaying(true);
        }
        videoRef.current.play().catch(() => {});
        videoRef.current.muted = isMuted;
      } else {
        videoRef.current.pause();
        // Do not reset currentTime here, allowing it to stay at the paused frame
        videoRef.current.muted = true;
      }
    }
  }, [isPlaying, isMuted, hasStartedPlaying]);

  useEffect(() => {
    if (!isActiveCenter) {
      if (isPlaying) setPlaying(false);
      setHasPlayed(false);
      setHasStartedPlaying(false); // Reset so it plays from 0 again when next played
      setIsMuted(false); // Reset to original unmuted state
      if (videoRef.current) {
        videoRef.current.currentTime = item.thumbTime || 0.1; // Revert back to thumbnail frame
      }
    }
  }, [isActiveCenter, isPlaying, setPlaying, item]);

  const handleClick = (e) => {
    if (!isActiveCenter) {
      onClick(); // Brings to center
    } else {
      setPlaying(!isPlaying);
    }
  };
  
  const toggleMute = (e) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  const handleVideoEnded = () => {
    setPlaying(false);
    setHasPlayed(false);
    setHasStartedPlaying(false);
    setIsMuted(false);
    if (videoRef.current) {
      videoRef.current.currentTime = item.thumbTime || 0.5;
    }
  };

  return (
    <div 
      className={`ti-card ${positionClass}`} 
      onClick={handleClick}
    >
      <video 
        ref={videoRef}
        src={`${item.videoSrc}#t=${item.thumbTime || 0.5}`}
        className="ti-video"
        muted={isMuted}
        onEnded={handleVideoEnded}
        playsInline
      />
      
      {isActiveCenter && !isPlaying && (
        <div className={`ti-play-btn ${hasPlayed ? 'ti-play-btn-active' : ''}`}>
          {!hasPlayed ? (
            <>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5V19L19 12L8 5Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="ti-play-text ti-play-text-hover">Play</span>
            </>
          ) : (
            <>
              <svg className="ti-icon-paused" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 4H10V20H6V4ZM14 4H18V20H14V4Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="ti-play-text ti-play-text-hover ti-text-paused">Paused</span>
              
              <svg className="ti-icon-resume" style={{display: 'none'}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5V19L19 12L8 5Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="ti-play-text ti-play-text-hover ti-text-resume" style={{display: 'none'}}>Resume</span>
            </>
          )}
        </div>
      )}
      
      {isActiveCenter && isPlaying && (
        <div className="ti-mute-btn" onClick={toggleMute}>
          {isMuted ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <line x1="23" y1="9" x2="17" y2="15"></line>
              <line x1="17" y1="9" x2="23" y2="15"></line>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>
          )}
        </div>
      )}
      
      {!isActiveCenter && (
        <div className="ti-play-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 5V19L19 12L8 5Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="ti-play-text ti-play-text-hover">Play</span>
        </div>
      )}
    </div>
  );
};

const TrendingInsights = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [userInteracted, setUserInteracted] = useState(false);
  
  const items = [
    { id: 1, videoSrc: 'https://res.cloudinary.com/r0vgotvj/video/upload/v1/Lockzie_insta_Scalp_topper.mp4', thumbTime: 0.5 },
    { id: 2, videoSrc: 'https://res.cloudinary.com/r0vgotvj/video/upload/v1/Lockzie_insta_Why_to_choose_lockzie.mp4', thumbTime: 0.5 },
    { id: 3, videoSrc: 'https://res.cloudinary.com/r0vgotvj/video/upload/v1/Lockzie_insta_queries_hair_texture.mp4', thumbTime: 0.5 },
    { id: 4, videoSrc: 'https://res.cloudinary.com/r0vgotvj/video/upload/v1/Lockzie_insta_salon_owner.mp4', thumbTime: 2.0 }, // Exact frame for stylist
    { id: 5, videoSrc: 'https://res.cloudinary.com/r0vgotvj/video/upload/v1/Lockzie_insta_men_hair_maintance.mp4', thumbTime: 0.5 }
  ];

  // Auto-carousel logic
  useEffect(() => {
    if (playingVideoId !== null || userInteracted) return; // Stop carousel if a video is playing or user interacted
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [playingVideoId, userInteracted, items.length, activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    setUserInteracted(false); // Resume carousel if user navigates manually
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    setUserInteracted(false); // Resume carousel if user navigates manually
  };

  return (
    <section className="ti-section">
      <div className="ti-container">
        <div className="ti-header">
          <h2 className="ti-title">Trending Insights</h2>
          <a href="https://www.instagram.com/lockziehair/" target="_blank" rel="noopener noreferrer" className="ti-instagram-link">
            <div className="ti-instagram-content">
              <span>View Instagram</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="ti-underline"></div>
          </a>
        </div>

        <div className="ti-slider-area">
          <div className="ti-arrow-left" onClick={handlePrev}>
            <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 12L12 22" stroke="#515151" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <div className="ti-slider-container">
            {items.map((item, index) => {
              let positionClass = '';
              if (index === activeIndex) {
                positionClass = 'ti-card-center';
              } else if (index === (activeIndex - 1 + items.length) % items.length) {
                positionClass = 'ti-card-left';
              } else if (index === (activeIndex + 1) % items.length) {
                positionClass = 'ti-card-right';
              } else {
                 positionClass = 'ti-card-hidden';
              }

              return (
                <TrendingVideoCard 
                  key={item.id}
                  item={item}
                  positionClass={positionClass}
                  isActiveCenter={index === activeIndex}
                  onClick={() => {
                    setActiveIndex(index);
                    setPlayingVideoId(item.id); // Auto-play when side card is clicked
                    setUserInteracted(false); // Do not permanently stop carousel
                  }}
                  isPlaying={playingVideoId === item.id}
                  setPlaying={(playing) => {
                    setPlayingVideoId(playing ? item.id : null);
                    setUserInteracted(false); // Resume carousel when video stops/ends
                  }}
                />
              );
            })}
          </div>

          <div className="ti-arrow-right" onClick={handleNext}>
            <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2L12 12L2 22" stroke="#515151" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <div className="ti-pagination">
            {items.map((_, index) => (
              <div 
                key={index} 
                className={`ti-dot ${index === activeIndex ? 'ti-dot-active' : ''}`}
                onClick={() => {
                  setActiveIndex(index);
                  setUserInteracted(false); // Resume carousel
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingInsights;
