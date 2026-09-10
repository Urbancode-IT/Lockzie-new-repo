import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ContactForm from '../../components/ContactForm/ContactForm';
import './KoreanSkin.css';

const KoreanSkin = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeService, setActiveService] = useState('k-pure');

  const getServiceImage = () => {
    if (activeService === 'k-lumi') {
      return 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Korean_skin_internal_page_webp_4.webp';
    }
    return 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Korean_skin_internal_page_webp_3.webp';
  };

  return (
    <div className="korean-skin-page">
      <style>{`
        @media (min-width: 993px) {
          .haircut-services-text-content h2, .why-choose-text-content h2 {
            white-space: nowrap;
            font-size: 50px;
          }
        }
      `}</style>
      <Navbar />
      
      <section className="haircut-hero" style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.57), rgba(0, 0, 0, 0.57)), url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/Korean_skin_hero_internal_page_webp.webp')` }}>
        <div className="haircut-hero-content">
          <h1>Korean Skin</h1>
        </div>
      </section>

      <section className="precision-haircut-section">
        <div className="precision-haircut-container">
          <div className="precision-image-wrapper">
            <img src="https://res.cloudinary.com/r0vgotvj/image/upload/v1/Korean_skin_internal_page_webp_1.webp" alt="Precision Haircut" />
          </div>
          <div className="precision-text-content">
            <h2>Glass Skin Glow<br/>Tailored to You</h2>
            <p>K-Beauty treatments are renowned for their transformative, hydrating results. Our aestheticians create customized regimens using advanced K-Pure Refine Derma Infusion and K-Lumi Glow Renewal Therapy to nourish your barrier, ensuring you leave with a radiant complexion. We deliver ultimate dewy glowing perfection.</p>
          </div>
        </div>
      </section>

      <section className="why-choose-haircut-section">
        <div className="why-choose-container">
          <div className="why-choose-text-content">
            <h2>Why Choose Our<br/>Korean Skincare?</h2>
            <ul>
              <li>K-Pure Infusion for deep pore cleansing</li>
              <li>K-Lumi Glow Therapy for ultimate hydration</li>
              <li>Expert aestheticians for K-Beauty treatments</li>
              <li>Medical-grade skincare for all skin types</li>
              <li>Relaxing spa environment for your comfort</li>
              <li>Long-lasting glow and improved skin texture</li>
            </ul>
          </div>
          <div className="why-choose-image-wrapper">
            <img src="https://res.cloudinary.com/r0vgotvj/image/upload/v1/Korean_skin_internal_page_webp_2.webp" alt="Why Choose Us" />
          </div>
        </div>
      </section>

      <section className="haircut-services-section">
        <div className="haircut-services-container">
          <div className="haircut-services-text-content">
            <h2>Skincare Services</h2>
            <div className="services-list">
              <div 
                className={`service-item ${activeService === 'k-pure' ? 'active' : 'inactive'}`}
                onMouseEnter={() => setActiveService('k-pure')}
              >
                <span className="service-dash"></span>
                <span className="service-name">K-Pure Refine Derma Infusion</span>
              </div>
              <div 
                className={`service-item ${activeService === 'k-lumi' ? 'active' : 'inactive'}`}
                onMouseEnter={() => setActiveService('k-lumi')}
              >
                <span className="service-dash"></span>
                <span className="service-name">K-Lumi Glow Renewal Therapy</span>
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

export default KoreanSkin;
