import React from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout/ServiceDetailLayout';

const Ponytail = () => {
  const data = {
    hero: {
      title: "The Art of<br/><span class=\"difference-text-grey\">Ponytails</span>",
      desc: "Command the room with a sleek, ultra-long, and voluminous high ponytail.",
      video: "https://res.cloudinary.com/r0vgotvj/video/upload/v1/wrap_around_ponytail_internal_page_video.mp4",
      imageAlt: "Clip-In Ponytail"
    },
    anatomy: {
      image: "https://res.cloudinary.com/r0vgotvj/image/upload/v1/ponytail_internal_page_webp.webp",
      cardTitle: "Versatile Bases",
      cardDesc: "Designed for wrap-around, flat clip, and claw clip-in ponytails.",
      title: "The Anatomy of<br/>Our Ponytails",
      paragraphs: [
        "Elevate your updo with our premium collection of hair extensions, featuring signature wrap-around ponytails and trendy braid ponytails. Designed for dramatic length and incredible thickness, these styles instantly upgrade thin or short hair into a voluminous masterpiece.",
        "Our innovative attachment systems include the ultra-secure claw clip-in ponytail, the discreet flat clip ponytail, and the lightweight mini claw clip-in ponytail. Each mechanism is engineered to conceal your natural hair tie, leaving you with a flawless, sleek finish."
      ]
    },
    why: {
      title: "Why Choose Our Ponytails?",
      desc: "Instantly upgrade your style with our versatile range of ponytail hair extensions.",
      points: [
        { title: "5 Unique Styles", desc: "Explore wrap-around ponytails, claw clip-in ponytails, flat clip ponytails, braid ponytails, and mini claw clip-in ponytails." },
        { title: "Flawless Integration", desc: "Our flat clip ponytails and signature wrap-around ponytails offer an invisible, natural-looking finish." },
        { title: "Incredibly Secure Hold", desc: "The claw clip-in ponytail and mini claw clip-in ponytail systems ensure a powerful, non-slip grip all day long." }
      ]
    },
    gallery: {
      desc: "See the dramatic length and stunning fullness of our luxury Ponytail extensions.",
      images: [
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/ponytail_internal_page_webp_1.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/ponytail_internal_page_webp_2.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/ponytail_internal_page_webp_3.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/ponytail_internal_page_webp_4.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/ponytail_internal_page_webp_5.webp"
      ]
    },
    signature: {
      title: "Ponytail Extensions",
      features: [
        { name: "Lengths Available", value: "16 inch to 26 inch" },
        { name: "Attachment", value: "Comb + Velcro Wrap-Around" },
        { name: "Installation Time", value: "Under 5 minutes" },
        { name: "Best For", value: "High ponies, low sleek ponies, instant length" }
      ]
    }
  };

  return <ServiceDetailLayout data={data} />;
};

export default Ponytail;
