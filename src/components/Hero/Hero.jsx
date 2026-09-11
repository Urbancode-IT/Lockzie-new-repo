import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../Navbar/Navbar';
import './Hero.css';

const slides = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/5ab6392d70b66795652e8f1c671aa915.jpg',
    titleRegular: 'Luxury Hair',
    titleItalic: 'Extensions',
    description: 'Transform your look instantly with premium quality hair extensions designed for seamless blending, lasting comfort, and confidence every day.'
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/home_page_hero_section_slide_img_2.webp',
    titleRegular: 'Master Level',
    titleItalic: 'Training',
    description: 'Elevate your skills with our exclusive academy. Learn the art of flawless installation from industry leading experts.'
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/hero_section_slide_img_3.webp',
    titleRegular: 'Customized',
    titleItalic: 'Perfection',
    description: 'Every strand is meticulously color matched and crafted to suit your unique lifestyle and aesthetic desires.'
  },
  {
    id: 4,
    image: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/studio_img3.png',
    titleRegular: 'Global',
    titleItalic: 'Excellence',
    description: 'Made in India, loved globally. Experience the unparalleled quality of ethically sourced, 100% human hair.'
  },
  {
    id: 5,
    image: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/hoem_page_hero_banner_slide_5_webp.webp',
    titleRegular: 'Premium',
    titleItalic: 'Quality',
    description: 'Discover the ultimate standard in hair extensions. Experience flawless length, volume, and seamless natural blending.'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const timerRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!isPaused && !isDragging) {
      timerRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, isDragging, currentSlide]);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches ? e.targetTouches[0].clientX : e.clientX);
    setIsDragging(true);
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches ? e.targetTouches[0].clientX : e.clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setIsPaused(false);
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div 
      className="hero-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseMove={isDragging ? handleTouchMove : undefined}
      onMouseUp={handleTouchEnd}
      onMouseLeave={(e) => {
        if (isDragging) handleTouchEnd(e);
      }}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url("${slide.image}")`
          }}
        />
      ))}
      
      <div className="hero-content-wrapper">
        <Navbar />
        
        <div className="hero-text-content">
          <h1 className="hero-title" key={`title-${currentSlide}`}>
            <span className="title-regular">{slides[currentSlide].titleRegular}</span>
            <br />
            <span className="title-italic">{slides[currentSlide].titleItalic}</span>
          </h1>
          <p className="hero-description" key={`desc-${currentSlide}`}>
            {slides[currentSlide].description}
          </p>
        </div>

        {/* Navigation Arrows */}
        <button className="hero-nav-btn left" onClick={prevSlide} aria-label="Previous slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button className="hero-nav-btn right" onClick={nextSlide} aria-label="Next slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
