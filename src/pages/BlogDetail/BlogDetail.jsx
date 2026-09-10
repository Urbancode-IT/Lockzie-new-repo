import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './BlogDetail.css';

/* ═══════════════════════════════════════════════
   BLOG DATA Unique content, quote & tips per blog
   ═══════════════════════════════════════════════ */
const allBlogs = {
  '1': {
    title: 'The Ultimate Guide to Choosing the Right Hair Extensions for Your Hair Type',
    date: 'July 1, 2026',
    category: 'Extension Guide',
    readTime: '8 min read',
    image: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/blogs_ultimate_img_1_webp.webp',
    pullQuote: {
      text: '"The right extensions don\'t just add hair.',
      italic: 'They add confidence, identity, and possibility."',
      author: 'The Lockzie Collective',
    },
    sideTips: [
      'Choose the method that suits your lifestyle, not just your hair type.',
      'Consult a certified stylist before selecting your extension type.',
      'Fine hair benefits most from tape ins or nano rings.',
      'Never choose extensions based on price alone quality matters.',
      'Ask to see a before/after portfolio before booking any service.',
    ],
    content: `
      <p>Finding the perfect hair extensions can feel overwhelming, but with the right guidance it becomes one of the most exciting beauty decisions you'll ever make. Whether you have fine, wispy strands or thick, coarse locks, there is an extension type that was made for your unique hair and at Lockzie, we're dedicated to finding it for you.</p>
      <h3>Understanding Your Hair Texture First</h3>
      <p>Before anything else, you need to truly understand what your hair is made of. Fine hair often benefits from lightweight methods like tape ins or nano rings, which lie flat against the scalp and cause minimal tension. These are barely detectable and feel completely comfortable throughout the day. For those with thicker, denser hair, hand-tied wefts or K tip keratin bonds provide the necessary grip and volume without looking stringy or sparse.</p>
      <p>Your hair's natural texture also dictates which extension textures will blend best. Straight silky hair pairs beautifully with Russian or Eastern European hair, while curlier textures work best with Brazilian or Peruvian extensions that have a naturally more porous, textured surface.</p>
      <h3>Length vs. Volume What Are You Really After?</h3>
      <p>This is the question our stylists ask every single client at their consultation. Are you trying to add dramatic length, or do you simply want your existing hair to look thicker and more voluminous? The answer completely changes your treatment plan. For pure volume, a few well-placed wefts around the crown and occipital area can create an astonishing transformation without adding a single inch of length.</p>
      <p>Sometimes the most stunning results come from combining both goals a moderate length extension to the collarbone paired with volume-boosting wefts at the root creates the most natural, lifestyle-appropriate result possible.</p>
      <h3>Maintenance and Lifestyle Considerations</h3>
      <p>Your daily routine is one of the most important factors in choosing your method. Active clients who exercise daily, swim, or sweat heavily will do best with bonded extensions that can handle more contact with water and friction. Think also about the time you're willing to invest in maintenance. tape ins need repositioning every 6–8 weeks. Keratin bonds last up to 4–6 months with proper care. Clip-ins though not a permanent option require no professional maintenance at all and are perfect for clients who want to experiment first.</p>
      <h3>The Lockzie Consultation Process</h3>
      <p>Every Lockzie client begins their journey with a thorough, no-pressure consultation. Our stylists analyze your hair density, condition, growth patterns, and lifestyle before making a single recommendation. We may take hair samples, assess your scalp health under magnification, and review your at-home product routine. This level of care is what separates a good result from a transformational one.</p>
      <p>We believe that the best extension result isn't just one that looks beautiful the day of application it's one that still looks and feels incredible six months later. Book your private consultation today and let us build the perfect hair plan around your life.</p>
    `,
  },
  '2': {
    title: 'How to Properly Care for Your Extensions to Maximize Lifespan',
    date: 'July 7, 2026',
    category: 'Care & Maintenance',
    readTime: '7 min read',
    image: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/blogs_properly_care_img_2_webp.webp',
    pullQuote: {
      text: '"Beautiful extensions begin with',
      italic: 'beautiful habits built one day at a time."',
      author: 'Lockzie Style Journal',
    },
    sideTips: [
      'Brush gently from ends to roots, twice daily.',
      'Always use sulfate free, paraben free products.',
      'Never sleep with wet hair extensions.',
      'Apply heat protectant before every styling session.',
      'Book professional maintenance every 6–8 weeks.',
    ],
    content: `
      <p>You've made the investment. Your hair is longer, more voluminous, and more beautiful than ever before. Now comes the part that matters most the maintenance routine that will determine whether your extensions last three months or a full year.</p>
      <h3>The Right Brush is non negotiable</h3>
      <p>Not all brushes are created equal, and using the wrong one on hair extensions can cause irreversible damage. Always use a soft bristle paddle brush, a boar bristle brush, or a specially designed extension brush with flexible pins that bend away from the bond points. Begin detangling at the very ends of the hair, holding the roots firmly between two fingers to prevent any tension on the attachment points. Work your way up slowly, section by section, until the brush passes smoothly from root to tip.</p>
      <p>Never attempt to brush your extensions when they are tangled and dry. Use a light detangling spray first to add slip, then work through knots with your fingers before introducing any brush. This single habit can add months to the lifespan of your extensions.</p>
      <h3>Your Weekly Washing Routine</h3>
      <p>The golden rule with extensions is to wash less frequently than you might naturally want to. Aim for one to two washes per week. Each wash is an opportunity for mechanical stress and product buildup near the bonds, so minimizing frequency extends their life significantly. Always use sulfate free, paraben free, and alcohol free shampoos. When shampooing, work in a downward direction never scrub or circular-motion the scalp. Condition only from mid length to ends, never at the root where bond adhesives sit.</p>
      <h3>Drying and Heat Styling</h3>
      <p>Never, under any circumstances, go to bed with wet extensions. Damp hair left to dry overnight in a bun or ponytail creates tangles that can mat into irreparable knots. After washing, gently squeeze excess water with a microfibre towel never rub. Then blow-dry on a medium heat setting, starting from the root and working downward. For heat styling, always apply a quality heat protectant to dry hair before using any tool. Keep your flat iron or curling wand below 200°C and avoid clamping directly on top of bond points.</p>
      <h3>Sleeping, Swimming, and Exercise</h3>
      <p>A silk scrunchie or ribbon to secure a loose braid or low ponytail before bed dramatically reduces overnight tangling and friction. A silk pillowcase is a worthy investment that further reduces the friction that cotton creates against your extensions. Before swimming, saturate your hair with fresh water hair that is already wet absorbs far less chlorine or salt water, protecting both the extensions and the bonds. Always rinse and condition immediately after leaving the pool or ocean.</p>
      <p>With a consistent routine built around these principles, your Lockzie extensions will remain beautifully soft, shiny, and indistinguishable from your natural hair for many months to come.</p>
    `,
  },
  '3': {
    title: 'Top 5 Trending Extension Styles for the Upcoming Season',
    date: 'July 14, 2026',
    category: 'Trends & Styles',
    readTime: '7 min read',
    image: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/blogs_top_styles_img_3_webp.webp',
    pullQuote: {
      text: '"Trends come and go.',
      italic: 'But the right length is always in style."',
      author: 'Lockzie Creative Direction',
    },
    sideTips: [
      'Save inspiration photos before your appointment.',
      'Ask your stylist which trend suits your face shape.',
      'Curtain bangs frame every face type beautifully.',
      'Mermaid waves look best on extensions 18 inches or longer.',
      'Try a style on clip-ins before committing to a permanent method.',
    ],
    content: `
      <p>Every season, the world of hair evolves and the most exciting transformations are happening on women who have unlocked the freedom that extensions provide. Gone are the days of waiting years for your hair to grow. With the right extension method, you can step into any trend the moment it appears on the runway or your social feed.</p>
      <h3>1. Mermaid Waves Effortless Romance</h3>
      <p>Long, cascading waves that fall past the shoulder blades remain the single most requested style at Lockzie. The appeal is timeless there is something universally romantic and powerful about full, flowing hair that moves with every step. To achieve this at home, wrap sections of dry extensions around a 32mm barrel curling wand, alternating the direction of each curl. Shake them out gently and run your fingers through rather than a brush to maintain separation without frizz. Finish with a light texturizing spray and a shine mist for that editorial glass-hair finish.</p>
      <h3>2. Sleek High Ponytail with Hidden Volume</h3>
      <p>The power ponytail is having a cultural moment, and extensions have made it more achievable than ever for every hair type. Using clip-in or weft extensions to add volume beneath a slicked-back ponytail creates the kind of thick, dramatic ponytail that used to be reserved for celebrities alone. The key is blending: your natural hair forms the surface layer, while extensions are tucked beneath. Our stylists at Lockzie specialize in precision placement that makes this look completely seamless from every angle.</p>
      <h3>3. Lived-In Balayage with Extension Blends</h3>
      <p>The most beautiful hair this season looks like it was kissed by the sun over the course of many summers. hand painted balayage extensions are perfectly suited to this aesthetic our color specialists can custom-paint each extension weft to mirror the exact gradient of your natural balayage, or to create a fresh dimensional look entirely from scratch. The result is hair that looks like it has genuine history and natural movement, never like a product.</p>
      <h3>4. The Undone Bob Volume Without Length</h3>
      <p>The bob is having its most sophisticated moment in a decade, but the modern version is voluminous, textured, and anything but flat. Using hidden volume wefts beneath a blunt-cut bob creates a thickness that is simply impossible to achieve with natural fine hair alone. Paired with a middle part and loose, undone waves created with a flat iron, this look is simultaneously polished and effortless.</p>
      <h3>5. The Long Curtain Bang Look</h3>
      <p>Curtain bangs have transcended trend status and become a modern classic. Adding length extensions behind wispy, face framing curtain bangs creates the ultimate frame for any face shape. Our stylists can advise on the ideal length and wave pattern to complement your unique bone structure and facial features.</p>
    `,
  },
  '4': {
    title: 'Behind the Scenes: Sourcing Our Premium Cuticle Intact Hair',
    date: 'July 20, 2026',
    category: 'Behind the Scenes',
    readTime: '6 min read',
    image: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/blogs_behind_img4_webp.webp',
    pullQuote: {
      text: '"Quality you can feel',
      italic: 'begins with sourcing you can trust."',
      author: 'Lockzie Sourcing Promise',
    },
    sideTips: [
      'Always ask your salon about their hair sourcing process.',
      'Cuticle Intact Remy hair lasts 9–14 months with proper care.',
      'Avoid extensions coated in silicone they degrade quickly.',
      'Ethical sourcing matters for both quality and conscience.',
      'Inspect the weft stitching tight, even stitching signals quality.',
    ],
    content: `
      <p>When clients ask us what makes Lockzie extensions feel so different from anything they've tried before, the answer begins long before any application, any consultation, or even any order is placed. It begins with where and how we source our hair a process we take more seriously than almost anything else in our business.</p>
      <h3>Understanding Cuticle Intact (Remy) Hair</h3>
      <p>The term "Remy" is used widely in the hair industry, but what does it actually mean? True Remy hair is collected in a way that ensures every single strand flows in the same direction, from the root at the top to the tip at the bottom. This is critically important because the hair cuticle the outermost protective layer of each strand remains aligned and intact when all strands flow the same way. When cuticles are aligned, the hair is naturally smooth, tangle free, and possesses a deep, natural luminosity that no synthetic coating can replicate.</p>
      <p>In contrast, non-Remy hair is collected from mixed sources, where strands point in random directions. These mixed cuticle directions cause the hairs to catch on each other constantly, creating friction, tangling, and the rough texture that many people associate with "cheap" extensions. To compensate, manufacturers strip the cuticle completely and coat the hair in silicone a temporary fix that washes away within weeks.</p>
      <h3>Our Ethical Sourcing Process</h3>
      <p>Every bundle in the Lockzie collection is sourced directly from partnered collectors who work exclusively with voluntary donors in regions where hair donation is a traditional and culturally respected practice. Donors are fairly compensated above market rate, and our supplier relationships are reviewed annually to ensure standards are continuously improved. We receive full documentation for every batch including the region of origin, the collection date, and the quality assessment score from our independent grading partner.</p>
      <h3>Our Quality Control Standards</h3>
      <p>When each shipment arrives, our in-house quality team performs a multi-stage review before any bundle enters our inventory. This includes a visual cuticle inspection under magnification, a tensile strength test, a colour consistency assessment, and a tactile evaluation. Only bundles that pass every stage are approved for client use. On average, we reject approximately 15% of every incoming shipment on quality grounds alone.</p>
      <h3>What This Means for Your Investment</h3>
      <p>The difference in your day-to-day experience with Lockzie extensions versus lesser-quality alternatives is tangible and immediate. Our hair feels like your own hair because, at a structural level, it behaves like your own hair. With proper care, a full Lockzie set maintains its premium quality for 9 to 14 months a lifespan that makes the investment far more economical than it might initially appear.</p>
    `,
  },
  '5': {
    title: 'Empowering Women: The Confidence Boost of Long Hair',
    date: 'July 27, 2026',
    category: 'Lifestyle',
    readTime: '5 min read',
    image: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/blogs_empowering_img_5_webp.webp',
    pullQuote: {
      text: '"True beauty is knowing',
      italic: 'the hair you wear is as powerful as you are."',
      author: 'The Lockzie Collective',
    },
    sideTips: [
      'Investing in yourself is never a luxury it is a necessity.',
      'Your hair is a reflection of how you carry yourself.',
      'Great hair days create great confidence habits.',
      'Keep a silk scrunchie with you at all times.',
      'A quality leave-in treatment daily protects your investment.',
    ],
    content: `
      <p>There is something undeniably powerful about a woman who walks into a room knowing her hair is exactly as she wants it to be. Across thousands of appointments and countless transformations, we've seen it happen again and again the subtle but profound shift in how a woman holds herself the moment she catches her reflection and truly loves what she sees.</p>
      <h3>The Psychology of Hair and Identity</h3>
      <p>Hair is deeply tied to identity, self expression, and wellbeing in ways that science is only beginning to fully quantify. Multiple peer-reviewed studies have found significant correlations between hair satisfaction and overall self esteem, particularly in women. Research shows that women who felt positively about their hair reported measurably higher scores in confidence, social engagement, and professional self efficacy. This isn't superficiality it's neuroscience. When we feel good about our appearance, our brains release dopamine, which genuinely improves our mood, motivation, and performance.</p>
      <h3>What Our Clients Tell Us</h3>
      <p>We have had the privilege of sitting with women from every walk of life teachers and CEOs, new mothers and retirees, women recovering from illness and women celebrating life's biggest milestones. What unifies them is not their background or their reason for coming to us. It's the look on their face when we spin the chair around and they see themselves fully for the first time after their transformation. That look never gets old.</p>
      <p>One of our long-standing clients described it like this: "I came in because I wanted longer hair. I left feeling like the version of myself I'd always meant to become." That sentence captures something we've observed but never quite articulated that for many women, a hair transformation is a permission slip to step more fully into the life they want to live.</p>
      <h3>Self-Investment is Not Vanity</h3>
      <p>We live in a culture that sometimes teaches women to feel guilty for investing in their appearance. We'd like to gently push back on that. Choosing to enhance how you feel about yourself whether through a fitness routine, a skincare regimen, a wardrobe refresh, or a set of extensions is an act of self respect. It signals to yourself and to the world that you believe your comfort, your confidence, and your happiness matter.</p>
      <p>At Lockzie, we don't just apply extensions. We collaborate with women in their ongoing journey of self expression. Every client who sits in our chair is worthy of feeling extraordinary, and we take that responsibility seriously. Come as you are. Leave as who you're meant to be.</p>
    `,
  },
  '6': {
    title: 'Hair Extension Do\'s and Don\'ts: Expert Maintenance Advice',
    date: 'August 1, 2026',
    category: 'Expert Advice',
    readTime: '8 min read',
    image: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Blogs_page_card_6_hero_section_image_webp.webp',
    heroImage: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Blogs_page_card_8_internal_page_hero_section_image_webp.webp',
    pullQuote: {
      text: '"The secret to flawless extensions isn\'t just application.',
      italic: 'It\'s what you do when you leave the salon."',
      author: 'Vishnu Priya, Founder',
    },
    sideTips: [
      'Always use a specialized extension loop brush.',
      'Never sleep with wet hair to prevent matting.',
      'Avoid oil based products near the extension bonds.',
      'Schedule maintenance appointments every 6 to 8 weeks.',
      'Always tie hair in a loose braid before bed.',
    ],
    content: `
      <p>Investing in luxury hair extensions is an exciting transformation, but without proper aftercare, even the most premium Cuticle Intact hair can face challenges. Lockzie Founder Vishnu Priya breaks down the essential Do's and Don'ts of hair extension maintenance, addressing why clients often raise complaints and exactly how to avoid these situations entirely.</p>
      
      <div class="bd-video-showcase">
        <div class="bd-video-showcase-text">
          <h4 class="bd-hook-title">Mastering Your Extension Investment</h4>
          <p class="bd-hook-subtitle">Discover the insider secrets to maintaining flawless, tangle free hair extensions. Watch Founder Vishnu Priya share the definitive Do's and Don'ts for long lasting, premium quality perfection.</p>
          <p class="bd-hook-subtitle" style="margin-top: 15px;">Learn exactly how to properly brush, wash, and sleep with your luxury extensions to prevent slipping and matting, ensuring they look completely seamless and natural month after month.</p>
          <p class="bd-hook-subtitle" style="margin-top: 15px;">By following these professional maintenance routines, you can maximize the lifespan of your Cuticle Intact human hair extensions. Avoiding common mistakes is the true secret to keeping your hair radiant and healthy.</p>
        </div>
        <div class="bd-video-showcase-media">
          <video src="https://res.cloudinary.com/r0vgotvj/video/upload/v1789042378/Lockzie_insta_Do_s_and_Don_ts_1.mp4" controls playsinline preload="metadata" class="bd-inline-video"></video>
        </div>
      </div>

      <h3>Why Do Hair Extension Complaints Happen?</h3>
      <p>The most common complaints we hear ranging from premature slipping to tangling and matting are rarely caused by the hair quality itself. Instead, they almost always trace back to home care routines. tape ins and keratin bonds are designed to be durable, but when exposed to the wrong products or excessive tension, their lifespan decreases dramatically. By following professional maintenance guidelines, you can ensure your extensions remain seamless, comfortable, and beautiful for months.</p>

      <h3>The Essential Do's of Extension Care</h3>
      <p><strong>Do Brush Correctly:</strong> Always use an extension safe brush. Start detangling from the ends and slowly work your way up to the roots, holding the base of the extensions to prevent pulling on your natural hair.</p>
      <p><strong>Do Use sulfate free Products:</strong> Sulfates and parabens strip moisture and weaken bonds. Only use salon-recommended, extension safe shampoos and conditioners, keeping conditioner strictly to the mid lengths and ends.</p>
      <p><strong>Do Sleep Smart:</strong> Friction is the enemy of hair extensions. Before bed, loosely braid your hair and sleep on a silk pillowcase to prevent overnight matting and tangling.</p>

      <h3>The Critical Don'ts to Avoid</h3>
      <p><strong>Don't Sleep With Wet Hair:</strong> This is the number one cause of severe matting and mold development at the bond site. Always ensure your roots and bonds are 100% dry before going to sleep.</p>
      <p><strong>Don't Apply Oils to the Roots:</strong> Heavy serums and oils will break down the adhesive in tape ins and the keratin in K tips, causing them to slip out prematurely. Keep all oils concentrated on the ends.</p>
      <p><strong>Don't Skip Maintenance:</strong> As your natural hair grows, the extensions move further down the hair shaft, increasing tension. Never push your maintenance appointments past the recommended 6 to 8 weeks.</p>
      
      <p>By integrating these straightforward Do's and Don'ts into your daily routine, you empower yourself to protect your investment. Beautiful hair doesn't stop at the salon door it continues with the care you provide at home.</p>
    `,
  },
  '7': {
    title: 'Hair Toppers: The Ultimate Solution for Thinning Hair and Seamless Volume',
    date: 'August 3, 2026',
    category: 'Hair Health & Solutions',
    readTime: '7 min read',
    image: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1788951864/Silk_base_topper_vishnu_priya_new_3_webp.webp',
    heroImage: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1788951866/Silk_base_topper_vishnu_priya_new_6_webp.webp',
    pullQuote: {
      text: '"A premium hair topper doesn\'t just restore your hair.',
      italic: 'It restores your confidence, empowering you to face the world beautifully."',
      author: 'Lockzie Hair Solutions',
    },
    sideTips: [
      'Measure the area of hair loss accurately before choosing a base size.',
      'Silk base toppers offer the most realistic, undetectable scalp appearance.',
      'Always use sulfate-free products to wash your human hair topper.',
      'Gently brush from the ends upwards to prevent shedding and tangling.',
      'Store your topper on a canvas block head to preserve its style and shape.',
    ],
    content: `
      <p>For women experiencing hair thinning, hair loss, or simply looking for unmatched volume at the crown, premium hair toppers offer a transformative, non-invasive solution. Unlike full wigs or traditional extensions that add length at the bottom, human hair toppers are specifically designed to conceal hair loss at the parting and crown, instantly restoring confidence with a seamless, natural look.</p>
      <h3>What is a Hair Topper?</h3>
      <p>A hair topper, often referred to as a "half wig" or "crown extension," is a hairpiece designed to clip securely onto your existing hair. They come in various base types, with silk base hair toppers being the most sought-after due to their incredibly realistic scalp appearance. When crafted from premium, cuticle-intact Remy human hair, a topper blends invisibly with your natural locks, allowing you to part, style, and wash it just like your own hair.</p>
      <h3>Who Can Benefit from Hair Toppers?</h3>
      <p>Hair toppers are the ideal choice for individuals experiencing varying degrees of hair thinning, alopecia, or female pattern baldness. They are also highly popular among those who have a healthy head of hair but desire extra density and volume at the top. Whether you are dealing with a widening part or thinning near the temples, a custom-fitted hair topper provides immediate, undetectable coverage.</p>
      <h3>Silk Base vs. Lace Base Toppers</h3>
      <p>The construction of the base determines how natural the topper looks against your scalp. A <strong>silk base topper</strong> features a layer of silk fabric that hides the knots where the hair is tied, creating the illusion of hair growing directly from your own scalp. This provides the most realistic parting possible. Lace base toppers are more breathable and lightweight but may require a bit of makeup to completely hide the knots. For the ultimate luxury and realism, silk base human hair toppers are the gold standard.</p>
      <h3>How to Choose the Right Hair Topper</h3>
      <p>Selecting the perfect hair topper involves three crucial steps: determining the base size, matching the color, and selecting the right length. You must measure the area of hair loss to ensure the topper's base is large enough to clip into healthy, sturdy hair. For color, multi-dimensional blending is essential. At Lockzie, our experts carefully match your natural hair's base tone, highlights, and lowlights, ensuring your topper looks completely authentic.</p>
      <h3>Maintaining Your Premium Hair Topper</h3>
      <p>Because hair toppers do not receive natural oils from your scalp, hydration is key. Wash your human hair topper every 2 to 4 weeks using sulfate-free shampoos and ultra-hydrating conditioners. When not in use, store it on a mannequin head to maintain its shape. With proper care and gentle brushing, a high-quality Lockzie hair topper can last well over a year, providing daily confidence and flawless style.</p>
    `,
  },
  '8': {
    title: 'Handling Complaints & Maintenance: Expert Advice from Lockzie Founder',
    date: 'August 7, 2026',
    category: 'Expert Advice',
    readTime: '7 min read',
    image: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Blogs_page_card_8_image_webp.webp',
    heroImage: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Blogs_page_card_8_internal_page_hero_section_image_webp.webp',
    pullQuote: {
      text: '"The key to flawless extensions isn\'t just application ',
      italic: 'it\'s the maintenance and care that follows."',
      author: 'Vishnu Priya, Founder',
    },
    sideTips: [
      'Brush gently from roots to ends with an extension safe brush.',
      'Never sleep with wet hair extensions to prevent matting.',
      'sulfate free shampoo is essential for bond longevity.',
      'Tie hair in a loose braid before bed to avoid tangles.',
      'If slipping occurs, consult your stylist immediately.',
    ],
    content: `
      <p>When investing in luxury hair extensions, education is just as important as the installation. Lockzie Founder Vishnu Priya addresses the most common complaints clients have after getting hair extensions ranging from tangling and matting to slipping and discomfort and reveals exactly how to prevent them through proper daily maintenance.</p>
      
      <div class="bd-video-showcase">
        <div class="bd-video-showcase-text">
          <h4 class="bd-hook-title">Expert Solutions to Extension Complaints</h4>
          <p class="bd-hook-subtitle">Listen to Founder Vishnu Priya address the most frequent hair extension complaints and discover exactly how to resolve them. Learn the vital maintenance secrets for keeping your extensions flawless.</p>
          <p class="bd-hook-subtitle" style="margin-top: 15px;">Discover professional techniques for resolving tangling, matting, and slipping tape ins or K tips, ensuring your luxury hair extensions stay seamless and comfortable.</p>
          <p class="bd-hook-subtitle" style="margin-top: 15px;">By implementing these expert aftercare strategies, you can prevent common extension issues entirely and maximize the lifespan of your Cuticle Intact premium human hair.</p>
        </div>
        <div class="bd-video-showcase-media">
          <video src="https://res.cloudinary.com/r0vgotvj/video/upload/v1/Lockzie_insta_Complaints_maintanance.mp4" controls playsinline preload="metadata" class="bd-inline-video"></video>
        </div>
      </div>

      <h3>Understanding the Root of Extension Complaints</h3>
      <p>Most hair extension issues stem from a lack of aftercare rather than the extensions themselves. Slipping tape ins or keratin bonds often occur when clients use heavy, oil based products near the roots. Tangling and matting are typically the result of sleeping with wet hair or failing to brush the extensions correctly. By understanding these triggers, clients can entirely avoid the frustration and protect their investment.</p>
      <h3>The Essential Daily Maintenance Routine</h3>
      <p>According to Vishnu Priya, a seamless extension experience requires a few non negotiable daily habits. First, always use a specialized extension brush that glides over the bonds without pulling. Brush your hair at least twice a day, starting from the ends and gently working your way up to the roots while supporting the hair at the base. Second, hydration is key apply a lightweight serum to the mid lengths and ends to keep the extensions soft and vibrant, ensuring they never dry out or become brittle.</p>
      <h3>Washing and Sleeping with Extensions</h3>
      <p>Washing your extensions correctly is crucial for their lifespan. Always use sulfate free and paraben free shampoos, washing in a downward motion to prevent tangling. Never scrub the scalp vigorously. When it's time for bed, the golden rule is simple: never go to sleep with wet hair. Dry your hair completely and secure it in a loose, low braid or ponytail using a silk scrunchie. A silk pillowcase will also drastically reduce friction and overnight tangling.</p>
      <h3>When to Seek Professional Help</h3>
      <p>Even with perfect maintenance, extensions require professional upkeep. As your natural hair grows, the extension bonds will move further from the scalp, which can cause tension or twisting. This is entirely normal, but it means you must adhere to a strict 6 to 8 week maintenance schedule. If you experience unexpected discomfort, excessive shedding, or slipping before your scheduled move-up, contact your stylist immediately. Proactive care ensures your hair remains healthy, comfortable, and beautifully blended.</p>
    `,
  },
  '9': {
    title: 'The Impact of Innovative Color Matching Techniques',
    date: 'August 9, 2026',
    category: 'Color & Style',
    readTime: '6 min read',
    image: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/blog_innovative_color_img_9_webp.webp',
    pullQuote: {
      text: '"The right colour doesn\'t just match your hair.',
      italic: 'It elevates your entire presence in every room you enter."',
      author: 'Lockzie Colour Philosophy',
    },
    sideTips: [
      'Colour match under natural daylight for the most accurate result.',
      'Request a custom toning session for a perfect blend.',
      'Extensions can be refreshed with a gloss treatment between services.',
      'Avoid box dye on extensions always seek professional colour.',
      'Balayage extensions look most natural when hand painted.',
    ],
    content: `
      <p>Of every variable that determines whether a hair extension result looks genuinely natural or obviously artificial, colour is the most powerful. It overrides placement, it overrides quality, and it overrides technique. Even the most perfectly applied set of premium extensions will look out of place if the colour tone is even slightly off.</p>
      <h3>The Problem With One-Dimensional Matching</h3>
      <p>Most salons match extension colour the way a paint store matches paint: you bring in a chip, they find the closest option in their swatch book, done. This approach fails because hair unlike paint is multi dimensional. Your natural hair contains a dominant base tone, multiple secondary tones across different sections, highlight and lowlight variations created by sun exposure or previous colouring, and underlying warm or cool pigments that shift dramatically depending on the light source.</p>
      <p>The result is extensions that look fine in one lighting condition but mismatched in another indoors under warm lighting they look beautiful, but step outside into daylight and they're visibly different. This is one of the most common complaints we hear from clients who've had extensions done elsewhere.</p>
      <h3>The Lockzie multi dimensional Assessment</h3>
      <p>Our colour matching protocol uses three separate light sources: natural daylight at a north-facing window (which reveals true, unbiased colour), warm incandescent light (which mimics indoor dining, home, and office environments), and cool LED overhead light (which mirrors commercial spaces, photography, and video). We assess the client's hair under each source before selecting a primary extension base, secondary blending tones, and any highlight or lowlight additions needed to create a genuinely harmonious blend.</p>
      <h3>Custom Colouring: The Final Refinement</h3>
      <p>When the perfect match doesn't exist off the shelf, our colour specialists custom-tone or hand-paint the extension wefts before application. This is a process that requires both technical colour knowledge and an artistic eye, and it's one of the services that most reliably produces results that clients describe as "I literally can't tell where my hair ends and the extensions begin."</p>
      <h3>Seasonal Colour Maintenance</h3>
      <p>Colour harmony isn't a one-time achievement it requires ongoing attention because your natural hair changes. Sun exposure lightens it in summer. Colour services shift the tone throughout the year. Extensions can subtly change in tone through heat styling and product exposure. Our stylists factor in seasonal maintenance at every follow-up appointment, toning or refreshing extensions as needed to ensure the blend remains seamless year-round.</p>
    `,
  },
  '10': {
    title: 'Healthy Hair Habits for a Busy Lifestyle with Extensions',
    date: 'August 11, 2026',
    category: 'Hair Health',
    readTime: '7 min read',
    image: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/blog_healthy_hair_img_10_webp.webp',
    pullQuote: {
      text: '"The best extension routine',
      italic: 'is the one you\'ll actually do every single day."',
      author: 'Lockzie Wellness Guide',
    },
    sideTips: [
      'Biotin and vitamin D support stronger natural hair roots.',
      'Hydrate well daily water intake affects hair elasticity.',
      'Apply a nourishing mask to extension lengths every week.',
      'Your scalp health determines how long extensions last.',
      'Omega-3 supplements noticeably improve hair texture over time.',
    ],
    content: `
      <p>Modern life is relentless. Between the demands of work, family, social commitments, and everything else that fills your days, it can feel impossible to maintain a dedicated hair care routine. And yet, the clients who take the best care of their extensions are very often the ones with the busiest lives because they've learned to integrate great habits efficiently, rather than treating hair care as a separate, time-consuming task.</p>
      <h3>The 5-Minute Morning non negotiable</h3>
      <p>Before anything else in the morning, brush your extensions. Starting with a quality extension safe brush at the ends and working up to the roots while holding the root area gently between two fingers takes less than five minutes and prevents the kind of compounding tangle that becomes an hour-long problem. Apply two to three pumps of a lightweight, oil free serum or smoothing milk to the mid lengths and ends. This replaces the moisture that extensions lose overnight and creates a protective layer around each strand for the day ahead.</p>
      <h3>Intelligent Heat Styling</h3>
      <p>Extensions can absolutely be heat-styled this is one of their greatest advantages but with a few important caveats. Always start with completely dry hair. Applying heat to even slightly damp extensions causes the internal protein structure to swell and then contract unevenly, which gradually degrades the extension's texture and integrity over time. Apply your heat protectant spray generously, from roots to ends, before reaching for any tool. Keep your temperature at or below 185°C for fine extensions and below 200°C for standard thickness.</p>
      <h3>Nutrition, Hydration, and Scalp Health</h3>
      <p>Your extensions are anchored to your natural hair, which means the health of your natural hair directly determines how well your extensions perform and how long they last. Biotin, found in eggs, nuts, and avocado, is the most well-known nutrient for hair strength. Vitamins D and E support the scalp environment, while omega-3 fatty acids maintain the lipid layer of both the scalp and the hair shaft. Adequate hydration aiming for 2 litres of water daily makes a measurable difference in hair elasticity and tensile strength.</p>
      <h3>Scheduling Maintenance Before You Need It</h3>
      <p>The single most effective habit a busy client can develop is booking their next maintenance appointment before they leave their current one. Extensions that are overdue for maintenance begin to experience compounding issues tangle build-up at the grow-out area, stress on the natural hair at the root, and bond loosening that accelerates if left unaddressed. Proactive maintenance is always faster, less expensive, and more effective than reactive repair. Small, consistent habits compound into results that look and feel extraordinary every single day.</p>
    `,
  },
  '11': {
    title: 'The Ultimate Maintenance Routine for Seamless tape in Extensions',
    date: 'August 13, 2026',
    category: 'Maintenance',
    readTime: '6 min read',
    image: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/blog_tape_in_img_11_webp.webp',
    pullQuote: {
      text: '"Longevity isn\'t just about the hair quality;',
      italic: 'it\'s about the daily habits that protect your investment."',
      author: 'Lockzie Care Guide',
    },
    sideTips: [
      'Never apply conditioner near the tape bonds.',
      'Use a silk pillowcase to reduce overnight friction.',
      'Brush multiple times a day from ends to roots.',
      'Schedule maintenance appointments every 6 to 8 weeks.',
      'Avoid high-heat styling directly over the tape panels.',
    ],
    content: `
      <p>tape in hair extensions have revolutionized the luxury salon experience, offering seamless blending, lightweight comfort, and incredibly natural volume. However, the secret to keeping your premium tape in extensions looking flawless month after month isn't just about the initial installation it's about the maintenance routine you follow at home.</p>
      <h3>Protecting the Tape Bonds</h3>
      <p>The foundation of tape in extension longevity lies in protecting the adhesive panels. The cardinal rule of tape in maintenance is to keep all oils, conditioners, and heavy styling products strictly away from the root area. When washing, apply a sulfate free shampoo directly to your scalp, but when it's time for conditioner, focus only on the mid lengths and ends. oil based products break down the medical-grade adhesive, causing premature slipping and reducing the lifespan of your extensions.</p>
      <h3>Mastering the Wash Schedule</h3>
      <p>Washing your hair extensions too frequently can strip the hair of its added moisture, while washing too infrequently can lead to natural scalp oils breaking down the tape. We recommend washing your tape in extensions 1-2 times per week. Always use lukewarm water, as extremely hot water can soften the bonds. After washing, ensure the tape panels are completely dry before you go to bed; leaving the bonds damp overnight can cause the adhesive to lose its strength.</p>
      <h3>The Art of Brushing and Detangling</h3>
      <p>Consistent, careful brushing is your best defense against tangles and matting. Invest in a high-quality extension brush featuring soft, flexible bristles designed to glide over tape panels without catching. Brush your hair 2-3 times daily, starting from the ends and gently working your way up to the roots. Always hold the hair securely at the base to prevent any tension on the tape in bonds.</p>
      <h3>Professional Maintenance is Key</h3>
      <p>Even with a perfect at-home routine, natural hair growth means your tape in extensions will need professional maintenance. As your natural hair grows, the tape panels move further away from the scalp, increasing the risk of twisting and tension. To maintain optimal hair health and a seamless blend, book a professional re-tape and move-up appointment every 6 to 8 weeks. At Lockzie, our stylists ensure the safest removal and re-application, preserving the integrity of both your natural hair and your luxury extensions.</p>
    `,
  },
  '12': {
    title: 'Why Human Hair Extensions Outperform Synthetic Alternatives',
    date: 'August 15, 2026',
    category: 'Education',
    readTime: '8 min read',
    image: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/blog_why_human_hair_img_12_webp.webp',
    pullQuote: {
      text: '"True luxury lies in hair that moves,',
      italic: 'feels, and styles exactly like your own."',
      author: 'Lockzie Educational Series',
    },
    sideTips: [
      'Human hair can be heat-styled safely at standard temperatures.',
      'Synthetic hair tangles irreparably and lacks natural flow.',
      'Remy human hair retains its cuticle for a natural, luminous shine.',
      'Custom color blending is only possible with human hair extensions.',
      'Investing in human hair is more cost effective in the long run.',
    ],
    content: `
      <p>When diving into the world of hair extensions, the most critical decision you will make is choosing between human hair and synthetic options. While synthetic extensions might seem appealing for a quick, one off event, anyone looking for a long term, natural-looking transformation will quickly discover that 100% Remy human hair extensions are in a league of their own. Here is why luxury salons exclusively trust human hair to deliver seamless, breathtaking results.</p>
      <h3>Unmatched Realism and Texture</h3>
      <p>The primary advantage of human hair extensions is their unparalleled realism. High-quality Remy human hair retains its natural cuticle layer, with all cuticles running in the same downward direction. This structural integrity means the extensions reflect light, bounce, and move exactly like your own hair. Synthetic fibers, on the other hand, often possess an unnatural, plastic-like sheen that gives away the secret instantly, especially under direct sunlight or flash photography.</p>
      <h3>Styling Versatility and Heat Resistance</h3>
      <p>One of the greatest joys of wearing extensions is the ability to change your look daily. With 100% human hair extensions, you have complete styling freedom. You can blow-dry, curl, straighten, and crimp them using your favorite hot tools. Synthetic extensions are highly sensitive to heat and will melt or permanently deform if exposed to curling irons or straighteners. While some "heat friendly" synthetics exist, they are notoriously difficult to style and rarely hold a curl as beautifully as natural human hair.</p>
      <h3>Custom Color Blending and Toning</h3>
      <p>Achieving a seamless extension blend requires precise color matching. Human hair extensions can be custom-toned, darkened, or highlighted by a professional stylist to perfectly match your natural hair's multi dimensional tones. Synthetic hair cannot be chemically altered or dyed. If a synthetic shade isn't a 100% perfect match off the shelf, it will forever look disconnected from your natural hair.</p>
      <h3>Longevity and long term Value</h3>
      <p>While synthetic extensions have a lower upfront price, their lifespan is drastically shorter. Synthetic fibers tangle easily, permanently frizz at the ends, and generally last only a few weeks of daily wear before needing replacement. Premium Remy human hair extensions, when cared for properly, can last anywhere from 9 to 14 months. This durability makes human hair a far more cost effective investment, providing you with beautiful, consistent results year-round without the constant need for replacement.</p>
      <p>At Lockzie, we are committed to providing only the highest grade of Cuticle Intact human hair, ensuring that your extensions are an empowering, seamless extension of yourself.</p>
    `,
  },
  '13': {
    title: 'A Client Story: Regaining Confidence with Lockzie Extensions',
    date: 'August 17, 2026',
    category: 'Client Story',
    readTime: '5 min read',
    image: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/blog_client_story_img_13_webp.webp',
    pullQuote: {
      text: '"The reflection I saw in the mirror finally',
      italic: 'matched the person I felt like on the inside."',
      author: 'Sarah, Lockzie Client',
    },
    sideTips: [
      'Confidence is the best accessory you can wear.',
      'A thorough consultation ensures the perfect match.',
      'Hair loss doesn’t have to define your self-image.',
      'Extensions can be blended seamlessly for a natural look.',
      'Investing in yourself pays dividends every day.',
    ],
    content: `
      <p>For many women, hair is inextricably linked to their sense of self. When Sarah walked into our salon last month, she shared a story we hear all too often: years of stress and hormonal changes had left her once-thick hair feeling fine, brittle, and lifeless. She told us she had stopped taking photos with her children and avoided social gatherings because she felt self conscious.</p>
      <h3>The Consultation</h3>
      <p>Our first step was a comprehensive consultation. We didn't just look at Sarah's hair; we listened to her lifestyle needs, her styling abilities, and her ultimate hair goals. We decided that a combination of our premium, Cuticle Intact seamless tape in extensions would provide the volume she desperately craved without putting unnecessary tension on her fragile natural hair.</p>
      <h3>The Transformation Process</h3>
      <p>Using our custom color-matching technique, we blended three distinct shades of our luxury extensions to perfectly mimic the natural highlights and lowlights in Sarah's hair. The application process took just under two hours. Because our tape panels lay completely flat against the scalp, the extensions were virtually undetectable from the moment they were applied.</p>
      <h3>The Reveal</h3>
      <p>The moment we spun Sarah's chair around to face the mirror is one our stylists won't soon forget. Tears welled up in her eyes as she ran her hands through her new, voluminous hair. "I haven't looked like this in ten years," she said. It wasn't just about the hair; it was about the immediate, palpable shift in her posture, her smile, and her energy.</p>
      <h3>Life After Lockzie</h3>
      <p>A few weeks later, Sarah sent us a message. She had just attended a family wedding, and for the first time in years, she felt excited to be in the photos. Her morning routine was actually faster because her new hair held styles so beautifully. At Lockzie, this is why we do what we do. We aren't just applying extensions; we are helping women reclaim their confidence and step fully into their own power.</p>
    `,
  },
};

/* ── Scroll Reveal Hook ─────────────────────── */
function useScrollReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('revealed'); observer.disconnect(); } },
      { threshold: 0.10 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const Reveal = ({ children, className = '', delay = 0 }) => {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className={`reveal-block ${className}`} style={{ '--delay': `${delay}ms` }}>
      {children}
    </div>
  );
};

/* ══════════════════════════════════════════════
   Nav scroll helper navigates home then polls
   every 100ms until the element exists, then
   scrolls with a 63px navbar offset.
   ══════════════════════════════════════════════ */
const useHomeScroll = () => {
  const navigate = useNavigate();

  return (sectionId) => {
    navigate('/');
    // Poll for the element every 100ms (up to 2s) to handle async render
    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      const el = document.getElementById(sectionId) || document.querySelector(`.${sectionId}`);
      if (el) {
        clearInterval(interval);
        el.scrollIntoView({ behavior: 'smooth' });
      }
      if (attempts >= 20) clearInterval(interval); // give up after 2 seconds
    }, 100);
  };
};

/* ── Main Component ─────────────────────────── */
const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const scrollToSection = useHomeScroll();
  const blog = allBlogs[id] || allBlogs['2'];
  const [loaded, setLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [focusMode, setFocusMode] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (!focusMode) {
      setFocusMode(true);
      setIsMuted(false);
      setIsPaused(false);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    } else {
      if (videoRef.current) {
        if (isPaused) {
          videoRef.current.play();
          setIsPaused(false);
        } else {
          videoRef.current.pause();
          setIsPaused(true);
        }
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoaded(false);
    const t = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(t);
  }, [id]);

  return (
    <div className={`bd-page ${loaded ? 'bd-page--loaded' : ''}`}>
      <Navbar forceScrolled={true} />

      {/* ── HERO BANNER ─────────────────────── */}
      <div className="bd-hero">
        {blog.video ? (
          <video 
            ref={videoRef}
            className="bd-hero__bg" 
            src={blog.video} 
            autoPlay 
            loop={!focusMode} 
            muted={isMuted} 
            playsInline 
            onEnded={() => {
              setFocusMode(false);
              setIsPaused(false);
              setIsMuted(true);
              if (videoRef.current) {
                videoRef.current.play();
              }
            }}
            style={{ objectFit: 'cover', objectPosition: 'center 38%' }} 
          />
        ) : (
          <div className="bd-hero__bg" style={{ backgroundImage: `url("${blog.heroImage || blog.image}")` }} />
        )}
        <div className="bd-hero__overlay" />
        
        {/* Invisible overlay to catch clicks for pause/resume when in focus mode */}
        {blog.video && focusMode && (
          <div 
            style={{ position: 'absolute', inset: 0, zIndex: 1, cursor: 'pointer' }} 
            onClick={handlePlayPause}
          />
        )}
        
        <div className="bd-orb bd-orb--1" />
        <div className="bd-orb bd-orb--2" />

        {/* Center Play Button */}
        {blog.video && (!focusMode || isPaused) && (
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 3
          }}>
            <button 
              className={`bd-play-btn ${focusMode && isPaused ? 'bd-play-btn--paused' : ''}`}
              onClick={handlePlayPause}
            >
              <svg className="bd-play-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              <span className="bd-play-text">
                {focusMode && isPaused ? (
                  <>
                    <span className="bd-paused-label">Paused</span>
                    <span className="bd-resume-label">Resume playing</span>
                  </>
                ) : (
                  'Watch Founder Advice'
                )}
              </span>
            </button>
          </div>
        )}

        <div className="bd-hero__content">
          <div className={`bd-hero__text-group ${focusMode ? 'bd-fade-out' : ''}`}>
            <button className="bd-back" onClick={() => navigate('/blogs')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              Back to Journal
            </button>

            <div className="bd-hero__tags">
              <span className="bd-tag">{blog.category}</span>
              <span className="bd-tag bd-tag--ghost">{blog.readTime}</span>
            </div>

            <h1 className="bd-hero__title">{blog.title}</h1>

            <div className="bd-hero__meta">
              <div className="bd-meta-dot" />
              <span>{blog.date}</span>
              <div className="bd-meta-dot" />
              <span>By Lockzie Editorial</span>
            </div>
          </div>

          {blog.video && (
            <div style={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
              <button 
                className="bd-unmute-btn" 
                onClick={() => setIsMuted(!isMuted)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: '30px',
                padding: '10px 20px',
                borderRadius: '30px',
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#fff',
                fontSize: '14px',
                cursor: 'pointer',
                backdropFilter: 'blur(5px)',
                transition: 'background 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'}
            >
              {isMuted ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <line x1="23" y1="9" x2="17" y2="15"></line>
                  <line x1="17" y1="9" x2="23" y2="15"></line>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                </svg>
              )}
              {isMuted ? 'Unmute Video' : 'Mute Video'}
              </button>
            </div>
          )}
        </div>

        <div className={`bd-scroll-hint ${focusMode ? 'bd-fade-out' : ''}`}>
          <div className="bd-scroll-hint__wheel" />
        </div>
      </div>

      {/* ── ARTICLE BODY ────────────────────── */}
      <div className="bd-body">
        <div className="bd-side-decor" aria-hidden="true"><span>LOCKZIE</span></div>

        <div className="bd-layout">

          {/* ── LEFT: Main Article ─────────── */}
          <main className="bd-main">

            {/* Pull Quote unique per blog */}
            <Reveal delay={0}>
              <div className="bd-pull-quote">
                <div className="bd-pq-lines">
                  <span /><span /><span />
                </div>
                <blockquote className="bd-pq-text">
                  {blog.pullQuote.text}<br />
                  <em>{blog.pullQuote.italic}</em>
                </blockquote>
                <div className="bd-pq-author">
                  <span className="bd-pq-dash"> </span>
                  <span>{blog.pullQuote.author}</span>
                </div>
              </div>
            </Reveal>

            {/* Main blog content */}
            <Reveal delay={80}>
              <div className="bd-content" dangerouslySetInnerHTML={{ __html: blog.content }} />
            </Reveal>

            {/* Divider */}
            <Reveal delay={0}>
              <div className="bd-divider">
                <span />
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="1.5">
                  <path d="M12 2C9 7 4 9 4 14a8 8 0 0016 0c0-5-5-7-8-12z" />
                </svg>
                <span />
              </div>
            </Reveal>

            {/* CTA Banner */}
            <Reveal delay={80}>
              <div className="bd-cta">
                <div className="bd-cta__bg" />
                <div className="bd-cta__body">
                  <div className="bd-cta__left">
                    <p className="bd-cta__sub">READY TO TRANSFORM?</p>
                    <h3 className="bd-cta__title">Your Dream Hair Awaits</h3>
                    <p className="bd-cta__desc">
                      Book a private consultation with our expert stylists and discover the perfect extension solution crafted just for you.
                    </p>
                  </div>
                  <div className="bd-cta__right">
                    <button className="bd-cta__btn" onClick={() => scrollToSection('contact-form-section')}>
                      Book a Consultation
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                    <p className="bd-cta__note">✦ Complimentary first consultation</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </main>

          {/* ── RIGHT: Sidebar ─────────────── */}
          <aside className="bd-sidebar">

            <Reveal delay={150}>
              {/* About Card */}
              <div className="bd-sidebar-card bd-about-card">
                <div className="bd-about-card__img-wrap">
                  <img src="https://res.cloudinary.com/r0vgotvj/image/upload/v1/41af3a4a8deddaec315f8adf4dfabe1bdfc5a644.png" alt="Lockzie" className="bd-about-card__logo" />
                </div>
                <p className="bd-about-card__text">
                  Lockzie is a luxury hair extension salon dedicated to seamless transformations, premium Cuticle Intact hair, and results that last.
                </p>
                <button className="bd-sidebar-link" onClick={() => scrollToSection('story-content-wrapper')}>
                  Discover Our Story →
                </button>
              </div>
            </Reveal>

            <Reveal delay={200}>
              {/* Tips Card unique per blog */}
              <div className="bd-sidebar-card bd-tips-card">
                <h4 className="bd-tips-card__title">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="2">
                    <path d="M12 2C9 7 4 9 4 14a8 8 0 0016 0c0-5-5-7-8-12z" />
                  </svg>
                  Extension Care Tips
                </h4>
                <ul className="bd-tips-list">
                  {blog.sideTips.map((tip, i) => (
                    <li key={i} className="bd-tips-item">
                      <span className="bd-tips-icon">✦</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={250}>
              {/* Book Card */}
              <div className="bd-sidebar-card bd-book-card">
                <div className="bd-book-card__badge">EXPERT HAIR EXTENSIONS</div>
                <h4 className="bd-book-card__title">Transform Your Hair Today</h4>
                <p className="bd-book-card__text">
                  Experience seamless volume and length with premium Cuticle Intact human hair extensions. Book a personalized salon consultation.
                </p>
                <button className="bd-book-card__btn" onClick={() => window.open('https://wa.me/919566662642?text=Hi%20Lockzie%20Hair!%20I%20would%20like%20to%20reserve%20my%20spot%20for%20a%20consultation.', '_blank')}>
                  Reserve My Spot
                </button>
              </div>
            </Reveal>

          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
