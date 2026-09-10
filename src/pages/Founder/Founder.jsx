import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './Founder.css';

const Founder = () => {
  const location = useLocation();
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [userEngaged, setUserEngaged] = useState(false);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (!userEngaged) {
        setUserEngaged(true);
        videoRef.current.currentTime = 0;
        videoRef.current.muted = false;
        setIsMuted(false);
        videoRef.current.loop = false;
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        if (videoRef.current.paused) {
          videoRef.current.play();
          setIsPlaying(true);
        } else {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      }
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (!userEngaged) {
        setUserEngaged(true);
        videoRef.current.currentTime = 0;
        videoRef.current.loop = false;
      }
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const toggleFullscreen = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (!userEngaged) {
        setUserEngaged(true);
        videoRef.current.currentTime = 0;
        videoRef.current.muted = false;
        setIsMuted(false);
        videoRef.current.loop = false;
      }
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      }
    }
  };
  const heroItems = [
    { type: 'image', src: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1788527681/founder_page_hero_section_new_image_webp.webp' },
    { type: 'video', src: 'https://res.cloudinary.com/r0vgotvj/video/upload/v1789020877/FOUNDER_REEL_FINAL_VERSION_1.mp4' },
    { type: 'image', src: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1788951873/founder_page_hero_2_section_new_image_webp.webp' },
  ];

  useEffect(() => {
    if (isHovered) return;

    let delay = 4000;
    const currentItem = heroItems[currentHeroIndex];

    if (currentItem.type === 'video') {
      if (userEngaged) {
        if (isPlaying) {
          return; // Pause carousel completely while user is watching the video
        } else {
          delay = 10000; // Wait 10 seconds if video is explicitly paused by user
        }
      } else {
        delay = 4000; // Act like a normal image slide if not engaged
      }
    }

    const timeoutId = setTimeout(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroItems.length);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [isHovered, currentHeroIndex, isPlaying, userEngaged, heroItems.length]);

  useEffect(() => {
    const currentKey = sessionStorage.getItem('founderLocationKey');
    if (currentKey !== location.key) {
      window.scrollTo(0, 0);
      sessionStorage.setItem('founderLocationKey', location.key);
    }
  }, [location.key]);

  useEffect(() => {
    if (videoRef.current) {
      if (currentHeroIndex === 1) {
        setUserEngaged(false);
        videoRef.current.currentTime = 0;
        videoRef.current.muted = true;
        setIsMuted(true);
        videoRef.current.loop = true;
        videoRef.current.play().catch(e => console.log(e));
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        setUserEngaged(false);
      }
    }
  }, [currentHeroIndex]);

  return (
    <div className="founder-page">
      <Navbar forceScrolled={true} />
      
      <div className="founder-hero-section founder-fade-in">
        <div className="founder-black-bg"></div>
        <div className="founder-hero-container">
          
          <h1 className="founder-title">
            FOUNDER
          </h1>
          
          <div className="founder-subtitle-container">
            <div className="founder-est">EST. 2022</div>
            <div className="founder-desc">
              Internationally Certified Cosmetologist & Hair<br />Extension Educator.
            </div>
          </div>

          <div className="founder-carousel-container" 
               onMouseEnter={() => setIsHovered(true)}
               onMouseLeave={() => setIsHovered(false)}>
            {heroItems.map((item, index) => (
               <div key={index} className={`founder-carousel-slide index-${index} ${index === currentHeroIndex ? 'active' : ''}`}>
                 {item.type === 'image' ? (
                   <div className="founder-carousel-image" style={{ backgroundImage: `url('${item.src}')` }}></div>
                 ) : (
                   <>
                     <video 
                       ref={videoRef} 
                       className="founder-carousel-video" 
                       src={item.src} 
                       muted 
                       playsInline 
                       onPlay={() => setIsPlaying(true)}
                       onPause={() => setIsPlaying(false)}
                       onEnded={() => {
                         if (userEngaged && videoRef.current) {
                           setUserEngaged(false);
                           videoRef.current.currentTime = 0;
                           videoRef.current.muted = true;
                           setIsMuted(true);
                           videoRef.current.loop = true;
                           setCurrentHeroIndex((prev) => (prev + 1) % heroItems.length);
                         }
                       }}
                     />
                     <div className="founder-video-controls">
                       <button className="founder-video-btn" onClick={togglePlay} title={(!userEngaged || !isPlaying) ? "Play" : "Pause"}>
                         {(!userEngaged || !isPlaying) ? (
                           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                         ) : (
                           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
                         )}
                       </button>
                       <button className="founder-video-btn" onClick={toggleMute} title={isMuted ? "Unmute" : "Mute"}>
                         {isMuted ? (
                           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
                         ) : (
                           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                         )}
                       </button>
                       <button className="founder-video-btn" onClick={toggleFullscreen} title="Full View">
                         <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
                       </button>
                     </div>
                   </>
                 )}
               </div>
            ))}
          </div>
          <div className="founder-carousel-dots"
               onMouseEnter={() => setIsHovered(true)}
               onMouseLeave={() => setIsHovered(false)}>
            {heroItems.map((_, index) => (
              <span key={index} 
                    className={`founder-carousel-dot ${index === currentHeroIndex ? 'active' : ''}`}
                    onClick={() => setCurrentHeroIndex(index)}></span>
            ))}
          </div>
          
        </div>
      </div>

      <div className="vision-section">
        <div className="vision-container">
          <div className="vision-left">
            <div className="vision-role">Founder, Lockzie Hair</div>
            <h2 className="vision-name">Vishnu Priya</h2>
            <div className="vision-divider"></div>
            <p className="vision-subtitle">
              My journey began in 2022, driven by a singular mission to restore confidence through the transformative power of hair.
            </p>
          </div>
          
          <div className="vision-right">
            <h3 className="vision-main-text">
              What started as a passion soon became a lifelong mission. I dedicated myself to mastering the science, artistry, and psychology behind hair restoration and enhancement.
            </h3>
            
            <div className="vision-global-expertise">
              <div className="vision-feature-image"></div>
              <div className="vision-feature-content">
                <h4>GLOBAL EXPERTISE</h4>
                <p>Believing that true expertise comes from continuous learning, I travelled across China and South Korea, exploring more than 8,000 manufacturers, salons, and industry professionals.</p>
                <p>Rather than simply adopting global methods, I carefully customized them to suit Indian hair textures, climate conditions, lifestyle, and the unique needs of our clients.</p>
              </div>
            </div>

            <div className="vision-feature-block-text">
              <h4>EMPOWERING THE INDUSTRY</h4>
              <p>As my journey evolved, I had the privilege of training professional stylists from luxury and corporate salon chains, mentoring them in advanced hair extension techniques, consultation skills, and international service standards.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="healing-section">
        <div className="healing-container">
          <h2 className="healing-title">
            "This isn't just hair. It's healing.<br />It's identity. It's power."
          </h2>
          <p className="healing-desc">
            Lockzie Hair was never created simply to sell hair. It was built to create<br />
            confidence, restore self esteem, and offer compassionate solutions for people<br />
            during some of the most vulnerable moments of their lives.
          </p>
        </div>
      </div>

      <div className="beyond-section">
        <div className="beyond-container">
          <div className="beyond-text">
            <h3>Beyond Education.</h3>
            <p>
              My greatest purpose has always been to serve people whose lives can truly be transformed. Over the years, I have had the honour of helping cancer warriors undergoing chemotherapy, individuals living with alopecia, burn and fire accident survivors, and countless men and women experiencing medical or genetic hair loss.
            </p>
            <p>
              Every transformation reminds me that hair is never just about appearance it is about dignity, healing, and hope.
            </p>
          </div>
          <div className="beyond-image"></div>
        </div>
      </div>

      {/* The Invitation Section */}
      <div className="invitation-section">
        <div className="invitation-polaroids">
          <div className="polaroid polaroid-1">
            <div className="polaroid-image" style={{ backgroundImage: "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1788527606/founder_page_invitation_card_webp.webp')" }}></div>
          </div>
          <div className="polaroid polaroid-2">
            <div className="polaroid-image" style={{ backgroundImage: "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/founder_page_poloraid_card_img2_webp.webp')" }}></div>
          </div>
          <div className="polaroid polaroid-3">
            <div className="polaroid-image" style={{ backgroundImage: "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1788527605/founder_page_poloroid_img_3_webp.webp')" }}></div>
          </div>
          <div className="polaroid polaroid-4">
            <div className="polaroid-image" style={{ backgroundImage: "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/founder_page_img11_webp.webp')" }}></div>
          </div>
        </div>
        
        <div className="invitation-text-content">
          <h5 className="invitation-subtitle">— The Invitation</h5>
          <h2 className="invitation-title" spellCheck="false" data-gramm="false">
            Let us make your next<br />
            Hair Tranformation<br />
            <span className="invitation-highlight" spellCheck="false" data-gramm="false">unforgettable</span>
          </h2>
          <p className="invitation-desc">
            Premium hair extensions. Flawless blends<br />
            Confidence that lasts
          </p>
          <a href="https://wa.me/919566662642?text=Hi%20Lockzie%20Hair!%20I%20would%20like%20to%20connect." target="_blank" rel="noopener noreferrer" className="invitation-button" style={{ textDecoration: 'none' }}>Let’s connect</a>
        </div>

        <div className="invitation-grid">
          <div className="grid-item grid-item-1"></div>
          <div className="grid-item grid-item-2"></div>
          <div className="grid-item grid-item-3"></div>
          <div className="grid-item grid-item-4"></div>
        </div>

        <div className="new-invitation-grid">
          <div className="new-grid-item new-grid-item-1"></div>
          <div className="new-grid-item new-grid-item-2"></div>
          <div className="new-grid-item new-grid-item-3"></div>
          <div className="new-grid-item new-grid-item-4"></div>
        </div>
      </div>

      <div className="gratitude-section">
        <div className="gratitude-card">
          <div className="gratitude-left">
            <h2 className="gratitude-title">
              I didn't build Lockzie Hair to change how people look. I built it to change how they feel about themselves.
            </h2>
            <p className="gratitude-desc">
              Because confidence is beautiful. Confidence is powerful. And every person deserves to wear their crown with pride. Thank you for trusting us with yours.
            </p>
          </div>
          
          <div className="gratitude-right">
            <div className="gratitude-divider"></div>
            <div className="gratitude-greeting">WITH GRATITUDE,</div>
            <div className="gratitude-name">Vishnu Priya</div>
            <div className="gratitude-titles">
              <p>Founder, Lockzie Hair</p>
              <p>Internationally Certified Cosmetologist</p>
              <p>Hair Extension Educator</p>
              <p>South India Joint Treasurer, AIHBA</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Founder;
