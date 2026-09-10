import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ContactForm from '../../components/ContactForm/ContactForm';
import './Waxing.css';

const Waxing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeService, setActiveService] = useState('straight');

  const getServiceImage = () => {
    if (activeService === 'layers') {
      return 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Waxing_internal_page_webp_4.webp';
    }
    return 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Waxing_internal_page_webp_3.webp';
  };

  return (
    <div className="waxing-page">
      <Navbar />
      
      <section className="haircut-hero" style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.57), rgba(0, 0, 0, 0.57)), url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/Waxing_internal_page_webp.webp')` }}>
        <div className="haircut-hero-content">
          <h1>Waxing</h1>
        </div>
      </section>

      <section className="precision-haircut-section">
        <div className="precision-haircut-container">
          <div className="precision-image-wrapper">
            <img src="https://res.cloudinary.com/r0vgotvj/image/upload/v1/Waxing_internal_page_webp_1.webp" alt="Precision Haircut" />
          </div>
          <div className="precision-text-content">
            <h2>Smooth & Flawless<br/>Tailored to You</h2>
            <p>A great waxing experience is more than just hair removal—it's about comfort and care. Our professional aestheticians use premium wax to ensure a smooth, long-lasting finish while being gentle on your skin. Whether you need a quick touch-up or a full-body session, we deliver precision, hygiene, and attention to detail every time.</p>
          </div>
        </div>
      </section>

      <section className="why-choose-haircut-section">
        <div className="why-choose-container">
          <div className="why-choose-text-content">
            <h2>Why Choose Our<br/>Waxing Service?</h2>
            <ul>
              <li>Personalized consultation for your skin type</li>
              <li>Expert aestheticians with gentle techniques</li>
              <li>Customized treatments based on your needs</li>
              <li>Clean, hygienic, and comfortable salon environment</li>
              <li>Premium wax products for sensitive skin</li>
              <li>Long-lasting smoothness that is easy to maintain</li>
            </ul>
          </div>
          <div className="why-choose-image-wrapper">
            <img src="https://res.cloudinary.com/r0vgotvj/image/upload/v1/Waxing_internal_page_webp_2.webp" alt="Why Choose Us" />
          </div>
        </div>
      </section>

      <section className="haircut-services-section">
        <div className="haircut-services-container">
          <div className="haircut-services-text-content">
            <h2>Waxing Services</h2>
            <div className="services-list">
              <div 
                className={`service-item ${activeService === 'straight' ? 'active' : 'inactive'}`}
                onMouseEnter={() => setActiveService('straight')}
              >
                <span className="service-dash"></span>
                <span className="service-name">Full Body Waxing</span>
              </div>
              <div 
                className={`service-item ${activeService === 'layers' ? 'active' : 'inactive'}`}
                onMouseEnter={() => setActiveService('layers')}
              >
                <span className="service-dash"></span>
                <span className="service-name">Facial Waxing</span>
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

export default Waxing;
