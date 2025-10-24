import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import Footer from '../components/Footer'
import About from '../components/About'
import Contact from '../components/Contact'
import Projects from '../components/Projects'

export default function HomePage() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Services/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}
