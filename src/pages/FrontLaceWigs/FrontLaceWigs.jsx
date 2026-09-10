import React from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout/ServiceDetailLayout';

const FrontLaceWigs = () => {
  const data = {
    hero: {
      title: "The Art of<br/><span class=\"difference-text-grey\" style=\"white-space: nowrap; font-size: 63px;\">Front Lace Wigs</span>",
      desc: "Flawless hairlines and effortless styling with our premium lace front wig collection.",
      video: "https://res.cloudinary.com/r0vgotvj/video/upload/v1/Front_lace_wigs_internal_page_webp_3.mov",
      imageAlt: "Front Lace Wig"
    },
    anatomy: {
      image: "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Front_lace_wigs_internal_page_webp.webp",
      cardTitle: "Lace\u00A0Frontal",
      cardDesc: "Ear-to-ear sheer lace provides a natural-looking hairline.",
      title: "The Anatomy of<br/>Front Lace Wigs",
      paragraphs: [
        "A Front Lace Wig features a piece of sheer lace at the front, typically stretching from ear to ear, with individual hairs hand-tied into it. The rest of the wig cap is usually constructed with durable machine wefts.",
        "This hybrid construction gives you the most crucial element of a realistic wig—an invisible front hairline—while maintaining affordability and structural durability throughout the back and sides."
      ]
    },
    why: {
      title: "Why Choose a Front Lace Wig?",
      desc: "The perfect entry point into luxury wigs, balancing realism and everyday practicality.",
      points: [
        { title: "Realistic Hairline", desc: "The lace front allows you to pull the hair back away from your face with confidence." },
        { title: "Versatile Parting", desc: "Offers deep parting space at the front and crown for various styling options." },
        { title: "Durable Construction", desc: "The wefted back provides excellent structure and longevity for daily wear." }
      ]
    },
    gallery: {
      desc: "See the impeccable natural hairline and versatile parting of our luxury Front Lace wigs.",
      images: [
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Front_lace_wigs_internal_page_webp_1.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Front_lace_wigs_internal_page_webp_2.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1789022318/Front_lace_wig_image_webp_new_format.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Front_lace_wigs_internal_page_webp_4.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Front_lace_wigs_internal_page_webp_5.webp"
      ]
    },
    signature: {
      title: "Front Lace Wigs",
      features: [
        { name: "Construction", value: "Hand-Tied Front / Wefted Back" },
        { name: "Hairline", value: "Ear-to-Ear Lace" },
        { name: "Parting Space", value: "Typically 4-6 inches deep at the front" },
        { name: "Best For", value: "Everyday wear, beginners, off-the-face styles" }
      ]
    }
  };

  return <ServiceDetailLayout data={data} />;
};

export default FrontLaceWigs;
