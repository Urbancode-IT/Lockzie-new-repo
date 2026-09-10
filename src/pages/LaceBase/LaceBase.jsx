import React from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout/ServiceDetailLayout';

const LaceBase = () => {
  const data = {
    hero: {
      title: "The Art of<br/><span class=\"difference-text-grey\" style=\"white-space: nowrap; font-size: 63px;\">Lace Base Toppers</span>",
      desc: "Ultra-lightweight, breathable luxury offering the softest, most natural front hairline.",
      video: "https://res.cloudinary.com/r0vgotvj/video/upload/v1/Lacebase_hair_topper_video.mp4",
      imageAlt: "Lace Base Hair Topper"
    },
    anatomy: {
      image: "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Lace_base_internal_page.webp",
      cardTitle: "Swiss\u00A0Lace\u00A0Foundation",
      cardDesc: "An incredibly fine, delicate lace that disappears against the skin.",
      title: "The Anatomy of<br/>Lace Base",
      paragraphs: [
        "Lace base toppers are the epitome of lightweight comfort. Built on a foundation of ultra-fine Swiss lace, the material is so delicate that it practically vanishes when placed against the skin.",
        "The hairs are individually knotted into the lace. The true magic of a lace base is its breathability and its ability to create a flawlessly natural front hairline, making it ideal for those who prefer to wear their hair pulled back off their face."
      ]
    },
    why: {
      title: "Why Choose a Lace Base?",
      desc: "For those who demand a flawless hairline and zero-weight comfort.",
      points: [
        { title: "Invisible Hairline", desc: "The sheer lace front mimics a natural hairline, allowing for off-the-face styling." },
        { title: "Maximum Breathability", desc: "The open honeycomb structure of the lace is perfect for warm climates or sensitive scalps." },
        { title: "Feather-Light", desc: "You will barely feel you are wearing it, ensuring supreme comfort all day." }
      ]
    },
    gallery: {
      desc: "Discover the lightweight feel and flawless front hairline of our Lace Base hair toppers.",
      images: [
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Lace_base_internal_page_webp_1.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Lace_base_internal_page_webp_2.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Lace_base_internal_page_webp_3.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Lace_base_internal_page_webp_4.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Lace_base_internal_page_webp_5.webp"
      ]
    },
    signature: {
      title: "Lace Base Toppers",
      features: [
        { name: "Construction", value: "Hand-Tied Swiss Lace" },
        { name: "Hairline", value: "Invisible, highly realistic front" },
        { name: "Breathability", value: "Maximum (Excellent for heat)" },
        { name: "Best For", value: "Frontal thinning, off-the-face styling" }
      ]
    }
  };

  return <ServiceDetailLayout data={data} />;
};

export default LaceBase;
