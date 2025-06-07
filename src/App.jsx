import React from 'react'
import Header from './components/Header'
import HomeHero from './components/HomeHero'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import HomeCTA from './components/homeCTA'
import FooterDefault from './components/FooterDefault'

const App = () => {
  return (
    <>
      <Header />,
      <HomeHero title='We Build Modern Websites' subtitle='SmartWeb helps you grow your business online with sleek, responsive, and user-friendly websites.' />
      <About />
      <Services />
      <Testimonials />
      <HomeCTA />
      <FooterDefault />
      
    </>
    
  )
}
export default App
