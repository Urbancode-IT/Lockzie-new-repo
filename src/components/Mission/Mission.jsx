import React from 'react';
import './Mission.css';

const Mission = () => {
  return (
    <section className="mission-section">
      <div className="mission-container">
        {/* Box 1 */}
        <div className="mission-box">
          <div className="mission-number">01</div>
          <h3 className="home-mission-title">Our Vision</h3>
          <p className="mission-desc">
            To redefine the gold standard of the hair extension industry by building a powerhouse ecosystem where unmatched consumer luxury meets world class salon artistry.
          </p>
        </div>

        {/* Box 2 */}
        <div className="mission-box">
          <div className="mission-number">02</div>
          <h3 className="home-mission-title">Our Mission</h3>
          <p className="mission-desc">
            To deliver bespoke luxury services with high confidence hair transformations directly to the end consumer while igniting the success of hair professionals through elite, master level training.
          </p>
        </div>

        {/* Box 3 */}
        <div className="mission-box">
          <div className="mission-number">03</div>
          <h3 className="home-mission-title">What Makes Us Different</h3>
          <p className="mission-desc">
            Hand crafted detail, ethically sourced hair, master mentorship and a refusal to compromise on anything that matters.
          </p>
        </div>
      </div>
      
      <div className="mission-signature">
        <h2>Lockzie</h2>
        <p>Signed With Love</p>
      </div>
    </section>
  );
};

export default Mission;
