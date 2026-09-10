import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ContactForm from '../../components/ContactForm/ContactForm';
import './PamperTheSkin.css';

const PamperTheSkin = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeService, setActiveService] = useState('radiance');

  const getServiceImage = () => {
    if (activeService === 'timeless') {
      return 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Pampering_skin_internal_page_webp_4.webp';
    }
    return 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Pampering_skin_internal_page_webp_3.webp';
  };

  return (
    <div className="pamper-the-skin-page">
      <style>{`
        @media (min-width: 993px) {
          .haircut-services-text-content h2, .why-choose-text-content h2 {
            white-space: nowrap;
            font-size: 50px;
          }
        }
      `}</style>
      <Navbar />
      
      <section className="haircut-hero" style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.57), rgba(0, 0, 0, 0.57)), url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/Pampering_skin_hero_internal_page_webp.webp')` }}>
        <div className="haircut-hero-content">
          <h1>Skin Pampering</h1>
        </div>
      </section>

      <section className="precision-haircut-section">
        <div className="precision-haircut-container">
          <div className="precision-image-wrapper">
            <img src="https://res.cloudinary.com/r0vgotvj/image/upload/v1/Pampering_skin_internal_page_webp_1.webp" alt="Precision Haircut" />
          </div>
          <div className="precision-text-content">
            <h2>Ultimate Relaxation<br/>Tailored to You</h2>
            <p>Escape the stress of daily life with our luxurious skin pampering treatments. Our professional therapists create a customized spa experience that rejuvenates your skin and relaxes your mind, ensuring you leave with a luminous glow. Indulge in premium exfoliants, rich masks, and soothing massages.</p>
          </div>
        </div>
      </section>

      <section className="why-choose-haircut-section">
        <div className="why-choose-container">
          <div className="why-choose-text-content">
            <h2>Why Choose Our<br/>Pampering Service?</h2>
            <ul>
              <li>Ultra Radiance Glow treatments for bright, luminous skin</li>
              <li>Timeless Glow Facials to reduce aging and restore youth</li>
              <li>Advanced deep cleansing for a flawless, clear complexion</li>
              <li>Premium collagen serums for ultimate hydration and firming</li>
              <li>Relaxing facial massages to improve circulation and tone</li>
              <li>Professional aesthetic care tailored to your skin type</li>
            </ul>
          </div>
          <div className="why-choose-image-wrapper">
            <img src="https://res.cloudinary.com/r0vgotvj/image/upload/v1/Pampering_skin_internal_page_webp_2.webp" alt="Why Choose Us" />
          </div>
        </div>
      </section>

      <section className="haircut-services-section">
        <div className="haircut-services-container">
          <div className="haircut-services-text-content">
            <h2>Pampering Services</h2>
            <div className="services-list">
              <div 
                className={`service-item ${activeService === 'radiance' ? 'active' : 'inactive'}`}
                onMouseEnter={() => setActiveService('radiance')}
              >
                <span className="service-dash"></span>
                <span className="service-name">Ultra Radiance Glow</span>
              </div>
              <div 
                className={`service-item ${activeService === 'timeless' ? 'active' : 'inactive'}`}
                onMouseEnter={() => setActiveService('timeless')}
              >
                <span className="service-dash"></span>
                <span className="service-name">Timeless Glow Facial</span>
              </div>
            </div>
          </div>
          <div className="haircut-services-image-wrapper">
            <img src={getServiceImage()} alt="Haircut Services" style={{ transition: 'all 0.3s ease' }} />
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default PamperTheSkin;
