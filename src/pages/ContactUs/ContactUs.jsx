import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ContactPopup from '../../components/ContactPopup/ContactPopup';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';
import emailjs from '@emailjs/browser';
import './ContactUs.css';

const ContactUs = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const messages = [
      "Your message has reached us beautifully.",
      "We've received your request. Talk soon!",
      "Thanks for contacting Lockzie. We can't wait to help.",
      "You're one step closer to your dream hair.",
      "Your beauty journey starts here.",
      "Thanks! Our team will get back to you soon.",
      "We appreciate your message.",
      "Your perfect hair transformation is just around the corner.",
      "Great hair starts with a conversation—we'll contact you soon.",
      "Thanks! Our hair experts are excited to connect with you.",
      "Your dream hair is only one message away.",
      "We're preparing to make your hair goals a reality.",
      "Let's create your perfect look together.",
      "Thanks! Your hair deserves the best, and we're here to help.",
      "We'll help you achieve the look you've always wanted.",
      "Woohoo! Message delivered successfully.",
      "Your message is flying to our team.",
      "Got it! We'll reply as soon as possible.",
      "Success! Thanks for reaching out.",
      "Awesome! We'll be in touch soon.",
      "Your request has been received with love.",
      "Beauty is on its way!",
      "Good things take a little time—we'll contact you soon.",
      "Thanks for trusting Lockzie.",
      "You're officially on our priority list.",
      "We can't wait to meet you.",
      "Your message made our day!"
    ];

    // NOTE: Replace these with your actual EmailJS credentials
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        Swal.fire({
          title: 'Enquiry Submitted!',
          text: randomMessage,
          icon: 'success',
          confirmButtonColor: '#0A0A0A',
          confirmButtonText: 'Beautiful',
          customClass: {
            popup: 'sweet-popup'
          }
        });
        setIsSubmitting(false);
        e.target.reset();
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
    <div className="contact-page">
      <Navbar forceScrolled={true} />
      <ContactPopup />
      
      <div className="contact-page-header">
        <h1 className="contact-page-title">Contact Us</h1>
      </div>
      
      <div className="contact-get-in-touch">
        <div className="contact-get-in-touch-container">
          <div className="contact-get-in-touch-left">
            <h2 className="contact-get-in-touch-title">Get in touch</h2>
            
            <div className="contact-info-block">
              <span className="contact-info-label">EMAIL</span>
              <span className="contact-info-value email-value">lockziehair@gmail.com</span>
            </div>
            
            <div className="contact-info-block">
              <span className="contact-info-label">PHONE</span>
              <span className="contact-info-value">9566662642</span>
            </div>
            
            <div className="contact-info-block">
              <span className="contact-info-label">ADDRESS</span>
              <span className="contact-info-value">159/52 A, 3rd floor ,Velachery Main Rd, Anna Garden, Velachery, Chennai, Tamil Nadu 600042.</span>
            </div>

            <div className="contact-info-block" style={{ marginTop: '20px' }}>
              <span className="contact-info-label">FOLLOW US</span>
              <div className="contact-social-icons">
                {/* Instagram */}
                <a href="https://www.instagram.com/lockziehair/" target="_blank" rel="noopener noreferrer" className="contact-social-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                {/* Facebook */}
                <a href="https://www.facebook.com/61577682755513/posts/hair-thining-temporary-or-permanent-solution-lockzie-hair/122183673872922758/" target="_blank" rel="noopener noreferrer" className="contact-social-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                {/* YouTube */}
                <a href="https://www.youtube.com/@LockzieHair/shorts" target="_blank" rel="noopener noreferrer" className="contact-social-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                </a>
                {/* WhatsApp */}
                <a href="https://wa.me/919566662642?text=Hi%20Lockzie%20Hair!%20I%20am%20interested%20in%20your%20services.%20Could%20you%20please%20share%20more%20details%3F" target="_blank" rel="noopener noreferrer" className="contact-social-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFFFFF"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-get-in-touch-right">
            <form className="contact-page-form" ref={form} onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label>Full Name</label>
                  <input type="text" name="full_name" placeholder="Jane Doe" required />
                </div>
                <div className="contact-form-group">
                  <label>Email Address</label>
                  <input type="email" name="email" placeholder="jane@example.com" required />
                </div>
              </div>
              <div className="contact-form-group full-width">
                <label>Message</label>
                <textarea name="message" placeholder="How can we help you?" required></textarea>
                <input type="hidden" name="show_extra_fields" value="none" />
              </div>
              <button type="submit" className="contact-submit-button" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="contact-map-section" id="contact-map-section">
        <div className="contact-map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.698637139042!2d80.21752427489334!3d12.991116987326071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267a0d927e529%3A0xef4e363d2d9969f2!2sLOCKZIE%20HAIR!5e0!3m2!1sen!2sin!4v1783916427704!5m2!1sen!2sin"
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

    </div>
  );
};

export default ContactUs;
