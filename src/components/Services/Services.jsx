import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: '01',
      tag: 'Signature',
      title: 'Customized Hair Extensions',
      desc: [
        '100% Ethically Sourced Double Drawn Human Hair',
        'Handcrafted for a Seamless, Natural Blend',
        'Lightweight, Comfortable & Damage-Free Wear',
        'Tailored to Your Hair Type, Length & Lifestyle'
      ],
      image: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/studio_img1_webp.webp',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 16C5.34315 16 4 17.3431 4 19C4 20.6569 5.34315 22 7 22C8.65685 22 10 20.6569 10 19M7 16C8.65685 16 10 17.3431 10 19M7 16V14M10 19V14M17 16C15.3431 16 14 17.3431 14 19C14 20.6569 15.3431 22 17 22C18.6569 22 20 20.6569 20 19C20 17.3431 18.6569 16 17 16ZM17 16V14M14 19V14M7 14L19 4M17 14L5 4" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: '02',
      tag: 'Retail',
      title: 'Premium Hair Products',
      desc: [
        'Luxury Hair Care for Human Hair Extensions',
        'Professional Salon-Grade Styling Essentials',
        'Deep Nourishment, Shine & Frizz Control',
        'Crafted to Extend Beauty & Hair Longevity'
      ],
      image: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/rack_with_full_products_img_ai_webp.webp',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 10V6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6V10M4.15396 11.2307L5.61536 21.4614C5.77977 22.6124 6.76296 23.4614 7.92546 23.4614H16.0745C17.237 23.4614 18.2202 22.6124 18.3846 21.4614L19.846 11.2307C20.0382 9.88585 19.006 8.65381 17.6496 8.65381H6.35035C4.99399 8.65381 3.96175 9.88585 4.15396 11.2307Z" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: '03',
      tag: 'Academy',
      title: 'Lockzie Hair Academy',
      desc: [
        'Professional Hair Extension Certification Program',
        'Hands-On Training with Industry Experts',
        'International Techniques & Business Guidance',
        'Certification, Mentorship & Career Support'
      ],
      image: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/services_card_3_imgweb_p.webp',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className="services-section">
      <div className="services-header">
        <div className="services-label-container" data-aos="fade-up">
          <span className="services-label-line"></span>
          <span className="services-label">OUR SIGNATURE SERVICES</span>
        </div>
        <div className="services-header-content" data-aos="fade-up" data-aos-delay="100">
          <h2 className="services-heading">
            Crafted for Beauty.<br />Designed for Confidence.
          </h2>
          <p className="services-intro">
            Discover ethically sourced human hair extensions, salon grade retail products and expert academy training thoughtfully crafted for exceptional results.
          </p>
        </div>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card" data-aos="fade-up" data-aos-delay={index * 150}>
            <div className="service-image-container">
              <div 
                className="service-image" 
                style={{ backgroundImage: `url('${service.image}')` }}
              ></div>
              <div className="service-image-gradient"></div>
              
              <div className="service-icon">
                {service.icon}
              </div>
              
              <div className="service-tag">
                {service.id} — {service.tag}
              </div>
            </div>
            
            <div className="service-content">
              <h3 className="service-title">{service.title}</h3>
              <ul className="service-desc-list">
                {service.desc.map((point, i) => (
                  <li key={i} className="service-desc-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-tick">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="M7.5 12l3 3 6-6"></path>
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
