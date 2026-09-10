import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../../components/Hero/Hero'
import Story from '../../components/Story/Story'
import Mission from '../../components/Mission/Mission'
import Services from '../../components/Services/Services'
import Consultation from '../../components/Consultation/Consultation'
import Transformation from '../../components/Transformation/Transformation'
import Boutique from '../../components/Boutique/Boutique'
import Reviews from '../../components/Reviews/Reviews'
import VideoStories from '../../components/VideoStories/VideoStories'
import WhatOurClientSays from '../../components/WhatOurClientSays/WhatOurClientSays'
import TrendingInsights from '../../components/TrendingInsights/TrendingInsights'
import Academy from '../../components/Academy/Academy'
import FAQ from '../../components/FAQ/FAQ'
import ContactForm from '../../components/ContactForm/ContactForm'

function Home() {
  const location = useLocation();

  useEffect(() => {
    // Only scroll to top if this is a new navigation (location key changed)
    const currentKey = sessionStorage.getItem('homeLocationKey');
    if (currentKey !== location.key) {
      window.scrollTo(0, 0);
      sessionStorage.setItem('homeLocationKey', location.key);
    }
  }, [location.key]);

  return (
    <>
      <Hero />
      <Story />
      <Mission />
      <Services />
      <Consultation />
      <Transformation />
      <Boutique />
      <Reviews />
      <VideoStories />
      <WhatOurClientSays />
      <TrendingInsights />
      <Academy />
      <FAQ />
      <ContactForm />
    </>
  )
}

export default Home
