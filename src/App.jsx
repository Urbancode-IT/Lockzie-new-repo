import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Home from './pages/Home/Home'
import Blogs from './pages/Blogs/Blogs'
import BlogDetail from './pages/BlogDetail/BlogDetail'
import HairCut from './pages/HairCut/HairCut'
import Waxing from './pages/Waxing/Waxing'
import HairStyling from './pages/HairStyling/HairStyling'
import Manicure from './pages/Manicure/Manicure'
import HairColouring from './pages/HairColouring/HairColouring'
import Pedicure from './pages/Pedicure/Pedicure'
import TexturedHair from './pages/TexturedHair/TexturedHair'
import KoreanSkin from './pages/KoreanSkin/KoreanSkin'
import HairExtensionsMaintenance from './pages/HairExtensionsMaintenance/HairExtensionsMaintenance'
import HairGrow from './pages/HairGrow/HairGrow'
import PamperTheSkin from './pages/PamperTheSkin/PamperTheSkin'
import GlossyLips from './pages/GlossyLips/GlossyLips'
import GlossingServices from './pages/GlossingServices/GlossingServices'
import About from './pages/About/About'
import Founder from './pages/Founder/Founder'
import ContactUs from './pages/ContactUs/ContactUs'
import Gallery from './pages/Gallery/Gallery'
import Academy from './pages/Academy/Academy'
import SilkBase from './pages/SilkBase/SilkBase'
import ITips from './pages/ITips/ITips'
import KTips from './pages/KTips/KTips'
import NanoTips from './pages/NanoTips/NanoTips'
import TapeHair from './pages/TapeHair/TapeHair'
import WeftExtensions from './pages/WeftExtensions/WeftExtensions'
import FeatherExtensions from './pages/FeatherExtensions/FeatherExtensions'
import ClipInSets from './pages/ClipInSets/ClipInSets'
import Buns from './pages/Buns/Buns'
import Bangs from './pages/Bangs/Bangs'
import Ponytail from './pages/Ponytail/Ponytail'
import SeamlessClipIns from './pages/SeamlessClipIns/SeamlessClipIns'
import MonoBase from './pages/MonoBase/MonoBase'
import LaceBase from './pages/LaceBase/LaceBase'
import HDLaceBase from './pages/HDLaceBase/HDLaceBase'
import FrontLaceWigs from './pages/FrontLaceWigs/FrontLaceWigs'
import SilkBaseWigs from './pages/SilkBaseWigs/SilkBaseWigs'
import FullLaceWigs from './pages/FullLaceWigs/FullLaceWigs'
import Terms from './pages/Terms/Terms'
import Privacy from './pages/Privacy/Privacy'
import Footer from './components/Footer/Footer'
import FloatingWidgets from './components/FloatingWidgets/FloatingWidgets'
import DiscountPopup from './components/DiscountPopup/DiscountPopup'
import RetailDiscountPopup from './components/RetailDiscountPopup/RetailDiscountPopup'
import './App.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/hair-cut" element={<HairCut />} />
        <Route path="/waxing" element={<Waxing />} />
        <Route path="/hair-styling" element={<HairStyling />} />
        <Route path="/manicure" element={<Manicure />} />
        <Route path="/hair-colouring" element={<HairColouring />} />
        <Route path="/pedicure" element={<Pedicure />} />
        <Route path="/textured-hair" element={<TexturedHair />} />
        <Route path="/korean-skin" element={<KoreanSkin />} />
        <Route path="/hair-extensions-maintenance" element={<HairExtensionsMaintenance />} />
        <Route path="/hair-grow" element={<HairGrow />} />
        <Route path="/pamper-the-skin" element={<PamperTheSkin />} />
        <Route path="/glossy-lips" element={<GlossyLips />} />
        <Route path="/glossing-services" element={<GlossingServices />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/silk-base" element={<SilkBase />} />
        <Route path="/i-tips" element={<ITips />} />
        <Route path="/k-tips" element={<KTips />} />
        <Route path="/nano-tips" element={<NanoTips />} />
        <Route path="/tape-hair" element={<TapeHair />} />
        <Route path="/weft-extensions" element={<WeftExtensions />} />
        <Route path="/feather-extensions" element={<FeatherExtensions />} />
        <Route path="/clip-in-sets" element={<ClipInSets />} />
        <Route path="/buns" element={<Buns />} />
        <Route path="/bangs" element={<Bangs />} />
        <Route path="/ponytail" element={<Ponytail />} />
        <Route path="/seamless-clip-ins" element={<SeamlessClipIns />} />
        <Route path="/mono-base" element={<MonoBase />} />
        <Route path="/lace-base" element={<LaceBase />} />
        <Route path="/hd-lace-base" element={<HDLaceBase />} />
        <Route path="/front-lace-wigs" element={<FrontLaceWigs />} />
        <Route path="/silk-base-wigs" element={<SilkBaseWigs />} />
        <Route path="/full-lace-wigs" element={<FullLaceWigs />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
      <FloatingWidgets />
      <DiscountPopup />
      <RetailDiscountPopup />
    </div>
  )
}

export default App
