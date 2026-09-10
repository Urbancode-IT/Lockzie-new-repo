import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ContactForm from '../../components/ContactForm/ContactForm';
import './TexturedHair.css';

const TexturedHair = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeService, setActiveService] = useState('antifrizz');

  const getServiceImage = () => {
    if (activeService === 'perming') {
      return 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Textured_hair_internal_page_webp_4.webp';
    }
    return 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Textured_hair_internal_page_webp_3.webp';
  };

  return (
    <div className="textured-hair-page">
      <style>{`
        @media (min-width: 993px) {
          .why-choose-text-content h2 {
            white-space: nowrap;
            font-size: 54px;
          }
        }
      `}</style>
      <Navbar />
      
      <section className="haircut-hero" style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.57), rgba(0, 0, 0, 0.57)), url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/Textured_hair_hero_section_webp_ratio_changed.webp')` }}>
        <div className="haircut-hero-content">
          <h1>Textured Hair</h1>
        </div>
      </section>

      <section className="precision-haircut-section">
        <div className="precision-haircut-container">
          <div className="precision-image-wrapper">
            <img src="https://res.cloudinary.com/r0vgotvj/image/upload/v1/Textured_hair_internal_page_webp_1.webp" alt="Precision Haircut" style={{ objectPosition: "center 20%" }} />
          </div>
          <div className="precision-text-content">
            <h2>Embrace Your Curls<br/>Tailored to You</h2>
            <p>Textured hair requires specialized knowledge and care. Our professional stylists are trained in customized cutting and hydrating techniques that enhance your natural curl pattern, ensuring your hair looks its healthiest. Whether you have wavy, curly, or coily hair, we deliver precision, moisture, and definition.</p>
          </div>
        </div>
      </section>

      <section className="why-choose-haircut-section">
        <div className="why-choose-container">
          <div className="why-choose-text-content">
            <h2>Why Choose Our<br/>Textured Hair Service?</h2>
            <ul>
              <li>Custom anti-frizz treatments for smooth, conditioned hair</li>
              <li>Expert perming techniques for bouncy, long-lasting curls</li>
              <li>Advanced smoothing to eliminate frizz and keep natural body</li>
              <li>Professional curl mapping for personalized styling</li>
              <li>Premium texture-safe formulas that protect hair integrity</li>
              <li>Safe, damage-free processing for beautiful, healthy curls</li>
            </ul>
          </div>
          <div className="why-choose-image-wrapper">
            <img src="https://res.cloudinary.com/r0vgotvj/image/upload/v1/Textured_hair_internal_page_webp_2.webp" alt="Why Choose Us" />
          </div>
        </div>
      </section>

      <section className="haircut-services-section">
        <div className="haircut-services-container">
          <div className="haircut-services-text-content">
            <h2>Textured Services</h2>
            <div className="services-list">
              <div 
                className={`service-item ${activeService === 'antifrizz' ? 'active' : 'inactive'}`}
                onMouseEnter={() => setActiveService('antifrizz')}
              >
                <span className="service-dash"></span>
                <span className="service-name">Anti-Frizz</span>
              </div>
              <div 
                className={`service-item ${activeService === 'perming' ? 'active' : 'inactive'}`}
                onMouseEnter={() => setActiveService('perming')}
              >
                <span className="service-dash"></span>
                <span className="service-name">Hair Perming</span>
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

export default TexturedHair;
