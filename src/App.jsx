import { useState } from 'react'
//import './App.css'
import NavBar from './component/NavbarSection/NavBar'
import HeroSliderSection from './component/HomeSection/HeroSliderSection'

import Service from './component/ServiceSection/Service'
import Shop from './component/ShopSection/Shop'
import About from './component/AboutSection/About'
import Testimonial from './component/TestimonialSection/Testimonial'
import Expert from './component/ExperSection/Expert'
import Blog from './component/BlogSection/Blog'
import Contact from './component/ContactSection/Contact'
import Footer from './component/FooterSection/Footer'
import Copyright from './component/CopyrightSection/Copyright'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
      <div id="home">
        <HeroSliderSection />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="service">
        <Service />
      </div>
      <div id="shop">
        <Shop />
      </div>
      <div id="testimonial">
        <Testimonial />
      </div>
      <div id="expert">
        <Expert />
      </div>
      <div id="blog">
        <Blog />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
      <Copyright />
    </>
  )
}

export default App
