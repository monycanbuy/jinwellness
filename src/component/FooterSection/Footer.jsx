import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';
import './Footer.css'

const Footer = () => {

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const sr = ScrollReveal({
      distance: '60px',
      duration: 2500,
      delay: 400,
      reset: false,
    });

    sr.reveal('.footer-container ', { delay: 200, origin: 'top' });
  }, []);
  return (
    <section className="footer" id="footer">
      <div className="container footer-container">
        <div className="box">
          <a href="#home" className="logo">
            <div>Jin<span>Wellness</span></div>
            <div>Dedicated to your health & wealth</div>
          </a>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, perspiciatis? Maxime.</p>
        </div>
        <div className="box">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="" onClick={(e) => handleScroll(e, '#home')}>Home</a></li>
            <li><a href="" onClick={(e) => handleScroll(e, '#about')}>About</a></li>
            <li><a href="" onClick={(e) => handleScroll(e, '#service')}>Services</a></li>
            <li><a href="" onClick={(e) => handleScroll(e, '#shop')}>Shop</a></li>
            <li><a href="" onClick={(e) => handleScroll(e, '#blog')}>Blog</a></li>
            <li><a href="" onClick={(e) => handleScroll(e, '#contact')}>Contact</a></li>
          </ul>
        </div>
        <div className="box">
          <h4>Newsletter</h4>
          <p>Stay update with our mind blowing services and discounts</p>
          <form action="" className="newsletter">
            <input type="email" name='email' id='' placeholder='Enter Email' />
            <button type='submit' className="btn"><span className="lnr lnr-arrow-right"></span></button>
          </form>
        </div>
        <div className="box">
          <h4>Follow us</h4>
          <p>Follow us on social media platforms.</p>
          <div className="social">
            <a href="https://www.facebook.com/share/iyPqoxHPyVBGx3Zy/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/jinwellnessspa?igsh=dXozN2xreGl3bXl2&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://jinwellnessspa.com/#" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Footer
