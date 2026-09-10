import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ContactForm from '../../components/ContactForm/ContactForm';
import './Manicure.css';

const Manicure = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeService, setActiveService] = useState('essential');

  const getServiceImage = () => {
    if (activeService === 'luxe') {
      return 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Manicure_internal_page_webp_4.webp';
    }
    return 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Manicure_internal_page_webp_3.webp';
  };

  return (
    <div className="manicure-page">
      <style>{`
        @media (min-width: 993px) {
          .haircut-services-text-content h2 {
            white-space: nowrap;
            font-size: 50px;
          }
        }
      `}</style>
      <Navbar />
      
      <section className="haircut-hero" style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.57), rgba(0, 0, 0, 0.57)), url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/Manicure_hero_internal_page_webp.webp')` }}>
        <div className="haircut-hero-content">
          <h1>Manicure</h1>
        </div>
      </section>

      <section className="precision-haircut-section">
        <div className="precision-haircut-container">
          <div className="precision-image-wrapper">
            <img src="https://res.cloudinary.com/r0vgotvj/image/upload/v1/Manicure_internal_page_webp_1.webp" alt="Precision Haircut" />
          </div>
          <div className="precision-text-content">
            <h2>Flawless Nails<br/>Tailored to You</h2>
            <p>A great manicure is the ultimate finishing touch. Our professional nail technicians create stunning, customized nail art and care routines that complement your personal style, ensuring your hands look and feel their best. Whether you prefer classic polish, durable gel, or intricate designs, we deliver precision and care in every coat.</p>
          </div>
        </div>
      </section>

      <section className="why-choose-haircut-section">
        <div className="why-choose-container">
          <div className="why-choose-text-content">
            <h2>Why Choose Our<br/>Manicure Service?</h2>
            <ul>
              <li>Personalized consultation for nail health</li>
              <li>Expert technicians with meticulous techniques</li>
              <li>Customized designs based on your preferences</li>
              <li>Clean, hygienic, and sterilized salon tools</li>
              <li>Premium polishes for vibrant, chip-free color</li>
              <li>Long-lasting results that keep hands beautiful</li>
            </ul>
          </div>
          <div className="why-choose-image-wrapper">
            <img src="https://res.cloudinary.com/r0vgotvj/image/upload/v1/Manicure_internal_page_webp_2.webp" alt="Why Choose Us" />
          </div>
        </div>
      </section>

      <section className="haircut-services-section">
        <div className="haircut-services-container">
          <div className="haircut-services-text-content">
            <h2>Manicure Services</h2>
            <div className="services-list">
              <div 
                className={`service-item ${activeService === 'essential' ? 'active' : 'inactive'}`}
                onMouseEnter={() => setActiveService('essential')}
              >
                <span className="service-dash"></span>
                <span className="service-name">Essential</span>
              </div>
              <div 
                className={`service-item ${activeService === 'luxe' ? 'active' : 'inactive'}`}
                onMouseEnter={() => setActiveService('luxe')}
              >
                <span className="service-dash"></span>
                <span className="service-name">Luxe</span>
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

export default Manicure;
