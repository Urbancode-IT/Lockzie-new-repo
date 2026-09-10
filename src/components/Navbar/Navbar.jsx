import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ forceScrolled }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      // Change state when scrolled past hero (approx 100vh)
      if (window.scrollY > window.innerHeight - 63) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleBookNowClick = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
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

  const navItems = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/about' },
    { name: 'Founder', href: '/founder' },
    { name: 'Services', href: '/#services' },
    { name: 'Academy', href: '/academy' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact Us', href: '/contact' },
  ];

  // Determine active tab based on location
  const getActiveTab = () => {
    if (location.pathname === '/blogs' || location.pathname.startsWith('/blogs/')) {
      return 'Blogs';
    }
    if (location.pathname === '/about') {
      return 'About';
    }
    if (location.pathname === '/founder') {
      return 'Founder';
    }
    if (location.pathname === '/contact') {
      return 'Contact Us';
    }
    if (location.pathname === '/gallery') {
      return 'Gallery';
    }
    if (location.pathname === '/academy') {
      return 'Academy';
    }
    // Very simplified logic for homepage sections based on hash
    if (location.pathname === '/') {
      if (location.hash === '#services') return 'Services';
      if (location.hash === '#academy') return 'Academy';
      return 'Home';
    }
    return 'Home';
  };

  const activeTab = getActiveTab();

  return (
    <nav className={`navbar ${isScrolled || forceScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <Link to="/">
          <img src="https://res.cloudinary.com/r0vgotvj/image/upload/v1/41af3a4a8deddaec315f8adf4dfabe1bdfc5a644.png" alt="Lockzie Logo" />
        </Link>
      </div>
      <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
        {navItems.map((item) => (
          <li 
            key={item.name} 
            className={`${activeTab === item.name ? 'nav-item-active' : ''} ${item.name === 'Services' ? 'services-li' : ''}`}
          >
            <Link 
              to={item.href} 
              onClick={(e) => {
                if (item.name === 'Services') {
                  e.preventDefault();
                } else {
                  setIsMobileMenuOpen(false);
                }
              }}
            >
              {item.name}
            </Link>
            {item.name === 'Services' && (
              <div className="mega-menu">
                <div className="mega-menu-inner">
                  <div className="mega-menu-left">
                    <h3 className="mega-menu-main-heading">Hair Extensions</h3>
                    <div className="hair-extensions-grid">
                      <div className="mega-menu-group">
                        <h4>Permanent Extensions</h4>
                        <ul>
                          <li><Link to="/i-tips" onClick={() => setIsMobileMenuOpen(false)}>I-Tips</Link></li>
                          <li><Link to="/k-tips" onClick={() => setIsMobileMenuOpen(false)}>K-Tips</Link></li>
                          <li><Link to="/nano-tips" onClick={() => setIsMobileMenuOpen(false)}>Nano-Tips</Link></li>
                          <li><Link to="/tape-hair" onClick={() => setIsMobileMenuOpen(false)}>Tape Hair</Link></li>
                          <li><Link to="/weft-extensions" onClick={() => setIsMobileMenuOpen(false)}>Weft Extensions</Link></li>
                          <li><Link to="/feather-extensions" onClick={() => setIsMobileMenuOpen(false)}>Feather Extensions</Link></li>
                        </ul>
                      </div>
                      <div className="mega-menu-group">
                        <h4>Clip-In Extensions</h4>
                        <ul>
                          <li><Link to="/clip-in-sets" onClick={() => setIsMobileMenuOpen(false)}>1 Piece to 7 Pieces Set</Link></li>
                          <li><Link to="/buns" onClick={() => setIsMobileMenuOpen(false)}>Buns</Link></li>
                          <li><Link to="/bangs" onClick={() => setIsMobileMenuOpen(false)}>Bangs</Link></li>
                          <li><Link to="/ponytail" onClick={() => setIsMobileMenuOpen(false)}>Ponytail</Link></li>
                          <li><Link to="/seamless-clip-ins" onClick={() => setIsMobileMenuOpen(false)}>Seamless Clip-Ins</Link></li>
                        </ul>
                      </div>
                      <div className="mega-menu-group">
                        <h4>Toppers</h4>
                        <ul>
                          <li><Link to="/silk-base" onClick={() => setIsMobileMenuOpen(false)}>Silk Base</Link></li>
                          <li><Link to="/mono-base" onClick={() => setIsMobileMenuOpen(false)}>Mono Base</Link></li>
                          <li><Link to="/lace-base" onClick={() => setIsMobileMenuOpen(false)}>Lace Base</Link></li>
                          <li><Link to="/hd-lace-base" onClick={() => setIsMobileMenuOpen(false)}>Front Line HD Lace Base</Link></li>
                        </ul>
                      </div>
                      <div className="mega-menu-group">
                        <h4>Wigs</h4>
                        <ul>
                          <li><Link to="/front-lace-wigs" onClick={() => setIsMobileMenuOpen(false)}>Front Lace</Link></li>
                          <li><Link to="/silk-base-wigs" onClick={() => setIsMobileMenuOpen(false)}>Silk Base</Link></li>
                          <li><Link to="/full-lace-wigs" onClick={() => setIsMobileMenuOpen(false)}>Full Lace</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="mega-menu-right">
                    <h3 className="mega-menu-main-heading">Our Catalogue</h3>
                    <div className="mega-menu-group">
                      <ul className="catalogue-list">
                        <li><Link to="/hair-cut" onClick={() => setIsMobileMenuOpen(false)}>Hair Cut</Link></li>
                        <li><Link to="/waxing" onClick={() => setIsMobileMenuOpen(false)}>Waxing</Link></li>
                        <li><Link to="/hair-styling" onClick={() => setIsMobileMenuOpen(false)}>Hair Styling</Link></li>
                        <li><Link to="/manicure" onClick={() => setIsMobileMenuOpen(false)}>Manicure</Link></li>
                        <li><Link to="/hair-colouring" onClick={() => setIsMobileMenuOpen(false)}>Hair Colouring</Link></li>
                        <li><Link to="/pedicure" onClick={() => setIsMobileMenuOpen(false)}>Pedicure</Link></li>
                        <li><Link to="/textured-hair" onClick={() => setIsMobileMenuOpen(false)}>Textured Hair</Link></li>
                        <li><Link to="/korean-skin" onClick={() => setIsMobileMenuOpen(false)}>Korean Skin</Link></li>
                        <li><Link to="/hair-extensions-maintenance" onClick={() => setIsMobileMenuOpen(false)}>Hair Extensions Maintenance</Link></li>
                        <li><Link to="/hair-grow" onClick={() => setIsMobileMenuOpen(false)}>Hair Grow</Link></li>
                        <li><Link to="/pamper-the-skin" onClick={() => setIsMobileMenuOpen(false)}>Pamper the Skin</Link></li>
                        <li><Link to="/glossy-lips" onClick={() => setIsMobileMenuOpen(false)}>Glossy Lips</Link></li>
                        <li><Link to="/glossing-services" onClick={() => setIsMobileMenuOpen(false)}>Glossing Services</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </li>
        ))}
        <li className="navbar-book-now-li">
          <Link to="/" className="book-now-btn" onClick={handleBookNowClick}>
            <span className="book-now-text">Book Now</span>
            <svg className="book-now-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.16666 10H15.8333" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 4.16669L15.8333 10L10 15.8334" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="shining-effect"></div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
