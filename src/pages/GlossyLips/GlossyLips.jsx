import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ContactForm from '../../components/ContactForm/ContactForm';
import './GlossyLips.css';

const GlossyLips = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeService, setActiveService] = useState('k-pink');

  const getServiceImage = () => {
    if (activeService === 'k-light') {
      return 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Glossy_lips_internal_page_4.webp';
    }
    return 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Glossy_lips_internal_page_3.webp';
  };

  return (
    <div className="glossy-lips-page">
      <style>{`
        @media (min-width: 993px) {
          .haircut-services-text-content h2, .why-choose-text-content h2 {
            white-space: nowrap;
            font-size: 50px;
          }
        }
      `}</style>
      <Navbar />
      
      <section className="haircut-hero" style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.57), rgba(0, 0, 0, 0.57)), url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/Glossy_lips_hero_internal_page.webp')` }}>
        <div className="haircut-hero-content">
          <h1>Glossy Lips</h1>
        </div>
      </section>

      <section className="precision-haircut-section">
        <div className="precision-haircut-container">
          <div className="precision-image-wrapper">
            <img src="https://res.cloudinary.com/r0vgotvj/image/upload/v1/Glossy_lips_internal_page_1..webp" alt="Precision Haircut" />
          </div>
          <div className="precision-text-content">
            <h2>Perfect Pouts<br/>Tailored to You</h2>
            <p>Achieve the perfect, plump, and hydrated pout with our specialized K-Beauty lip treatments. Our professionals create customized K-Pink Perfect Lip Blush and K-Light Tight Radiance Rituals that enhance your natural shape, ensuring your lips stay soft, colorful, and irresistibly glossy every day.</p>
          </div>
        </div>
      </section>

      <section className="why-choose-haircut-section">
        <div className="why-choose-container">
          <div className="why-choose-text-content">
            <h2>Why Choose Our<br/>Lip Services?</h2>
            <ul>
              <li>K-Pink Perfect Lip Blush for a natural tint</li>
              <li>K-Light Radiance Ritual for deep hydration</li>
              <li>Expert aestheticians for lip color matching</li>
              <li>Customized K-Beauty lip tinting solutions</li>
              <li>Sterile, precise, and comfortable procedures</li>
              <li>Long-lasting color and irresistible gloss</li>
            </ul>
          </div>
          <div className="why-choose-image-wrapper">
            <img src="https://res.cloudinary.com/r0vgotvj/image/upload/v1/Glossy_lips_internal_page_2.webp" alt="Why Choose Us" />
          </div>
        </div>
      </section>

      <section className="haircut-services-section">
        <div className="haircut-services-container">
          <div className="haircut-services-text-content">
            <h2>Lip Services</h2>
            <div className="services-list">
              <div 
                className={`service-item ${activeService === 'k-pink' ? 'active' : 'inactive'}`}
                onMouseEnter={() => setActiveService('k-pink')}
              >
                <span className="service-dash"></span>
                <span className="service-name">K-Pink Perfect Lip Blush</span>
              </div>
              <div 
                className={`service-item ${activeService === 'k-light' ? 'active' : 'inactive'}`}
                onMouseEnter={() => setActiveService('k-light')}
              >
                <span className="service-dash"></span>
                <span className="service-name">K-Light Tight Radiance Ritual</span>
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

export default GlossyLips;
