import React from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout/ServiceDetailLayout';

const MonoBase = () => {
  const data = {
    hero: {
      title: "The Art of<br/><span class=\"difference-text-grey\" style=\"white-space: nowrap; font-size: 63px;\">Mono Base Toppers</span>",
      desc: "Exceptional durability and realistic hair movement for everyday confidence.",
      video: "https://res.cloudinary.com/r0vgotvj/video/upload/v1/Monobase_internal_page_video.mp4",
      imageAlt: "Mono Base Hair Topper"
    },
    anatomy: {
      image: "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Monobase_internal_page_webp.webp",
      cardTitle: "Monofilament\u00A0Mesh",
      cardDesc: "A tightly woven, sheer material that mimics the look of natural scalp.",
      title: "The Anatomy of<br/>Mono Base",
      paragraphs: [
        "Monofilament (Mono) base toppers are constructed using a sheer, finely woven mesh material. Each individual strand of hair is meticulously hand-tied to this material, allowing the hair to pivot in any direction.",
        "This advanced construction provides incredible durability while delivering the illusion of natural hair growth directly from the scalp, making it an excellent choice for those experiencing moderate to severe hair thinning at the crown."
      ]
    },
    why: {
      title: "Why Choose a Mono Base?",
      desc: "The perfect balance of realism, breathability, and long-lasting durability.",
      points: [
        { title: "Multi-Directional Styling", desc: "Because each hair is individually tied, you can part the hair anywhere you like." },
        { title: "Exceptional Durability", desc: "The tightly woven mesh is stronger than lace, offering a longer lifespan for daily wearers." },
        { title: "Breathable Comfort", desc: "The porous material allows heat to escape, keeping your scalp cool throughout the day." }
      ]
    },
    gallery: {
      desc: "View the natural scalp appearance and breathable comfort of our Mono Base hair toppers.",
      images: [
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Monobase_internal_page_webp_1.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Monobase_internal_page_webp_2.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Monobase_internal_page_webp_3.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Monobase_internal_page_webp_4.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1788951906/Mono_base_topper_vishnu_priya_new_1_webp.webp"
      ]
    },
    signature: {
      title: "Mono Base Toppers",
      features: [
        { name: "Construction", value: "Hand-Tied Monofilament Mesh" },
        { name: "Parting", value: "Freestyle / Multi-Directional" },
        { name: "Durability", value: "High (Great for daily wear)" },
        { name: "Best For", value: "Crown thinning, active lifestyles" }
      ]
    }
  };

  return <ServiceDetailLayout data={data} />;
};

export default MonoBase;
