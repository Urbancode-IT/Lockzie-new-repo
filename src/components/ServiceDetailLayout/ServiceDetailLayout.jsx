import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './ServiceDetailLayout.css';

const ServiceDetailLayout = ({ data }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScheduleClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
      let attempts = 0;
      const checkAndScroll = setInterval(() => {
        const element = document.getElementById('contact-form-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          clearInterval(checkAndScroll);
        }
        attempts++;
        if (attempts > 20) clearInterval(checkAndScroll);
      }, 100);
    } else {
      const element = document.getElementById('contact-form-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleContactClick = () => {
    window.open('https://wa.me/919566662642?text=Hi%20Lockzie%20Hair!%20I%20am%20interested%20in%20your%20services.%20Could%20you%20please%20share%20more%20details%3F', '_blank');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  if (!data) return null;

  return (
    <div className="service-detail-page">
      <Navbar forceScrolled={true} />
      
      <section className="service-hero">
        <div className="service-hero-content">
          <div className="service-text-wrapper">
            <h1 className="service-title" dangerouslySetInnerHTML={{ __html: data.hero.title }}></h1>
            <p className="service-desc">{data.hero.desc}</p>
          </div>
          <div className="service-image-wrapper">
            {data.hero.video ? (
              <video src={data.hero.video} autoPlay loop muted playsInline />
            ) : (
              <img src={data.hero.image} alt={data.hero.imageAlt || "Service"} />
            )}
          </div>
        </div>
      </section>

      {data.anatomy && (
        <section className="anatomy-base-section">
          <div className="anatomy-base-container">
            <div className="anatomy-image-wrapper">
              <img src={data.anatomy.image} alt="Anatomy" />
              <div className="anatomy-floating-card">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z" stroke="#A1A1A1" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M5.5 3.5L6.5 6.5L9.5 7.5L6.5 8.5L5.5 11.5L4.5 8.5L1.5 7.5L4.5 6.5L5.5 3.5Z" stroke="#A1A1A1" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
                <h3 className="anatomy-card-title">{data.anatomy.cardTitle}</h3>
                <p className="anatomy-card-desc">{data.anatomy.cardDesc}</p>
              </div>
            </div>
            
            <div className="anatomy-text-content">
              <h2 className="anatomy-title" dangerouslySetInnerHTML={{ __html: data.anatomy.title }}></h2>
              <div className="anatomy-paragraphs">
                {data.anatomy.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {data.why && (
        <section className="why-service-section">
          <div className="why-service-container">
            <div className="why-service-header">
              <h2>{data.why.title}</h2>
              <p>{data.why.desc}</p>
            </div>
            
            <div className="why-service-list">
              {data.why.points.map((point, idx) => (
                <React.Fragment key={idx}>
                  <div className="why-service-item">
                    <span className="why-service-number">0{idx + 1}</span>
                    <div className="why-service-content">
                      <h3>{point.title}</h3>
                      <p>{point.desc}</p>
                    </div>
                  </div>
                  {idx < data.why.points.length - 1 && <div className="why-service-divider"></div>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>
      )}

      {data.gallery && (
        <section className="difference-section">
          <div className="difference-container">
            <div className="difference-header">
              <h2>See the<br/><span className="difference-text-grey">Extensions</span></h2>
              <p>{data.gallery.desc || "Explore how our extensions blend seamlessly with natural hair, providing flawless coverage."}</p>
            </div>
            
            <div className="difference-gallery">
              {data.gallery.images.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`difference-image img-${idx + 1}`}
                  style={{ backgroundImage: `url('${img}')` }}
                ></div>
              ))}
            </div>
          </div>
        </section>
      )}

      {data.signature && (
        <section className="signature-section">
          <div className="signature-container">
            <h2 className="signature-title">Signature Features</h2>
            
            <div className="signature-table">
              <div className="signature-header-row">
                <span className="signature-col-left-header">Feature</span>
                <span className="signature-col-right-header">{data.signature.title}</span>
              </div>
              
              <div className="signature-divider"></div>
              
              {data.signature.features.map((feature, idx) => (
                <div className="signature-row" key={idx}>
                  <span className="signature-col-left">{feature.name}</span>
                  <span className="signature-col-right">{feature.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="next-step-section">
        <div className="next-step-container">
          <span className="next-step-subtitle">Take the next step</span>
          <h2 className="next-step-title">Find Your Perfect Match</h2>
          <p className="next-step-desc">
            Our experts are here to help you navigate your options. Book a free, no-obligation consultation.
          </p>
          
          <div className="next-step-buttons">
            <button className="next-step-btn-primary" onClick={handleScheduleClick}>Schedule Consultation</button>
            <button className="next-step-btn-secondary" onClick={handleContactClick}>Contact the Atelier</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailLayout;
