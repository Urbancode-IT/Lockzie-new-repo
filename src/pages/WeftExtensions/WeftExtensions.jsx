import React from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout/ServiceDetailLayout';

const WeftExtensions = () => {
  const data = {
    hero: {
      title: "<span style=\"display: inline-block; transform: translateX(-4px);\">The Art of<br/><span class=\"difference-text-grey\" style=\"white-space: nowrap;\">Weft Extensions</span></span>",
      desc: "Unrivaled density and seamless coverage with our hand-tied and machine-weft luxury hair.",
      video: "https://res.cloudinary.com/r0vgotvj/video/upload/v1/weft_extension_internal_page.mp4",
      imageAlt: "Weft Hair Extensions"
    },
    anatomy: {
      image: "https://res.cloudinary.com/r0vgotvj/image/upload/v1/weft_hair_extension_internal_page_web_p.webp",
      cardTitle: "Seamless Track",
      cardDesc: "Sewn meticulously to a hidden foundation row for maximum volume.",
      title: "The Anatomy of<br/>Weft Extensions",
      paragraphs: [
        "Weft extensions are continuous tracks of hair. At our atelier, we offer both precision machine-wefts and delicate hand-tied wefts. They are installed by creating a foundation of silicone-lined micro-beads on your natural hair, to which the weft is expertly sewn.",
        "This modern 'beaded row' method avoids the tight, damaging braids of traditional weaves. It distributes the weight evenly across your scalp, delivering maximum thickness and length with absolute comfort."
      ]
    },
    why: {
      title: "Why Choose Wefts?",
      desc: "The ultimate solution for dramatic thickness and full-coverage density.",
      points: [
        { title: "Maximum Volume", desc: "Multiple wefts can be stacked on a single row to create unparalleled density." },
        { title: "No Glue or Tape", desc: "Installed strictly with beads and thread, ensuring zero adhesive residue." },
        { title: "Invisible Rows", desc: "The hand-tied tracks sit so flat to the scalp that they remain hidden even when the wind blows." }
      ]
    },
    gallery: {
      desc: "Witness the incredible thickness and natural flow of our hand-tied and machine Weft hair extensions.",
      images: [
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/weft_internal_page_1_webp.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/weft_internal_page_2_webp.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/weft_internal_page_3_web_p.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/weft_internal_page_4webp.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/weft_internal_page_5_webp.webp"
      ]
    },
    signature: {
      title: "Weft Extensions",
      features: [
        { name: "Weft Types", value: "Hand-Tied, Flat Silk, Machine" },
        { name: "Installation Method", value: "Beaded Foundation Row" },
        { name: "Maintenance", value: "Move-up every 6-10 weeks" },
        { name: "Best For", value: "Medium to thick hair, maximum volume" }
      ]
    }
  };

  return <ServiceDetailLayout data={data} />;
};

export default WeftExtensions;
