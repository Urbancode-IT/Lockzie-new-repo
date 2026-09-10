import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Academy.css';

const Academy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasUserToggledMute, setHasUserToggledMute] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
        if (!hasUserToggledMute) {
          videoRef.current.muted = false;
          setIsMuted(false);
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      setHasUserToggledMute(true);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  const handleReserveClick = () => {
    const phoneNumber = "919566662642";
    const message = "Hi! I would like to reserve my spot for the upcoming classes at your academy. Please share the admission process, batch timings, fees, and the next steps to complete my enrollment. Thank you!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const leftFeatures = [
    "Comprehensive Theory & Intensive Hands-on Practical Training",
    "Professional Hair Extension & Hair Replacement Techniques",
    "Live Model Practice & Real Client Scenarios",
    "Colour Matching, Texture Matching & Custom Blending",
    "Professional Salon Ethics & Client Care",
    "Business Development & Salon Growth Strategies",
    "Social Media Marketing & Client Acquisition Guidance"
  ];
  
  const rightFeatures = [
    "Industry-Focused Curriculum Designed by Professionals",
    "Advanced Scalp Topper & Mesh Integration Training",
    "Hair Science, Hair Analysis & Consultation Techniques",
    "Safe Application, Removal, Maintenance & Refitting Methods",
    "Small Batch Training for Personalized Learning",
    "Pricing, Upselling & Premium Service Packages",
    "Lifetime Technical Support & Professional Guidance"
  ];

  const trainingPrograms = [
    {
      id: 1,
      tag: "1 DAY",
      title: "Look & Learn Seminar",
      price: "₹9,999",
      idealFor: ["Salon Owners", "Hair Stylists", "Beauty Professionals", "Beginners Exploring Extensions"],
      highlights: [
        "Intro to Hair Extension Industry",
        "Understanding Hair Types & Quality",
        "Virgin Hair vs Remy Hair",
        "Consultation & Scalp Analysis",
        "Colour & Texture Matching Basics",
        "Live Demo: I-Tip, Nano Ring, Tape-In, K-Tip",
        "Intro to Scalp Toppers",
        "Maintenance & Aftercare Guidelines",
        "Pricing & Business Opportunities"
      ],
      certification: ["Theory Assessment", "Certificate of Participation"],
      theme: "light",
      buttonText: "RESERVE YOUR SPOT"
    },
    {
      id: 2,
      tag: "2 DAYS (THEORY + PRACTICAL)",
      title: "Hands-on Professional Workshop",
      price: "₹14,999",
      idealFor: ["Salon Owners", "Working Stylists", "Beauty Professionals", "Freelance Hair Artists"],
      highlights: [
        "Comprehensive Extension Theory",
        "Hair Science Fundamentals",
        "Client Consultation & Hair Analysis",
        "Hands-on: I-Tip, Nano Ring, Tape-In, K-Tip",
        "Intro: Butterfly & Feather Extensions",
        "Scalp Topper Varieties & Consultation",
        "Application, Removal & Reapplication",
        "Blending & Finishing Techniques",
        "Upselling & Client Retention",
        "Social Media Marketing Basics"
      ],
      certification: ["Theory Examination", "Practical Assessment", "Certificate of Completion"],
      theme: "dark",
      buttonText: "RESERVE YOUR SPOT"
    },
    {
      id: 3,
      tag: "5 DAYS (EXTENSIVE)",
      title: "Advanced Professional Certification",
      price: "₹49,999",
      idealFor: ["Salon Owners", "Hair Professionals", "Academy Students", "Aspiring Specialists"],
      highlights: [
        "Complete Extension Mastery Program",
        "Advanced Hair Science & Loss Knowledge",
        "Hands-on: All Extension Types",
        "Advanced Blending & Customisation",
        "Mesh Integration System Training",
        "Hair Replacement Consultation",
        "Professional Photography & Portfolio",
        "Instagram & Content Strategies",
        "Premium Pricing & Luxury Packages",
        "Real-Time Supervised Practical Sessions"
      ],
      certification: ["Written Examination", "Practical Examination", "Consultation Assessment", "Lockzie Hair Academy Certification"],
      theme: "light",
      buttonText: "RESERVE YOUR SPOT"
    }
  ];

  const professionalProducts = [
    "100% Premium Human Hair Extensions",
    "I-Tip, Nano Ring, Tape-In & K-Tip Extensions",
    "Butterfly & Feather Extensions",
    "Scalp Toppers & Hair Replacement Solutions",
    "Professional Hair Extension Tools & Accessories",
    "Hair Care & Maintenance Products",
    "In-Salon Professional Product Range",
    "Exclusive Wholesale & Partner Pricing"
  ];

  return (
    <div className="academy-page">
      <Navbar forceScrolled={true} />
      
      <div className="academy-hero-section">
        <div className="academy-hero-container">
          <p className="academy-hero-subtitle">
            PROFESSIONAL HAIR EXTENSION TRAINING PROGRAMS
          </p>
          <h1 className="academy-hero-title">
            MASTER THE CRAFT.
          </h1>
          <p className="academy-hero-desc">
            Become a Certified Hair Extension Professional. Where expertise meets<br />
            opportunity in the modern beauty industry.
          </p>
        </div>
      </div>

      <div className="academy-expertise-section">
        <div className="academy-expertise-container">
          <div className="expertise-left">
            <h3>Where Expertise Meets Opportunity</h3>
            <p className="expertise-intro">
              At Lockzie Hair Academy, we believe true success comes from more than just learning a technique—it comes from mastering a skill, building confidence, and creating a profitable career.
            </p>
            <p>
              Our academy is dedicated to empowering salon owners, hairstylists, beauty professionals, and aspiring entrepreneurs with world-class education in professional hair extensions and hair replacement systems. Through a combination of expert instruction, practical training, and business development, we prepare our students to confidently offer premium hair solutions in today's competitive beauty industry.
            </p>
            <p>
              Whether you are looking to expand your salon services, start a specialized hair extension business, or enhance your professional skills, Lockzie Hair Academy provides the knowledge, support, and industry exposure needed to succeed.
            </p>
          </div>
          
          <div className="expertise-right">
            <div className="expertise-card">
              <div className="expertise-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
              </div>
              <h4>Learn Beyond the Technique</h4>
              <p>
                Our training goes beyond teaching application methods. We focus on developing complete professionals by helping students understand client psychology, consultation methods, service customization, pricing strategies, salon operations, and business growth.
              </p>
              <p>
                Every participant gains the confidence to recommend the right solution, deliver exceptional results, and build long-term client relationships. Our goal is not only to teach you how to apply hair extensions, but also how to build a successful and profitable hair extension business.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="academy-why-section">
        <div className="academy-why-container">
          <h2 className="academy-why-title">Why Choose Lockzie Hair Academy?</h2>
          <div className="academy-why-divider"></div>
          
          <div className="academy-why-grid">
            <div className="academy-why-column">
              {leftFeatures.map((feature, index) => (
                <div className="academy-why-item" key={index}>
                  <div className="academy-why-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="8" stroke="#99A1AF" strokeWidth="1.25"/>
                      <path d="M7 10L9 12L13 7" stroke="#99A1AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
            <div className="academy-why-column">
              {rightFeatures.map((feature, index) => (
                <div className="academy-why-item" key={index}>
                  <div className="academy-why-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="8" stroke="#99A1AF" strokeWidth="1.25"/>
                      <path d="M7 10L9 12L13 7" stroke="#99A1AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="academy-programs-section">
        <div className="academy-programs-container">
          <div className="academy-programs-header">
            <h2 className="academy-programs-title">Training Programs</h2>
            <p className="academy-programs-subtitle">Choose the level of training that fits your career goals. From foundational seminars to complete mastery.</p>
          </div>
          
          <div className="academy-programs-grid">
            {trainingPrograms.map((program) => (
              <div className={`program-card ${program.theme}`} key={program.id}>
                <div className="program-card-main">
                  <div className="program-tag">{program.tag}</div>
                  <h3 className="program-title">{program.title}</h3>
                  <div className="program-price">
                    {program.price} <span className="price-suffix">/ person</span>
                  </div>
                  
                  <div className="program-section">
                    <h4 className="program-section-title">Ideal For</h4>
                    <ul className="program-list">
                      {program.idealFor.map((item, idx) => (
                        <li key={idx}>
                          <div className="program-list-icon">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                              <circle cx="9" cy="7" r="4"></circle>
                              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="program-section">
                    <h4 className="program-section-title">Key Highlights</h4>
                    <ul className="program-list">
                      {program.highlights.map((item, idx) => (
                        <li key={idx}>
                          <div className="program-list-icon">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.33333"/>
                              <path d="M5 8L7 10L11 6" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="program-card-footer">
                  <div className="program-section">
                    <h4 className="program-section-title">Certification</h4>
                    <ul className="program-list">
                      {program.certification.map((item, idx) => (
                        <li key={idx}>
                          <div className="program-list-icon">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                            </svg>
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="program-reserve-btn" onClick={handleReserveClick}>
                    <span className="btn-text">{program.buttonText}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="academy-products-section">
        <div className="academy-products-container">
          
          <div className="academy-products-left">
            <div className="academy-products-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
            <h2 className="academy-products-title">Professional Products for Salon Use</h2>
            <p className="academy-products-text">
              Lockzie Hair Academy is also a trusted supplier of professional salon-grade hair extension products. We provide salons and certified professionals with access to premium-quality products, ensuring they have everything needed to deliver outstanding services.
            </p>
            <p className="academy-products-text">
              Unlike ordinary suppliers, we don't simply sell products. We provide complete technical guidance, product education, application support, and after-sales assistance so our salon partners can work with confidence and achieve exceptional client satisfaction.
            </p>
          </div>

          <div className="academy-products-right">
            <h3 className="academy-products-list-title">Our Professional Range</h3>
            <ul className="academy-products-list">
              {professionalProducts.map((product, idx) => (
                <li key={idx}>
                  <div className="academy-products-list-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="8" stroke="#000000" strokeWidth="1.25"/>
                      <path d="M7 10L9 12L13 7" stroke="#000000" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>{product}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      <div className="academy-cert-section-figma">
        <div className="cert-figma-container">
          <div className="cert-ellipse ellipse-17"></div>
          <div className="cert-ellipse ellipse-18"></div>
          <div className="cert-ellipse ellipse-16"></div>
          <div className="cert-ellipse ellipse-15"></div>

          <h2 className="cert-title-figma">Official Certification</h2>
          <p className="cert-desc-1-figma">
            Upon successful completion of the selected training program and assessment, participants will receive a Skill Development Certificate issued through the applicable Central Government recognized Skill Development framework (where applicable), along with a Lockzie Hair Academy Certification.
          </p>
          <p className="cert-desc-2-figma">
            This certification reflects your commitment to professional standards and supports your journey toward building a successful career in the hair and beauty industry.
          </p>

          <div className="cert-image-figma">
            <img src="https://res.cloudinary.com/r0vgotvj/image/upload/v1/academy_page_certificate_img_webp.webp" alt="Certification" className="cert-img-slide cert-img-1" />
            <img src="https://res.cloudinary.com/r0vgotvj/image/upload/v1788527627/academy_page_new_image_webp.webp" alt="Certification" className="cert-img-slide cert-img-2" style={{ objectPosition: 'center 88%' }} />
          </div>

          <div className="cert-video-figma">
            <video 
              src="https://res.cloudinary.com/r0vgotvj/video/upload/v1788527669/Academy_video_final.mp4" 
              ref={videoRef}
              muted={isMuted} 
              playsInline
              onClick={togglePlay}
              onEnded={() => {
                setIsPlaying(false);
                if (videoRef.current) {
                  videoRef.current.currentTime = 0;
                  videoRef.current.load();
                }
              }}
              style={{ cursor: 'pointer' }}
            ></video>
            {!isPlaying && <div className="cert-video-overlay" onClick={togglePlay} style={{ cursor: 'pointer' }}></div>}
            
            <div className="cert-fullscreen-btn-figma" onClick={(e) => { e.stopPropagation(); toggleFullscreen(); }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
              </svg>
            </div>
            
            <div className="cert-volume-btn-figma" onClick={(e) => { e.stopPropagation(); toggleMute(); }}>
              {isMuted ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <line x1="23" y1="9" x2="17" y2="15"></line>
                  <line x1="17" y1="9" x2="23" y2="15"></line>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                </svg>
              )}
            </div>
          </div>

          {!isPlaying && (
            <div className="cert-play-btn-figma" onClick={togglePlay}>
              <div className="cert-play-icon-figma">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5v14l11-7z" fill="white"/>
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="academy-support-section">
        <div className="academy-support-container">
          <div className="academy-support-icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              <path d="M12 15.5l4-4" />
              <path d="M15 12.5l2 2" />
              <path d="M10 13.5l1.5 1.5" />
              <path d="M8 11.5l2 2" />
            </svg>
          </div>
          <div className="academy-support-content">
            <h3 className="academy-support-title">Continuous Learning & Technical Support</h3>
            <p className="academy-support-text">
              Learning doesn't end after the course. Every Lockzie Hair Academy student becomes part of our growing professional community, where they receive ongoing technical assistance, product updates, and expert guidance whenever needed. Our commitment is to support your journey long after your training is completed.
            </p>
          </div>
        </div>
      </div>

      <div className="academy-footer-section">
        <div className="academy-footer-container">
          <div className="academy-footer-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <line x1="20" y1="4" x2="8.12" y2="15.88"></line>
              <line x1="14.47" y1="14.48" x2="20" y2="20"></line>
              <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
            </svg>
          </div>
          <h2 className="academy-footer-brand">LOCKZIE</h2>
          <p className="academy-footer-subbrand">HAIR ACADEMY</p>
          <p className="academy-footer-quote">
            "Join Lockzie Hair Academy and transform your passion into expertise, your skills into confidence, and your profession into a successful business."
          </p>
          <p className="academy-footer-copyright">
            © 2026 Lockzie Hair Academy. All rights reserved.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Academy;
