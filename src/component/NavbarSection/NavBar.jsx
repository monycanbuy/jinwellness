import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal'; // Import ScrollReveal
import './NavBar.css';

const NavBar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleMenuClick = () => {
    setIsNavVisible(!isNavVisible);
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
    // sr.reveal('.nav-icons span', { delay: 400, origin: 'bottom', interval: 200 });
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
            <a href="#home" className="active">home</a>
          </li>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#service">service</a>
          </li>
          <li>
            <a href="#shop">shop</a>
          </li>
          <li>
            <a href="#contact">contact</a>
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
