import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';

import './About.css';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <Navbar forceScrolled={true} />
      
      <section className="about-header-section">
        <div className="about-header-container">
          <h1 className="about-title">About Us</h1>
          <p className="about-subtitle">
            We acknowledge the impact of hair loss or thinning on self esteem and strive to offer high quality solutions.
          </p>
          <div className="about-image-wrapper">
            <img src="https://res.cloudinary.com/r0vgotvj/image/upload/v1788527611/About_us_page_hero_section_image_webp.webp" alt="About Lockzie" style={{ objectPosition: 'center 20%' }} />
          </div>
        </div>
      </section>

      <section className="about-story-section">
        <div className="about-story-container">
          <div className="about-story-text-content">
            <h3 className="about-story-subtitle">Our Story</h3>
            <h2 className="about-story-title">Helping One Strand at a Time</h2>
            <div className="about-story-paragraphs">
              <p>In a bustling city, I witnessed a woman at a wedding struggling with her thinning hair, her scarf slipping as she moved, revealing her discomfort and lack of confidence. Approaching her, I learned of her challenges with hair thinning and the frustration she faced with low-quality and expensive hair extensions.</p>
              <p>This encounter sparked an idea within me to create a brand that offers premium, luxurious, 100% real human hair extensions at affordable prices. And so, Lockzie Hair was born, founded by a woman for women like her.</p>
              <p>Our mission is clear: to empower women dealing with hair growth issues to feel confident and beautiful. We promise to provide a range of hair extensions that seamlessly blend with natural hair, giving you the perfect look and feel you desire.</p>
            </div>
          </div>
          <div className="about-story-image-wrapper">
            <img src="https://res.cloudinary.com/r0vgotvj/image/upload/v1/ABOUTUS_IMG1_webp.webp" alt="Our Story" />
          </div>
        </div>
      </section>

      <section className="about-philosophy-section">
        <div className="about-philosophy-container">
          <h3 className="about-philosophy-subtitle">Our Core Philosophy</h3>
          <h2 className="about-philosophy-title">
            We believe every individual deserves a solution that feels as <em>natural</em> as it looks.
          </h2>
          <div className="about-philosophy-paragraphs">
            <p>At Lockzie Hair, we offer a carefully curated range of premium hair enhancement and hair replacement solutions for both women and men, tailored to every lifestyle, concern, and personal preference.</p>
            <p>Our collection features 100% ethically sourced, premium Double Drawn Human Hair, hand selected for its exceptional quality, fullness, longevity, and seamless blend with natural hair.</p>
            <p>We specialize in advanced semi permanent and permanent hair extension techniques, delivering customized solutions for both length enhancement and natural volume.</p>
          </div>
        </div>
      </section>

      <section className="about-methods-section">
        <div className="about-methods-container">
          <div className="about-methods-left">
            <ul className="about-methods-list">
              <li><span className="method-bullet"></span>K-Tip (Keratin Bond) Extensions</li>
              <li><span className="method-bullet"></span>I-Tip Extensions</li>
              <li><span className="method-bullet"></span>Tape-In Extensions</li>
              <li><span className="method-bullet"></span>Nano Ring Extensions</li>
              <li><span className="method-bullet"></span>Butterfly Extensions</li>
              <li><span className="method-bullet"></span>Ice Glue Extensions</li>
              <li><span className="method-bullet"></span>Mesh Integration Systems</li>
              <li><span className="method-bullet"></span>Micro Ring Techniques</li>
              <li><span className="method-bullet"></span>Advanced customized application methods</li>
            </ul>
          </div>
          <div className="about-methods-right">
            <h2 className="about-methods-title">Internationally Recognized Methods</h2>
            <div className="about-methods-paragraphs">
              <p>Beyond extensions, we provide comprehensive hair enhancement solutions, including Scalp Toppers, Hairline Toppers, Women's Hair Patches, Men's Hair Replacement Systems, Clip-In Extensions, Volumizers, Ponytail Extensions, and bespoke hair solutions designed to meet each client's individual needs.</p>
              <p>Every service begins with a personalized consultation, allowing our specialists to understand your hair type, lifestyle, and expectations before recommending the most suitable solution.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-standard-section">
        <div className="about-standard-container">
          <div className="about-standard-header">
            <h2 className="about-standard-title">The Lockzie Standard</h2>
            <p className="about-standard-subtitle">
              At Lockzie Hair, luxury is never an accident it is a promise woven into every strand we create. From ethical sourcing to meticulous craftsmanship, every detail is thoughtfully considered.
            </p>
          </div>
          <div className="about-standard-grid">
            <div className="standard-card">
              <h3 className="standard-card-title">Pure Luxury</h3>
              <p className="standard-card-text">We work exclusively with 100% ethically sourced Premium Double Drawn Human Hair, carefully selected for its superior quality, fullness, softness, and longevity. Every bundle undergoes a meticulous selection process to ensure consistent texture, natural movement, and exceptional durability, allowing you to experience luxury that lasts beyond the first wear.</p>
            </div>
            <div className="standard-card">
              <h3 className="standard-card-title">Seamless by Design</h3>
              <p className="standard-card-text">Beautiful hair should never look artificial. It should become a natural extension of you. Each Lockzie Hair creation is thoughtfully designed to blend flawlessly with your natural hair, matching texture, density, movement, and flow. Whether you choose permanent extensions, clip-in enhancements, scalp toppers, or hair replacement systems, every solution is customized to create an undetectable, effortless finish.</p>
            </div>
            <div className="standard-card">
              <h3 className="standard-card-title">Crafted with Precision</h3>
              <p className="standard-card-text">True luxury lies in the details. Every strand is hand selected, expertly processed, and refined to meet the highest professional standards. Our signature Double Drawn Hair provides consistent thickness from root to tip, delivering fuller, healthier looking hair with remarkable longevity and a naturally luxurious appearance.</p>
            </div>
            <div className="standard-card">
              <h3 className="standard-card-title">Ethical Beauty</h3>
              <p className="standard-card-text">We believe luxury should never come at the cost of integrity. Our commitment to ethical sourcing ensures that every strand is responsibly obtained through transparent and respectful practices. We embrace conscious craftsmanship, sustainable values, and uncompromising quality because true beauty begins with responsibility.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-confidence-section">
        <div className="about-confidence-container">
          <h2 className="about-confidence-title">Confidence Woven Into Every Strand</h2>
          <div className="about-confidence-paragraphs">
            <p className="about-confidence-text-light">Hair is never just hair. It represents identity, confidence, resilience, and self expression.</p>
            <p className="about-confidence-text-light">Whether you're enhancing your everyday look, restoring hair after medical hair loss, embracing a new chapter in life, or simply celebrating yourself, Lockzie Hair is here to be part of your journey.</p>
            <p className="about-confidence-text-bold">Every consultation is personal. Every transformation is meaningful. Every client becomes part of our story.</p>
          </div>
          <div className="about-confidence-divider-container">
            <div className="about-confidence-divider"></div>
          </div>
          <p className="about-confidence-footer">LUXURY IN EVERY STRAND. CONFIDENCE IN EVERY PERSON.</p>
        </div>
      </section>

      <section className="about-testimonial-section">
        <div className="about-testimonial-container">
          <div className="about-testimonial-header">
            <h4 className="about-testimonial-subtitle">Highest Quality 100% Human Clip in Hair Extensions</h4>
            <p className="about-testimonial-trusted">Trusted by More Than 10,000+ Women</p>
          </div>
          
          <div className="about-testimonial-profile-container">
            <div className="about-testimonial-profile-image"></div>
          </div>
          
          <h3 className="about-testimonial-quote">"Beautiful hair is not just a dream, it’s an extension away."</h3>
          
          <div className="about-testimonial-author">
            <p className="about-testimonial-role">Founder</p>
            <p className="about-testimonial-name">Vishnu Priya</p>
            <p className="about-testimonial-company">Lockzie Hair Extensions</p>
          </div>
        </div>
      </section>

      <section className="about-mission-section">
        <div className="about-mission-container">
          <div className="about-mission-card">
            <div className="mission-icon">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
              </svg>
            </div>
            <h3 className="mission-title">Our Mission</h3>
            <p className="mission-text">To create work of enduring value uniting clarity of thought with precision of craft, so that what we build serves people meaningfully long after it ships.</p>
          </div>
          <div className="about-mission-card">
            <div className="mission-icon">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M13 7.5 L12.5 6.5" />
                <path d="M11 7.25 L14 5.75" />
                <polygon points="8,10 16,6 17,8 9,12" />
                <polygon points="6,11 8,10 9,12 7,13" />
                <polygon points="16,6 17,5.5 18,7.5 17,8" />
                <path d="M12.5 10.25 L12.5 14" />
                <path d="M12.5 14 L9 19" />
                <path d="M12.5 14 L16 19" />
              </svg>
            </div>
            <h3 className="mission-title">Our Vision</h3>
            <p className="mission-text">To become the standard others measure themselves against: a studio whose name signals trust, taste, and a refusal to settle for the merely acceptable.</p>
          </div>
        </div>
      </section>



      <section className="about-join-section">
        <div className="about-join-container">
          <div className="about-join-header">
            <h2 className="about-join-title">Join Us</h2>
            <a href="https://www.instagram.com/lockziehair/" target="_blank" rel="noopener noreferrer" className="about-join-link" style={{ textDecoration: 'none' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              <span className="about-join-handle">@lockziehair</span>
            </a>
          </div>
          
          <div className="about-join-grid">
            <div className="about-join-image" style={{backgroundImage: 'url("https://res.cloudinary.com/r0vgotvj/image/upload/v1/abtus_img2_webp.webp")'}}></div>
            
            <div className="about-join-image" style={{backgroundImage: 'url("https://res.cloudinary.com/r0vgotvj/image/upload/v1/abtus_img3_webp.webp")'}}></div>
            
            <div className="about-join-image" style={{backgroundImage: 'url("https://res.cloudinary.com/r0vgotvj/image/upload/v1/abtus_img1_webp.webp")'}}></div>
            
            <div className="about-join-image" style={{backgroundImage: 'url("https://res.cloudinary.com/r0vgotvj/image/upload/v1/abtus_img4_webp.webp")', backgroundPosition: 'top'}}></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
