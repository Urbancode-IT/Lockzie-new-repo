import React from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout/ServiceDetailLayout';

const TapeHair = () => {
  const data = {
    hero: {
      title: "The Art of<br/><span class=\"difference-text-grey\">Tape Hair</span>",
      desc: "Instant volume and length with seamless, medical-grade adhesive wefts that lay perfectly flat.",
      video: "https://res.cloudinary.com/r0vgotvj/video/upload/v1/tape_hair_extension_internal_page.mp4"
    },
    anatomy: {
      image: "https://res.cloudinary.com/r0vgotvj/image/upload/v1/tape_hair_internal_page_webp.webp",
      cardTitle: "Invisible Tape",
      cardDesc: "Medical-grade adhesive on a flexible polyurethane base.",
      title: "The Anatomy of<br/>Tape Hair",
      paragraphs: [
        "Tape-in extensions are revolutionized wefts that are pre-taped with a medical-grade, hypoallergenic adhesive. They are sandwiched together with a small section of your natural hair in between.",
        "The flexible polyurethane base of the tape lies completely flush against the scalp, making them one of the most comfortable and fastest-to-install extension methods available in luxury salons today."
      ]
    },
    why: {
      title: "Why Choose Tape Hair?",
      desc: "The fastest route to dramatic, voluminous transformations.",
      points: [
        { title: "Rapid Transformation", desc: "A full head of tape extensions can be installed in under an hour." },
        { title: "Lies Perfectly Flat", desc: "The ultra-thin tape bonds contour to the head, making them undetectable to the touch." },
        { title: "Less Tension", desc: "The weight is distributed across a wider section of hair, minimizing tension on natural follicles." }
      ]
    },
    gallery: {
      desc: "See the instant transformation and flat, seamless blend of our professional Tape-In hair extensions.",
      images: [
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/tape_hair_internal_page_1_webp.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/tape_hair_internal_page_2_webp.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1788527702/tape_hair_internal_page_3_webp.webp?v=2",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1788527709/tape_hair_internal_page_4_webp.webp?v=2",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/tape_hair_internal_page_5_webp.webp"
      ]
    },
    signature: {
      title: "Tape Hair Extensions",
      features: [
        { name: "Installation Time", value: "45 - 60 minutes" },
        { name: "Maintenance", value: "Every 6-8 weeks" },
        { name: "Profile", value: "Ultra-flat polyurethane base" },
        { name: "Best For", value: "Fast installation, fine to medium hair" }
      ]
    }
  };

  return <ServiceDetailLayout data={data} />;
};

export default TapeHair;
