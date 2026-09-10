import React from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout/ServiceDetailLayout';

const KTips = () => {
  const data = {
    hero: {
      title: "The Art of<br/><span class=\"difference-text-grey\">K-Tips</span>",
      desc: "Achieve the ultimate bespoke transformation with individual keratin bonds for natural flow.",
      video: "https://res.cloudinary.com/r0vgotvj/video/upload/v1/k_-tips_installation.mp4"
    },
    anatomy: {
      image: "https://res.cloudinary.com/r0vgotvj/image/upload/v1/k_tips_internal_page_webp.webp",
      cardTitle: "Keratin Bond",
      cardDesc: "Fuses seamlessly mimicking your hair's natural molecular structure.",
      title: "The Anatomy of<br/>Our K-Tips",
      paragraphs: [
        "Keratin Tips (K-Tips) are the gold standard for long-lasting, individual strand extensions. Each tip is coated in a keratin protein bond that precisely matches the structural makeup of human hair.",
        "Using a specialized heating tool, the keratin is gently melted and rolled around a small section of your natural hair. Because the bond is made of keratin, it expands and contracts beautifully with your natural hair when wet or dry, preventing slippage and damage."
      ]
    },
    why: {
      title: "Why Choose K-Tips?",
      desc: "Experience unparalleled customization, longevity, and natural movement.",
      points: [
        { title: "Ultimate Customization", desc: "Bonds can be cut into smaller micro-bonds for delicate areas around the hairline." },
        { title: "Longest Lasting", desc: "Enjoy 3 to 5 months of flawless wear without needing maintenance appointments." },
        { title: "Invisible Integration", desc: "The clear or color-matched keratin bonds become virtually undetectable once installed." }
      ]
    },
    gallery: {
      desc: "Experience the invisible, natural look of our premium keratin-bonded K-Tip extensions designed for long-lasting volume.",
      images: [
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/k_tips_internal_page_1_webp.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/k_tips_internal_page_2_webp.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/k_tips_internal_page_3_webp.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/k_tips_internal_page_4_webp.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/k_tips_internal_page_5_webp.webp"
      ]
    },
    signature: {
      title: "K-Tip Extensions",
      features: [
        { name: "Installation Method", value: "Thermal Keratin Fusion" },
        { name: "Longevity", value: "3-5 months continuous wear" },
        { name: "Customization", value: "Can be customized to micro-bonds" },
        { name: "Best For", value: "Fine hair, long-term wear, versatile styling" }
      ]
    }
  };

  return (
    <>
      <style>{`.anatomy-image-wrapper img { object-position: 75% center; }`}</style>
      <ServiceDetailLayout data={data} />
    </>
  );
};

export default KTips;
