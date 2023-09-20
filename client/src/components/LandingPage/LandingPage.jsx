import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Content from './components/Content'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'

const LandingPage = () => {
  return (
    <div className='font-[Urbanist] bg-gray-900 px-20'>
      <Hero/>
      <Features/>
      <Content/>
      <Testimonials/>
      <CTA/>
      <Footer/>
      
    </div>
  )
}

export default LandingPage
