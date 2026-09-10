import React from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout/ServiceDetailLayout';

const NanoTips = () => {
  const data = {
    hero: {
      title: "The Art of<br/><span class=\"difference-text-grey\">Nano-Tips</span>",
      desc: "The world's smallest micro-ring installation. Invisible, weightless, and incredibly secure.",
      video: "https://res.cloudinary.com/r0vgotvj/video/upload/v1/nano_tip_installation_internal_page.mp4"
    },
    anatomy: {
      image: "https://res.cloudinary.com/r0vgotvj/image/upload/v1/nano_tip_internal_page_webp.webp",
      cardTitle: "Microscopic Ring",
      cardDesc: "Up to 90% smaller than traditional micro-rings for maximum discretion.",
      title: "The Anatomy of<br/>Our Nano-Tips",
      paragraphs: [
        "Nano-ring extensions are a breakthrough in hair enhancement technology. Featuring a tiny acrylic or metal tip that loops into a microscopic nano-ring, they are virtually undetectable even in the finest of hair.",
        "Because the installation point is 90% smaller than standard micro-rings, they sit flawlessly flat against the scalp. This creates an unparalleled level of comfort and allows for extreme versatility in styling without revealing any attachments."
      ]
    },
    why: {
      title: "Why Choose Nano-Tips?",
      desc: "Perfect for thin hair and those seeking absolute invisibility.",
      points: [
        { title: "Ultimate Discretion", desc: "The tiny rings are virtually invisible, making them ideal for fine or thinning hair." },
        { title: "Damage-Free", desc: "No heat, glue, or harsh chemicals are used during the application or removal process." },
        { title: "Superior Comfort", desc: "The small footprint of the rings ensures they lie completely flat, causing zero discomfort." }
      ]
    },
    gallery: {
      desc: "Explore the undetectable finish and ultimate discretion achieved with our ultra-small Nano-Tip hair extensions.",
      images: [
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/nano_tip_internal_page_1_webp.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/nano_tip_internal_page_2_webp.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/nano_tip_internal_page_3_webp.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/nano_tip_internal_page_4_webp.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/nano_tip_internal_page_5_webp.webp"
      ]
    },
    signature: {
      title: "Nano-Tip Extensions",
      features: [
        { name: "Ring Size", value: "90% smaller than micro-rings" },
        { name: "Installation Method", value: "Cold Fusion (Nano-rings)" },
        { name: "Maintenance", value: "Every 6-8 weeks" },
        { name: "Best For", value: "Very fine/thin hair, front hairline" }
      ]
    }
  };

  return (
    <>
      <style>{`.service-image-wrapper video { object-position: center calc(50% + 30px); }`}</style>
      <ServiceDetailLayout data={data} />
    </>
  );
};

export default NanoTips;
