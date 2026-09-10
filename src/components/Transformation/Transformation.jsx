import React, { useState } from 'react';
import './Transformation.css';

const SliderCard = ({ before, after, title, subtitle, features, features2, number, beforeStyle, afterStyle, delay }) => {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="transformation-card">
      <div className="slider-container">
        {/* After Image */}
        <div className="slider-image image-after" style={{ backgroundImage: `url('${after}')`, ...afterStyle }}></div>
        
        {/* Before Image (Clipped) */}
        <div className="image-before-clip" style={{ width: `${sliderPos}%` }}>
          <div className="slider-image image-before" style={{ backgroundImage: `url('${before}')`, ...beforeStyle }}></div>
        </div>

        {/* Labels */}
        <div className="slider-label label-before">Before</div>
        <div className="slider-label label-after">After</div>

        {/* Divider and Handle */}
        <div className="slider-divider" style={{ left: `${sliderPos}%` }}>
          <div className="slider-handle">⇆</div>
        </div>

        {/* Native Range Input for seamless dragging */}
        <input 
          type="range" 
          min="0" max="100" 
          value={sliderPos} 
          onChange={(e) => setSliderPos(e.target.value)} 
          className="slider-input" 
          aria-label="Before and after image comparison slider"
        />
      </div>
      
      <div className="transformation-info">
        <div className="info-left">
          <h3 className="info-title">{title}</h3>
          <p className="info-subtitle">{subtitle}</p>
          <div className="info-features-container">
            <div className="info-features">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="info-tick">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="M7.5 12l3 3 6-6"></path>
              </svg>
              <span>{features}</span>
            </div>
            <div className="info-features">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="info-tick">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="M7.5 12l3 3 6-6"></path>
              </svg>
              <span>{features2}</span>
            </div>
          </div>
        </div>
        <div className="info-right">
          <span className="info-number">{number}</span>
        </div>
      </div>
    </div>
  );
};

const Transformation = () => {
  const cards = [
    {
      before: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/homepage_trans_img1.webp',
      after: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/perfect_colour_match__1_trans_img_webp.webp',
      beforeStyle: { transform: 'scale(1.6) translateY(-30px)' },
      afterStyle: { backgroundPosition: 'center calc(50% + 10px)', backgroundSize: 'cover' },
      title: 'Volume Revival',
      subtitle: 'Fuller Roots. Natural Lift. Effortless Volume.',
      features: 'K-Tips Extensions • Premium Human Hair',
      features2: '22 Inch • Instant Volume & Thickness',
      number: 'No. 01'
    },
    {
      before: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/home_page_trans_img_2_before_webp.webp',
      after: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/home_page_trans_img_2_after_webp.webp',
      afterStyle: { transform: 'scale(1.05)' },
      title: 'Seamless Coverage',
      subtitle: 'Natural Density. Perfect Blend. Total Confidence.',
      features: 'Scalp Topper • Invisible Bridging Technique',
      features2: '22 Inch • Natural Scalp Coverage',
      number: 'No. 02'
    },
    {
      before: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/homepage_tras_img3webp.webp',
      after: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/homepage_trans_img3.0webp.webp',
      beforeStyle: { backgroundPosition: 'center calc(50% - 14px)' },
      title: 'Length & Luxury',
      subtitle: 'More Length. More Movement. More You.',
      features: 'Nano Extensions • Double Drawn Blond Hair',
      features2: '20 Inch • Added Length & Movement',
      number: 'No. 03'
    }
  ];

  return (
    <section className="transformation-section">
      <div className="transformation-header">
        <div className="transformation-label-container">
          <span className="transformation-label-line"></span>
          <span className="transformation-label">The Lockzie Method</span>
        </div>
        
        <div className="transformation-header-content">
          <h2 className="transformation-heading">
            Invisible Work.<br />Visible Elegance.
          </h2>
          <p className="transformation-intro">
            See how our expert techniques create fuller volume, graceful movement and naturally refined finishes.
          </p>
        </div>
      </div>

      <div className="transformation-cards-wrapper">
        {cards.map((card, index) => (
          <SliderCard 
            key={index}
            delay={index * 150}
            before={card.before}
            after={card.after}
            title={card.title}
            subtitle={card.subtitle}
            features={card.features}
            features2={card.features2}
            number={card.number}
            beforeStyle={card.beforeStyle}
            afterStyle={card.afterStyle}
          />
        ))}
      </div>
    </section>
  );
};

export default Transformation;
