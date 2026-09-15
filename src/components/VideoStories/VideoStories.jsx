import React, { useState, useRef, useEffect } from 'react';
import './VideoStories.css';

const VideoCard = ({ index, activeVideoIndex, onActivate, name, title, image, videoSrc, delay }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  // Pause this video if another one becomes active
  useEffect(() => {
    if (activeVideoIndex !== null && activeVideoIndex !== index) {
      if (isPlaying) {
        setIsPlaying(false);
      }
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0; // Reset to original state
      }
    }
  }, [activeVideoIndex, index, isPlaying]);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (!videoSrc || !videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      onActivate(index);
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // reset to beginning
    }
  };

  const toggleFullScreen = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    
    const elem = videoRef.current;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  };

  return (
    <div 
      className="video-card" 
      style={{ 
        ...(!videoSrc ? { backgroundImage: `url(${image})` } : {}),
        cursor: videoSrc ? 'pointer' : 'default'
      }}
      onClick={videoSrc ? togglePlay : undefined}
    >
      {videoSrc && (
        <video 
          ref={videoRef}
          src={videoSrc}
          muted={isMuted}
          playsInline
          preload="metadata"
          onEnded={handleEnded}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0
          }}
        />
      )}
      
      {!isPlaying && <div className="video-overlay"></div>}
      
      {!isPlaying && (
        <div className="play-button-container">
          <div className="play-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5V19L19 12L8 5Z" fill="#0A0A0A"/>
            </svg>
          </div>
        </div>
      )}
      
      {!isPlaying && (
        <div className="video-info">
          <h4 className="video-name">{name}</h4>
          <p className="video-title">{title}</p>
        </div>
      )}

      {videoSrc && isPlaying && (
        <>
          <button 
            onClick={toggleFullScreen}
            style={{
              position: 'absolute',
              bottom: '16px',
              right: '60px',
              zIndex: 10,
              background: 'rgba(255, 255, 255, 0.7)',
              border: 'none',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.7)'}
            title="Full Screen"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
            </svg>
          </button>
          
          <button 
            onClick={toggleMute}
            style={{
              position: 'absolute',
              bottom: '16px',
              right: '16px',
              zIndex: 10,
              background: 'rgba(255, 255, 255, 0.7)',
              border: 'none',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.7)'}
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
            )}
          </button>
        </>
      )}
    </div>
  );
};

const VideoStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);
  const [maxIndex, setMaxIndex] = useState(1);
  const [shiftAmount, setShiftAmount] = useState(305.34);

  const stories = [
    { 
      name: 'Fathima', 
      title: 'Client Story', 
      image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=284&h=505',
      videoSrc: 'https://res.cloudinary.com/r0vgotvj/video/upload/v1788527841/Home_Tranformation_video-1_converted.mp4'
    },
    { 
      name: 'Harshini', 
      title: 'Client Story', 
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=284&h=505',
      videoSrc: 'https://res.cloudinary.com/r0vgotvj/video/upload/v1788527908/Tranformation_video-2_converted.mp4'
    },
    { 
      name: 'Ashwini', 
      title: 'Client Story', 
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=284&h=505',
      videoSrc: 'https://res.cloudinary.com/r0vgotvj/video/upload/v1788527645/Tranformation_video-3_converted.mp4'
    },
    { 
      name: 'Nathiya', 
      title: 'Client Story', 
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=284&h=505',
      videoSrc: 'https://res.cloudinary.com/r0vgotvj/video/upload/v1788527672/Tranformation_video-4_converted.mp4'
    },
    { 
      name: 'Jayaseely', 
      title: 'Client Story', 
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=284&h=505',
      videoSrc: 'https://res.cloudinary.com/r0vgotvj/video/upload/v1788527766/Tranformation_video-5_1.mp4'
    }
  ];

  useEffect(() => {
    const updateMaxIndex = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      let newVisible = 1;
      
      if (width < 768) {
        newVisible = 1;
      } else if (width === 768) { // iPad mini
        newVisible = 3;
      } else if (width === 820) { // iPad Air
        newVisible = 2;
      } else if (width === 912) { // Surface Pro 7
        newVisible = 3;
      } else if (width === 1024 && height >= 1000) { // iPad Pro
        newVisible = 2;
      } else if (width === 1024 && height < 1000) { // Nest Hub
        newVisible = 3;
      } else if (width === 1280) { // Nest Hub Max
        newVisible = 4;
      } else if (width > 1280) {
        newVisible = 4;
      } else if (width >= 768 && width < 1024) {
        newVisible = 2;
      } else {
        newVisible = 3;
      }
      
      const calculatedMaxIndex = Math.max(0, stories.length - newVisible);
      
      setMaxIndex(calculatedMaxIndex);
      setCurrentIndex(prev => prev > calculatedMaxIndex ? calculatedMaxIndex : prev);

      setTimeout(() => {
        const card = document.querySelector('.video-card');
        if (card) {
          setShiftAmount(card.offsetWidth + 21.33);
        }
      }, 50);
    };

    updateMaxIndex();
    window.addEventListener('resize', updateMaxIndex);
    return () => window.removeEventListener('resize', updateMaxIndex);
  }, [stories.length]);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section className="video-stories-section">
      <div className="video-stories-header">
        <div className="video-stories-header-text">
          <span className="video-stories-label">Video Stories</span>
          <h2 className="video-stories-heading">See The Transformation.</h2>
        </div>
        
        <div className="vs-arrows">
          <button className="vs-arrow-btn" onClick={handlePrev} disabled={currentIndex === 0}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.8334 10H4.16669M4.16669 10L10 15.8333M4.16669 10L10 4.16666" stroke="#57534D" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="vs-arrow-btn" onClick={handleNext} disabled={currentIndex >= maxIndex}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.16669 10H15.8334M15.8334 10L10 4.16666M15.8334 10L10 15.8333" stroke="#57534D" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="video-stories-cards-wrapper">
        <div 
          className="video-stories-slider-track" 
          style={{ transform: `translateX(-${currentIndex * shiftAmount}px)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {stories.map((story, index) => (
            <VideoCard 
              key={index}
              index={index}
              activeVideoIndex={activeVideoIndex}
              onActivate={setActiveVideoIndex}
              delay={index * 150}
              name={story.name}
              title={story.title}
              image={story.image}
              videoSrc={story.videoSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoStories;
