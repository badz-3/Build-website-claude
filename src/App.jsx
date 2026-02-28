import { useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ClientLogos from './components/ClientLogos'
import ServicesSection from './components/ServicesSection'
import StatsSection from './components/StatsSection'
import PortfolioSection from './components/PortfolioSection'
import ProcessSection from './components/ProcessSection'
import TechStack from './components/TechStack'
import TestimonialsSection from './components/TestimonialsSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('js-ready')
  }, [])

  return (
    <>
      <Navbar />
      <HeroSection />
      <ClientLogos />
      <ServicesSection />
      <StatsSection />
      <PortfolioSection />
      <ProcessSection />
      <TechStack />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </>
  )
}
