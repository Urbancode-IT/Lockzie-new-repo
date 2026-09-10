import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import FloatingWidgets from '../../components/FloatingWidgets/FloatingWidgets';
import './Gallery.css';

const GallerySliderCard = ({ before, after, beforePos, afterPos, beforeTransform, afterTransform }) => {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="gallery-slider-card">
      <div className="g-slider-container">
        {/* After Image */}
        <img className="g-slider-image g-image-after" src={after} alt="after" decoding="async" style={{ objectPosition: afterPos || 'center', transform: afterTransform || undefined }} />
        
        {/* Before Image (Clipped) */}
        <div className="g-image-before-clip" style={{ width: `${sliderPos}%` }}>
          <img className="g-slider-image g-image-before" src={before} alt="before" decoding="async" style={{ objectPosition: beforePos || 'center', transform: beforeTransform || undefined }} />
        </div>

        {/* Labels */}
        <div className="g-slider-label g-label-before">Before</div>
        <div className="g-slider-label g-label-after">After</div>

        {/* Divider and Handle */}
        <div className="g-slider-divider" style={{ left: `${sliderPos}%` }}>
          <div className="g-slider-handle">⇆</div>
        </div>

        {/* Native Range Input for seamless dragging */}
        <input 
          type="range" 
          min="0" max="100" 
          value={sliderPos} 
          onChange={(e) => setSliderPos(e.target.value)} 
          className="g-slider-input" 
          aria-label="Before and after image comparison slider"
        />
      </div>
    </div>
  );
};

const categories = [
  'Transformations',
  'Permanent Extensions',
  'Clip In Extensions',
  'Toppers',
  'Wigs',
  'Studio'
];

const pagesData = {
  1: [
    { id: 1, before: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_img1_after_webp.webp', after: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_img_1_before_webp.webp', beforeTransform: 'scale(1.05) translateY(10px)' },
    { id: 2, before: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_img2_before_webp.webp', after: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_img_2_after_webp.webp', beforeTransform: 'scale(1.22) translateY(-30px)' },
    { id: 3, before: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_img3_before_webp.webp', after: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_img_3_after_webp.webp', beforeTransform: 'scale(1.15) translateY(-8px)' },
    { id: 13, before: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_img_4_before_webp.webp', after: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Galler_img_4_after_webp.webp', beforePos: '50% 100%', afterPos: '50% 0%', beforeTransform: 'translateY(2px)' },
    { id: 14, before: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_img_5_before_webp.webp', after: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_img_5_after_webp.webp', beforePos: '50% 100%', afterPos: '50% 80%', beforeTransform: 'scale(1.15) translateY(calc(-8% + 6px))' },
    { id: 15, before: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Galler_img_6_before_webp.webp', after: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_img_6_after_webp.webp', beforePos: '50% 100%', beforeTransform: 'translateY(0px)', afterTransform: 'scale(1.03) translateY(5px)' }
  ],
  2: [
    { id: 4, before: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_img_7_before_webp.webp', after: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_img_7_after_webp.webp', beforeTransform: 'scale(1.03) translateY(-5px)' },
    { id: 5, before: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_img_8_before_webp.webp', after: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_image_8_after_webp.webp', beforePos: '50% 100%', beforeTransform: 'scale(1.05) translateY(-10px)' },
    { id: 6, before: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_img_9_before_webp.webp', after: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_img_9_after_webp.webp', beforeTransform: 'scale(1.03) translateY(-4px)' },
    { id: 16, before: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_img_10_before_webp.webp', after: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_img_10_after_webp.webp', beforeTransform: 'scale(1.08) translateY(-16px)' },
    { id: 17, before: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_img_11_before_webp.webp', after: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_img_11_after_webp.webp' },
    { id: 18, before: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_img_12_before_webp.webp', after: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_img_12_after_webp.webp' }
  ],
  3: [
    { id: 7, before: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_img_13_before_webp.webp', after: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_img_13_after_webp.webp', beforeTransform: 'scale(1.0)', afterPos: '50% calc(50% + 25px)', afterTransform: 'scale(1.03)' },
    { id: 8, before: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_img_14_before_webp.webp', after: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_img_14_after_webp.webp', beforePos: '50% 50%', beforeTransform: 'scale(1.08) translateY(-18px)', afterPos: '50% calc(50% + 12px)', afterTransform: 'scale(1.0)' },
    { id: 9, before: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_img_15_before_webp.webp', after: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_img_15_after_webp.webp' }
  ]
};

const StudioVideo = ({ src, id, activeVideoId, onToggleAudio }) => {
  const isMuted = activeVideoId !== id;
  const videoRef = React.useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <>
      <video 
        ref={videoRef}
        src={src} 
        autoPlay 
        loop 
        muted
        playsInline 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
      />
      <button 
        onClick={(e) => { e.stopPropagation(); onToggleAudio(isMuted ? id : null); }} 
        aria-label={isMuted ? "Unmute" : "Mute"}
        style={{ position: 'absolute', bottom: '20px', right: '20px', background: 'rgba(0,0,0,0.6)', color: '#fff', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10, backdropFilter: 'blur(4px)', transition: 'background 0.3s' }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.8)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.6)'}
      >
        {isMuted ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
        )}
      </button>
    </>
  );
};

const getOverlayContent = (category, index) => {
  if (category === 'Clip In Extensions') {
    const content = [
      { title: 'Seamless Clip-Ins', desc: 'Experience instant glamour with our invisible seamless clip-in extensions. Designed to give you luxurious length and breathtaking volume in minutes without any damage.' },
      { title: '1 Piece to 7 Pieces Set', desc: 'Ultimate versatility for any occasion. Mix and match our premium 1 to 7 pieces clip-in sets to achieve your desired volume and length effortlessly.' },
      { title: 'Buns', desc: 'Achieve an elegant, voluminous bun in seconds. Our high-quality clip-in buns are perfect for a quick, sophisticated updo.' },
      { title: 'Bangs', desc: 'Instantly transform your style with clip-in bangs. A zero-commitment way to add fringe and frame your face beautifully.' },
      { title: 'Ponytail', desc: 'Get that thick, cascading ponytail you have always wanted. Easy to attach and securely wraps for a glamorous, everyday look.' },
      { title: 'Seamless Clip-Ins', desc: 'Our ultra-thin seamless clip-ins lie completely flat against your scalp, offering an undetectable blend and maximum comfort.' },
      { title: '1 Piece to 7 Pieces Set', desc: 'Customize your thickness and length dynamically. Our 1 to 7 piece luxury sets blend flawlessly with your natural hair.' },
      { title: 'Ponytail', desc: 'Combine our luxurious ponytail clip-ins for the ultimate, head-turning volume and breathtaking length.' }
    ];
    return content[index];
  }
  
  if (category === 'Permanent Extensions') {
    const content = [
      { title: 'I-Tip Extensions', desc: 'Achieve seamless volume and 360-degree mobility with our premium I-Tip hair extensions. Perfect for a natural, glueless luxury installation.', path: '/i-tips' },
      { title: 'K-Tip Extensions', desc: 'Experience ultimate discretion with Keratin Bond (K-Tip) extensions. Designed for customized density and long-lasting, natural hair flow.', path: '/k-tips' },
      { title: 'Nano-Tip Extensions', desc: 'The most undetectable extension method. Nano-tips offer a microscopic bond perfect for fine hair, delivering flawless length and volume.', path: '/nano-tips' },
      { title: 'Tape Hair Extensions', desc: 'Transform your look in record time. Our luxury tape-in extensions lay flat against the scalp for a seamless, damage-free, and full-bodied finish.', path: '/tape-hair' },
      { title: 'Weft Extensions', desc: 'Maximum volume with minimal attachments. Hand-tied wefts provide a flawless, cascading look ideal for thick, luxurious hair transformations.', path: '/weft-extensions' },
      { title: 'Feather Extensions', desc: 'Add a unique, bohemian flair to your style. High-quality feather extensions that blend beautifully for a subtle or bold fashion statement.', path: '/feather-extensions' },
      { title: 'Seamless Tape-Ins', desc: 'Our ultra-thin tape extensions provide a comfortable, lightweight feel with incredible durability and a completely natural appearance.', path: '/tape-hair' },
      { title: 'Luxury Wefts', desc: 'Custom-colored and meticulously applied, our premium weft extensions offer unmatched thickness and seamless integration for everyday glamour.', path: '/weft-extensions' }
    ];
    return content[index];
  }

  if (category === 'Toppers') {
    const content = [
      { title: 'Silk Base', desc: 'Achieve the most natural-looking scalp with our premium silk base toppers. Designed for breathability and an undetectable parting line.' },
      { title: 'Mono Base', desc: 'Experience incredible durability and versatile styling. Monofilament base toppers allow multi-directional parting for a flawless, natural appearance.' },
      { title: 'Lace Base', desc: 'Enjoy maximum comfort and a lightweight feel. Our breathable lace base toppers seamlessly integrate with your natural hair for effortless volume.' },
      { title: 'Front Line HD Lace Base', desc: 'The ultimate invisible hairline. HD lace instantly melts into your skin tone, providing the most realistic and undetectable front edge.' },
      { title: 'Silk Base', desc: 'Transform your thinning crown with luxurious volume. Our human hair silk base toppers mimic natural hair growth perfectly for a stunning finish.' },
      { title: 'Mono Base', desc: 'Perfect for everyday wear, our mono base hairpieces offer a secure fit and a realistic scalp appearance that instantly builds your confidence.' },
      { title: 'Lace Base', desc: 'Designed for active lifestyles, these ultra-light lace toppers provide exceptional airflow and an incredibly natural, voluminous hair transformation.' },
      { title: 'Front Line HD Lace Base', desc: 'Flawlessly conceal hair loss with high-definition lace technology. The ultra-sheer material creates an illusion of hair growing directly from your scalp.' }
    ];
    return content[index];
  }

  if (category === 'Wigs') {
    const content = [
      { title: 'Front Lace', desc: 'Discover the ultimate natural hairline with our premium front lace wigs. Designed for a seamless blend, offering undetectable beauty and lightweight comfort.' },
      { title: 'Silk Base', desc: 'Experience the most realistic scalp appearance. Our luxury silk base wigs mimic natural hair growth perfectly, allowing for versatile and confident styling.' },
      { title: 'Full Lace', desc: 'Enjoy 360-degree styling freedom. High-quality full lace wigs offer maximum breathability and the flexibility to wear your hair in stunning updos.' },
      { title: 'Front Lace', desc: 'Instantly transform your look with our meticulously crafted front lace units. Perfect for everyday wear, ensuring a secure fit and flawless hairline integration.' },
      { title: 'Silk Base', desc: 'Elevate your style with exceptional volume and comfort. Silk base construction provides a true-to-life scalp illusion, making your wig completely undetectable.' },
      { title: 'Full Lace', desc: 'The pinnacle of luxury hair replacement. Hand-tied full lace wigs provide unparalleled movement, natural density, and endless parting possibilities.' },
      { title: 'Front Lace', desc: 'Achieve a glamorous, ready-to-wear style instantly. Our front lace designs offer brilliant texture, superior longevity, and a beautifully sheer front edge.' },
      { title: 'Silk Base', desc: 'Say goodbye to visible knots. The multi-layered silk base technology ensures each strand looks as though it is growing directly from your own scalp.' }
    ];
    return content[index];
  }

  return { title: category, desc: `Explore our gorgeous collection of ${category.toLowerCase()} designed for seamless blending and supreme comfort.` };
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('Transformations');
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animatingState, setAnimatingState] = useState(null); // 'next' or 'prev'
  const [outgoingPage, setOutgoingPage] = useState(null);
  const [shouldPreloadAll, setShouldPreloadAll] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState(null);
  
  const navigate = useNavigate();
  const location = useLocation();

  const handleBookClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
      let attempts = 0;
      const checkAndScroll = setInterval(() => {
        const element = document.getElementById('contact-form-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          clearInterval(checkAndScroll);
        }
        attempts++;
        if (attempts > 20) clearInterval(checkAndScroll);
      }, 100);
    } else {
      const element = document.getElementById('contact-form-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleContactClick = () => {
    window.open('https://wa.me/919566662642?text=Hi%20Lockzie%20Hair!%20I%20am%20interested%20in%20your%20services.%20Could%20you%20please%20share%20more%20details%3F', '_blank');
  };

  useEffect(() => {
    // Only scroll to top if this is a new navigation (location key changed)
    const currentKey = sessionStorage.getItem('galleryLocationKey');
    if (currentKey !== location.key) {
      window.scrollTo(0, 0);
      sessionStorage.setItem('galleryLocationKey', location.key);
    }
    
    // Aggressively preload all other images after a 2-second delay
    // This ensures the first page loads instantly without network saturation,
    // but by the time the user clicks 'next', everything is cached.
    const timer = setTimeout(() => {
      setShouldPreloadAll(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  const handlePageChange = (pageNum) => {
    if (pageNum === currentPage || isAnimating) return;
    
    const direction = pageNum > currentPage ? 'next' : 'prev';
    
    setIsAnimating(true);
    setOutgoingPage(currentPage);
    setAnimatingState(direction);
    setCurrentPage(pageNum);

    setTimeout(() => {
      setOutgoingPage(null);
      setAnimatingState(null);
      setIsAnimating(false);
    }, 700);
  };

  const currentTransformations = pagesData[currentPage] || pagesData[1];
  const outgoingTransformations = outgoingPage ? pagesData[outgoingPage] : [];

  return (
    <div className="gallery-page">
      <Navbar forceScrolled={true} />
      
      <div className="gallery-hero-section">
        <h1 className="gallery-hero-title">Gallery</h1>
      </div>
      
      <div className="gallery-content-section">
        <div className="gallery-categories-label">CATEGORIES</div>
        <div className="gallery-categories-container">
          {categories.map((category) => (
            <button
              key={category}
              className={`gallery-category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="gallery-dynamic-content">
          {activeCategory === 'Transformations' && (
            <div className="gallery-transformations-view fade-in-animation">
              <div className="gallery-carousel-viewport">
                {outgoingPage && (
            <div className={`gallery-images-grid outgoing ${animatingState}`}>
              {outgoingTransformations.map((item) => (
                <div key={item.id} className="gallery-card-wrapper">
                  <GallerySliderCard before={item.before} after={item.after} beforePos={item.beforePos} afterPos={item.afterPos} beforeTransform={item.beforeTransform} afterTransform={item.afterTransform} />
                </div>
              ))}
            </div>
          )}

          <div className={`gallery-images-grid ${animatingState ? `incoming ${animatingState}` : ''}`}>
            {currentTransformations.map((item) => (
              <div key={item.id} className="gallery-card-wrapper">
                <GallerySliderCard before={item.before} after={item.after} beforePos={item.beforePos} afterPos={item.afterPos} beforeTransform={item.beforeTransform} afterTransform={item.afterTransform} />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            className={`gallery-nav-arrow left-arrow ${currentPage === 1 ? 'disabled' : ''}`}
            onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
            aria-label="Previous page"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          
          <button 
            className={`gallery-nav-arrow right-arrow ${currentPage === Object.keys(pagesData).length ? 'disabled' : ''}`}
            onClick={() => currentPage < Object.keys(pagesData).length && handlePageChange(currentPage + 1)}
            aria-label="Next page"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>

              {/* Pagination */}
              <div className="gallery-pagination">
                {Object.keys(pagesData).map(Number).map(num => (
                  <div 
                    key={num} 
                    className={`pagination-dot ${num === currentPage ? 'active' : ''}`}
                    onClick={() => handlePageChange(num)}
                  >
                    {num}
                  </div>
                ))}
              </div>
            </div>
          )}

          {['Permanent Extensions', 'Clip In Extensions', 'Toppers', 'Wigs'].includes(activeCategory) && (
            <div key={activeCategory} className="gallery-permanent-extensions-view fade-in-animation">
              <div className="pe-grid-container">
                {(activeCategory === 'Permanent Extensions' ? [
                  "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_permanent_extension_i_tips_webp.webp')",
                  "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_permanent_extension_k_tips_2_webp.webp')",
                  "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_permanent_extension_nano_tips_webp.webp')",
                  "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/Tape_in_hair_extensions_webp.webp')",
                  "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_permanent_extension_weft_hair_webp.webp')",
                  "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1788951877/Feather_extesnions_vishnu_priya_new_2_webp.webp')",
                  "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/gallery_permanent_extensions_seamless_tape-ins_img_webp.webp')",
                  "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_permanent_Luxury_weft_hair_webp.webp')"
                ] : activeCategory === 'Clip In Extensions' ? [
                  "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/seamless_tape-ins_webp.webp')",
                  "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_page_seamless_clipins_section_1_Piece_to_7_Pieces_Set_webp.webp')",
                  "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_page_seamless_clipins_buns_1_webp.webp')",
                  "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_page_seamless_clipin_extension_section_bangs_webp.webp')",
                  "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_page_seamless_clipin_ponytail_1_portrait_view_webp.webp')",
                  "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1788951879/Seamless_clipins_streak_vishnu_priya_new_4_webp.webp')",
                  "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_page_seamless_clipins_section_Piece_to_7_Pieces_Set_webp.webp')",
                  "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_page_seamless_extension_section_pony_tail_webp.webp')"
                ] : activeCategory === 'Toppers' ? [
                  "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_page_toppers_section_slik_base_1_webp.webp')",
                  "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/ChatGPT_Image_Aug_26_2026_02_48_06_PM.webp')",
                  "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_page_topper_section_lace_base_1_webp.webp')",
                  "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_page_toppers_section_front_hairline_1_webp.webp')",
                  "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/gallery_page_topper_section_silkebase_2_webp.webp')",
                  "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1788951881/Mono_base_topper_vishnu_priya_new_2_webp.webp')",
                  "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_page_toppers_section_lace_base_2_webp.webp')",
                  "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/gallery_page_toppers_section_frontline_2.0_webp.webp')"
                ] : [
                  "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_page_wigs_front_lace_wig_1_webp.webp')",
                  "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/gallery_page_wigs_silkbase_2_webp.webp')",
                  "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/gallery_page_wigs_ection_full_lace_1_landscape_webp.webp')",
                  "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_page_wig_section_front_lace_2_webp.webp')",
                  "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/galler_page_wigs_section_silkbase_2_portrait_webp.webp')",
                  "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/Gallery_page_wigs_section_full_lace2_webp.webp')",
                  "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/gallery_page_wigs_section_front_lace_3_webp.webp')",
                  "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/gallery_page_wigs_section_silkbase3_webp.webp')"
                ]).map((bg, idx) => {
                  const content = getOverlayContent(activeCategory, idx);
                  
                  let customStyle = { backgroundImage: bg };
                  if (activeCategory === 'Permanent Extensions') {
                    if (idx === 1) { // K-Tip
                      customStyle.backgroundPosition = '25% center';
                    } else if (idx === 5) { // Feather Extensions
                      customStyle.backgroundPosition = 'center 60%';
                    }
                    customStyle.cursor = 'pointer';
                  } else if (activeCategory === 'Clip In Extensions') {
                    if (idx === 0) {
                      customStyle.backgroundPosition = 'center -30px';
                    } else if (idx === 1) {
                      customStyle.backgroundSize = 'contain';
                      customStyle.backgroundRepeat = 'no-repeat';
                      customStyle.backgroundPosition = 'center';
                      customStyle.backgroundColor = '#FFFFFF';
                    } else if (idx === 2) {
                      customStyle.backgroundPosition = '65% center';
                    } else if (idx === 5) {
                      customStyle.backgroundPosition = 'center -10px';
                    } else if (idx === 7) {
                      customStyle.backgroundPosition = 'center -19px';
                    }
                  } else if (activeCategory === 'Toppers') {
                    if (idx === 0) {
                      customStyle.backgroundPosition = 'center 85%';
                    } else if (idx === 1) {
                      customStyle.backgroundPosition = 'center 2px';
                    } else if (idx === 3) {
                      customStyle.backgroundPosition = 'center calc(15% - 6px)';
                    } else if (idx === 4) {
                      customStyle.backgroundPosition = 'calc(50% + 30px) center';
                    }
                  } else if (activeCategory === 'Wigs') {
                    if (idx === 0) {
                      customStyle.backgroundPosition = 'center calc(15% - 8px)';
                    } else if (idx === 1) {
                      customStyle.backgroundPosition = 'center 15%';
                    } else if (idx === 3) {
                      customStyle.backgroundPosition = 'center calc(50% + 50px)';
                    } else if (idx === 4) {
                      customStyle.backgroundPosition = 'calc(50% - 12px) center';
                    } else if (idx === 5) {
                      customStyle.backgroundPosition = 'center calc(50% + 24px)';
                    }
                  }
                  
                  return (
                    <div 
                      key={idx} 
                      className={`pe-box pe-box-${idx + 1}`} 
                      style={customStyle}
                      onClick={() => {
                        if (content.path) {
                          navigate(content.path);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                      }}
                    >
                      <div className="pe-box-overlay">
                        <h3 className="pe-box-title">{content.title}</h3>
                        <p className="pe-box-desc">{content.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeCategory === 'Studio' && (
            <div key="Studio" className="gallery-permanent-extensions-view fade-in-animation">
              <div className="studio-grid-container">
                <div className="pe-box studio-box-1" style={{ backgroundImage: "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1788527787/studio_image_1.webp')" }}></div>
                <div className="pe-box studio-box-2" style={{ backgroundImage: "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1788527788/studio_image_2.webp')" }}></div>
                <div className="pe-box studio-box-3">
                  <StudioVideo src="https://res.cloudinary.com/r0vgotvj/video/upload/v1788527784/studio_Horizontal_video-1.mp4" id={1} activeVideoId={activeVideoId} onToggleAudio={setActiveVideoId} />
                </div>
                <div className="pe-box studio-box-4">
                  <StudioVideo src="https://res.cloudinary.com/r0vgotvj/video/upload/v1788527810/studio_Vertical_vdieo-1.mp4" id={2} activeVideoId={activeVideoId} onToggleAudio={setActiveVideoId} />
                </div>
                <div className="pe-box studio-box-5" style={{ backgroundImage: "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1788527717/studio_image_3.webp')" }}></div>
                <div className="pe-box studio-box-6" style={{ backgroundImage: "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1788527719/studio_image_4.webp')" }}></div>
                <div className="pe-box studio-box-7" style={{ backgroundImage: "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1788527721/studio_image_5.webp')" }}></div>
                <div className="pe-box studio-box-8" style={{ backgroundImage: "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1788527723/studio_image_6.webp')" }}></div>
                <div className="pe-box studio-box-9" style={{ backgroundImage: "url('https://res.cloudinary.com/r0vgotvj/image/upload/v1788527734/studio_image_7.webp')" }}></div>
              </div>
            </div>
          )}
        </div>
        
        {/* CTA Section */}
        <div className="gallery-cta-container">
          <div className="gallery-cta-content">
            <h2 className="gallery-cta-title">
              Ready for Your Own<br/>
              <i>Hair Transformation?</i>
            </h2>
            <p className="gallery-cta-subtitle">
              Book a personalized consultation with our master stylists to discover the perfect extensions for your lifestyle.
            </p>
            <div className="gallery-cta-buttons">
              <button className="gallery-cta-btn primary" onClick={handleBookClick}><span className="gallery-btn-text">Book Consultation</span></button>
              <button className="gallery-cta-btn secondary" onClick={handleContactClick}><span className="gallery-btn-text">Contact Us</span></button>
            </div>
          </div>
          <div className="gallery-cta-image-wrapper">
            <div 
              className="gallery-cta-image" 
              style={{ backgroundImage: `linear-gradient(90deg, #0A0A0A 0%, rgba(10,10,10,0.95) 15%, rgba(10,10,10,0) 100%), url('https://res.cloudinary.com/r0vgotvj/image/upload/v1/42793b7d7549c762e6f034ad81b1d34bb1aeff45.jpg')` }}
            ></div>
          </div>
        </div>

      </div>
      
      {/* Delayed aggressive preload for all pages to ensure no black boxes on rapid clicks */}
      <div style={{ display: 'none' }}>
        {shouldPreloadAll && Object.values(pagesData).flat().map((item, index) => (
          <React.Fragment key={`preload-all-${index}`}>
            <img src={item.before} alt="preload before" decoding="async" loading="eager" />
            <img src={item.after} alt="preload after" decoding="async" loading="eager" />
          </React.Fragment>
        ))}
      </div>
      
    </div>
  );
};

export default Gallery;
