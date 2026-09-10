import React from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout/ServiceDetailLayout';

const FeatherExtensions = () => {
  const data = {
    hero: {
      title: "The Art of<br/><span class=\"difference-text-grey\" style=\"white-space: nowrap; font-size: 0.85em;\">Feather Extensions</span>",
      desc: "Add a touch of bohemian luxury and bespoke color with genuine, premium feather extensions.",
      video: "https://res.cloudinary.com/r0vgotvj/video/upload/v1/Feather_hair_extension_internal_page.mp4",
      imageAlt: "Feather Hair Extensions"
    },
    anatomy: {
      image: "https://res.cloudinary.com/r0vgotvj/image/upload/v1/feather_extension_internal_page_webp.webp",
      cardTitle: "Natural Plume",
      cardDesc: "Real, ethically sourced feathers that act just like hair.",
      title: "The Anatomy of<br/>Feather Extensions",
      paragraphs: [
        "Feather extensions are a unique, artisanal way to add texture, color, and personality to your hair. We use only the finest, ethically sourced real feathers that can be washed, brushed, blow-dried, and heat-styled just like your natural hair.",
        "They are installed using a small, silicone-lined micro-link that secures the feather to a tiny section of your hair at the root, ensuring a strong hold that won't slip or damage the hair."
      ]
    },
    why: {
      title: "Why Choose Feathers?",
      desc: "For the free-spirited individual seeking a unique, low-maintenance accent.",
      points: [
        { title: "Heat Friendly", desc: "Because they are real feathers, you can curl and straighten them alongside your natural hair." },
        { title: "Subtle or Bold", desc: "Available in natural hair tones for subtle texture, or vibrant colors for a bold statement." },
        { title: "Easy Removal", desc: "The micro-link can simply be unclamped, allowing the feather to slide right out." }
      ]
    },
    gallery: {
      desc: "Browse the unique styling and vibrant flair of our customizable Feather hair extensions.",
      images: [
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/feather_extension_internal_page_1_webp.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/feather_extension_internal_page_2_webp.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/feather_extension_internal_page_3_webp.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/feather_extension_internal_page_4_webp.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1788951869/Feather_tip_vishnu_priya_new_2_webp.webp"
      ]
    },
    signature: {
      title: "Feather Extensions",
      features: [
        { name: "Material", value: "100% Real, Ethically Sourced Feathers" },
        { name: "Installation Method", value: "Silicone Micro-Link" },
        { name: "Styling", value: "Washable & Heat-Styling Safe" },
        { name: "Best For", value: "Accents, pops of color, bohemian styling" }
      ]
    }
  };

  return <ServiceDetailLayout data={data} />;
};

export default FeatherExtensions;
