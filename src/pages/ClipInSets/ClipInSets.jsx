import React from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout/ServiceDetailLayout';

const ClipInSets = () => {
  const data = {
    hero: {
      title: "The Art of<br/><span class=\"difference-text-grey\" style=\"white-space: nowrap;\">Clip-In Sets</span>",
      desc: "Transform your look in minutes with our luxurious, multi-piece clip-in extension systems.",
      video: "https://res.cloudinary.com/r0vgotvj/video/upload/v1/1_to_7_piece_clipins_internal_page.mp4",
      imageAlt: "Clip-In Sets Hair Extensions"
    },
    anatomy: {
      image: "https://res.cloudinary.com/r0vgotvj/image/upload/v1/1_to_7_piece_clipins_internal_page_webp.webp",
      cardTitle: "Secure Grip Clip",
      cardDesc: "Silicone-backed metal clips ensure a strong, slip-free hold all day.",
      title: "The Anatomy of<br/>Our Clip-In Sets",
      paragraphs: [
        "Our clip-in sets are designed for those who desire the flexibility of temporary extensions without sacrificing quality. Ranging from 1 to 7 pieces, these sets allow you to customize the volume and placement precisely where you need it.",
        "Each weft is securely hand-sewn onto a lightweight lace base, featuring premium, silicone-backed clips that snap tightly onto your natural hair, ensuring they stay perfectly in place from morning until night without causing tension."
      ]
    },
    why: {
      title: "Why Choose Clip-In Sets?",
      desc: "The ultimate flexible solution for temporary, customizable volume.",
      points: [
        { title: "Zero Commitment", desc: "Easily install them yourself for a night out and remove them before bed." },
        { title: "Customizable Volume", desc: "Use a 1-piece volumizer for a quick boost, or the full 7-piece set for mega-volume." },
        { title: "Damage-Free", desc: "Because they are removed daily, there is absolutely no stress on your natural hair overnight." }
      ]
    },
    gallery: {
      desc: "View the versatile, instant volume and length achieved with our premium 1 to 7 piece Clip-In extension sets.",
      images: [
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/1_to_7_piece_clipins_internal_page_1_webp.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/1_to_7_piece_clipins_internal_page_2_webp.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/1_to_7_piece_clipins_internal_page_3_webp.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/1_to_7_piece_clipins_internal_page_4_webp.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/1_to_7_piece_clipins_internal_page_5_webp.webp"
      ]
    },
    signature: {
      title: "Clip-In Extensions",
      features: [
        { name: "Options", value: "1 Piece to 7 Piece Sets" },
        { name: "Attachment", value: "Silicone-Backed Metal Clips" },
        { name: "Lifespan", value: "1+ Years with proper care" },
        { name: "Best For", value: "Temporary volume, special events, beginners" }
      ]
    }
  };

  return <ServiceDetailLayout data={data} />;
};

export default ClipInSets;
