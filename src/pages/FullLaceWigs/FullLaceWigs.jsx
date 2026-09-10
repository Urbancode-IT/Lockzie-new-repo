import React from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout/ServiceDetailLayout';

const FullLaceWigs = () => {
  const data = {
    hero: {
      title: "The Art of<br/><span class=\"difference-text-grey\" style=\"white-space: nowrap; font-size: 80px;\">Full Lace Wigs</span>",
      desc: "Total freedom. 100% hand-tied luxury allowing endless styling versatility.",
      video: "https://res.cloudinary.com/r0vgotvj/video/upload/v1/Full_lace_wigs_internal_page.mp4",
      imageAlt: "Full Lace Wig"
    },
    anatomy: {
      image: "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Full_lace_wig_internal_page_webp.webp",
      cardTitle: "100%\u00A0Hand-Tied",
      cardDesc: "Every single strand is meticulously knotted by hand onto a full lace cap.",
      title: "The Anatomy of<br/>Full Lace Wigs",
      paragraphs: [
        "A Full Lace Wig is the gold standard of wig construction. Unlike other wigs that use machine wefts in the back, the entire cap of a full lace wig is made of delicate Swiss or French lace.",
        "Every single strand of hair is individually hand-tied onto this lace cap by a master artisan. This incredibly labor-intensive process results in a wig that offers unparalleled styling freedom, allowing you to part the hair anywhere and wear it in high ponytails or complex updos."
      ]
    },
    why: {
      title: "Why Choose a Full Lace Wig?",
      desc: "For those who want zero limitations on how they style their hair.",
      points: [
        { title: "Ultimate Versatility", desc: "Part it anywhere, braid it, or pull it into a high, sleek ponytail with ease." },
        { title: "Supreme Breathability", desc: "The all-lace construction provides maximum airflow to your natural scalp." },
        { title: "Lightweight Comfort", desc: "Because there are no bulky machine wefts, it feels incredibly light on the head." }
      ]
    },
    gallery: {
      desc: "Discover the limitless styling options and 360-degree natural look of our Full Lace wigs.",
      images: [
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Full_lace_wig_internal_page_webp_1.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Full_lace_wig_internal_page_webp_2.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Full_lace_wig_internal_page_webp_3.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Full_lace_wig_internal_page_webp_4.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Full_lace_wig_internal_page_webp_5.webp"
      ]
    },
    signature: {
      title: "Full Lace Wigs",
      features: [
        { name: "Construction", value: "100% Hand-Tied Full Lace Cap" },
        { name: "Parting Space", value: "Anywhere on the head (Freestyle)" },
        { name: "Updo Capability", value: "Yes (High ponytails, buns, braids)" },
        { name: "Best For", value: "Maximum styling versatility, premium luxury" }
      ]
    }
  };

  return <ServiceDetailLayout data={data} />;
};

export default FullLaceWigs;
