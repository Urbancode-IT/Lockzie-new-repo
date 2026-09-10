import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';
import './ContactForm.css';

const ContactForm = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const dropdownRef = useRef(null);
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const serviceOptions = [
    { value: "extensions", label: "Hair Extensions" },
    { value: "masterclass", label: "Master Class" },
    { value: "consultation", label: "Consultation" },
    { value: "skincare", label: "Skin Care" }
  ];

  const taglines = {
    extensions: [
      "Get ready for your dream volume and length!",
      "Flawless, seamless hair is coming your way!",
      "Your journey to breathtaking extensions begins here!"
    ],
    skincare: [
      "Get ready for a radiant, glowing complexion!",
      "A touch of skincare luxury is coming your way!",
      "Your journey to flawless skin begins here!"
    ],
    consultation: [
      "Our atelier team is excited to meet you!",
      "Let's design your perfect, personalized look!",
      "Expert advice for your unique beauty journey awaits!"
    ],
    masterclass: [
      "Prepare to elevate your craft to the next level!",
      "We're thrilled to welcome you to the Academy!",
      "Master the art of luxury styling with us!"
    ],
    default: [
      "A touch of luxury is coming your way!",
      "Our atelier team will be in touch shortly!",
      "We can't wait to transform your look!"
    ]
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const serviceKey = selectedService || "default";
    const availableTaglines = taglines[serviceKey] || taglines.default;
    
    // NOTE: Replace these with your actual EmailJS credentials
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        const randomTagline = availableTaglines[Math.floor(Math.random() * availableTaglines.length)];
        
        Swal.fire({
          title: 'Enquiry Submitted!',
          text: randomTagline,
          icon: 'success',
          confirmButtonColor: '#0A0A0A',
          confirmButtonText: 'Beautiful',
          customClass: {
            popup: 'sweet-popup'
          }
        });
        setIsSubmitting(false);
        e.target.reset();
        setSelectedService("");
      }, (error) => {
        Swal.fire({
          title: 'Oops!',
          text: 'Something went wrong. Please try again.',
          icon: 'error',
          confirmButtonColor: '#0A0A0A',
          confirmButtonText: 'Okay',
          customClass: {
            popup: 'sweet-popup'
          }
        });
        setIsSubmitting(false);
      });
  };

  return (
    <section className="contact-section" id="contact-form-section">
      <div className="contact-wrapper">
        <div className="contact-left">
          <div className="contact-label-container" data-aos="fade-up">
            <span className="contact-label-line"></span>
            <span className="contact-label">Enquire</span>
          </div>
          <h2 className="contact-heading" data-aos="fade-up" data-aos-delay="100">Let's Talk.</h2>
          <p className="contact-subheading" data-aos="fade-up" data-aos-delay="200">
            Share a few details and our atelier team will reach out to you within 24 hours with personalised recommendations.
          </p>
          
          <div className="contact-info-list" data-aos="fade-up" data-aos-delay="300">
            <div className="contact-info-item">
              <div className="contact-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="contact-info-text">
                <span className="info-label">Email</span>
                <span className="info-value">lockziehair@gmail.com</span>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="contact-info-text">
                <span className="info-label">Phone</span>
                <span className="info-value">9566662642</span>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="contact-info-text">
                <span className="info-label">Studio</span>
                <span className="info-value">159/52 A, 3rd Floor, Velachery Main Rd, Anna Garden, Velachery, Chennai, Tamil Nadu 600042.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-right" data-aos="fade-left" data-aos-delay="200">
          <form className="contact-form" ref={form} onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input type="text" name="full_name" placeholder="Full Name" required />
              </div>
              <div className="form-group">
                <input type="tel" name="phone_number" placeholder="Phone Number" required />
              </div>
            </div>
            
            <div className="form-row single">
              <div className="form-group full-width">
                <input type="email" name="email" placeholder="Email Address" required />
              </div>
            </div>

            <div className="form-row single">
              <div className="form-group select-group" ref={dropdownRef}>
                <div 
                  className={`custom-select ${selectedService ? 'selected' : ''}`}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  {selectedService ? serviceOptions.find(o => o.value === selectedService).label : "Service Interested In"}
                  <div className="select-arrow">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>

                {isDropdownOpen && (
                  <div className="custom-options">
                    {serviceOptions.map((option) => (
                      <div 
                        key={option.value} 
                        className="custom-option"
                        onClick={() => {
                          setSelectedService(option.value);
                          setIsDropdownOpen(false);
                        }}
                      >
                        {option.label}
                      </div>
                    ))}
                  </div>
                )}
                <input type="hidden" name="service_interested" value={selectedService} required />
                <input type="hidden" name="show_extra_fields" value="block" />
              </div>
            </div>

            <div className="form-group textarea-group">
              <textarea name="message" placeholder="Tell us about yourself" rows="4"></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
