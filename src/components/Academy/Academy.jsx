import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Academy.css';

const AcademyCard = ({ level, duration, title, price, features, isPopular, delay }) => {
  const navigate = useNavigate();
  return (
    <div className={`academy-card ${isPopular ? 'popular-card' : ''}`} data-aos="fade-up" data-aos-delay={delay}>
      {isPopular && (
        <div className="popular-badge">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 0L7.6 4.4L12 6L7.6 7.6L6 12L4.4 7.6L0 6L4.4 4.4L6 0Z" fill="#0A0A0A"/>
          </svg>
          Most Popular
        </div>
      )}
      
      <div className="academy-card-top">
        <span className="academy-level">{level}</span>
        <div className="academy-duration">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 6V12L16 14"></path>
          </svg>
          <span>{duration}</span>
        </div>
      </div>
      
      <h3 className="academy-card-title">{title}</h3>
      
      <div className="academy-card-price">
        <span className="price-amount">
          <span className="currency-symbol">₹</span>
          {price}
        </span>
        <span className="price-period">/ person</span>
      </div>
      
      <div className="academy-certified">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
        <span>Certified on completion</span>
      </div>
      
      <ul className="academy-features">
        {features.map((feature, index) => (
          <li key={index}>
            <div className="feature-icon">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 5L4 7L8 3" stroke={isPopular ? "#0A0A0A" : "#FAFAF9"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <button className="academy-btn" onClick={() => navigate('/academy')}>View More</button>
    </div>
  );
};

const Academy = () => {
  const programs = [
    {
      level: 'Beginner',
      duration: '1 Day',
      title: 'Look & Learn Seminar',
      price: '9,999',
      features: [
        'Intro to Hair Extensions',
        'Virgin vs Remy Hair Quality',
        'Consultation & Scalp Analysis',
        'Live Demo: I-Tip, Tape-In, K-Tip'
      ],
      isPopular: false
    },
    {
      level: 'Intermediate',
      duration: '2 Days',
      title: 'Hands-on Workshop',
      price: '14,999',
      features: [
        'Comprehensive Extension Theory',
        'Hands-on: I-Tip, Nano Ring, Tape-In',
        'Application & Removal Techniques',
        'Upselling & Client Retention',
        'Certificate of Completion'
      ],
      isPopular: true
    },
    {
      level: 'Advanced',
      duration: '5 Days',
      title: 'Pro Certification',
      price: '49,999',
      features: [
        'Complete Extension Mastery Program',
        'Hands-on: All Extension Types',
        'Mesh Integration System Training',
        'Premium Pricing & Luxury Packages',
        'Real-Time Supervised Sessions'
      ],
      isPopular: false
    }
  ];

  return (
    <section className="academy-section">
      <div className="academy-header">
        <span className="academy-label" data-aos="fade-up">The House Of Hair Mastery</span>
        <h2 className="academy-heading" data-aos="fade-up" data-aos-delay="100">
          Master Every Technique,<br/>Own Every Transformation.
        </h2>
        <p className="academy-subheading" data-aos="fade-up" data-aos-delay="200">
          Professional Certification Programs Designed To Shape The Next Generation Of Luxury Hair Extension Specialists.
        </p>
      </div>

      <div className="academy-cards-wrapper">
        {programs.map((program, index) => (
          <AcademyCard key={index} delay={index * 150} {...program} />
        ))}
      </div>
    </section>
  );
};

export default Academy;
