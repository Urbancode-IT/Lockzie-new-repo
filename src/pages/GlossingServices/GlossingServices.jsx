import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ContactForm from '../../components/ContactForm/ContactForm';
import './GlossingServices.css';

const GlossingServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeService, setActiveService] = useState('herbal');

  const getServiceImage = () => {
    if (activeService === 'medi') {
      return 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gloassing_services_internal_page_webp_4.webp';
    }
    return 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gloassing_services_internal_page_webp_3.webp';
  };

  return (
    <div className="glossing-services-page">
      <style>{`
        @media (min-width: 993px) {
          .haircut-services-text-content h2, .why-choose-text-content h2 {
            white-space: nowrap;
            font-size: 50px;
          }
        }
      `}</style>
      <Navbar />
      
      <section className="haircut-hero" style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.57), rgba(0, 0, 0, 0.57)), url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gloassing_services_hero_internal_page_webp.webp')` }}>
        <div className="haircut-hero-content">
          <h1>Glossing Services</h1>
        </div>
      </section>

      <section className="precision-haircut-section">
        <div className="precision-haircut-container">
          <div className="precision-image-wrapper">
            <img src="https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gloassing_services_internal_page_webp_1.webp" alt="Precision Haircut" />
          </div>
          <div className="precision-text-content">
            <h2>Mirror-Like Shine<br/>Tailored to You</h2>
            <p>A rejuvenating facial treatment is the secret to exceptionally clear, radiant skin. Our professional estheticians apply customized herbal and medical-grade products that cleanse the pores, tone unwanted pigmentation, and hydrate deeply, ensuring you leave with a polished, youthful glow that makes your skin shine.</p>
          </div>
        </div>
      </section>

      <section className="why-choose-haircut-section">
        <div className="why-choose-container">
          <div className="why-choose-text-content">
            <h2>Why Choose Our<br/>Glossing Service?</h2>
            <ul>
              <li>Custom Herbal Radiance Facials for a natural, luminous glow</li>
              <li>Advanced Medi Facials to deeply cleanse and clear pores</li>
              <li>Expert skin analysis for targeted tone correction</li>
              <li>Premium medical-grade ingredients to enhance natural beauty</li>
              <li>A relaxing, hygienic environment for the ultimate spa experience</li>
              <li>Long-lasting brilliance and visible texture improvement</li>
            </ul>
          </div>
          <div className="why-choose-image-wrapper">
            <img src="https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gloassing_services_internal_page_webp_2.webp" alt="Why Choose Us" />
          </div>
        </div>
      </section>

      <section className="haircut-services-section">
        <div className="haircut-services-container">
          <div className="haircut-services-text-content">
            <h2>Glossing Services</h2>
            <div className="services-list">
              <div 
                className={`service-item ${activeService === 'herbal' ? 'active' : 'inactive'}`}
                onMouseEnter={() => setActiveService('herbal')}
              >
                <span className="service-dash"></span>
                <span className="service-name">Herbal Radiance Facial</span>
              </div>
              <div 
                className={`service-item ${activeService === 'medi' ? 'active' : 'inactive'}`}
                onMouseEnter={() => setActiveService('medi')}
              >
                <span className="service-dash"></span>
                <span className="service-name">Medi Facial</span>
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

export default GlossingServices;
