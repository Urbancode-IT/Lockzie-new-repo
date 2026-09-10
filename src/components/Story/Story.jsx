import React from 'react';
import './Story.css';

const Story = () => {
  return (
    <section className="story-section">
      {/* Marquee Banner */}
      <div className="marquee-banner">
        <div className="marquee-content">
          <span>Premium Quality <span className="star">✦</span></span>
          <span>Custom Crafted <span className="star">✦</span></span>
          <span>100% Natural Hair <span className="star">✦</span></span>
          <span>Luxury Salon <span className="star">✦</span></span>
          <span>Certified Mentors <span className="star">✦</span></span>
          <span>Editorial Finish <span className="star">✦</span></span>
          {/* Duplicate for infinite scroll effect */}
          <span>Premium Quality <span className="star">✦</span></span>
          <span>Custom Crafted <span className="star">✦</span></span>
          <span>100% Natural Hair <span className="star">✦</span></span>
          <span>Luxury Salon <span className="star">✦</span></span>
          <span>Certified Mentors <span className="star">✦</span></span>
          <span>Editorial Finish <span className="star">✦</span></span>
        </div>
      </div>

      <div className="story-content-wrapper">
        <div className="story-layout">
          {/* Left Column: Image & Floating Card */}
          <div className="story-image-container" data-aos="fade-right">
            <div className="story-image"></div>
            <div className="floating-card">
              <span className="card-subtitle">Founder</span>
              <h3 className="card-title">Vishnu Priya</h3>
              <p className="card-details">Creative Director · Est. 2025</p>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="story-text-container">
            <div className="story-label" data-aos="fade-up">
              <span className="label-line"></span>
              <span className="label-text">The Lockzie Story</span>
            </div>
            
            <h2 className="story-heading" data-aos="fade-up" data-aos-delay="100">
              Luxury in Every Strand,<br />Confidence in Every Person
            </h2>
            
            <div className="story-paragraphs">
              <p data-aos="fade-up" data-aos-delay="200">
                At Lockzie Hair, we create premium hair extension and hair replacement solutions using 100% ethically sourced Double Drawn Human Hair. Every service is tailored to your hair type, lifestyle, and personal style, ensuring a flawless, natural looking finish.
              </p>
              <p data-aos="fade-up" data-aos-delay="300">
                From advanced extension techniques to customized toppers and hair replacement systems, every transformation is crafted with precision, comfort, and care. Because at Lockzie Hair, we don't just create beautiful hair, we create confidence that feels uniquely yours.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="story-quote-container" data-aos="fade-up">
          <h2 className="story-quote">
            "Every strand we create carries confidence.<br />
            Every transformation tells your story."
          </h2>
          <p className="quote-author" data-aos="fade-up" data-aos-delay="100">Vishnu Priya, Founder</p>
        </div>
      </div>
    </section>
  );
};

export default Story;
