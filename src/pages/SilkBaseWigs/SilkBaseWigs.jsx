import React from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout/ServiceDetailLayout';

const SilkBaseWigs = () => {
  const data = {
    hero: {
      title: "The Art of<br/><span class=\"difference-text-grey\" style=\"white-space: nowrap; font-size: 80px;\">Silk Base Wigs</span>",
      desc: "The ultimate scalp illusion. Flawless realism with our triple-layer silk top technology.",
      video: "https://res.cloudinary.com/r0vgotvj/video/upload/v1/Silkbase_wig_internal_page_video.mp4",
      imageAlt: "Silk Base Wig"
    },
    anatomy: {
      image: "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Silk_base_wigs_webp.webp",
      cardTitle: "Hidden\u00A0Knots",
      cardDesc: "Injected through silk to eliminate visible knots entirely.",
      title: "The Anatomy of<br/>Silk Base Wigs",
      paragraphs: [
        "A Silk Base Wig features a specialized top section made of two or three layers of fine materials, including silk. The hair knots are tied below the silk layer, and the hair is then pulled through the silk.",
        "This ingenious technique completely hides the knots, creating the breathtaking illusion that the hair is growing directly out of a natural human scalp. No bleaching of knots is required, and the part looks incredibly realistic up close."
      ]
    },
    why: {
      title: "Why Choose a Silk Base Wig?",
      desc: "For those who demand the most realistic parting and scalp appearance available.",
      points: [
        { title: "Invisible Knots", desc: "No need for knot bleaching; the silk layer hides them completely." },
        { title: "Incredible Scalp Illusion", desc: "The silk perfectly mimics the appearance and texture of a natural scalp." },
        { title: "High Durability", desc: "The multi-layer construction makes the parting area incredibly strong and long-lasting." }
      ]
    },
    gallery: {
      desc: "Experience the most realistic scalp illusion and supreme comfort of our Silk Base wigs.",
      images: [
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Silk_base_wigs_webp_1.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Silk_base_wigs_webp_2.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Silk_base_wigs_webp_3.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Silk_base_wigs_webp_4.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Silk_base_wigs_webp_5.webp"
      ]
    },
    signature: {
      title: "Silk Base Wigs",
      features: [
        { name: "Construction", value: "Multi-Layer Silk Top / Wefted or Lace Back" },
        { name: "Knot Visibility", value: "Completely Hidden (Zero Knots Visible)" },
        { name: "Parting Realism", value: "Maximum (Looks like real scalp)" },
        { name: "Best For", value: "Defined parting styles, ultimate realism" }
      ]
    }
  };

  return <ServiceDetailLayout data={data} />;
};

export default SilkBaseWigs;
