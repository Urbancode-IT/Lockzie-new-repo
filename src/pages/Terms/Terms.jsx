import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Terms.css';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="policy-page">
      <Navbar forceScrolled={true} />
      <div className="policy-container">
        <h1 className="policy-title">ESSENTIAL TERMS & HAIR EXTENSION CARE GUIDE</h1>
        <p className="policy-intro">Thank you for choosing Lockzie Hair. To ensure the best results and longevity of your hair extensions, please follow the guidelines below. By purchasing our products or availing our services, you acknowledge and agree to these terms.</p>
        
        <h2>HAIR EXTENSION CARE</h2>
        <ul>
          <li>Gently brush your hair daily using the comb recommended by our specialists or a wide-tooth wooden comb.</li>
          <li>Exercise care around the attachment points while brushing, styling, or handling your hair.</li>
          <li>Wash your hair approximately twice a week using lukewarm water.</li>
          <li>A conditioner or hair mask is mandatory with every wash to maintain softness and prevent dryness.</li>
          <li>Avoid rubbing, twisting, massaging, or pulling the extensions while washing.</li>
          <li>Do not brush your extensions when they are wet.</li>
          <li>After every wash, gently towel-dry the hair and apply the recommended serum to damp hair.</li>
          <li>Avoid excessive use of oils, heat styling tools, and chemical treatments, as they may reduce the lifespan of the extensions.</li>
          <li>Do not use herbal, homemade, or non-recommended hair care products on the extensions.</li>
          <li>Avoid applying henna (mehandi) to the scalp after the extensions have been fitted.</li>
          <li>Refrain from excessive pulling, tight hairstyles, or unnecessary tension on the extensions.</li>
          <li>For added protection while sleeping, use a silk or satin pillowcase and loosely tie or braid your hair.</li>
          <li>Before swimming or exercising, secure your hair in a braid to minimise tangling and stress on the extensions.</li>
          <li>Attend regular maintenance appointments every month, or as advised by your stylist.</li>
          <li>If any extension becomes loose, visit Lockzie Hair immediately for professional adjustment or refixing. Do not attempt to fix it yourself.</li>
        </ul>

        <h2>SALES, EXCHANGE & LIABILITY POLICY</h2>
        <ul>
          <li>All hair extension purchases are final.</li>
          <li>Exchanges will only be considered for unused, unopened products returned within 7 days of purchase or delivery, subject to inspection and approval.</li>
          <li>Opened, used, washed, brushed, combed, cut, or altered hair products are not eligible for exchange or return.</li>
          <li>Due to hygiene and safety standards applicable to real human hair products, no exceptions can be made for opened or used items.</li>
          <li>No refunds will be provided once a product has been applied or a service has been completed.</li>
          <li>Removal of installed extensions, if requested, will be treated as a separate service and charged accordingly.</li>
          <li>Lockzie Hair shall not be held responsible for damage resulting from improper maintenance, misuse, excessive heat, chemical exposure, or failure to follow the recommended care instructions.</li>
          <li>As the longevity of hair extensions depends largely on individual maintenance and usage, no specific warranty or lifespan guarantee is provided.</li>
        </ul>

        <h2>CUSTOMER ACKNOWLEDGEMENT</h2>
        <p>By purchasing our products or availing our services, you confirm that you have read, understood, and accepted these terms and care instructions.</p>
        <p>Following these guidelines will help maintain the quality, appearance, and longevity of your hair extensions.</p>
        
        <p><strong>Lockzie Hair</strong><br/>Premium Hair Extensions • Hair Replacement • Professional Hair Care</p>
        
        <p>Due to hygiene and sanitary considerations associated with real human hair products, no exceptions will be made for opened or used hair.</p>
        <p>Eligible customers may receive one exchange per order, subject to approval and availability.</p>
        <p>By purchasing our hair extension products or availing our services, the customer acknowledges and agrees to follow these Terms & Conditions and the recommended aftercare instructions.</p>
        <p>Lockzie Hair reserves the right to refuse an exchange or replacement if the product does not meet the above conditions.</p>
      </div>
    </div>
  );
};

export default Terms;
