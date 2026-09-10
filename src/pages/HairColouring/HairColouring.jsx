import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ContactForm from '../../components/ContactForm/ContactForm';
import './HairColouring.css';

const HairColouring = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeService, setActiveService] = useState('rootsOnly');

  const getServiceImage = () => {
    switch (activeService) {
      case 'global':
        return 'https://res.cloudinary.com/r0vgotvj/image/upload/v1789018249/Hair_colouring_5_webp.webp';
      case 'earToEar':
        return 'https://res.cloudinary.com/r0vgotvj/image/upload/v1789018250/Hair_colouring_6_webp.webp';
      case 'hairFashionColor':
        return 'https://res.cloudinary.com/r0vgotvj/image/upload/v1789018251/Hair_colouring_7_webp.webp';
      case 'highlightsPerStreak':
        return 'https://res.cloudinary.com/r0vgotvj/image/upload/v1789018252/Hair_colouring_8_webp.webp';
      case 'rootsOnly':
      default:
        return 'https://res.cloudinary.com/r0vgotvj/image/upload/v1789018247/Hair_colouring_4_webp.webp';
    }
  };

  return (
    <div className="hair-colouring-page">
      <Navbar />
      
      <section className="hair-colouring-hero" style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.57), rgba(0, 0, 0, 0.57)), url('https://res.cloudinary.com/r0vgotvj/image/upload/v1789018253/Hair_colouring_hero_1_webp.webp')` }}>
        <div className="haircut-hero-content">
          <h1>Hair Colouring</h1>
        </div>
      </section>

      <section className="precision-haircut-section">
        <div className="precision-haircut-container">
          <div className="precision-image-wrapper">
            <img src="https://res.cloudinary.com/r0vgotvj/image/upload/v1789018246/Hair_colouring_2_webp.webp" alt="Precision Haircut" />
          </div>
          <div className="precision-text-content">
            <h2>Vibrant Colors<br/>Tailored to You</h2>
            <p>A great hair color is an expression of your identity. Our professional colorists create stunning, customized shades that complement your skin tone and personal style, ensuring you leave looking radiant. Whether you want a subtle balayage, full coverage, or bold fashion colors, we deliver precision and healthy results.</p>
          </div>
        </div>
      </section>

      <section className="why-choose-haircut-section">
        <div className="why-choose-container">
          <div className="why-choose-text-content">
            <h2>Why Choose Our<br/>Colouring Service?</h2>
            <ul>
              <li>Personalized consultation for shade matching</li>
              <li>Expert colorists with advanced blending techniques</li>
              <li>Customized placement based on face shape</li>
              <li>Clean, hygienic, and comfortable salon environment</li>
              <li>Premium products for vibrant, damage-free color</li>
              <li>Long-lasting vibrancy that is easy to maintain</li>
            </ul>
          </div>
          <div className="why-choose-image-wrapper">
            <img src="https://res.cloudinary.com/r0vgotvj/image/upload/v1789018246/Hair_colouring_3_webp.webp" alt="Why Choose Us" />
          </div>
        </div>
      </section>

      <section className="haircut-services-section">
        <div className="haircut-services-container">
          <div className="haircut-services-text-content">
            <h2>Colouring Services</h2>
            <div className="services-list">
              <div 
                className={`service-item ${activeService === 'rootsOnly' ? 'active' : 'inactive'}`}
                onMouseEnter={() => setActiveService('rootsOnly')}
              >
                <span className="service-dash"></span>
                <span className="service-name">Roots Only</span>
              </div>
              <div 
                className={`service-item ${activeService === 'global' ? 'active' : 'inactive'}`}
                onMouseEnter={() => setActiveService('global')}
              >
                <span className="service-dash"></span>
                <span className="service-name">Global</span>
              </div>
              <div 
                className={`service-item ${activeService === 'earToEar' ? 'active' : 'inactive'}`}
                onMouseEnter={() => setActiveService('earToEar')}
              >
                <span className="service-dash"></span>
                <span className="service-name">Ear to Ear</span>
              </div>
              <div 
                className={`service-item ${activeService === 'hairFashionColor' ? 'active' : 'inactive'}`}
                onMouseEnter={() => setActiveService('hairFashionColor')}
              >
                <span className="service-dash"></span>
                <span className="service-name">Hair Fashion Color</span>
              </div>
              <div 
                className={`service-item ${activeService === 'highlightsPerStreak' ? 'active' : 'inactive'}`}
                onMouseEnter={() => setActiveService('highlightsPerStreak')}
              >
                <span className="service-dash"></span>
                <span className="service-name">Highlights per Streak</span>
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

export default HairColouring;
