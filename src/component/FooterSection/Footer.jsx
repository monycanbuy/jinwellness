import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';
import './Footer.css'

const Footer = () => {

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
                    <li><a href="">Services</a></li>
                    <li><a href="">Privacy Ploicy</a></li>
                    <li><a href="">Terms & Conditions</a></li>
                    <li><a href="">Bookings</a></li> 
                    <li><a href="">Discounts</a></li>
                </ul>
              </div>
              <div className="box">
                <h4>Newsletter</h4>
                <p>Stay update with our mind blowing services and discounts</p>
                <form action="" className="newsletter">
                    <input type="email" name='email' id='' placeholder='Enter Email'/>
                    <button type='submit' className="btn"><span className="lnr lnr-arrow-right"></span></button>
                </form>
              </div>
              <div className="box">
                <h4>Follow us</h4>
                <p>Follow us on social media platforms.</p>
                <div className="social">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-linkedin"></i>
                </div>
              </div>
          </div>
      </section>
  )
}

export default Footer
