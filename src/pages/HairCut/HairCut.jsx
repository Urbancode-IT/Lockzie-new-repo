import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ContactForm from '../../components/ContactForm/ContactForm';
import './HairCut.css';

const HairCut = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeService, setActiveService] = useState('straight');

  const getServiceImage = () => {
    if (activeService === 'layers') {
      return 'https://res.cloudinary.com/r0vgotvj/image/upload/v1788527657/Hair_cut_internal_page_webp_4.webp';
    }
    return 'https://res.cloudinary.com/r0vgotvj/image/upload/v1788527669/Hair_cut_internal_page_webp_3.webp';
  };

  return (
    <div className="haircut-page">
      <Navbar />
      
      <section className="haircut-hero" style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.57), rgba(0, 0, 0, 0.57)), url('https://res.cloudinary.com/r0vgotvj/image/upload/v1789015944/Hair_cut_hero_1_webp.webp')` }}>
        <div className="haircut-hero-content">
          <h1>Hair Cut</h1>
        </div>
      </section>

      <section className="precision-haircut-section">
        <div className="precision-haircut-container">
          <div className="precision-image-wrapper">
            <img src="https://res.cloudinary.com/r0vgotvj/image/upload/v1788527653/Hair_cut_internal_page_webp_1.webp" alt="Precision Haircut" />
          </div>
          <div className="precision-text-content">
            <h2>Precision Haircuts<br/>Tailored to You</h2>
            <p>
              A great haircut is more than just a style—it's a reflection of your personality. Our professional stylists create customized haircuts that complement your face shape, hair texture, and lifestyle, ensuring you leave looking and feeling your best. Whether you're looking for a classic trim, a trendy layered cut, a bold transformation, or a complete style makeover, we deliver precision, creativity, and attention to detail in every cut.
            </p>
          </div>
        </div>
      </section>

      <section className="why-choose-haircut-section">
        <div className="why-choose-container">
          <div className="why-choose-text-content">
            <h2>Why Choose Our<br/>Haircut Service?</h2>
            <ul>
              <li>Personalized consultation before every haircut</li>
              <li>Expert stylists with the latest cutting techniques</li>
              <li>Customized styles based on face shape and hair type</li>
              <li>Clean, hygienic, and comfortable salon environment</li>
              <li>Premium products for healthy-looking hair</li>
              <li>Long-lasting styles that are easy to maintain</li>
            </ul>
          </div>
          <div className="why-choose-image-wrapper">
            <img src="https://res.cloudinary.com/r0vgotvj/image/upload/v1788527666/Hair_cut_internal_page_webp_2.webp" alt="Why Choose Us" />
          </div>
        </div>
      </section>

      <section className="haircut-services-section">
        <div className="haircut-services-container">
          <div className="haircut-services-text-content">
            <h2>Haircut Services</h2>
            <div className="services-list">
              <div 
                className={`service-item ${activeService === 'straight' ? 'active' : 'inactive'}`}
                onMouseEnter={() => setActiveService('straight')}
              >
                <span className="service-dash"></span>
                <span className="service-name">Straight/U/V Cut</span>
              </div>
              <div 
                className={`service-item ${activeService === 'layers' ? 'active' : 'inactive'}`}
                onMouseEnter={() => setActiveService('layers')}
              >
                <span className="service-dash"></span>
                <span className="service-name">Layers</span>
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

export default HairCut;
