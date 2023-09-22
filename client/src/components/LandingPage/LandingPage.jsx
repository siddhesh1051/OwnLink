import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Content from './components/Content'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import Content2 from './components/Content2'
import Pricing from './components/Pricing'

const LandingPage = () => {
  return (
    <div className='font-[Urbanist] bg-[#0A101E] '>

      <Hero/>
      <Features/>
      <Content2/>
      <Content/>
      <Testimonials/>
      <Pricing />
      <CTA/>
      <Footer/>

      
    </div>
  )
}

export default LandingPage
