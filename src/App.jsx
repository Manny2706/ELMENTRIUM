import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/navbar.jsx'
import Hero from './components/hero.jsx'
import ProgressSection from './components/ProgressSection.jsx'
import OfferSection from './components/offersection.jsx'
import TestimonialsSection from './components/testimonial.jsx'
import Footer from './components/footer.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <ProgressSection/>
    <OfferSection/>
    <TestimonialsSection/>
    <Footer/>
    </>
  )
}

export default App
