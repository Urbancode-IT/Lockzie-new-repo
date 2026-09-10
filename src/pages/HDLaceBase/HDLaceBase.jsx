import React from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout/ServiceDetailLayout';

const HDLaceBase = () => {
  const data = {
    hero: {
      title: "The Art of<br/><span class=\"difference-text-grey\" style=\"white-space: nowrap; font-size: 55px;\">Front Line HD Lace Base</span>",
      desc: "The absolute pinnacle of illusion. High-definition lace that melts completely into any skin tone.",
      video: "https://res.cloudinary.com/r0vgotvj/video/upload/v1/Frontline_video.mov",
      imageAlt: "HD Lace Base Hair Topper"
    },
    anatomy: {
      image: "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Frontline_hd_lacebase_webp.webp",
      cardTitle: "High-Definition\u00A0Lace",
      cardDesc: "Thinner, softer, and more transparent than standard Swiss lace.",
      title: "The Anatomy of<br/>HD Lace",
      paragraphs: [
        "Front Line HD (High Definition) Lace represents the highest tier of hair replacement technology. HD lace is significantly finer and more transparent than traditional lace, allowing it to seamlessly melt into any skin complexion without the need for makeup or tinting.",
        "Because the material is so remarkably delicate, the knots where the hair is tied appear virtually non-existent. This creates a front hairline so realistic that it remains undetectable even under close scrutiny or bright lighting."
      ]
    },
    why: {
      title: "Why Choose HD Lace?",
      desc: "For those who refuse to compromise on realism at the hairline.",
      points: [
        { title: "Universal Skin Melt", desc: "The ultra-transparent material perfectly matches all skin tones seamlessly." },
        { title: "Undetectable Knots", desc: "The fine material allows for smaller, tighter knots that look like natural hair follicles." },
        { title: "Camera Ready", desc: "Provides a flawless finish that looks completely natural even in high-definition photography." }
      ]
    },
    gallery: {
      desc: "Explore the ultimate invisibility and HD realism of our Front Line HD Lace Base toppers.",
      images: [
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Frontline_hd_lacebase_webp_1.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Frontline_hd_lacebase_webp_2.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Frontline_hd_lacebase_webp_3.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Frontline_hd_lacebase_webp_4.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Frontline_hd_lacebase_webp_5.webp"
      ]
    },
    signature: {
      title: "HD Lace Toppers",
      features: [
        { name: "Material", value: "Ultra-Thin High Definition Lace" },
        { name: "Visibility", value: "100% Transparent on all skin tones" },
        { name: "Hairline Realism", value: "Unmatched / Cinema Quality" },
        { name: "Best For", value: "Severe frontal thinning, flawless updos" }
      ]
    }
  };

  return <ServiceDetailLayout data={data} />;
};

export default HDLaceBase;
