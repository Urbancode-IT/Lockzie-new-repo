import React from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout/ServiceDetailLayout';

const Bangs = () => {
  const data = {
    hero: {
      title: "The Art of<br/><span class=\"difference-text-grey\" style=\"white-space: nowrap;\">Clip-In Bangs</span>",
      desc: "Change your entire face shape in an instant without the commitment of a haircut.",
      video: "https://res.cloudinary.com/r0vgotvj/video/upload/v1/Bangs_internal_page_video_1.mp4",
      imageAlt: "Clip-In Bangs"
    },
    anatomy: {
      image: "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Bangs_internal_page_webp.webp",
      cardTitle: "V-Shaped Base",
      cardDesc: "Designed to lay flat against the crown and blend seamlessly into your natural part.",
      title: "The Anatomy of<br/>Our Bangs",
      paragraphs: [
        "Clip-in bangs offer the ultimate style versatility. Why chop your natural hair when you can snap in a flawless fringe? Our clip-in bangs are designed with longer face-framing pieces on the sides to blend invisibly with your own hair.",
        "The base features a discreet, V-shaped lace foundation equipped with tiny pressure-sensitive clips. This ensures the bangs sit completely flat against your forehead, mimicking a natural hairline perfectly."
      ]
    },
    why: {
      title: "Why Choose Clip-In Bangs?",
      desc: "The risk-free way to experiment with a bold new look.",
      points: [
        { title: "No Regrets", desc: "Avoid the growing-out phase. Get perfect bangs today, and go back to your normal style tomorrow." },
        { title: "Face Framing", desc: "Instantly change your look, highlight your cheekbones, and frame your face beautifully." },
        { title: "Seamless Blend", desc: "The graduated sides ensure a smooth transition into your natural hair length." }
      ]
    },
    gallery: {
      desc: "Explore the face-framing perfection and instant style upgrade of our natural Clip-In Bangs.",
      images: [
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Bangs_internal_page_webp_1.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Bangs_internal_page_webp_2.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Bangs_internal_page_webp_3.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Bangs_internal_page_webp_4.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Bangs_internal_page_webp_5.webp"
      ]
    },
    signature: {
      title: "Clip-In Bangs",
      features: [
        { name: "Styles Available", value: "Wispy, Blunt, Curtain" },
        { name: "Attachment", value: "3 Pressure-Sensitive Clips" },
        { name: "Base Design", value: "V-Shaped Lace with Face-Framing Sides" },
        { name: "Best For", value: "Quick style changes, trying a fringe risk-free" }
      ]
    }
  };

  return (
    <>
      <style>
        {`
          .anatomy-image-wrapper img {
            object-position: left center !important;
          }
        `}
      </style>
      <ServiceDetailLayout data={data} />
    </>
  );
};

export default Bangs;
