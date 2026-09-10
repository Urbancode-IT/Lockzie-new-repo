import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './Blogs.css';

const Blogs = () => {
  const [visibleArticles, setVisibleArticles] = useState(6);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredBlog = {
    id: 1,
    title: 'The Ultimate Guide to Choosing the Right Hair Extensions for Your Hair Type',
    date: 'July 1, 2026',
    description: 'Embark on a journey with us as we delve into the realms of luxury hair extensions, share styling insights, and explore the transformative power of premium quality hair.',
    image: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/blogs_ultimate_img_1_webp.webp',
  };

  const sideBlogs = [
    {
      id: 2,
      title: 'How to Properly Care for Your Extensions to Maximize Lifespan',
      date: 'July 7, 2026',
      image: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/blogs_properly_care_img_2_webp.webp',
    },
    {
      id: 3,
      title: 'Top 5 Trending Extension Styles for the Upcoming Season',
      date: 'July 14, 2026',
      image: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/blogs_top_styles_img_3_webp.webp',
    },
    {
      id: 4,
      title: 'Behind the Scenes: Sourcing Our Premium Cuticle Intact Hair',
      date: 'July 20, 2026',
      image: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/blogs_behind_img4_webp.webp',
    },
  ];

  const latestArticles = [
    {
      id: 5,
      title: 'Empowering Women: The Confidence Boost of Long Hair',
      date: 'July 27, 2026',
      image: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/blogs_empowering_img_5_webp.webp',
    },
    {
      id: 6,
      title: 'Hair Extension Do\'s and Don\'ts: Expert Maintenance Advice',
      date: 'August 1, 2026',
      image: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Blogs_page_card_6_hero_section_image_webp.webp',
    },
    {
      id: 7,
      title: 'Hair Toppers: The Ultimate Solution for Thinning Hair and Seamless Volume',
      date: 'August 3, 2026',
      image: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1788951864/Silk_base_topper_vishnu_priya_new_3_webp.webp',
      imagePosition: 'center 15%',
    },
    {
      id: 8,
      title: 'Handling Complaints & Maintenance: Expert Advice from Lockzie Founder',
      date: 'August 7, 2026',
      image: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/Blogs_page_card_8_image_webp.webp',
    },
    {
      id: 9,
      title: 'The Impact of Innovative Color Matching Techniques',
      date: 'August 9, 2026',
      image: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/blog_innovative_color_img_9_webp.webp',
    },
    {
      id: 10,
      title: 'Healthy Hair Habits for a Busy Lifestyle with Extensions',
      date: 'August 11, 2026',
      image: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/blog_healthy_hair_img_10_webp.webp',
    },
    {
      id: 11,
      title: 'The Ultimate Maintenance Routine for Seamless Tape In Extensions',
      date: 'August 13, 2026',
      image: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/blog_tape_in_img_11_webp.webp',
    },
    {
      id: 12,
      title: 'Why Human Hair Extensions Outperform Synthetic Alternatives',
      date: 'August 15, 2026',
      image: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/blog_why_human_hair_img_12_webp.webp',
    },
    {
      id: 13,
      title: 'A Client Story: Regaining Confidence with Lockzie Extensions',
      date: 'August 17, 2026',
      image: 'https://res.cloudinary.com/r0vgotvj/image/upload/v1/blog_client_story_img_13_webp.webp',
    },
  ];

  return (
    <div className="blogs-page">
      <Navbar forceScrolled={true} />
      
      <div className="blogs-container">
        {/* Section 1: Insightful Blog */}
        <section className="insightful-section">
          <div className="section-header center">
            <h2>Our Insightful <span>Blog</span></h2>
            <p className="subtitle">
              Discover tips, trends, and expert advice to keep your hair extensions looking flawless and natural every single day.
            </p>
          </div>
          
          <div className="insightful-content">
            <div className="featured-card" onClick={() => navigate(`/blogs/${featuredBlog.id}`)} style={{ cursor: 'pointer' }}>
              <img src={featuredBlog.image} alt={featuredBlog.title} className="featured-img" />
              <div className="featured-overlay">
                <h3>{featuredBlog.title}</h3>
                <span className="date">🕒 {featuredBlog.date}</span>
                <p>{featuredBlog.description}</p>
                <Link to={`/blogs/${featuredBlog.id}`} className="read-more" style={{ marginTop: '16px', display: 'inline-block' }} onClick={(e) => e.stopPropagation()}>Read More &rarr;</Link>
              </div>
            </div>
            
            <div className="side-cards">
              {sideBlogs.map(blog => (
                <div className="side-card" key={blog.id} onClick={() => navigate(`/blogs/${blog.id}`)} style={{ cursor: 'pointer' }}>
                  <img src={blog.image} alt={blog.title} className="side-img" />
                  <div className="side-text">
                    <h4>{blog.title}</h4>
                    <span className="date">🕒 {blog.date}</span>
                    <Link to={`/blogs/${blog.id}`} className="read-more" onClick={(e) => e.stopPropagation()}>Read More &rarr;</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Latest Articles */}
        <section className="latest-articles-section">
          <div className="latest-header">
            <div className="latest-title">
              <h2>Explore Our Latest <span>Articles</span></h2>
            </div>
            <div className="latest-subtitle">
              <p>Stay updated with our newest guides, salon highlights, and maintenance routines designed exclusively for luxury extension wearers.</p>
            </div>
          </div>
          
          <div className="articles-grid">
            {latestArticles.slice(0, visibleArticles).map(article => (
              <div className="article-card" key={article.id} onClick={() => navigate(`/blogs/${article.id}`)} style={{ cursor: 'pointer' }}>
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="article-img" 
                  style={article.imagePosition ? { objectPosition: article.imagePosition } : {}}
                />
                <div className="article-content">
                  <h4>{article.title}</h4>
                  <span className="date">🕒 {article.date}</span>
                  <Link to={`/blogs/${article.id}`} className="read-more" onClick={(e) => e.stopPropagation()}>Read More &rarr;</Link>
                </div>
              </div>
            ))}
          </div>
          
          {visibleArticles < latestArticles.length && (
            <div className="view-all-container">
              <button className="view-all-btn" onClick={() => setVisibleArticles(latestArticles.length)}>View all articles</button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Blogs;
