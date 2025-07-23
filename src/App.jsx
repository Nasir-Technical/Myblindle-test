import React from 'react'
import Hero from './components/Hero'
import ServiceSection from './components/ServiceSection'
import AboutSection from './components/AboutSection'
import InstallationSection from './components/InstallationSection'
import CTASection from './components/CTASection'
import TestimonialsSection from './components/TestimonialsSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Hero />
      <ServiceSection />
      <AboutSection />
      <InstallationSection />
      <CTASection />
      <TestimonialsSection />
      <Footer />
    </>
  )
}

export default App