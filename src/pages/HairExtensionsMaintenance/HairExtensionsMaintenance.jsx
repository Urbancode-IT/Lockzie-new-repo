import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ContactForm from '../../components/ContactForm/ContactForm';
import './HairExtensionsMaintenance.css';

const HairExtensionsMaintenance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeService, setActiveService] = useState('refix');

  const getServiceImage = () => {
    if (activeService === 'tighten') {
      return 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Hair_extension_maintanace_webp_4.webp';
    }
    return 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Hair_extension_maintanace_webp_3.webp';
  };

  return (
    <div className="hair-extensions-maintenance-page">
      <style>{`
        @media (min-width: 993px) {
          .haircut-services-text-content h2 {
            white-space: nowrap;
            font-size: 50px;
          }
        }
      `}</style>
      <Navbar />
      
      <section className="haircut-hero" style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.57), rgba(0, 0, 0, 0.57)), url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/Hair_extension_maintanace_hero_webp.webp')` }}>
        <div className="haircut-hero-content">
          <h1>Extensions Care</h1>
        </div>
      </section>

      <section className="precision-haircut-section">
        <div className="precision-haircut-container">
          <div className="precision-image-wrapper">
            <img src="https://res.cloudinary.com/r0vgotvj/image/upload/v1/Hair_extension_maintanace_webp_1.webp" alt="Precision Haircut" />
          </div>
          <div className="precision-text-content">
            <h2>Flawless Blending<br/>Tailored to You</h2>
            <p>Maintaining your extensions is crucial for protecting your natural hair and keeping your investment looking seamless. Our professional stylists offer customized maintenance routines that keep your extensions secure, detangled, and perfectly blended, ensuring you leave with voluminous, healthy-looking hair.</p>
          </div>
        </div>
      </section>

      <section className="why-choose-haircut-section">
        <div className="why-choose-container">
          <div className="why-choose-text-content">
            <h2>Why Choose Our<br/>Maintenance Service?</h2>
            <ul>
              <li>Professional remove and refix services for seamless longevity</li>
              <li>Expert row tightening to secure and maintain extensions safely</li>
              <li>Safe, damage-free bond removal to protect natural hair</li>
              <li>Custom realignment and blending for a refreshed, undetectable look</li>
              <li>Premium detangling and clarifying by certified specialists</li>
              <li>Routine maintenance schedules to maximize extension life</li>
            </ul>
          </div>
          <div className="why-choose-image-wrapper">
            <img src="https://res.cloudinary.com/r0vgotvj/image/upload/v1/Hair_extension_maintanace_webp_2.webp" alt="Why Choose Us" />
          </div>
        </div>
      </section>

      <section className="haircut-services-section">
        <div className="haircut-services-container">
          <div className="haircut-services-text-content">
            <h2>Maintenance Services</h2>
            <div className="services-list">
              <div 
                className={`service-item ${activeService === 'refix' ? 'active' : 'inactive'}`}
                onMouseEnter={() => setActiveService('refix')}
              >
                <span className="service-dash"></span>
                <span className="service-name">Lockzie Remove and Refix</span>
              </div>
              <div 
                className={`service-item ${activeService === 'tighten' ? 'active' : 'inactive'}`}
                onMouseEnter={() => setActiveService('tighten')}
              >
                <span className="service-dash"></span>
                <span className="service-name">Lockzie Row Tightening</span>
              </div>
            </div>
          </div>
          <div className="haircut-services-image-wrapper">
            <img src={getServiceImage()} alt="Haircut Services" style={{ transition: 'all 0.3s ease', objectPosition: 'center 20%' }} />
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default HairExtensionsMaintenance;
