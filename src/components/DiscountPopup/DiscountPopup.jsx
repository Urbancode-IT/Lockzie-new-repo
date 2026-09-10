import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './DiscountPopup.css';

const DiscountPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const closedTwice = sessionStorage.getItem('discountPopupClosedTwice');
    if (closedTwice === 'true') return;

    const closedOnceTime = sessionStorage.getItem('discountPopupClosedOnceTime');
    
    let timerId;

    if (!closedOnceTime) {
      timerId = setTimeout(() => {
        setIsVisible(true);
        if (!sessionStorage.getItem('firstPopupAppearedTime')) {
          sessionStorage.setItem('firstPopupAppearedTime', Date.now().toString());
        }
      }, 20000);
    } else {
      const timePassed = Date.now() - parseInt(closedOnceTime, 10);
      const threeMins = 3 * 60 * 1000;
      if (timePassed >= threeMins) {
        timerId = setTimeout(() => {
          setIsVisible(true);
          if (!sessionStorage.getItem('firstPopupAppearedTime')) {
            sessionStorage.setItem('firstPopupAppearedTime', Date.now().toString());
          }
        }, 2000);
      } else {
        timerId = setTimeout(() => {
          setIsVisible(true);
          if (!sessionStorage.getItem('firstPopupAppearedTime')) {
            sessionStorage.setItem('firstPopupAppearedTime', Date.now().toString());
          }
        }, threeMins - timePassed);
      }
    }

    return () => clearTimeout(timerId);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    const closedOnceTime = sessionStorage.getItem('discountPopupClosedOnceTime');
    
    if (closedOnceTime) {
      sessionStorage.setItem('discountPopupClosedTwice', 'true');
    } else {
      sessionStorage.setItem('discountPopupClosedOnceTime', Date.now().toString());
    }
  };

  const handleBookClick = () => {
    handleClose();
    
    setTimeout(() => {
      const contactSection = document.getElementById('contact-form-section');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/contact');
      }
    }, 100);
  };

  if (!isVisible) return null;

  return (
    <div className="discount-popup-overlay">
      <div className="discount-popup-container">
        
        {/* Close Button Top Right */}
        <button className="discount-popup-close" onClick={handleClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="discount-popup-content">
          {/* Left Side: White Background */}
          <div className="discount-popup-left">
            <div className="discount-logo-area">
              <div className="discount-logo-icon">LZ</div>
              <h2 className="discount-logo-text">LOCKZIE</h2>
              <span className="discount-logo-sub">HAIR EXTENSIONS</span>
            </div>

            <div className="discount-exclusive">
              <span className="discount-exclusive-line"></span>
              EXCLUSIVE DISCOUNT
              <span className="discount-exclusive-line"></span>
            </div>

            <h1 className="discount-title">
              <span className="discount-number">20</span>
              <span className="discount-percent">%<br/><span className="discount-off">OFF</span></span>
            </h1>
            
            <h2 className="discount-subtitle">PERMANENT</h2>
            <h3 className="discount-sub-gold">HAIR EXTENSIONS</h3>
            
            <p className="discount-description">
              Premium quality. Invisible blend.<br/>Longer length. Lasting confidence.
            </p>

            <div className="discount-features">
              <div className="discount-feature">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B89758" strokeWidth="1.5">
                  <path d="M2 20h20v2H2z" fill="#B89758" stroke="none"/>
                  <path d="M4 18l-2-12 5 3 5-7 5 7 5-3-2 12z"/>
                </svg>
                <span>PREMIUM<br/>QUALITY</span>
              </div>
              <div className="discount-feature">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B89758" strokeWidth="1.5">
                  <path d="M12 4c-4 0-7 3-7 7v7c0 1 1 2 2 2s2-1 2-2v-4c0-1.6 1.3-3 3-3s3 1.4 3 3v4c0 1 1 2 2 2s2-1 2-2v-7c0-4-3-7-7-7z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
                <span>NATURAL<br/>LOOK</span>
              </div>
              <div className="discount-feature">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B89758" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <polyline points="9 12 11 14 15 10"/>
                </svg>
                <span>LONG LASTING<br/>RESULTS</span>
              </div>
            </div>

            <button className="discount-book-btn" onClick={handleBookClick}>
              BOOK YOUR CONSULTATION <span className="discount-arrow">→</span>
            </button>
            <span className="discount-terms">*Terms and conditions applied</span>
          </div>

          {/* Right Side: Image Background */}
          <div className="discount-popup-right">
             <div className="discount-right-image" style={{ backgroundImage: "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1788951824/popup_model_image_webp.webp')" }}></div>
             
             {/* Circular Badge Overlay */}
             <div className="discount-badge">
               <div className="discount-badge-inner">
                 <span>LOVE YOUR HAIR.<br/>EVERY DAY.</span>
                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#B89758" strokeWidth="1.5" className="discount-heart">
                   <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                 </svg>
               </div>
             </div>
          </div>
        </div>

        {/* Bottom Black Bar */}
        <div className="discount-popup-bottom">
          <span>LIMITED TIME ONLY</span>
          <span className="discount-bottom-separator">|</span>
          <span>BEAUTY THAT LASTS</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#B89758" stroke="#B89758" strokeWidth="2" className="discount-star">
             <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DiscountPopup;
