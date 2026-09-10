import React from 'react';
import './Boutique.css';

const Boutique = () => {
  const images = [
    'https://res.cloudinary.com/r0vgotvj/image/upload/v1/edition_elegance_img_1webp.webp',
    'https://res.cloudinary.com/r0vgotvj/image/upload/v1/edition_elegance_img_2webp.webp',
    'https://res.cloudinary.com/r0vgotvj/image/upload/v1/edition_elegance_img_3webp.webp',
    'https://res.cloudinary.com/r0vgotvj/image/upload/v1/edition_elegance_img_4webp.webp',
    'https://res.cloudinary.com/r0vgotvj/image/upload/v1/edition_elegance_img_5webp.webp',
    'https://res.cloudinary.com/r0vgotvj/image/upload/v1/edition_elegance_img_6webp.webp'
  ];

  return (
    <section className="boutique-section">
      <div className="boutique-header">
        <div className="boutique-label-container" data-aos="fade-up">
          <span className="boutique-label-line"></span>
          <span className="boutique-label">An Edition Of Elegance.</span>
        </div>
        
        <div className="boutique-header-content" data-aos="fade-up" data-aos-delay="100">
          <h2 className="boutique-heading">
            More Than A Look.<br />A Lasting Impression.
          </h2>
        </div>
      </div>

      <div className="boutique-cards-wrapper">
        {images.map((image, index) => (
          <div key={index} className="boutique-card" data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="boutique-image" style={{ backgroundImage: `url('${image}')` }}></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Boutique;
