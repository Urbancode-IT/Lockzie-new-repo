import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Reviews.css';

const ReviewCard = ({ quote, name, location, isActive }) => (
  <div className={`review-card ${isActive ? 'active' : ''}`}>
    <div className="review-stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 0L10.472 5.008L16 5.816L12 9.712L12.944 15.216L8 12.616L3.056 15.216L4 9.712L0 5.816L5.528 5.008L8 0Z" fill="#0A0A0A"/>
        </svg>
      ))}
    </div>
    
    <div className="review-quote-icon">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#E5E5E5" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 11H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3c0 2.8-2.2 5-5 5" />
        <path d="M20 11h-4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3c0 2.8-2.2 5-5 5" />
      </svg>
    </div>

    <p className="review-text">"{quote}"</p>
    
    <div className="review-author">
      <h4 className="author-name">{name}</h4>
      <span className="author-location">{location}</span>
    </div>
  </div>
);

const Reviews = () => {
  const reviews = [
    {
      quote: "A wonderful experience! The extensions and curly styling were done beautifully by a true expert. The results are incredibly natural. I highly recommend Lockzie.",
      name: "Nathiya Janani",
      location: "Chennai"
    },
    {
      quote: "Thrilled to see my wife so confident with her new look. The extensions are incredibly natural and beautiful. Seeing her smile makes me so happy. Thank you, Lockzie!",
      name: "Hari",
      location: "Chennai"
    },
    {
      quote: "The extensions look incredibly natural and beautiful. I got exactly the length and volume I wanted. The whole process was highly professional, and the team explained everything perfectly.",
      name: "Adin Hauhnar",
      location: "Chennai"
    },
    {
      quote: "Had a consultation with Ms. Vishnupriya for my mom. She was super friendly with her recommendations and my mum left satisfied with the product. Highly recommend!",
      name: "Kirubha Shankar",
      location: "Chennai"
    },
    {
      quote: "I did nano extension and the team did wonderful job. I don't feel the heaviness and it completely looked like natural hair of me",
      name: "Amudha Sangeetha",
      location: "Chennai"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  
  // Touch / Drag State
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);

  const trackRef = useRef(null);
  const autoPlayRef = useRef(null);

  // Responsive logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCardsPerView(1);
      } else if (window.innerWidth <= 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.max(0, reviews.length - cardsPerView + 1);

  const nextSlide = useCallback(() => {
    if (totalSlides <= 1) return;
    setCurrentIndex((prevIndex) => (prevIndex >= totalSlides - 1 ? 0 : prevIndex + 1));
  }, [totalSlides]);

  const prevSlide = () => {
    if (totalSlides <= 1) return;
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? totalSlides - 1 : prevIndex - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Autoplay
  useEffect(() => {
    if (!isPaused && !isDragging && totalSlides > 1) {
      autoPlayRef.current = setInterval(nextSlide, 4500);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused, isDragging, nextSlide, totalSlides]);

  // Touch & Drag Handlers
  const getPositionX = (event) => {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
  };

  const touchStart = (index) => (event) => {
    setIsDragging(true);
    setStartX(getPositionX(event));
    setIsPaused(true);
    if (trackRef.current) {
      trackRef.current.style.transition = 'none';
    }
  };

  const touchMove = (event) => {
    if (isDragging) {
      const currentPosition = getPositionX(event);
      const diff = currentPosition - startX;
      const percentage = (diff / window.innerWidth) * 100;
      setCurrentTranslate(prevTranslate + percentage);
    }
  };

  const touchEnd = () => {
    setIsDragging(false);
    setIsPaused(false);
    
    const movedBy = currentTranslate - prevTranslate;
    
    if (movedBy < -5 && currentIndex < totalSlides - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (movedBy > 5 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }

    if (trackRef.current) {
      trackRef.current.style.transition = 'transform 0.5s ease-in-out';
    }
  };

  useEffect(() => {
    const calcTranslate = -(currentIndex * (100 / cardsPerView));
    setPrevTranslate(calcTranslate);
    setCurrentTranslate(calcTranslate);
  }, [currentIndex, cardsPerView]);

  return (
    <section className="reviews-section">
      <div className="reviews-header">
        <div className="reviews-label-container" data-aos="fade-up">
          <span className="reviews-label-line"></span>
          <span className="reviews-label">The Art Of Being Remembered</span>
        </div>
        <h2 className="reviews-heading" data-aos="fade-up" data-aos-delay="100">Where Every Compliments Begins.</h2>
        <p className="reviews-intro" data-aos="fade-up" data-aos-delay="200">
          See why women across India trust LOCKZIE for luxury hair extensions. Experienced unmatched quality, comfort, confidence and beautiful results that speak for themselves.
        </p>
      </div>

      <div 
        className="carousel-container"
        data-aos="fade-up" 
        data-aos-delay="300"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => { setIsPaused(false); setIsDragging(false); }}
      >
        <button className="carousel-nav-btn prev-btn" onClick={prevSlide} aria-label="Previous Review">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>

        <div className="carousel-viewport">
          <div 
            className="reviews-cards-wrapper"
            ref={trackRef}
            style={{ 
              transform: `translateX(${isDragging ? currentTranslate : -(currentIndex * (100 / cardsPerView))}%)`,
              transition: isDragging ? 'none' : 'transform 0.5s ease-in-out'
            }}
            onMouseDown={touchStart(currentIndex)}
            onTouchStart={touchStart(currentIndex)}
            onMouseMove={touchMove}
            onTouchMove={touchMove}
            onMouseUp={touchEnd}
            onTouchEnd={touchEnd}
            onMouseLeave={isDragging ? touchEnd : undefined}
          >
            {reviews.map((review, index) => {
              const activeCardIndex = currentIndex + Math.floor(cardsPerView / 2);
              const isActive = index === activeCardIndex;

              return (
                <div key={index} className="carousel-slide" style={{ flex: `0 0 ${100 / cardsPerView}%` }}>
                  <ReviewCard 
                    quote={review.quote}
                    name={review.name}
                    location={review.location}
                    isActive={isActive}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <button className="carousel-nav-btn next-btn" onClick={nextSlide} aria-label="Next Review">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>

        {totalSlides > 1 && (
          <div className="carousel-pagination">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button 
                key={idx} 
                className={`dot ${currentIndex === idx ? 'active' : ''}`}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Reviews;
