import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ContactForm from '../../components/ContactForm/ContactForm';
import './Pedicure.css';

const Pedicure = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeService, setActiveService] = useState('essential');

  const getServiceImage = () => {
    if (activeService === 'luxe') {
      return 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Pedicure_internal_page_webp_4.webp';
    }
    return 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Pedicure_internal_page_webp_3.webp';
  };

  return (
    <div className="pedicure-page">
      <Navbar />
      
      <section className="haircut-hero" style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.57), rgba(0, 0, 0, 0.57)), url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/Pedicure_hero_internal_page_webp.webp')` }}>
        <div className="haircut-hero-content">
          <h1>Pedicure</h1>
        </div>
      </section>

      <section className="precision-haircut-section">
        <div className="precision-haircut-container">
          <div className="precision-image-wrapper">
            <img src="https://res.cloudinary.com/r0vgotvj/image/upload/v1/Pedicure_internal_page_webp_1.webp" alt="Precision Haircut" />
          </div>
          <div className="precision-text-content">
            <h2>Relaxing Foot Care<br/>Tailored to You</h2>
            <p>A great pedicure is about both beauty and wellness. Our professional technicians create a soothing, customized foot care experience that softens your skin and beautifies your toes, ensuring you leave feeling refreshed. Sit back, relax, and let us deliver precision, hygiene, and ultimate pampering.</p>
          </div>
        </div>
      </section>

      <section className="why-choose-haircut-section">
        <div className="why-choose-container">
          <div className="why-choose-text-content">
            <h2>Why Choose Our<br/>Pedicure Service?</h2>
            <ul>
              <li>Personalized care for foot wellness</li>
              <li>Expert technicians with meticulous techniques</li>
              <li>Customized treatments based on skin condition</li>
              <li>Hospital-grade sterilization for all tools</li>
              <li>Premium scrubs and polishes for a perfect finish</li>
              <li>Long-lasting comfort and beautiful toes</li>
            </ul>
          </div>
          <div className="why-choose-image-wrapper">
            <img src="https://res.cloudinary.com/r0vgotvj/image/upload/v1/Pedicure_internal_page_webp_2.webp" alt="Why Choose Us" />
          </div>
        </div>
      </section>

      <section className="haircut-services-section">
        <div className="haircut-services-container">
          <div className="haircut-services-text-content">
            <h2>Pedicure Services</h2>
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

export default Pedicure;
