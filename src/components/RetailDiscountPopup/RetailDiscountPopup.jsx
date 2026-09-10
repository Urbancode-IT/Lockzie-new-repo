import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './RetailDiscountPopup.css';

const RetailDiscountPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const closedRetail = sessionStorage.getItem('retailPopupClosed');
    if (closedRetail === 'true') return;

    let intervalId;
    const checkAndShow = () => {
      const appearedTime = sessionStorage.getItem('firstPopupAppearedTime');
      if (appearedTime) {
        const timePassed = Date.now() - parseInt(appearedTime, 10);
        if (timePassed >= 60000) { // 60 seconds after the first popup appeared
          setIsVisible(true);
          clearInterval(intervalId);
        }
      }
    };

    intervalId = setInterval(checkAndShow, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('retailPopupClosed', 'true');
  };

  const handleBookClick = () => {
    handleClose();
    
    setTimeout(() => {
      const contactSection = document.getElementById('contact-map-section');
      if (contactSection) {
        const yOffset = -150;
        const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
      } else {
        navigate('/contact');
        setTimeout(() => {
          const mapSec = document.getElementById('contact-map-section');
          if (mapSec) {
            const yOffset = -150;
            const y = mapSec.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
          }
        }, 500);
      }
    }, 100);
  };

  if (!isVisible) return null;

  return (
    <div className="retail-popup-overlay">
      <div className="retail-popup-container">
        
        {/* Close Button Top Right */}
        <button className="retail-popup-close" onClick={handleClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="retail-popup-content">
          {/* Left Side: Cream Background */}
          <div className="retail-popup-left">
            <div className="retail-logo-area">
              <h2 className="retail-logo-text">Lockzie</h2>
              <span className="retail-logo-sub">HAIR EXTENSIONS</span>
              <div className="retail-logo-heart-container">
                <div className="retail-logo-line"></div>
                <span className="retail-logo-heart">♥</span>
                <div className="retail-logo-line"></div>
              </div>
            </div>

            <div className="retail-special-offer">
              Special Discount
            </div>

            <div className="retail-title">
              <span className="retail-number">15</span>
              <span className="retail-percent">%<br/><span className="retail-off">OFF</span></span>
            </div>
            
            <div className="retail-pill">
              ON ALL RETAIL PRODUCTS
            </div>

            <div className="retail-features">
              <div className="retail-feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 21S10 17 11 15" />
                  <path d="M11 15C15 12 21 6 21 2C17 2 11 8 11 15" />
                  <path d="M11 15C7 13 3 10 3 7C6 7 10 10 11 15" />
                  <path d="M11 15C13 12 16 8 18 5" />
                  <path d="M11 15C9 13 6 10 5 8" />
                </svg>
                <span>Salon Quality</span>
              </div>
              <div className="retail-feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3v2" />
                  <path d="M12 5c-3 0-5 2-5 5 0 2-1 4-2 6 1 2 3 1 4-1 0-2 1-3 1-5" />
                  <path d="M12 5c3 0 5 2 5 5 0 2 1 4 2 6-1 2-3 1-4-1 0-2-1-3-1-5" />
                  <path d="M9 10c0 3-1 6-2 8" />
                  <path d="M15 10c0 3 1 6 2 8" />
                </svg>
                <span>Made for<br/>Hair Extensions</span>
              </div>
              <div className="retail-feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2.5C12 2.5 5 10 5 16C5 19.866 8.134 23 12 23C15.866 23 19 19.866 19 16C19 10 12 2.5 12 2.5Z" />
                  <path d="M8 16a4 4 0 0 0 4 4" />
                </svg>
                <span>Nourish &<br/>Protect</span>
              </div>
              <div className="retail-feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 8 8 Q 8 13 13 13 Q 8 13 8 18 Q 8 13 3 13 Q 8 13 8 8 Z" />
                  <path d="M 17 4 Q 17 8 21 8 Q 17 8 17 12 Q 17 8 13 8 Q 17 8 17 4 Z" />
                  <path d="M 16 14 Q 16 17 19 17 Q 16 17 16 20 Q 16 17 13 17 Q 16 17 16 14 Z" />
                </svg>
                <span>Shine<br/>That Lasts</span>
              </div>
            </div>

            <p className="retail-description">
              Visit Our Salon to enjoy 15% OFF on all Retail Products.
            </p>

            <button className="retail-book-btn" onClick={handleBookClick}>
              Claim 15% Off Visit us Now <span className="retail-arrow">→</span>
            </button>
            <span className="retail-terms">*Terms and conditions applied</span>

            <div className="retail-gift-box">
              <div className="retail-gift-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="1">
                  <rect x="3" y="8" width="18" height="14" rx="2" />
                  <path d="M12 5a3 3 0 1 0-3 3" />
                  <path d="M15 8a3 3 0 1 0-3-3" />
                  <path d="M12 8v14" />
                  <path d="M3 15h18" />
                </svg>
              </div>
              <span className="retail-gift-text">EXCLUSIVE SAVINGS.<br/>BEAUTIFUL HAIR. EVERYDAY.</span>
            </div>
          </div>

          {/* Right Side: Image Background */}
          <div className="retail-popup-right">
             <div className="retail-right-image" style={{ backgroundImage: "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1788951826/popup2_model2_webp.webp')" }}></div>
             
             {/* Circular Badge Overlay */}
             <div className="retail-badge">
               <div className="retail-badge-inner">
                 <span className="retail-badge-enjoy">Enjoy</span>
                 <div className="retail-badge-percent">
                   15 <span>%<br/>OFF</span>
                 </div>
                 <span className="retail-badge-text">ON ALL RETAIL<br/>PRODUCTS</span>
                 <span style={{color: '#B89758', fontSize: '10px'}}>♥</span>
               </div>
             </div>
          </div>
        </div>

        {/* Bottom Black Bar */}
        <div className="retail-popup-bottom">
          <div className="retail-bottom-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <polyline points="9 12 11 14 15 10"/>
            </svg>
            <span>Trusted by Professionals</span>
          </div>
          <div className="retail-bottom-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span>Safe & Gentle Formula</span>
          </div>
          <div className="retail-bottom-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <circle cx="12" cy="8" r="7"/>
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
            </svg>
            <span>Premium Ingredients</span>
          </div>
          <div className="retail-bottom-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span>Love Your Hair, Everyday</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetailDiscountPopup;
