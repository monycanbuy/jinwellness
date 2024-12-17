import React, { useEffect } from 'react';
import './About.css';
import ScrollReveal from 'scrollreveal';
import { iconsImgs } from '../../Utils/image';

const About = () => {

    useEffect(() => {
        const sr = ScrollReveal({
          distance: '60px',
          duration: 2500,
          delay: 400,
          reset: false,
        });
    
        sr.reveal('.about-container .left', { delay: 200, origin: 'left' });
        sr.reveal('.about-container .right', { delay: 400, origin: 'right' });
      }, []);
  return (
    <section className='about' id='about'>
        <div className="container about-container">
            <div className="left">
                <div className="content">
                    <div className="title">
                        <h2>Home of professional's</h2>
                    </div>
                    <p>Indulge in the ultimate relaxation experience with our expert massage therapy designed to rejuvenate your mind, body, and soul. At Jinwellness Spa, we blend ancient techniques with modern practices to deliver customized treatments to meet your need. Whether you're seeking relief from muscle tension, improved circulation, or a moment of pure tranquility,  each massage is crafted to melt away stress and leave you feeling refreshed, restored, and revitalized.</p>
                    <button className='btn'>Learn more</button>
                </div>
            </div>
            <div className="right">
                <div className="image">
                    <img src={iconsImgs.logos}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
