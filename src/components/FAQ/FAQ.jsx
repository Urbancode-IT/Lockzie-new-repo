import React, { useState } from 'react';
import './FAQ.css';

const FAQItem = ({ question, answer, delay, isOpen, onClick }) => {
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={onClick}>
      <div className="faq-item-header">
        <h3 className="faq-question">{question}</h3>
        <button className="faq-plus-btn">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="faq-icon">
            {isOpen ? (
              <path d="M0 8H16" stroke="#0A0A0A" strokeWidth="2"/>
            ) : (
              <path d="M8 0V16M0 8H16" stroke="#0A0A0A" strokeWidth="2"/>
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How long does a full extension installation take?",
      answer: "A full extension installation typically takes between 2 to 4 hours, depending on the method (tape-in, clip-in, or weft) and the desired volume and length. We always recommend booking a consultation first to get an accurate time estimate for your specific hair goals."
    },
    {
      question: "Are your extensions ethically sourced?",
      answer: "Absolutely. We pride ourselves on using 100% ethically sourced, premium human hair. Our supply chain is strictly monitored to ensure fair compensation and ethical practices at every stage of collection and production."
    },
    {
      question: "How often do I need maintenance appointments?",
      answer: "Maintenance frequency depends on the extension type and your natural hair growth. Generally, tape-ins require a move-up every 6-8 weeks, while hand-tied wefts need maintenance every 8-10 weeks. Regular check-ins ensure your natural hair remains healthy."
    },
    {
      question: "Is the Master Class certification industry-recognised?",
      answer: "Yes, our Maison certification is highly respected and officially recognised by top-tier salons across thirty-eight countries. Completing the Master Class provides you with credentials that signify a premium standard of expertise in the industry."
    },
    {
      question: "Do you ship retail products internationally?",
      answer: "We currently ship our luxury hair care and maintenance products to most major international destinations. Shipping rates and delivery times vary by location, which will be calculated at checkout."
    },
    {
      question: "What if I have very fine or thin hair?",
      answer: "Our master atelier team specializes in creating custom solutions for all hair types. For fine or thin hair, we typically recommend lightweight methods like specific micro-bonds or seamless tape-ins that add volume without causing tension or damage to your natural strands."
    }
  ];

  return (
    <section className="faq-section">
      <div className="faq-header">
        <span className="faq-label">Your Extension Guide</span>
        <h2 className="faq-heading">
          Everything About Luxury Hair Extensions.
        </h2>
        <p className="faq-subheading">
          Know Before You Transform.
        </p>
      </div>

      <div className="faq-list-container">
        {faqs.map((faq, index) => (
          <FAQItem 
            key={index} 
            delay={index * 100} 
            question={faq.question} 
            answer={faq.answer} 
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
