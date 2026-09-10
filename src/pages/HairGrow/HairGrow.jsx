import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ContactForm from '../../components/ContactForm/ContactForm';
import './HairGrow.css';

const HairGrow = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeService, setActiveService] = useState('root');

  const getServiceImage = () => {
    if (activeService === 'crown') {
      return 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Hair_grow_internal_page_webp_4.webp';
    }
    return 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Hair_grow_internal_page_webp_3.webp';
  };

  return (
    <div className="hair-grow-page">
      <style>{`
        @media (min-width: 993px) {
          .haircut-services-text-content h2, .why-choose-text-content h2 {
            white-space: nowrap;
            font-size: 50px;
          }
        }
      `}</style>
      <Navbar />
      
      <section className="haircut-hero" style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.57), rgba(0, 0, 0, 0.57)), url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/Hair_grow_hero_internal_page_webp.webp')` }}>
        <div className="haircut-hero-content">
          <h1>Hair Growth Therapy</h1>
        </div>
      </section>

      <section className="precision-haircut-section">
        <div className="precision-haircut-container">
          <div className="precision-image-wrapper">
            <img src="https://res.cloudinary.com/r0vgotvj/image/upload/v1/Hair_grow_internal_page_webp_1.webp" alt="Precision Haircut" />
          </div>
          <div className="precision-text-content">
            <h2>Revitalized Scalps<br/>Tailored to You</h2>
            <p>Healthy hair starts at the root. Our specialized growth treatments, including the Root Revival Booster and K-Crown Boost Therapy, stimulate follicles to encourage thicker hair. Using advanced serums and expert techniques, we create a customized plan to combat thinning and help you achieve luscious, full locks.</p>
          </div>
        </div>
      </section>

      <section className="why-choose-haircut-section">
        <div className="why-choose-container">
          <div className="why-choose-text-content">
            <h2>Why Choose Our<br/>Growth Treatments?</h2>
            <ul>
              <li>Root Revival Booster for deep scalp stimulation</li>
              <li>K-Crown Boost Therapy for thicker, fuller hair</li>
              <li>Expert trichology-trained hair growth specialists</li>
              <li>Customized medical-grade hair loss treatments</li>
              <li>Relaxing and comfortable salon environment</li>
              <li>Long-term strategies for sustainable thickness</li>
            </ul>
          </div>
          <div className="why-choose-image-wrapper">
            <img src="https://res.cloudinary.com/r0vgotvj/image/upload/v1/Hair_grow_internal_page_webp_2.webp" alt="Why Choose Us" />
          </div>
        </div>
      </section>

      <section className="haircut-services-section">
        <div className="haircut-services-container">
          <div className="haircut-services-text-content">
            <h2>Growth Services</h2>
            <div className="services-list">
              <div 
                className={`service-item ${activeService === 'root' ? 'active' : 'inactive'}`}
                onMouseEnter={() => setActiveService('root')}
              >
                <span className="service-dash"></span>
                <span className="service-name">Root Revival Booster</span>
              </div>
              <div 
                className={`service-item ${activeService === 'crown' ? 'active' : 'inactive'}`}
                onMouseEnter={() => setActiveService('crown')}
              >
                <span className="service-dash"></span>
                <span className="service-name">K-Crown Boost Therapy</span>
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

export default HairGrow;
