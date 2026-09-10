import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './SilkBase.css';

const SilkBase = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="silk-base-page">
      <Navbar forceScrolled={true} />
      
      <section className="silk-base-hero">
        <div className="silk-base-hero-content">
          <div className="silk-base-text-wrapper">
            <h1 className="silk-base-title">The Art of<br/><span className="difference-text-grey" style={{ whiteSpace: 'nowrap', fontSize: '63px' }}>Silk Base Toppers</span></h1>
            <p className="silk-base-desc">
              Discover the gold standard of hair realism. Learn how silk base construction creates the most natural-looking scalp illusion in the extension and topper industry.
            </p>
          </div>
          <div className="silk-base-image-wrapper">
            <video 
              src="https://res.cloudinary.com/r0vgotvj/video/upload/v1/Silkbase_video_internal_page.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      <section className="anatomy-base-section">
        <div className="anatomy-base-container">
          <div className="anatomy-image-wrapper">
            <img src="https://res.cloudinary.com/r0vgotvj/image/upload/v1/silkbase_topper_internal_page.webp" alt="Anatomy of Base" />
            <div className="anatomy-floating-card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z" stroke="#A1A1A1" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M5.5 3.5L6.5 6.5L9.5 7.5L6.5 8.5L5.5 11.5L4.5 8.5L1.5 7.5L4.5 6.5L5.5 3.5Z" stroke="#A1A1A1" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
              <h3 className="anatomy-card-title">Zero Knots</h3>
              <p className="anatomy-card-desc">Multi-layered silk design means knots are entirely invisible to the naked eye.</p>
            </div>
          </div>
          
          <div className="anatomy-text-content">
            <h2 className="anatomy-title">Anatomy of<br/>the Base</h2>
            <div className="anatomy-paragraphs">
              <p>A Silk Base (sometimes referred to as an injected silk top) is constructed using a multi-layer technique that completely conceals the knots where the hair is tied to the base.</p>
              <p>Unlike standard lace bases where hair is tied directly to a visible mesh, a silk base features a layer of lace on the bottom and a piece of silk material on the top.</p>
              <p>Because the hair is injected through the silk, the knots are hidden between the layers. The result is a seamless illusion of hair growing directly out of your natural scalp.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-silk-section">
        <div className="why-silk-container">
          <div className="why-silk-header">
            <h2>Why Silk?</h2>
            <p>Considered the most realistic option available, highly recommended by styling professionals globally.</p>
          </div>
          
          <div className="why-silk-list">
            <div className="why-silk-item">
              <span className="why-silk-number">01</span>
              <div className="why-silk-content">
                <h3>Unmatched Realism</h3>
                <p>The part line mimics a real human scalp perfectly. You can part the hair anywhere on the silk top without ever worrying about revealing an artificial base or lace grid.</p>
              </div>
            </div>
            
            <div className="why-silk-divider"></div>
            
            <div className="why-silk-item">
              <span className="why-silk-number">02</span>
              <div className="why-silk-content">
                <h3>No Bleaching Needed</h3>
                <p>With standard lace, knots often need to be bleached to blend in. Silk bases hide the knots naturally, saving the hair from chemical damage and extending its lifespan.</p>
              </div>
            </div>
            
            <div className="why-silk-divider"></div>
            
            <div className="why-silk-item">
              <span className="why-silk-number">03</span>
              <div className="why-silk-content">
                <h3>Exceptional Durability</h3>
                <p>The double-layered construction makes silk bases sturdier than single-layer lace tops, allowing them to withstand daily wear, washing, and styling with ease.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="difference-section">
        <div className="difference-container">
          <div className="difference-header">
            <h2>See the<br/><span className="difference-text-grey">Extensions</span></h2>
            <p>Experience the most realistic scalp illusion and supreme comfort of our Silk Base toppers.</p>
          </div>
          
          <div className="difference-gallery">
            <div className="difference-image img-1" style={{ backgroundImage: `url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/silkbase_topper_internal_page_webp1.webp')` }}></div>
            <div className="difference-image img-2" style={{ backgroundImage: `url('https://res.cloudinary.com/r0vgotvj/image/upload/v1788951911/Silk_base_topper_vishnu_priya_new_1_webp.webp')` }}></div>
            <div className="difference-image img-3" style={{ backgroundImage: `url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/silkbase_topper_internal_page_webp3.webp')` }}></div>
            <div className="difference-image img-4" style={{ backgroundImage: `url('https://res.cloudinary.com/r0vgotvj/image/upload/v1788951909/Hair_line_patch_vishnu_priya_new_3_webp.webp')` }}></div>
            <div className="difference-image img-5" style={{ backgroundImage: `url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/silkbase_topper_internal_page_webp5.webp')` }}></div>
          </div>
        </div>
      </section>

      <section className="signature-section">
        <div className="signature-container">
          <h2 className="signature-title">Signature Features</h2>
          
          <div className="signature-table">
            <div className="signature-header-row">
              <span className="signature-col-left-header">Feature</span>
              <span className="signature-col-right-header">Silk Base</span>
            </div>
            
            <div className="signature-divider"></div>
            
            <div className="signature-row">
              <span className="signature-col-left">Knots Visibility</span>
              <span className="signature-col-right">100% hidden (injected)</span>
            </div>
            
            <div className="signature-row">
              <span className="signature-col-left">Scalp Appearance</span>
              <span className="signature-col-right">Highly realistic</span>
            </div>
            
            <div className="signature-row">
              <span className="signature-col-left">Breathability</span>
              <span className="signature-col-right">Slightly warmer</span>
            </div>
            
            <div className="signature-row">
              <span className="signature-col-left">Best For</span>
              <span className="signature-col-right">Natural part line focus</span>
            </div>
          </div>
        </div>
      </section>

      <section className="next-step-section">
        <div className="next-step-container">
          <span className="next-step-subtitle">Take the next step</span>
          <h2 className="next-step-title">Find Your Perfect Match</h2>
          <p className="next-step-desc">
            Our experts are here to help you navigate your options. Book a free, no-obligation consultation.
          </p>
          
          <div className="next-step-buttons">
            <button className="next-step-btn-primary">Schedule Consultation</button>
            <button className="next-step-btn-secondary">Contact the Atelier</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SilkBase;
