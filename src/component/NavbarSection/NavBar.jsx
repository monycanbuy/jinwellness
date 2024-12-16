import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal'; // Import ScrollReveal
import './NavBar.css';

const NavBar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleMenuClick = () => {
    setIsNavVisible(!isNavVisible);
  };

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  useEffect(() => {
    // Initialize ScrollReveal only after component mounts
    const sr = ScrollReveal({
      distance: '60px',
      duration: 2500,
      delay: 400,
      reset: false,
    });

    // Apply ScrollReveal to NavBar-specific elements
    sr.reveal('.nav-container .logo', { delay: 200, origin: 'left' });
    sr.reveal('.navlist li', { delay: 300, origin: 'top', interval: 200 });
  }, []); // Empty dependency array ensures this runs only once

  return (
    <nav>
      <div className="container nav-container">
        <a href="#home" className="logo">
          <div>
            Jin<span>Wellness</span>
          </div>
          <div>Dedicated to your health & wealth</div>
        </a>
        <ul className={`navlist ${isNavVisible ? 'active' : ''}`}>
          <li>
            <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="active">home</a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleScroll(e, '#about')}>about</a>
          </li>
          <li>
            <a href="#service" onClick={(e) => handleScroll(e, '#service')}>service</a>
          </li>
          <li>
            <a href="#shop" onClick={(e) => handleScroll(e, '#shop')}>shop</a>
          </li>
          <li>
            <a href="#blog" onClick={(e) => handleScroll(e, '#blog')}>blog</a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>contact</a>
          </li>
        </ul>
        <div className="nav-icons">
          <div className="menu-btn" onClick={handleMenuClick}>
            <span className={`lnr ${isNavVisible ? 'lnr-chevron-up' : 'lnr-menu-circle'}`}></span>
          </div>
          {/* <span className="lnr lnr-heart"></span>
          <span className="lnr lnr-cart"></span> */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
