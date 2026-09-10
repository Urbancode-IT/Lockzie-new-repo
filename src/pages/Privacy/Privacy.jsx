import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import '../Terms/Terms.css';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="policy-page">
      <Navbar forceScrolled={true} />
      <div className="policy-container">
        <h1 className="policy-title">Privacy Policy</h1>
        
        <h2>1. Business Details</h2>
        <p><strong>Lockzie Hair Extensions</strong><br/>
        Registered/Business Address: 159/52 A, 3rd floor, Velachery Main Rd, Anna Garden, Velachery, Chennai, Tamil Nadu 600042.<br/>
        Contact Email: lockziehair@gmail.com<br/>
        Phone/WhatsApp Number: 9566662642</p>

        <h2>2. Information We Collect</h2>
        <p>We may collect the following information:</p>
        <ul>
          <li>Name</li>
          <li>Phone number</li>
          <li>Email address</li>
          <li>Address/shipping address (if applicable)</li>
          <li>Hair extension preferences or enquiry details</li>
          <li>Messages submitted through contact/enquiry forms</li>
          <li>Payment information (if online payments are accepted)</li>
          <li>IP address and browser/device information</li>
          <li>Cookies and website usage information</li>
        </ul>

        <h2>3. Why We Collect the Information</h2>
        <p>We collect your information for the following purposes:</p>
        <ul>
          <li>Responding to enquiries</li>
          <li>Providing product/service information</li>
          <li>Processing orders and delivering products</li>
          <li>Scheduling consultations/appointments</li>
          <li>Sending order or enquiry updates</li>
          <li>Improving website performance</li>
          <li>Marketing/promotional communication (if applicable)</li>
        </ul>

        <h2>4. WhatsApp and Enquiry Forms</h2>
        <p>Information submitted through the website may be used to respond to you through WhatsApp, phone, email, or other communication channels. Please note that WhatsApp is a third-party service, and communications through it are subject to their respective privacy terms.</p>

        <h2>5. Payment Information</h2>
        <p>If we accept online payments, payment details are processed securely by our authorized payment provider. We do not store customers' card or banking credentials on our servers.</p>

        <h2>6. Cookies</h2>
        <p>Our website uses essential cookies, analytics cookies, advertising/marketing cookies, and preference cookies to improve your experience. We may use tools like Google Analytics and Meta Pixel to understand website usage and improve our services.</p>

        <h2>7. Third-Party Services</h2>
        <p>Our website may connect to third-party services including but not limited to:</p>
        <ul>
          <li>WhatsApp</li>
          <li>Google Analytics</li>
          <li>Google Maps</li>
          <li>Payment gateways</li>
          <li>Email services</li>
          <li>Hosting providers</li>
          <li>Meta/Facebook Pixel</li>
          <li>CRM or enquiry management software</li>
        </ul>

        <h2>8. How Information is Protected</h2>
        <p>We implement reasonable security measures to protect your customer information. However, please be aware that no online system or electronic storage can guarantee absolute security.</p>

        <h2>9. How Long Data is Kept</h2>
        <p>We retain your enquiry information, customer/order information, payment-related records, and marketing/subscription information only for as long as is necessary for the purposes set out in this Privacy Policy, and to comply with our legal obligations.</p>

        <h2>10. Customer Rights</h2>
        <p>Depending on applicable laws, you may have rights regarding your personal information, such as:</p>
        <ul>
          <li>Requesting access to your information</li>
          <li>Requesting correction or deletion (where applicable)</li>
          <li>Withdrawing marketing consent</li>
          <li>Asking how your information is being used</li>
        </ul>

        <h2>11. Children's Information</h2>
        <p>Our website and services are intended for adults. We do not knowingly collect personal information from children.</p>

        <h2>12. Policy Changes</h2>
        <p>This Privacy Policy may be updated from time to time to reflect changes in our practices. The latest version will always be published on our website.</p>

        <h2>13. Contact for Privacy Questions</h2>
        <p>If you have any questions about our privacy practices, please contact us at:</p>
        <p><strong>Email:</strong> lockziehair@gmail.com<br/>
        <strong>Phone:</strong> 9566662642<br/>
        <strong>Address:</strong> 159/52 A, 3rd floor, Velachery Main Rd, Anna Garden, Velachery, Chennai, Tamil Nadu 600042.</p>
      </div>
    </div>
  );
};

export default Privacy;
