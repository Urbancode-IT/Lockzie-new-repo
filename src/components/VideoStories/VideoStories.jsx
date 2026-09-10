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
        >
          {isMuted ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
          )}
        </button>
      )}
    </div>
  );
};

const VideoStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);

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

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < stories.length - 4 ? prev + 1 : prev));
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
          <button className="vs-arrow-btn" onClick={handleNext} disabled={currentIndex >= stories.length - 4}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.16669 10H15.8334M15.8334 10L10 4.16666M15.8334 10L10 15.8333" stroke="#57534D" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="video-stories-cards-wrapper">
        <div 
          className="video-stories-slider-track" 
          style={{ transform: `translateX(-${currentIndex * (284.01 + 21.33)}px)` }}
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
