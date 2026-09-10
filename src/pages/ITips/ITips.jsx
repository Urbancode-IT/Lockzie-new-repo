import React from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout/ServiceDetailLayout';

const ITips = () => {
  const data = {
    hero: {
      title: "The Art of<br/><span class=\"difference-text-grey\">I-Tips</span>",
      desc: "Experience flawless blending and 360-degree mobility with our premium cold-fusion I-Tip extensions.",
      video: "https://res.cloudinary.com/r0vgotvj/video/upload/v1/i_tips_internal_page_video.mp4"
    },
    anatomy: {
      image: "https://res.cloudinary.com/r0vgotvj/image/upload/v1/serices_I-tip_internal_page_hairextensions_webp.webp",
      cardTitle: "Zero Damage",
      cardDesc: "Cold-fusion installation protects your natural hair integrity.",
      title: "The Anatomy of<br/>Our I-Tips",
      paragraphs: [
        "Our I-Tip extensions represent the pinnacle of cold-fusion technology. Each strand is tipped with a specialized keratin compound shaped like a small 'I', designed to be securely fastened to your natural hair using micro-beads or cylinders.",
        "Unlike hot-fusion methods, I-Tips require zero heat, glue, or chemicals. The result is a completely undetectable, highly flexible installation that allows your scalp to breathe and your natural hair to grow unhindered."
      ]
    },
    why: {
      title: "Why Choose I-Tips?",
      desc: "The preferred choice for maximum mobility and zero heat damage.",
      points: [
        { title: "No Heat Application", desc: "Installed using micro-cylinders, keeping your natural hair entirely safe from thermal damage." },
        { title: "360° Movement", desc: "Wear your hair up or down seamlessly. The individual strands move just like your natural hair." },
        { title: "Reusable Investment", desc: "The high-quality keratin tips can be moved up as your hair grows, offering incredible longevity." }
      ]
    },
    gallery: {
      desc: "Discover the flawless integration and 360-degree mobility of our luxury cold-fusion I-Tip hair extensions.",
      images: [
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/I-tips_1_internal_page_webp.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1788527716/I-tips_2_internal_page_webp.webp?v=2",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1788527681/I-tips_3_internal_page_webp.webp?v=2",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/I-tips_4_internal_page_webp.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/I-tips_5_internal_page_webp.webp"
      ]
    },
    signature: {
      title: "I-Tip Extensions",
      features: [
        { name: "Installation Method", value: "Cold Fusion (Micro-cylinders)" },
        { name: "Maintenance", value: "Every 6-8 weeks" },
        { name: "Hair Reusability", value: "Up to 12 months with care" },
        { name: "Best For", value: "Active lifestyles, high updos" }
      ]
    }
  };

  return <ServiceDetailLayout data={data} />;
};

export default ITips;
