import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ContactForm from '../../components/ContactForm/ContactForm';
import './HairStyling.css';

const HairStyling = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeService, setActiveService] = useState('washFlatDry');

  const getServiceImage = () => {
    switch (activeService) {
      case 'washBounceDry':
        return 'https://res.cloudinary.com/r0vgotvj/image/upload/v1789017215/Hair_styling_5_webp.webp';
      case 'ironing':
        return 'https://res.cloudinary.com/r0vgotvj/image/upload/v1789017216/Hair_styling_6_webp.webp';
      case 'washFlatDry':
      default:
        return 'https://res.cloudinary.com/r0vgotvj/image/upload/v1789017214/Hair_styling_4_webp.webp';
    }
  };

  return (
    <div className="hair-styling-page">
      <Navbar />
      
      <section className="haircut-hero" style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.57), rgba(0, 0, 0, 0.57)), url('https://res.cloudinary.com/r0vgotvj/image/upload/v1789017217/Hair_styling_hero_1_webp.webp')` }}>
        <div className="haircut-hero-content">
          <h1>Hair Styling</h1>
        </div>
      </section>

      <section className="precision-haircut-section">
        <div className="precision-haircut-container">
          <div className="precision-image-wrapper">
            <img src="https://res.cloudinary.com/r0vgotvj/image/upload/v1789017211/Hair_styling_2_webp.webp" alt="Precision Haircut" />
          </div>
          <div className="precision-text-content">
            <h2>Expert Styling<br/>Tailored to You</h2>
            <p>Your hair is your best accessory. Our professional stylists create stunning, customized looks that complement your features and lifestyle, ensuring you leave looking and feeling your absolute best. From sleek blowouts to elegant updos, we deliver creativity, volume, and attention to detail in every style.</p>
          </div>
        </div>
      </section>

      <section className="why-choose-haircut-section">
        <div className="why-choose-container">
          <div className="why-choose-text-content">
            <h2>Why Choose Our<br/>Styling Service?</h2>
            <ul>
              <li>Personalized consultation for every occasion</li>
              <li>Expert stylists with the latest styling tools</li>
              <li>Customized looks based on face shape and event</li>
              <li>Clean, relaxing, and comfortable salon environment</li>
              <li>Premium products for heat protection and hold</li>
              <li>Long-lasting styles that turn heads all night</li>
            </ul>
          </div>
          <div className="why-choose-image-wrapper">
            <img src="https://res.cloudinary.com/r0vgotvj/image/upload/v1789017213/Hair_styling_3_webp.webp" alt="Why Choose Us" />
          </div>
        </div>
      </section>

      <section className="haircut-services-section">
        <div className="haircut-services-container">
          <div className="haircut-services-text-content">
            <h2>Styling Services</h2>
            <div className="services-list">
              <div 
                className={`service-item ${activeService === 'washFlatDry' ? 'active' : 'inactive'}`}
                onMouseEnter={() => setActiveService('washFlatDry')}
              >
                <span className="service-dash"></span>
                <span className="service-name">Wash and Flat Dry</span>
              </div>
              <div 
                className={`service-item ${activeService === 'washBounceDry' ? 'active' : 'inactive'}`}
                onMouseEnter={() => setActiveService('washBounceDry')}
              >
                <span className="service-dash"></span>
                <span className="service-name">Wash and Bounce Dry</span>
              </div>
              <div 
                className={`service-item ${activeService === 'ironing' ? 'active' : 'inactive'}`}
                onMouseEnter={() => setActiveService('ironing')}
              >
                <span className="service-dash"></span>
                <span className="service-name">Ironing/Tongs</span>
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

export default HairStyling;
