import React from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout/ServiceDetailLayout';

const Buns = () => {
  const data = {
    hero: {
      title: "The Art of<br/><span class=\"difference-text-grey\" style=\"white-space: nowrap;\">Clip-In Buns</span>",
      desc: "Achieve the perfect, voluminous updo in seconds with our premium hair buns.",
      video: "https://res.cloudinary.com/r0vgotvj/video/upload/v1/buns_internal_page_video.mp4",
      imageAlt: "Clip-In Hair Buns"
    },
    anatomy: {
      image: "https://res.cloudinary.com/r0vgotvj/image/upload/v1/buns_internal_page_webp.webp",
      cardTitle: "Drawstring & Clip Base",
      cardDesc: "Wraps securely around your natural hair for a flawless finish.",
      title: "The Anatomy of<br/>Our Buns",
      paragraphs: [
        "Creating a full, elegant bun can be difficult with fine or short hair. Our clip-in and drawstring buns are crafted from premium hair to provide instant texture, volume, and sophistication to your updo.",
        "The base features a discreet comb and an adjustable drawstring that anchors firmly around your own tied hair, creating a seamless, natural-looking chignon or messy bun that stays secure all day."
      ]
    },
    why: {
      title: "Why Choose Clip-In Buns?",
      desc: "The fastest way to elevate your everyday look or prep for a formal event.",
      points: [
        { title: "Instant Elegance", desc: "Transform a small, flat ponytail into a voluminous, structured bun in seconds." },
        { title: "Highly Secure", desc: "The combination of internal combs and a drawstring ensures the bun will not slip." },
        { title: "Versatile Styling", desc: "Wear it high on the crown for a top-knot, or low at the nape for a classic chignon." }
      ]
    },
    gallery: {
      desc: "Discover the effortless elegance and voluminous styling of our easy-to-apply Clip-In Bun extensions.",
      images: [
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/buns_internal_page_1_webp.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/buns_internal_page_2_webp.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1788951867/Clutch_bun_vishnu_priya_new_3_webp.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/buns_internal_page_4_webp.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/buns_internal_page_5_webp.webp"
      ]
    },
    signature: {
      title: "Clip-In Buns",
      features: [
        { name: "Styles Available", value: "Messy, Smooth Chignon, Braided" },
        { name: "Attachment", value: "Drawstring & Internal Combs" },
        { name: "Installation Time", value: "Under 2 minutes" },
        { name: "Best For", value: "Quick updos, bridal styles, adding volume" }
      ]
    }
  };

  return <ServiceDetailLayout data={data} />;
};

export default Buns;
