import React from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout/ServiceDetailLayout';

const SeamlessClipIns = () => {
  const data = {
    hero: {
      title: "The Art of<br/><span class=\"difference-text-grey\" style=\"white-space: nowrap; font-size: 63px;\">Seamless Clip-Ins</span>",
      desc: "The next generation of temporary extensions, featuring an ultra-flat silicone weft base.",
      video: "https://res.cloudinary.com/r0vgotvj/video/upload/v1/seamless_clip_in_video_internal_page.mp4",
      imageAlt: "Seamless Clip-In Hair Extensions"
    },
    anatomy: {
      image: "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Seamless_Clip_ins_internal_page_webp.webp",
      cardTitle: "Silicone Weft Band",
      cardDesc: "50% thinner than traditional lace wefts for a completely undetectable finish.",
      title: "The Anatomy of<br/>Seamless Clip-Ins",
      paragraphs: [
        "Traditional clip-ins use a stitched lace fabric at the base, which can sometimes be bulky. Our Seamless Clip-Ins utilize advanced technology where the hair is fused into a thin, flexible silicone band instead.",
        "This innovation results in a weft that is up to 50% thinner than traditional methods. It lies perfectly flush against the scalp, making it virtually impossible to detect, even in thin or fine hair."
      ]
    },
    why: {
      title: "Why Choose Seamless?",
      desc: "The absolute best choice for a natural look and unmatched comfort.",
      points: [
        { title: "Ultra-Thin Base", desc: "The silicone band prevents bulkiness at the root, ensuring a smooth silhouette." },
        { title: "No Shedding", desc: "The fusion technology tightly binds every strand, significantly reducing shedding compared to sewn wefts." },
        { title: "Supreme Comfort", desc: "The flexible base contours perfectly to the shape of your head." }
      ]
    },
    gallery: {
      desc: "Experience the ultra-flat, invisible integration of our top-tier Seamless Clip-In hair extensions.",
      images: [
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Seamless_Clip_ins_internal_page_webp_1.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1788951907/Seamless_clipins_streak_vishnu_priya_new_2_webp.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Seamless_Clip_ins_internal_page_webp_3.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Seamless_Clip_ins_internal_page_webp_4.webp",
        "https://res.cloudinary.com/r0vgotvj/image/upload/v1/Seamless_Clip_ins_internal_page_webp_5.webp"
      ]
    },
    signature: {
      title: "Seamless Clip-Ins",
      features: [
        { name: "Base Material", value: "Ultra-Thin Silicone Band" },
        { name: "Thickness", value: "50% thinner than traditional wefts" },
        { name: "Attachment", value: "Silicone-Backed Metal Clips" },
        { name: "Best For", value: "Fine/thin hair, maximum discretion" }
      ]
    }
  };

  return <ServiceDetailLayout data={data} />;
};

export default SeamlessClipIns;
