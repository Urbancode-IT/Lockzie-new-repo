import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBookNowClick = (e) => {
    e.preventDefault();
    
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
  return (
    <footer className="footer-section">
      <div className="footer-wrapper">
        
        {/* Top Section */}
        <div className="footer-top">
          <p className="crafted-text">CRAFTED FOR CONFIDENCE</p>
          <img 
            src="https://res.cloudinary.com/r0vgotvj/image/upload/v1/footer_logo_high_quality_webp.webp" 
            alt="Lockzie Hair Extensions" 
            className="giant-logo-img" 
          />
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Middle Section */}
        <div className="footer-middle">
          
          <div className="footer-col brand-col">
            <div className="small-logo">
              <span className="small-lockzie">Lockzie</span>
              <span className="small-hair">Hair</span>
            </div>
            <p className="brand-description">
              A luxury house of customised hair extensions, premium products, and master-level training. Made in India, loved globally.
            </p>
            <div className="social-links">
              {/* Instagram */}
              <a href="https://www.instagram.com/lockziehair/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/61577682755513/posts/hair-thining-temporary-or-permanent-solution-lockzie-hair/122183673872922758/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              {/* YouTube */}
              <a href="https://www.youtube.com/@LockzieHair/shorts" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/919566662642?text=Hi%20Lockzie%20Hair!%20I%20am%20interested%20in%20your%20services.%20Could%20you%20please%20share%20more%20details%3F" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFFFFF">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-col links-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/founder">Founder</Link></li>
              <li><Link to="/academy">Academy</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li>
                <Link 
                  to="/#contact-form-section"
                  onClick={() => {
                    setTimeout(() => {
                      document.getElementById('contact-form-section')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  Consultation
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-col links-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-list">
              <li><Link to="/k-tips">K-Tips</Link></li>
              <li><Link to="/buns">Buns</Link></li>
              <li><Link to="/silk-base">Silk Base</Link></li>
              <li><Link to="/front-lace-wigs">Front Lace</Link></li>
              <li><Link to="/hair-cut">Hair Cut</Link></li>
              <li><Link to="/hair-grow">Hair Grow</Link></li>
              <li><Link to="/pamper-the-skin">Pamper Skin</Link></li>
              <li style={{ whiteSpace: 'nowrap' }}><Link to="/hair-extensions-maintenance">Hair Extension Maintance</Link></li>
            </ul>
          </div>

          <div className="footer-col contact-col">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-list">
              <li><a href="mailto:lockziehair@gmail.com">lockziehair@gmail.com</a></li>
              <li><a href="tel:+919566662642">9566662642</a></li>
              <li><span className="location-text">159/52 A, 3rd floor ,Velachery Main Rd, Anna Garden, Velachery, Chennai, Tamil Nadu 600042.</span></li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px', color: 'rgba(255, 255, 255, 0.7)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>Mon - Sun : 10 AM - 8 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="footer-bottom-divider"></div>
        
        <div className="footer-bottom">
          <p className="copyright">© 2026 Lockzie Hair. All Rights Reserved.</p>
          
          {/* Developer Credit */}
          <div className="developer-credit-container">
            <a href="https://urbancode.in" target="_blank" rel="noopener noreferrer" className="developer-credit-link">
              Designed & Developed by <span className="developer-name">UrbanCode Edutech<span className="credit-arrow">↗</span></span>
            </a>
          </div>

          <div className="legal-links">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/" onClick={handleBookNowClick}>Book Now</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
